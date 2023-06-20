import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = new formidable();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send("");
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.path);
  fs.writeFileSync(`./public/${file.name}`, data);
  await fs.unlinkSync(file.path);
  return;
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};

// import formidable from "formidable";
// import fs from "fs";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const post = async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.parse(req, async function (err, fields, files) {
//     await saveFile(files.file);
//     return res.status(201).send("");
//   });
// };

// const saveFile = async (file) => {
//   const data = fs.readFileSync(file.path);
//   fs.writeFileSync(`./public/${file.name}`, data);
//   await fs.unlinkSync(file.path);
//   return;
// };

// export default (req, res) => {
//   req.method === "POST"
//     ? post(req, res)
//     : req.method === "PUT"
//     ? console.log("PUT")
//     : req.method === "DELETE"
//     ? console.log("DELETE")
//     : req.method === "GET"
//     ? console.log("GET")
//     : res.status(404).send("");
// };

// import formidable from "formidable";
// import fs from "fs";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   try {
//     if (req.method === "POST") {
//       const form = formidable({
//         multiples: true,
//         keepExtensions: true,
//       });

//       form.once("error", console.error);
//       form.on("fileBegin", (name, file) => {
//         console.log("start uploading: ", file.name);
//       });
//       form.on("aborted", () => console.log("Aborted..."));
//       form.once("end", () => {
//         console.log("Done!");
//       });

//       await form.parse(req, async (err, fields, files) => {
//         if (err) {
//           throw String(JSON.stringify(err, null, 2));
//         }

//         console.log(
//           "moving file: ",
//           files.file.path,
//           " to ",
//           `public/upload/${files.file.name}`
//         );

//         fs.renameSync(files.file.path, `public/upload/${files.file.name}`);

//         res.status(200).json({ message: "File uploaded successfully" });
//       });
//     } else {
//       throw String("Method not allowed");
//     }
//   } catch (error) {
//     res.status(400).json({ message: JSON.stringify(error, null, 2) });
//   }
// }

// function handler(req, res) {
//   try {
//     if (req.method === "POST") {
//       res.status(200).send(req.form);
//     } else {
//       throw String("Method not allowed");
//     }
//   } catch (error) {
//     res.status(400).json({ message: JSON.stringify(error, null, 2) });
//   }
// }

// export default uploadForm(handler);
// const express = require("express");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// const cors = require("cors");

// app.use(express.json()); // Parse JSON request bodies
// app.use(cors()); // Enable CORS

// // Serve the uploaded files statically
// app.use("/api/uploads", express.static(path.join(__dirname, "../uploads")));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "./api/uploads/")); // Update the destination path
//   },
//   filename: function (req, file, cb) {
//     const extension = path.extname(file.originalname);
//     cb(null, Date.now() + extension);
//   },
// });

// const upload = multer({ storage });

// // Endpoint to handle file upload
// app.post("/api/uploads", upload.single("file"), (req, res) => {
//   if (!req.file) {
//     res.status(400).json({ error: "No file uploaded" });
//     return;
//   }

//   // Process the uploaded file or save it to the desired location
//   // You can access the file details using req.file

//   res.json({ message: "File uploaded successfully" });
// });

// // Endpoint to handle GET request for "/api/uploads/:filename"
// app.get("/api/uploads/:filename", (req, res) => {
//   const filename = req.params.filename;
//   const filePath = path.join(__dirname, "./api/uploads", filename); // Update the path

//   res.sendFile(filePath);
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");

// // const app = express();
// // const cors = require("cors");

// // app.use(express.json()); // Parse JSON request bodies
// // app.use(cors()); // Enable CORS

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "./api/uploads/"); // Update the destination path
// //   },
// //   filename: function (req, file, cb) {
// //     const extension = path.extname(file.originalname);
// //     cb(null, Date.now() + extension);
// //   },
// // });

// // const upload = multer({ storage });

// // // Endpoint to handle file upload
// // app.post("/api/uploads", upload.single("file"), (req, res) => {
// //   if (!req.file) {
// //     res.status(400).json({ error: "No file uploaded" });
// //     return;
// //   }

// //   // Process the uploaded file or save it to the desired location
// //   // You can access the file details using req.file

// //   res.json({ message: "File uploaded successfully" });
// // });

// // // Endpoint to handle GET request for "/api/uploads/:filename"
// // app.get("/api/uploads/:filename", (req, res) => {
// //   const filename = req.params.filename;
// //   const filePath = path.join(__dirname, "./api/uploads", filename); // Update the path

// //   res.sendFile(filePath);
// // });

// // // Serve the uploaded files statically
// // app.use("/api/uploads", express.static(path.join(__dirname, "./api/uploads")));

// // // Start the server
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");

// // const app = express();

// // const cors = require("cors");

// // // Enable CORS
// // app.use(cors());

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "./api/uploads/"); // Update the destination path
// //   },
// //   filename: function (req, file, cb) {
// //     const extension = path.extname(file.originalname);
// //     cb(null, Date.now() + extension);
// //   },
// // });

// // const upload = multer({ storage });

// // app.get("/api/uploads/:filename", (req, res) => {
// //   const filename = req.params.filename;
// //   const filePath = path.join(__dirname, "./api/uploads", filename); // Update the path

// //   res.sendFile(filePath);
// // });

// // // Endpoint to handle file upload
// // app.post("/api/uploads", upload.single("file"), (req, res) => {
// //   if (!req.file) {
// //     res.status(400).json({ error: "No file uploaded" });
// //     return;
// //   }

// //   // Process the uploaded file or save it to the desired location
// //   // You can access the file details using req.file

// //   res.json({ message: "File uploaded successfully" });
// // });

// // // Endpoint to handle GET request for "/api/uploads/:filename"
// // app.get("/api/uploads/:filename", (req, res) => {
// //   const filename = req.params.filename;
// //   const filePath = path.join(__dirname, "api/uploads", filename);

// //   res.sendFile(filePath);
// // });

// // // Start the server
// // app.listen(5000, () => {
// //   console.log("Server is running on port 5000");
// // });

// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");

// // const app = express();

// // const cors = require("cors");

// // // Enable CORS
// // app.use(cors());

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "api/uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     const extension = path.extname(file.originalname);
// //     cb(null, Date.now() + extension);
// //   },
// // });
// // const upload = multer({ storage });

// // app.get("/", (req, res) => {
// //   res.send("Server is running");
// // });

// // // Endpoint to handle file upload
// // app.post("/api/uploads", upload.single("file"), (req, res) => {
// //   if (!req.file) {
// //     res.status(400).json({ error: "No file uploaded" });
// //     return;
// //   }

// //   // Process the uploaded file or save it to the desired location
// //   // You can access the file details using req.file

// //   res.json({ message: "File uploaded successfully" });
// // });

// // // Endpoint to handle GET request for "/api/uploads"
// // app.get("/api/uploads/:filename", (req, res) => {
// //   const filename = req.params.filename;
// //   const filePath = path.join(__dirname, "api/uploads", filename);

// //   res.sendFile(filePath);
// // });

// // // Start the server
// // app.listen(5000, () => {
// //   console.log("Server is running on port 5000");
// // });

// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");

// // const app = express();

// // const cors = require("cors");

// // // Enable CORS
// // app.use(cors());

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "api/uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     const extension = path.extname(file.originalname);
// //     cb(null, Date.now() + extension);
// //   },
// // });
// // const upload = multer({ storage });

// // // Endpoint to handle file upload
// // app.post("/api/uploads", upload.single("file"), (req, res) => {
// //   if (!req.file) {
// //     res.status(400).json({ error: "No file uploaded" });
// //     return;
// //   }

// //   // Process the uploaded file or save it to the desired location
// //   // You can access the file details using req.file

// //   res.json({ message: "File uploaded successfully" });
// // });

// // // Endpoint to handle GET request for "/api/uploads"
// // app.get("/api/uploads/:filename", (req, res) => {
// //   const filename = req.params.filename;
// //   const filePath = path.join(__dirname, "api/uploads", filename);

// //   res.sendFile(filePath);
// // });

// // // Start the server
// // app.listen(5000, () => {
// //   console.log("Server is running on port 5000");
// // });

// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");

// // const app = express();

// // const cors = require("cors");

// // // Enable CORS
// // app.use(cors());

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "api/uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     const extension = path.extname(file.originalname);
// //     cb(null, Date.now() + extension);
// //   },
// // });
// // const upload = multer({ storage });

// // app.get("/", (req, res) => {
// //   res.send("Server is running");
// // });

// // // Endpoint to handle file upload
// // app.post("/api/uploads/single", upload.single("file"), (req, res) => {
// //   if (!req.file) {
// //     res.status(400).json({ error: "No file uploaded" });
// //     return;
// //   }

// //   // Process the uploaded file or save it to the desired location
// //   // You can access the file details using req.file

// //   res.json({ message: "File uploaded successfully" });
// // });

// // // Endpoint to handle GET request for "/api/uploads"
// // app.get("/api/uploads/:filename", (req, res) => {
// //   const filename = req.params.filename;
// //   const filePath = path.join(__dirname, "api/uploads", filename);

// //   res.sendFile(filePath);
// // });

// // // Start the server
// // app.listen(5000, () => {
// //   console.log("Server is running on port 5000");
// // });

// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");

// // const app = express();

// // const cors = require("cors");

// // // Enable CORS
// // app.use(cors());

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "api/uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     const extension = path.extname(file.originalname);
// //     cb(null, Date.now() + extension);
// //   },
// // });
// // const upload = multer({ storage });

// // app.get("/", (req, res) => {
// //   res.send("Server is running"); // or any other response you want to send
// // });
// // // Endpoint to handle file upload
// // app.post("/api/uploads", upload.single("file"), (req, res) => {
// //   // if (!req.file) {
// //   //   res.status(400).json({ error: "No file uploaded" });
// //   //   return;
// //   // }

// //   // Process the uploaded file or save it to the desired location
// //   // You can access the file details using req.file

// //   res.json({ message: "File uploaded successfully" });
// // });

// // // Handle GET request at the root URL
// // // app.get("/", (req, res) => {
// // //   res.send("Server is running"); // or any other response you want to send
// // // });
// // // Endpoint to handle GET request for "/api/uploads"
// // app.get("/api/uploads/:filename", (req, res) => {
// //   const filename = req.params.filename;
// //   const filePath = path.join(__dirname, "api/uploads", filename);

// //   res.sendFile(filePath);
// // });

// // // Start the server
// // app.listen(5000, () => {
// //   console.log("Server is running on port 5000");
// // });

// // // const express = require("express");
// // // const multer = require("multer");
// // // const path = require("path");

// // // const app = express();

// // // const cors = require("cors");

// // // // Enable CORS
// // // app.use(cors());

// // // const storage = multer.diskStorage({
// // //   destination: function (req, file, cb) {
// // //     cb(null, "api/uploads/");
// // //   },
// // //   filename: function (req, file, cb) {
// // //     const extension = path.extname(file.originalname);
// // //     cb(null, Date.now() + extension);
// // //   },
// // // });
// // // const upload = multer({ storage });

// // // // Endpoint to handle file upload
// // // app.post("/api/uploads", upload.single("file"), (req, res) => {
// // //   if (!req.file) {
// // //     res.status(400).json({ error: "No file uploaded" });
// // //     return;
// // //   }

// // //   // Process the uploaded file or save it to the desired location
// // //   // You can access the file details using req.file

// // //   res.json({ message: "File uploaded successfully" });
// // // });

// // // // Handle GET request at the root URL
// // // // app.get("/", (req, res) => {
// // // //   res.send("Server is running"); // or any other response you want to send
// // // // });
// // // // Endpoint to handle GET request for "/api/uploads"
// // // app.get("/api/uploads", (req, res) => {
// // //   // Handle GET request for "/api/uploads"

// // //   // Check if a file was uploaded
// // //   if (!req.file) {
// // //     res.status(400).json({ error: "No file uploaded" });
// // //     return;
// // //   }

// // //   // Send the file to the client
// // //   const { originalname, filename, path } = req.file;
// // //   res.sendFile(path);

// // //   // Alternatively, you can send the file details as JSON
// // //   // res.json({ originalname, filename, path });
// // // });

// // // // Start the server
// // // app.listen(5000, () => {
// // //   console.log("Server is running on port 5000");
// // // });
