import React from "react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* LEFT CONTENT */}
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800">
          Find your love
        </h2>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          By being{" "}
          <span className="bg-linear-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Yourself
          </span>
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-md">
          We designed a platform for people of LGBT to find their love without
          being judged.
        </p>

        {/* Gradient Button */}
        <button className="bg-linear-to-r from-yellow-400 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-all">
          YOUR YOUR LOVE
        </button>

        {/* Features */}
        <div className="flex flex-wrap gap-8 pt-8">
          <div className="flex flex-col items-start">
            <img src="/icons/heart.svg" alt="Members" className="w-6 h-6" />
            <p className="font-bold text-gray-800">10k+ Members</p>
            <p className="text-gray-500 text-sm">
              Over thousands of people are using happymatch
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src="/icons/ai.svg" alt="AI" className="w-6 h-6" />
            <p className="font-bold text-gray-800">Smart AI</p>
            <p className="text-gray-500 text-sm">
              Best match based on intelligent algorithm
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src="/icons/star.svg" alt="Perfect Match" className="w-6 h-6" />
            <p className="font-bold text-gray-800">Perfect Match</p>
            <p className="text-gray-500 text-sm">
              10k+ people are happy using our platform
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - STACKED CARDS */}
      <div className="relative flex justify-center md:justify-end">
        {/* Card 1 */}
        <div className="absolute top-16 right-16 w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-xl transform rotate-[-6deg] bg-green-100">
          <img
            src="/images/card3.jpg"
            alt="Card 3"
            className="w-full h-80 object-cover"
          />
          <div className="p-4 text-center font-semibold text-green-700">
            Made with Love
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute top-8 right-8 w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-xl transform rotate-[-3deg] bg-yellow-100">
          <img
            src="/images/card2.jpg"
            alt="Card 2"
            className="w-full h-80 object-cover"
          />
          <div className="p-4 text-center font-semibold text-yellow-700">
            Meet People
          </div>
        </div>

        {/* Card 3 (front) */}
        <div className="relative w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-purple-500 to-pink-500">
          <img
            src="/images/card1.jpg"
            alt="Card 1"
            className="w-full h-80 object-cover"
          />
          <div className="p-4 text-center font-semibold text-white">
            Find your love
          </div>
        </div>
      </div>
    </section>
  );
}
