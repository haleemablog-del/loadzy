import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/ilkal-transport`;

export const metadata: Metadata = {
  title: "Ilkal Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Ilkal, Karnataka. Enquire about sarees, textiles, full load, part load and commercial transport with LOADZY.",
  keywords: [
    "Ilkal transport service",
    "Ilkal truck booking",
    "Ilkal goods transport",
    "Ilkal lorry booking",
    "Ilkal saree transport",
    "Ilkal textile transport",
    "Ilkal full load transport",
    "Ilkal part load transport",
    "Ilkal to Bangalore transport",
    "Ilkal to Bengaluru truck booking",
    "Karnataka goods transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Ilkal Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from Ilkal and nearby Karnataka towns.",
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
    description: "Enquire about dedicated truck options for larger consignments.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description: "Explore transport options for smaller consignments.",
    href: "/part-load",
  },
  {
    icon: "🧵",
    title: "Saree and Textile Transport",
    description: "Enquire about moving Ilkal sarees, fabrics and packaged textile goods.",
    href: "/commercial-transport",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description: "Plan the movement of furniture, appliances and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description: "Enquire about vehicle arrangements for household and office relocation.",
    href: "/house-shifting",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description: "Share requirements for shop stock and commercial consignments.",
    href: "/commercial-transport",
  },
];

const destinations = [
  "Bengaluru",
  "Hubballi",
  "Belagavi",
  "Vijayapura",
  "Kalaburagi",
  "Ballari",
  "Dharwad",
  "Mysuru",
  "Mangaluru",
  "Davangere",
  "Haveri",
  "Shivamogga",
];

const towns = [
  { name: "Bagalkote", slug: "bagalkote", detail: "Regional commercial goods and general cargo." },
  { name: "Badami", slug: "badami", detail: "Shop supplies and packaged goods." },
  { name: "Guledgudda", slug: "guledgudda", detail: "Textiles, handloom products and clothing consignments." },
  { name: "Jamkhandi", slug: "jamkhandi", detail: "Agricultural produce and commercial goods." },
  { name: "Mudhol", slug: "mudhol", detail: "Agricultural goods and business supplies." },
  { name: "Mahalingpur", slug: "mahalingpur", detail: "Textiles, agricultural produce and shop stock." },
  { name: "Rabkavi Banhatti", slug: "rabkavi-banhatti", detail: "Textile and fabric consignments." },
  { name: "Hungund", slug: "hungund", detail: "Farm produce and commercial goods." },
  { name: "Bilgi", slug: "bilgi", detail: "Agricultural goods and regional transport." },
  { name: "Kerur", slug: "kerur", detail: "Market goods and business supplies." },
  { name: "Terdal", slug: "terdal", detail: "Agricultural and textile-related goods." },
];

const faqs = [
  {
    question: "How can I book a truck in Ilkal?",
    answer:
      "Complete the transport enquiry form with your contact details, pickup and delivery locations, service, truck type and pickup date. Confirm availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I transport Ilkal sarees and textile goods?",
    answer:
      "You can submit an enquiry for sarees, textiles, fabric bundles and other commercial goods. Provide the quantity, packaging details and destination.",
  },
  {
    question: "Can I enquire about full load transport?",
    answer:
      "Yes. Submit your shipment details to enquire about full load transport. Vehicle availability and freight charges depend on your route and load.",
  },
  {
    question: "Is part load transport available?",
    answer:
      "You can enquire about part load transport. Availability depends on the route, load size, timing and suitable transport options.",
  },
  {
    question: "Can I book transport from Ilkal to Bengaluru?",
    answer:
      "You can submit an enquiry for Ilkal to Bengaluru. Vehicle availability, freight charges and pickup schedules must be confirmed.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Charges may depend on distance, vehicle type, load weight and dimensions, loading requirements, pickup date and availability.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. An enquiry does not automatically confirm a vehicle or price. Wait for confirmation of availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ilkal Goods Transport and Truck Booking",
  description:
    "Transport enquiries for textiles, full load, part load, commercial goods and household shifting from Ilkal, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Textile transport",
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
    name: "Ilkal, Karnataka, India",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ilkal Transport", item: PAGE_URL },
  ],
};

const contactButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300";

export default function IlkalTransportPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-slate-300">
              <Link href="/" className="hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Ilkal Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Ilkal Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Ilkal, Karnataka? Enquire about
              full load, part load, sarees, textiles, commercial goods and
              household shifting for local and intercity routes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className={contactButtonClass}>
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
              {["Full Load", "Part Load", "Textile Goods", "Commercial Transport"].map((item) => (
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
          Goods Transport Services in Ilkal
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for textiles, household goods, business
          stock and commercial consignments. Choose a service to learn more.
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
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCAL INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Local transport
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Transport and Truck Booking in Ilkal, Karnataka
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Ilkal is known for its traditional sarees and textile trade.
              Businesses may require transport for sarees, fabric bundles,
              packaged merchandise, shop stock and other commercial goods.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the pickup and delivery
              addresses, goods description, approximate load size, loading
              requirements and preferred pickup date.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, freight rates and schedules must
              be confirmed for each shipment.
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
            <Link href="/contact" className={`${contactButtonClass} mt-8 w-full`}>
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
          Truck Transport Around Ilkal
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport information for nearby towns. Select a town to
          open its transport page.
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
              <p className="mt-3 leading-7 text-slate-600">{town.detail}</p>
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
            Major Destinations from Ilkal
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Select a destination to submit a transport enquiry. Availability
            and freight charges must be confirmed for your shipment.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Ilkal to {city}
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
            Share your shipment details, explore suitable transport options
            and confirm the arrangements for your route.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "📍", title: "Route Enquiries", text: "Share pickup and delivery details." },
            { icon: "🚚", title: "Load Options", text: "Enquire about full load and part load." },
            { icon: "🧵", title: "Textile Shipments", text: "Provide saree, fabric and packaging information." },
            { icon: "💬", title: "Clear Requirements", text: "Share cargo details and pickup preferences." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
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
            How to Request Transport from Ilkal
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              { number: "01", title: "Enter Locations", text: "Provide pickup and delivery addresses." },
              { number: "02", title: "Share Load Details", text: "Choose service, truck type and pickup date." },
              { number: "03", title: "Submit Enquiry", text: "Send your booking details through the form." },
              { number: "04", title: "Confirm Details", text: "Confirm availability, freight charges and timing." },
            ].map((step) => (
              <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-extrabold tracking-widest text-[#08A99F]">
                  STEP {step.number}
                </p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
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
            Ilkal Transport — Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-9 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{faq.question}</span>
                <span className="text-xl text-[#08A99F] transition group-open:rotate-45">+</span>
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
            Looking for Goods Transport from Ilkal?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements to
            enquire about suitable transport options.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={contactButtonClass}>
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