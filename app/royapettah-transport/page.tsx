import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/royapettah-transport`;

export const metadata: Metadata = {
  title: "Royapettah Transport Service | Truck Booking in Chennai | LOADZY",
  description:
    "Looking for transport in Royapettah, Chennai? Enquire about truck booking, full load, part load, commercial goods transport, and household shifting with LOADZY.",
  keywords: [
    "Royapettah transport service",
    "Royapettah truck booking",
    "Royapettah lorry booking",
    "Royapettah goods transport",
    "Royapettah packers and movers",
    "Royapettah house shifting",
    "Royapettah full load transport",
    "Royapettah part load transport",
    "Royapettah to Tambaram transport",
    "Royapettah to Coimbatore transport",
    "Royapettah to Bangalore transport",
    "Chennai truck booking",
    "LOADZY transport service",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Royapettah Transport Service | LOADZY",
    description:
      "Enquire about truck booking, goods transport, and household shifting from Royapettah, Chennai.",
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
      "Enquire about dedicated trucks for larger consignments and full-vehicle shipments.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that do not require a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Enquire about transporting furniture, appliances, cartons, and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Plan transport for household moves, office relocation, and other shifting requirements.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Enquire about moving shop stock, business supplies, and commercial goods.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Share your requirements for transporting materials, equipment, and industrial consignments.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "T Nagar",
  "Anna Nagar",
  "Guindy",
  "Tambaram",
  "Pallavaram",
  "Chromepet",
  "Porur",
  "Ambattur",
  "Avadi",
  "Poonamallee",
  "Perungudi",
  "Sholinganallur",
  "Velachery",
  "Adyar",
  "Mylapore",
  "Egmore",
  "Parrys Corner",
  "Koyambedu",
  "Chengalpattu",
  "Kanchipuram",
  "Vellore",
  "Puducherry",
  "Salem",
  "Coimbatore",
  "Madurai",
  "Bangalore",
];

const nearbyAreas = [
  "Triplicane",
  "Mylapore",
  "Thousand Lights",
  "Gopalapuram",
  "Egmore",
  "Nungambakkam",
  "Mount Road",
  "Chepauk",
  "Alwarpet",
  "Teynampet",
  "Mandaveli",
  "Chintadripet",
  "Purasawalkam",
  "Royapettah High Road",
  "Thiruvallikeni",
];

const faqs = [
  {
    question: "How can I book a truck in Royapettah?",
    answer:
      "Complete the transport enquiry form with your contact details, pickup and delivery locations, service type, truck type, and preferred pickup date. Confirm vehicle availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I arrange house shifting from Royapettah?",
    answer:
      "You can submit an enquiry for household shifting from Royapettah. Share your destination, moving date, and details of the furniture, appliances, and other items that need to be transported.",
  },
  {
    question: "Can I enquire about part load transport in Royapettah?",
    answer:
      "You can submit a part load enquiry for smaller consignments. Options depend on the route, cargo size, timing, and available transport arrangements.",
  },
  {
    question: "Can I book full load transport from Royapettah?",
    answer:
      "You can enquire about full load transport for larger shipments. Suitable truck types and freight charges depend on the goods, route, and pickup date.",
  },
  {
    question: "Can I arrange transport from Royapettah to other cities?",
    answer:
      "You can submit enquiries for transport from Royapettah to other cities in Tamil Nadu and other destinations. Share the exact pickup and delivery addresses to discuss your requirements.",
  },
  {
    question: "Can I book transport to Royapettah from other locations?",
    answer:
      "You can enquire about deliveries to Royapettah from other parts of Chennai, Tamil Nadu, and other cities. Provide the shipment details and required delivery location.",
  },
  {
    question: "How are truck transport charges calculated?",
    answer:
      "Freight charges may depend on distance, truck type, cargo weight and dimensions, loading requirements, pickup date, and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Can I enquire about packers and movers in Royapettah?",
    answer:
      "You can submit a household or office shifting enquiry and provide the pickup address, destination, moving date, and details of the items to be transported.",
  },
  {
    question: "Can I enquire about return loads?",
    answer:
      "You can ask about return-load options for your route. Availability depends on suitable trucks and matching consignments and is not guaranteed.",
  },
  {
    question: "Does submitting the enquiry confirm my booking?",
    answer:
      "Submitting the form records your transport enquiry. Your booking is not confirmed until vehicle availability, freight charges, and pickup arrangements have been agreed upon.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Royapettah Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods transport, and household shifting in Royapettah, Chennai.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Household shifting",
    "Packers and movers",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Royapettah, Chennai, Tamil Nadu, India",
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
      name: "Royapettah Transport",
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

export default function RoyapettahTransportPage() {
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

      {/* HERO AND ENQUIRY FORM */}
      <section className="relative overflow-hidden bg-[#10182D] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 md:items-start md:gap-12 md:px-8 md:py-16">
          <div className="pt-4 md:pt-12">
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-slate-300">
              <Link href="/" className="hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Royapettah Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Royapettah Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Royapettah, Chennai? Enquire
              through LOADZY about full load, part load, commercial transport,
              and household shifting for local and intercity routes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#transport-enquiry"
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
              {[
                "Full Load",
                "Part Load",
                "House Shifting",
                "Goods Transport",
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

          <div id="transport-enquiry" className="scroll-mt-6">
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
          Goods Transport Services in Royapettah
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household belongings, business stock,
          and other consignments. Select a service that matches your shipment,
          pickup location, and destination.
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

      {/* LOCAL TRANSPORT INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-start md:px-8 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Local Transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Transport and Truck Booking in Royapettah
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Royapettah is an established neighbourhood in Chennai, with
              residential streets, shops, offices, healthcare facilities, and
              commercial activity. Transport requirements in the area may
              include household shifting, retail goods, office equipment,
              business supplies, and deliveries to other parts of Chennai.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting transport, provide your exact pickup and delivery
              addresses, a description of the goods, approximate load size,
              loading requirements, and preferred pickup date. These details
              help determine the type of vehicle that may suit your shipment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Vehicle availability, schedules, and freight charges depend on
              your individual shipment. Confirm the final quotation and pickup
              arrangements before booking.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Details to Prepare</h3>

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

            <a
              href="#transport-enquiry"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Submit Transport Enquiry →
            </a>
          </div>
        </div>
      </section>

      {/* TRANSPORT ROUTES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Intercity Transport
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Routes To and From Royapettah
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiries in both directions. Share your shipment
          requirements to enquire about your route and confirm available
          transport options.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Transport from Royapettah
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((city) => (
            <Link
              key={`from-${city}`}
              href="/load-search"
              className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                Royapettah to {city}
              </span>
              <span className="shrink-0 text-[#08A99F]">→</span>
            </Link>
          ))}
        </div>

        <h3 className="mt-10 text-xl font-bold text-slate-900">
          Transport to Royapettah
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((city) => (
            <Link
              key={`to-${city}`}
              href="/load-search"
              className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                {city} to Royapettah
              </span>
              <span className="shrink-0 text-[#08A99F]">→</span>
            </Link>
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
            Nearby Locations Around Royapettah
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore nearby Chennai neighbourhoods when planning transport,
            delivery, or household shifting around Royapettah.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {nearbyAreas.map((area) => (
              <Link
                key={area}
                href="/contact"
                className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-medium text-slate-700 group-hover:text-teal-800">
                  {area}
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
            Explore Transport Options with LOADZY
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share your shipment details and enquire about transport options
            that suit your route, load type, and preferred pickup date.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📍",
              title: "Route Enquiries",
              text: "Provide your pickup and delivery locations.",
            },
            {
              icon: "🚚",
              title: "Different Load Types",
              text: "Enquire about full load, part load, and truck options.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Share cargo details and your preferred pickup date.",
            },
            {
              icon: "📦",
              title: "Multiple Transport Needs",
              text: "Enquire about shifting, commercial goods, and consignments.",
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
            How to Request Transport from Royapettah
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Enter Locations",
                text: "Provide your pickup and delivery addresses.",
              },
              {
                number: "02",
                title: "Share Load Details",
                text: "Select a service, truck type, and pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send your requirements through the form.",
              },
              {
                number: "04",
                title: "Confirm Booking",
                text: "Confirm availability, freight charges, and timing.",
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
              href="#transport-enquiry"
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
            Royapettah Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Royapettah?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination, and load requirements to
            enquire about transport options for your shipment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#transport-enquiry"
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
