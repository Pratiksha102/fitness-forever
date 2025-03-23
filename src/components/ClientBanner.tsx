"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const [clients, setClients] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);

  useEffect(() => {
    const increment = setInterval(() => {
      setClients((prev) => (prev < 5000 ? prev + 10 : 5000));
      setSessions((prev) => (prev < 25000 ? prev + 20 : 25000));
      setSubscriptions((prev) => (prev < 1200 ? prev + 2 : 1200));

      if (clients >= 5000 && sessions >= 25000 && subscriptions >= 1200) {
        clearInterval(increment);
      }
    }, 100);

    return () => clearInterval(increment);
  }, []);

  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center min-h-[250px] text-center px-6 py-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 max-w-3xl">
        {/* Animated Heading */}
        <motion.h1
          className="text-2xl md:text-4xl font-semibold text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Fitness That Transforms
        </motion.h1>

        <p className="text-sm md:text-base text-gray-400 mt-2">
          Trusted by thousands in their fitness journey.
        </p>

        {/* Rolling Metrics */}
        <div className="mt-5 flex flex-wrap gap-6 justify-center">
          <Metric title="Clients Trained" value={clients} />
          <Metric title="Sessions Completed" value={sessions} />
          <Metric title="Active Plans" value={subscriptions} />
        </div>
      </div>
    </section>
  );
}

// Reusable Metric Component
function Metric({ title, value }: { title: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xs md:text-sm text-gray-400">{title}</p>
      <h2 className="text-2xl md:text-4xl font-medium text-white">
        {value.toLocaleString()}
      </h2>
    </div>
  );
}
