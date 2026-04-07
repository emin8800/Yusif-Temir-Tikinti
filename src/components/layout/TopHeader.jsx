import React from "react";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const TopHeader = () => {
  return (
    <div className="bg-emerald-900 text-white border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center py-3 lg:h-16 space-y-4 lg:space-y-0">
          
          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="p-2 rounded-xl shadow-lg group-hover:scale-105 transition">
              <img
                src="/yt.jpeg"
                alt="logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            <div>
              <span className="block text-xl font-black uppercase">
                Yusif
              </span>
              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                Təmir Tikinti
              </span>
            </div>
          </div>

          {/* SOSİAL */}
          <div className="flex items-center space-x-4 text-lg">
            <a href="https://www.instagram.com/yusiftemirtikinti/" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-500">
              <FaInstagram />
            </a>

            <a href="#" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-500">
              <FaTelegramPlane />
            </a>

            <a href="https://www.facebook.com/people/Yusif-Temir-Tikinti/61551785090380/" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-500">
              <FaFacebookF />
            </a>

            <a href="https://www.tiktok.com/@yusiftemirtikinti/" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-500" target="blank">
              <SiTiktok />
            </a>
          </div>

          {/* TELEFON */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 text-xs font-bold">
            <span>+994 55 200 52 00</span>
            <span>+994 55 221 51 03</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;