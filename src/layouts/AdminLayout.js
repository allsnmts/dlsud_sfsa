import React from 'react';
import Footer from '@/components/Footer';

function AdminLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[80vw] lg:w-[90vw] h-full text-dark dark:text-light pt-32 flex flex-col gap-10">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AdminLayout;
