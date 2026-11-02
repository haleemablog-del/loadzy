import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/maruthi-industrial-estate-whitefield-transport`;

export const metadata: Metadata = {
  title: "Maruthi Industrial Estate Whitefield Transport | LOADZY",
  description:
    "Enquire about truck booking and goods transport from Maruthi Industrial Estate, Whitefield, Bengaluru. Explore full load, part load, commercial transport and relocation enquiries.",
  keywords: [
    "Maruthi Industrial Estate transport",
    "Maruthi Industrial Estate Whitefield transport",
    "Maruthi Industrial Estate truck booking",
    "Whitefield goods transport",
    "Whitefield lorry booking",
    "Whitefield commercial transport",
    "Whitefield industrial transport",
    "Whitefield full load transport",
    "Whitefield part load transport",
    "Whitefield office shifting",
    "Whitefield household shifting",
    "Whitefield packers and movers",
    "Whitefield to Chennai transport",
    "Chennai to Whitefield transport",
    "Bengaluru truck booking",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Maruthi Industrial Estate Whitefield Transport | LOADZY",
    description:
      "Submit a transport enquiry for goods movement from Maruthi Industrial Estate, Whitefield, Bengaluru.",
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
      "Enquire about a dedicated vehicle for larger shipments and consignments.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Ask about transport options for smaller consignments that do not require a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Enquire about moving furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Explore transport enquiries for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Enquire about moving business stock, office supplies and commercial goods.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Ask about transporting equipment, materials and business consignments.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Bengaluru",
  "Hoskote",
  "Kolar",
  "Hosur",
  "Chennai",
  "Vellore",
  "Tirupattur",
  "Vaniyambadi",
  "Krishnagiri",
  "Salem",
  "Coimbatore",
  "Tiruppur",
  "Mysuru",
  "Tumakuru",
  "Hubballi",
  "Mangaluru",
  "Hyderabad",
  "Vijayawada",
  "Tirupati",
  "Kochi",
  "Palakkad",
  "Mumbai",
  "Pune",
  "Ahmedabad",
  "Delhi",
];

const nearbyAreas = [
  {
    name: "Kadugodi Industrial Area",
    href: "/kadugodi-industrial-area-transport",
    famousFor: "Whitefield-side industrial and commercial activity",
    goods:
      "Business supplies, equipment, packaged goods, furniture and general cargo.",
  },
  {
    name: "Sadarmangala Industrial Area",
    href: "/sadarmangala-industrial-area-transport",
    famousFor: "Industrial and business activity in the Whitefield area",
    goods:
      "Industrial materials, commercial supplies, machinery and packaged consignments.",
  },
  {
    name: "EPIP 1st Phase Industrial Area",
    href: "/epip-1st-phase-industrial-area-transport",
    famousFor: "Business campuses and technology-related workplaces",
    goods:
      "Office equipment, computers, furniture, supplies and business consignments.",
  },
  {
    name: "EPIP 2nd Phase Industrial Area",
    href: "/epip-2nd-phase-industrial-area-transport",
    famousFor: "Commercial and industrial workplaces around Whitefield",
    goods:
      "Equipment, packaged products, office furniture and general commercial cargo.",
  },
  {
    name: "Doddanekkundi Industrial Area",
    href: "/doddanekkundi-industrial-area-transport",
    famousFor: "Industrial and commercial activity in eastern Bengaluru",
    goods:
      "Business supplies, equipment, packaged goods and commercial consignments.",
  },
  {
    name: "Bengaluru IT Park",
    href: "/bengaluru-it-park-transport",
    famousFor: "Office campuses and technology-related businesses",
    goods:
      "Office furniture, computers, equipment, supplies and relocation consignments.",
  },
];

const faqs = [
  {
    question:
      "How can I book a truck from Maruthi Industrial Estate, Whitefield?",
    answer:
      "Fill in the LOADZY transport enquiry form with your name, phone number, pickup and delivery locations, service, truck type and pickup date. Vehicle availability and freight charges must be confirmed before booking.",
  },
  {
    question: "Can I enquire about full load transport from Whitefield?",
    answer:
      "Yes. You can submit an enquiry for full load transport. The suitable vehicle, availability and freight charges depend on your goods, route and pickup date.",
  },
  {
    question: "Can I enquire about part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the destination, load size, schedule and suitable transport options.",
  },
  {
    question: "Can I transport office furniture and equipment?",
    answer:
      "You can submit an enquiry for office furniture, computer equipment, supplies and other business items. Provide the pickup and delivery addresses and preferred date.",
  },
  {
    question: "Can I arrange household shifting from Whitefield?",
    answer:
      "You can enquire about household shifting and packers and movers services. Share your addresses, moving date and an approximate description of your belongings.",
  },
  {
    question: "Can I transport goods from Whitefield to another city?",
    answer:
      "You can submit an enquiry for intercity transport to your chosen destination. Route coverage, truck availability and freight charges must be confirmed.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on route distance, vehicle type, load weight and dimensions, loading requirements, pickup date and availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry confirm my truck?",
    answer:
      "No. Submitting an enquiry does not guarantee a vehicle or a final price. Wait for confirmation of availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maruthi Industrial Estate Whitefield Goods Transport",
  description:
    "Transport enquiries for full load, part load, commercial goods transport, office relocation and household shifting from Whitefield, Bengaluru, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Industrial transport",
    "Office relocation",
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
    name: "Maruthi Industrial Estate, Whitefield, Bengaluru, Karnataka, India",
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
      name: "Maruthi Industrial Estate Whitefield Transport",
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

export default function MaruthiIndustrialEstateWhitefieldTransportPage() {
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
              <span>Maruthi Industrial Estate Whitefield Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Maruthi Industrial Estate Transport
              <span className="mt-3 block text-[#08A99F]">
                Whitefield Truck Booking
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport around Maruthi Industrial Estate,
              Whitefield, Bengaluru? Enquire with LOADZY about full load, part
              load, commercial transport, office equipment movement and
              household shifting for local and intercity routes.
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
                <span key={item} className="rounded-full bg-white/10 px-4 py-2">
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
          Goods Transport Services in Whitefield
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for business supplies, office equipment,
          commercial consignments, household belongings and general cargo.
          Select a service to learn more about the available transport options.
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
              Transport and Truck Booking in Maruthi Industrial Estate,
              Whitefield
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whitefield is an established part of eastern Bengaluru with
              business, commercial and residential activity. Transport
              requirements in the surrounding area may include business
              supplies, office furniture, equipment, packaged products,
              household belongings and general cargo.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and delivery
              addresses, goods description, approximate weight and dimensions,
              loading requirements and preferred pickup date. These details
              help determine a suitable vehicle and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, freight rates and schedules depend
              on each shipment and must be confirmed before transport.
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

      {/* NEARBY AREAS: CARDS OPEN THEIR OWN LOCATION PAGES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Truck Transport in Whitefield and Nearby Industrial Areas
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport information for nearby industrial and commercial
          areas. Select a card to open its dedicated location page.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
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

      {/* FORWARD ROUTES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Transport Routes from Whitefield
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Enquire about goods transport from Maruthi Industrial Estate,
            Whitefield, to Bengaluru destinations and other cities. Route
            coverage, vehicle availability and freight charges must be
            confirmed for each shipment.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Whitefield to {city}
                </span>
                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RETURN ROUTES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Return route enquiries
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Transport to Whitefield from Major Cities
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Need to move goods to Maruthi Industrial Estate, Whitefield? Submit
            an enquiry from your city. Vehicle availability, route coverage and
            freight charges must be confirmed.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  {city} to Whitefield
                </span>
                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#10182D] p-6 text-white md:p-8">
            <h3 className="text-xl font-bold md:text-2xl">
              Need transport to Whitefield?
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Enquire about full load, part load, commercial goods transport and
              household shifting from your city to Whitefield, Bengaluru.
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
            Explore Transport Options for Your Shipment
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
              title: "Multiple Use Cases",
              text: "Enquire about business goods, office equipment and household consignments.",
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
            How to Request Transport from Whitefield
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
            Whitefield Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Whitefield?
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