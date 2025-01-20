import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="border-b bg-black border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Fitness Forever</h1>
        <NavigationMenu>
          <a href="/" className="hover:underline px-3 py-2 text-gray-100">
            Home
          </a>
          <a href="/about" className="hover:underline px-3 py-2 text-gray-100">
            About
          </a>
        </NavigationMenu>
        <Button variant="outline" className="text-gray-100 border-gray-500">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
