import Image from "next/image";
import { SERVICE_SCHEDULES } from "@/data/churchData";

export default function ServiceSchedule() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#faf9f6]" id="schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#000922] tracking-tight">
            Weekly Services &amp; Encounters
          </h2>
          <p className="text-sm sm:text-lg text-[#45464e] max-w-2xl mt-2 leading-relaxed">
            Every gathering at The Ark of Light is charged with the manifest presence of God, deep apostolic revelation, spontaneous prophetic ministrations, and miraculous testimonies.
          </p>
        </div>

        {/* Bento Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Sunday */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-[#c5c6cf]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#904d00] to-[#f59e0b]"></div>
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 bg-[#e5eeff] text-[#000922] text-xs uppercase font-bold rounded">
                  {SERVICE_SCHEDULES[0].tag}
                </span>
                <span className="material-symbols-outlined text-[#904d00] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  wb_sunny
                </span>
              </div>

              {/* Sunday Service Image */}
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-5 border border-[#c5c6cf]/30 group">
                <Image
                  src="/images/worship_crowd_shot.webp"
                  alt="Sunday Worship Service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#000922] mb-2 sm:mb-3">
                {SERVICE_SCHEDULES[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#45464e] mb-6 leading-relaxed">
                {SERVICE_SCHEDULES[0].description}
              </p>

              <div className="space-y-3 sm:space-y-4 border-t border-[#c5c6cf]/30 pt-4">
                <div className="flex justify-between items-center py-2 border-b border-[#c5c6cf]/20">
                  <span className="font-bold text-sm text-[#000922]">1st Service</span>
                  <span className="text-sm font-bold text-[#904d00]">8:00 AM – 9:15 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold text-sm text-[#000922]">2nd Service</span>
                  <span className="text-sm font-bold text-[#904d00]">9:15 AM – 11:00 AM</span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#c5c6cf]/30 flex items-center justify-between text-xs text-[#45464e]">
              <span className="flex items-center gap-1.5 font-semibold text-[#000922]">
                <span className="material-symbols-outlined text-sm text-[#904d00]">schedule</span>
                Doors Open: 7:45 AM
              </span>
              <span className="font-semibold text-[#904d00]">Arrival: 7:50 AM</span>
            </div>
          </div>

          {/* Card 2: Wednesday */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-[#c5c6cf]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0f2042]"></div>
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 bg-[#e5eeff] text-[#000922] text-xs uppercase font-bold rounded">
                  {SERVICE_SCHEDULES[1].tag}
                </span>
                <span className="material-symbols-outlined text-[#0f2042] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  menu_book
                </span>
              </div>

              {/* Midweek Bible Study Image */}
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-5 border border-[#c5c6cf]/30 group">
                <Image
                  src="/images/ark_main_hall_gallery.webp"
                  alt="Midweek Bible Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#000922] mb-2 sm:mb-3">
                {SERVICE_SCHEDULES[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#45464e] mb-6 leading-relaxed">
                {SERVICE_SCHEDULES[1].description}
              </p>

              <div className="space-y-3 sm:space-y-4 border-t border-[#c5c6cf]/30 pt-4">
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold text-sm text-[#000922]">Every Wednesday</span>
                  <span className="text-sm font-bold text-[#904d00]">7:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#c5c6cf]/30 flex items-center justify-between text-xs text-[#45464e]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0f2042]">
                <span className="material-symbols-outlined text-sm">event_available</span>
                Midweek Gathering
              </span>
              <span className="font-semibold text-[#904d00]">In-Person &amp; Online</span>
            </div>
          </div>

          {/* Card 3: Friday */}
          <div className="bg-[#0f2042] text-[#faf9f6] rounded-2xl p-5 sm:p-8 border border-[#f59e0b]/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#f59e0b]/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 bg-[#f59e0b]/20 text-[#fbbf24] text-xs uppercase font-bold rounded border border-[#f59e0b]/30">
                  {SERVICE_SCHEDULES[2].tag}
                </span>
                <span className="material-symbols-outlined text-[#f59e0b] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_fire_department
                </span>
              </div>

              {/* Friday Reblaze Prayer Image */}
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-5 border border-white/10 group">
                <Image
                  src="/images/overflow_gathering.webp"
                  alt="Friday Reblaze Prayer Service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#faf9f6] mb-2 sm:mb-3">
                {SERVICE_SCHEDULES[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#d3e4fe] mb-6 leading-relaxed">
                {SERVICE_SCHEDULES[2].description}
              </p>

              <div className="space-y-3 sm:space-y-4 border-t border-white/10 pt-4">
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold text-sm text-[#faf9f6]">Every Friday Evening</span>
                  <span className="text-sm font-bold text-[#fbbf24]">7:00 PM – 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#d3e4fe]">
              <span className="flex items-center gap-1.5 font-semibold text-[#fbbf24]">
                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                Altar of Intercession
              </span>
              <span className="font-semibold text-[#fbbf24]">7:00 PM WAT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
