import React from 'react';
import Button from './Button';

export default function SigninButton({ microsoftSignInStart }) {
  return (
    <Button className={'rounded-3xl'} onClick={microsoftSignInStart}>
      <svg
        className="mr-2 w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] fill-dark dark:fill-light group-hover:fill-dark dark:group-hover:fill-light"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        Sign in
        <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
      </svg>
      <div>Sign in</div>
    </Button>
  );
}
