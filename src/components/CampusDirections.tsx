import { CHURCH_INFO } from "@/data/churchData";

export default function CampusDirections() {
  return (
    <section className="py-14 sm:py-16 bg-[#e5eeff] border-t border-[#c5c6cf]/30" id="campus-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[#904d00] text-xs uppercase tracking-widest font-bold mb-2">
              <span className="material-symbols-outlined text-sm">explore</span>
              <span>Visit The Sanctuary</span>
            </div>
            <h3 className="font-headline text-xl sm:text-3xl font-bold text-[#000922]">
              Finding {CHURCH_INFO.cathedralName}
            </h3>
            <p className="text-xs sm:text-sm text-[#45464e] mt-2 leading-relaxed">
              Situated on Kudirat Abiola Way in Alausa, Ikeja — {CHURCH_INFO.nearLandmark}. Easily accessible from Ikeja City Mall, Oregun, and the Lagos-Ibadan Expressway.
            </p>
            <div className="mt-5 sm:mt-6 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#904d00] text-lg sm:text-xl mt-0.5 flex-shrink-0">pin_drop</span>
                <span>
                  <strong>{CHURCH_INFO.address}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#904d00] text-lg sm:text-xl flex-shrink-0">directions_car</span>
                <span>Ample secure on-site parking with licensed protocol officers</span>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <a
                href={CHURCH_INFO.googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#000922] text-white font-headline text-xs font-bold uppercase tracking-wider hover:bg-[#904d00] transition-colors w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                <span>Get Live Directions</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-[#c5c6cf]/40 h-72 sm:h-96">
            <iframe
              className="w-full h-full border-0"
              src={CHURCH_INFO.googleMapsEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ark of Light Ikeja Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
