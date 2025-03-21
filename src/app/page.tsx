import React from "react";

import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAddPhotoAlternate } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-8">
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/fileupload"
          className="bg-cinnamon flex h-40 w-80 flex-col items-center justify-center space-y-2 rounded-xl text-center text-3xl text-white transition-all duration-400 hover:-translate-y-2 hover:bg-indigo-600"
        >
          <MdAddPhotoAlternate />
          <p>Photo Upload</p>
        </Link>
        <Link
          href="/resetpass"
          className="bg-cinnamon flex h-40 w-80 flex-col items-center justify-center space-y-2 rounded-xl text-center text-3xl text-white transition-all duration-400 hover:-translate-y-2 hover:bg-indigo-600"
        >
          <RiLockPasswordFill />
          <p>Email Reset Password</p>
        </Link>
      </div>
    </main>
  );
}
