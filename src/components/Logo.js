import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        className="w-16 h-16 text-1xl shadow-md ease-linear transition-all duration-150 hover:shadow-xl border-2 border-solid flex items-center justify-center rounded-full text-1xl font-bold bg-lightComponents border-primary hover:bg-primary hover:text-light dark:bg-darkComponents dark:text-light  hover:dark:bg-primaryDark/25 hover:dark:border-primaryDark/90"
        href="/"
        whileHover={{
          scale: 1.2,
        }}
      >
        SFSA
      </MotionLink>
    </div>
  );
}
