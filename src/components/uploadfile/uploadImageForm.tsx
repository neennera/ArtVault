"use client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import uploadfile from "./serverUploadFile";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { NoUploadPlaceHolder, UploadPlaceHolder } from "./placeholder";

const UploadImageForm = () => {
  // ------ art tag value : select in select input ------
  const [selectedTag, setSelectedTag] = useState("");

  // ------ switching file upload placeholder ------
  const [fileUploaded, setFileUploaded] = useState<File | null>(null); // Track the uploaded file
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setFileUploaded(file); // Update the state with the selected file
  }

  // ------ file upload part ------
  // you have to config body size limit in next.config.js
  // ref : https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions#bodysizelimit

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // const file = formData.get("imagefile") as File;
    const file = fileUploaded;
    const filename = formData.get("filename") as string;
    const filecat = formData.get("filecat") as string;
    // console.log(file); // log file metadata

    // Check if the file exists and is valid
    if (!file || file.size === 0) {
      toast.error("No file selected or file is empty.");
      return;
    }

    // Get the file extension from the file type
    const fileType = file.type; // e.g., "image/png"
    const fileExtension = fileType.split("/")[1]; // Extract "png"
    const fullFullename = `${filename}.${fileExtension}`; // Combine filename and extension

    // Check file name
    if (!filename || filename === "") {
      toast.error("No filename");
      return;
    }
    await toast.promise(
      uploadfile({ file, filename: fullFullename, filecat }),
      {
        loading: "Uploading file...",
        success: "File uploaded successfully!",
        error: "File upload failed. Please try again.",
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 p-5 rounded-xl shadow-xl w-600 max-w-md mx-auto bg-cinnamon text-gray-100"
    >
      <div className="flex flex-col space-y-2">
        <Label htmlFor="file" className="text-xl font-medium">
          File
        </Label>

        <div className="flex items-center justify-center w-full">
          {fileUploaded ? (
            <UploadPlaceHolder />
          ) : (
            <NoUploadPlaceHolder onFileChange={handleFileChange} />
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="file" className="text-xl font-medium">
          File Name
        </Label>
        <input
          type="text"
          name="filename"
          placeholder="Enter filename"
          className="p-3 bg-white rounded-lg shadow-md text-gray-700"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Label className="text-xl font-medium">File Category</Label>
        <select
          name="filecat"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="p-3 bg-white rounded-lg shadow-md text-gray-700"
          required
        >
          <option value="">Select Tag</option>
          <option value="art">Art</option>
          <option value="design">Design</option>
          <option value="photography">Photography</option>
          <option value="document">Document</option>
        </select>
      </div>

      <Button className="p-4 text-white font-bold bg-ameri text-xl cursor-pointer hover:-translate-y-1.5 transition-all">
        Upload 🚀
      </Button>
    </form>
  );
};
export default UploadImageForm;
