import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Karnataka Truck Transport & Districts | LOADZY",
  description:
    "Explore Karnataka districts, cities and towns for truck transport, full load, part load, house shifting, packers and movers with LOADZY.",
  keywords: [
    "truck transport in Karnataka",
    "Karnataka district transport",
    "Karnataka town transport",
    "truck booking Karnataka",
    "Bangalore truck transport",
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
    title: "Karnataka Truck Transport & Districts | LOADZY",
    description:
      "Explore Karnataka districts, cities and towns for transport services with LOADZY.",
    url: "https://www.loadzyinfra.in/karnataka-truck-transport",
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

const routes = [
  { name: "Bangalore → Chennai", href: "/routes/bangalore/chennai" },
  { name: "Chennai → Bangalore", href: "/routes/chennai/bangalore" },
  { name: "Bangalore → Tirupattur", href: "/routes/bangalore/tirupattur" },
  { name: "Tirupattur → Bangalore", href: "/routes/tirupattur/bangalore" },
];

const districts = [
  { name: "Bagalkote", slug: "bagalkote-transport", available: true },
 { name: "Ballari", slug: "ballari-transport", available: true },
 { name: "Belagavi", slug: "belagavi-transport", available: true },
  { name: "Bengaluru Urban", slug: "bengaluru-urban-transport", available: false },
  { name: "Bengaluru Rural", slug: "bengaluru-rural-transport", available: false },
  { name: "Bidar", slug: "bidar-transport", available: false },
  { name: "Vijayapura", slug: "vijayapura-transport", available: false },
  { name: "Chamarajanagar", slug: "chamarajanagar-transport", available: false },
  { name: "Chikkaballapura", slug: "chikkaballapura-transport", available: false },
  { name: "Chikkamagaluru", slug: "chikkamagaluru-transport", available: false },
  { name: "Chitradurga", slug: "chitradurga-transport", available: false },
  { name: "Dakshina Kannada", slug: "dakshina-kannada-transport", available: false },
  { name: "Davanagere", slug: "davanagere-transport", available: false },
  { name: "Dharwad", slug: "dharwad-transport", available: false },
  { name: "Gadag", slug: "gadag-transport", available: false },
  { name: "Hassan", slug: "hassan-transport", available: false },
  { name: "Haveri", slug: "haveri-transport", available: false },
  { name: "Kalaburagi", slug: "kalaburagi-transport", available: false },
  { name: "Kodagu", slug: "kodagu-transport", available: false },
  { name: "Kolar", slug: "kolar-transport", available: false },
  { name: "Koppal", slug: "koppal-transport", available: false },
  { name: "Mandya", slug: "mandya-transport", available: false },
  { name: "Mysuru", slug: "mysuru-transport", available: false },
  { name: "Raichur", slug: "raichur-transport", available: false },
  { name: "Ramanagara", slug: "ramanagara-transport", available: false },
  { name: "Shivamogga", slug: "shivamogga-transport", available: false },
  { name: "Tumakuru", slug: "tumakuru-transport", available: false },
  { name: "Udupi", slug: "udupi-transport", available: false },
  { name: "Uttara Kannada", slug: "uttara-kannada-transport", available: false },
  { name: "Vijayanagara", slug: "vijayanagara-transport", available: false },
  { name: "Yadgir", slug: "yadgir-transport", available: false },
];

const faqs = [
  {
    question: "Does LOADZY provide truck transport in Karnataka?",
    answer:
      "LOADZY helps customers enquire about full-load, part-load, household, commercial and industrial transport across Karnataka, subject to route and vehicle availability.",
  },
  {
    question: "Can I book a truck from Bangalore to Tamil Nadu?",
    answer:
      "You can enquire about transport between Bangalore and destinations in Tamil Nadu. Vehicle availability and freight charges must be confirmed.",
  },
  {
    question: "Does LOADZY support house shifting?",
    answer:
      "You can enquire about household shifting, room shifting, office shifting and intercity transport requirements.",
  },
  {
    question: "How can I explore Karnataka town transport pages?",
    answer:
      "Select an available district to explore its transport page. District pages can link to their towns and cities as those pages become available.",
  },
];

const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg";

export default function KarnatakaTruckTransportPage() {
  const uniqueDistricts = districts.filter(
    (district, index, all) =>
      all.findIndex((item) => item.slug === district.slug) === index
  );

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#10182D]">
      {/* HERO — Bagalkote-inspired layout */}
      <section className="relative overflow-hidden bg-[#10182D] px-5 py-16 text-white sm:px-8 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#08A99F]">
              LOADZY · KARNATAKA
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Karnataka Truck Transport{" "}
              <span className="text-[#08A99F]">&amp; Logistics</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore transport services, districts, cities and towns across
              Karnataka. Enquire about full loads, part loads, household
              shifting, commercial goods and industrial transport with LOADZY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#08A99F] px-7 py-4 font-black text-[#10182D] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#13C4B8]"
              >
                Get Your Transport Price →
              </Link>

              <Link
                href="#karnataka-districts"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:border-[#08A99F] hover:text-[#08A99F]"
              >
                Explore Districts ↓
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
              <span className="rounded-full border border-white/15 px-4 py-2">
                Full Load
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Part Load
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                House Shifting
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Commercial Goods
              </span>
            </div>
          </div>

          {/* Enquiry-style panel, with CTA leading to the existing contact page */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#08A99F]">
              Transport Enquiry
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Move Goods Across Karnataka
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Need a truck for goods transport or household shifting? Share
              your requirements with LOADZY to enquire about your route.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Full-load and part-load transport enquiries",
                "Household shifting and packers & movers",
                "Commercial and industrial goods",
                "Karnataka and interstate routes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#08A99F]/15 font-black text-[#08A99F]">
                    ✓
                  </span>
                  <p className="leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 block rounded-xl bg-yellow-400 px-6 py-4 text-center font-black text-[#10182D] transition hover:bg-yellow-300"
            >
              Book a Truck →
            </Link>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Vehicle availability and freight charges are confirmed according
              to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Karnataka Truck Transport
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            Find Transport Across Karnataka
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            LOADZY helps customers enquire about transport for household goods,
            commercial shipments, industrial materials, agricultural produce
            and other freight requirements. Explore Karnataka locations and
            find relevant transport information for your pickup, delivery and
            load requirements.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            Our location directory connects state-level transport information
            with individual district, city and town pages as those pages become
            available.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
              Transport Services Through LOADZY
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Explore transport options for different goods, routes and
              shifting requirements.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className={cardClass}>
                <h3 className="text-xl font-black text-[#10182D]">
                  {service.name}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Explore transport options for your route and load
                  requirements.
                </p>
                <span className="mt-4 inline-block font-black text-[#078F87]">
                  View Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRICT DIRECTORY */}
      <section
        id="karnataka-districts"
        className="scroll-mt-8 bg-[#F4F7FB] px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Explore Karnataka
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            Karnataka Districts
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Select an available district to explore its transport page.
            District pages will link to their towns and cities as each location
            page is completed.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uniqueDistricts.map((district) => (
              <article key={district.slug} className={cardClass}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#08A99F]">
                  Karnataka District
                </p>

                <h3 className="mt-3 text-xl font-black text-[#10182D]">
                  {district.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore truck transport and location information for{" "}
                  {district.name}.
                </p>

                {district.available ? (
                  <Link
                    href={`/${district.slug}`}
                    className="mt-5 inline-flex rounded-lg bg-[#08A99F]/10 px-4 py-2 font-black text-[#078F87] transition hover:bg-[#08A99F]/20"
                  >
                    Explore District →
                  </Link>
                ) : (
                  <span className="mt-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
                    Coming Soon
                  </span>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#10182D] p-7 text-white md:p-10">
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Need a Truck?
            </p>
            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              Get Your Transport Price
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Tell us your pickup, delivery and load requirements to enquire
              about a suitable transport option.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-xl bg-yellow-400 px-7 py-3 font-black text-[#10182D] transition hover:bg-yellow-300"
            >
              Book a Truck →
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Popular Routes
          </p>

          <h2 className="mt-3 text-center text-3xl font-black text-[#10182D] md:text-4xl">
            Karnataka Transport Routes
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-slate-600">
            Explore selected routes connecting Karnataka with destinations
            across South India.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cardClass}
              >
                <span className="font-black text-[#10182D]">
                  🚚 {route.name}
                </span>
                <span className="mt-3 block font-bold text-[#078F87]">
                  View Route →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/routes"
              className="font-black text-[#078F87] hover:underline"
            >
              Explore All LOADZY Routes →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="bg-[#F4F7FB] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Why LOADZY
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            A Simple Way to Find Transport
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Transport enquiries for different load requirements",
              "Full-load and part-load transport",
              "House shifting and packers & movers enquiries",
              "Commercial and industrial goods transport",
              "Routes connecting Karnataka with South India",
              "Freight options based on route and load requirements",
            ].map((benefit) => (
              <div key={benefit} className={cardClass}>
                <p className="font-bold leading-7 text-[#10182D]">
                  <span className="mr-2 text-[#08A99F]">✓</span>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-center text-3xl font-black text-[#10182D] md:text-4xl">
            Karnataka Truck Transport FAQs
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className={cardClass}>
                <h3 className="text-lg font-black text-[#10182D]">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#10182D] px-5 py-16 text-center text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            MOVE. CONNECT. DELIVER.
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Need Transport in Karnataka?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Contact LOADZY with your route and load requirements to enquire
            about transport options.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-black text-[#10182D] shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Book a Truck →
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
            name: "Truck Transport and Logistics Services in Karnataka",
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