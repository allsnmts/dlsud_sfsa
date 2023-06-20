import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RouteGuard({ admin, children }) {
  const router = useRouter();

  useEffect(() => {
    console.log(admin);
    if (!admin) {
      router.redirect('/');
    }
  }, [admin, router]);

  return admin && children;
}
