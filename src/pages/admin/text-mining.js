import React from 'react';
import Head from 'next/head';
import PageTransition from '@/components/PageTransition';
import AdminLayout from '@/layouts/AdminLayout';
import StudentsTableContainer from '@/containers/StudentsTableContainer';
import StudentCardContainer from '@/containers/StudentCardContainer';
import CheckFeedbackDataContainer from '@/containers/CheckFeedbackDataContainer';
import Modal from '@/components/Modal';

export default function textMining() {
  return (
    <AdminLayout>
      <Head>
        <title>SFSA | TM</title>
        <meta name="description" content="" />
      </Head>

      <PageTransition />
      <main className="text-dark w-full h-full dark:text-light">
        <div className="mx-auto w-[80vw] lg:w-[90vw] ">
          <CheckFeedbackDataContainer
            ifFeedbackArrIsEmpty={<Modal />}
            ifFeedbackArrIsNotEmpty={
              <div className="flex flex-col gap-y-5">
                <div>
                  <Modal />
                </div>
                <div className="flex flex-row lg:flex-col gap-8">
                  <div className="w-1/2 h-[70vh] lg:w-full shadow-2xl">
                    <StudentsTableContainer />
                  </div>
                  <div className="w-1/2 h-[70vh] lg:w-full shadow-2xl">
                    <StudentCardContainer />
                  </div>
                </div>
              </div>
            }
          />
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
