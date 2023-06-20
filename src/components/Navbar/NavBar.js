import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { useRouter } from 'next/router';
import SidebarContainer from '@/containers/SidebarContainer';
import SigninButtonContainer from '@/containers/SigninButtonContainer';
import UserDropdownContainer from '@/containers/UserDropdownContainer';
import ThemeButton from '../Buttons/ThemeButton';

const CustomLink = ({ href, title }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      title={title}
      className={`mx-4 relative group ${
        router.asPath === href ? 'text-primary dark:text-primaryDark' : 'w-0'
      }`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href
            ? 'w-full bg-primary dark:bg-primaryDark'
            : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar({ routesArr, navMode, currentUser }) {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setShowBackground(true) : setShowBackground(false);
    });

    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed z-20 px-32 py-8 font-medium flex items-center justify-between dark:text-light lg:px-16 md:px-12 sm:px-8 ${
        showBackground &&
        'bg-light dark:bg-dark dark:border-primaryDark/90 border-b shadow-lg'
      }`}
    >
      <div
        className={`w-full flex justify-between items-center lg:hidden ${
          navMode === 'drawer' && 'hidden'
        }`}
      >
        <nav>
          {routesArr.map((r, i) => (
            <CustomLink key={i} {...r} />
          ))}
          {!!currentUser && (
            <Link
              className="whitespace-nowrap font-bold text-xs px-3 py-2 sm:px-2 sm:py-1 rounded-2xl shadow-md ease-linear transition-all duration-150 hover:shadow-xl border-2 border-solid bg-lightComponents border-primary hover:bg-primary hover:text-light dark:bg-darkComponents dark:text-light  hover:dark:bg-primaryDark/25 hover:dark:border-primaryDark/90"
              target="_blank"
              href="https://forms.office.com/r/6nmfPZW7ip"
              rel="noopener noreferrer"
            >
              Take the Survey
            </Link>
          )}
        </nav>
      </div>

      <SidebarContainer
        navMode={navMode}
        routesArr={routesArr}
        currentUser={currentUser}
      />

      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>

      <nav className="flex flex-row items-center justify-center gap-4">
        {!!currentUser ? <UserDropdownContainer /> : <SigninButtonContainer />}
        <ThemeButton />
      </nav>
    </nav>
  );
}
