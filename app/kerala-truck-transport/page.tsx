import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kerala Truck Transport & All 14 Districts | LOADZY",
  description:
    "Explore truck transport across all 14 Kerala districts, cities and towns. Enquire about full load, part load, house shifting, packers and movers with LOADZY.",
  keywords: [
    "truck transport in Kerala",
    "Kerala district transport",
    "Kerala town transport",
    "truck booking Kerala",
    "Kochi truck transport",
    "Thiruvananthapuram truck transport",
    "freight transport Kerala",
    "house shifting Kerala",
    "packers and movers Kerala",
    "commercial transport Kerala",
    "industrial transport Kerala",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/kerala-truck-transport",
  },
  openGraph: {
    title: "Kerala Truck Transport & All 14 Districts | LOADZY",
    description:
      "Explore truck transport services across Kerala's 14 districts, cities and towns with LOADZY.",
    url: "https://www.loadzyinfra.in/kerala-truck-transport",
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

const districts = [
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram-transport", available: true },
  { name: "Kollam", slug: "kollam-transport", available: true },
  { name: "Pathanamthitta", slug: "pathanamthitta-transport", available: true },
  { name: "Alappuzha", slug: "alappuzha-transport", available: true },
  { name: "Kottayam", slug: "kottayam-transport", available: true },
  { name: "Idukki", slug: "painavu-transport", available: true },
  { name: "Ernakulam", slug: "kochi-transport", available: true },
  { name: "Thrissur", slug: "thrissur-transport", available: true },
  { name: "Palakkad", slug: "palakkad-transport", available: true },
  { name: "Malappuram", slug: "malappuram-transport", available: true },
  { name: "Kozhikode", slug: "kozhikode-transport", available: true },
  { name: "Wayanad", slug: "kalpetta-transport", available: true },
  { name: "Kannur", slug: "kannur-transport", available: true },
  { name: "Kasaragod", slug: "kasaragod-transport", available: true },
];

const routes = [
  { name: "Kochi → Thiruvananthapuram", from: "Kochi", to: "Thiruvananthapuram" },
  { name: "Thiruvananthapuram → Kochi", from: "Thiruvananthapuram", to: "Kochi" },
  { name: "Kochi → Kozhikode", from: "Kochi", to: "Kozhikode" },
  { name: "Kozhikode → Kochi", from: "Kozhikode", to: "Kochi" },
  { name: "Kochi → Thrissur", from: "Kochi", to: "Thrissur" },
  { name: "Palakkad → Kochi", from: "Palakkad", to: "Kochi" },
  { name: "Kochi → Bengaluru", from: "Kochi", to: "Bengaluru" },
  { name: "Kochi → Chennai", from: "Kochi", to: "Chennai" },
];

const faqs = [
  {
    question: "Does LOADZY provide truck transport in Kerala?",
    answer:
      "LOADZY helps customers enquire about full-load, part-load, household, commercial and industrial transport across Kerala, subject to route and vehicle availability.",
  },
  {
    question: "Can I book a truck from Kerala to Tamil Nadu?",
    answer:
      "You can enquire about transport between Kerala and destinations in Tamil Nadu, including Chennai, Coimbatore, Salem and other locations. Vehicle availability and freight charges must be confirmed.",
  },
  {
    question: "Does LOADZY support house shifting in Kerala?",
    answer:
      "You can enquire about household shifting, room shifting, office shifting and intercity transport requirements across Kerala.",
  },
  {
    question: "Can I find transport in all 14 Kerala districts?",
    answer:
      "Explore the Kerala district directory to open individual location transport pages. Truck availability depends on your pickup location, delivery destination and vehicle requirements.",
  },
  {
    question: "Can I transport commercial and industrial goods?",
    answer:
      "Customers can enquire about commercial goods, industrial materials, agricultural produce, food products and other freight requirements.",
  },
  {
    question: "How can I get a transport price?",
    answer:
      "Share your pickup location, delivery location, goods details and truck requirements through LOADZY to enquire about transport pricing.",
  },
];

const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg";

export default function KeralaTruckTransportPage() {
  const uniqueDistricts = districts.filter(
    (district, index, all) =>
      all.findIndex((item) => item.slug === district.slug) === index
  );

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#10182D]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#10182D] px-5 py-16 text-white sm:px-8 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#08A99F]">
              LOADZY · KERALA
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Kerala Truck Transport{" "}
              <span className="text-[#08A99F]">&amp; Logistics</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore transport services across all 14 Kerala districts,
              cities and towns. Enquire about full loads, part loads,
              household shifting, commercial goods and industrial
              transport with LOADZY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#08A99F] px-7 py-4 font-black text-[#10182D] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#13C4B8]"
              >
                Get Your Transport Price →
              </Link>

              <Link
                href="#kerala-districts"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:border-[#08A99F] hover:text-[#08A99F]"
              >
                Explore Districts ↓
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
              {["Full Load", "Part Load", "House Shifting", "Commercial Goods"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-4 py-2"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* TRANSPORT ENQUIRY PANEL */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#08A99F]">
              Transport Enquiry
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Move Goods Across Kerala
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Need a truck for goods transport or household shifting?
              Share your requirements with LOADZY to enquire about your route.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Full-load and part-load transport enquiries",
                "Household shifting and packers & movers",
                "Commercial and industrial goods",
                "Kerala and interstate routes",
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
              Vehicle availability and freight charges are confirmed
              according to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Kerala Truck Transport
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            Find Transport Across Kerala
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            LOADZY helps customers enquire about transport for household
            goods, commercial shipments, industrial materials, agricultural
            produce, spices, rubber, tea, coffee, food products and other
            freight requirements. Explore Kerala locations and find relevant
            transport information for your pickup, delivery and load needs.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            Our location directory connects state-level transport information
            with individual district, city, town, commercial area and
            industrial location pages.
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
              shifting requirements across Kerala.
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
        id="kerala-districts"
        className="scroll-mt-8 bg-[#F4F7FB] px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Explore Kerala
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            All 14 Kerala Districts
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Select a district to explore its transport location page.
            Each district directory connects you to its cities, towns
            and other transport locations.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uniqueDistricts.map((district) => (
              <article key={district.slug} className={cardClass}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#08A99F]">
                  Kerala District
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
            Kerala Transport Routes
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-slate-600">
            Explore transport connections between Kerala, Tamil Nadu
            and other major destinations in South India.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {routes.map((route) => (
              <article key={route.name} className={cardClass}>
                <span className="font-black text-[#10182D]">
                  🚚 {route.name}
                </span>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Enquire about goods transport from {route.from} to {route.to}.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-block font-bold text-[#078F87]"
                >
                  Enquire About This Route →
                </Link>
              </article>
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
              "Routes connecting Kerala with South India",
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
            Kerala Truck Transport FAQs
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className={cardClass}>
                <h3 className="text-lg font-black text-[#10182D]">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
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
            Need Transport in Kerala?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Contact LOADZY with your route and load requirements to enquire
            about transport options across Kerala.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-black text-[#10182D] shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Book a Truck →
          </Link>
        </div>
      </section>

      {/* SERVICE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Truck Transport and Logistics Services in Kerala",
            provider: {
              "@type": "Organization",
              name: "LOADZY",
              url: "https://www.loadzyinfra.in",
            },
            areaServed: {
              "@type": "State",
              name: "Kerala",
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

      {/* FAQ STRUCTURED DATA */}
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