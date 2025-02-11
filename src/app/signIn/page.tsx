"use client";

import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Login } from "@/hooks/useSignIn";
import { getSession } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    router.push("/dashboard");
  };

  useEffect(() => {
    async function session() {
      const sessionData = await getSession();
      if (sessionData) {
        redirect("/");
      }
    }
    session();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <div className="flex flex-col space-y-2 mt-4">
          <button
            onClick={() => Login("github")}
            className="w-full py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            Sign in with GitHub
          </button>
          <button className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
