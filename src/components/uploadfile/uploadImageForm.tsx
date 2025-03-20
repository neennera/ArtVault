"use client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import uploadfile from "./serverUploadFile";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";

const UploadImageForm = () => {
  const [selectedTag, setSelectedTag] = useState("");
  // file upload part
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 p-5 rounded-xl shadow-xl w-600 max-w-md mx-auto bg-cinnamon text-gray-100"
    >
      <div className="flex flex-col space-y-2">
        <Label htmlFor="file" className="text-xl font-medium">
          File
        </Label>

        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG (MAX. 800x400px)
              </p>
              <input id="imagefile" type="file" className="hidden" />
            </div>
          </label>
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
        <Label htmlFor="file" className="text-xl font-medium">
          File Category
        </Label>
        <select
          name="tag"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="p-3 bg-white rounded-lg shadow-md text-gray-700"
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
