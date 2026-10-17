import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/hoovina-hadagali-transport`;

export const metadata: Metadata = {
  title: "Hoovina Hadagali Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Hoovina Hadagali, Karnataka. Enquire about jasmine flower transport, agricultural goods, full load, part load, commercial transport and household shifting with LOADZY.",
  keywords: [
    "Hoovina Hadagali transport service",
    "Hoovina Hadagali truck booking",
    "Hoovina Hadagali goods transport",
    "Hoovina Hadagali lorry booking",
    "Hoovina Hadagali logistics",
    "Hoovina Hadagali Mallige transport",
    "Hadagali Mallige flower transport",
    "Hoovina Hadagali agricultural transport",
    "Hoovina Hadagali full load transport",
    "Hoovina Hadagali part load transport",
    "Hoovina Hadagali to Bangalore transport",
    "Hoovina Hadagali to Bengaluru truck booking",
    "Hoovina Hadagali to Ballari transport",
    "Karnataka goods transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Hoovina Hadagali Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from Hoovina Hadagali and nearby Karnataka towns.",
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
      "Enquire about suitable vehicle arrangements for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🌼",
    title: "Flower and Agricultural Transport",
    description:
      "Enquire about suitable transport for jasmine flowers, agricultural produce and related commercial goods.",
    href: "/contact",
  },
  {
    icon: "🏭",
    title: "Commercial and Industrial Transport",
    description:
      "Share your requirements for business stock, equipment, supplies and other commercial consignments.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Bengaluru",
  "Ballari",
  "Hosapete",
  "Davanagere",
  "Chitradurga",
  "Hubballi",
  "Dharwad",
  "Mysuru",
  "Shivamogga",
  "Tumakuru",
  "Haveri",
  "Vijayapura",
];

const towns = [
  {
    name: "Hoovina Hadagali",
    slug: "hoovina-hadagali",
    famousFor: "Hadagali Mallige jasmine and local agriculture",
    goods:
      "Jasmine flowers, agricultural produce, market goods and commercial consignments.",
  },
  {
    name: "Hagaribommanahalli",
    slug: "hagaribommanahalli",
    famousFor: "Regional markets and agricultural activity",
    goods:
      "Agricultural produce, business supplies, packaged goods and general cargo.",
  },
  {
    name: "Harapanahalli",
    slug: "harapanahalli",
    famousFor: "Agriculture, regional trade and local commerce",
    goods:
      "Farm produce, commercial stock, building materials and general goods.",
  },
  {
    name: "Kotturu",
    slug: "kotturu",
    famousFor: "Sri Guru Kottureshwara Temple and regional trade",
    goods:
      "Agricultural goods, shop supplies, commercial consignments and general cargo.",
  },
  {
    name: "Kudligi",
    slug: "kudligi",
    famousFor: "Agricultural activity and local markets",
    goods:
      "Farm produce, packaged goods, commercial supplies and general cargo.",
  },
  {
    name: "Sandur",
    slug: "sandur",
    famousFor: "Mining-related activity and regional industry",
    goods:
      "Industrial supplies, equipment, commercial goods and suitable general cargo.",
  },
  {
    name: "Hosapete",
    slug: "hosapete",
    famousFor: "Regional commerce and access to the Hampi area",
    goods:
      "Commercial stock, packaged goods, industrial supplies and general cargo.",
  },
  {
    name: "Ballari",
    slug: "ballari",
    famousFor: "Mining, industry and commercial activity",
    goods:
      "Industrial materials, business supplies, commercial goods and general cargo.",
  },
  {
    name: "Davanagere",
    slug: "davanagere",
    famousFor: "Textile, trading and industrial activity",
    goods:
      "Textiles, packaged merchandise, commercial stock and general consignments.",
  },
  {
    name: "Siruguppa",
    slug: "siruguppa",
    famousFor: "Agriculture and paddy cultivation in the region",
    goods:
      "Agricultural produce, rice-related goods, market supplies and commercial cargo.",
  },
  {
    name: "Kampli",
    slug: "kampli",
    famousFor: "Agriculture and regional trade",
    goods:
      "Farm produce, business supplies, packaged goods and general cargo.",
  },
  {
    name: "Jagalur",
    slug: "jagalur",
    famousFor: "Agriculture and local commerce",
    goods:
      "Agricultural goods, commercial supplies, market products and general cargo.",
  },
];

const nearbyAreas = [
  "Hagaribommanahalli",
  "Harapanahalli",
  "Kotturu",
  "Kudligi",
  "Sandur",
  "Hosapete",
  "Ballari",
  "Davanagere",
  "Siruguppa",
  "Kampli",
  "Jagalur",
];

const faqs = [
  {
    question: "How can I book a truck in Hoovina Hadagali?",
    answer:
      "Fill in the transport enquiry form with your contact details, pickup and delivery locations, service type, truck type and preferred pickup date. Submit your enquiry and confirm vehicle availability and freight charges before finalising your booking.",
  },
  {
    question:
      "Can I enquire about Hadagali Mallige jasmine flower transport?",
    answer:
      "You can submit an enquiry for transporting jasmine flowers and other suitable agricultural goods. Share the quantity, packaging, required delivery timing, pickup location and destination. Suitable vehicle arrangements and availability must be confirmed before booking.",
  },
  {
    question:
      "Can I book full load transport from Hoovina Hadagali?",
    answer:
      "Yes, you can submit an enquiry for full load transport. The suitable vehicle, availability and freight charges depend on your goods, route, load requirements and pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, load size, timing and suitable transport options.",
  },
  {
    question:
      "Can I book a truck from Hoovina Hadagali to Bengaluru?",
    answer:
      "You can submit a transport enquiry for Hoovina Hadagali to Bengaluru. The vehicle, freight price and pickup schedule must be confirmed for your specific shipment.",
  },
  {
    question: "Can I transport agricultural goods from Hoovina Hadagali?",
    answer:
      "You can enquire about transporting suitable agricultural produce and commercial goods. Provide the cargo details, packaging, quantity, pickup date and destination so the transport requirements can be reviewed.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, load weight and dimensions, loading requirements, pickup date and availability. Confirm the final quotation before booking.",
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
  name: "Hoovina Hadagali Goods Transport and Truck Booking",
  description:
    "Transport enquiries for agricultural goods, jasmine flowers, full load, part load, commercial transport and household shifting from Hoovina Hadagali, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Agricultural goods transport",
    "Flower transport enquiries",
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
    name: "Hoovina Hadagali, Karnataka, India",
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
      name: "Hoovina Hadagali Transport",
      item: PAGE_URL,
    },
  ],
};

export default function HoovinaHadagaliTransportPage() {
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
              <span>Hoovina Hadagali Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Hoovina Hadagali Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Hoovina Hadagali, Karnataka?
              Explore LOADZY for full load, part load, agricultural goods,
              Hadagali Mallige jasmine transport enquiries, commercial
              consignments and household shifting for local and intercity
              routes.
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
          Goods Transport Services in Hoovina Hadagali
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for agricultural produce, jasmine
          flowers, household goods, business stock and commercial
          consignments. Choose the service that matches your pickup,
          destination and load requirements.
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
              Transport and Truck Booking in Hoovina Hadagali, Karnataka
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Hoovina Hadagali is associated with Hadagali Mallige,
              a traditional jasmine variety. The surrounding region also
              has agricultural activity, local markets and commercial
              transport requirements. Depending on the shipment, customers
              may need transport for suitable flower consignments,
              agricultural produce, shop stock, packaged goods and general
              cargo.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and
              delivery addresses, goods description, approximate weight
              and dimensions, packaging and loading requirements, and
              preferred pickup date. For flowers or other time-sensitive
              goods, also explain the required delivery timing and
              handling needs.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, rates and schedules depend
              on each booking and must be confirmed before transport.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Prepare Before Booking</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Pickup and delivery addresses",
                "Goods description and approximate load size",
                "Packaging and handling requirements",
                "Required truck type or capacity",
                "Preferred pickup date and delivery timing",
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

      {/* TOWNS AND LOCAL COVERAGE */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Truck Transport in Hoovina Hadagali and Nearby Towns
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport information for Hoovina Hadagali and
          surrounding locations. From agricultural produce and flower
          consignments to commercial goods, share your route and cargo
          details to enquire about transport options.
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

              <p className="mt-3 text-sm font-semibold text-teal-700">
                {town.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                {town.goods}
              </p>

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
            Major Destinations from Hoovina Hadagali
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Hoovina Hadagali to another city?
            Select a destination to submit a transport price enquiry.
            Availability, route coverage and freight charges must be
            confirmed for each shipment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Hoovina Hadagali to {city}
                </span>

                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Nearby areas
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Locations Around Hoovina Hadagali
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore transport enquiries for nearby towns and regional
            commercial centres. Select a location to open its transport
            page.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {nearbyAreas.map((area) => (
              <Link
                key={area}
                href={`/${area.toLowerCase().replace(/\s+/g, "-")}-transport`}
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
            A Simpler Way to Explore Transport Options
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share your shipment details, explore transport options and
            confirm the arrangements for your route.
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
              text: "Provide cargo details, handling needs and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Use Cases",
              text: "Enquire about agricultural goods, flowers, shifting and commercial consignments.",
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
            How to Request Transport from Hoovina Hadagali
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
            Hoovina Hadagali Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Hoovina Hadagali?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements
            to enquire about suitable transport options for your shipment.
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