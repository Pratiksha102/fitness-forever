"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient"; // Import Supabase client

export function Header() {
  const { data: session } = useSession();

  useEffect(() => {
    const storeUserInSupabase = async () => {
      if (!session?.user) return;

      const { name, email } = session.user;

      try {
        // Check if the user already exists in Supabase
        const { data: existingUser, error } = await supabase
          .from("users")
          .select("id")
          .eq("email", email)
          .single();

        if (!existingUser) {
          // Insert new user into Supabase
          const { error: insertError } = await supabase.from("users").insert([
            {
              name,
              email,
            },
          ]);

          if (insertError) {
            console.error("Error inserting user into Supabase:", insertError);
          }
        }
      } catch (error) {
        console.error("Error checking/inserting user:", error);
      }
    };

    storeUserInSupabase();
  }, [session]);

  return (
    <header className="border-b bg-black border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-white">
          <h1 className="text-xl font-bold">Fitness Forever</h1>
        </Link>

        {session ? (
          <div className="flex items-center gap-4">
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
