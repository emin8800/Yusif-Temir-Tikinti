import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Order = () => {
  const phoneNumber = "994552005200"; // <-- öz nömrəni yaz
  const message = "Salam, təmir xidməti ilə maraqlanıram";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const callLink = `tel:+${phoneNumber}`;

  return (
    <section id="order" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="bg-emerald-900 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* TEXT */}
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
              Layihənizi Birlikdə <br /> Gerçəkləşdirək
            </h2>

            <p className="text-emerald-100 text-lg">
              Təmir, tikinti və dizayn işləri üçün bizimlə əlaqə saxlayın.
              Peşəkar komandamız sizə kömək etməyə hazırdır.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">

            {/* WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-emerald-100 transition"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>

            {/* CALL */}
            <a
              href={callLink}
              className="flex items-center justify-center gap-3 bg-emerald-600 px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-emerald-500 transition"
            >
              <FaPhoneAlt />
              Zəng Et
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;