import request from '@/utils/request'

export function loginByUsername(uname, upass, captcha) {
  const data = {
    uname,
    upass,
    captcha
  }
  console.log(data)
  return request('/admin/login', {
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

