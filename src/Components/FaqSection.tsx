import { useState } from "react";
import { ArrowRight, ArrowDownLeft } from "lucide-react";


export default function FaqSection() {

  const itemsPerPage = 3;

  const faqs = [
    {
      id: 1,
      question: "How can I create an account?",
      answer:
        "To create an account with us, download HER for free from either the Google Play Store or Apple App Store. Once downloaded, you can create an account using your Apple Login (if you have an iOS device), Facebook, Instagram, or Phone number.",
    },
    {
      id: 2,
      question: "Is this app free?",
      answer:
        "All of HER's core features are completely free, so finding your person or your community is accessible to everyone. With the free version of the app, you can add friends, view profiles, start chats, view events, and join communities.",
    },
    {
      id: 3,
      question: "What countries is HER available in?",
      answer:
        "HER serves 10M+ lesbian, bi, queer, non-binary, trans, gender non-conforming folx as they build the community of people they can call home. We are available in 125+ different countries and locally available in English, Spanish, French, German, and Japanese.",
    },
    {
      id: 4,
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account anytime from the account settings page. Once deleted, all your information will be permanently removed from our servers.",
    },
    {
      id: 5,
      question: "Is my data secure?",
      answer:
        "Absolutely. We use modern encryption methods to ensure your personal data and messages remain secure and private at all times.",
    },
    {
      id: 6,
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team anytime through the in-app Help section or via email. We respond within 24 hours on business days.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(faqs.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleFaqs = faqs.slice(startIndex, startIndex + itemsPerPage);
  const [openIndex, setOpenIndex] = useState<number | null>(startIndex+1);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? startIndex : index);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setOpenIndex(startIndex+4);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setOpenIndex(startIndex-2);
    }
  };

  return (
    <section className="bg-gray-900 text-white px-6 md:px-12 py-20 relative overflow-hidden border-t border-b border-blue-50">
      {/* Header */}
      <div className="max-w-5xl flex flex-col lg:flex-row items-start lg:items-center justify-between mx-auto text-left mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Get to know <br />
          <span className="text-gray-200">about us more</span>
        </h2>
        <p className="text-gray-400 max-w-xl text-sm md:text-base">
          With BeTogethr's nurturing community, you can meet like-minded people, share
          your story, and maybe even meet your person. No matter your life
          experiences or current circumstances, HER is a home for you.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-5xl mx-auto space-y-10 transition-all duration-500">
        {visibleFaqs.map((item) => (
          <div key={item.id} className="border-b border-gray-700 pb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-lg font-semibold">
                  {item.id}
                </p>
                <h3 className="text-2xl font-semibold mt-1">{item.question}</h3>
              </div>
              <button
                onClick={() => handleToggle(item.id)}
                className="text-gray-500 hover:text-white transition-transform"
              >
                <ArrowDownLeft
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === item.id ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>
            </div>

            {/* Collapsible Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Arrows */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
            currentPage === 0
              ? "border-gray-700 text-gray-600 cursor-not-allowed"
              : "border-gray-600 hover:bg-gray-700 text-gray-400"
          }`}
        >
          <ArrowRight className="rotate-180 w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
            currentPage === totalPages - 1
              ? "border-gray-700 text-gray-600 cursor-not-allowed"
              : "border-gray-600 hover:bg-gray-700 text-gray-400"
          }`}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Page Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === currentPage ? "bg-white" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
