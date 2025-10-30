import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
interface NavBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavBar({ isOpen, setIsOpen }: NavBarProps) {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Privacy Policy",
      url: "/privacy",
    },
    {
      id: 4,
      title: "Terms & Conditions",
      url: "/conditions",
    },
  ];
  return (
    <nav className="bg-gray-900 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">
              Be
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-purple-500 to-blue-500">
                TOGETHR
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                    `pb-1 border-b-2 transition-all duration-200 ${
                      isActive
                        ? "border-blue-300 text-blue-300"
                        : "border-transparent text-white hover:border-blue-400 hover:text-blue-400"
                    }`
                  }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600"
            >
              {isOpen ? <X color="white" size={26} /> : <Menu color="white" size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="w-full text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
