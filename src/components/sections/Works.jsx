import React, { useEffect, useState } from "react";
import { FiExternalLink, FiX, FiPlay } from "react-icons/fi";

const Works = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);

  // 🔥 API-dən data çəkirik
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/works/")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        if (res.length > 0) setActiveTab(res[0].tab);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  // 🔥 TAB-ları dinamik çıxarırıq
  const tabs = [...new Set(data.map((item) => item.tab))];

  // 🔥 seçilmiş taba görə filter
  const filtered = data.filter((item) => item.tab === activeTab);

  return (
    <section id="works" className="py-28 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-emerald-950 mb-6">
            Gördüyümüz İşlər
          </h2>
          <div className="w-32 h-2 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-2xl font-black text-sm uppercase transition ${
                activeTab === tab
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-emerald-900 hover:bg-emerald-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedMedia(item)}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer group"
            >
              <div className="h-64 overflow-hidden relative">
                {item.media_type === "image" ? (
                  <img
                    src={item.file}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                ) : item.media_type === "video" ? (
                  <div className="w-full h-full bg-emerald-900 flex items-center justify-center text-white text-4xl">
                    <FiPlay />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-lg font-bold">
                    PDF
                  </div>
                )}
              </div>

              <div className="p-6 flex justify-between items-center">
                <h3 className="font-black text-emerald-900">{item.title}</h3>
                <FiExternalLink className="text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <FiX />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden">
            {selectedMedia.media_type === "image" ? (
              <img
                src={selectedMedia.file}
                alt={selectedMedia.title}
                className="w-full max-h-[75vh] object-contain"
              />
            ) : selectedMedia.media_type === "video" ? (
              <video
                controls
                autoPlay
                className="w-full max-h-[75vh] object-contain"
              >
                <source src={selectedMedia.file} />
              </video>
            ) : (
              <iframe
                src={selectedMedia.file}
                className="w-full h-[75vh]"
                title={selectedMedia.title}
              />
            )}

            <div className="p-6 text-center">
              <h2 className="text-2xl font-black text-emerald-900">
                {selectedMedia.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;