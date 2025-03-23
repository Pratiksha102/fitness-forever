"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient"; // Import Supabase client

const planDetails = {
  "3-month": {
    name: "3-Month Plan",
    price: 1000,
    desc: "Kickstart your fitness journey with our short-term plan.",
    image: "/images/hero-slide-3.jpg",
    features: [
      "Access to gym",
      "Personalized workout plan",
      "Basic diet consultation",
    ],
  },
  "6-month": {
    name: "6-Month Plan",
    price: 1509,
    desc: "A balanced approach to achieving your fitness goals.",
    image: "/images/hero-slide-3.jpg",
    features: [
      "Extended gym access",
      "Customized diet plan",
      "Progress tracking",
    ],
  },
  "1-year": {
    name: "1-Year Plan",
    price: 2000,
    desc: "Commit to long-term transformation with our best-value plan.",
    image: "/images/hero-slide-3.jpg",
    features: [
      "Unlimited gym access",
      "Personal trainer support",
      "Advanced diet consultation",
    ],
  },
};

export default function PlanDetail() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const plan = planDetails[params.id as keyof typeof planDetails];

  useEffect(() => {
    const checkUserInDatabase = async () => {
      if (!session?.user?.email) return;

      const { data, error } = await supabase
        .from("users")
        .select("id")
        .eq("email", session.user.email)
        .single();

      if (error) {
        console.error("Error checking user:", error);
      }

      console.log("get user from databasee",data)

      setUserExists(!!data);
    };

    checkUserInDatabase();
  }, [session]);

  const handleBuyNow = async () => {
    if (!session) {
      alert("Please sign in with Google to proceed.");
      signIn("google");
      return;
    }

    if (!userExists) {
      alert("User not found in database. Please sign in again.");
      return;
    }

    setLoading(true);

    // Redirect to payments page
    router.push(`/payments/plan=${params.id}`);
  };

  if (!plan) {
    return <p className="text-white text-center">Plan not found.</p>;
  }

  return (
    <div className="max-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white p-8">
      {/* Left - Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={plan.image}
          alt={plan.name}
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right - Details */}
      <div className="md:w-1/2 flex flex-col gap-4 text-left md:pl-12">
        <h1 className="text-3xl font-bold">{plan.name}</h1>
        <p className="text-lg text-gray-300">{plan.desc}</p>

        {/* Features List */}
        <ul className="list-disc text-gray-400 pl-5">
          {plan.features.map((feature, index) => (
            <li key={index} className="mb-1">
              {feature}
            </li>
          ))}
        </ul>

        <span className="text-2xl font-semibold text-yellow-400">
          ₹ {plan.price}
        </span>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className={`bg-yellow-400 text-black font-medium py-2 px-6 rounded text-sm hover:bg-yellow-500 transition mt-4 inline-block w-[150px] ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Buy Now"}
        </button>
      </div>
    </div>
  );
}
