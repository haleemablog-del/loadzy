import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/maraimalai-nagar-transport`;

export const metadata: Metadata = {
  title: "Maraimalai Nagar Transport Service | Truck Booking | LOADZY",
  description:
    "Find goods transport and truck booking options in Maraimalai Nagar, Tamil Nadu. Enquire about industrial goods, full load, part load, commercial transport and house shifting with LOADZY.",
  keywords: [
    "Maraimalai Nagar transport service",
    "Maraimalai Nagar truck booking",
    "Maraimalai Nagar goods transport",
    "Maraimalai Nagar lorry booking",
    "Maraimalai Nagar industrial transport",
    "Maraimalai Nagar factory transport",
    "Maraimalai Nagar logistics",
    "Maraimalai Nagar full load transport",
    "Maraimalai Nagar part load transport",
    "Maraimalai Nagar to Chennai transport",
    "Maraimalai Nagar to Bangalore transport",
    "Maraimalai Nagar packers and movers",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Maraimalai Nagar Transport Service | LOADZY",
    description:
      "Enquire about industrial goods transport, truck booking, commercial freight and household shifting from Maraimalai Nagar.",
    url: PAGE_URL,
    siteName: "LOADZY",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about moving manufacturing supplies, equipment, materials and industrial consignments.",
    href: "/industrial-transport",
  },
  {
    icon: "🚛",
    title: "Full Load Transport",
    description:
      "Explore dedicated truck options for larger shipments that require a full vehicle.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Enquire about suitable transport for smaller consignments that do not require a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Arrange transport enquiries for business stock, packaged goods and commercial deliveries.",
    href: "/commercial-transport",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan transportation for furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Explore vehicle arrangements for household and office relocation requirements.",
    href: "/packers-movers",
  },
];

const destinations = [
  "Chennai",
  "Chengalpattu",
  "Tambaram",
  "Sriperumbudur",
  "Kanchipuram",
  "Vellore",
  "Tirupattur",
  "Hosur",
  "Bangalore",
  "Coimbatore",
  "Salem",
  "Madurai",
];

const nearbyAreas = [
  "Singaperumal Koil",
  "Guduvanchery",
  "Potheri",
  "Kattankulathur",
  "Mahindra World City",
  "Chengalpattu",
  "Urapakkam",
  "Maraimalai Nagar",
  "Tambaram",
  "Sriperumbudur",
  "Oragadam",
  "Chennai",
];

const faqs = [
  {
    question: "How can I book a truck in Maraimalai Nagar?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, service, truck type and pickup date. Confirm availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I enquire about industrial transport from Maraimalai Nagar?",
    answer:
      "You can submit an enquiry for industrial materials, manufacturing supplies, equipment and other suitable consignments. Share your cargo details, weight, dimensions, pickup location and destination.",
  },
  {
    question: "Is full load transport available?",
    answer:
      "You can enquire about full load transport. Vehicle suitability, availability, scheduling and freight charges depend on your shipment and route and must be confirmed.",
  },
  {
    question: "Can I enquire about part load transport?",
    answer:
      "You can submit a part load transport enquiry for smaller consignments. Suitable options depend on load size, route, timing and available transport arrangements.",
  },
  {
    question: "Can I book transport from Maraimalai Nagar to Chennai?",
    answer:
      "You can submit a transport enquiry for Maraimalai Nagar to Chennai. Provide your exact pickup and delivery locations and preferred date so your requirements can be reviewed.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, truck type, cargo weight and dimensions, loading requirements, pickup date and availability. Confirm the final quotation before booking.",
  },
  {
    question: "Can I request a return load?",
    answer:
      "You can enquire about return-load options for your route. Availability depends on matching loads, trucks and schedules and is not guaranteed.",
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
  name: "Maraimalai Nagar Goods Transport and Truck Booking",
  description:
    "Transport enquiries for industrial goods, full loads, part loads, commercial consignments and household shifting from Maraimalai Nagar, Tamil Nadu.",
  serviceType: [
    "Industrial goods transport",
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
    name: "Maraimalai Nagar, Chengalpattu district, Tamil Nadu, India",
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
      name: "Maraimalai Nagar Transport",
      item: PAGE_URL,
    },
  ],
};

export default function MaraimalaiNagarTransportPage() {
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
              <span>Maraimalai Nagar Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Maraimalai Nagar Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Industrial & Goods Truck Booking
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Maraimalai Nagar, Tamil Nadu?
              Explore LOADZY for industrial consignments, manufacturing
              materials, full load, part load, commercial deliveries and
              household shifting enquiries for local and intercity routes.
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
                Contact LOADZY
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {[
                "Industrial Transport",
                "Full Load",
                "Part Load",
                "Commercial Goods",
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
          Goods and Industrial Transport in Maraimalai Nagar
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Maraimalai Nagar is in the wider Chennai–Chengalpattu industrial
          corridor. Businesses and residents may need transport for
          manufacturing supplies, machinery, commercial goods, warehouse
          consignments and household belongings. Share your shipment details
          to enquire about suitable transport options.
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
              Industrial Logistics and Truck Booking in Maraimalai Nagar
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Maraimalai Nagar is located along the southern Chennai
              metropolitan corridor near Guduvanchery and Chengalpattu. The
              wider region includes industrial and commercial activity, so
              transport enquiries may involve manufacturing supplies,
              equipment, packaged goods, business stock and consignments
              moving between factories, warehouses and distribution points.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and delivery
              addresses, cargo description, approximate weight and dimensions,
              loading requirements and preferred pickup date. These details
              help determine a suitable vehicle and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Household moves and commercial deliveries can also be submitted
              as enquiries. Vehicle availability, route coverage, freight
              charges and schedules must be confirmed for each booking.
            </p>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Goods You Can Enquire About Transporting
            </h3>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Manufacturing materials and supplies",
                "Machinery and equipment",
                "Packaged commercial goods",
                "Warehouse consignments",
                "Business stock and cartons",
                "Furniture and household goods",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-6 text-slate-600">
                  <span className="font-bold text-[#08A99F]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Prepare Before Booking</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Pickup address and delivery address",
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
          Major Destinations from Maraimalai Nagar
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore destination options for your transport enquiry. Route
          coverage, vehicle availability and freight charges must be confirmed
          for each shipment.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {destinations.map((city) => (
            <Link
              key={city}
              href="/load-search"
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                Maraimalai Nagar to {city}
              </span>
              <span className="ml-2 text-[#08A99F]">→</span>
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
            Nearby Locations Around Maraimalai Nagar
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore nearby locations when planning a transport enquiry.
            Select an area to open its transport page where available.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {nearbyAreas.map((area) => {
              const slug = area
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <Link
                  key={area}
                  href={`/${slug}-transport`}
                  className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
                >
                  <span className="font-medium text-slate-700 group-hover:text-teal-800">
                    {area}
                  </span>
                  <span className="shrink-0 text-[#08A99F]">→</span>
                </Link>
              );
            })}
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
            Share your shipment requirements and enquire about suitable
            transport options for industrial, commercial and household goods.
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
              text: "Enquire about full load, part load and suitable vehicle types.",
            },
            {
              icon: "🏭",
              title: "Industrial Goods",
              text: "Provide cargo details for manufacturing and commercial transport.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Share load size, pickup preferences and handling requirements.",
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
            How to Request Transport from Maraimalai Nagar
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
                text: "Send your booking details through the form.",
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
            Maraimalai Nagar Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Maraimalai Nagar?
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
