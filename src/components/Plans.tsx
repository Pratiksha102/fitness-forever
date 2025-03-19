"use client";
import { useRouter } from "next/navigation";

export default function Plans() {
  const router = useRouter();

  const handlePlanClick = (id: string) => {
    router.push(`./plans/${id}`);
  };

  const plans = [
    { id: "3-month", name: "3-Month Plan", price: 1000, desc: "Kickstart your fitness journey with our short-term plan." },
    { id: "6-month", name: "6-Month Plan", price: 1509, desc: "A balanced approach to achieving your fitness goals." },
    { id: "1-year", name: "1-Year Plan", price: 2000, desc: "Commit to long-term transformation with our best-value plan." }
  ];

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-black p-6 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 border-2 border-transparent bg-gradient-to-b from-white/10 to-yellow-500/30"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-base text-gray-300 mb-4">{plan.desc}</p>
            <span className="block text-xl font-semibold text-yellow-400 mb-4">₹ {plan.price}</span>
            <button
              className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition"
              onClick={() => handlePlanClick(plan.id)}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
