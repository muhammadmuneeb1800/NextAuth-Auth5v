"use client";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function Store() {
  useEffect(() => {
    async function session() {
      const sessionData = await getSession();
      if (!sessionData) {
        return redirect("/");
      }
    }
    session();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <h1>Store Page</h1>
      </div>
    </>
  );
}
