"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { icons } from "../../Constants/Icons";

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      text: "I like Filteroff because it’s different from the typical swiping apps. You actually get a sense of the person you’re talking to and it's a much more personal way to meet people.",
      name: "Carlos F.",
      title: "Product Designer at Uber",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "This app helped me meet some of the most amazing people. The video-first approach feels genuine and real.",
      name: "Samantha R.",
      title: "Marketing Manager at Airbnb",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "HER gives me a sense of belonging and comfort. It’s not just a dating app—it’s a community.",
      name: "Jordan L.",
      title: "Freelance Artist",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-gray-900 text-center py-20 px-6 md:px-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-light text-blue-50 mb-10">
        What people are saying about us
      </h2>

      {/* Testimonial Card */}
      <div className="relative flex flex-col items-center max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Quote Icon */}
        <img src={icons.quotation} className="w-14 h-14"/>

        {/* Text */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          {current.text}
        </p>

        {/* Avatar + Info */}
        <div className="flex flex-col items-center">
          <img
            src={current.avatar}
            alt={current.name}
            className="w-16 h-16 rounded-full border-4 border-white shadow-md mb-3"
          />
          <h4 className="font-semibold text-gray-900">{current.name}</h4>
          <p className="text-sm text-gray-500">{current.title}</p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-6 md:-right-10 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination (avatars) */}
      <div className="flex justify-center gap-4 mt-10">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setCurrentIndex(i)}
            className={`w-10 h-10 rounded-full border-2 transition ${
              i === currentIndex
                ? "border-blue-500 scale-150"
                : "border-transparent opacity-70"
            }`}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-full h-full rounded-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
