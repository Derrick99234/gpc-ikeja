"use client";

import { useState } from "react";
import { CHURCH_INFO } from "@/data/churchData";

export default function VisitPlanner() {
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
    <section className="py-20 lg:py-28 bg-[#faf9f6]" id="visit-planner">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl border border-[#c5c6cf]/40 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: VIP Welcome Promise */}
          <div className="lg:col-span-5 bg-[#0f2042] text-[#faf9f6] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-bold">
                First Time Guest or Prayer Need?
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#faf9f6] mt-2 mb-4">
                We Are Honored to Welcome You
              </h3>
              <p className="text-sm text-[#d3e4fe] leading-relaxed mb-6">
                Whether you are planning to worship with us this coming Sunday or carrying a heart burden requiring prophetic intercession, our pastoral team is ready to receive you with love.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#fbbf24]">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                  <span className="text-sm text-[#faf9f6]">Reserved VIP Parking & Usher Concierge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#fbbf24]">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                  <span className="text-sm text-[#faf9f6]">Special First-Timer Welcome Gift & Reception</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#fbbf24]">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                  <span className="text-sm text-[#faf9f6]">Confidential 24/7 Pastoral Prayer Line</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
              <p className="text-xs text-[#fbbf24] font-semibold uppercase tracking-wider">
                Immediate Pastoral Hotline:
              </p>
              <p className="font-headline text-xl font-bold text-[#faf9f6] mt-1">
                {CHURCH_INFO.hotlines[0]}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 lg:p-12">
            <h4 className="font-headline text-2xl font-bold text-[#000922] mb-2">
              Connect With The Ark of Light
            </h4>
            <p className="text-sm text-[#45464e] mb-8">
              Please complete this brief form and our hospitality or prayer counseling team will reach out to you promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#e5eeff] border border-[#f59e0b]/40 text-center">
                <div className="w-14 h-14 rounded-full bg-[#f59e0b] text-[#070d1a] flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h4 className="font-headline text-xl font-bold text-[#000922] mb-2">
                  Blessings, {formData.name || "Beloved Friend"}!
                </h4>
                <p className="text-sm text-[#45464e] mb-6">
                  Your details have been received by the Ark of Light pastoral and protocol team. We look forward to receiving you in God&apos;s manifest glory!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#000922] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#904d00] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-4 py-3 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                      placeholder="e.g. Bro. David Okon"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-4 py-3 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                      placeholder="+234 800 000 0000"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-4 py-3 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                      placeholder="name@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                      Purpose of Contact
                    </label>
                    <select
                      className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-4 py-3 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    >
                      <option>Plan a Visit this Sunday</option>
                      <option>Urgent Prayer Request</option>
                      <option>Request Pastoral Counseling</option>
                      <option>Next Pillar Association (NPA) Registration</option>
                      <option>Water Baptism Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#000922] uppercase tracking-wider mb-1.5">
                    Your Message or Prayer Request
                  </label>
                  <textarea
                    className="w-full rounded-xl bg-[#f1f5f9] border border-[#c5c6cf]/60 px-4 py-3 text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                    placeholder="Share your prayer petition or any assistance you may need during your visit..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <button
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#904d00] to-[#f59e0b] text-[#faf9f6] font-headline text-sm font-bold uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all"
                    type="submit"
                  >
                    Submit Information
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
