import { createSelector } from 'reselect';

const selecDrawer = (state) => state.drawer;

export const selectDrawerOpen = createSelector(
  [selecDrawer],
  (drawer) => drawer.drawerOpen
);
