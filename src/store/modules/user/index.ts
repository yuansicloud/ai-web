import { defineStore } from 'pinia'
import type { UserInfo, UserState } from './helper'
import { defaultSetting, getLocalState, setLocalState } from './helper'
import { getUserInfo, setUserInfo } from '@/api/user'

export const useUserStore = defineStore('user-store', {
  state: (): UserState => ({
    // user info
    userInfo: null,
  }),
  getters: {
    getUserInfo(state): UserInfo {
      return state.userInfo || getLocalState<UserInfo>() || { ...defaultSetting().userInfo }
    },
  },
  actions: {
    async getUserInfoAction() {
      try {
        const userInfo = await getUserInfo()
        this.updateUserInfo(userInfo)
      }
      catch (error) {
        console.error('获取用户信息错误：', error)
      }
    },
    // 新增的方法
    async setUserInformation(userInfo: UserInfo) {
      try {
        const updatedUserInfo = await setUserInfo(userInfo)
        console.error('更新用户信息：', updatedUserInfo)
        this.updateUserInfo(updatedUserInfo)
      }
      catch (error) {
        console.error('更新用户信息错误：', error)
      }
    },
    async updateUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
      this.recordState()
    },

    resetUserInfo() {
      this.userInfo = { ...defaultSetting().userInfo }
      this.recordState()
    },

    recordState() {
      setLocalState(this.$state)
    },
  },
})
