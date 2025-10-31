import { Heart, Lightbulb, ShieldCheck } from "lucide-react";

export default function DatingIntroSection() {
  const features = [
    {
      id: 1,
      title: "High Rate",
      desc: "Thousands of singles find love through our dating sites each month. Register today to find that special someone.",
      color: "bg-purple-600",
      icon: <ShieldCheck className="w-8 h-8 text-purple-200" />,
    },
    {
      id: 2,
      title: "Intelligent",
      desc: "We continuously fine-tune our matchmaking algorithm to deliver the most relevant and active singles based on your preferences.",
      color: "bg-yellow-400",
      icon: <Lightbulb className="w-8 h-8 text-yellow-100" />,
    },
    {
      id: 3,
      title: "Eligible",
      desc: "EliteSingles is only for those who want a serious relationship. Over 90% of our members are 30+ and hold an above-average education.",
      color: "bg-green-600",
      icon: <Heart className="w-8 h-8 text-green-100" />,
    },
  ];

  return (
    <section className="px-6 py-20 bg-gray-900 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold leading-snug text-blue-50 max-w-3xl mx-auto">
        Meeting{" "}
        <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          new people
        </span>
        , having{" "}
        <span className="bg-linear-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          new experiences
        </span>
        ,{" "}
        <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          connecting
        </span>{" "}
        with each other – that’s what dating{" "}
        <span className="relative inline-block">
          <span className="relative z-10">should be about!</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 rounded-full -z-10 translate-y-1"></span>
        </span>
      </h2>

      {/* Feature Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((item) => (
          <div
            key={item.id}
            className={`${item.color} text-white rounded-2xl p-8 shadow-lg`}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm opacity-90">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
