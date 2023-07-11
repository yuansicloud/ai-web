import { ss } from '@/utils/storage'

const TOKEN_KEY = 'SECRET_TOKEN'

export function getToken() {
  return ss.get(TOKEN_KEY)
}

export function setToken(token: string) {
  return ss.set(TOKEN_KEY, token)
}

export function removeToken() {
  return ss.remove(TOKEN_KEY)
}
