import React from 'react';
import Table from '../Tables/Table';

export default function CardTable({ feedbackObjByCategory }) {
  const headerTitlesArr = ['Category', 'Students', 'Percentage'];

  const formatTableData = (feedbackObj) =>
    Object.entries(feedbackObj).map(([k, v]) => {
      const stPerCat = v.length,
        stTotal = feedbackObj.total.length;

      return {
        category: k,
        students: stPerCat,
        percentage: (100 * stPerCat) / stTotal,
      };
    });

  return (
    <Table headerTitlesArr={headerTitlesArr}>
      {formatTableData(feedbackObjByCategory).map(
        ({ category, students, percentage }, i) => (
          <tr
            key={i}
            className={`border-b text-dark dark:text-light dark:border-gray-700 cursor-pointer bg-lightComponents dark:bg-darkComponents`}
          >
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
              {category.toUpperCase()}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {students}
            </td>
            <td className="w-[60%] border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">{percentage}%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${percentage}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${category}`}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )
      )}
    </Table>
    // <>
    //   <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded border border-solid shadow-lg dark:bg-dark dark:text-light dark:border-light">
    //     <div className="rounded-t mb-0 px-4 py-3 border-0">
    //       <div className="flex flex-wrap items-center">
    //         <div className="relative w-full px-4 max-w-full flex-grow flex-1">
    //           <h3 className="font-semibold text-base text-blueGray-700">
    //             Text Analysis
    //           </h3>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="block w-full overflow-x-auto">
    //       <table className="items-center w-full bg-transparent border-collapse">
    //         <thead className="thead-light">
    //           <tr>
    //             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    //               Category
    //             </th>
    //             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    //               Students
    //             </th>
    //             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {formatTableData(feedbackObjByCategory).map(
    //             ({ category, students, percentage }, i) => (
    //               <tr key={i}>
    //                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
    //                   {category.toUpperCase()}
    //                 </th>
    //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    //                   {students}
    //                 </td>
    //                 <td className="w-[60%] border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    //                   <div className="flex items-center">
    //                     <span className="mr-2">{percentage}%</span>
    //                     <div className="relative w-full">
    //                       <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
    //                         <div
    //                           style={{ width: `${percentage}%` }}
    //                           className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${category}`}
    //                         ></div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>
    //               </tr>
    //             )
    //           )}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </>
  );
}
