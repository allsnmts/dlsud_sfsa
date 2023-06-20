import React, { useRef } from "react";
import Head from "next/head";
import dashboard from "../../public/images/dashboard.jpg";
import {
  AnimatedTextSpring,
  AnimatedTextTypeWriter,
} from "@/components/AnimatedText";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { aboutPage } from "../content/pages";
import PageTransition from "@/components/PageTransition";
import AnimatedList from "@/components/AnimatedList";

export default function about() {
  const {
    aboutSectionArr,
    significanceSectionObj,
    problemsSectionObj,
    objectivesSectionObj,
    scopeSectionObj,
    conceptualSectionObj,
  } = aboutPage;

  return (
    <>
      <Head>
        <title>SFSA | About</title>
        <meta name="description" content="" />
      </Head>

      <PageTransition />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          {aboutSectionArr.map(({ title, paragraphsArr }, i) => (
            <div
              key={i}
              className={`flex items-center justify-between w-full lg:flex-col ${
                i < aboutSectionArr.length - 1 && "mb-32 md:mb-16"
              } ${i % 2 === 1 && "flex-row-reverse"} gap-8`}
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
                  className="text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center"
                />
                {paragraphsArr.map((p, i) => (
                  <AnimatedTextSpring
                    text={p}
                    key={i}
                    className="my-4 text-ba
                   font-medium md:text-sm sm:text-xs"
                  />
                ))}
              </div>
            </div>
          ))}
          {Object.entries({
            significanceSectionObj,
            problemsSectionObj,
            objectivesSectionObj,
            scopeSectionObj,
            conceptualSectionObj,
          }).map(([k, v], i) => (
            <div
              key={i}
              className={`w-full px-10 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${
                i < 3 && "my-48 md:my-16"
              }`}
            >
              {v["textSectionArr"].map((e, i) => (
                <div key={i} className="flex flex-col mb-16 w-full text-center">
                  <AnimatedTextTypeWriter
                    text={e?.title}
                    className="text-center text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl"
                  />
                  {e?.paragraphsArr?.map((p, i) => (
                    <AnimatedTextSpring
                      text={p}
                      key={i}
                      className="text-center my-4 text-ba
font-medium md:text-sm sm:text-xs"
                    />
                  ))}
                </div>
              ))}
              {v["liArr"] && <AnimatedList liArr={v["liArr"]} />}
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
