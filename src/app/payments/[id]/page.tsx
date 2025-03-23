"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentsPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [session, router]);

  const handlePayment = async () => {
    if (!session) {
      alert("Please log in first");
      return;
    }

    // const options = {
    //   key: "RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
    //   amount: 1000 * 100, // Amount in paise (₹1000)
    //   currency: "INR",
    //   name: "Fitness Forever",
    //   description: "Payment for Fitness Plan",
    //   image: "/logo.png", // Replace with your logo
    //   handler: function (response: any) {
    //     alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
    //     router.push("/success"); // Redirect on success
    //   },
    //   prefill: {
    //     name: session?.user?.name || "User",
    //     email: session?.user?.email || "user@example.com",
    //   },
    //   theme: {
    //     color: "#facc15", // Yellow theme
    //   },
    // };

    // const razor = new (window as any).Razorpay(options);
    // razor.open();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Complete Your Payment</h1>
      <p className="text-lg text-gray-400">Secure Razorpay Checkout</p>

      <button
        onClick={handlePayment}
        className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-500"
      >
        Pay Now
      </button>
    </div>
  );
}
