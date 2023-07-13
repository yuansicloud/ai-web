import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  name: string
  email: string
  phoneNumber: string
  extraProperties: extraProperties
}
interface extraProperties {
  Avatar: string
}
export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      name: '',
      email: '',
      phoneNumber: '',
      extraProperties: {
        Avatar: '',
      },
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
