import { defineStore } from 'pinia'
import type { UserInfo, UserState } from './helper'
import { defaultSetting, getLocalState, setLocalState } from './helper'
import { getUserInfo } from '@/api/user'
export const useUserStore = defineStore('user-store', {
  state: (): UserState => getLocalState(),
  actions: {
    async getUserInfo() {
      try {
        const userInfo = await getUserInfo()
        this.updateUserInfo(userInfo)
      }
      catch (error) {
        console.error('获取用户信息错误：', error)
      }
    },
    updateUserInfo(userInfo: Partial<UserInfo>) {
      this.userInfo = { ...this.userInfo, ...userInfo }
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
