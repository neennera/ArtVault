"use server";
import { promises as fs } from "fs";
async function uploadfile({
  file,
  filename,
  filecat,
}: {
  file: File;
  filename: string;
  filecat: string;
}) {
  try {
    // store data in server at directory '/public/...'
    const data = await file.arrayBuffer();

    if (!data) throw new Error("File content not valid");
    if (!filename) throw new Error("No file Name");

    await fs.writeFile(
      `public/filestore/${filecat}-${filename}`,
      Buffer.from(data),
    );
  } catch (error) {
    // Throw an error to trigger the "error" toast
    throw new Error(`File upload failed, ${error}`);
  }
}

export default uploadfile;
