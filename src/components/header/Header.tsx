import { auth } from "@/lib/auth";
import Link from "next/link";
import Logout from "../logout/Logout";
import Image from "next/image";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Logo</Link>
        </div>
        <nav className="hidden md:flex gap-6 text-lg">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/store" className="hover:text-blue-600">
            Store
          </Link>
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
        </nav>
        <div>
          {session ? (
            <div className="flex justify-center items-center gap-3">
              {session?.user?.name}
              {session.user?.image && (
                <Image
                  className="rounded-full"
                  src={session?.user?.image}
                  alt={"User Avatars"}
                  width={50}
                  height={50}
                />
              )}
              <Logout />
            </div>
          ) : (
            <div>
              <Link
                href={"/signIn"}
                className="bg-blue-500 text-white p-3 rounded"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
