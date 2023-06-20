import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import ListIcon from './ListIcon.js';

const List = ({ p }) => {
  const liRef = useRef(null);

  return (
    <li
      ref={liRef}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon liRef={liRef} />
      <motion.div
        className="max-w-[385px]"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark">
          {p?.title}&nbsp;
        </h3>
        {Array.isArray(p?.paragraph) ? (
          <div className="flex flex-col space-y-5">
            {p.paragraph.map((p, i) => (
              <p key={i} className="font-medium w-full md:text-sm my-2">
                {p}
              </p>
            ))}
          </div>
        ) : (
          <p className="font-medium w-full md:text-sm">{p.paragraph}</p>
        )}
      </motion.div>
    </li>
  );
};

export default function AnimatedList({ liArr }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[4px] h-full bg-primary origin-top dark:bg-primaryDark md:w-[2px] md:left-[30px] xs:left-[20px]"
      />
      <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        {liArr.map((e, i) => (
          <List key={i} p={e} />
        ))}
      </ul>
    </div>
  );
}
