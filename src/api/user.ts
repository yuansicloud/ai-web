import type { GenericAbortSignal } from 'axios'
import { get, post, put } from '@/utils/request'

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
// 更改用户信息
export const setUserInfo = (data: UserInfo, signal?: GenericAbortSignal) => {
  return put({
    url: '/api/account/my-profile',
    signal,
    data,
    baseURL: 'https://api.yuansicloud.com',
  })
}
interface UserInfo {
  name: string
  phoneNumber: string
  email: string
}

// 获取预付费默认账户详情
export const getPrepaymentDefaultAccount = (signal?: GenericAbortSignal) => {
  return get({
    url: '/api/payment-service/prepayment/account/default',
    signal,
    baseURL: 'https://api.yuansicloud.com',
  })
}

export const getPrepaymentTransactionList = (data: TransactionListParams, signal?: GenericAbortSignal) => {
  return get({
    url: '/api/payment-service/prepayment/transaction',
    signal,
    data,
    baseURL: 'https://api.yuansicloud.com',
  })
}
interface TransactionListParams {
  skipCount: number
  maxResultCount: number
  accountId: string
}
