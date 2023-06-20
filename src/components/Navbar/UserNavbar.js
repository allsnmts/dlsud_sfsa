import React from 'react';
import { userRoutes } from '../../content/routes';
import NavbarContainer from '@/containers/NavbarContainer';

export default function UserNavbar() {
  return <NavbarContainer routesArr={userRoutes} navMode="both" />;
}
