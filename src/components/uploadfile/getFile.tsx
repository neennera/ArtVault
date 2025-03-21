"use server";
import { promises as fs } from "fs";
import toast from "react-hot-toast";

export async function getPDFFile(filename: string) {
  try {
    const targetDir = "D:/.project/testdumpdata/";
    const data = await fs.readFile(`${targetDir}/${filename}`); // Reads file as Buffer
    const blob = new Blob([data], { type: "application/pdf" }); // Create Blob
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error: unknown) {
    toast.error(`Failed to read the PDF file: ${error}`);
  }
}

export async function getAllFilesName() {
  try {
    const folderPath = "D:/.project/testdumpdata/";
    const files = await fs.readdir(folderPath);
    console.log("Files found:", files);
    return files;
  } catch (error: unknown) {
    toast.error(`Can't fetch file names: ${error}`);
    return [];
  }
}
