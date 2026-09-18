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
    <section className="py-16 sm:py-20 lg:py-28 bg-[#070d1a] text-[#faf9f6] relative overflow-hidden" id="giving">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 bg-[#0f2042] text-white border-l-4 border-[#f59e0b] px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce max-w-sm">
          <span className="material-symbols-outlined text-[#f59e0b] flex-shrink-0">check_circle</span>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f59e0b]/10 blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#faf9f6] tracking-tight">
            Honor the Lord with Your Substance
          </h2>
          <p className="text-sm sm:text-base text-[#d3e4fe] mt-2 sm:mt-3 leading-relaxed">
            &ldquo;Give, and it will be given to you: good measure, pressed down, shaken together, and running over will be put into your bosom.&rdquo; —{" "}
            <span className="text-[#fbbf24] font-semibold">Luke 6:38</span>
          </p>
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {BANK_ACCOUNTS.map((acc, idx) => {
            const accents = [
              { num: "1", tagBg: "bg-red-600", borderHover: "hover:border-red-500", glow: "from-red-600/10" },
              { num: "2", tagBg: "bg-blue-600", borderHover: "hover:border-blue-500", glow: "from-blue-600/10" },
              { num: "3", tagBg: "bg-emerald-600", borderHover: "hover:border-emerald-500", glow: "from-emerald-600/10" }
            ][idx];

            return (
              <div
                key={acc.id}
                className={`bg-[#0f2042] rounded-2xl p-6 border border-[#f59e0b]/30 flex flex-col justify-between shadow-xl ${accents?.borderHover} hover:-translate-y-1 transition-all relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${accents?.glow} to-transparent rounded-full blur-xl pointer-events-none`}></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg ${accents?.tagBg} text-white font-headline font-black text-sm flex items-center justify-center shadow`}>
                        {accents?.num}
                      </span>
                      <span className="text-[#fbbf24] text-xs uppercase font-bold tracking-wider">
                        {acc.bankName}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[#fbbf24] text-xl">{acc.icon}</span>
                  </div>

                  <h4 className="font-headline text-xl font-extrabold text-[#faf9f6] mb-1">
                    {acc.category}
                  </h4>
                  <p className="text-xs text-[#d3e4fe] mb-4">
                    Account Name: <strong className="text-white">{acc.accountName}</strong>
                  </p>

                  <div className="bg-[#070d1a] p-4 rounded-xl border border-white/10 mb-5">
                    <span className="text-[#d3e4fe] text-[11px] uppercase tracking-wider block mb-1">
                      Account Number ({acc.bankName})
                    </span>
                    <span className="font-headline text-2xl font-black text-[#faf9f6] font-mono tracking-widest block">
                      {acc.accountNumber}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(acc.accountNumber, acc.category)}
                  className="w-full py-3 px-4 rounded-xl bg-[#f59e0b]/20 hover:bg-[#f59e0b]/30 text-[#fbbf24] border border-[#f59e0b]/40 font-headline text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  <span>Copy Account Number</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
