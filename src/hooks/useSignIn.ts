"use server";
import { signIn, signOut } from "@/lib/auth";

export async function Login(providerName: string) {
  await signIn(providerName, { redirectTo: "/" });
}

export async function Logout() {
  await signOut();
}

export async function LogIn(email: string, password: string) {
  try {
    const user = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!user) {
      throw new Error("Invalid email or password");
    }
    return user;
  } catch (error) {
    console.log("Dataiis====", error);
  }
}
