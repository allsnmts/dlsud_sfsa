import { formatDate } from "@/utils/functions";
import React from "react";
import Table from "./Table";

export default function StudentsTable({ feedbackArr, addStudent, student }) {
  const headersArr = ["respondent", "dateSubmitted", "feedbackCategory"],
    headerTitlesArr = ["Respondent", "Date Submitted", "Feedback Category"];

  const matchObjects = (obj, source) =>
    Object.keys(source).every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    );

  return (
    <Table headerTitlesArr={headerTitlesArr}>
      {feedbackArr.map((d, i) => (
        <tr
          key={i}
          onClick={() => addStudent(d)}
          className={`border-b text-dark dark:text-light dark:border-gray-700 cursor-pointer ${
            matchObjects(d, student)
              ? "text-white bg-primary"
              : "bg-lightComponents dark:bg-darkComponents hover:bg-dark/10 dark:hover:bg-dark/75"
          }`}
        >
          {Object.entries(d).map(([k, v], j) =>
            headersArr.includes(k) ? (
              <td
                key={`${i}${j}`}
                className={`px-6 py-4 ${
                  k === "feedbackCategory" &&
                  `capitalize ${
                    v === "positive"
                      ? "text-positive"
                      : v === "negative"
                      ? "text-negative"
                      : "text-total"
                  }`
                }`}
              >
                {k === "dateSubmitted" ? formatDate(v) : v}
              </td>
            ) : null
          )}
        </tr>
      ))}
    </Table>
  );
}

// import { formatDate } from '@/utils/functions';
// import React from 'react';
// import Table from './Table';

// export default function StudentsTable({ feedbackArr, addStudent, student }) {
//   const headersArr = ['respondent', 'dateSubmitted', 'feedbackCategory'],
//     headerTitlesArr = ['Respondent', 'Date Submitted', 'Feedback Category'];

//   const matchObjects = (obj, source) =>
//     Object.keys(source).every(
//       (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
//     );

//   return (
//     <Table headerTitlesArr={headerTitlesArr}>
//       {feedbackArr.map((d, i) => (
//         <tr
//           key={i}
//           onClick={() => addStudent(d)}
//           className={`border-b text-dark dark:text-light dark:border-gray-700 cursor-pointer ${
//             matchObjects(d, student)
//               ? 'text-white bg-primary'
//               : 'bg-lightComponents dark:bg-darkComponents hover:bg-dark/10 dark:hover:bg-dark/75'
//           }`}
//         >
//           {Object.entries(d).map(([k, v], j) =>
//             headersArr.includes(k) ? (
//               <td
//                 key={`${i}${j}`}
//                 className={`px-6 py-4 ${
//                   k === 'feedbackCategory' &&
//                   `capitalize ${
//                     v === 'positive'
//                       ? 'text-positive'
//                       : v === 'negative'
//                       ? 'text-negative'
//                       : v === 'neutral'
//                       ? 'text-neutral'
//                       : 'text-total'
//                   }`
//                 }`}
//               >
//                 {k === 'dateSubmitted' ? formatDate(v) : v}
//               </td>
//             ) : null
//           )}
//         </tr>
//       ))}
//     </Table>
//   );
// }
