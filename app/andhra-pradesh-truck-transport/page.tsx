import type { Metadata } from "next";
import Link from "next/link";
import locationData from "../../data/locations.json";

export const metadata: Metadata = {
  title: "Andhra Pradesh Truck Transport & Districts | LOADZY",
  description:
    "Explore Andhra Pradesh district transport pages for truck booking, full load, part load, house shifting, packers and movers with LOADZY.",
  keywords: [
    "truck transport in Andhra Pradesh",
    "Andhra Pradesh district transport",
    "Andhra Pradesh truck booking",
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
    title: "Andhra Pradesh Truck Transport & Districts | LOADZY",
    description:
      "Explore Andhra Pradesh districts and transport services with LOADZY.",
    url: "https://www.loadzyinfra.in/andhra-pradesh-truck-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

type LocationRecord = {
  name?: string;
  slug?: string;
  state?: string;
  locationType?: string;
  type?: string;
  category?: string;
};

const allLocations = locationData as LocationRecord[];

const districts = Array.from(
  new Map(
    allLocations
      .filter((location) => {
        const state = (location.state ?? "").trim().toLowerCase();

        const type = (
          location.locationType ??
          location.type ??
          location.category ??
          ""
        )
          .trim()
          .toLowerCase();

        return (
          state === "andhra pradesh" &&
          type === "district" &&
          Boolean(location.name) &&
          Boolean(location.slug)
        );
      })
      .map((location) => [
        location.slug!,
        {
          name: location.name!,
          slug: location.slug!,
        },
      ])
  ).values()
).sort((a, b) => a.name.localeCompare(b.name));

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
  {
    name: "Vijayawada → Chennai",
    href: "/routes/vijayawada-transport/chennai-transport",
  },
  {
    name: "Chennai → Vijayawada",
    href: "/routes/chennai-transport/vijayawada-transport",
  },
  {
    name: "Tirupati → Bangalore",
    href: "/routes/tirupati-transport/bangalore-transport",
  },
  {
    name: "Bangalore → Tirupati",
    href: "/routes/bangalore-transport/tirupati-transport",
  },
];

const faqs = [
  {
    question: "Does LOADZY provide truck transport in Andhra Pradesh?",
    answer:
      "LOADZY helps customers enquire about full-load, part-load, household, commercial and industrial transport across Andhra Pradesh, subject to route and vehicle availability.",
  },
  {
    question: "Can I book a truck from Andhra Pradesh to Tamil Nadu?",
    answer:
      "You can enquire about transport between Andhra Pradesh and destinations in Tamil Nadu, Karnataka, Kerala and Telangana. Vehicle availability and freight charges must be confirmed.",
  },
  {
    question: "Does LOADZY support house shifting?",
    answer:
      "You can enquire about household shifting, room shifting, office shifting and intercity transport requirements.",
  },
  {
    question: "How can I explore Andhra Pradesh district transport pages?",
    answer:
      "Select a district card to open its dedicated LOADZY transport page. District pages can also connect visitors to their towns and cities.",
  },
];

const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg";

export default function AndhraPradeshTruckTransportPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#10182D]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#10182D] px-5 py-16 text-white sm:px-8 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#08A99F]">
              LOADZY · ANDHRA PRADESH
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Andhra Pradesh Truck Transport{" "}
              <span className="text-[#08A99F]">&amp; Logistics</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore transport services, districts, cities and towns across
              Andhra Pradesh. Enquire about full loads, part loads, household
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
                href="#andhra-pradesh-districts"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:border-[#08A99F] hover:text-[#08A99F]"
              >
                Explore Districts ↓
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
              {[
                "Full Load",
                "Part Load",
                "House Shifting",
                "Commercial Goods",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* TRANSPORT ENQUIRY PANEL */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#08A99F]">
              Transport Enquiry
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Move Goods Across Andhra Pradesh
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
                "Andhra Pradesh and interstate routes",
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
            Andhra Pradesh Truck Transport
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            Find Transport Across Andhra Pradesh
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            LOADZY helps customers enquire about transport for household
            goods, commercial shipments, industrial materials, agricultural
            produce and other freight requirements. Explore Andhra Pradesh
            locations and find relevant transport information for your
            pickup, delivery and load requirements.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            Explore dedicated district, city and town transport pages to
            discover local goods movement and connecting South Indian routes.
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
              <Link
                key={service.href}
                href={service.href}
                className={cardClass}
              >
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

      {/* ANDHRA PRADESH DISTRICT DIRECTORY */}
      <section
        id="andhra-pradesh-districts"
        className="scroll-mt-8 bg-[#F4F7FB] px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Explore Andhra Pradesh
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            Andhra Pradesh Districts
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore dedicated LOADZY transport pages for Andhra Pradesh
            districts. Select a district to discover its transport
            information, goods movement and local routes.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((district) => (
              <article key={district.slug} className={cardClass}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#08A99F]">
                  Andhra Pradesh District
                </p>

                <h3 className="mt-3 text-xl font-black text-[#10182D]">
                  {district.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore truck transport, freight services and goods
                  movement from {district.name}.
                </p>

                <Link
                  href={`/${district.slug}`}
                  className="mt-5 inline-flex rounded-lg bg-[#08A99F]/10 px-4 py-2 font-black text-[#078F87] transition hover:bg-[#08A99F]/20"
                >
                  Explore District →
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm font-semibold text-slate-500">
            Showing {districts.length} Andhra Pradesh district pages
          </p>

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
            Andhra Pradesh Transport Routes
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-slate-600">
            Explore selected routes connecting Andhra Pradesh with
            destinations across South India.
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
              "Routes connecting Andhra Pradesh with South India",
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
            Andhra Pradesh Truck Transport FAQs
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
            Need Transport in Andhra Pradesh?
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
            name: "Truck Transport and Logistics Services in Andhra Pradesh",
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