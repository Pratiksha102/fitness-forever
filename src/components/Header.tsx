"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="border-b bg-black border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Fitness Forever</h1>

        {session ? (
          <div className="flex items-center gap-4">
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            )}
            <span className="text-sm text-white">{session.user?.name}</span>
            <Button
              variant="outline"
              className="text-gray-100 border-gray-500"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="outline"
            className="text-gray-100 border-gray-500"
            onClick={() => signIn("google")}
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
}
