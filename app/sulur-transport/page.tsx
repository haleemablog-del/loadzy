import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/sulur-transport`;

export const metadata: Metadata = {
  title: "Sulur Transport Service | Truck Booking | LOADZY",
  description:
    "Looking for truck booking in Sulur, Coimbatore? Submit a LOADZY transport enquiry for full load, part load, industrial goods, commercial transport and household shifting.",
  keywords: [
    "Sulur transport service",
    "Sulur truck booking",
    "Sulur goods transport",
    "Sulur lorry booking",
    "Sulur full load transport",
    "Sulur part load transport",
    "Sulur industrial transport",
    "Sulur commercial transport",
    "Sulur house shifting",
    "Sulur packers and movers",
    "Sulur to Coimbatore transport",
    "Coimbatore to Sulur transport",
    "Sulur to Chennai transport",
    "Chennai to Sulur transport",
    "Sulur to Bangalore transport",
    "Bangalore to Sulur transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Sulur Transport Service | LOADZY",
    description:
      "Enquire about truck booking and goods transport from Sulur, Tamil Nadu, with LOADZY.",
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
      "Explore transport options for smaller consignments that may not need an entire truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Arrange transport enquiries for furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Explore transport arrangements for household and office relocation requirements.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Enquire about transporting shop stock, business supplies and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Share your requirements for machinery, industrial materials and manufacturing goods.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Coimbatore",
  "Chennai",
  "Bangalore",
  "Tiruppur",
  "Erode",
  "Salem",
  "Madurai",
  "Tiruchirappalli",
  "Karur",
  "Dindigul",
  "Hosur",
  "Krishnagiri",
  "Vellore",
  "Tirupattur",
  "Pollachi",
  "Mettupalayam",
  "Palakkad",
  "Kochi",
  "Hyderabad",
  "Vijayawada",
];

const nearbyAreas = [
  { name: "Coimbatore", slug: "coimbatore-transport" },
  { name: "Karumathampatti", slug: "karumathampatti-transport" },
  { name: "Annur", slug: "annur-transport" },
  { name: "Madukkarai", slug: "madukkarai-transport" },
  { name: "Irugur", slug: "irugur-transport" },
  { name: "Vellalore", slug: "vellalore-transport" },
  { name: "Kinathukadavu", slug: "kinathukadavu-transport" },
  { name: "Perur", slug: "perur-transport" },
  { name: "Othakkalmandapam", slug: "othakkalmandapam-transport" },
  { name: "Periyanaickenpalayam", slug: "periyanaickenpalayam-transport" },
  { name: "Pollachi", slug: "pollachi-transport" },
  { name: "Tiruppur", slug: "tiruppur-transport" },
];

const faqs = [
  {
    question: "How can I book a truck in Sulur?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, load type, truck type and preferred pickup date. Confirm vehicle availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Sulur?",
    answer:
      "You can submit an enquiry for full load transport from Sulur. Vehicle suitability, availability and freight charges depend on the goods, route, vehicle requirements and pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Options depend on the route, load size, timing and suitable vehicle availability.",
  },
  {
    question: "Can I arrange house shifting from Sulur?",
    answer:
      "You can submit a household shifting enquiry for local or intercity relocation. Share your pickup and delivery locations, preferred moving date and details about your belongings.",
  },
  {
    question: "Can I arrange transport between Sulur and Coimbatore?",
    answer:
      "You can submit a transport enquiry in either direction between Sulur and Coimbatore. Share your shipment details and confirm the vehicle, charges and pickup schedule before booking.",
  },
  {
    question: "Can I book industrial goods transport in Sulur?",
    answer:
      "You can enquire about industrial and commercial goods transport. Include the goods description, approximate weight and dimensions, pickup and delivery locations, and loading requirements.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, load weight and dimensions, loading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "Submitting an enquiry does not automatically confirm a vehicle or price. Wait for confirmation of truck availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sulur Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, industrial goods, commercial consignments and household shifting from Sulur, Tamil Nadu.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Industrial goods transport",
    "Commercial goods transport",
    "Household shifting transport",
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
    name: "Sulur, Coimbatore district, Tamil Nadu, India",
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
      name: "Sulur Transport",
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

export default function SulurTransportPage() {
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
              <span>Sulur Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Sulur Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Sulur, Coimbatore district?
              Submit a LOADZY enquiry for full load, part load, commercial
              goods, industrial consignments and household shifting for local,
              intercity and interstate routes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#transport-enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Book a Truck →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
              >
                Contact LOADZY
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {["Full Load", "Part Load", "House Shifting", "Industrial Goods"].map(
                (item) => (
                  <span key={item} className="rounded-full bg-white/10 px-4 py-2">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div id="transport-enquiry">
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
          Goods Transport Services in Sulur
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for business supplies, industrial goods,
          household belongings and other consignments. Choose a service based on
          your pickup, destination and load requirements.
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
              Transport and Truck Booking in Sulur, Tamil Nadu
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Sulur is located in Coimbatore district and is connected to the
              wider Coimbatore region. Transport enquiries from the area may
              involve commercial supplies, manufacturing-related goods,
              agricultural produce, retail consignments and household moves.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Depending on the shipment, customers may need a small goods
              vehicle, a larger truck, full load transport, part load transport
              or a vehicle for household shifting. The appropriate option
              depends on the nature, weight and dimensions of the goods.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide exact pickup and delivery
              addresses, goods details, approximate weight and dimensions,
              loading requirements and the preferred pickup date. Confirm
              vehicle availability, freight charges and timing before booking.
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
              href="#transport-enquiry"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Transport Assistance →
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Intercity transport
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Major Destinations To and From Sulur
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Submit transport enquiries for routes between Sulur and destinations
          across Tamil Nadu and neighbouring states. Vehicle availability and
          freight charges must be confirmed for your specific shipment.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Transport from Sulur
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((city) => (
            <Link
              key={`from-${city}`}
              href="/contact"
              className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                Sulur to {city}
              </span>
              <span className="shrink-0 text-[#08A99F]">→</span>
            </Link>
          ))}
        </div>

        <h3 className="mt-10 text-xl font-bold text-slate-900">
          Transport to Sulur
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((city) => (
            <Link
              key={`to-${city}`}
              href="/contact"
              className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                {city} to Sulur
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
            Nearby areas
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Locations Around Sulur
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore nearby town and locality transport pages when planning a
            truck booking, goods shipment or household shifting enquiry.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-medium text-slate-700 group-hover:text-teal-800">
                  {area.name}
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
            A Simpler Way to Explore Transport Options
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Share your shipment details, explore suitable transport options and
            confirm the arrangements for your route with LOADZY.
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
              text: "Enquire about industrial goods, commercial consignments and shifting.",
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
            How to Request Transport from Sulur
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
                text: "Choose your service, truck type and pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send your booking requirements through the form.",
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
              href="#transport-enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-[#08A99F] px-8 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Submit a Transport Enquiry →
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
            Sulur Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Sulur?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements to
            enquire about suitable transport options for your shipment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#transport-enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Book a Truck →
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
