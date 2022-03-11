import { defHttp } from '/@/utils/http/axios'
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel'

import { ErrorMessageMode } from '/#/axios'
/**
 * @description: 枚举接口
 * @param {*}
 * @return {*}
 */
enum Api {
  Login = '/login',
  Logout = '/logout',
  UserAuth = '/userAuth/getUserAuthsFromMDB',
  GetUserInfo = '/userInfo/getUserInfo',
}

/**
 * @description: 登录接口
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  )
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' })
}

/**
 * @description: UserAuth
 */
export function UserAuth() {
  return defHttp.get({ url: Api.UserAuth }, { errorMessageMode: 'none' })
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode })
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout })
}
