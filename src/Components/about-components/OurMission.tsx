import { icons } from "../../Constants/Icons";

export default function OurMission() {
  return (
    <section className="text-white flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-8 flex-1 h-full">
      {/* Left Accent Bar with Icon */}
      <div className="flex items-center md:items-start md:flex-col gap-2 h-20 md:h-full w-full md:w-32">
        <div className="bg-yellow-500 gap-2 p-6 rounded-md flex items-center justify-center h-full w-full md:w-32">
          <img src={icons.targetWhite} className="w-10 h-10 md:w-40 md:h-40" />
          <h1 className="text-2xl block md:hidden">Our Mission</h1>
        </div>
      </div>

      {/* Right Side Text */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="hidden md:block text-3xl  tracking-widest">OUR</h2>
        <h2 className="hidden md:block text-5xl text-yellow-500 font-extrabold tracking-widest">
          Mission
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          Our mission is to redefine modern dating by helping people form
          genuine, lasting connections built on trust, respect, and shared
          values. We believe love should be authentic and effortless — not
          driven by swipes or algorithms alone, but by understanding and
          compatibility. Through innovative technology, thoughtful design, and a
          safe, inclusive community, we aim to bridge the gap between digital
          interaction and real-world connection. Our goal is to make every
          conversation meaningful and every match a step closer to something
          real.
        </p>
      </div>
    </section>
  );
}
