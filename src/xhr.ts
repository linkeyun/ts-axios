import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get', headers } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    data === null && name.toLocaleLowerCase() === 'content-type'
      ? delete headers[name]
      : request.setRequestHeader(name, headers[name])
  })

  request.send(data)
}
