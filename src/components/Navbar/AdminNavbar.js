import React from 'react';
import { adminRoutes } from '../../content/routes';
import NavbarContainer from '@/containers/NavbarContainer';

export default function AdminNavbar() {
  return <NavbarContainer routesArr={adminRoutes} navMode="drawer" />;
}
