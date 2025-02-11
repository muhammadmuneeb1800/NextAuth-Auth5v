import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardHome() {
  const session = await auth();
  if (!session) {
    return redirect("/")
  }
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <h1>Dashboard Home Page</h1>
      </div>
    </>
  );
}
