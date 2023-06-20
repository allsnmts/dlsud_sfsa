import React from 'react';

export default function Button({ className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex flex-row items-center justify-center whitespace-nowrap font-bold text-xs px-3 py-2 sm:px-2 sm:py-1 rounded-2xl shadow-md ease-linear transition-all duration-150 hover:shadow-xl border-2 border-solid bg-lightComponents border-primary hover:bg-primary hover:text-light dark:bg-darkComponents dark:text-light  hover:dark:bg-primaryDark/25 hover:dark:border-primaryDark/90`}
    >
      {children}
    </button>
  );
}
