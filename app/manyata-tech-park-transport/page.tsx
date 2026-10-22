import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/manyata-tech-park-transport`;

export const metadata: Metadata = {
  title: "Manyata Tech Park Transport Service | Truck Booking | LOADZY",
  description:
    "Need goods transport near Manyata Tech Park, Bengaluru? Enquire about office relocation, computer equipment transport, commercial goods, full load, part load and packers and movers with LOADZY.",
  keywords: [
    "Manyata Tech Park transport service",
    "Manyata Tech Park truck booking",
    "Manyata Tech Park goods transport",
    "Manyata Tech Park logistics",
    "Manyata Tech Park office shifting",
    "Manyata Tech Park office relocation",
    "Manyata Tech Park commercial transport",
    "Manyata Tech Park computer equipment transport",
    "Nagawara truck booking",
    "Nagawara goods transport",
    "Hebbal transport service",
    "North Bengaluru goods transport",
    "Bengaluru truck booking",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Manyata Tech Park Transport Service | LOADZY",
    description:
      "Submit a transport enquiry for office equipment, commercial goods, relocation and truck booking near Manyata Tech Park, Bengaluru.",
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
      "Enquire about dedicated truck options for larger office moves, equipment consignments and other goods.",
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
    icon: "🏢",
    title: "Office Relocation",
    description:
      "Plan the movement of office furniture, desks, chairs, files and other workplace items.",
    href: "/contact",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Enquire about moving arrangements for office furniture, equipment and household belongings.",
    href: "/packers-movers",
  },
  {
    icon: "💻",
    title: "Commercial Equipment Transport",
    description:
      "Share your requirements for moving computer equipment, packaged supplies and business goods.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about suitable transport for machinery, equipment and industrial consignments.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Bengaluru City",
  "Hebbal",
  "Yelahanka",
  "Jakkur",
  "Thanisandra",
  "Devanahalli",
  "Hosur",
  "Tumakuru",
  "Mysuru",
  "Chennai",
  "Coimbatore",
  "Hyderabad",
];

const nearbyAreas = [
  {
    name: "Hebbal",
    href: "/hebbal-transport",
    famousFor: "Business connectivity and major road connections",
    goods:
      "Office furniture, workplace equipment, commercial stock and general cargo.",
  },
  {
    name: "Thanisandra",
    href: "/thanisandra-transport",
    famousFor: "Residential communities and commercial activity",
    goods:
      "Household belongings, appliances, packaged goods and retail stock.",
  },
  {
    name: "Jakkur",
    href: "/jakkur-transport",
    famousFor: "Residential areas and neighbourhood businesses",
    goods:
      "Furniture, office items, household goods and commercial consignments.",
  },
  {
    name: "Yelahanka",
    href: "/yelahanka-transport",
    famousFor: "Residential neighbourhoods and regional commerce",
    goods:
      "Household shifting goods, furniture, retail supplies and general cargo.",
  },
  {
    name: "Sahakara Nagar",
    href: "/sahakara-nagar-transport",
    famousFor: "Residential neighbourhoods and local businesses",
    goods:
      "Office items, household belongings, appliances and shop stock.",
  },
  {
    name: "Amruthahalli",
    href: "/amruthahalli-transport",
    famousFor: "Residential areas and neighbourhood trade",
    goods:
      "Furniture, appliances, household goods and business supplies.",
  },
  {
    name: "Kodigehalli",
    href: "/kodigehalli-transport",
    famousFor: "Residential areas and local commercial needs",
    goods:
      "Office furniture, household goods, retail stock and general cargo.",
  },
  {
    name: "Byatarayanapura",
    href: "/byatarayanapura-transport",
    famousFor: "Residential neighbourhoods and road connectivity",
    goods:
      "Commercial consignments, household goods and general freight.",
  },
];

const faqs = [
  {
    question: "How can I book a truck near Manyata Tech Park?",
    answer:
      "Visit the LOADZY Contact page and submit your transport requirements. Provide pickup and delivery locations, contact details, service type, required truck and preferred pickup date. Confirm truck availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I arrange office relocation near Manyata Tech Park?",
    answer:
      "You can enquire about moving office furniture, desks, chairs, files and other workplace items. Share the pickup and destination addresses, inventory details and preferred moving date to help assess suitable transport options.",
  },
  {
    question: "Can I transport computer equipment and office supplies?",
    answer:
      "You can submit an enquiry for suitable transport of computer equipment, packaged supplies and other business goods. Explain the cargo, packaging, handling requirements and destination when requesting transport.",
  },
  {
    question: "Does LOADZY accept full load and part load enquiries?",
    answer:
      "You can enquire about both full load and part load transport. Suitable vehicles and availability depend on the consignment, route, load dimensions and pickup date.",
  },
  {
    question: "Can I request transport from Manyata Tech Park to another city?",
    answer:
      "You can submit an enquiry for local and intercity routes. Share the destination, cargo description and preferred pickup date so the transport requirements can be reviewed.",
  },
  {
    question: "Can businesses request regular goods transport?",
    answer:
      "Businesses can submit transport enquiries describing their route, goods, vehicle requirements and expected schedule. Any recurring arrangement, pricing and vehicle availability must be discussed and confirmed separately.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, cargo weight and dimensions, loading requirements, handling needs, pickup date and availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry confirm a truck booking?",
    answer:
      "No. Submitting an enquiry does not automatically confirm a truck or price. Wait for confirmation of vehicle availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Manyata Tech Park Goods Transport and Truck Booking",
  description:
    "Transport enquiries for office relocation, commercial equipment, full load, part load, industrial goods and packers and movers near Manyata Tech Park, Bengaluru.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Office relocation",
    "Commercial goods transport",
    "Industrial transport",
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
    name: "Manyata Tech Park, Nagawara, Bengaluru, Karnataka, India",
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
      name: "Manyata Tech Park Transport",
      item: PAGE_URL,
    },
  ],
};

export default function ManyataTechParkTransportPage() {
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
              <span>Manyata Tech Park Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Manyata Tech Park Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Business Transport Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for transport near Manyata Tech Park in Bengaluru?
              Enquire with LOADZY about office relocation, computer equipment,
              commercial consignments, full load, part load and other suitable
              transport requirements for local and intercity routes.
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
                "Office Relocation",
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

          <TransportEnquiryForm />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Services near Manyata Tech Park
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for office equipment, desks, chairs,
          packaged supplies, commercial stock and other suitable goods. Choose
          a service based on your cargo, route and vehicle requirements.
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
              Business transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Goods and Office Equipment Transport near Manyata Tech Park
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Manyata Tech Park is a major business and technology destination
              in Bengaluru. Transport requirements around an office campus can
              include desks, chairs, workplace equipment, packaged supplies,
              documents, fixtures and other commercial goods.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              For office relocation or commercial transport, prepare the pickup
              and delivery addresses, an inventory of goods, approximate weight
              and dimensions, handling requirements, access or loading
              restrictions and the preferred moving date.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle suitability, availability, rates and schedules
              depend on the individual shipment and must be confirmed before
              transport.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Prepare Before Booking</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Exact pickup and delivery addresses",
                "List of office equipment or other goods",
                "Approximate cargo weight and dimensions",
                "Suitable truck type or capacity",
                "Preferred pickup date and access requirements",
                "Contact details for confirmation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-6 text-slate-200"
                >
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

      {/* NEARBY AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Nearby areas
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport around Manyata Tech Park
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore our transport pages for nearby Bengaluru localities. These
          locations may have different office, household, retail and commercial
          transport needs.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                  {area.name} Transport
                </h3>

                <span className="text-xl text-[#08A99F]">↗</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                {area.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">{area.goods}</p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore {area.name} →
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
            Major Destinations from Manyata Tech Park
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move office equipment or commercial goods to another
            location? Select a destination to visit the LOADZY Contact page and
            submit your enquiry. Vehicle availability and freight charges must
            be confirmed for the shipment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Manyata Tech Park to {city}
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
            Share your cargo and route details, enquire about suitable
            transport options and confirm your arrangements.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📍",
              title: "Route Enquiries",
              text: "Share the pickup and delivery locations for your consignment.",
            },
            {
              icon: "🚚",
              title: "Vehicle Options",
              text: "Enquire about suitable vehicles for different load sizes.",
            },
            {
              icon: "💻",
              title: "Office Goods",
              text: "Describe office equipment, furniture and commercial cargo.",
            },
            {
              icon: "📦",
              title: "Different Requirements",
              text: "Enquire about office relocation, part load and full load transport.",
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
            How to Request Transport near Manyata Tech Park
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
                title: "Share Cargo Details",
                text: "Describe the office equipment, goods and truck requirements.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Visit the Contact page to share your requirements.",
              },
              {
                number: "04",
                title: "Confirm Details",
                text: "Confirm vehicle availability, freight charges and timing.",
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
            Manyata Tech Park Transport — Frequently Asked Questions
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
            Need Transport near Manyata Tech Park?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and cargo requirements to
            enquire about suitable transport options for your business or
            shipment.
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