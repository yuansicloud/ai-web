import { ss } from '@/utils/storage/'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  name: string
  email: string
  phoneNumber: string
  userName: string
  hasPassword: boolean
  isExternal: boolean
  surname: null
  concurrencyStamp: string
  extraProperties: extraProperties

}
interface extraProperties {
  Avatar: string
  Introduction: string
}
export interface UserState {
  userInfo: Nullable<UserInfo>
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      name: '',
      concurrencyStamp: '',
      email: '',
      phoneNumber: '',
      userName: '',
      hasPassword: true,
      isExternal: false,
      surname: null,
      extraProperties: {
        Avatar: '',
        Introduction: '',
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
