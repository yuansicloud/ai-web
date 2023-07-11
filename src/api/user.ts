import type { GenericAbortSignal } from 'axios'
import { get, post } from '@/utils/request'

// 手机登录API接口
export const phoneNumberLogin = (phoneNumber: string, verificationCode: string, signal?: GenericAbortSignal) => {
  return post({
    url: '/api/phone-number-login/account/request-token/by-verification-code',
    data: { phoneNumber, verificationCode },
    signal,
    baseURL: 'https://api.yuansicloud.com',
  })
}

// 手机获取验证接口
export const sendVerificationCode = (phoneNumber: string, verificationCodeType: number, signal?: GenericAbortSignal) => {
  return post({
    url: '/api/phone-number-login/account/send-verification-code',
    data: { phoneNumber, verificationCodeType },
    signal,
    baseURL: 'https://api.yuansicloud.com',
  })
}

// 获取用户信息
export const getUserInfo = (signal?: GenericAbortSignal) => {
  return get({
    url: '/api/account/my-profile',
    signal,
    baseURL: 'https://api.yuansicloud.com',
  })
}
