import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/kumbalgodu-1st-phase-industrial-area-transport`;

export const metadata: Metadata = {
  title:
    "Kumbalgodu 1st Phase Industrial Area Transport | LOADZY",
  description:
    "Enquire about truck booking and goods transport in Kumbalgodu 1st Phase Industrial Area, Bengaluru. Full load, part load, industrial goods and commercial transport with LOADZY.",
  keywords: [
    "Kumbalgodu 1st Phase Industrial Area transport",
    "Kumbalgodu 1st Phase truck booking",
    "Kumbalgodu 1st Phase goods transport",
    "Kumbalgodu 1st Phase industrial transport",
    "Kumbalgodu 1st Phase lorry booking",
    "Kumbalgodu industrial goods transport",
    "Kumbalgodu machinery transport",
    "Kumbalgodu raw materials transport",
    "Kumbalgodu manufacturing supplies transport",
    "Kumbalgodu full load transport",
    "Kumbalgodu part load transport",
    "Kumbalgodu commercial transport",
    "Bengaluru industrial transport",
    "Kumbalgodu to Chennai transport",
    "Kumbalgodu to Coimbatore transport",
    "Kumbalgodu to Mysuru transport",
    "Kumbalgodu to Hosur transport",
    "Chennai to Kumbalgodu transport",
    "Coimbatore to Kumbalgodu transport",
    "LOADZY truck booking",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Kumbalgodu 1st Phase Industrial Area Transport | LOADZY",
    description:
      "Submit a transport enquiry for industrial goods, machinery, raw materials, full load and part load truck transport from Kumbalgodu 1st Phase, Bengaluru.",
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
      "Enquire about dedicated truck options for larger consignments, factory supplies and industrial goods.",
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
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about machinery, manufacturing supplies, raw materials and industrial cargo.",
    href: "/industrial-transport",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Transport enquiries for commercial stock, business supplies and packaged goods.",
    href: "/commercial-transport",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan transport for furniture, household belongings and relocation requirements.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers & Movers",
    description:
      "Enquire about vehicle arrangements for household or office relocation.",
    href: "/packers-movers",
  },
];

const destinations = [
  "Chennai",
  "Coimbatore",
  "Salem",
  "Madurai",
  "Tiruppur",
  "Erode",
  "Hosur",
  "Vellore",
  "Ambur",
  "Tirupattur",
  "Vaniyambadi",
  "Krishnagiri",
  "Mysuru",
  "Mangaluru",
  "Hubballi",
  "Belagavi",
  "Tumakuru",
  "Davangere",
  "Kochi",
  "Thrissur",
  "Palakkad",
  "Kozhikode",
  "Hyderabad",
  "Vijayawada",
  "Visakhapatnam",
  "Mumbai",
  "Pune",
  "Delhi",
];

const nearbyAreas = [
  {
    name: "Kumbalgodu Industrial Area",
    href: "/kumbalgodu-industrial-area-transport",
    description:
      "The broader Kumbalgodu area page for general industrial and commercial transport enquiries.",
    goods: "Industrial goods, machinery, raw materials and commercial cargo.",
  },
  {
    name: "Kumbalgodu 2nd Phase Industrial Area",
    href: "/kumbalgodu-2nd-phase-industrial-area-transport",
    description:
      "A separate location page for transport enquiries relating to Kumbalgodu 2nd Phase.",
    goods: "Factory supplies, equipment, manufacturing materials and goods.",
  },
  {
    name: "Peenya Industrial Area",
    href: "/peenya-industrial-area-transport",
    description:
      "Industrial transport enquiries for the Peenya area of Bengaluru.",
    goods: "Machinery, engineering components, raw materials and finished products.",
  },
  {
    name: "Bommasandra Industrial Area",
    href: "/bommasandra-industrial-area-transport",
    description:
      "Transport enquiries for industrial and manufacturing shipments.",
    goods: "Factory supplies, industrial components and commercial consignments.",
  },
  {
    name: "Jigani 1st Phase",
    href: "/jigani-1st-phase-transport",
    description:
      "Transport enquiries for goods moving to or from the Jigani industrial area.",
    goods: "Industrial materials, equipment, packaged goods and general cargo.",
  },
  {
    name: "Electronic City Industrial Area",
    href: "/electronic-city-industrial-area-transport",
    description:
      "Commercial transport enquiries for the Electronic City area.",
    goods: "Office equipment, furniture, business stock and commercial supplies.",
  },
];

const faqs = [
  {
    question:
      "How can I book a truck in Kumbalgodu 1st Phase Industrial Area?",
    answer:
      "Fill in the LOADZY enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and pickup date. Submit your enquiry and confirm availability and freight charges before finalising the booking.",
  },
  {
    question:
      "Can I request full load transport from Kumbalgodu 1st Phase?",
    answer:
      "You can submit an enquiry for full load transport. Suitable vehicle options and freight charges depend on the route, cargo size, vehicle requirements and pickup date.",
  },
  {
    question:
      "Can I enquire about part load transport?",
    answer:
      "Yes. Submit your shipment details to enquire about part load options. Availability depends on the route, load size, schedule and suitable transport arrangements.",
  },
  {
    question:
      "Can industrial machinery and raw materials be transported?",
    answer:
      "You can submit an enquiry for machinery, manufacturing supplies, raw materials, industrial components and other commercial goods. Include the approximate weight, dimensions, loading requirements and delivery address.",
  },
  {
    question:
      "Can I transport goods from Kumbalgodu 1st Phase to Chennai or Coimbatore?",
    answer:
      "You can enquire about intercity transport to Chennai, Coimbatore and other destinations. The route, vehicle availability, schedule and freight charges must be confirmed for your shipment.",
  },
  {
    question: "How are transport charges calculated?",
    answer:
      "Freight charges can depend on distance, truck type, cargo weight and dimensions, loading and unloading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting the form confirm my truck booking?",
    answer:
      "No. The form submits a transport enquiry. Your vehicle, schedule and freight charges must be confirmed before your booking is finalised.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kumbalgodu 1st Phase Industrial Area Transport",
  description:
    "Truck booking enquiries for industrial goods, machinery, raw materials, full load, part load and commercial transport from Kumbalgodu 1st Phase Industrial Area, Bengaluru, Karnataka.",
  serviceType: [
    "Industrial transport",
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Machinery transport",
    "Raw materials transport",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Kumbalgodu 1st Phase Industrial Area, Bengaluru, Karnataka, India",
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
      name: "Kumbalgodu Industrial Area Transport",
      item: `${SITE_URL}/kumbalgodu-industrial-area-transport`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kumbalgodu 1st Phase Industrial Area Transport",
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

export default function Kumbalgodu1stPhaseIndustrialAreaTransportPage() {
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
              <Link
                href="/kumbalgodu-industrial-area-transport"
                className="hover:text-teal-300"
              >
                Kumbalgodu Industrial Area
              </Link>
              <span className="mx-2">/</span>
              <span>Kumbalgodu 1st Phase</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Kumbalgodu 1st Phase Industrial Area Transport
              <span className="mt-3 block text-[#08A99F]">
                Industrial Truck Booking with LOADZY
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Kumbalgodu 1st Phase Industrial
              Area, Bengaluru? Enquire about industrial machinery, manufacturing
              supplies, raw materials, commercial goods, full load and part
              load transport for local and intercity shipments.
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
                "Industrial Transport",
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
          Transport Services in Kumbalgodu 1st Phase
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for industrial machinery, raw materials,
          manufacturing supplies, finished products, commercial consignments
          and household relocation. Choose the service that best matches your
          cargo and delivery requirements.
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
              Industrial Goods Transport from Kumbalgodu 1st Phase
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Kumbalgodu is located on the western side of Bengaluru and is
              associated with industrial, manufacturing, warehousing and
              commercial activity in the wider area. Businesses may need
              transport for machinery, raw materials, industrial components,
              packaging materials, finished products and general cargo.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              For a smooth transport enquiry, provide the exact pickup and
              delivery addresses, cargo description, approximate weight and
              dimensions, required truck type and preferred pickup date.
              Loading and unloading requirements can also affect the vehicle
              selection and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts enquiries for local and intercity transport.
              Truck availability, final freight charges and pickup schedules
              must be confirmed before the booking is finalised.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">
              What to Prepare Before Booking
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Pickup and delivery addresses",
                "Description of goods or machinery",
                "Approximate weight and dimensions",
                "Required truck type or capacity",
                "Preferred pickup date",
                "Loading and unloading requirements",
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

      {/* RELATED LOCALITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Related locations
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Services in Kumbalgodu and Nearby Industrial Areas
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore related LOADZY location pages for industrial and commercial
          transport enquiries. Each location may have different pickup
          requirements and transport availability.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                {area.name} Transport
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {area.description}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                <span className="font-semibold text-slate-700">
                  Goods:
                </span>{" "}
                {area.goods}
              </p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore location →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* OUTBOUND DESTINATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Transport from Kumbalgodu 1st Phase to Major Cities
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Enquire about moving industrial goods, machinery, raw materials
            and commercial consignments from Kumbalgodu 1st Phase to your
            destination. Select a city to continue to the contact page and
            share your shipment details.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Kumbalgodu to {city}
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
            Transport to Kumbalgodu 1st Phase from Major Cities
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Need to transport goods to Kumbalgodu 1st Phase Industrial Area?
            Submit an enquiry for a shipment from your city. Vehicle
            availability, route, schedule and freight charges must be confirmed
            for each consignment.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  {city} to Kumbalgodu
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
            A Simpler Way to Enquire About Goods Transport
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share your cargo and route details to enquire about transport
            options for your industrial, commercial or household shipment.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📍",
              title: "Route Details",
              text: "Share accurate pickup and delivery addresses.",
            },
            {
              icon: "🚛",
              title: "Truck Options",
              text: "Select a truck type suitable for your requirements.",
            },
            {
              icon: "📦",
              title: "Different Cargo",
              text: "Enquire about industrial goods, machinery and commercial shipments.",
            },
            {
              icon: "💬",
              title: "Enquiry Follow-up",
              text: "Provide your contact details so your transport enquiry can be followed up.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>

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
            How to Request Transport from Kumbalgodu 1st Phase
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Enter Locations",
                text: "Provide the pickup and delivery addresses.",
              },
              {
                number: "02",
                title: "Share Load Details",
                text: "Select the service, truck type and pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send your details through the LOADZY enquiry form.",
              },
              {
                number: "04",
                title: "Confirm Booking",
                text: "Confirm truck availability, freight charges and schedule.",
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
            Kumbalgodu 1st Phase Transport — Frequently Asked Questions
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
            Need Goods Transport from Kumbalgodu 1st Phase?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination, cargo details and truck
            requirements to enquire about suitable transport options for your
            industrial or commercial shipment.
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