"use client";

export default function Plans() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* 3-Month Plan */}
        <div className="bg-black p-6 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 border-2 border-transparent bg-gradient-to-b from-white/10 to-yellow-500/30">
          <h3 className="text-2xl font-bold mb-4">3-Month Plan</h3>
          <p className="text-base text-gray-300 mb-4">Kickstart your fitness journey with our short-term plan. Perfect for building momentum and forming new habits.</p>
          <span className="block text-xl font-semibold text-yellow-400 mb-4">₹ 1000</span>
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition">Get Started</button>
        </div>
        
        {/* 6-Month Plan */}
        <div className="bg-black p-6 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 border-2 border-transparent bg-gradient-to-b from-white/10 to-yellow-500/30">
          <h3 className="text-2xl font-bold mb-4">6-Month Plan</h3>
          <p className="text-base text-gray-300 mb-4">A balanced approach to achieving your fitness goals with consistency and dedication.</p>
          <span className="block text-xl font-semibold text-yellow-400 mb-4">₹ 1509</span>
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition">Get Started</button>
        </div>
        
        {/* 1-Year Plan */}
        <div className="bg-black p-6 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 border-2 border-transparent bg-gradient-to-b from-white/10 to-yellow-500/30">
          <h3 className="text-2xl font-bold mb-4">1-Year Plan</h3>
          <p className="text-base text-gray-300 mb-4">Commit to long-term transformation with our best-value plan for sustained fitness success.</p>
          <span className="block text-xl font-semibold text-yellow-400 mb-4">₹ 2000</span>
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition">Get Started</button>
        </div>
      </div>
    </section>
  );
}
