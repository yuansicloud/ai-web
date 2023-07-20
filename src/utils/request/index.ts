import type { AxiosProgressEvent, AxiosResponse, GenericAbortSignal } from 'axios'
import request from './axios'
import { useAuthStore } from '@/store'

export interface HttpOption {
  url: string
  data?: any
  method?: string
  headers?: any
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void
  signal?: GenericAbortSignal
  beforeRequest?: () => void
  afterRequest?: () => void
  baseURL?: string
}

function http<T = any>(
  { url, data, method, headers, onDownloadProgress, signal, beforeRequest, afterRequest, baseURL }: HttpOption,
) {
  const successHandler = (res: AxiosResponse<T>) => {
    const authStore = useAuthStore()
    if (res.status >= 200 && res.status < 400)
      return res.data

    if (res.status === 401) {
      authStore.removeToken()
      window.location.reload()
    }

    return Promise.reject(res.data)
  }

  const failHandler = (error: Error) => {
    afterRequest?.()
    throw new Error(error?.message || 'Error')
  }

  beforeRequest?.()

  method = method || 'GET'

  const params = Object.assign(typeof data === 'function' ? data() : data ?? {}, {})

  if (method === 'GET') {
    return request.get(url, { params, signal, onDownloadProgress, baseURL }).then(successHandler, failHandler)
  }
  else if (method === 'POST') {
    return request.post(url, params, { headers, signal, onDownloadProgress, baseURL }).then(successHandler, failHandler)
  }
  else if (method === 'PUT') {
    return request.put(url, params, { headers, signal, onDownloadProgress, baseURL }).then(successHandler, failHandler)
  }
  else {
    // handle other cases or throw an error
    throw new Error('Invalid method')
  }
}

export function get<T = any>(
  { url, data, method = 'GET', onDownloadProgress, signal, beforeRequest, afterRequest, baseURL }: HttpOption,
): Promise<T> {
  return http<T>({
    url,
    method,
    data,
    onDownloadProgress,
    signal,
    beforeRequest,
    afterRequest,
    baseURL,
  })
}

export function post<T = any>(
  { url, data, method = 'POST', headers, onDownloadProgress, signal, beforeRequest, afterRequest, baseURL }: HttpOption,
): Promise<T> {
  return http<T>({
    url,
    method,
    data,
    headers,
    onDownloadProgress,
    signal,
    beforeRequest,
    afterRequest,
    baseURL,
  })
}
export function put<T = any>(
  { url, data, method = 'PUT', headers, onDownloadProgress, signal, beforeRequest, afterRequest, baseURL }: HttpOption,
): Promise<T> {
  return http<T>({
    url,
    method,
    data,
    headers,
    onDownloadProgress,
    signal,
    beforeRequest,
    afterRequest,
    baseURL,
  })
}
export default post
