import { Users, MessageCircle, CalendarDays, Download } from "lucide-react";

const achievements = [
  {
    icon: <Download size={32} />,
    count: "100K+",
    label: "TOTAL DOWNLOADS",
  },
  {
    icon: <Users size={32} />,
    count: "25K+",
    label: "ACTIVE USERS",
  },
  {
    icon: <CalendarDays size={32} />,
    count: "120+",
    label: "EVENTS HOSTED",
  },
  {
    icon: <MessageCircle size={32} />,
    count: "2M+",
    label: "MESSAGES SENT",
  },
];

export default function StateGrid() {
  return (
    <section
      className="relative bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')]
                 bg-cover bg-center text-white py-16 px-6 rounded-2xl"
    >
      <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {achievements.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="border-2 border-yellow-400 p-3 rounded-lg mb-4 text-yellow-400">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold">{item.count}</h3>
            <p className="text-xs tracking-wider text-gray-300 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
