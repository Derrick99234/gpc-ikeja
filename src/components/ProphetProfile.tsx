import Image from "next/image";
import { PROPHET_PROFILE } from "@/data/churchData";

export default function ProphetProfile() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#f1f5f9] border-b border-[#c5c6cf]/30" id="prophet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#904d00]/20 bg-[#0f2042] group">
              <div className="relative h-80 sm:h-[450px] lg:h-[560px] w-full">
                <Image
                  src={PROPHET_PROFILE.portrait}
                  alt={PROPHET_PROFILE.title}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>

              {/* Gold Framing Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#f59e0b]/50 rounded-br-2xl pointer-events-none hidden lg:block"></div>
          </div>

          {/* Biography Column */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
            <div>
              <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#000922] leading-tight">
                {PROPHET_PROFILE.title}
              </h2>
              <p className="text-sm sm:text-base font-bold text-[#904d00] mt-1">
                Head of the Ministry
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 text-[#45464e] text-sm sm:text-base leading-relaxed">
              {PROPHET_PROFILE.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
