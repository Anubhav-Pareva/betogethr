import { icons } from "../../Constants/Icons";

export default function OurStory() {
  return (
    <section className="text-white flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-8 flex-1 h-full">
      {/* Left Accent Bar with Icon */}
      <div className="flex items-center md:items-start md:flex-col gap-2 h-20 md:h-full w-full md:w-32">
        <div className="bg-purple-500 gap-2 p-6 rounded-md flex items-center justify-center h-full w-full md:w-32">
          <img src={icons.storyWhite} className="w-10 h-10 md:w-40 md:h-40" />
          <h1 className="text-2xl block md:hidden">Our Story</h1>
        </div>
      </div>

      {/* Right Side Text */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="hidden md:block text-3xl  tracking-widest">OUR</h2>
        <h2 className="hidden md:block text-5xl text-purple-500 font-extrabold tracking-widest">
          Story
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          Every great connection starts with a story — and ours began with a
          simple idea: what if dating could feel real again? We saw how modern
          dating had become more about endless swipes and less about genuine
          conversations. People were connecting, but not truly meeting. So, we
          set out to build a platform that brings back the essence of human
          connection — where technology helps hearts meet, not just profiles
          match. From countless brainstorming sessions to late-night coding and
          coffee-fueled discussions, our journey has always been driven by one
          goal: to make finding meaningful relationships easier, safer, and more
          authentic. Today, our app isn’t just about dating — it’s about
          creating stories that last. Because behind every match, there’s the
          possibility of something beautiful waiting to unfold.
        </p>
      </div>
    </section>
  );
}
