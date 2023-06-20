import React from 'react';
import { createPopper } from '@popperjs/core';
import SignoutButtonContainer from '@/containers/SignoutButtonContainer';
import { useRouter } from 'next/router';

export default function UserDropdown({ currentUser }) {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'left',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const router = useRouter();

  return (
    <>
      <button
        className="w-12 h-12 text-2xl shadow-md ease-linear transition-all duration-150 hover:shadow-xl border-2 border-solid flex items-center justify-center rounded-full text-1xl font-semibold bg-lightComponents border-primary hover:bg-primary hover:text-light dark:bg-darkComponents dark:text-light  hover:dark:bg-primaryDark/25 hover:dark:border-primaryDark/90"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div>{currentUser?.displayName[0]}</div>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-lightComponents shadow-2xl text-base z-50 float-left py-2 list-none text-left rounded-2xl min-w-48 flex flex-col items-center text-dark dark:bg-darkComponents dark:text-light border border-solid border-primary dark:border-primaryDark/90'
        }
      >
        <div
          className={
            'text-sm py-2 px-4 font-semibold w-full whitespace-nowrap bg-transparent flex flex-col gap-y-2'
          }
        >
          <div>{currentUser?.displayName}</div>
          {!!currentUser.role && (
            <>
              <div>{`Role: ${
                currentUser?.role.charAt(0).toUpperCase() +
                currentUser?.role.slice(1)
              }`}</div>
              <div
                onClick={() => router.push('/admin')}
                className="cursor-pointer underline hover:text-primary dark:hover:text-primaryDark"
              >
                Dashboard
              </div>
            </>
          )}
        </div>
        <div className="h-0 w-full my-2 border border-solid border-primary dark:border-primaryDark/90" />
        <div>
          <SignoutButtonContainer />
        </div>
      </div>
    </>
  );
}
