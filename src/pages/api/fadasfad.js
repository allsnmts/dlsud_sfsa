import { exec } from "child_process";
import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const { file } = req.body; // Assuming the uploaded file is available in the request body

  // Save the uploaded file to a temporary location
  const uploadedFile = req.files.file;
  const filePath = path.join(
    process.cwd(),
    "api",
    "uploads",
    uploadedFile.name
  );

  uploadedFile.mv(filePath, (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // File saved successfully
    const pythonScriptPath = path.join(
      process.cwd(),
      "src",
      "pages",
      "api",
      "pythonScript.py"
    );

    // Pass the filePath as an argument to the Python script
    const pythonProcess = exec(
      `python ${pythonScriptPath} ${filePath}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Python script: ${error}`);
          return res.status(500).json({ error: "Internal server error" });
        }
        console.log(`Python script output: ${stdout}`);

        // Optionally, you can delete the uploaded file after processing
        fs.unlink(filePath, (err) => {
          if (err) console.error("Error deleting file:", err);
        });

        res
          .status(200)
          .json({ message: "Python script executed successfully" });
      }
    );
  });
}

// import { exec } from "child_process";
// import path from "path";

// export default function handler(req, res) {
//   const { file } = req.body; // Assuming the uploaded file is available in the request body

//   // Save the uploaded file to a temporary location
//   const filePath = path.join(
//     process.cwd(),
//     "src",
//     "pages",
//     "api",
//     "uploadedFile"
//   );
//   // Save the file to the specified filePath using fs or any file management library
//   // ...

//   const pythonScriptPath = path.join(
//     process.cwd(),
//     "src",
//     "pages",
//     "api",
//     "pythonScript.py"
//   );

//   // Pass the filePath as an argument to the Python script
//   const pythonProcess = exec(
//     `python ${pythonScriptPath} ${filePath}`,
//     (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error executing Python script: ${error}`);
//         return res.status(500).json({ error: "Internal server error" });
//       }
//       console.log(`Python script output: ${stdout}`);
//       res.status(200).json({ message: "Python script executed successfully" });
//     }
//   );
// }
