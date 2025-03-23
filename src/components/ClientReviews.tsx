"use client";

import { useEffect, useRef } from "react";

export default function ClientReviews() {
  const reviews = [
    {
      name: "John Doe",
      review:
        "FitLife has completely transformed my fitness journey. The plans are well-structured and easy to follow!",
      rating: 5,
      image: "/images/hero-slide-1.jpg",
    },
    {
      name: "Sarah Smith",
      review:
        "I love the support from trainers and the community. Highly recommend the 6-month plan!",
      rating: 4,
      image: "/images/hero-slide-2.jpg",
    },
    {
      name: "Mike Johnson",
      review:
        "The 1-year plan was the best investment in my health. Great workouts and amazing progress!",
      rating: 5,
      image: "/images/hero-slide-2.jpg",
    },
    {
      name: "Emily Davis",
      review:
        "I’ve never felt more confident and strong. The trainers really know how to push you to your best!",
      rating: 5,
      image: "/images/hero-slide-2.jpg",
    },
    {
      name: "Chris Wilson",
      review:
        "Joining FitLife was the best decision I’ve ever made. The results speak for themselves!",
      rating: 5,
      image: "/images/hero-slide-2.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 3;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-black text-white flex flex-col items-center p-8 py-16 relative overflow-hidden">
      <div
        className="w-full max-w-6xl flex items-center overflow-hidden"
        ref={scrollRef}
      >
        <div className="flex space-x-4 whitespace-nowrap w-max animate-loop-scroll">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="bg-black p-3 rounded-lg shadow-lg text-center transform transition-all duration-500 hover:scale-105 animate-float relative min-w-[100px]"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col w-60 bg-white/10 backdrop-blur-lg p-3 rounded-2xl justify-center items-center shadow-lg border border-white/20">
                  <img
                    src={review.image}
                    alt="Review"
                    className="w-full h-auto rounded-xl shadow-md object-cover max-h-80 transition-transform duration-300 hover:scale-105"
                  />
                 
                </div>

                <p className="text-xs text-gray-300 italic leading-relaxed text-wrap">
                  "{review.review}"
                </p>
                <h3 className="text-sm font-semibold text-yellow-400">
                  - {review.name}
                </h3>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
