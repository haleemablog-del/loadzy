import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-industrial-hubs-transport`;

export const metadata: Metadata = {
  title:
    "Bengaluru Industrial Transport | Industrial Area Truck Booking | LOADZY",
  description:
    "Enquire about industrial goods transport, truck booking, machinery movement, full load and part load services across Bengaluru industrial areas with LOADZY.",
  keywords: [
    "Bengaluru industrial transport",
    "Bangalore industrial transport",
    "Bengaluru industrial area truck booking",
    "Peenya industrial transport",
    "Bommasandra transport service",
    "Jigani industrial area transport",
    "Electronic City goods transport",
    "Bidadi industrial transport",
    "Harohalli industrial transport",
    "Doddaballapura industrial transport",
    "Dobbaspet truck booking",
    "Attibele goods transport",
    "Whitefield industrial transport",
    "Bengaluru machinery transport",
    "Bengaluru full load transport",
    "Bengaluru part load transport",
    "Karnataka industrial logistics",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bengaluru Industrial Transport | LOADZY",
    description:
      "Submit an enquiry for truck booking and goods transport from Bengaluru's major industrial areas.",
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
      "Enquire about dedicated truck options for machinery, materials and larger industrial consignments.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller business shipments that do not require an entire truck.",
    href: "/part-load",
  },
  {
    icon: "⚙️",
    title: "Machinery and Equipment",
    description:
      "Share machinery dimensions, weight and handling needs to enquire about a suitable vehicle.",
    href: "/contact",
  },
  {
    icon: "🏭",
    title: "Industrial Goods Transport",
    description:
      "Enquire about moving production materials, components, packaged goods and industrial supplies.",
    href: "/industrial-transport",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Arrange enquiries for business stock, wholesale goods, packaging materials and commercial cargo.",
    href: "/commercial-transport",
  },
  {
    icon: "🚚",
    title: "Intercity Truck Booking",
    description:
      "Share your Bengaluru pickup point and destination to enquire about suitable intercity transport.",
    href: "/contact",
  },
];

const industrialHubs = [
  {
    name: "Peenya Industrial Area",
    famousFor: "Established manufacturing and engineering activity",
    goods:
      "Engineering components, machinery, metal products, electrical goods and industrial supplies.",
  },
  {
    name: "Bommasandra Industrial Area",
    famousFor: "Industrial manufacturing and business operations",
    goods:
      "Manufactured products, production materials, packaged consignments and commercial cargo.",
  },
  {
    name: "Jigani Industrial Area",
    famousFor: "Industrial units and production-related businesses",
    goods:
      "Industrial materials, manufactured goods, equipment and business supplies.",
  },
  {
    name: "Electronic City",
    famousFor: "Technology companies and electronics-related business activity",
    goods:
      "Electronics, IT equipment, office assets, packaged goods and commercial consignments.",
  },
  {
    name: "Attibele Industrial Belt",
    famousFor: "Industrial and commercial activity along the Bengaluru–Hosur corridor",
    goods:
      "Manufactured products, business inventory, packaging materials and industrial supplies.",
  },
  {
    name: "Doddaballapura Industrial Area",
    famousFor: "Industrial activity and textile-related business in the wider area",
    goods:
      "Textiles, machinery, production materials, packaged goods and commercial cargo.",
  },
  {
    name: "Dobbaspet Industrial Area",
    famousFor: "Industrial activity along the Bengaluru–Tumakuru corridor",
    goods:
      "Industrial materials, equipment, construction supplies and manufactured goods.",
  },
  {
    name: "Bidadi Industrial Area",
    famousFor: "Manufacturing and automotive-related industrial activity",
    goods:
      "Automotive components, machinery, production materials and packaged industrial goods.",
  },
  {
    name: "Harohalli Industrial Area",
    famousFor: "Industrial estates and manufacturing-related activity in the wider Bengaluru region",
    goods:
      "Industrial supplies, components, equipment and commercial consignments.",
  },
  {
    name: "EPIP–Whitefield",
    famousFor: "Export-oriented and technology-related business activity",
    goods:
      "Business equipment, electronics, packaged products, office materials and commercial cargo.",
  },
  {
    name: "Kadugodi–Sadaramangala Industrial Area",
    famousFor: "Industrial and commercial activity in the Whitefield area",
    goods:
      "Business stock, industrial materials, packaged goods and equipment.",
  },
  {
    name: "Kumbalgodu Industrial Area",
    famousFor: "Industrial units and manufacturing-related activity on Bengaluru's western side",
    goods:
      "Manufactured products, machinery, industrial supplies and commercial consignments.",
  },
  {
    name: "Veerasandra Industrial Area",
    famousFor: "Industrial and technology-related business activity near Electronic City",
    goods:
      "Electronic equipment, components, production materials and commercial goods.",
  },
  {
    name: "Doddanekkundi Industrial Area",
    famousFor: "Industrial and business activity in eastern Bengaluru",
    goods:
      "Equipment, commercial inventory, packaged products and business supplies.",
  },
];

const destinations = [
  "Hosur",
  "Chennai",
  "Coimbatore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Mysuru",
  "Hubballi",
  "Mangaluru",
  "Belagavi",
  "Vijayawada",
  "Kochi",
];

const nearbyAreas = [
  "Yeshwanthpur",
  "Rajajinagar",
  "Dasarahalli",
  "Electronic City",
  "Bommasandra",
  "Jigani",
  "Whitefield",
  "Attibele",
  "Doddaballapura",
  "Bidadi",
  "Harohalli",
  "Kumbalgodu",
];

const faqs = [
  {
    question:
      "How can I book a truck for a Bengaluru industrial area?",
    answer:
      "Fill in the enquiry form with your name, mobile number, exact pickup and delivery locations, service type, truck type and preferred pickup date. Submit your enquiry and confirm availability, charges and pickup arrangements before finalising the booking.",
  },
  {
    question:
      "Can I enquire about transport from Peenya Industrial Area?",
    answer:
      "Yes. You can submit a transport enquiry with Peenya Industrial Area as your pickup location. Share your cargo details and destination so the appropriate transport option can be considered.",
  },
  {
    question:
      "Can I arrange transport from Bommasandra or Jigani?",
    answer:
      "You can submit an enquiry for pickup from Bommasandra, Jigani and other listed industrial areas. The actual truck availability and route arrangements must be confirmed for your shipment.",
  },
  {
    question:
      "Can I transport machinery and industrial equipment?",
    answer:
      "You can enquire about machinery and equipment movement. Provide the approximate weight, dimensions, loading requirements and destination. Special handling or lifting requirements must be discussed before a vehicle is confirmed.",
  },
  {
    question:
      "Are full load and part load options available?",
    answer:
      "You can enquire about both full load and part load services. The suitable option depends on the shipment size, destination, pickup date and transport availability.",
  },
  {
    question:
      "Can I move goods from Bengaluru to other states?",
    answer:
      "You can submit enquiries for intercity and interstate routes. Provide the exact pickup and delivery addresses, goods description and preferred date so the route and transport arrangements can be reviewed.",
  },
  {
    question: "How are industrial transport charges calculated?",
    answer:
      "Charges may depend on the route, truck type, weight and dimensions of the goods, loading and unloading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question:
      "Does submitting the enquiry guarantee a truck or price?",
    answer:
      "No. An enquiry is a request for transport options, not a confirmed booking. Vehicle availability, freight charges and pickup arrangements must be confirmed separately.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bengaluru Industrial Goods Transport and Truck Booking",
  description:
    "Transport enquiries for industrial goods, machinery, commercial consignments, full load and part load shipments across major industrial areas in Bengaluru, Karnataka.",
  serviceType: [
    "Industrial goods transport",
    "Machinery transport",
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "City",
    name: "Bengaluru",
    containedInPlace: {
      "@type": "State",
      name: "Karnataka",
    },
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
      name: "Karnataka Truck Transport",
      item: `${SITE_URL}/karnataka-truck-transport`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bengaluru Industrial Hubs Transport",
      item: PAGE_URL,
    },
  ],
};

export default function BengaluruIndustrialHubsTransportPage() {
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
              <Link
                href="/karnataka-truck-transport"
                className="hover:text-teal-300"
              >
                Karnataka Transport
              </Link>
              <span className="mx-2">/</span>
              <span>Industrial Hubs</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Bengaluru Industrial Transport
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking for Business Goods
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Need transport for an industrial shipment in Bengaluru?
              Explore LOADZY for enquiries about full load, part load,
              machinery, production materials, commercial stock and other
              suitable goods across the city&apos;s major industrial areas.
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
                "Industrial Goods",
                "Machinery",
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
          Transport solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Industrial Goods Transport Services in Bengaluru
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Different businesses have different cargo and vehicle
          requirements. Share your pickup point, destination, cargo
          details and preferred date to enquire about a suitable
          transport option.
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
                Enquire now →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCAL INDUSTRIAL INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-start md:px-8 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Industrial transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Truck Booking Across Bengaluru Industrial Areas
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bengaluru&apos;s wider industrial network includes areas
              such as Peenya, Bommasandra, Jigani, Electronic City,
              Attibele, Doddaballapura, Dobbaspet, Bidadi and
              Harohalli. Different locations serve different
              manufacturing, technology, commercial and production
              needs.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Depending on the shipment, transport requirements may
              include machinery, engineering components, electronics,
              industrial materials, packaged goods, business inventory
              and production supplies. The cargo details should be
              reviewed before choosing a vehicle.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact industrial
              area, pickup and delivery addresses, approximate weight
              and dimensions, loading arrangements and preferred
              pickup date. These details help the transport team
              review the requirement.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local,
              intercity and interstate movement. Vehicle availability,
              freight charges and delivery schedules must be confirmed
              for each booking.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">
              Prepare Before Booking
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Exact industrial pickup and delivery addresses",
                "Description of goods or machinery",
                "Approximate cargo weight and dimensions",
                "Required truck type or capacity",
                "Loading and unloading requirements",
                "Preferred pickup date and contact details",
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

      {/* INDUSTRIAL HUBS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Industrial coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Major Industrial Hubs Covered Around Bengaluru
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore the major industrial areas listed below. Their
          activities vary, so the actual goods, truck capacity and
          handling requirements should be confirmed for every
          shipment. Select an area to submit your transport enquiry.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industrialHubs.map((hub) => (
            <Link
              key={hub.name}
              href="/contact"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                  {hub.name}
                </h3>

                <span className="text-xl text-[#08A99F]">↗</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                {hub.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                <span className="font-semibold text-slate-800">
                  Transport goods:
                </span>{" "}
                {hub.goods}
              </p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Enquire about transport →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* INTERCITY DESTINATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Major Destinations from Bengaluru Industrial Areas
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Moving industrial or commercial goods outside Bengaluru?
            Select a destination to submit a transport price enquiry.
            Route coverage, vehicle availability and freight charges
            must be confirmed for your shipment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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

      {/* NEARBY BUSINESS AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Business locations
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Business and Industrial Locations
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Submit transport enquiries from other major business
            locations around Bengaluru. These links open the enquiry
            page until a dedicated transport page for a location is
            created.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {nearbyAreas.map((area) => (
              <Link
                key={area}
                href="/contact"
                className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
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
            Transport Enquiries for Industrial Shipments
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share the details of your industrial shipment and enquire
            about transport options that match your cargo, route and
            preferred pickup date.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📍",
              title: "Route Enquiries",
              text: "Share exact pickup and delivery details for your shipment.",
            },
            {
              icon: "🚚",
              title: "Truck Options",
              text: "Enquire about suitable vehicle types for your cargo.",
            },
            {
              icon: "⚙️",
              title: "Industrial Goods",
              text: "Provide shipment details for machinery, materials and components.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Share loading needs and pickup preferences before confirmation.",
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

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>
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
            How to Request Industrial Transport
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Enter Locations",
                text: "Provide the industrial pickup point and delivery address.",
              },
              {
                number: "02",
                title: "Share Load Details",
                text: "Choose a service, truck type and preferred pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send your transport details through the enquiry form.",
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

                <p className="mt-3 leading-7 text-slate-600">
                  {step.text}
                </p>
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
            Bengaluru Industrial Transport — Frequently Asked Questions
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

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
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
            Looking for Industrial Goods Transport in Bengaluru?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your industrial pickup location, destination and
            load requirements to enquire about suitable transport
            options for your shipment.
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