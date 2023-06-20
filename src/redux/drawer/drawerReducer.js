import { SET_DRAWER_OPEN } from './drawerActionTypes';

const INITIAL_STATE = {
  drawerOpen: false,
};

const drawerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DRAWER_OPEN:
      return { ...state, drawerOpen: action.payload };
    default:
      return state;
  }
};

export default drawerReducer;
