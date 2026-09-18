"use client";

import { useState } from "react";
import { CHURCH_INFO } from "@/data/churchData";

export default function ContactAndMap() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "Plan a Visit this Sunday",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#faf9f6] border-t border-[#c5c6cf]/30" id="contact">
      {/* Anchor targets for existing navigation links */}
      <span id="visit-planner" className="relative -top-24 block"></span>
      <span id="campus-location" className="relative -top-24 block"></span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Side-by-Side Grid: Contact Form (Left) & Interactive Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#c5c6cf]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs uppercase font-bold tracking-wider text-[#904d00]">
                  Get In Touch
                </span>
                <span className="material-symbols-outlined text-[#904d00] text-2xl">mail</span>
              </div>

              {/* Direct Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[#f8f9ff] border border-[#c5c6cf]/30 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#904d00] text-base">call</span>
                  <div>
                    <span className="block text-[10px] text-[#45464e] uppercase font-bold">Helpline</span>
                    <a href={`tel:${CHURCH_INFO.hotlines[0]}`} className="font-bold text-[#000922] hover:text-[#904d00]">
                      {CHURCH_INFO.hotlines[0]}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#904d00] text-base">mail</span>
                  <div>
                    <span className="block text-[10px] text-[#45464e] uppercase font-bold">Email</span>
                    <a href={`mailto:${CHURCH_INFO.email}`} className="font-bold text-[#000922] hover:text-[#904d00]">
                      {CHURCH_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#e5eeff] border border-[#f59e0b]/40 text-center my-4">
                  <div className="w-14 h-14 rounded-full bg-[#f59e0b] text-[#070d1a] flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold text-[#000922] mb-2">
                    Blessings, {formData.name || "Beloved Friend"}!
                  </h4>
                  <p className="text-sm text-[#45464e] mb-6">
                    Your message has been received by the Ark of Light pastoral team. We will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#000922] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#904d00] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-3.5 py-2.5 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                        placeholder="e.g. Bro. David"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-3.5 py-2.5 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                        placeholder="+234..."
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-3.5 py-2.5 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                        placeholder="you@email.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                        Purpose *
                      </label>
                      <select
                        className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-3.5 py-2.5 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      >
                        <option value="Plan a Visit this Sunday">Plan a Visit this Sunday</option>
                        <option value="Pastoral Prayer Petition">Pastoral Prayer Petition</option>
                        <option value="Covenant Partnership / Giving">Covenant Partnership / Giving</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                      Message / Prayer Request
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-3.5 py-2.5 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b] resize-none"
                      placeholder="Share your prayer request or how we can assist you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-[#000922] hover:bg-[#904d00] text-white font-headline text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Google Map & Location Details */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#c5c6cf]/40 shadow-xl flex flex-col justify-between">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#904d00]">
                    Location
                  </span>
                  <span className="material-symbols-outlined text-[#904d00] text-2xl">pin_drop</span>
                </div>

                {/* Embedded Google Map */}
                <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden border border-[#c5c6cf]/40 shadow-inner mb-6">
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

              <a
                href={CHURCH_INFO.googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-[#904d00] hover:bg-[#000922] text-white font-headline text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                <span>Open in Google Maps / Live Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
