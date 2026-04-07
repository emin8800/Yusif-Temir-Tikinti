import React from "react";
import { FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-emerald-950 text-white pt-24 pb-12 w-full mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-emerald-900 pb-16">

          {/* LOGO + TEXT */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-black text-xl">
                Y
              </div>
              <span className="text-2xl font-black uppercase">
                Yusif Təmir Tikinti
              </span>
            </div>

            <p className="text-emerald-100/60">
              Tikinti və təmir sahəsində peşəkar xidmət göstəririk. 
              Keyfiyyət bizim əsas prioritetimizdir.
            </p>

            {/* SOCIAL */}
            <div className="flex space-x-4 mt-6 text-lg">
              <a href="https://www.instagram.com/yusiftemirtikinti/" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-600">
                <FaInstagram />
              </a>
              <a href="https://t.me/yusiftemirtikinti" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-600">
                <FaTelegramPlane />
              </a>
              <a href="https://www.facebook.com/people/Yusif-Temir-Tikinti/61551785090380/" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-600">
                <FaFacebookF />
              </a>
              <a href="https://www.tiktok.com/@yusiftemirtikinti/" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-600">
                <SiTiktok />
              </a>
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-black uppercase tracking-widest text-emerald-400 text-sm mb-6">
              Ünvan
            </h3>

            <div className="flex items-center space-x-4 text-emerald-100">
              <FaMapMarkerAlt />
              <span>Azera Holding, 12 Ələsgər Qayıbov Baku, Azerbaijan, Baku, Azerbaijan</span>
            </div>
          </div>

          {/* HOURS */}
          <div>
            <h3 className="font-black uppercase tracking-widest text-emerald-400 text-sm mb-6">
              İş Saatları
            </h3>

            <div className="flex items-center space-x-4 text-emerald-100">
              <FaClock />
              <span>10:00 - 18:00</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-emerald-100/30">
          © 2024 Yusif Təmir Tikinti - Bütün hüquqlar qorunur
        </div>
      </div>
    </footer>
  );
};

export default Footer;