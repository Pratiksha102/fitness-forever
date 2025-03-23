import React from "react";

const videos = [
  { id: "wIynl3at0Rs", title: "Full Body Workout - No Equipment" },
  { id: "dQw4w9WgXcQ", title: "Cardio Blast - Burn Calories Fast" },
  { id: "hT_nvWreIhg", title: "Strength Training - Build Muscle" },
];

export default function WorkoutVideo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">Workout Videos</h1>
      <p className="text-lg text-gray-400 mb-8">
        Follow along with these guided workout sessions to stay fit and active.
      </p>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="w-full max-w-md bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-3 text-gray-200">{video.title}</h2>
            <iframe
              width="100%"
              height="250"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
