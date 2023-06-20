import React from "react";
import Image from "next/image"; // Import the Image component from next/image
import img from "../../../results/images/gender.png";

export default function CardGender() {
  return (
    <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
      <Image
        src={img}
        alt="profilePic"
        className="w-full h-auto lg:w-full md:inline-block md:w-full"
        priority
      />
    </div>
  );
}

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import Image from "next/image"; // Import the Image component from next/image
// import age from "../../../results/images/age.png";

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

// export default function CardGender({ feedbackObjByCategory }) {
//   return (
//     <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
//       {/* {!!feedbackObjByCategory && <Bar options={options} data={data} w={'100%'} h={'100%'} />} */}
//       <Image
//         src={age}
//         alt="profilePic"
//         className="w-full h-auto lg:w-full md:inline-block md:w-full"
//         priority
//         // sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
//       />
//     </div>
//   );
// }

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// export default function CardGender({ feedbackObjByCategory }) {
//   const data = {
//     labels: Object.keys(feedbackObjByCategory),
//     datasets: Object.entries(feedbackObjByCategory).map(([k, v]) => ({
//       ['label']: k,
//       ['borderColor']:
//         k === 'positive' ? '#57B4A3' : k === 'negative' ? '#E05D3D' : '#FFD567',
//       ['backgroundColor']:
//         k === 'positive' ? '#57B4A3' : k === 'negative' ? '#E05D3D' : '#FFD567',
//       ['data']:
//         k === 'positive'
//           ? [v.length]
//           : k === 'negative'
//           ? [0, v.length]
//           : [0, 0, v.length],
//       ['fill']: false,
//       ['barThickness']: 25,
//     })),
//   };

//   return (
//     <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
//       {!!feedbackObjByCategory && (
//         <Bar options={options} data={data} w={'100%'} h={'100%'} />
//       )}
//     </div>
//   );
// }
