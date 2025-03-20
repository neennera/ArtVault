"use client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import uploadfile from "./serverUploadFile";

const UploadImageForm = () => {
  // you have to config body size limit in next.config.js
  // ref : https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions#bodysizelimit

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const file = formData.get("imagefile") as File;
    const filename = formData.get("filename") as string;

    console.log(file);
    // log file metadata

    // Check if the file exists and is valid
    if (!file || file.size === 0) {
      toast.error("No file selected or file is empty.");
      return;
    }
    // Check file name
    if (!filename || filename === "") {
      toast.error("No filename");
      return;
    }
    await toast.promise(uploadfile({ file, filename }), {
      loading: "Uploading file...",
      success: "File uploaded successfully!",
      error: "File upload failed. Please try again.",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <input type="file" name="imagefile" accept=".png, .jpg, .pdf" />
      <input type="text" name="filename" placeholder="filename" />
      <Button className="bg-primary text-apricot font-gamja p-4 hover:bg-purple-300 hover:text-black cursor-pointer">
        Welcome to ArtVault 🎨
      </Button>
    </form>
  );
};
export default UploadImageForm;
