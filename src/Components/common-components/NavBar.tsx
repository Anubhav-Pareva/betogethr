import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { homeNavLinks, mobileHomeNavLinks } from "../../Constants/Data";
interface NavBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavBar({ isOpen, setIsOpen }: NavBarProps) {
  return (
    <nav className="bg-gray-900 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to='/' className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">
              Be
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-purple-500 to-blue-500">
                TOGETHR
              </span>
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {homeNavLinks.map((link) => (
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
              {isOpen ? (
                <X color="white" size={26} />
              ) : (
                <Menu color="white" size={26} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md max-h-screen overflow-y-auto">
  <div className="flex flex-col items-start px-6 py-4 space-y-4">
    {mobileHomeNavLinks.map((link) => (
      <div key={link.id} className="w-full">
        {link.children ? (
          <div className="w-full text-gray-700 font-medium cursor-default">
            {link.title}
            <div className="flex flex-col pl-4 mt-2 space-y-2">
              {link.children.map((child) => (
                <Link
                  key={child.id}
                  to={child.url}
                  className="w-full text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            to={link.url}
            className="w-full text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </Link>
        )}
      </div>
    ))}
  </div>
</div>


      )}
    </nav>
  );
}
