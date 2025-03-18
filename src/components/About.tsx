"use client";

export default function About() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center p-8 pt-20 overflow-hidden z-0">
      {/* Background gradient with lower z-index */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50 z-0"></div>
      
      {/* Content with higher z-index */}
      <div className="max-w-3xl relative z-10">
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          At <span className="text-yellow-400 font-semibold">FitLife</span>, we believe in empowering individuals to achieve their fitness goals through expert guidance,
          community support, and cutting-edge technology. Whether you're just starting your journey or looking to
          push your limits, we're here to support you every step of the way.
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Our team of certified trainers, nutritionists, and wellness experts are dedicated to helping you build
          sustainable habits that lead to a healthier lifestyle. From personalized workout plans to nutrition
          guidance, we provide everything you need to succeed.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Join our thriving community and take the first step towards a <span className="text-yellow-400 font-semibold">stronger, healthier you</span>. Your fitness
          journey starts here!
        </p>
      </div>
    </section>
  );
}
