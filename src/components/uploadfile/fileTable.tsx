"use client";
import React, { useState, useEffect } from "react";
import { getAllFilesName, getPDFFile } from "./getFile";

const FileTable = () => {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    async function fetchFiles() {
      const data = await getAllFilesName();
      if (data) setFiles(data);
    }
    fetchFiles();
  }, []);

  return (
    <table className="min-w-full border-collapse rounded-lg border border-gray-300 shadow-md">
      <thead>
        <tr className="bg-ameri text-white">
          <th className="border border-gray-300 px-4 py-2">Filename</th>
          <th className="border border-gray-300 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {files.length === 0 ? (
          <tr>
            <td
              className="border border-gray-300 px-4 py-3 text-center text-gray-500"
              colSpan={2}
            >
              No files available
            </td>
          </tr>
        ) : (
          files.map((file) => (
            <tr key={file} className="bg-gray-200 even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-3">{file}</td>
              <td className="border border-gray-300 px-4 py-3 text-center">
                <button
                  className="cursor-pointer rounded-md bg-green-500 px-3 py-1 text-white transition-colors duration-200 hover:bg-green-600"
                  onClick={() => getPDFFile(file)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default FileTable;
