//  POC file step 4 : combine it in page

import React from "react";
import UploadImageForm from "@/components/uploadfile/uploadImageForm";
import FileTable from "@/components/uploadfile/fileTable";
import { Toaster } from "react-hot-toast";
export default function FileUpload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-8">
      <Toaster />
      <h1 className="text-3xl">Select your BEST picture🖼️</h1>
      <UploadImageForm />
      <h1 className="text-3xl">All Files🗃️</h1>
      <FileTable />
    </main>
  );
}
