import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/epip-1st-phase-industrial-area-transport`;

export const metadata: Metadata = {
  title: "EPIP 1st Phase Industrial Area Transport | LOADZY",
  description:
    "Enquire about truck booking and industrial goods transport in EPIP 1st Phase, Whitefield, Bengaluru. Explore full load, part load and commercial transport options with LOADZY.",
  keywords: [
    "EPIP 1st Phase Industrial Area transport",
    "EPIP 1st Phase truck booking",
    "EPIP Whitefield goods transport",
    "EPIP industrial transport Bengaluru",
    "EPIP lorry booking",
    "Whitefield industrial goods transport",
    "EPIP freight services",
    "EPIP full load transport",
    "EPIP part load transport",
    "Whitefield truck booking",
    "EPIP commercial transport",
    "Bengaluru industrial transport",
    "EPIP to Chennai transport",
    "Chennai to EPIP transport",
    "LOADZY truck booking",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "EPIP 1st Phase Industrial Area Transport | LOADZY",
    description:
      "Submit a truck booking enquiry for industrial and commercial goods transport from EPIP 1st Phase, Whitefield, Bengaluru.",
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
      "Enquire about dedicated trucks for larger consignments and industrial shipments.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Ask about transport options for consignments that do not require a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan transportation for furniture, appliances and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers & Movers",
    description:
      "Enquire about vehicle arrangements for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Explore transport options for commercial stock, business supplies and goods.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about moving industrial materials, equipment and machinery.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Chennai",
  "Coimbatore",
  "Salem",
  "Madurai",
  "Tiruppur",
  "Erode",
  "Vellore",
  "Ambur",
  "Tirupattur",
  "Vaniyambadi",
  "Hosur",
  "Krishnagiri",
  "Mysuru",
  "Mangaluru",
  "Hubballi",
  "Belagavi",
  "Tumakuru",
  "Hyderabad",
  "Vijayawada",
  "Kochi",
  "Palakkad",
  "Thrissur",
  "Mumbai",
  "Pune",
  "Delhi",
];

const nearbyAreas = [
  {
    name: "Kadugodi Industrial Area",
    href: "/kadugodi-industrial-area-transport",
    description:
      "Explore transport enquiries for industrial and commercial consignments around Kadugodi.",
  },
  {
    name: "Sadarmangala Industrial Area",
    href: "/sadarmangala-industrial-area-transport",
    description:
      "Find information about industrial goods transport enquiries in Sadarmangala.",
  },
];

const faqs = [
  {
    question: "How can I book a truck from EPIP 1st Phase?",
    answer:
      "Complete the LOADZY enquiry form with your name, phone number, pickup and delivery locations, service, truck type and pickup date. Submit the enquiry and confirm vehicle availability, freight charges and timing before finalizing your booking.",
  },
  {
    question: "Can I enquire about industrial goods transport from EPIP?",
    answer:
      "You can submit an enquiry for industrial materials, equipment, machinery and commercial consignments. Provide the cargo description, approximate weight and dimensions, loading requirements and destination.",
  },
  {
    question: "Can I request full load transport from EPIP?",
    answer:
      "Yes, you can submit a full load transport enquiry. Suitable vehicle type, availability, schedule and freight charges depend on your shipment and route and must be confirmed.",
  },
  {
    question: "Is part load transport available from EPIP?",
    answer:
      "You can enquire about part load options for smaller consignments. Availability depends on the destination, shipment size, timing and suitable transport arrangements.",
  },
  {
    question: "Can I transport goods from EPIP to Chennai?",
    answer:
      "You can submit a transport enquiry for the EPIP-to-Chennai route. Share the exact pickup and delivery addresses, cargo details and preferred date so that availability and charges can be assessed.",
  },
  {
    question: "How are truck freight charges calculated?",
    answer:
      "Charges may depend on the route distance, truck type, shipment weight and dimensions, loading and unloading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "What information should I provide when booking?",
    answer:
      "Provide accurate pickup and delivery addresses, cargo details, approximate weight and dimensions, preferred truck type, pickup date and contact number. Mention any special handling or loading requirements.",
  },
  {
    question: "Does an enquiry confirm my truck booking?",
    answer:
      "No. Submitting the form records your enquiry but does not automatically confirm a vehicle or a price. Availability, freight charges and pickup arrangements must be confirmed separately.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EPIP 1st Phase Industrial Area Goods Transport",
  description:
    "Truck booking enquiries for industrial goods, full load, part load and commercial consignments in EPIP 1st Phase, Whitefield, Bengaluru, Karnataka.",
  serviceType: [
    "Industrial transport",
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
    name: "EPIP 1st Phase, Whitefield, Bengaluru, Karnataka, India",
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
      name: "EPIP 1st Phase Industrial Area Transport",
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

export default function EpipFirstPhaseIndustrialAreaTransportPage() {
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
              <span>EPIP 1st Phase Industrial Area Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              EPIP 1st Phase Industrial Area Transport
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for truck booking in EPIP 1st Phase, Whitefield,
              Bengaluru? Enquire with LOADZY about industrial goods transport,
              full load, part load and commercial shipments. Share your cargo
              and route details to enquire about suitable transport options.
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
                "Industrial Transport",
                "Full Load",
                "Part Load",
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
          Transport Solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Goods Transport Services in EPIP 1st Phase
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for industrial materials, commercial
          stock, equipment and other consignments. Choose a service that suits
          your cargo, route and delivery requirements.
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
                Explore Service →
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
              Local Transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Industrial Goods Transport in EPIP 1st Phase, Whitefield
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              EPIP 1st Phase is associated with the Whitefield business and
              industrial area of eastern Bengaluru. Transport requirements in
              the surrounding business districts can include equipment,
              packaged goods, office supplies, commercial stock and industrial
              consignments. Confirm the precise pickup address for every
              shipment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When arranging goods movement, provide the cargo description,
              approximate weight and dimensions, loading requirements, pickup
              date and destination. These details help assess which vehicle
              type may suit your shipment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY provides an enquiry option for local and intercity
              transport requirements. Vehicle availability, schedules and
              freight charges depend on the individual shipment and must be
              confirmed before booking.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Before You Book</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Exact pickup and delivery addresses",
                "Description of goods and approximate load size",
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

      {/* NEARBY AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Nearby Areas
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Enquiries Around EPIP and Whitefield
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore our industrial-area transport pages for nearby locations in
          eastern Bengaluru. Confirm the actual collection point and delivery
          requirements when submitting an enquiry.
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

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore Area →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity Transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Major Destinations from EPIP 1st Phase
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Need to move goods from EPIP to another city? Choose a destination
            to submit a transport enquiry. Availability, route coverage and
            freight charges must be confirmed for your shipment.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  EPIP to {city}
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
            Reverse Route Enquiries
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Truck Transport to EPIP from Major Cities
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Need to deliver goods to EPIP 1st Phase? Submit an enquiry from
            your city and share the collection address, destination, cargo
            details and preferred date. Transport arrangements and charges
            require confirmation.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  {city} to EPIP
                </span>
                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#10182D] p-6 text-white md:p-8">
            <h3 className="text-xl font-bold md:text-2xl">
              Need a Truck to EPIP 1st Phase?
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Enquire about industrial goods, commercial consignments, full
              load and part load transport to EPIP. Truck availability and
              freight charges must be confirmed.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Enquire About Transport →
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
            A Simpler Way to Explore Truck Transport
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share your shipment details, enquire about transport options and
            confirm arrangements for your route.
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
              text: "Enquire about truck types suited to your load.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details and preferred pickup date.",
            },
            {
              icon: "🏭",
              title: "Business Transport",
              text: "Enquire about industrial materials, equipment and commercial goods.",
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
            How to Request Transport from EPIP
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
                text: "Choose a service, truck type and pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send your details using the enquiry form.",
              },
              {
                number: "04",
                title: "Confirm Booking",
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
            EPIP 1st Phase Industrial Area Transport FAQs
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
            Looking for Industrial Goods Transport from EPIP?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and cargo requirements to
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