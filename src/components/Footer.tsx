import Image from "next/image";
import { CHURCH_INFO, MEDIA_LINKS } from "@/data/churchData";

export default function Footer() {
  return (
    <footer className="bg-[#070d1a] text-[#faf9f6] border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Theme */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f2042] border border-[#f59e0b]/40 flex items-center justify-center p-1.5">
                <Image
                  src="/images/gpc_logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-headline font-extrabold text-[#fbbf24] text-lg uppercase tracking-wider">
                {CHURCH_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#f59e0b] uppercase tracking-wider font-bold">
              {CHURCH_INFO.cathedralName} • {CHURCH_INFO.branch}
            </p>
            <p className="text-sm text-[#d3e4fe] max-w-md leading-relaxed">
              Mottos: <em>&ldquo;{CHURCH_INFO.slogans[0]}&rdquo;</em> &amp; <em>&ldquo;{CHURCH_INFO.slogans[1]}&rdquo;</em>{" "}
              An apostolic and prophetic commission under the visionary leadership of Prophet Dr. Isaiah Macwealth and Prophetess Lily Anita Macwealth.
            </p>
            <div className="pt-2 text-xs text-[#d3e4fe]">
              <span className="text-[#faf9f6] font-bold">2026 Declaration:</span>{" "}
              <span className="italic text-[#fbbf24]">&ldquo;{CHURCH_INFO.themeTitle}&rdquo; ({CHURCH_INFO.themeScripture})</span>
            </div>
          </div>

          {/* Col 2: Campus HQ & Inquiries */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="font-headline text-sm font-bold text-[#faf9f6] uppercase tracking-wider">
              Ikeja Headquarters
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#d3e4fe]">
              <span className="material-symbols-outlined text-[#fbbf24] text-base mt-0.5">location_on</span>
              <span>{CHURCH_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#d3e4fe]">
              <span className="material-symbols-outlined text-[#fbbf24] text-base">call</span>
              <a className="hover:text-[#fbbf24] transition-colors" href={`tel:${CHURCH_INFO.hotlines[0]}`}>
                {CHURCH_INFO.hotlines.slice(0, 2).join(" / ")}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#d3e4fe]">
              <span className="material-symbols-outlined text-[#fbbf24] text-base">mail</span>
              <a className="hover:text-[#fbbf24] transition-colors" href={`mailto:${CHURCH_INFO.email}`}>
                {CHURCH_INFO.email}
              </a>
            </div>
            <div className="pt-3 flex items-center gap-3">
              <a
                href={MEDIA_LINKS.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f2042] border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-[#f59e0b] transition-colors"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                href={MEDIA_LINKS.liveStreamChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f2042] border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <span className="material-symbols-outlined text-sm">smart_display</span>
              </a>
              <a
                href={MEDIA_LINKS.instagramPage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f2042] border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-headline text-sm font-bold text-[#faf9f6] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#d3e4fe]">
              <li><a className="hover:text-[#fbbf24] transition-colors" href="#schedule">Sunday & Midweek Services</a></li>
              <li><a className="hover:text-[#fbbf24] transition-colors" href="#live-stream">Live Stream Hub</a></li>
              <li><a className="hover:text-[#fbbf24] transition-colors" href="#giving">Zenith Bank Transfer Accounts</a></li>
              <li><a className="hover:text-[#fbbf24] transition-colors" href="#ministries">Next Pillar Association (NPA)</a></li>
              <li><a className="hover:text-[#fbbf24] transition-colors" href="#ministries">Ark Food & Emergency Bank</a></li>
              <li><a className="hover:text-[#fbbf24] transition-colors" href="#visit-planner">Prayer Petitions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d3e4fe]">
          <p>© {CHURCH_INFO.themeYear} {CHURCH_INFO.fullName} • {CHURCH_INFO.cathedralName}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#fbbf24] transition-colors" href="#visit-planner">Plan a Visit</a>
            <a className="hover:text-[#fbbf24] transition-colors" href="#visit-planner">Prayer Line</a>
            <a className="hover:text-[#fbbf24] transition-colors" href={CHURCH_INFO.website} target="_blank" rel="noopener noreferrer">
              Global Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
