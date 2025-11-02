import { icons } from "../../Constants/Icons";

export default function ProblemSolution() {
  return (
    <section className="text-white flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-8 flex-1 h-full">
      {/* Left Accent Bar with Icon */}
      <div className="flex items-center md:items-start md:flex-col gap-2 h-20 md:h-full w-full md:w-32">
        <div className="bg-blue-500 gap-2 p-6 rounded-md flex items-center justify-center h-full w-full md:w-32">
          <img
            src={icons.solutionWhite}
            className="w-10 h-10 md:w-40 md:h-40"
          />
          <h1 className="text-2xl block md:hidden">Problem & Solution</h1>
        </div>
      </div>

      {/* Right Side Text */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="hidden md:block text-3xl  tracking-widest">Problem &</h2>
        <h2 className="hidden md:block text-5xl text-yellow-500 font-extrabold tracking-widest">
          Solution
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          Problem: Modern dating apps have revolutionized how people meet — but
          they’ve also created a space filled with surface-level connections,
          fake profiles, and emotional fatigue. Users often feel overwhelmed by
          endless swiping, ghosting, and mismatched intentions. Privacy and
          safety concerns add another layer of anxiety, while most platforms
          lack genuine efforts to promote real compatibility, authentic
          communication, and emotional well-being.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          Solution: Betogethr redefines online dating by focusing on real,
          meaningful connections — not just matches.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          {" "}
          Our platform integrates verified profiles, AI-driven compatibility
          matching, and empathy-based design to help people connect with others
          who share genuine values and intentions.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          {" "}
          With built-in safety tools, conversation prompts, and community-driven
          events, Betogethr empowers users to interact confidently and
          meaningfully — both online and offline.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
          {" "}
          By combining technology, transparency, and trust, Betogethr turns
          digital dating into something more human, honest, and emotionally
          fulfilling.
        </p>
      </div>
    </section>
  );
}
