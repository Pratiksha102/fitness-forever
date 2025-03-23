"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import Plans from "@/components/Plans";
import ClientReviews from "@/components/ClientReviews";
import WorkoutVideo from "@/components/WorkoutVideo";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <section className="relative mb-16">
        <HeroSlider />
        <About />
        <Plans />
        <ClientReviews />
        <WorkoutVideo/>
      </section>
    </div>
  );
}
