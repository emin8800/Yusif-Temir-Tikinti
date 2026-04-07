import React from "react";
import { FiCheck } from "react-icons/fi";

const About = () => {
  const features = [
    "Keyfiyyətli Material",
    "Tam Zəmanət",
    "Sürətli İş",
    "Peşəkar Ustalar",
  ];

  return (
    <section id="about" className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/27/07/f1/2707f171c563d680eba3f543fca22b87.jpg"
                alt="about"
                className="w-full h-full object-cover"
              />
            </div>

            {/* EXPERIENCE BOX */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-emerald-900 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <span className="block text-5xl font-black">15+</span>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                İllik Təcrübə
              </span>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Biz Kimik?
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-emerald-950 mb-8 leading-tight">
              Evinizi Peşəkarlara Etibar Edin
            </h2>

            <p className="text-emerald-800 mb-8">
              Biz uzun illərdir tikinti və təmir sahəsində fəaliyyət göstəririk.
              Məqsədimiz müştərilərimizə keyfiyyətli, sürətli və etibarlı xidmət
              təqdim etməkdir.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-600 group transition"
                >
                  <div className="bg-white p-2 rounded-xl text-emerald-600 group-hover:text-emerald-600">
                    <FiCheck />
                  </div>

                  <span className="font-black text-emerald-900 group-hover:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;