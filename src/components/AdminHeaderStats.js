import React from "react";

export default function AdminHeaderStats({ feedbackObjByCategory }) {
  return (
    <div className="w-full flex flex-row lg:flex-col gap-5">
      {/* <div>Demographic Profile</div> */}
      Demographic Profile
    </div>
  );
}

// import React from 'react';
// import CardStats from './Cards/CardStats';

// export default function AdminHeaderStats({ feedbackObjByCategory }) {
//   return (
//     <div className="w-full flex flex-row lg:flex-col gap-5">
//       {Object.entries(feedbackObjByCategory).map(([k, v], i) => (
//         <div key={i} className="w-full">
//           <CardStats category={k} stat={v} />
//         </div>
//       ))}
//     </div>
//   );
// }
