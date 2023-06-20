import React from 'react';
import Button from './Button';

export default function SignoutButton({ signOutStart }) {
  return <Button onClick={signOutStart}>Sign out</Button>;
}
