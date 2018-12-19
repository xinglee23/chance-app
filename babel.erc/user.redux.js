import axios from 'axios'
import { getRedirectPath } from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const CHANGE_REDIRECT = 'CHANGE_REDIRECT'

const initState = {
  redirectTo: '',
  msg: '',
  user: '',
  type: ''
}

function errorMSG(msg) {
  return { msg, type: ERROR_MSG }
}

function authSuccess(obj) {
  const { pwd, ...data } = obj;
  return { type: AUTH_SUCCESS, payload: data }
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

export function loadData(userinfo) {
  return { type: LOAD_DATA, payload: userinfo }
}

export function update(data) {
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        // console.log(JSON.stringify(res))
        if (res.status === 200 && res.data.code === 0) {
          // console.log("update is  ",res.data.data)
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function logoutSubmit() {
  return { type: LOGOUT }
}

// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      console.log(getRedirectPath(action.payload))
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    case LOAD_DATA:
      return { ...state, ...action.payload }
    case LOGOUT:
      return { initState, redirectTo: '/login' }
    case CHANGE_REDIRECT:
      return { ...state, redirectTo: action.payload }
    default:
      return state
  }
}

export function userinfo() {
  axios.post('/user/info')
    .then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {

        }
      } else {
        this.props.loadData(res.data.data);
        this.props.history.push('./login');
      }
    })
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMSG('must have user and password');
  }
  return dispatch => {
    axios.post('/user/login', { user, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          // dispatch(registerSuccess({user, pwd}))
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !type) {
    return errorMSG('must have password')
  }
  if (pwd !== repeatpwd) {
    return errorMSG('password different')
  }
  return dispatch => {
    axios.post('/user/register', { user, pwd, type })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess({ user, pwd, type }))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function changeRedirectTo(redirect) {
  return dispatch => {
    dispatch(changeRedirect(redirect))
  }
}

function changeRedirect(redirect) {
  return { type: CHANGE_REDIRECT, payload: redirect }
}