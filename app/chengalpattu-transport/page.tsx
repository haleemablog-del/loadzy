import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/chengalpattu-transport`;

export const metadata: Metadata = {
  title: "Chengalpattu Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Chengalpattu, Tamil Nadu. Enquire about full load, part load, commercial freight, household shifting and intercity transport with LOADZY.",
  keywords: [
    "Chengalpattu transport service",
    "Chengalpattu truck booking",
    "Chengalpattu goods transport",
    "Chengalpattu lorry booking",
    "Chengalpattu full load transport",
    "Chengalpattu part load transport",
    "Chengalpattu house shifting",
    "Chengalpattu packers and movers",
    "Chengalpattu to Chennai transport",
    "Chennai to Chengalpattu transport",
    "Chengalpattu to Tambaram transport",
    "Chengalpattu to Kanchipuram transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Chengalpattu Transport Service | LOADZY",
    description:
      "Submit your truck booking, goods transport, commercial freight or household shifting enquiry from Chengalpattu.",
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
      "Enquire about dedicated truck options for larger consignments and commercial goods.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that may not need a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "Household Shifting",
    description:
      "Arrange transportation for furniture, appliances, cartons and household belongings.",
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
      "Enquire about moving shop stock, business supplies and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Share shipment details for transport enquiries involving materials and equipment.",
    href: "/industrial-transport",
  },
];

const nearbyAreas = [
  { name: "Chennai", slug: "chennai" },
  { name: "Tambaram", slug: "tambaram" },
  { name: "Pallavaram", slug: "pallavaram" },
  { name: "Chromepet", slug: "chromepet" },
  { name: "Maraimalai Nagar", slug: "maraimalai-nagar" },
  { name: "Guduvanchery", slug: "guduvanchery" },
  { name: "Singaperumal Koil", slug: "singaperumal-koil" },
  { name: "Mahindra World City", slug: "mahindra-world-city" },
  { name: "Sriperumbudur", slug: "sriperumbudur" },
  { name: "Kanchipuram", slug: "kanchipuram" },
  { name: "Kelambakkam", slug: "kelambakkam" },
  { name: "Poonamallee", slug: "poonamallee" },
  { name: "Vellore", slug: "vellore" },
  { name: "Villupuram", slug: "villupuram" },
  { name: "Puducherry", slug: "puducherry" },
  { name: "Tiruvallur", slug: "tiruvallur" },
];

const destinations = [
  "Chennai",
  "Tambaram",
  "Kanchipuram",
  "Vellore",
  "Tiruvannamalai",
  "Villupuram",
  "Puducherry",
  "Salem",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Tirunelveli",
  "Hosur",
  "Krishnagiri",
  "Erode",
  "Tiruppur",
  "Dindigul",
  "Thanjavur",
  "Bengaluru",
  "Tindivanam",
];

const faqs = [
  {
    question: "How can I book a truck in Chengalpattu?",
    answer:
      "Fill in the LOADZY transport enquiry form with your name, phone number, pickup location, destination, service, truck type and pickup date. Submit your enquiry and confirm vehicle availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I request full load and part load transport?",
    answer:
      "Yes. Select the appropriate service in the enquiry form. Vehicle suitability, availability and freight charges depend on your goods, route and pickup date.",
  },
  {
    question: "Can I arrange household shifting from Chengalpattu?",
    answer:
      "You can submit an enquiry for household shifting or packers and movers. Provide your pickup and delivery locations and preferred date.",
  },
  {
    question: "Can I book transport from Chengalpattu to Chennai?",
    answer:
      "Yes. Enter Chengalpattu as your pickup location and Chennai as your destination, or enter the locations in the opposite direction for your transport enquiry.",
  },
  {
    question: "Are truck rates fixed on the website?",
    answer:
      "Freight charges depend on the route, truck type, goods, load requirements and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Which locations can I enquire about?",
    answer:
      "You can submit transport enquiries for Chengalpattu, nearby towns, Chennai and other intercity destinations by entering your exact pickup and delivery locations.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "TransportationService",
  name: "LOADZY Chengalpattu Transport Services",
  url: PAGE_URL,
  description:
    "Truck booking, goods transport, full load, part load and household shifting enquiries in Chengalpattu, Tamil Nadu.",
  areaServed: {
    "@type": "Place",
    name: "Chengalpattu, Tamil Nadu, India",
  },
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
    telephone: "+91-9019499448",
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
      name: "Chengalpattu Transport",
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

export default function ChengalpattuTransportPage() {
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

      {/* HERO AND ENQUIRY FORM */}
      <section className="relative overflow-hidden bg-[#10182D] text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:py-16">
          <div className="pt-2">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm text-slate-300"
            >
              <Link href="/" className="transition hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Chengalpattu Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Chengalpattu Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Looking for goods transport in Chengalpattu, Tamil Nadu? Submit
              your requirements for full load, part load, household shifting,
              packers and movers, commercial goods and intercity transport with
              LOADZY.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#chengalpattu-enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Book a Truck →
              </a>

              <Link
                href="/truck-rates"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
              >
                View Truck Rates
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {[
                "🚚 Truck Booking",
                "📦 Full & Part Load",
                "🏠 House Shifting",
                "🏭 Commercial Goods",
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

          <div id="chengalpattu-enquiry" className="scroll-mt-6">
            <TransportEnquiryForm />
          </div>
        </div>
      </section>

      {/* TRANSPORT SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Goods Transport Services in Chengalpattu
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household belongings, business stock,
          commercial freight and goods movement from Chengalpattu to nearby
          towns and other cities.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
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

              <Link
                href={service.href}
                className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
              >
                Explore service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* LOCAL TRANSPORT INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Local transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Truck Booking and Goods Movement in Chengalpattu
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Chengalpattu is an important town in Tamil Nadu, with road
              connections to Chennai, nearby towns and other commercial
              destinations. Transport requirements may include business
              consignments, shop supplies, equipment, household belongings and
              other goods.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and delivery
              locations, goods description, approximate load size, required
              truck type and preferred pickup date. These details help with
              assessing a suitable transport option.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Vehicle availability, rates and schedules must be confirmed for
              your specific enquiry before transport is finalised.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white sm:p-9">
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

            <a
              href="#chengalpattu-enquiry"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Submit Transport Enquiry →
            </a>
          </div>
        </div>
      </section>

      {/* NEARBY TRANSPORT PAGES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Nearby locations
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Nearby Areas Around Chengalpattu
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore dedicated LOADZY transport pages for nearby towns and
          localities. Use these pages to learn more about local transport
          enquiries and services.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nearbyAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}-transport`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-bold text-slate-900 group-hover:text-teal-800">
                🚚 {area.name} Transport
              </span>
              <span className="mt-2 block text-sm font-semibold text-teal-700">
                Explore locality →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* INTERCITY ROUTES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transport Routes To and From Chengalpattu
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore common transport destinations in both directions. Enter
            your exact pickup and delivery locations in the enquiry form to
            request transport.
          </p>

          <h3 className="mt-8 text-xl font-bold text-slate-900">
            Transport from Chengalpattu
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((city) => (
              <div
                key={`from-${city}`}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="font-semibold text-slate-800">
                  Chengalpattu to {city}
                </p>
                <a
                  href="#chengalpattu-enquiry"
                  className="mt-2 inline-block text-sm font-bold text-teal-700 hover:text-teal-900"
                >
                  Request transport →
                </a>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-bold text-slate-900">
            Transport to Chengalpattu
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((city) => (
              <div
                key={`to-${city}`}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="font-semibold text-slate-800">
                  {city} to Chengalpattu
                </p>
                <a
                  href="#chengalpattu-enquiry"
                  className="mt-2 inline-block text-sm font-bold text-teal-700 hover:text-teal-900"
                >
                  Request transport →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How to Request Transport from Chengalpattu
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share your requirements through the enquiry form and confirm the
            transport details before your booking.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              text: "Send your transport requirements through the form.",
            },
            {
              number: "04",
              title: "Confirm Details",
              text: "Confirm availability, freight charges and timing.",
            },
          ].map((step) => (
            <article
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
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-20">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Frequently asked questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Chengalpattu Transport FAQs
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#10182D] px-5 py-16 text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-teal-300">
            LOADZY Transport
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Looking for a Truck in Chengalpattu?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination, truck type and preferred
            date to submit your transport enquiry to LOADZY.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#chengalpattu-enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Book a Truck →
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
            >
              Contact LOADZY
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
