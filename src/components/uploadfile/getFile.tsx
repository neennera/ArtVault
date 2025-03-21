// POC file step 5 : function to get file and get filename

// "use server";
import toast from "react-hot-toast";

export async function getPDFFile(filename: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Adjust base URL
    const response = await fetch(
      `${baseUrl}/api/get-pdf?filename=${encodeURIComponent(filename)}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  } catch (error: unknown) {
    console.error(error);
    toast.error(`Failed to download the PDF file: ${error}`);
  }
}
