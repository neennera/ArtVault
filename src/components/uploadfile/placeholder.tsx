// POC file step 1 : decorate image dropper
import React from "react";

export const NoUploadPlaceHolder = ({
  onFileChange,
}: {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          PNG, JPG (MAX. 800x400px)
        </p>
      </div>
      <input
        name="imagefile"
        type="file"
        className="hidden"
        onChange={onFileChange}
      />
    </label>
  );
};

export const UploadPlaceHolder = () => {
  return (
    <label className="bg-lilac flex h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
        </svg>
        <p className="mb-2 text-sm text-black dark:text-gray-400">
          File Uploaded
        </p>
      </div>
    </label>
  );
};
