import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from './helper'
import { store } from '@/store'
import { fetchSession } from '@/api'
import { phoneNumberLogin } from '@/api/user'

interface SessionResponse {
  auth: boolean
  model: 'ChatGPTAPI' | 'ChatGPTUnofficialProxyAPI'
  data: any
}

export interface AuthState {
  token: string | undefined
  session: SessionResponse | null
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    token: getToken(),
    session: null,
  }),

  getters: {
    isChatGPTAPI(state): boolean {
      return state.session?.model === 'ChatGPTAPI'
    },

  },

  actions: {
    async loginUser(phoneNumber: string, verificationCode: string) {
      try {
        const response = await phoneNumberLogin(phoneNumber, verificationCode)
        const { access_token } = response

        if (response.access_token)
          this.setToken(access_token) // 假设API返回的数据结构中包含token
        else
          throw console.error('登录失败：', response)

        // console.error('登录失败：', response)
      }
      catch (error) {
        console.error('登录请求错误：', error)
      }
    },

    async getSession() {
      try {
        const { data } = await fetchSession<SessionResponse>()
        this.session = { ...data }
        return Promise.resolve(data)
      }
      catch (error) {
        return Promise.reject(error)
      }
    },
    logout() {
      this.removeToken() // 删除token
      this.session = null // 清除session
    },
    setToken(token: string) {
      this.token = token
      setToken(token)
    },
    removeToken() {
      this.token = undefined
      removeToken()
    },
  },
})

export function useAuthStoreWithout() {
  return useAuthStore(store)
}
