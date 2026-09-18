"use client";

import { useState } from "react";
import { BANK_ACCOUNTS, CHURCH_INFO } from "@/data/churchData";

export default function OnlineGiving() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (accountNumber: string, category: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(accountNumber).then(() => {
        setToastMessage(`${category} account copied: ${accountNumber} (Zenith Bank)`);
        setTimeout(() => setToastMessage(null), 3500);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = accountNumber;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setToastMessage(`${category} account copied: ${accountNumber} (Zenith Bank)`);
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#070d1a] text-[#faf9f6] relative overflow-hidden" id="giving">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f2042] text-white border-l-4 border-[#f59e0b] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[#f59e0b]">check_circle</span>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f59e0b]/10 blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 mb-4">
            <span className="material-symbols-outlined text-[#fbbf24] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              payments
            </span>
            <span className="font-headline text-xs text-[#fbbf24] uppercase tracking-widest font-bold">
              Kingdom Stewardship & Covenant Partnership
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#faf9f6] tracking-tight">
            Honor the Lord with Your Substance
          </h2>
          <p className="text-base text-[#d3e4fe] mt-3 leading-relaxed">
            &ldquo;Give, and it will be given to you: good measure, pressed down, shaken together, and running over will be put into your bosom.&rdquo; —{" "}
            <span className="text-[#fbbf24] font-semibold">Luke 6:38</span>
          </p>
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BANK_ACCOUNTS.map((acc) => (
            <div
              key={acc.id}
              className="bg-[#0f2042] rounded-2xl p-6 border border-[#f59e0b]/30 flex flex-col justify-between shadow-lg hover:border-[#f59e0b] hover:shadow-2xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#fbbf24] text-xs uppercase font-bold tracking-wider">{acc.bankName}</span>
                  <span className="material-symbols-outlined text-[#fbbf24] text-xl">{acc.icon}</span>
                </div>
                <h4 className="font-headline text-lg font-bold text-[#faf9f6] mb-1">{acc.category}</h4>
                <p className="text-xs text-[#d3e4fe] mb-6">{acc.description}</p>
                <div className="bg-[#070d1a] p-3 rounded-xl border border-white/10 mb-4">
                  <span className="text-[#d3e4fe] text-[11px] block">Account Number</span>
                  <span className="font-headline text-xl font-black text-[#faf9f6] font-mono tracking-wider">
                    {acc.accountNumber}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(acc.accountNumber, acc.category)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#f59e0b]/20 hover:bg-[#f59e0b]/30 text-[#fbbf24] border border-[#f59e0b]/40 font-headline text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span>Copy Account Number</span>
              </button>
            </div>
          ))}
        </div>

        {/* Diaspora Giving Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0f2042]/70 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center text-[#fbbf24] flex-shrink-0">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
            </div>
            <div>
              <h4 className="font-headline text-base font-bold text-[#faf9f6]">
                Diaspora & International Remittances
              </h4>
              <p className="text-xs text-[#d3e4fe] mt-0.5">
                For foreign currency wires (USD, GBP, EUR) or questions regarding covenant seeds:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
            <a
              href={`mailto:${CHURCH_INFO.givingEmail}`}
              className="px-5 py-2.5 rounded-xl bg-[#070d1a] border border-[#f59e0b]/40 text-[#fbbf24] hover:bg-[#f59e0b] hover:text-[#070d1a] transition-all"
            >
              {CHURCH_INFO.givingEmail}
            </a>
            <a
              href={`tel:${CHURCH_INFO.hotlines[0]}`}
              className="px-5 py-2.5 rounded-xl bg-[#070d1a] border border-white/10 text-white hover:text-[#fbbf24] transition-all"
            >
              {CHURCH_INFO.hotlines[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
