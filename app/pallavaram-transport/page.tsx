import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/pallavaram-transport`;

export const metadata: Metadata = {
  title: "Pallavaram Transport Service | Truck Booking | LOADZY",
  description:
    "Looking for transport in Pallavaram, Chennai? Submit enquiries for truck booking, full load, part load, household shifting, packers and movers with LOADZY.",
  keywords: [
    "Pallavaram transport service",
    "Pallavaram truck booking",
    "Pallavaram goods transport",
    "Pallavaram lorry booking",
    "Pallavaram full load transport",
    "Pallavaram part load transport",
    "Pallavaram house shifting",
    "Pallavaram packers and movers",
    "Pallavaram commercial transport",
    "Pallavaram to Chennai transport",
    "Chennai to Pallavaram transport",
    "Pallavaram to Tambaram transport",
    "Pallavaram to Chengalpattu transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Pallavaram Transport Service | LOADZY",
    description:
      "Submit a truck booking or goods transport enquiry from Pallavaram, Chennai.",
    url: PAGE_URL,
    siteName: "LOADZY",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "🚛",
    title: "Full Load Transport",
    description:
      "Enquire about a dedicated vehicle for larger consignments and goods.",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Ask about suitable transport options for smaller consignments.",
  },
  {
    icon: "🏠",
    title: "Household Shifting",
    description:
      "Plan transport for furniture, appliances, cartons and household belongings.",
  },
  {
    icon: "🧰",
    title: "Packers & Movers",
    description:
      "Enquire about vehicle arrangements for home and office relocation.",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Explore options for shop stock, business supplies and commercial goods.",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Submit enquiries for industrial materials, equipment and supplies.",
  },
];

const routes = [
  "Chennai",
  "Tambaram",
  "Chromepet",
  "Meenambakkam",
  "Tirusulam",
  "Guindy",
  "Velachery",
  "Porur",
  "Vandalur",
  "Guduvanchery",
  "Chengalpattu",
  "Kanchipuram",
  "Mahabalipuram",
  "Tindivanam",
  "Puducherry",
  "Vellore",
  "Bangalore",
  "Salem",
  "Coimbatore",
  "Madurai",
];

const nearbyAreas = [
  { name: "Tambaram", slug: "tambaram" },
  { name: "Chromepet", slug: "chromepet" },
  { name: "Pammal", slug: "pammal" },
  { name: "Tirusulam", slug: "tirusulam" },
  { name: "Meenambakkam", slug: "meenambakkam" },
  { name: "Guindy", slug: "guindy" },
  { name: "Velachery", slug: "velachery" },
  { name: "Porur", slug: "porur" },
  { name: "Vandalur", slug: "vandalur" },
  { name: "Guduvanchery", slug: "guduvanchery" },
];

const faqs = [
  {
    question: "How can I book a truck in Pallavaram?",
    answer:
      "Complete the enquiry form with your contact details, pickup and delivery locations, service, truck type and pickup date. Submit your request and confirm availability and charges before finalising your booking.",
  },
  {
    question: "Can I request full load transport from Pallavaram?",
    answer:
      "You can submit an enquiry for full load transport. Vehicle suitability, availability and freight charges depend on your goods, route and pickup date.",
  },
  {
    question: "Is part load transport available from Pallavaram?",
    answer:
      "You can enquire about part load transport. Availability depends on the route, load size, timing and suitable vehicle options.",
  },
  {
    question: "Can I arrange household shifting in Pallavaram?",
    answer:
      "You can submit a household shifting enquiry. Include your pickup and delivery addresses, moving date and details about your belongings.",
  },
  {
    question: "Can I request transport from Pallavaram to Tambaram?",
    answer:
      "You can enter Pallavaram as the pickup location and Tambaram as the destination, or reverse the locations for the opposite route. Confirm availability and pricing before booking.",
  },
  {
    question: "What affects transport charges?",
    answer:
      "Charges may depend on distance, vehicle type, load weight and dimensions, loading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Can I ask about return loads?",
    answer:
      "You can enquire about return-load options for your route. A matching truck or load is not guaranteed and must be confirmed.",
  },
  {
    question: "Does submitting an enquiry confirm my truck?",
    answer:
      "No. Submitting an enquiry does not automatically reserve a vehicle. Wait for confirmation of truck availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pallavaram Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods and household shifting from Pallavaram, Chennai, Tamil Nadu.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Household shifting transport",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Pallavaram, Chennai, Tamil Nadu, India",
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
      name: "Pallavaram Transport",
      item: PAGE_URL,
    },
  ],
};

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

export default function PallavaramTransportPage() {
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
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-slate-300">
              <Link href="/" className="hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Pallavaram Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Pallavaram Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Pallavaram, Chennai? Submit an
              enquiry for full load, part load, commercial goods transport or
              household shifting for local and intercity routes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pallavaram-enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Book a Truck →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
              >
                Contact LOADZY
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {["Full Load", "Part Load", "House Shifting", "Commercial Goods"].map(
                (item) => (
                  <span key={item} className="rounded-full bg-white/10 px-4 py-2">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div id="pallavaram-enquiry" className="scroll-mt-24">
            <TransportEnquiryForm />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport Solutions
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Goods Transport Services in Pallavaram
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household belongings, business stock
          and other consignments. Select a service that matches your shipment,
          destination and vehicle requirements.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-3xl">
                {service.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>
              <a
                href="#pallavaram-enquiry"
                className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
              >
                Enquire now →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-start md:px-8 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Local Transport
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Transport and Truck Booking in Pallavaram, Chennai
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Pallavaram is part of the Chennai metropolitan area. Transport
              requirements may include household goods, furniture, appliances,
              shop supplies, commercial stock and other consignments moving
              within Chennai or to destinations outside the city.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              When submitting a transport enquiry, provide your exact pickup
              and delivery locations, load description, approximate weight and
              dimensions, preferred truck type and pickup date. This
              information helps determine a suitable transport option.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Truck availability, schedules and freight charges depend on the
              route and shipment details and must be confirmed before booking.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Before You Book</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Pickup and delivery addresses",
                "Goods description and approximate load size",
                "Suitable truck type or capacity",
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
            <a
              href="#pallavaram-enquiry"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Transport Assistance →
            </a>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport Routes
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Major Transport Routes To and From Pallavaram
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Planning a shipment from Pallavaram to another city or arranging
          delivery into Pallavaram? Use the enquiry form to provide your route
          and load requirements.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Transport from Pallavaram
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {routes.map((destination) => (
            <a
              key={`from-${destination}`}
              href="#pallavaram-enquiry"
              className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                Pallavaram to {destination}
              </span>
              <span className="shrink-0 text-[#08A99F]">→</span>
            </a>
          ))}
        </div>

        <h3 className="mt-10 text-xl font-bold text-slate-900">
          Transport to Pallavaram
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {routes.map((origin) => (
            <a
              key={`to-${origin}`}
              href="#pallavaram-enquiry"
              className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                {origin} to Pallavaram
              </span>
              <span className="shrink-0 text-[#08A99F]">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Nearby Areas
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Transport Services Around Pallavaram
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore transport pages for nearby Chennai localities. Each link
            should point to a published location page.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}-transport`}
                className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-medium text-slate-700 group-hover:text-teal-800">
                  {area.name} Transport
                </span>
                <span className="shrink-0 text-[#08A99F]">→</span>
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
            Explore Transport Options for Your Shipment
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Share your requirements, enquire about suitable transport and
            confirm your booking details before dispatch.
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
              title: "Truck Options",
              text: "Enquire about vehicles suitable for your load.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Needs",
              text: "Enquire about shifting and commercial consignments.",
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
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How to Request Transport from Pallavaram
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
                text: "Send your transport requirements through the form.",
              },
              {
                number: "04",
                title: "Confirm Booking",
                text: "Confirm availability, charges and pickup arrangements.",
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
            <a
              href="#pallavaram-enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-[#08A99F] px-8 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Submit a Transport Enquiry →
            </a>
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
            Pallavaram Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Pallavaram?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements to
            enquire about suitable transport for your shipment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#pallavaram-enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Book a Truck →
            </a>
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
