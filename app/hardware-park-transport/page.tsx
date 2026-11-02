import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/hardware-park-transport`;

export const metadata: Metadata = {
  title: "Hardware Park Transport | Truck Booking | LOADZY",
  description:
    "Book trucks for goods transport to and from Hardware Park, Bengaluru. Enquire about industrial cargo, commercial transport, full loads, part loads and freight.",
  keywords: [
    "Hardware Park transport",
    "Hardware Park truck booking",
    "Hardware Park goods transport",
    "Hardware Park freight service",
    "Hardware Park to Chennai transport",
    "Chennai to Hardware Park transport",
    "Bengaluru industrial transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Hardware Park Transport Service | LOADZY",
    description:
      "Transport and truck booking enquiries for Hardware Park, Bengaluru, and major Indian cities.",
    url: PAGE_URL,
    siteName: "LOADZY",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const outgoingRoutes = [
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Coimbatore",
  "Mysuru",
  "Vellore",
  "Pune",
  "Mumbai",
  "Hosur",
  "Tirupattur",
  "Salem",
  "Madurai",
];

const returnRoutes = [
  "Chennai",
  "Hyderabad",
  "Coimbatore",
  "Mysuru",
  "Hosur",
  "Bengaluru",
  "Vellore",
  "Pune",
  "Mumbai",
  "Salem",
  "Madurai",
  "Tirupattur",
];

const services = [
  {
    title: "Full Load Transport",
    description: "Truck options for larger commercial and industrial shipments.",
    href: "/full-load",
  },
  {
    title: "Part Load Transport",
    description: "Enquire about transporting smaller shipments.",
    href: "/part-load",
  },
  {
    title: "Industrial Transport",
    description: "Transport enquiries for machinery, materials and business cargo.",
    href: "/industrial-transport",
  },
  {
    title: "Commercial Transport",
    description: "Goods transport for commercial and business requirements.",
    href: "/commercial-transport",
  },
  {
    title: "Packers & Movers",
    description: "Transport support for relocation requirements.",
    href: "/packers-movers",
  },
  {
    title: "Household Shifting",
    description: "Enquire about truck options for household goods.",
    href: "/house-shifting",
  },
];

const faqs = [
  {
    question: "Can I book a truck from Hardware Park?",
    answer:
      "Yes. Submit the LOADZY transport enquiry with your pickup, delivery location, truck type and preferred pickup date. Truck availability and charges need to be confirmed.",
  },
  {
    question: "Can I arrange transport to Hardware Park from another city?",
    answer:
      "You can submit an enquiry for transport to Hardware Park from cities such as Chennai, Hyderabad, Coimbatore, Mysuru and other locations.",
  },
  {
    question: "Which truck types can I enquire about?",
    answer:
      "Available options shown in the enquiry form include Tata Ace, 7FT, 10FT, 14FT, 17FT, 20FT, 22FT, 24FT, 34FT and multi-axle trucks. Availability depends on your route and requirements.",
  },
  {
    question: "How can I confirm the freight price?",
    answer:
      "Submit your transport requirements through the enquiry form or contact page. The final freight price and truck availability must be confirmed for your shipment.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hardware Park Goods Transport Service",
  serviceType: "Truck booking and goods transportation",
  url: PAGE_URL,
  description:
    "Transport enquiry service for goods moving to and from Hardware Park, Bengaluru.",
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: [
    { "@type": "Place", name: "Hardware Park, Bengaluru" },
    { "@type": "City", name: "Bengaluru" },
    { "@type": "Country", name: "India" },
  ],
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
      name: "Hardware Park Transport",
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

function RouteCard({ route }: { route: string }) {
  return (
    <Link
      href="/contact"
      className="group flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-md"
    >
      <span className="font-bold text-slate-900 group-hover:text-teal-700">
        {route}
      </span>
      <span className="mt-2 text-sm text-slate-500">
        Enquire about transport →
      </span>
    </Link>
  );
}

export default function HardwareParkTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#10182D] via-[#14213B] to-[#17364A] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div className="mb-8 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-teal-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-teal-300">Hardware Park Transport</span>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
            <div className="pt-2">
              <span className="inline-flex rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-bold text-teal-300">
                MOVE. CONNECT. DELIVER.
              </span>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Transport Service in{" "}
                <span className="text-[#FFD33D]">Hardware Park</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
                Need a truck for industrial cargo, commercial deliveries,
                machinery, goods transport or household shifting? Send your
                transport enquiry through LOADZY with your pickup location,
                destination, truck type and preferred date.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#FFD33D] px-6 py-4 font-bold text-[#10182D] transition hover:bg-yellow-300"
                >
                  Book a Truck →
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Get Your Transport Price
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  "Truck Booking Enquiries",
                  "Full & Part Loads",
                  "Business Goods Transport",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <TransportEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            LOADZY TRANSPORT SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Transport Options for Hardware Park
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Choose a suitable service and submit your requirements. The final
            vehicle type, availability and freight charges depend on your load
            and route.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold group-hover:text-teal-700">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <span className="mt-5 inline-block font-bold text-teal-700">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCAL TRANSPORT INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              LOCAL TRANSPORT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Goods Transport to and from Hardware Park
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Businesses arranging goods movement to or from Hardware Park
              can use the LOADZY enquiry form to share shipment requirements.
              Provide accurate pickup and delivery details, the type of goods,
              required truck and preferred pickup date so the request can be
              reviewed.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              For industrial and commercial shipments, confirm vehicle
              suitability, loading arrangements, route details, freight charges
              and delivery expectations before finalizing the booking.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-[#08A99F] px-6 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Send a Transport Enquiry →
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <h3 className="text-xl font-extrabold">
              What to include in your enquiry
            </h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              {[
                "Pickup and delivery addresses",
                "Goods description and approximate load details",
                "Required truck type",
                "Preferred pickup date",
                "Contact number for confirmation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 font-bold text-teal-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUTGOING ROUTES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            TRANSPORT ROUTES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Hardware Park to Major Cities
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Need to move goods from Hardware Park to another city? Select a
            destination to continue to the LOADZY contact page and share your
            route details. Actual service and truck availability require
            confirmation.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outgoingRoutes.map((city) => (
            <RouteCard
              key={city}
              route={`Hardware Park to ${city}`}
            />
          ))}
        </div>
      </section>

      {/* RETURN ROUTES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              RETURN TRANSPORT ROUTES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Major Cities to Hardware Park
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Looking for goods transport to Hardware Park from another city?
              Choose your starting city below and submit an enquiry with your
              pickup address, shipment details and preferred date.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {returnRoutes.map((city) => (
              <RouteCard
                key={city}
                route={`${city} to Hardware Park`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">
              WHY LOADZY
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Need a Truck to or from Hardware Park?
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Share your transport requirement through LOADZY. Include the
              route, truck type, pickup date and shipment details to help
              determine the appropriate transport option. Confirm all charges
              and availability before booking.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#FFD33D] px-6 py-4 font-bold text-[#10182D] transition hover:bg-yellow-300"
            >
              Book a Truck →
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Get Your Transport Price
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              SIMPLE PROCESS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              How to Enquire for a Truck
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Share Your Route",
                description:
                  "Enter your pickup and delivery locations with the preferred pickup date.",
              },
              {
                number: "02",
                title: "Provide Load Details",
                description:
                  "Select the required service and truck type for your shipment.",
              },
              {
                number: "03",
                title: "Confirm Your Booking",
                description:
                  "Discuss truck availability, freight charges and other arrangements before confirming.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-extrabold text-teal-700">
                  STEP {step.number}
                </span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Hardware Park Transport FAQs
          </h2>
        </div>

        <div className="mt-9 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none pr-6 font-bold text-slate-900 marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-teal-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-[#10182D] to-[#17364A] px-6 py-10 text-center text-white md:px-12 md:py-14">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Arrange Transport for Hardware Park
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Send your pickup location, destination, truck requirement and
            preferred date to start your transport enquiry with LOADZY.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#FFD33D] px-6 py-4 font-bold text-[#10182D] transition hover:bg-yellow-300"
            >
              Contact LOADZY →
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10"
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