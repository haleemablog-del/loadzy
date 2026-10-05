import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Transport in Karnataka | LOADZY",
  description:
    "Book truck transport and logistics services in Karnataka with LOADZY. Get full load, part load, house shifting, packers & movers and commercial transport across Bangalore and Karnataka.",
  keywords: [
    "truck transport in Karnataka",
    "truck booking Karnataka",
    "transport services Karnataka",
    "truck transport Bangalore",
    "truck booking Bangalore",
    "freight transport Karnataka",
    "house shifting Karnataka",
    "packers and movers Karnataka",
    "commercial transport Karnataka",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/karnataka-truck-transport",
  },
  openGraph: {
    title: "Truck Transport in Karnataka | LOADZY",
    description:
      "Book truck transport, house shifting and commercial logistics services across Karnataka with LOADZY.",
    url: "https://www.loadzyinfra.in/karnataka-truck-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  {
    name: "Full Load Transport",
    href: "/full-load",
  },
  {
    name: "Part Load Transport",
    href: "/part-load",
  },
  {
    name: "House Shifting",
    href: "/house-shifting",
  },
  {
    name: "Packers & Movers",
    href: "/packers-movers",
  },
  {
    name: "Industrial Transport",
    href: "/industrial-transport",
  },
  {
    name: "Commercial Transport",
    href: "/commercial-transport",
  },
  {
    name: "Fruits & Vegetables Transport",
    href: "/fruits-vegetables",
  },
];

const routes = [
  {
    name: "Bangalore → Chennai",
    href: "/routes/bangalore/chennai",
  },
  {
    name: "Chennai → Bangalore",
    href: "/routes/chennai/bangalore",
  },
  {
    name: "Bangalore → Tirupattur",
    href: "/routes/bangalore/tirupattur",
  },
  {
    name: "Tirupattur → Bangalore",
    href: "/routes/tirupattur/bangalore",
  },
];

const faqs = [
  {
    question: "Does LOADZY provide truck transport in Karnataka?",
    answer:
      "Yes. LOADZY helps customers find suitable truck transport for household goods, commercial shipments, industrial materials, part loads and full loads across Karnataka and connecting South Indian routes.",
  },
  {
    question: "Can I book a truck from Bangalore to Tamil Nadu?",
    answer:
      "Yes. LOADZY supports transport routes connecting Bangalore with cities and towns across Tamil Nadu, subject to truck availability and your load requirement.",
  },
  {
    question: "Does LOADZY provide house shifting transport in Karnataka?",
    answer:
      "Yes. LOADZY supports house shifting, room shifting, office shifting and intercity household transport requirements.",
  },
  {
    question: "Can businesses use LOADZY for commercial transport?",
    answer:
      "Yes. Businesses can use LOADZY for commercial goods, inventory, cartons, furniture, equipment and other transport requirements.",
  },
];

export default function KarnatakaTruckTransportPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-[#062B55] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#1ee1d3]">
            LOADZY Karnataka
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Truck Transport & Logistics Services in Karnataka
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Book trucks for full load, part load, house shifting, packers &
            movers, commercial goods and industrial transport across Karnataka
            with LOADZY.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-[#1ee1d3] px-7 py-3 font-black text-[#06264a] shadow-lg transition hover:-translate-y-1"
            >
              Find My Truck →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/30 px-7 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
            Karnataka Truck Transport
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Reliable Truck Booking Across Karnataka
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            LOADZY connects customers with suitable truck transport for
            household shifting, commercial goods, industrial materials,
            agricultural produce and other freight requirements. Whether you
            need a truck within Karnataka or for a route connecting Karnataka
            with Tamil Nadu and other South Indian states, LOADZY helps you
            find the right transport option based on your route and load.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Major locations such as Bangalore and other Karnataka cities can
            use LOADZY for full-load and part-load requirements, house
            shifting, packers & movers and business transportation.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Transport Services Available Through LOADZY
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-black text-blue-950">
                  {service.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Suitable truck transport options for your route and load
                  requirement.
                </p>

                <span className="mt-4 inline-block font-bold text-teal-600">
                  View Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
            Karnataka Locations
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Truck Transport from Karnataka
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            LOADZY can support transport requirements from major Karnataka
            locations and connecting South Indian routes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Bangalore",
              "Mysore",
              "Hosur",
              "Mangalore",
              "Hubli",
              "Belgaum",
              "Tumkur",
              "Davangere",
            ].map((city) => (
              <div
                key={city}
                className="rounded-xl border border-slate-200 bg-white p-5 font-bold text-blue-950 shadow-sm"
              >
                Truck Transport in {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
              Popular Routes
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Karnataka Transport Routes
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="rounded-xl bg-white p-5 font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {route.name} →
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/routes"
              className="font-bold text-teal-600 hover:underline"
            >
              Explore All LOADZY Routes →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
            Why LOADZY
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            A Simple Way to Find Transport
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Suitable truck options for different load requirements",
              "Full-load and part-load transport",
              "House shifting and packers & movers support",
              "Commercial and industrial goods transport",
              "Routes connecting Karnataka with South India",
              "Affordable freight options based on route and load",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-slate-200 p-5"
              >
                <p className="font-bold text-blue-950">✓ {benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-bold uppercase tracking-[0.15em] text-teal-600">
            FAQ
          </p>

          <h2 className="mt-3 text-center text-3xl font-black text-blue-950">
            Karnataka Truck Transport FAQs
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-blue-950">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#062B55] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a Truck in Karnataka?
          </h2>

          <p className="mt-4 leading-7 text-slate-200">
            Find suitable transport for your household, commercial or business
            load with LOADZY.
          </p>

          <Link
            href="/load-search"
            className="mt-7 inline-block rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a] shadow-lg transition hover:-translate-y-1"
          >
            Find My Truck →
          </Link>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Truck Transport & Logistics Services in Karnataka",
            provider: {
              "@type": "Organization",
              name: "LOADZY",
              url: "https://www.loadzyinfra.in",
            },
            areaServed: {
              "@type": "State",
              name: "Karnataka",
            },
            serviceType: [
              "Truck Transport",
              "Full Load Transport",
              "Part Load Transport",
              "House Shifting",
              "Packers & Movers",
              "Commercial Transport",
              "Industrial Transport",
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}