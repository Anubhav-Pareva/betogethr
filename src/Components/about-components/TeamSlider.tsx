"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { images } from "../../Constants/Images";
import { teamData } from "../../Constants/TempData";

export default function TeamSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamData.length) % teamData.length
    );
  };

  const current = teamData[currentIndex];

  return (
    <section className="bg-gray-900 text-center py-10 px-3 md:px-10">
      {/* Testimonial Card */}
      <div className="relative flex flex-col items-center max-w-3xl lg:max-w-5xl mx-auto bg-black/30 shadow-lg rounded-2xl p-4 md:p-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex flex-col md:flex-row h-full md:h-130 items-center w-full">
          
          <div className="h-full flex-1 w-full md:max-w-[300px] rounded-2xl overflow-hidden">
            <img src={current.img} className="h-[300px] sm:h-[500px] md:h-full w-full object-cover object-top" />
          </div>
          <div className="px-1 py-3 flex flex-col justify-start gap-2 h-[90%] bg-violet-500 md:rounded-tr-2xl rounded-tl-2xl md:rounded-tl-none rounded-br-2xl flex-1">
            <div className="flex-col gap-1">
              <p className="text-left text-sm text-gray-900 font-bold">Name:</p>
              <p className="text-center text-white text-md">{current.name}</p>
            </div>
            <div className="flex-col gap-1">
              <p className="text-left text-sm text-gray-900 font-bold">Code Name:</p>
              <p className="text-center text-white text-md">{current.codeName}</p>
            </div>
            <div className="flex-col gap-1">
              <p className="text-left text-sm text-gray-900 font-bold">Role:</p>
              <p className="text-center text-white text-md">{current.role}</p>
            </div>
            <div className="flex-col gap-1">
              <p className="text-left text-sm text-gray-900 font-bold">
                Expertise:
              </p>
              <p className="text-center text-white text-md">
                {current.expertise}
              </p>
            </div>
            <div className="flex-col gap-1">
              <p className="text-left text-sm text-gray-900 font-bold">
                Bio:
              </p>
              <p className="text-center text-white text-md">
                {current.bio}
              </p>
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-6 md:-right-10 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination (avatars) */}
      <div className="flex justify-center gap-4 mt-10">
        {teamData.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 bg-gray-600 rounded-full border-2 transition ${
              i === currentIndex
                ? "border-blue-500 scale-150"
                : "border-transparent opacity-70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
