import Image from "next/image";
import { CHURCH_INFO, LEADERSHIP_INFO } from "@/data/churchData";

export default function PastoralLeadership() {
  return (
    <section className="py-20 lg:py-32 bg-[#f1f5f9] border-y border-[#c5c6cf]/30" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#904d00]/20 bg-[#0f2042] group">
              <div className="relative h-[520px] w-full">
                <Image
                  src="/images/prophet_and_prophetess.webp"
                  alt={`${LEADERSHIP_INFO.generalOverseer} and ${LEADERSHIP_INFO.coSeniorPastor}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Quote Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#070d1a]/90 backdrop-blur-md p-5 rounded-xl border border-[#f59e0b]/30 shadow-lg">
                <span className="material-symbols-outlined text-[#f59e0b] text-2xl mb-1">format_quote</span>
                <p className="text-xs sm:text-sm text-[#faf9f6] italic leading-snug">
                  &ldquo;{LEADERSHIP_INFO.quote}&rdquo;
                </p>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#fbbf24] font-bold">
                    {LEADERSHIP_INFO.generalOverseer}
                  </span>
                  <span className="text-[11px] text-[#d3e4fe]">General Overseer</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-[#f59e0b]/40 rounded-br-2xl pointer-events-none hidden md:block"></div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 text-[#904d00] text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-sm">auto_stories</span>
              <span>Apostolic & Prophetic Mandate</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#000922] leading-tight">
              Welcome to <span className="text-[#904d00]">{CHURCH_INFO.cathedralName}</span> for All Nations
            </h2>

            <div className="space-y-4 text-[#45464e] text-base leading-relaxed">
              {LEADERSHIP_INFO.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                <span className="material-symbols-outlined text-[#904d00] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  menu_book
                </span>
                <div>
                  <h4 className="font-headline text-sm font-bold text-[#000922]">Over 100 Authored Titles</h4>
                  <p className="text-xs text-[#45464e] mt-0.5">Apostolic teachings on prayer, faith, finance, and destiny.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                <span className="material-symbols-outlined text-[#904d00] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  volunteer_activism
                </span>
                <div>
                  <h4 className="font-headline text-sm font-bold text-[#000922]">Humanitarian Relief (TIWI)</h4>
                  <p className="text-xs text-[#45464e] mt-0.5">Free food, clothing, education, and medical aid for indigent families.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#000922] text-[#faf9f6] font-headline font-bold text-xs uppercase tracking-wider hover:bg-[#904d00] transition-colors"
                href="#visit-planner"
              >
                <span className="material-symbols-outlined text-sm">support_agent</span>
                <span>Connect With Pastoral Team</span>
              </a>
              <a
                className="inline-flex items-center gap-2 text-[#904d00] font-headline font-bold text-xs uppercase tracking-wider hover:underline"
                href={CHURCH_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Read Full History on Main Portal</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
