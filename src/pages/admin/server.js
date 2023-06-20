const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" }); // Define the folder where the uploaded files will be stored

// Define the route to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  // Access the uploaded file using req.file
  console.log(req.file);

  // Return a response to the client
  res.json({ message: "File uploaded successfully." });
});

// Start the server
const port = 3000; // Specify the desired port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
