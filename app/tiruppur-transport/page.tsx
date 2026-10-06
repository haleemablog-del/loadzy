import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiruppur Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Tiruppur for textile goods, full load, part load, house shifting, commercial and industrial transport across Tamil Nadu and South India.",
  keywords: [
    "Tiruppur truck transport",
    "Tiruppur lorry transport",
    "Tiruppur packers movers",
    "truck booking Tiruppur",
    "Tiruppur freight transport",
    "textile transport Tiruppur",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/tiruppur-transport",
  },
};

const services = [
  ["Full Load Transport", "/full-load"],
  ["Part Load Transport", "/part-load"],
  ["House Shifting", "/house-shifting"],
  ["Packers & Movers", "/packers-movers"],
  ["Commercial Transport", "/commercial-transport"],
  ["Industrial Transport", "/industrial-transport"],
  ["Fruits & Vegetables", "/fruits-vegetables"],
  ["Truck Booking", "/load-search"],
];

const routes = [
  ["Tiruppur → Chennai", "/routes/tiruppur/chennai"],
  ["Tiruppur → Bangalore", "/routes/tiruppur/bangalore"],
  ["Tiruppur → Coimbatore", "/routes/tiruppur/coimbatore"],
  ["Tiruppur → Erode", "/routes/tiruppur/erode"],
  ["Tiruppur → Madurai", "/routes/tiruppur/madurai"],
  ["Tiruppur → Salem", "/routes/tiruppur/salem"],
  ["Tiruppur → Kochi", "/routes/tiruppur/kochi"],
  ["Tiruppur → Hyderabad", "/routes/tiruppur/hyderabad"],
];

const faqs = [
  {
    q: "Can I book a truck from Tiruppur?",
    a: "Yes. LOADZY helps customers find suitable truck transport based on pickup, delivery, load and truck requirements.",
  },
  {
    q: "Does LOADZY transport textile goods from Tiruppur?",
    a: "LOADZY can support commercial and industrial transport requirements, including goods that require suitable truck capacity and vehicle type.",
  },
  {
    q: "Can I book full load and part load trucks?",
    a: "Yes. LOADZY supports both full load and part load transport requirements.",
  },
  {
    q: "Does LOADZY provide house shifting from Tiruppur?",
    a: "Yes. LOADZY supports household shifting and other truck transport requirements.",
  },
];

export default function TiruppurTransportPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.loadzyinfra.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tiruppur Truck Transport",
            item: "https://www.loadzyinfra.in/tiruppur-transport",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Tiruppur Truck Transport Services",
        provider: {
          "@type": "Organization",
          name: "LOADZY",
        },
        areaServed: "Tiruppur",
        serviceType: "Truck Transport",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-[#062B55]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="bg-[#10182D] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#08A99F]">
            LOADZY TIRUPPUR
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Tiruppur Truck Transport & Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Truck transport from Tiruppur for textile goods, house shifting,
            packers and movers, commercial goods, industrial loads, full load
            and part load requirements across Tamil Nadu and South India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-slate-900"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-7 py-4 font-black"
            >
              Truck Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            Truck Transport Services in Tiruppur
          </h2>

          <p className="mt-5 max-w-5xl text-lg font-bold leading-8 text-slate-600">
            Tiruppur is a major textile and commercial transport hub in Tamil
            Nadu. LOADZY helps customers plan truck transport according to
            pickup, delivery, cargo, capacity and vehicle requirements.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 p-6 font-black shadow-sm hover:border-[#08A99F] hover:bg-teal-50"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            Popular Truck Routes from Tiruppur
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-black shadow-sm hover:border-[#08A99F]"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Why Choose LOADZY for Tiruppur Transport?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Multiple truck types",
              "Textile and commercial goods transport",
              "Full load and part load options",
              "House shifting support",
              "Industrial transport",
              "Tamil Nadu and South India routes",
              "Route-based truck matching",
              "Pickup and delivery planning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-bold shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Tiruppur Truck Transport FAQs
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer text-lg font-black">
                  {faq.q}
                </summary>

                <p className="mt-4 font-bold leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062B55] px-6 py-16 text-center text-white">
        <h2 className="text-4xl font-black">
          Need a Truck from Tiruppur?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-bold text-white/90">
          Enter your pickup, delivery and load details to find the right truck
          for your transport requirement.
        </p>

        <Link
          href="/load-search"
          className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-black text-slate-900"
        >
          Find My Truck →
        </Link>
      </section>
    </main>
  );
}