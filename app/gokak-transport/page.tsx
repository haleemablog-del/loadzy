import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/gokak-transport`;

export const metadata: Metadata = {
  title: "Gokak Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Gokak, Karnataka. Enquire about full load, part load, textile goods, agricultural produce, commercial transport and household shifting with LOADZY.",
  keywords: [
    "Gokak transport service",
    "Gokak truck booking",
    "Gokak goods transport",
    "Gokak lorry booking",
    "Gokak logistics",
    "Gokak full load transport",
    "Gokak part load transport",
    "Gokak industrial transport",
    "Gokak textile transport",
    "Gokak agricultural goods transport",
    "Gokak to Bengaluru transport",
    "Gokak to Belagavi truck booking",
    "Gokak to Hubballi transport",
    "Karnataka goods transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Gokak Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from Gokak and nearby Karnataka locations.",
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
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that may not require an entire truck.",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan the movement of furniture, appliances, cartons and household belongings.",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Enquire about suitable vehicle arrangements for household and office relocation.",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Share your requirements for moving shop stock, business goods and commercial consignments.",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about transporting suitable industrial materials, equipment and business supplies.",
  },
];

const destinations = [
  "Belagavi",
  "Bengaluru",
  "Hubballi",
  "Dharwad",
  "Vijayapura",
  "Bagalkote",
  "Kolhapur",
  "Pune",
  "Mysuru",
  "Mangaluru",
  "Davangere",
  "Shivamogga",
];

const nearbyAreas = [
  {
    name: "Belagavi",
    famousFor: "Regional commercial and industrial centre",
    goods: "Commercial stock, industrial supplies and general cargo.",
  },
  {
    name: "Athani",
    famousFor: "Agriculture and regional trade",
    goods: "Agricultural produce, market goods and commercial consignments.",
  },
  {
    name: "Bailhongal",
    famousFor: "Agriculture and local commerce",
    goods: "Farm produce, shop supplies and general cargo.",
  },
  {
    name: "Chikkodi",
    famousFor: "Agricultural and commercial activity",
    goods: "Agricultural produce, packaged goods and business stock.",
  },
  {
    name: "Hukkeri",
    famousFor: "Regional markets and agriculture",
    goods: "Farm produce, commercial goods and general consignments.",
  },
  {
    name: "Khanapur",
    famousFor: "Agricultural activity and regional trade",
    goods: "Agricultural goods, shop stock and general cargo.",
  },
  {
    name: "Ramdurg",
    famousFor: "Agriculture and local trade",
    goods: "Farm produce, commercial supplies and packaged goods.",
  },
  {
    name: "Saundatti",
    famousFor: "Regional commerce and agricultural activity",
    goods: "Agricultural produce, market goods and business supplies.",
  },
  {
    name: "Nippani",
    famousFor: "Regional trade and commercial activity",
    goods: "Commercial consignments, packaged goods and general cargo.",
  },
  {
    name: "Mudalagi",
    famousFor: "Agriculture and local commerce",
    goods: "Agricultural produce, market supplies and commercial goods.",
  },
  {
    name: "Kittur",
    famousFor: "Historic town and regional trade",
    goods: "Shop supplies, packaged goods and general cargo.",
  },
];

const faqs = [
  {
    question: "How can I book a truck in Gokak?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit your enquiry and confirm truck availability, freight charges and pickup arrangements before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Gokak?",
    answer:
      "Yes. You can submit an enquiry for full load transport. The suitable vehicle, availability and freight charges depend on your goods, route, load requirements and pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, shipment size, timing and suitable transport options.",
  },
  {
    question: "What is Gokak known for?",
    answer:
      "Gokak is known for Gokak Falls and has local commercial, agricultural and textile-related activity. Goods transport requirements vary by business and shipment, so share the actual cargo details when enquiring.",
  },
  {
    question: "Can I transport textiles and commercial goods from Gokak?",
    answer:
      "You can submit an enquiry for suitable textile consignments, shop stock, packaged merchandise and other commercial goods. Share the quantity, packaging, pickup location and destination so the transport requirements can be reviewed.",
  },
  {
    question: "Can I book a truck from Gokak to Bengaluru or Belagavi?",
    answer:
      "You can submit a transport enquiry for Gokak to Bengaluru, Belagavi and other destinations. Route coverage, vehicle availability, freight charges and pickup schedules must be confirmed for your specific shipment.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, cargo weight and dimensions, loading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Can I transport agricultural goods?",
    answer:
      "You can enquire about transporting suitable agricultural produce and other goods. Share the cargo type, quantity, packaging and handling requirements so suitable transport options can be considered.",
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
  name: "Gokak Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods, agricultural consignments and household shifting from Gokak, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Industrial transport",
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
    name: "Gokak, Karnataka, India",
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
      name: "Gokak Transport",
      item: PAGE_URL,
    },
  ],
};

export default function GokakTransportPage() {
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
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
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
          }).replace(/</g, "\\u003c"),
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
              <span>Gokak Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Gokak Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Gokak, Karnataka? Submit an
              enquiry with LOADZY for full load, part load, agricultural
              goods, textile consignments, commercial transport and household
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

          <TransportEnquiryForm />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Goods Transport Services in Gokak
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for agricultural produce, textiles,
          household belongings, business stock and suitable industrial
          consignments. Share your route and shipment requirements to enquire
          about transport arrangements.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/contact"
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
                Enquire now →
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
              Transport and Truck Booking in Gokak, Karnataka
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Gokak is known for Gokak Falls and has local markets,
              agricultural activity and commercial businesses. Transport
              requirements can include farm produce, textile consignments,
              shop stock, packaged merchandise, household goods and other
              suitable cargo.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              For a truck enquiry, provide the exact pickup and delivery
              addresses, goods description, approximate weight and
              dimensions, loading requirements and preferred pickup date.
              These details help determine a suitable vehicle and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, freight rates and schedules
              depend on each shipment and must be confirmed before transport.
            </p>

            <div className="mt-6 rounded-2xl border border-teal-100 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-900">
                Famous For: Gokak
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Gokak Falls is a well-known local landmark. The surrounding
                area also has agricultural and commercial activity. Actual
                transport needs vary by business and cargo type.
              </p>
            </div>
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
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Enquiries Around Gokak
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Need to move goods between Gokak and nearby locations? Explore
          regional transport requirements and submit an enquiry with your
          pickup, destination and cargo details. These links open the contact
          page until individual location pages are available.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.name}
              href="/contact"
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
                Enquire about transport →
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
            Major Destinations from Gokak
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Gokak to another city? Select a
            destination to submit a transport price enquiry. Route coverage,
            availability and freight charges must be confirmed for your
            shipment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Gokak to {city}
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
            Share your shipment details, explore available transport
            possibilities and confirm arrangements for your route.
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
              text: "Provide cargo details, loading needs and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Use Cases",
              text: "Enquire about agricultural goods, textiles, shifting and commercial consignments.",
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
            How to Request Transport from Gokak
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
            Gokak Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Gokak?
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