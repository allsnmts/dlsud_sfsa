import React from 'react';
import { MoonIcon, SunIcon } from '../Icons';
import UseThemeSwitcher from '@/hooks/useThemeSwitcher';

export default function ThemeButton({ className }) {
  const [mode, setMode] = UseThemeSwitcher();

  return (
    <button
      className={`${className} flex w-[30px] h-[30px] items-center justify-center rounded-full p-1 sm:hidden shadow-md ease-linear transition-all duration-150 hover:shadow-xl border-2 border-solid border-primary hover:bg-primary hover:text-light dark:bg-darkComponents dark:text-light  hover:dark:bg-primaryDark/25 hover:dark:border-primaryDark/90`}
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'dark' ? (
        <MoonIcon className="fill-light" />
      ) : (
        <SunIcon className="fill-light" />
      )}
    </button>
  );
}
