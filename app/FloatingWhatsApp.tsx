"use client";

import { useState } from "react";

const PHONE_NUMBER = "919019499448";

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.5-8.42ZM12.09 21.8h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.72.97.99-3.63-.23-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.46-4.45 9.87-9.92 9.87Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.1-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h11v11H3z" />
      <path d="M14 10h4l3 4v3h-7z" />
      <circle cx="7.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

const options = [
  {
    title: "Book a Truck",
    description: "Goods transport or house shifting",
    message:
      "Hello LOADZY! I need a truck for my transport requirement. Please help me with truck availability and freight charges.",
    icon: TruckIcon,
    iconStyle: "bg-teal-50 text-teal-700",
  },
  {
    title: "Find a Load",
    description: "For truck owners looking for loads",
    message:
      "Hello LOADZY! I am a truck owner looking for available loads. Please help me find suitable loads for my vehicle.",
    icon: PackageIcon,
    iconStyle: "bg-amber-50 text-amber-700",
  },
  {
    title: "Ask for Freight Price",
    description: "Enquire about transport charges",
    message:
      "Hello LOADZY! I would like to know the freight price for my transport requirement. Please help me with a quotation.",
    icon: PriceIcon,
    iconStyle: "bg-indigo-50 text-indigo-700",
  },
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  function openWhatsApp(message: string) {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed bottom-6 right-5 z-[100] flex flex-col items-end gap-3">
      {isOpen && (
        <section
          aria-label="LOADZY Quick Connect"
          className="w-[340px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
        >
          <header className="bg-[#10243A] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#18B6A4] text-white">
                <TruckIcon />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-base font-bold text-white">
                  LOADZY Connect
                </h2>
                <p className="text-xs tracking-wide text-slate-300">
                  MOVE. CONNECT. DELIVER.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close LOADZY Connect"
                className="rounded-lg p-2 text-white transition hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </header>

          <div className="space-y-3 p-4">
            <h3 className="mb-3 text-sm font-bold text-slate-800">
              What do you need today?
            </h3>

            {options.map((option) => {
              const Icon = option.icon;

              return (
                <button
                  key={option.title}
                  type="button"
                  onClick={() => openWhatsApp(option.message)}
                  className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-[#18B6A4] hover:bg-teal-50/40 focus:outline-none focus:ring-2 focus:ring-[#18B6A4]"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${option.iconStyle}`}>
                    <Icon />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-[#10243A]">
                      {option.title}
                    </span>
                    <span className="mt-1 block text-xs leading-4 text-slate-500">
                      {option.description}
                    </span>
                  </span>

                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              );
            })}
          </div>

          <footer className="flex items-center justify-center gap-2 border-t border-slate-100 bg-slate-50 px-4 py-3">
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span className="text-xs font-medium text-slate-600">
              Connect directly with LOADZY
            </span>
          </footer>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close LOADZY Connect" : "Open LOADZY Connect"}
        aria-expanded={isOpen}
        title="Connect with LOADZY"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#20BA5A] focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        ) : (
          <WhatsAppIcon className="h-8 w-8" />
        )}
      </button>
    </div>
  );
}