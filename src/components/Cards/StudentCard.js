import React from 'react';
import { formatDate } from '@/utils/functions';

export default function StudentCard({ studentObj }) {
  const { dateSubmitted, feedback, feedbackCategory, respondent, suggestion } =
    studentObj;

  return !!Object.keys(studentObj).length ? (
    <div className="overflow-auto w-full h-full rounded-xl flex flex-col min-w-0 break-words bg-lightComponents dark:bg-darkComponents">
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <h6 className="text-sm mt-3 mb-6 font-bold uppercase text-primary dark:text-primaryDark">
          Student Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <div className="uppercase text-xs font-bold mb-2">
                {`Full Name: ${respondent}`}
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-blueGray-300" />

        <h6 className="text-sm mt-3 mb-6 font-bold uppercase text-primary dark:text-primaryDark">
          Fedback Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <div className="uppercase text-xs font-bold mb-2">Feedback</div>
              <div className="text-gray-600 dark:text-gray-200 px-3 py-3 rounded text-sm">
                {feedback}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <div className="uppercase text-xs font-bold mb-2">Suggestion</div>
              <div className="text-gray-600 dark:text-gray-200 px-3 py-3 rounded text-sm">
                {suggestion}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <div className="uppercase text-xs font-bold mb-2">
                Feedback Category
              </div>
              <div className="text-gray-600 dark:text-gray-200 px-3 py-3 rounded text-sm capitalize">
                {feedbackCategory}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <div className="uppercase text-xs font-bold mb-2">
                Date Submitted
              </div>
              <div className="text-gray-600 dark:text-gray-200 px-3 py-3 rounded text-sm">
                {formatDate(dateSubmitted)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="overflow-auto w-full h-full rounded-xl flex flex-col bg-light dark:bg-darkComponents justify-center items-center">
      <div className="text-lg">Select a student from the table</div>
    </div>
  );
}
