import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telangana Truck Transport & 33 Districts | LOADZY",
  description:
    "Explore truck transport across all 33 districts of Telangana with LOADZY. Enquire about full load, part load, house shifting, packers and movers, commercial and industrial goods transport.",
  keywords: [
    "truck transport in Telangana",
    "Telangana district transport",
    "Telangana truck booking",
    "truck transport Hyderabad",
    "freight transport Telangana",
    "house shifting Telangana",
    "packers and movers Telangana",
    "commercial transport Telangana",
    "industrial transport Telangana",
    "truck booking across Telangana",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/telangana-truck-transport",
  },
  openGraph: {
    title: "Telangana Truck Transport & 33 Districts | LOADZY",
    description:
      "Explore truck transport, district locations, full loads, part loads and household shifting services across Telangana with LOADZY.",
    url: "https://www.loadzyinfra.in/telangana-truck-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  {
    name: "Full Load Transport",
    href: "/full-load",
    description:
      "Transport larger consignments, commercial goods and business shipments.",
  },
  {
    name: "Part Load Transport",
    href: "/part-load",
    description:
      "Explore transport enquiries for smaller shipments and shared loads.",
  },
  {
    name: "House Shifting",
    href: "/house-shifting",
    description:
      "Enquire about household furniture, appliances and relocation transport.",
  },
  {
    name: "Packers & Movers",
    href: "/packers-movers",
    description:
      "Explore household, office and intercity shifting requirements.",
  },
  {
    name: "Industrial Transport",
    href: "/industrial-transport",
    description:
      "Transport industrial materials, equipment and commercial consignments.",
  },
  {
    name: "Commercial Transport",
    href: "/commercial-transport",
    description:
      "Find transport options for business goods, inventory and deliveries.",
  },
  {
    name: "Fruits & Vegetables Transport",
    href: "/fruits-vegetables",
    description:
      "Enquire about transporting agricultural produce and perishable goods.",
  },
];

// Telangana's 33 district directory.
// Slugs follow the location-page naming convention.
const districts = [
  { name: "Adilabad", slug: "adilabad-transport" },
  { name: "Bhadradri Kothagudem", slug: "bhadradri-kothagudem-transport" },
  { name: "Hanamkonda", slug: "hanamkonda-transport" },
  { name: "Hyderabad", slug: "hyderabad-transport" },
  { name: "Jagtial", slug: "jagtial-transport" },
  { name: "Jangaon", slug: "jangaon-transport" },
  {
    name: "Jayashankar Bhupalpally",
    slug: "jayashankar-bhupalpally-transport",
  },
  {
    name: "Jogulamba Gadwal",
    slug: "jogulamba-gadwal-transport",
  },
  { name: "Kamareddy", slug: "kamareddy-transport" },
  { name: "Karimnagar", slug: "karimnagar-transport" },
  { name: "Khammam", slug: "khammam-transport" },
  {
    name: "Kumuram Bheem Asifabad",
    slug: "kumuram-bheem-asifabad-transport",
  },
  { name: "Mahabubabad", slug: "mahabubabad-transport" },
  { name: "Mahabubnagar", slug: "mahabubnagar-transport" },
  { name: "Mancherial", slug: "mancherial-transport" },
  { name: "Medak", slug: "medak-transport" },
  {
    name: "Medchal Malkajgiri",
    slug: "medchal-malkajgiri-transport",
  },
  { name: "Mulugu", slug: "mulugu-transport" },
  { name: "Nagarkurnool", slug: "nagarkurnool-transport" },
  { name: "Nalgonda", slug: "nalgonda-transport" },
  { name: "Narayanpet", slug: "narayanpet-transport" },
  { name: "Nirmal", slug: "nirmal-transport" },
  { name: "Nizamabad", slug: "nizamabad-transport" },
  { name: "Peddapalli", slug: "peddapalli-transport" },
  {
    name: "Rajanna Sircilla",
    slug: "rajanna-sircilla-transport",
  },
  { name: "Rangareddy", slug: "rangareddy-transport" },
  { name: "Sangareddy", slug: "sangareddy-transport" },
  { name: "Siddipet", slug: "siddipet-transport" },
  { name: "Suryapet", slug: "suryapet-transport" },
  { name: "Vikarabad", slug: "vikarabad-transport" },
  { name: "Wanaparthy", slug: "wanaparthy-transport" },
  { name: "Warangal", slug: "warangal-transport" },
  {
    name: "Yadadri Bhuvanagiri",
    slug: "yadadri-bhuvanagiri-transport",
  },
];

const routes = [
  { name: "Hyderabad → Bengaluru", href: "/routes" },
  { name: "Hyderabad → Chennai", href: "/routes" },
  { name: "Hyderabad → Vijayawada", href: "/routes" },
  { name: "Hyderabad → Warangal", href: "/routes" },
  { name: "Warangal → Hyderabad", href: "/routes" },
  { name: "Karimnagar → Hyderabad", href: "/routes" },
  { name: "Khammam → Hyderabad", href: "/routes" },
  { name: "Nizamabad → Hyderabad", href: "/routes" },
];

const faqs = [
  {
    question: "Does LOADZY provide truck transport across Telangana?",
    answer:
      "LOADZY helps customers enquire about full-load, part-load, household, commercial and industrial transport across Telangana, subject to route and vehicle availability.",
  },
  {
    question: "Can I book a truck from Telangana to Karnataka or Tamil Nadu?",
    answer:
      "Customers can enquire about transport between Telangana and destinations in Karnataka, Tamil Nadu, Andhra Pradesh, Kerala and other locations. Vehicle availability and freight charges must be confirmed.",
  },
  {
    question: "Does LOADZY support house shifting in Telangana?",
    answer:
      "Customers can enquire about household shifting, furniture transport, room shifting, office shifting and intercity relocation requirements.",
  },
  {
    question: "Can businesses use LOADZY for commercial transport?",
    answer:
      "Businesses can enquire about transporting commercial goods, cartons, furniture, equipment, inventory and other consignments.",
  },
  {
    question: "How can I find transport in my Telangana district?",
    answer:
      "Select your district from the directory below to explore its individual LOADZY transport page and available location information.",
  },
  {
    question: "Are all 33 Telangana districts included?",
    answer:
      "This directory lists all 33 Telangana districts. Select a district to visit its individual transport information page.",
  },
];

const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg";

export default function TelanganaTruckTransportPage() {
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
              LOADZY · TELANGANA
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Telangana Truck Transport{" "}
              <span className="text-[#08A99F]">& Logistics</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore truck transport across all 33 districts of Telangana.
              Enquire about full loads, part loads, household shifting,
              commercial goods and industrial transport with LOADZY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#08A99F] px-7 py-4 font-black text-[#10182D] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#13C4B8]"
              >
                Get Your Transport Price →
              </Link>

              <Link
                href="#telangana-districts"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:border-[#08A99F] hover:text-[#08A99F]"
              >
                Explore 33 Districts ↓
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
              Move Goods Across Telangana
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Need a truck for goods transport or household shifting?
              Share your pickup, delivery and load requirements with LOADZY.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Full-load and part-load transport enquiries",
                "Household shifting and packers & movers",
                "Commercial and industrial goods",
                "Telangana and interstate routes",
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
            Telangana Truck Transport
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            Find Transport Across Telangana
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            LOADZY helps customers enquire about transport for household
            goods, commercial shipments, industrial materials, agricultural
            produce and other freight requirements. Explore individual
            district, city and town transport pages to find relevant
            information for your pickup and delivery requirements.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            From Hyderabad and Warangal to Nizamabad, Khammam, Karimnagar
            and other Telangana locations, customers can explore transport
            options for local and interstate movement.
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
              shifting requirements across Telangana.
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
                  {service.description}
                </p>

                <span className="mt-4 inline-block font-black text-[#078F87]">
                  View Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 33 DISTRICTS */}
      <section
        id="telangana-districts"
        className="scroll-mt-8 bg-[#F4F7FB] px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Explore Telangana
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#10182D] md:text-4xl">
            Truck Transport in All 33 Telangana Districts
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Select your district to explore its individual LOADZY transport
            page. Each district link takes you to its location-specific
            transport information.
          </p>

          <p className="mt-4 font-bold text-[#078F87]">
            33 Districts · Telangana Transport Directory
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uniqueDistricts.map((district, index) => (
              <article key={district.slug} className={cardClass}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#08A99F]">
                  Telangana District {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-black text-[#10182D]">
                  {district.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore truck transport, goods movement, full-load,
                  part-load and household shifting information for{" "}
                  {district.name}.
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

          <div className="mt-10 rounded-3xl bg-[#10182D] p-7 text-white md:p-10">
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Need a Truck?
            </p>

            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              Get Your Transport Price
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Tell us your pickup, delivery and load requirements to
              enquire about a suitable transport option.
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
            Telangana Transport Routes
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-slate-600">
            Explore LOADZY routes connecting Telangana with major
            destinations and other South Indian locations.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {routes.map((route, index) => (
              <Link
                key={`${route.name}-${index}`}
                href={route.href}
                className={cardClass}
              >
                <span className="font-black text-[#10182D]">
                  🚚 {route.name}
                </span>

                <span className="mt-3 block font-bold text-[#078F87]">
                  Explore Routes →
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

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore transport enquiries for different load requirements,
            household shifting and commercial goods movement.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Transport enquiries for different load requirements",
              "Full-load and part-load transport",
              "House shifting and packers & movers enquiries",
              "Commercial and industrial goods transport",
              "Routes connecting Telangana with South India",
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
            Telangana Truck Transport FAQs
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
            Need Transport in Telangana?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Contact LOADZY with your pickup, delivery and load
            requirements to enquire about transport options.
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
            name: "Truck Transport and Logistics Services in Telangana",
            provider: {
              "@type": "Organization",
              name: "LOADZY",
              url: "https://www.loadzyinfra.in",
            },
            areaServed: {
              "@type": "State",
              name: "Telangana",
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