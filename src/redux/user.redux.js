const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  isAuth: '',
  msg: '',
  user:'',
  pwd: '',
  type: ''
}
// reducer
export function user(state, action) {
  switch(action.type) {
    case REGISTER_SUCCESS: 
      return {...state, msg: '', isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    return state
   }
}

function registerSuccess() {
  return {type: REGISTER_SUCCESS, payload: data}
}

function errorMsg(msg) {
  return {msg, type:ERROR_MSG}
}
  
export function register({user, pwd, repeatpwd, type}) {
  if(!user || !pwd || !type) {
    return ERROR_MSG('must have password')
  }
  if(pwd !== repeatpwd) {
    return ERROR_MSG('password different')
  }
  axios.post('/user/register', {yser, pwd, type})
    .then(res => {
      if(res.status == 200 && res.data.code === 0) {
        dispatch(registerSuccess({user, pwd, type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
}