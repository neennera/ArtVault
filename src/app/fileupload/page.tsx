//  POC file step 4 : combine it in page
import UploadImageForm from "@/components/uploadfile/uploadImageForm";
import { Toaster } from "react-hot-toast";
export default function FileUpload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-8">
      <Toaster />
      <h1 className="text-3xl">Select your BEST picture🖼️</h1>
      <UploadImageForm />
    </main>
  );
}
