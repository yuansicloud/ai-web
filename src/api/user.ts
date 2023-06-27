// 引入axios
import axios from 'axios'

// 创建axios实例，这里的"/service/httpServer"可以根据你的项目结构进行修改
const $axios = axios.create({ baseURL: '/service/httpServer' })

// 定义接口请求的参数类型
interface Params {
  [key: string]: any
}

// 登录API
// @p 用户登录信息，如用户名和密码
export const login = (p: Params) =>
  $axios.post(
    '/connect/token',
    p,
    null,
    'https://authserver.yuansicloud.com',
  )

// 手机号登录API
// @p 包含手机号码和其他信息
export const phoneNumberLogin = (p: Params) =>
  $axios.post('/api/phone-number-login/account/request-token/by-verification-code', p)

// 注册API
// @p 注册信息，包括手机号码，密码等
export const register = (p: Params) =>
  $axios.post('/api/phone-number-login/account/register-request-token', p)

// 发送注册验证码API
// @p 用户手机号码
export const sendVerificationCode = (p: Params) =>
  $axios.post('/api/phone-number-login/account/send-verification-code', p)

// 获取用户信息API，无需参数
export const getUserInfo = () => $axios.get('/api/account/my-profile')

// 修改密码API
// @p 用户的新密码和其他信息
export const updateUserPass = (p: Params) =>
  $axios.post('/api/account/my-profile/change-password', p)

// 更改用户信息API
// @p 用户的新信息
export const setUserInfo = (p: Params) => $axios.put('/api/account/my-profile', p)

// 根据关键字搜索用户列表API
// @p 关键字
export const getUserListByKeywords = (p: Params) =>
  $axios.get('/quark/user/getUserList', p)
