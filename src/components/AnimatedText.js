import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue } from 'framer-motion';

const titleAnimate = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 1, staggerChildren: 0.08 },
    },
  },
  textAnimate = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      duration: 1,
    },
  };

export const AnimatedTextFadeIn = ({ text, className = '' }) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center dark:text-light sm:py-0`}
    >
      <motion.h1
        variants={titleAnimate}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full text-dark font-bold capitalize dark:text-light`}
      >
        {text.split(' ').map((w, i) => (
          <motion.span
            variants={textAnimate}
            initial="initial"
            animate="animate"
            className="inline-block"
            key={i}
          >
            {w}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

const textAnimateTypeWriterWord = {
  initial: {},
  animate: {},
};

const textAnimateTypeWriterCharacter = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const AnimatedTextTypeWriter = ({ text, className = '' }) => {
  const ref = useRef(null);
  const animation = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView ? animation.start('animate') : animation.start('initial');
  }, [animation, isInView]);

  return (
    <h1
      className={`${className} inline-block w-full text-dark font-bold capitalize dark:text-light`}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          ref={ref}
          key={i}
          className="inline-block mr-[1rem] break-words"
          variants={textAnimateTypeWriterWord}
          initial="initial"
          animate={animation}
          transition={{
            delayChildren: i * 0.25,
            staggerChildren: 0.05,
          }}
        >
          {word.split('').map((w, i) => (
            <motion.span
              variants={textAnimateTypeWriterCharacter}
              className="inline-block"
              key={i}
            >
              {w}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h1>
  );
};

const textAnimateSPring = {
  initial: { y: 100 },
  whileInView: { y: 0 },
  animate: {
    transition: { duration: 0.8, type: 'spring' },
  },
};

export const AnimatedTextSpring = ({ text, className = '' }) => {
  return (
    <motion.div
      variants={textAnimateSPring}
      initial="initial"
      animate="animate"
      whileInView="whileInView"
    >
      <p
        className={`font-medium w-full md:text-sm text-left lg:text-center ${className}`}
      >
        {text}
      </p>
    </motion.div>
  );
};
