import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-aerospace-park-transport`;

const LOCATION = "Bengaluru Aerospace Park";

export const metadata: Metadata = {
  title: "Bengaluru Aerospace Park Transport | Truck Booking | LOADZY",
  description:
    "Arrange transport enquiries from Bengaluru Aerospace Park with LOADZY. Explore truck transport, commercial cargo, full-load and part-load options with destination and return-route enquiries.",
  keywords: [
    "Bengaluru Aerospace Park transport",
    "Aerospace Park truck booking",
    "Bengaluru goods transport",
    "industrial goods transport Bengaluru",
    "commercial transport Bengaluru",
    "full load truck booking",
    "part load transport",
    "Aerospace Park to Chennai transport",
    "Chennai to Aerospace Park transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bengaluru Aerospace Park Transport | LOADZY",
    description:
      "Submit a transport enquiry for goods movement from Bengaluru Aerospace Park to major cities and for return routes.",
    url: PAGE_URL,
    siteName: "LOADZY",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    title: "Full Load Transport",
    description:
      "Enquire about a truck for a shipment that requires most or all of the vehicle's carrying capacity.",
    href: "/full-load",
    icon: "🚛",
  },
  {
    title: "Part Load Transport",
    description:
      "Ask about options for moving smaller consignments, subject to route and vehicle availability.",
    href: "/part-load",
    icon: "📦",
  },
  {
    title: "Household Shifting",
    description:
      "Submit details for household goods transportation and shifting requirements.",
    href: "/house-shifting",
    icon: "🏠",
  },
  {
    title: "Packers & Movers",
    description:
      "Enquire about transport support for residential and commercial moves.",
    href: "/packers-movers",
    icon: "🛋️",
  },
  {
    title: "Commercial Transport",
    description:
      "Discuss transportation needs for commercial goods and business consignments.",
    href: "/commercial-transport",
    icon: "🏢",
  },
  {
    title: "Industrial Transport",
    description:
      "Submit enquiries for suitable industrial cargo and business shipments.",
    href: "/industrial-transport",
    icon: "🏭",
  },
];

const destinations = [
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

const faqs = [
  {
    question: `Can I book a truck from ${LOCATION}?`,
    answer:
      "You can submit a LOADZY transport enquiry with your pickup, delivery, vehicle type and preferred date. Truck availability and final charges must be confirmed.",
  },
  {
    question: "Which truck types can I enquire about?",
    answer:
      "Available enquiry options include Tata Ace and trucks ranging from 7FT to 34FT, as well as multi-axle trucks. The suitable vehicle depends on cargo details and availability.",
  },
  {
    question: "Can I enquire about full-load and part-load transport?",
    answer:
      "Yes. Select full-load or part-load transport in the enquiry form. The suitable option depends on shipment size, route and vehicle availability.",
  },
  {
    question: `Can I enquire about transport to ${LOCATION}?`,
    answer:
      "Yes. Use the return-route links to open the LOADZY contact page and provide your pickup address, destination, cargo details and preferred pickup date.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on route distance, vehicle type, cargo weight and dimensions, loading requirements, pickup date and vehicle availability. Confirm the final quote before booking.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. An enquiry does not automatically confirm a vehicle, price or pickup time. Wait for confirmation of availability and transport arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bengaluru Aerospace Park Goods Transport Enquiries",
  description:
    "Transport enquiries for commercial goods, industrial cargo, full-load transport, part-load transport and household shifting.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Industrial transport",
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
    name: "Bengaluru Aerospace Park, Karnataka, India",
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
      name: "Bengaluru Aerospace Park Transport",
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

export default function BengaluruAerospaceParkTransportPage() {
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
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div className="mb-8 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-teal-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-teal-300">
              Bengaluru Aerospace Park Transport
            </span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="pt-2">
              <span className="inline-flex rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-bold text-teal-300">
                MOVE. CONNECT. DELIVER.
              </span>

              <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Transport Service in{" "}
                <span className="text-[#FFD23F]">
                  Bengaluru Aerospace Park
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Looking for a truck for goods transport, commercial
                deliveries, industrial cargo or household shifting? Send your
                transport enquiry through LOADZY with your pickup location,
                destination, truck type and preferred date.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFD23F] px-6 py-4 font-bold text-[#10182D] transition hover:bg-yellow-300"
                >
                  Book a Truck →
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Get Your Transport Price
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-2xl">🚚</span>
                  <h2 className="mt-3 font-bold">Truck Enquiry</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Share your vehicle requirements.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-2xl">📦</span>
                  <h2 className="mt-3 font-bold">Goods Transport</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Submit shipment details.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-2xl">📍</span>
                  <h2 className="mt-3 font-bold">Route Enquiry</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Ask about your planned route.
                  </p>
                </div>
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
            OUR TRANSPORT SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10182D] md:text-4xl">
            Transport Options for Your Requirements
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Choose a service to learn more, or submit your requirements through
            the LOADZY transport enquiry form.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg"
            >
              <span className="text-3xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#10182D]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <span className="mt-4 inline-flex font-bold text-teal-700">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCAL INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
              LOCAL TRANSPORT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#10182D]">
              Goods Transport from Bengaluru Aerospace Park
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Businesses and customers looking for transportation in the
              Bengaluru Aerospace Park area can submit enquiries for suitable
              vehicle options and goods movement. Share the exact pickup
              address, delivery destination, cargo description and preferred
              date so the requirement can be reviewed.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Transport requirements can differ based on the type of goods,
              shipment size, loading access, vehicle dimensions and delivery
              schedule. Confirm the vehicle, freight charge and pickup
              arrangements before finalising a booking.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-[#10182D] px-6 py-3 font-bold text-white transition hover:bg-teal-700"
            >
              Enquire About Transport →
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-extrabold text-[#10182D]">
              Information to Share Before Booking
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Exact pickup and delivery addresses",
                "Type of goods and shipment quantity",
                "Required truck type and size",
                "Loading and unloading requirements",
                "Preferred pickup date and timing",
                "Any special handling or access requirements",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="font-bold text-teal-600">✓</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEARBY PAGES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
            NEARBY TRANSPORT PAGES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10182D]">
            Explore Other Bengaluru Transport Areas
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Open another LOADZY area page to review transport enquiry options
            for that location.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Hardware Park Transport",
              href: "/hardware-park-transport",
            },
            {
              name: "EPIP 1st Phase Industrial Area",
              href: "/epip-1st-phase-industrial-area-transport",
            },
            {
              name: "EPIP 2nd Phase Industrial Area",
              href: "/epip-2nd-phase-industrial-area-transport",
            },
          ].map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-teal-400 hover:bg-teal-50"
            >
              <h3 className="font-bold text-[#10182D]">{area.name}</h3>
              <p className="mt-2 text-sm text-teal-700">
                View transport page →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* OUTBOUND ROUTES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
              TRANSPORT ROUTES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#10182D] md:text-4xl">
              Aerospace Park to Major Cities
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Need to move goods to another city? Select a destination to
              continue to the LOADZY contact page and share your route details.
              Actual service and truck availability require confirmation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center transition hover:border-teal-400 hover:shadow-md"
              >
                <h3 className="font-bold text-[#10182D]">
                  Aerospace Park to {city}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Enquire about transport →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RETURN ROUTES */}
      <section className="bg-[#10182D] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              RETURN TRANSPORT ROUTES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Need a Truck to Aerospace Park?
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Submit an enquiry for goods moving from another city to
              Bengaluru Aerospace Park. Add your pickup address, shipment
              details and preferred pickup date so your requirement can be
              reviewed.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {destinations
              .filter((city) => city !== "Bengaluru")
              .map((city) => (
                <Link
                  key={city}
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold transition hover:border-teal-300 hover:bg-white/10"
                >
                  {city} to Aerospace Park
                </Link>
              ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-[#FFD23F] px-6 py-4 font-bold text-[#10182D] transition hover:bg-yellow-300"
            >
              Enquire About a Return Route →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
              WHY LOADZY
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#10182D] md:text-4xl">
              A Simple Way to Submit Transport Enquiries
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              LOADZY helps customers share their transport requirements in
              one place. Provide your route, cargo details, preferred truck
              type and date to begin the enquiry process.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Share Your Route",
                text: "Enter your pickup and delivery locations.",
              },
              {
                title: "Choose a Vehicle",
                text: "Select a truck type that suits your requirement.",
              },
              {
                title: "Send an Enquiry",
                text: "Submit your details and continue to WhatsApp.",
              },
              {
                title: "Confirm Details",
                text: "Confirm availability, freight charges and timing.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 font-extrabold text-teal-700">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-bold text-[#10182D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING STEPS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
              HOW IT WORKS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#10182D]">
              How to Enquire for a Truck
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "01. Enter Details",
                text: "Fill in your name, phone number, pickup, destination, service, truck type and date.",
              },
              {
                title: "02. Submit Enquiry",
                text: "Submit the form. Your enquiry is sent to the LOADZY leads database.",
              },
              {
                title: "03. Confirm Transport",
                text: "Continue to WhatsApp and confirm truck availability, price and pickup arrangements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-extrabold text-[#10182D]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10182D] md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none pr-6 font-bold text-[#10182D] marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-teal-600 transition group-open:rotate-45">
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
      <section className="bg-[#10182D] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold">
                Need Transport from or to Aerospace Park?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Send your route, cargo and truck requirements to start a
                transport enquiry with LOADZY.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#FFD23F] px-6 py-4 font-bold text-[#10182D] transition hover:bg-yellow-300"
              >
                Book a Truck →
              </Link>

              <Link
                href="/"
                className="inline-flex rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Back to LOADZY Home
              </Link>
            </div>
          </div>

          <p className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
            LOADZY — MOVE. CONNECT. DELIVER.
          </p>
        </div>
      </section>
    </main>
  );
}