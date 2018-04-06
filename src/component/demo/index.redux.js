const ADD_GUN = 'add guns';
const REMOVE_GUN = 'reduce guns';

function counter(state=0, action) {
  switch(action.type) {
    case 'add guns':
      return state + 1;
    case 'reduce guns':
      return state - 1;
    default: 
      return 10;
  }
}

// reducer 
export function counter(state=0, action) {
  switch(action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default: 
      return 10;
  }
}

// action creater
export function addGUN() {
  return {type: ADD_GUN}
}
export function removeGUN() {
  return {type: REMOVE_GUN}
}

export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGUN())
    }, 2000)
  }
}