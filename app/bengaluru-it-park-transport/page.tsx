import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-it-park-transport`;

export const metadata: Metadata = {
  title: "Bengaluru IT Park Transport Service | Truck Booking | LOADZY",
  description:
    "Looking for goods transport in Bengaluru IT Park areas? Enquire with LOADZY about office shifting, commercial goods, full load, part load and intercity truck transport.",
  keywords: [
    "Bengaluru IT Park transport",
    "Bengaluru IT Park truck booking",
    "Bengaluru IT Park goods transport",
    "Bengaluru IT Park logistics",
    "IT park transport service Bengaluru",
    "Bengaluru office shifting transport",
    "Bengaluru office furniture transport",
    "Bengaluru commercial goods transport",
    "Bengaluru full load transport",
    "Bengaluru part load transport",
    "Bengaluru industrial transport",
    "Bengaluru to Chennai transport",
    "Chennai to Bengaluru IT Park transport",
    "Bengaluru to Hosur transport",
    "Hosur to Bengaluru IT Park transport",
    "Bengaluru to Coimbatore transport",
    "Coimbatore to Bengaluru IT Park transport",
    "Bengaluru to Mysuru transport",
    "Mysuru to Bengaluru IT Park transport",
    "Bengaluru to Hyderabad transport",
    "Hyderabad to Bengaluru IT Park transport",
    "Bengaluru to Pune transport",
    "Pune to Bengaluru IT Park transport",
    "Bengaluru to Mumbai transport",
    "Mumbai to Bengaluru IT Park transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bengaluru IT Park Transport Service | Truck Booking | LOADZY",
    description:
      "Submit a transport enquiry for office equipment, furniture, commercial goods and intercity transport from Bengaluru IT Park areas.",
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
      "Enquire about dedicated truck options for larger consignments and goods requiring a full vehicle.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that may not require an entire truck.",
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
      "Enquire about suitable vehicle arrangements for office and household relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Share your requirements for moving business stock, office supplies and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about transporting equipment, machinery, materials and business supplies.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Chennai",
  "Hosur",
  "Coimbatore",
  "Mysuru",
  "Tumakuru",
  "Hubballi",
  "Mangaluru",
  "Belagavi",
  "Hyderabad",
  "Vijayawada",
  "Pune",
  "Mumbai",
];

const nearbyAreas = [
  {
    name: "Manyata Tech Park",
    href: "/manyata-tech-park-transport",
    famousFor: "Office campuses and business facilities",
    goods: "Office furniture, IT equipment, office supplies and commercial goods.",
  },
  {
    name: "Electronic City",
    href: "/electronic-city-transport",
    famousFor: "Technology businesses and commercial activity",
    goods: "Office equipment, furniture, packaged goods and business consignments.",
  },
  {
    name: "Peenya Industrial Area",
    href: "/peenya-industrial-area-transport",
    famousFor: "Manufacturing and industrial businesses",
    goods: "Machinery, industrial materials, components and commercial cargo.",
  },
  {
    name: "Bommasandra Industrial Area",
    href: "/bommasandra-industrial-area-transport",
    famousFor: "Industrial and manufacturing activity",
    goods: "Equipment, components, packaged materials and industrial consignments.",
  },
  {
    name: "Hardware Park",
    href: "/hardware-park-transport",
    famousFor: "Industrial and technology-related development",
    goods: "Equipment, supplies, machinery and business goods.",
  },
  {
    name: "Bengaluru Aerospace Park",
    href: "/bengaluru-aerospace-park-transport",
    famousFor: "Aerospace and related industrial activity",
    goods: "Equipment, components, packaged materials and industrial consignments.",
  },
];

const faqs = [
  {
    question: "How can I book a truck for Bengaluru IT Park areas?",
    answer:
      "Fill in the LOADZY transport enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit the enquiry and confirm vehicle availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I transport office furniture and equipment?",
    answer:
      "You can submit an enquiry to transport office furniture, desks, chairs, computers, equipment, cartons and other business goods. Share the item details, approximate quantity, pickup access and delivery address.",
  },
  {
    question: "Can I arrange office shifting in Bengaluru?",
    answer:
      "You can enquire about transport for office relocation. Provide the pickup and delivery addresses, the type and quantity of items, building access details and preferred moving date. Packing, handling and other requirements should be confirmed separately.",
  },
  {
    question: "Is full load transport available from Bengaluru IT Park areas?",
    answer:
      "You can submit an enquiry for full load transport. Vehicle suitability, availability and freight charges depend on the route, cargo details, vehicle requirements and pickup date.",
  },
  {
    question: "Can I book part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, load size, timing and suitable transport options.",
  },
  {
    question: "Can I transport goods from Bengaluru to another city?",
    answer:
      "You can submit an enquiry for intercity goods transport from Bengaluru to your chosen destination. The route, vehicle availability, schedule and final freight charges must be confirmed.",
  },
  {
    question: "How are truck freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, load weight and dimensions, loading and unloading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. Submitting an enquiry does not automatically confirm a vehicle or price. Wait for confirmation of truck availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bengaluru IT Park Goods Transport and Truck Booking",
  description:
    "Transport enquiries for office equipment, commercial goods, full load, part load, industrial transport and office shifting in Bengaluru, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Industrial transport",
    "Office equipment transport",
    "Office shifting transport",
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
    name: "Bengaluru, Karnataka, India",
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
      name: "Bengaluru IT Park Transport",
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

export default function BengaluruITParkTransportPage() {
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
              <span>Bengaluru IT Park Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Bengaluru IT Park Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport for Bengaluru IT Park areas? Enquire
              with LOADZY about office furniture, IT equipment, commercial
              consignments, full load, part load, industrial goods and office
              shifting for local and intercity routes.
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
                "Office Shifting",
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
          Goods Transport Services in Bengaluru IT Park Areas
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for office equipment, furniture, business
          stock, packaged goods and other commercial consignments. Select the
          service that matches your pickup location, destination and load
          requirements.
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
              Transport and Truck Booking for Bengaluru IT Park Areas
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bengaluru has technology businesses, office campuses, commercial
              establishments and related services. Transport requirements may
              include office furniture, computers, office equipment, documents,
              packaged supplies, commercial stock and general business goods.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and delivery
              addresses, goods description, approximate weight and dimensions,
              building access details, loading requirements and preferred
              pickup date. These details help determine a suitable vehicle and
              quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, freight rates and schedules depend
              on each booking and must be confirmed before transport.
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
                "Building access and loading requirements",
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

      {/* NEARBY LOCALITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport in Bengaluru IT and Industrial Areas
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport pages for selected Bengaluru business and
          industrial areas. Goods requirements may range from office equipment
          and furniture to industrial materials and commercial consignments.
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
            Transport Routes from Bengaluru IT Park Areas
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Bengaluru to another city? Choose a
            destination to submit a transport enquiry. Route coverage, vehicle
            availability and freight charges must be confirmed for each
            shipment.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Bengaluru to {city}
                </span>
                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVERSE ROUTES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Return route enquiries
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Truck Transport to Bengaluru from Major Cities
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Need to transport goods to Bengaluru IT Park areas? Submit an
            enquiry for shipments travelling from Chennai, Hosur, Coimbatore,
            Mysuru, Hyderabad and other cities. Share your pickup location,
            cargo details and delivery requirements to enquire about suitable
            transport options.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  {city} to Bengaluru
                </span>

                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#10182D] p-6 text-white md:p-8">
            <h3 className="text-xl font-bold md:text-2xl">
              Need a truck to Bengaluru?
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Enquire about full load, part load, commercial goods transport
              and office equipment transport from your city to Bengaluru.
              Truck availability and freight charges must be confirmed.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Enquire About Return Routes →
            </Link>
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
            Share your shipment details, enquire about suitable transport
            options and confirm the arrangements for your route.
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
              title: "Business Transport",
              text: "Enquire about office equipment, furniture and commercial consignments.",
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
            How to Request Transport in Bengaluru
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
            Bengaluru IT Park Transport — Frequently Asked Questions
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
            Looking for Goods Transport in Bengaluru IT Park Areas?
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