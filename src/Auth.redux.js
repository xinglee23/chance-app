const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export function auth(state={isAuth=false, user: 'li'}, action) {
  switch(action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT: 
      return {...state, isAuth: false}
  }
}

// action
export function login() {
  return {type: LOGIN}
}
export function logout() {
  return {type: LOGOUT }
}