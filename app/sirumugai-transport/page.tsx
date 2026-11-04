import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/sirumugai-transport`;

export const metadata: Metadata = {
  title: "Sirumugai Transport Service | Truck Booking | LOADZY",
  description:
    "Looking for truck booking in Sirumugai, Coimbatore district? Submit a LOADZY enquiry for goods transport, full load, part load, commercial consignments and household shifting.",
  keywords: [
    "Sirumugai transport service",
    "Sirumugai truck booking",
    "Sirumugai goods transport",
    "Sirumugai lorry booking",
    "Sirumugai full load transport",
    "Sirumugai part load transport",
    "Sirumugai commercial transport",
    "Sirumugai household shifting",
    "Sirumugai packers and movers",
    "truck booking in Coimbatore district",
    "Sirumugai to Coimbatore transport",
    "Coimbatore transport service",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Sirumugai Transport Service | Truck Booking | LOADZY",
    description:
      "Submit your Sirumugai truck booking and goods transport enquiry with LOADZY for local and intercity shipments.",
    url: PAGE_URL,
    siteName: "LOADZY",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    icon: "🚚",
    title: "Full Load Transport",
    description:
      "Enquire about a dedicated truck for larger consignments, business goods and bulk shipments.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Discuss transport options for smaller consignments that do not require a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan transport for furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Submit relocation requirements, including packing, loading and transportation.",
    href: "/packers-movers",
  },
  {
    icon: "🏬",
    title: "Commercial Transport",
    description:
      "Enquire about moving business stock, shop supplies and commercial consignments.",
    href: "/contact",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Discuss vehicle requirements for equipment, materials and industrial shipments.",
    href: "/contact",
  },
];

const destinations = [
  "Coimbatore",
  "Mettupalayam",
  "Annur",
  "Tiruppur",
  "Avinashi",
  "Erode",
  "Sathyamangalam",
  "Bhavanisagar",
  "Sulur",
  "Pollachi",
  "Ooty",
  "Coonoor",
  "Kotagiri",
  "Salem",
  "Karur",
  "Namakkal",
  "Dharapuram",
  "Palakkad",
  "Mysuru",
  "Bengaluru",
];

const returnDestinations = [
  "Coimbatore",
  "Mettupalayam",
  "Annur",
  "Tiruppur",
  "Avinashi",
  "Erode",
  "Sathyamangalam",
  "Bhavanisagar",
  "Sulur",
  "Pollachi",
  "Ooty",
  "Coonoor",
  "Kotagiri",
  "Salem",
  "Namakkal",
  "Karur",
  "Dharapuram",
  "Palakkad",
  "Mysuru",
  "Bengaluru",
  "Chennai",
  "Hosur",
  "Krishnagiri",
  "Dharmapuri",
  "Madurai",
  "Dindigul",
  "Tiruchirappalli",
  "Thanjavur",
  "Vellore",
  "Tirupattur",
];

const nearbyAreas = [
  { name: "Coimbatore", href: "/coimbatore-transport" },
  { name: "Mettupalayam", href: "#transport-enquiry" },
  { name: "Annur", href: "/annur-transport" },
  { name: "Sulur", href: "/sulur-transport" },
  { name: "Karumathampatti", href: "/karumathampatti-transport" },
  { name: "Madukkarai", href: "/madukkarai-transport" },
  { name: "Tiruppur", href: "#transport-enquiry" },
  { name: "Avinashi", href: "#transport-enquiry" },
  { name: "Erode", href: "#transport-enquiry" },
  { name: "Pollachi", href: "#transport-enquiry" },
  { name: "Ooty", href: "#transport-enquiry" },
  { name: "Coonoor", href: "#transport-enquiry" },
  { name: "Kotagiri", href: "#transport-enquiry" },
  { name: "Sathyamangalam", href: "#transport-enquiry" },
  { name: "Bhavanisagar", href: "#transport-enquiry" },
  { name: "Mettupalayam Road", href: "#transport-enquiry" },
  { name: "Karamadai", href: "#transport-enquiry" },
  { name: "Thekkampatti", href: "#transport-enquiry" },
  { name: "Velliyangadu", href: "#transport-enquiry" },
  { name: "Periyanaickenpalayam", href: "#transport-enquiry" },
  { name: "Thudiyalur", href: "#transport-enquiry" },
  { name: "Narasimhanaickenpalayam", href: "#transport-enquiry" },
  { name: "Pillur", href: "#transport-enquiry" },
  { name: "Vadavalli", href: "#transport-enquiry" },
  { name: "Thondamuthur", href: "#transport-enquiry" },
];

const faqs = [
  {
    question: "How can I book a truck in Sirumugai?",
    answer:
      "Complete the LOADZY enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit the form to save your enquiry and open WhatsApp when available.",
  },
  {
    question: "Can I request full load and part load transport?",
    answer:
      "Yes. Select Full Load Transport or Part Load Transport in the enquiry form and provide the shipment details for your route.",
  },
  {
    question: "Can I arrange transport from Sirumugai to Coimbatore?",
    answer:
      "Enter Sirumugai as your pickup location and Coimbatore as your delivery destination. Vehicle availability, route arrangements and charges must be confirmed for your shipment.",
  },
  {
    question: "Can I enquire about household shifting?",
    answer:
      "Yes. Select Household Shifting or Packers & Movers in the form and enter the pickup location, destination and preferred date.",
  },
  {
    question: "What truck types can I request?",
    answer:
      "The form includes Tata Ace, 7FT, 10FT, 14FT, 17FT, 20FT, 22FT, 24FT, 34FT and Multi-Axle trucks. Actual availability and suitability need to be confirmed.",
  },
  {
    question: "How are transport charges calculated?",
    answer:
      "Freight charges can depend on the route, distance, truck type, goods, load size, loading requirements and vehicle availability. The final price must be confirmed for your specific enquiry.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sirumugai Transport Service",
  serviceType: [
    "Truck Booking",
    "Goods Transport",
    "Full Load Transport",
    "Part Load Transport",
    "Commercial Transport",
    "Household Shifting",
  ],
  url: PAGE_URL,
  description:
    "Transport enquiry service for truck booking, goods movement and household relocation requirements in Sirumugai, Coimbatore district, Tamil Nadu.",
  areaServed: {
    "@type": "Place",
    name: "Sirumugai, Coimbatore district, Tamil Nadu, India",
  },
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sirumugai Transport Service",
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
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08A99F]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#10182D] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-md";

const routeClass =
  "flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 font-semibold text-[#10182D] transition hover:border-[#08A99F] hover:bg-teal-50";

export default function SirumugaiTransportPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10182D]">
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

      {/* Hero and enquiry form */}
      <section className="relative isolate bg-[#10182D] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(8,169,159,0.20),_transparent_48%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300"
            >
              <Link href="/" className="hover:text-[#08A99F]">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Sirumugai Transport</span>
            </nav>

            <div className="mb-7 inline-flex rounded-full border border-[#08A99F]/50 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wide text-teal-300">
              MOVE. CONNECT. DELIVER.
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Sirumugai Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Looking for goods transport in Sirumugai, Coimbatore district?
              Explore LOADZY for full load, part load, commercial goods,
              industrial consignments and household shifting enquiries for
              local and intercity routes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#transport-enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFC800] px-6 py-3.5 font-bold text-[#10182D] transition hover:bg-yellow-400"
              >
                Book a Truck →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 font-bold text-white transition hover:border-[#08A99F] hover:text-teal-300"
              >
                Contact LOADZY
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Full Load", "Part Load", "House Shifting", "Industrial Goods"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div id="transport-enquiry" className="scroll-mt-8">
            <TransportEnquiryForm />
          </div>
        </div>
      </section>

      {/* Transport services */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Transport Solutions"
            title="Goods Transport Services in Sirumugai"
            description="Explore transport options for commercial goods, household belongings, business supplies and other consignments. Choose a service that matches your shipment requirements."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className={cardClass}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-3xl">
                  <span aria-hidden="true">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex font-bold text-[#008F87] hover:text-[#10182D]"
                >
                  Explore service <span className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local transport information */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08A99F]">
              Local Transport
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Transport and Truck Booking in Sirumugai, Tamil Nadu
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-slate-600">
              <p>
                Sirumugai is in Coimbatore district, Tamil Nadu, and is
                connected to nearby towns and the wider Coimbatore transport
                network. Transport requirements can include local deliveries,
                commercial shipments, agricultural goods and household
                relocation.
              </p>
              <p>
                LOADZY offers an enquiry option for customers who need to
                discuss truck booking, vehicle types, pickup schedules and
                delivery destinations. Provide accurate shipment information
                to help assess your transport requirements.
              </p>
              <p>
                Whether you are moving business stock, materials, furniture or
                other goods, select the appropriate service in the form and
                enter your destination. Availability, pricing and delivery
                arrangements need to be confirmed for each shipment.
              </p>
            </div>
            <a
              href="#transport-enquiry"
              className="mt-7 inline-flex rounded-xl bg-[#FFC800] px-6 py-3.5 font-bold text-[#10182D] transition hover:bg-yellow-400"
            >
              Book a Truck →
            </a>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-6 text-white sm:p-8">
            <h3 className="text-2xl font-extrabold">Prepare Before Booking</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Pickup and delivery addresses",
                "Goods description and approximate load size",
                "Required truck type or capacity",
                "Preferred pickup date",
                "Loading and unloading requirements",
                "Contact details for confirmation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="font-bold text-[#08A99F]">✓</span>
                  <span className="leading-7 text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#transport-enquiry"
              className="mt-8 flex w-full justify-center rounded-xl bg-[#FFC800] px-5 py-4 text-center font-bold text-[#10182D] transition hover:bg-yellow-400"
            >
              Get Transport Assistance →
            </a>
          </div>
        </div>
      </section>

      {/* Outbound routes */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Intercity Transport"
            title="Major Destinations from Sirumugai"
            description="Explore example destinations for transport enquiries from Sirumugai. Share your shipment details to discuss suitable transport options."
          />
          <h3 className="mb-5 text-xl font-bold">Transport from Sirumugai</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <a
                key={destination}
                href="#transport-enquiry"
                className={routeClass}
              >
                <span>Sirumugai to {destination}</span>
                <span className="text-[#08A99F]">→</span>
              </a>
            ))}
          </div>

          <h3 className="mb-5 mt-10 text-xl font-bold">
            Transport to Sirumugai
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {returnDestinations.map((destination) => (
              <a
                key={destination}
                href="#transport-enquiry"
                className={routeClass}
              >
                <span>{destination} to Sirumugai</span>
                <span className="text-[#08A99F]">→</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            These destinations are examples for enquiries, not guarantees of
            truck availability, fixed delivery times or freight rates.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How It Works"
            title="How to Request Transport from Sirumugai"
            description="Share your shipment details with LOADZY and discuss the transport arrangements for your route."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "STEP 01",
                title: "Enter Locations",
                description: "Provide your pickup and delivery addresses.",
              },
              {
                number: "STEP 02",
                title: "Share Load Details",
                description: "Choose your service, truck type and pickup date.",
              },
              {
                number: "STEP 03",
                title: "Submit Enquiry",
                description: "Send your booking requirements through the form.",
              },
              {
                number: "STEP 04",
                title: "Confirm Details",
                description:
                  "Confirm availability, freight charges and timing.",
              },
            ].map((step) => (
              <article key={step.number} className={cardClass}>
                <p className="text-sm font-extrabold tracking-wider text-[#08A99F]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center">
            <a
              href="#transport-enquiry"
              className="inline-flex rounded-xl bg-[#08A99F] px-7 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Submit a Transport Enquiry →
            </a>
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nearby Areas"
            title="Nearby Locations Around Sirumugai"
            description="Explore transport information for nearby towns and the wider Coimbatore region when planning a truck booking, goods transport or household shifting enquiry."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className={routeClass}
              >
                <span>{area.name}</span>
                <span className="text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why LOADZY */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why LOADZY"
            title="A Simpler Way to Explore Transport Options"
            description="Share your shipment details, explore suitable transport options and confirm arrangements for your route with LOADZY."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "📍",
                title: "Route Enquiries",
                description: "Share pickup and delivery details for your shipment.",
              },
              {
                icon: "🚚",
                title: "Different Load Needs",
                description: "Explore full load, part load and suitable truck options.",
              },
              {
                icon: "💬",
                title: "Clear Requirements",
                description:
                  "Provide cargo details, loading needs and pickup preferences.",
              },
              {
                icon: "📦",
                title: "Multiple Use Cases",
                description:
                  "Enquire about industrial goods, commercial consignments and shifting.",
              },
            ].map((item) => (
              <article key={item.title} className={cardClass}>
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08A99F]">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Sirumugai Transport — Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold marker:hidden">
                  <span>{faq.question}</span>
                  <span className="text-xl text-[#08A99F] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#10182D] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
            LOADZY Transport
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            Looking for Goods Transport from Sirumugai?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Share your pickup location, destination and load requirements to
            explore suitable transport options for your shipment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#transport-enquiry"
              className="rounded-xl bg-[#FFC800] px-7 py-4 font-bold text-[#10182D] transition hover:bg-yellow-400"
            >
              Book a Truck →
            </a>
            <Link
              href="/"
              className="rounded-xl border border-white/25 px-7 py-4 font-bold text-white transition hover:border-[#08A99F]"
            >
              Back to LOADZY Home
            </Link>
          </div>
          <p className="mt-7 text-sm text-slate-400">
            LOADZY — MOVE. CONNECT. DELIVER.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#10182D] px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} LOADZY. MOVE. CONNECT. DELIVER.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/" className="hover:text-teal-300">
              Home
            </Link>
            <Link href="/contact" className="hover:text-teal-300">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-teal-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-300">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
