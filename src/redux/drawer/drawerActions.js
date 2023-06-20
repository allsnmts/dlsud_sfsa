import { SET_DRAWER_OPEN } from './drawerActionTypes';

export const setDrawerOpen = (drawerOpen) => ({
  type: SET_DRAWER_OPEN,
  payload: drawerOpen,
});
