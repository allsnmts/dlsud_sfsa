import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MoonIcon, SunIcon } from '../Icons';
import UseThemeSwitcher from '@/hooks/useThemeSwitcher';

const CustomLinkMobile = (r) => {
  const router = useRouter();

  const handleRouteChange = () => {
    router.push(r.href);
    r.handleDrawerOpen(false);
  };

  return (
    <li
      onClick={handleRouteChange}
      title={r.title}
      className={`flex flex-row mx-4 items-center relative group cursor-pointer`}
    >
      {!!r.icon && <FontAwesomeIcon icon={r.icon} />}

      <div className="mx-5 flex flex-col">
        <p
          className={`${
            router.asPath === r.href && 'text-primary dark:text-primaryDark'
          }`}
        >
          {r.title}
        </p>
        <span
          className={`h-[1px] inline-block bg-dark group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === r.href
              ? 'w-full bg-primary dark:bg-primaryDark'
              : 'w-0'
          } dark:bg-light`}
        >
          &nbsp;
        </span>
      </div>
    </li>
  );
};

const Burger = ({ handleDrawerOpen, drawerOpen, navMode }) => (
  <button
    onClick={handleDrawerOpen}
    className={`flex-col justify-center items-center lg:flex ${
      navMode === 'drawer' || navMode === 'drawer' ? 'flex' : 'hidden'
    }`}
  >
    <span
      className={`bg-primary dark:bg-primaryDark/90 block h-0.5 w-6 rounded-sm duration-200 ${
        drawerOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
      }`}
    ></span>
    <span
      className={`bg-primary dark:bg-primaryDark/90  block h-0.5 w-6 rounded-sm duration-200 my-0.5 ${
        drawerOpen ? 'opacity-0' : 'opacity-1'
      }`}
    ></span>
    <span
      className={`bg-primary dark:bg-primaryDark/90  block h-0.5 w-6 rounded-sm duration-200 ${
        drawerOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
      }`}
    ></span>
  </button>
);

export default function Sidebar({
  currentUser,
  routesArr,
  navMode,
  drawerOpen,
  setDrawerOpen,
}) {
  const [mode, setMode] = UseThemeSwitcher();

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Burger
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={drawerOpen}
        navMode={navMode}
      />
      {drawerOpen && (
        <motion.div
          initial={{ opacity: 0, x: '-50%' }}
          animate={{
            opacity: 1,
            x: 0,
            duration: 1,
            transition: { delay: 0.4 },
          }}
          className={`fixed hidden lg:flex ${
            navMode === 'drawer' || navMode === 'drawer' ? 'flex' : 'hidden'
          } flex-col top-0 left-0 z-40 h-screen p-4 bg-light w-[17vw] lg:w-[27vw] md:w-[60vw] dark:bg-dark shadow-lg border-r translate-x-1/2 dark:border-primaryDark/90`}
        >
          <div className="w-full flex flex-row justify-between">
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              Menu
            </h5>
            <Burger
              handleDrawerOpen={handleDrawerOpen}
              drawerOpen={drawerOpen}
              navMode={navMode}
            />
          </div>
          <div className="py-4">
            <ul className="flex flex-col items-start justify-center flex-wrap gap-y-4">
              {routesArr.map((r, i) => (
                <CustomLinkMobile key={i} {...{ ...r, handleDrawerOpen }} />
              ))}
              {!!currentUser && (
                <Link
                  className="mx-9 whitespace-nowrap font-bold text-xs px-3 py-2 sm:px-2 sm:py-1 rounded-2xl shadow-md ease-linear transition-all duration-150 hover:shadow-xl border-2 border-solid bg-lightComponents border-primary hover:bg-primary hover:text-light dark:bg-darkComponents dark:text-light  hover:dark:bg-primaryDark/25 hover:dark:border-primaryDark/90"
                  target="_blank"
                  href="https://forms.office.com/r/6nmfPZW7ip"
                  rel="noopener noreferrer"
                >
                  Take the Survey
                </Link>
              )}
              <button
                className={`mx-9 flex w-[30px] h-[30px] items-center justify-center rounded-full p-1 shadow-md ease-linear transition-all duration-150 hover:shadow-xl border-2 border-solid border-primary hover:bg-primary hover:text-light dark:bg-darkComponents dark:text-light  hover:dark:bg-primaryDark/25 hover:dark:border-primaryDark/90`}
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              >
                {mode === 'dark' ? (
                  <MoonIcon className="fill-dark" />
                ) : (
                  <SunIcon className="fill-dark" />
                )}
              </button>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}
