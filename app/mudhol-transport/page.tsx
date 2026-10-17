import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/mudhol-transport`;

export const metadata: Metadata = {
  title: "Mudhol Transport Service | Truck Booking | LOADZY",
  description:
    "Book truck transport from Mudhol, Karnataka. Enquire about agricultural goods, sugarcane, industrial consignments, full load, part load and commercial goods transport with LOADZY.",
  keywords: [
    "Mudhol transport service",
    "Mudhol truck booking",
    "Mudhol goods transport",
    "Mudhol lorry booking",
    "Mudhol logistics",
    "Mudhol full load transport",
    "Mudhol part load transport",
    "Mudhol agricultural transport",
    "Mudhol industrial transport",
    "Mudhol sugarcane transport",
    "Mudhol to Bengaluru transport",
    "Mudhol to Bagalkote transport",
    "Mudhol to Belagavi transport",
    "Karnataka truck booking",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mudhol Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for agricultural, industrial and commercial goods from Mudhol, Karnataka.",
    url: PAGE_URL,
    siteName: "LOADZY",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    icon: "🚛",
    title: "Full Load Transport",
    description:
      "Enquire about dedicated truck options for larger consignments and full-vehicle shipments.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that may not require a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan the movement of furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Enquire about vehicle arrangements for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🌾",
    title: "Agricultural Goods Transport",
    description:
      "Share your requirements for transporting agricultural produce and farm-related goods.",
    href: "/contact",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about moving industrial materials, machinery and commercial supplies.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Bengaluru",
  "Bagalkote",
  "Belagavi",
  "Vijayapura",
  "Hubballi",
  "Dharwad",
  "Jamkhandi",
  "Mahalingpur",
  "Rabkavi Banhatti",
  "Ilkal",
  "Kalaburagi",
  "Mysuru",
];

const towns = [
  {
    name: "Mudhol",
    slug: "mudhol",
    famousFor: "Agriculture, regional trade and the Mudhol breed of dogs",
    goods:
      "Agricultural produce, farm supplies, commercial stock and general cargo.",
  },
  {
    name: "Bagalkote",
    slug: "bagalkote",
    famousFor: "Regional commerce and the district's limestone and cement industries",
    goods:
      "Commercial consignments, construction materials, industrial supplies and general goods.",
  },
  {
    name: "Mahalingpur",
    slug: "mahalingpur",
    famousFor: "Textile-related trade and local commerce",
    goods:
      "Textiles, fabric bundles, agricultural produce and shop stock.",
  },
  {
    name: "Rabkavi Banhatti",
    slug: "rabkavi-banhatti",
    famousFor: "Textile weaving and fabric trade",
    goods:
      "Textiles, fabric bundles, garments and commercial consignments.",
  },
  {
    name: "Jamkhandi",
    slug: "jamkhandi",
    famousFor: "Agriculture, regional markets and commercial trade",
    goods:
      "Agricultural produce, packaged goods, shop stock and general cargo.",
  },
  {
    name: "Ilkal",
    slug: "ilkal",
    famousFor: "Traditional Ilkal sarees and handloom textiles",
    goods:
      "Sarees, fabrics, textile bundles and packaged merchandise.",
  },
  {
    name: "Guledgudda",
    slug: "guledgudda",
    famousFor: "Traditional handloom textiles",
    goods:
      "Handloom products, clothing consignments and fabric bundles.",
  },
  {
    name: "Terdal",
    slug: "terdal",
    famousFor: "Agriculture and textile-related trade",
    goods:
      "Agricultural produce, textile goods and commercial cargo.",
  },
  {
    name: "Bilgi",
    slug: "bilgi",
    famousFor: "Agriculture and local trade",
    goods:
      "Farm produce, business supplies and general transport consignments.",
  },
  {
    name: "Badami",
    slug: "badami",
    famousFor: "Historic cave temples, tourism and regional commerce",
    goods:
      "Shop supplies, packaged merchandise and general commercial goods.",
  },
];

const faqs = [
  {
    question: "How can I book a truck in Mudhol?",
    answer:
      "Complete the transport enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and pickup date. Submit the enquiry and wait for confirmation of availability and freight charges.",
  },
  {
    question: "Can I book full load transport from Mudhol?",
    answer:
      "You can submit an enquiry for full load transport. Vehicle suitability, availability and charges depend on your cargo, route, load size and pickup date.",
  },
  {
    question: "Can I enquire about part load transport?",
    answer:
      "Yes. Share the shipment details to enquire about possible part load options. Availability depends on the route, cargo and schedule.",
  },
  {
    question: "Can agricultural goods be transported from Mudhol?",
    answer:
      "You can enquire about transporting suitable agricultural produce and farm-related goods. Share the cargo type, quantity, packaging and handling requirements.",
  },
  {
    question: "Can I book a truck from Mudhol to Bengaluru?",
    answer:
      "You can submit an enquiry for the Mudhol-to-Bengaluru route. Vehicle availability, freight charges and pickup timing need to be confirmed for your shipment.",
  },
  {
    question: "Can I transport industrial and commercial goods?",
    answer:
      "You can enquire about suitable transport for commercial consignments, industrial materials, machinery and business supplies. Final arrangements depend on the shipment requirements.",
  },
  {
    question: "How are transport charges calculated?",
    answer:
      "Charges may depend on distance, vehicle type, cargo weight and dimensions, loading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting the form confirm my truck?",
    answer:
      "No. Submitting an enquiry does not guarantee a vehicle or a final price. Wait for confirmation of vehicle availability, charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mudhol Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, agricultural goods, industrial consignments and commercial transport from Mudhol, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Agricultural goods transport",
    "Industrial transport",
    "Commercial goods transport",
    "Household shifting",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Mudhol, Karnataka, India",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mudhol Transport",
      item: PAGE_URL,
    },
  ],
};

export default function MudholTransportPage() {
  const faqSchema = {
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
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#10182D] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-20">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-7 text-sm text-slate-300"
            >
              <Link href="/" className="hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Mudhol Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Mudhol Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Mudhol, Karnataka? Submit an
              enquiry for full load, part load, agricultural produce,
              commercial consignments, industrial goods and household shifting.
              Explore local and intercity transport options with LOADZY.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Book a Truck →
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
              >
                Get Your Transport Price
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {[
                "Full Load",
                "Part Load",
                "Agricultural Goods",
                "Commercial Transport",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <TransportEnquiryForm />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Goods Transport Services in Mudhol
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for agricultural produce, commercial
          goods, industrial materials, household belongings and business stock.
          Share your route and cargo details to enquire about a suitable
          vehicle.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-3xl">
                {service.icon}
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-teal-700">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCAL INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-start md:px-8 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Local transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Transport and Truck Booking in Mudhol, Karnataka
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Mudhol is known for its agricultural activity, regional trade and
              the Mudhol breed of dogs. Transport needs in the surrounding area
              may include farm produce, agricultural supplies, packaged goods,
              shop stock and other commercial consignments. Actual cargo
              requirements vary by customer and season.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Before requesting a truck, prepare your pickup and delivery
              addresses, goods description, approximate weight and dimensions,
              loading requirements and preferred pickup date. These details
              help assess a suitable vehicle and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, rates and schedules must be
              confirmed for each shipment before booking.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Prepare Before Booking</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Pickup and delivery addresses",
                "Goods description and approximate load size",
                "Required truck type or capacity",
                "Preferred pickup date",
                "Loading and unloading requirements",
                "Contact details for confirmation",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-6 text-slate-200">
                  <span className="font-bold text-[#08A99F]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Your Transport Price →
            </Link>
          </div>
        </div>
      </section>

      {/* NEARBY TOWNS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Truck Transport Around Mudhol
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport information for Mudhol and surrounding towns.
          Select a location to visit its transport page.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {towns.map((town) => (
            <Link
              key={town.slug}
              href={`/${town.slug}-transport`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                  {town.name} Transport
                </h3>
                <span className="text-xl text-[#08A99F]">↗</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                {town.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">{town.goods}</p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore {town.name} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Major Destinations from Mudhol
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Mudhol to another city? Start a
            transport enquiry and share your destination, cargo and pickup
            requirements. Rates and vehicle availability need confirmation.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Mudhol to {city}
                </span>
                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Why LOADZY
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            A Simpler Way to Explore Transport Options
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share your shipment details and enquire about transport
            arrangements for your route. Confirm all booking details before
            dispatch.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📍",
              title: "Route Enquiries",
              text: "Share pickup and delivery details for your shipment.",
            },
            {
              icon: "🚚",
              title: "Different Load Needs",
              text: "Explore full load, part load and suitable truck options.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Use Cases",
              text: "Enquire about agricultural goods, commercial cargo and household shifting.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING STEPS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How to Request Transport from Mudhol
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Enter Locations",
                text: "Provide pickup and delivery addresses.",
              },
              {
                number: "02",
                title: "Share Load Details",
                text: "Choose your service, truck type and pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send your booking details through the enquiry form.",
              },
              {
                number: "04",
                title: "Confirm Details",
                text: "Confirm availability, freight charges and timing.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-extrabold tracking-widest text-[#08A99F]">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#08A99F] px-8 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Get Your Transport Price →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Mudhol Transport — Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-9 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{faq.question}</span>
                <span className="text-xl text-[#08A99F] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#10182D] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-teal-300">
            LOADZY Transport
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Looking for Goods Transport from Mudhol?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements to
            enquire about suitable transport options for your shipment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Your Transport Price →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
            >
              Back to LOADZY Home
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            LOADZY — MOVE. CONNECT. DELIVER.
          </p>
        </div>
      </section>
    </main>
  );
}