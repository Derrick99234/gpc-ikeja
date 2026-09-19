"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ChildrenMinistrySection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<"kids" | "teens" | "families">("kids");

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 bg-[#faf9f6] text-[#000922] relative overflow-hidden border-b border-[#c5c6cf]/30"
      id="children"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0f2042]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-14 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#904d00] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              child_care
            </span>
            <span>Nurturing the Next Generation</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#000922] tracking-tight">
            Kingdom Kids &amp; Teens Ministry
          </h2>
          <p className="text-sm sm:text-base text-[#45464e] mt-3 leading-relaxed">
            Raising champions of faith, godly character, and supernatural excellence in an engaging, joyful, and safe atmosphere designed specifically for every age group.
          </p>

          {/* Interactive Ministry Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 p-1.5 bg-[#e5eeff]/70 backdrop-blur-md rounded-2xl max-w-md mx-auto border border-[#c5c6cf]/40">
            <button
              onClick={() => setActiveTab("kids")}
              className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl font-headline text-xs sm:text-sm font-bold transition-all ${
                activeTab === "kids"
                  ? "bg-[#000922] text-[#faf9f6] shadow-md scale-[1.02]"
                  : "text-[#45464e] hover:text-[#000922] hover:bg-white/60"
              }`}
            >
              Kingdom Kids
            </button>
            <button
              onClick={() => setActiveTab("teens")}
              className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl font-headline text-xs sm:text-sm font-bold transition-all ${
                activeTab === "teens"
                  ? "bg-[#000922] text-[#faf9f6] shadow-md scale-[1.02]"
                  : "text-[#45464e] hover:text-[#000922] hover:bg-white/60"
              }`}
            >
              Teens Church
            </button>
            {/* Family Care Tab (Commented out for now)
            <button
              onClick={() => setActiveTab("families")}
              className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl font-headline text-xs sm:text-sm font-bold transition-all ${
                activeTab === "families"
                  ? "bg-[#000922] text-[#faf9f6] shadow-md scale-[1.02]"
                  : "text-[#45464e] hover:text-[#000922] hover:bg-white/60"
              }`}
            >
              Family Care
            </button>
            */}
          </div>
        </div>

        {/* Tab 1: Kingdom Kids */}
        {activeTab === "kids" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in">
            {/* Visuals Column: 2 stacked / side-by-side photos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#f59e0b]/30 group bg-[#0f2042]">
                <Image
                  src="/images/children_church_praise_activity.jpeg"
                  alt="Kingdom Kids joyful praise and worship session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded bg-[#f59e0b] text-[#070d1a] text-[10px] font-bold uppercase tracking-wider">
                    Joyful Praise
                  </span>
                  <p className="text-xs font-semibold text-[#faf9f6] mt-1.5 drop-shadow">
                    Worship &amp; Creative Expression
                  </p>
                </div>
              </div>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#c5c6cf]/40 group bg-[#0f2042]">
                <Image
                  src="/images/children_church_classroom_tables.jpeg"
                  alt="Children studying God's Word at activity tables"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded bg-[#0f2042] border border-white/20 text-[#fbbf24] text-[10px] font-bold uppercase tracking-wider">
                    Bible Study
                  </span>
                  <p className="text-xs font-semibold text-[#faf9f6] mt-1.5 drop-shadow">
                    Age-Graded Scriptural Foundations
                  </p>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#904d00]">
                  Ages 1 – 12 • Every Sunday Service
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#000922] mt-1">
                  Where Faith is Exciting &amp; Real
                </h3>
                <p className="text-xs sm:text-sm italic text-[#904d00] font-serif mt-2 border-l-2 border-[#f59e0b] pl-3">
                  &ldquo;Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.&rdquo; — 1 Tim 4:12
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    menu_book
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Age-Graded Bible Curriculum</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      Children learn biblical stories, memorise scripture verses, and discover Jesus through interactive lessons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Secure Check-in &amp; Safe Care</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      Vetted teachers, supervised classrooms, and secure child tags ensure parents can worship in complete peace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    celebration
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Joyful Praise &amp; Activities</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      High-energy worship, creative drama, coloring, and games making church their favourite time of the week.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#000922] text-[#faf9f6] font-headline font-bold text-xs uppercase tracking-wider hover:bg-[#904d00] transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>View Sunday Service Times</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Teens Church */}
        {activeTab === "teens" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in">
            {/* Visuals Column: Teens Photos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#f59e0b]/30 group bg-[#0f2042]">
                <Image
                  src="/images/teens_church_built_on_faith.jpeg"
                  alt="Teens Church Gospel Pillars Ikeja Built on Faith"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded bg-[#f59e0b] text-[#070d1a] text-[10px] font-bold uppercase tracking-wider">
                    Teens Church
                  </span>
                  <p className="text-xs font-semibold text-[#faf9f6] mt-1.5 drop-shadow">
                    Built on Faith • Living with Purpose
                  </p>
                </div>
              </div>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#c5c6cf]/40 group bg-[#0f2042]">
                <Image
                  src="/images/youth_church_boys_banner.jpeg"
                  alt="Young teens embracing faith and brotherhood"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded bg-[#0f2042] border border-white/20 text-[#fbbf24] text-[10px] font-bold uppercase tracking-wider">
                    Youth Fellowship
                  </span>
                  <p className="text-xs font-semibold text-[#faf9f6] mt-1.5 drop-shadow">
                    Fight the Good Fight • Serve Boldly
                  </p>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#904d00]">
                  Ages 13 – 19 • Built on Faith
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#000922] mt-1">
                  Equipping Young Champions of God
                </h3>
                <p className="text-xs sm:text-sm italic text-[#904d00] font-serif mt-2 border-l-2 border-[#f59e0b] pl-3">
                  &ldquo;Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called.&rdquo; — 1 Tim 6:12
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Real Answers for Real Life</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      Candid, spirit-led discussions tackling peer pressure, identity, mental wellness, and academic excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    groups
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Positive Christian Community</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      A vibrant circle of friends who encourage one another in faith, prayer, and godly values.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    military_tech
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Leadership &amp; Ministry Opportunities</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      Teens actively serve in worship bands, media production, hospitality, and community outreach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#000922] text-[#faf9f6] font-headline font-bold text-xs uppercase tracking-wider hover:bg-[#904d00] transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">connect_without_contact</span>
                  <span>Connect with Youth Leaders</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Family Care (Commented out for now)
        {activeTab === "families" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in">
            <div className="lg:col-span-7">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-[#f59e0b]/30 group bg-[#0f2042]">
                <Image
                  src="/images/family_baby_welcome_lobby.jpeg"
                  alt="Families and infants welcomed warmly in church foyer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/85 via-[#070d1a]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-3 py-1 rounded bg-[#f59e0b] text-[#070d1a] text-xs font-bold uppercase tracking-wider">
                    Warm Family Welcome
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#faf9f6] mt-2 drop-shadow">
                    Every family member, from newborns to grandparents, has a place in God&apos;s house.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#904d00]">
                  Peace of Mind for Parents
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#000922] mt-1">
                  Dedicated Family &amp; Nursery Care
                </h3>
                <p className="text-xs sm:text-sm text-[#45464e] mt-2 leading-relaxed">
                  We believe that when parents can worship without distraction, their entire home is strengthened. Our dedicated family hosts are stationed at the entrance every Sunday to assist you.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    crib
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Mother &amp; Baby Comfort Spaces</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      Equipped nursing rooms with audio relay of the service so you never miss a moment of the Word.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    notification_important
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Parent Notification Alert</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      Discreet notification systems ensure you can be summoned instantly if your infant or child needs you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#c5c6cf]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#904d00] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    volunteer_activism
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#000922]">Dedicated Family Ushers</h4>
                    <p className="text-xs text-[#45464e] mt-0.5 leading-relaxed">
                      Hands-on assistance from our protocol and hospitality teams upon arrival at the lobby.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#visit-planner"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#fe932c] text-[#070d1a] font-headline font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow"
                >
                  <span className="material-symbols-outlined text-sm">family_restroom</span>
                  <span>Plan Your Family Visit</span>
                </a>
              </div>
            </div>
          </div>
        )}
        */}
      </div>
    </section>
  );
}
