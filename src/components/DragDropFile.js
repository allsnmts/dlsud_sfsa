import React, { useRef, useState, useEffect } from "react";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Buttons/Button";

export default function DragDropFile({ convertCSVFile, handleModalClose }) {
  const dragDropRef = useRef(null),
    [file, setFile] = useState(null);

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      const newFile = files[0];
      setFile(newFile);
    }
  };

  useEffect(() => {
    let ref = null;
    if (dragDropRef.current) ref = dragDropRef.current;

    if (ref) {
      ref.addEventListener("dragover", onDragOver);
      ref.addEventListener("drop", onDrop);
    }

    return () => {
      ref.removeEventListener("dragover", onDragOver);
      ref.removeEventListener("drop", onDrop);
    };
  }, []);

  // const uploadToServer = () => {
  //   if (file) {
  //     convertCSVFile(file);
  //     handleModalClose();
  //   }
  // };

  const uploadToServer = async () => {
    try {
      const response = await fetch("/api/server", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to execute Python script");
      }

      const data = await response.json();
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
    handleModalClose();
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile.name) {
      setFile(newFile);
    }
  };

  const onFileRemove = () => {
    setFile(null);
  };

  const formatToKB = (bytes) => {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(4))} KB`;
  };

  return (
    <div className="w-full flex flex-row sm:flex-col gap-10 justify-center">
      <div className="w-max-[800px] w-min-[250px]" ref={dragDropRef}>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-5"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">CSV only</p>
          </div>
          <input
            onChange={onFileDrop}
            id="dropzone-file"
            type="file"
            accept=".csv"
            className="hidden"
          />
        </label>
      </div>
      <div className="flex flex-col justify-between items-start">
        <ul
          className={`${
            !file ? "opacity-0" : "opacity-1"
          } max-w-md divide-y divide-gray-200 dark:divide-gray-700`}
        >
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon size="xl" icon={faFileCsv} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {file?.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {formatToKB(file?.size)}
                </p>
              </div>
              <span className="cursor-pointer" onClick={onFileRemove}>
                X
              </span>
            </div>
          </li>
        </ul>
        <Button
          onClick={uploadToServer}
          className={`${!file && `!opacity-50 !cursor-not-allowed`}`}
        >
          Generate charts
        </Button>
      </div>
    </div>
  );
}

// import React, { useRef, useState, useEffect } from "react";
// import { faFileCsv } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "./Buttons/Button";

// export default function DragDropFile({ convertCSVFile, handleModalClose }) {
//   const dragDropRef = useRef(null),
//     [file, setFile] = useState(null);

//   const onDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const onDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const { files } = e.dataTransfer;

//     if (files && files.length) {
//       const newFile = files[0];
//       setFile(newFile);
//     }
//   };

//   useEffect(() => {
//     let ref = null;
//     if (dragDropRef.current) ref = dragDropRef.current;

//     if (ref) {
//       ref.addEventListener("dragover", onDragOver);
//       ref.addEventListener("drop", onDrop);
//     }

//     return () => {
//       ref.removeEventListener("dragover", onDragOver);
//       ref.removeEventListener("drop", onDrop);
//     };
//   }, []);

//   // const uploadToServer = () => {
//   //   if (file) {
//   //     convertCSVFile(file);
//   //     handleModalClose();
//   //   }
//   // };

//   // const uploadToServer = (file) => {
//   //   const formData = new FormData();
//   //   formData.append("file", file);
//   //   fetch("http://localhost:5000/api/uploads", {
//   //     // fetch("api/uploads", {
//   //     method: "POST",
//   //     body: formData,
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       // Process the response data if needed
//   //       console.log(data);
//   //     })
//   //     .catch((error) => {
//   //       // Handle the error
//   //       console.error(error);
//   //     });
//   // };
//   // const uploadToServer = (file) => {
//   //   if (file) {
//   //     const formData = new FormData();
//   //     formData.append("file", file);

//   //     fetch("/api/uploads", { // Update the fetch URL
//   //       method: "POST",
//   //       body: formData,
//   //     })
//   //       .then((response) => response.json())
//   //       .then((data) => {
//   //         // Process the response data if needed
//   //         console.log(data);
//   //       })
//   //       .catch((error) => {
//   //         // Handle the error
//   //         console.error(error);
//   //       });
//   //   }
//   // };

//   const uploadToServer = async () => {
//     // get the files from the fileList as an array
//     let files = data.fileList;
//     // initialize formData object
//     const formData = new FormData();
//     // loop over files and add to formData
//     files.forEach((file) => formData.append("files", file));

//     // Upload the files as a POST request to the server using fetch
//     // Note: /api/fileupload is not a real endpoint, it is just an example
//     const response = await fetch("/api/uploads", {
//       method: "POST",
//       body: formData,
//     });

//     //successful file upload
//     if (response.ok) {
//       alert("Files uploaded successfully");
//     } else {
//       // unsuccessful file upload
//       alert("Error uploading files");
//     }
//   };

//   const onFileDrop = (e) => {
//     const newFile = e.target.files[0];
//     if (newFile.name) {
//       setFile(newFile);
//       convertCSVFile(newFile); // Call the convertCSVFile function to save the file
//     }
//   };

//   // const onFileDrop = (e) => {
//   //   const newFile = e.target.files[0];
//   //   if (newFile.name) {
//   //     setFile(newFile);
//   //   }
//   // };

//   const onFileRemove = () => {
//     setFile(null);
//   };

//   const formatToKB = (bytes) => {
//     if (!+bytes) return "0 Bytes";

//     const k = 1024;
//     const i = Math.floor(Math.log(bytes) / Math.log(k));

//     return `${parseFloat((bytes / Math.pow(k, i)).toFixed(4))} KB`;
//   };

//   return (
//     <div className="w-full flex flex-row sm:flex-col gap-10 justify-center">
//       <div className="w-max-[800px] w-min-[250px]" ref={dragDropRef}>
//         <label
//           htmlFor="dropzone-file"
//           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-5"
//         >
//           <div className="flex flex-col items-center justify-center pt-5 pb-6">
//             <svg
//               aria-hidden="true"
//               className="w-10 h-10 mb-3 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//               ></path>
//             </svg>
//             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//               <span className="font-semibold">Click to upload</span> or drag and
//               drop
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">CSV only</p>
//           </div>
//           <input
//             onChange={onFileDrop}
//             id="dropzone-file"
//             type="file"
//             accept=".csv"
//             className="hidden"
//           />
//         </label>
//       </div>
//       <div className="flex flex-col justify-between items-start">
//         <ul
//           className={`${
//             !file ? "opacity-0" : "opacity-1"
//           } max-w-md divide-y divide-gray-200 dark:divide-gray-700`}
//         >
//           <li className="pb-3 sm:pb-4">
//             <div className="flex items-center space-x-4">
//               <div className="flex-shrink-0">
//                 <FontAwesomeIcon size="xl" icon={faFileCsv} />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                   {file?.name}
//                 </p>
//                 <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                   {formatToKB(file?.size)}
//                 </p>
//               </div>
//               <span className="cursor-pointer" onClick={onFileRemove}>
//                 X
//               </span>
//             </div>
//           </li>
//         </ul>
//         <Button
//           onClick={() => uploadToServer} // Pass the file as an argument
//           className={`${!file && `!opacity-50 !cursor-not-allowed`}`}
//         >
//           Generate charts
//         </Button>
//         {/* <Button
//           onClick={uploadToServer}
//           className={`${!file && `!opacity-50 !cursor-not-allowed`}`}
//         >
//           Generate charts
//         </Button> */}
//       </div>
//     </div>
//   );
// }
