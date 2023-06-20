import AdminLayout from "@/layouts/AdminLayout";
import AdminHeaderStatsContainer from "@/containers/AdminHeaderStatsContainer";
import CardAgeContainer from "@/containers/CardAgeContainer";
import CardGenderContainer from "@/containers/CardGenderContainer";
import CardYearLevelContainer from "@/containers/CardYearLevelContainer";
import CardYearLevel from "@/components/Cards/CardYearLevel";
import CardSectionsContainer from "@/containers/CardSectionsContainer";
import Modal from "@/components/Modal";
import CheckFeedbackDataContainer from "@/containers/CheckFeedbackDataContainer";

import React from "react";
import Head from "next/head";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";


export default function sentimentAnalysis() {
  const demographicProfile = ['age', 'gender'];
  const students = ['year_level', 'sections'];
  const sentimentAnalysis = ['sentiments_bar', 'sentiments_percent'];
  const wordcloud = ['positive_wordcloud', 'negative_wordcloud']
  return (
    <AdminLayout>
      <Head>
        <title>SFSA | SA</title>
        <meta name="description" content="" />
      </Head>

      <PageTransition />
      <main className="text-dark w-full h-full dark:text-light">
        <div className="mx-auto w-[80vw] lg:w-[90vw] ">
          <div className="flex flex-col gap-y-5">
            <Modal />
            {/* <div>
              <Modal />
            </div> */}
            <h1>Demographic Profile</h1>
            <div className="flex flex-row lg:flex-col gap-8">
              {demographicProfile.map((image, index) => (
              <div className="w-full shadow-2xl h-full" key={index}>
                <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
                  <img
                    src={`/images/${image}.png`}
                    alt={`profilePic_${index}`}
                    className="w-full h-auto lg:w-full md:inline-block md:w-full"
                    priority
                  />
                </div>
              </div>
              ))}
            </div>


            <div className="flex flex-row lg:flex-col gap-8">
              {students.map((image, index) => (
              <div className="w-full shadow-2xl h-full" key={index}>
                <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
                  <img
                    src={`/images/${image}.png`}
                    alt={`profilePic_${index}`}
                    className="w-full h-auto lg:w-full md:inline-block md:w-full"
                    priority
                  />
                </div>
              </div>
              ))}
            </div>

            <h1>Sentiment Analysis Results</h1>
            <div className="flex flex-row lg:flex-col gap-8">
              {sentimentAnalysis.map((image, index) => (
              <div className="w-full shadow-2xl h-full" key={index}>
                <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
                  <img
                    src={`/images/${image}.png`}
                    alt={`profilePic_${index}`}
                    className="w-full h-auto lg:w-full md:inline-block md:w-full"
                    priority
                  />
                </div>
              </div>
              ))}
            </div>
                        

            <h1>Wordclouds</h1>
            <div className="flex flex-row lg:flex-col gap-8">
              <div className="w-full shadow-2xl h-full">
                  <img
                    src={`/images/positive_wordcloud.png`}
                    alt={`profilePic_`}
                    className="w-full h-auto lg:w-full md:inline-block md:w-full"
                    priority
                  />
              </div>
            </div>

            
            <div className="flex flex-row lg:flex-col gap-8">
              <div className="w-full shadow-2xl h-full">
                  <img
                    src={`/images/negative_wordcloud.png`}
                    alt={`profilePic`}
                    className="w-full h-auto lg:w-full md:inline-block md:w-full"
                    priority
                  />
              </div>
            </div>



          </div>
        </div>
      </main>
    </AdminLayout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      protected: true,
    },
  };
};
