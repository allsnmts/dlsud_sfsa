import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import dashboard from '../../public/images/dashboard.jpg';
import { homePage } from '../content/pages';
import Layout from '@/layouts/Layout';
import {
  AnimatedTextSpring,
  AnimatedTextTypeWriter,
} from '@/components/AnimatedText';
import { useRouter } from 'next/router';
import PageTransition from '@/components/PageTransition';
import Button from '@/components/Buttons/Button';

export default function Home() {
  const [mode, setMode] = useState(''),
    router = useRouter();

  useEffect(() => {
    setMode(window.localStorage.getItem('theme'));
  }, [mode]);

  return (
    <>
      <Head>
        <title>SFSA | Home</title>
        <meta name="description" content="" />
      </Head>

      <PageTransition />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          {homePage.homeSectionArr.map(({ title, paragraphsArr }, i) => (
            <div
              key={i}
              className={`flex items-center justify-between w-full lg:flex-col ${
                i < homePage.homeSectionArr.length - 1 && 'mb-32 md:mb-16'
              } ${i % 2 === 1 && 'flex-row-reverse'} gap-8`}
            >
              <div className="w-1/2 md:w-full border border-solid shadow-lg dark:bg-dark dark:border-light">
                <Image
                  src={dashboard}
                  alt="profilePic"
                  className="w-full h-auto lg:w-full md:inline-block md:w-full"
                  priority
                  sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedTextTypeWriter
                  text={title}
                  className="text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center text-primary dark:text-primaryDark/90"
                />
                {paragraphsArr.map((p, i) => (
                  <AnimatedTextSpring
                    text={p}
                    key={i}
                    className="my-4 text-ba
                   font-medium md:text-sm sm:text-xs"
                  />
                ))}
                <div
                  className={`flex flex-row gap-4 items-center self-center lg:self-center ${
                    i > 0 ? 'hidden' : 'flex'
                  }`}
                >
                  <Button
                    className="!font-semibold rounded-3xl !text-lg"
                    onClick={() => router.push('/about')}
                  >
                    Learn More
                  </Button>
                  <Button
                    className="font-semibold !text-lg rounded-3xl !underline !text-dark dark:!text-light !bg-transparent !border-transparent !shadow-none hover:!text-primary 
                    hover:!decoration-primary dark:hover:!text-primaryDark 
                    dark:hover:!decoration-primaryDark"
                    onClick={() => router.push('/team')}
                  >
                    Our Team
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Layout>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      protected: false,
    },
  };
};
