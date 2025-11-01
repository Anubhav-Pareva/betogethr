import { Facebook, Twitter, Instagram } from "lucide-react";
import FooterNavList from "./FooterNavList";
import {
  communityFooterNav,
  companyFooterNav,
  legalFooterNav,
} from "../../Constants/Data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-200">
      <div className=" mx-auto px-6 py-12 flex flex-col md:flex-row justify-center gap-10">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Be
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-purple-500 to-blue-500">
              TOGETHR
            </span>
          </h1>
          <p className="mt-3 text-white max-w-md text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec massa
            ante orci at ac ut pharetra ultricies quis. Neque dictum volutpat
            arcu nisl. Magna ut.
          </p>
        </div>
        <div className="h-0.5 md:h-auto md:w-0.5 rounded-2xl bg-linear-to-r md:bg-linear-to-b from-yellow-400 via-purple-500 to-blue-500" />
        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <FooterNavList title="Legal" data={legalFooterNav} />

          <FooterNavList title="Community" data={communityFooterNav} />
          <FooterNavList title="Company" data={companyFooterNav} />

          <div className="flex flex-col align-">
            <h3 className="font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-50 hover:text-blue-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-blue-50 hover:text-sky-500 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-blue-50 hover:text-pink-500 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line (optional) */}
      <div className="border-t border-gray-100 text-center py-4 text-gray-400 text-xs">
        © {new Date().getFullYear()} BeTOGETHR. All rights reserved.
      </div>
    </footer>
  );
}
