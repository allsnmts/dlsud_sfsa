import React from 'react';
import Layout from '../layouts/Layout';

export default function Footer() {
  return (
    <footer className="w-full  font-medium text-lg">
      <Layout className="py-8 flex lg:flex-col lg:py-6">
        <span className="text-sm text-dark/75 dark:text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </Layout>
    </footer>
  );
}
