import UploadImageForm from "@/components/uploadfile/uploadImageForm";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-8 flex-col space-y-4">
      <Toaster />
      <h1 className="text-3xl">Select your BEST picture🖼️</h1>
      <UploadImageForm />
    </main>
  );
}
