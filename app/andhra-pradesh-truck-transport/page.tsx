import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Transport in Andhra Pradesh | LOADZY",
  description:
    "Book truck transport and logistics services in Andhra Pradesh with LOADZY. Get full load, part load, house shifting, packers & movers and commercial transport across Andhra Pradesh.",
  keywords: [
    "truck transport in Andhra Pradesh",
    "truck booking Andhra Pradesh",
    "transport services Andhra Pradesh",
    "truck transport Tirupati",
    "truck booking Vijayawada",
    "freight transport Andhra Pradesh",
    "house shifting Andhra Pradesh",
    "packers and movers Andhra Pradesh",
    "commercial transport Andhra Pradesh",
    "LOADZY",
  ],
  alternates: {
    canonical:
      "https://www.loadzyinfra.in/andhra-pradesh-truck-transport",
  },
  openGraph: {
    title: "Truck Transport in Andhra Pradesh | LOADZY",
    description:
      "Book truck transport, house shifting and commercial logistics services across Andhra Pradesh with LOADZY.",
    url: "https://www.loadzyinfra.in/andhra-pradesh-truck-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  { name: "Full Load Transport", href: "/full-load" },
  { name: "Part Load Transport", href: "/part-load" },
  { name: "House Shifting", href: "/house-shifting" },
  { name: "Packers & Movers", href: "/packers-movers" },
  { name: "Industrial Transport", href: "/industrial-transport" },
  { name: "Commercial Transport", href: "/commercial-transport" },
  { name: "Fruits & Vegetables Transport", href: "/fruits-vegetables" },
];

const locations = [
  "Tirupati",
  "Vijayawada",
  "Visakhapatnam",
  "Nellore",
  "Guntur",
  "Kurnool",
  "Kadapa",
  "Anantapur",
];

const faqs = [
  {
    question: "Does LOADZY provide truck transport in Andhra Pradesh?",
    answer:
      "Yes. LOADZY helps customers find suitable truck transport for household goods, commercial shipments, industrial materials, part loads and full loads across Andhra Pradesh and connecting South Indian routes.",
  },
  {
    question: "Can I book a truck from Andhra Pradesh to Tamil Nadu?",
    answer:
      "Yes. LOADZY supports transport routes connecting Andhra Pradesh with Tamil Nadu, Karnataka, Telangana, Kerala and other South Indian locations, subject to truck availability and load requirements.",
  },
  {
    question: "Does LOADZY provide house shifting transport in Andhra Pradesh?",
    answer:
      "Yes. LOADZY supports house shifting, room shifting, office shifting and intercity household transport requirements.",
  },
  {
    question: "Can businesses use LOADZY for commercial transport?",
    answer:
      "Yes. Businesses can use LOADZY for commercial goods, inventory, cartons, furniture, equipment and other transport requirements.",
  },
];

export default function AndhraPradeshTruckTransportPage() {
  return (
    <main className="bg-white text-slate-800">
      <section className="bg-[#062B55] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#1ee1d3]">
            LOADZY Andhra Pradesh
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Truck Transport & Logistics Services in Andhra Pradesh
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Book trucks for full load, part load, house shifting, packers &
            movers, commercial goods and industrial transport across Andhra
            Pradesh with LOADZY.
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
            Andhra Pradesh Truck Transport
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Reliable Truck Booking Across Andhra Pradesh
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            LOADZY connects customers with suitable truck transport for
            household shifting, commercial goods, industrial materials,
            agricultural produce and other freight requirements. Whether you
            need transport within Andhra Pradesh or for routes connecting
            Andhra Pradesh with Tamil Nadu, Karnataka, Kerala and Telangana,
            LOADZY helps you find a suitable transport option based on your
            route and load.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Major locations such as Tirupati, Vijayawada and Visakhapatnam can
            use LOADZY for full-load and part-load requirements, house
            shifting, packers & movers and business transportation.
          </p>
        </div>
      </section>

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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
            Andhra Pradesh Locations
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Truck Transport from Andhra Pradesh
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            LOADZY can support transport requirements from major Andhra
            Pradesh locations and connecting South Indian routes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((city) => (
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-[0.15em] text-teal-600">
            South India Connectivity
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Transport Connecting Andhra Pradesh with South India
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            LOADZY is designed to help customers find transport for
            inter-state routes connecting Andhra Pradesh with Tamil Nadu,
            Karnataka, Kerala and Telangana.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/routes"
              className="rounded-xl border border-slate-200 p-5 font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              Explore LOADZY Transport Routes →
            </Link>

            <Link
              href="/truck-rates"
              className="rounded-xl border border-slate-200 p-5 font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              Check Truck Rates →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
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
              "Routes connecting Andhra Pradesh with South India",
              "Affordable freight options based on route and load",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="font-bold text-blue-950">✓ {benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-bold uppercase tracking-[0.15em] text-teal-600">
            FAQ
          </p>

          <h2 className="mt-3 text-center text-3xl font-black text-blue-950">
            Andhra Pradesh Truck Transport FAQs
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

      <section className="bg-[#062B55] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a Truck in Andhra Pradesh?
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Truck Transport & Logistics Services in Andhra Pradesh",
            provider: {
              "@type": "Organization",
              name: "LOADZY",
              url: "https://www.loadzyinfra.in",
            },
            areaServed: {
              "@type": "State",
              name: "Andhra Pradesh",
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