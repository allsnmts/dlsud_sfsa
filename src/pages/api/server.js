import { exec } from "child_process";
import path from "path";

export default function handler(req, res) {
  const pythonScriptPath = path.join(
    process.cwd(),
    "src",
    "pages",
    "api",
    "pythonScript.py"
  );

  const pythonProcess = exec(
    `python ${pythonScriptPath}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        return res.status(500).json({ error: "Internal server error" });
      }

      console.log(`Python script output: ${stdout}`);
      res.status(200).json({ message: "Python script executed successfully" });
    }
  );
}
