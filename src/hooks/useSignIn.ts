"use server";

import { signIn, signOut } from "@/lib/auth";

export async function Login(providerName: string) {
  await signIn(providerName, { redirectTo: "/" });
}

export async function Logout() {
  await signOut();
}
