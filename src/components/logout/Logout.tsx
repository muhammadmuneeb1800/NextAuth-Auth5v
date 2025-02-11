"use client";

import { signOut } from "next-auth/react";


export default function Logout() {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded"
      >
        Logout
      </button>
    </>
  );
}
