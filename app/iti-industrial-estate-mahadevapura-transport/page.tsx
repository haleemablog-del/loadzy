import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/iti-industrial-estate-mahadevapura-transport`;

export const metadata: Metadata = {
  title: "ITI Industrial Estate Mahadevapura Transport | LOADZY",
  description:
    "Book truck transport from ITI Industrial Estate, Mahadevapura, Bengaluru. LOADZY supports full load, part load, industrial goods, commercial transport and household shifting.",
  keywords: [
    "ITI Industrial Estate Mahadevapura transport",
    "Mahadevapura truck transport",
    "Mahadevapura industrial transport",
    "truck booking Mahadevapura",
    "Mahadevapura goods transport",
    "Mahadevapura packers and movers",
    "Bengaluru industrial transport",
    "LOADZY",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "ITI Industrial Estate Mahadevapura Transport | LOADZY",
    description:
      "Arrange truck transport, industrial goods movement, commercial freight and shifting services from Mahadevapura with LOADZY.",
    url: PAGE_URL,
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  {
    title: "Full Load Transport",
    description:
      "Truck transport for larger commercial, industrial and business consignments.",
    href: "/full-load",
  },
  {
    title: "Part Load Transport",
    description:
      "Transport support for smaller consignments that do not require a full truck.",
    href: "/part-load",
  },
  {
    title: "House Shifting",
    description:
      "Transport for household furniture, appliances, personal belongings and relocation goods.",
    href: "/house-shifting",
  },
  {
    title: "Packers & Movers",
    description:
      "Transport support for household and office relocation requirements.",
    href: "/packers-movers",
  },
  {
    title: "Commercial Transport",
    description:
      "Move shop stock, business supplies, furniture, equipment and packaged goods.",
    href: "/commercial-transport",
  },
  {
    title: "Industrial Transport",
    description:
      "Transport support for suitable machinery, factory supplies, components and industrial cargo.",
    href: "/industrial-transport",
  },
];

const nearbyAreas = [
  {
    name: "Doddanekkundi Industrial Area",
    href: "/doddanekkundi-industrial-area-transport",
    famousFor:
      "Industrial, office and commercial activity in eastern Bengaluru.",
    goods:
      "Office equipment, machinery, business supplies and commercial consignments.",
  },
  {
    name: "Sadarmangala Industrial Area",
    href: "/sadarmangala-industrial-area-transport",
    famousFor:
      "Industrial and commercial activity around the eastern Bengaluru corridor.",
    goods:
      "Industrial supplies, packaged goods, equipment and commercial cargo.",
  },
  {
    name: "Kadugodi Industrial Area",
    href: "/kadugodi-industrial-area-transport",
    famousFor:
      "Business, residential and industrial activity in the Whitefield region.",
    goods:
      "Office furniture, commercial stock, equipment and household consignments.",
  },
  {
    name: "Bengaluru IT Park",
    href: "/bengaluru-it-park-transport",
    famousFor:
      "Technology workplaces, offices and supporting business services.",
    goods:
      "Office furniture, computer equipment, supplies and relocation consignments.",
  },
  {
    name: "Maruthi Industrial Estate, Whitefield",
    href: "/maruthi-industrial-estate-whitefield-transport",
    famousFor:
      "Industrial and commercial activity in the Whitefield area.",
    goods:
      "Business supplies, packaged products, equipment and commercial stock.",
  },
  {
    name: "Hoskote Industrial Area",
    href: "/hoskote-industrial-area-transport",
    famousFor:
      "Industrial and logistics activity along the Bengaluru–Hoskote corridor.",
    goods:
      "Industrial materials, machinery, packaged goods and factory supplies.",
  },
];

const destinations = [
  "Bengaluru",
  "Hosur",
  "Chennai",
  "Coimbatore",
  "Salem",
  "Vellore",
  "Tirupattur",
  "Vaniyambadi",
  "Krishnagiri",
  "Mysuru",
  "Tumakuru",
  "Hyderabad",
  "Vijayawada",
  "Tirupati",
  "Pune",
  "Mumbai",
  "Kochi",
  "Madurai",
  "Erode",
  "Tiruchirappalli",
];

const faqs = [
  {
    question:
      "Can I book a truck from ITI Industrial Estate, Mahadevapura?",
    answer:
      "Yes. You can submit a transport enquiry through LOADZY with your pickup location, destination, truck type, service and pickup date. Availability and pricing must be confirmed.",
  },
  {
    question: "Does LOADZY support industrial goods transport?",
    answer:
      "LOADZY supports transport enquiries for suitable industrial materials, equipment, components, commercial supplies and other goods.",
  },
  {
    question: "Can I arrange part load or full load transport?",
    answer:
      "Yes. You can select part load or full load transport in the enquiry form. The suitable option depends on your consignment and route.",
  },
  {
    question: "Can I book household shifting from Mahadevapura?",
    answer:
      "You can submit an enquiry for household shifting and packers and movers services, subject to confirmation of the requested service.",
  },
  {
    question: "How can I get a transport price?",
    answer:
      "Use the Get Your Transport Price button to visit the contact page and share your transport requirements.",
  },
  {
    question: "Are trucks available for every destination?",
    answer:
      "Truck availability, vehicle type, freight charges and pickup arrangements depend on the route, load and requested date. These details must be confirmed before booking.",
  },
];

export default function ITIIndustrialEstateMahadevapuraTransportPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "ITI Industrial Estate Mahadevapura Transport",
        serviceType: "Truck transport and goods logistics",
        description:
          "Transport enquiry support for industrial goods, commercial cargo, full loads, part loads and household shifting from Mahadevapura, Bengaluru.",
        url: PAGE_URL,
        provider: {
          "@type": "Organization",
          name: "LOADZY",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Place",
          name: "ITI Industrial Estate, Mahadevapura, Bengaluru, Karnataka",
        },
      },
      {
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
            name: "ITI Industrial Estate Mahadevapura Transport",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-[#10182D] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:px-8 md:py-20">
          <div>
            <nav className="mb-6 text-sm text-slate-300">
              <Link href="/" className="hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>ITI Industrial Estate Transport</span>
            </nav>

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300">
              LOADZY · MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              ITI Industrial Estate, Mahadevapura Transport
            </h1>

            <p className="mt-6 max-w-2xl leading-7 text-slate-300">
              Arrange transport enquiries for industrial supplies, commercial
              goods, equipment, furniture, packaged products and household
              consignments from Mahadevapura, Bengaluru. Share your route and
              vehicle requirement with LOADZY to request transport support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-[#08A99F] px-6 py-3 font-bold text-white transition hover:bg-teal-600"
              >
                Book a Truck →
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/25 px-6 py-3 font-bold text-white transition hover:border-teal-300 hover:text-teal-300"
              >
                Get Your Transport Price
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-3">
              <p>✓ Full & Part Load</p>
              <p>✓ Industrial Goods</p>
              <p>✓ Shifting Support</p>
            </div>
          </div>

          <div id="transport-enquiry">
            <TransportEnquiryForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            OUR TRANSPORT SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Goods Transport from Mahadevapura
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Choose the service that best matches your consignment. Each service
            card opens its dedicated LOADZY service page for more information.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>
              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore {service.title} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              LOCAL TRANSPORT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Transport for Industrial and Business Requirements
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Businesses in and around Mahadevapura may need transport for
              equipment, furniture, commercial stock, packaged goods and
              industrial supplies. LOADZY allows customers to submit transport
              requirements and request confirmation of the suitable vehicle,
              route and freight price.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Industrial Consignments",
                description:
                  "Enquire about moving suitable equipment, components, materials and factory supplies.",
              },
              {
                title: "Commercial Goods",
                description:
                  "Arrange transport enquiries for business inventory, office furniture, packaged products and supplies.",
              },
              {
                title: "Relocation Transport",
                description:
                  "Request transport support for household goods, office items and relocation consignments.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            NEARBY AREAS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Explore Nearby Transport Locations
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Select a location below to open its dedicated transport page.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-500 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold group-hover:text-teal-700">
                  {area.name} Transport
                </h3>
                <span className="text-teal-700" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="mt-3 font-semibold text-teal-800">
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

      <section className="bg-[#10182D] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              INTERCITY TRANSPORT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Transport Routes from Mahadevapura
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Request transport between Mahadevapura and destinations across
              Karnataka and other major South Indian cities. Route availability,
              freight charges and vehicle type require confirmation.
            </p>
          </div>

          <h3 className="mt-10 text-2xl font-bold">Forward Routes</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={`forward-${city}`}
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-teal-300 hover:bg-white/10"
              >
                <span className="font-semibold">
                  Mahadevapura → {city}
                </span>
                <span className="mt-2 block text-sm text-teal-300">
                  Enquire about transport →
                </span>
              </Link>
            ))}
          </div>

          <h3 className="mt-12 text-2xl font-bold">Return Routes</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={`return-${city}`}
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-teal-300 hover:bg-white/10"
              >
                <span className="font-semibold">
                  {city} → Mahadevapura
                </span>
                <span className="mt-2 block text-sm text-teal-300">
                  Enquire about transport →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-[#08A99F] px-6 py-3 font-bold text-white transition hover:bg-teal-600"
            >
              Request Transport Price →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            WHY LOADZY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            A Simple Way to Request Transport
          </h2>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Share Your Requirement",
              description:
                "Provide pickup, delivery, load type, truck type and pickup date.",
            },
            {
              title: "Confirm Availability",
              description:
                "Confirm vehicle availability, route details and freight charges before proceeding.",
            },
            {
              title: "Plan Your Movement",
              description:
                "Use the confirmed details to coordinate your goods transport or shifting requirement.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 font-extrabold text-teal-800">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Mahadevapura Transport FAQs
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-teal-700 group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10182D] px-5 py-14 text-center text-white md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Need Transport from Mahadevapura?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your route and load details with LOADZY to request truck
            transport, industrial goods movement or shifting support.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[#08A99F] px-6 py-3 font-bold text-white transition hover:bg-teal-600"
            >
              Book a Truck →
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/25 px-6 py-3 font-bold text-white transition hover:border-teal-300 hover:text-teal-300"
            >
              Get Your Transport Price
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/25 px-6 py-3 font-bold text-white transition hover:border-teal-300 hover:text-teal-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}