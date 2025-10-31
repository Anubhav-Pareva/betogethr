import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/common-components/Footer";
import NavBar from "../Components/common-components/NavBar";


export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col pt-[64px] min-h-screen">
      {/* ✅ Navbar (always visible) */}
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* ✅ Child route content (changes) */}
      <main className="flex flex-col flex-1">
        <Outlet /> {/* Renders child page here */}
      </main>
      <Footer />
    </div>
  );
}
