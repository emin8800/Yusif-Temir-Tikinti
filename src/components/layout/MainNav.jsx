import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const MainNav = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Ana Səhifə", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Haqqımızda", id: "about" },
    { label: "Gördüyümüz İşlər", id: "works" },
    { label: "Sifariş", id: "order" },
    { label: "Əlaqə", id: "contact" },
  ];

  const handleClick = (item) => {
    if (item.action) {
      item.action();
    } else {
      scrollToSection(item.id);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-emerald-50 sticky top-0 z-40 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex justify-between items-center h-14">

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex mx-auto space-x-12 font-black text-xs uppercase tracking-[0.2em] text-emerald-900">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className="py-4 border-b-2 border-transparent hover:border-emerald-600 hover:text-emerald-600 transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-emerald-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden flex flex-col space-y-4 pb-6 px-2 bg-white font-black text-xs uppercase tracking-widest text-emerald-900">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className="text-left py-2 border-b border-emerald-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;