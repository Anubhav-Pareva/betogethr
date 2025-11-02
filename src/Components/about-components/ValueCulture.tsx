import { icons } from "../../Constants/Icons";

export default function ValueCulture() {
  return (
    <section className="text-white flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-8 flex-1 h-full">
      {/* Left Accent Bar with Icon */}
      <div className="flex items-center md:items-start md:flex-col gap-2 h-20 md:h-full w-full md:w-32">
        <div className="bg-blue-400 gap-2 p-6 rounded-md flex items-center justify-center h-full w-full md:w-32">
          <img src={icons.cultureBlack} className="w-10 h-10 md:w-40 md:h-40" />
          <h1 className="text-2xl block md:hidden">Our Value & Culture</h1>
        </div>
      </div>

      {/* Right Side Text */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="hidden md:block text-3xl  tracking-widest">OUR</h2>
        <h2 className="hidden md:block text-5xl text-blue-400 font-extrabold tracking-widest">
          Value & Culture
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          At the heart of our journey lies a belief that meaningful
          relationships start with respect, authenticity, and trust. Every
          decision we make — from product design to community building — is
          rooted in these core values.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          1. Authentic Connections We believe in real people, real
          conversations, and real emotions. Our platform is built to encourage
          honesty, not perfection.{" "}
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          2. Respect & Kindness Everyone deserves to feel safe, valued, and
          heard. We foster a culture of empathy — both in our team and our
          community.{" "}
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          3. Innovation with Purpose Technology should serve people, not the
          other way around. We constantly innovate to make modern dating
          simpler, safer, and more human.{" "}
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          4. Inclusivity Love has no boundaries. We celebrate diversity in all
          its forms — ensuring everyone feels welcome and represented.{" "}
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          5. Growth Together We grow as our community grows. Every feedback,
          story, and connection inspires us to build something even better.
        </p>
      </div>
    </section>
  );
}
