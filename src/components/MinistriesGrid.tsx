import { MINISTRIES } from "@/data/churchData";

export default function MinistriesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#c5c6cf]/30" id="ministries">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#904d00] text-xs uppercase tracking-widest font-bold mb-3">
              <span className="material-symbols-outlined text-sm">hub</span>
              <span>Get Planted & Flourish</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#000922] tracking-tight">
              Ministries & Community Pillars
            </h2>
            <p className="text-base text-[#45464e] max-w-2xl mt-2">
              Discover your place of service, discipleship, spiritual growth, and vibrant fellowship at Gospel Pillars Church Ikeja.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MINISTRIES.map((item) => (
            <div
              key={item.id}
              className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#c5c6cf]/30 hover:border-[#904d00] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#000922] mb-5">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#000922] mb-2">{item.title}</h3>
                <p className="text-xs text-[#45464e] leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c5c6cf]/20">
                <a
                  className="text-[#904d00] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:underline"
                  href={item.ctaHref}
                >
                  <span>{item.ctaText}</span>
                  <span className="material-symbols-outlined text-sm">east</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
