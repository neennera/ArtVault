// POC file step 5 : function to get file and get filename

"use server";
import { promises as fs } from "fs";

export async function getAllFilesName() {
  try {
    const folderPath = "D:/.project/testdumpdata/";
    const files = await fs.readdir(folderPath);
    console.log("Files found:", files);
    return files;
  } catch {
    return [];
  }
}
