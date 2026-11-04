import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/irugur-transport`;

export const metadata: Metadata = {
  title: "Irugur Transport Service | Truck Booking | LOADZY",
  description:
    "Looking for truck booking and goods transport in Irugur, Coimbatore? Contact LOADZY for full load, part load, commercial transport, industrial goods movement and household shifting enquiries.",
  keywords: [
    "Irugur transport service",
    "Irugur truck booking",
    "Irugur goods transport",
    "Irugur lorry booking",
    "Irugur full load transport",
    "Irugur part load transport",
    "Irugur industrial transport",
    "Irugur commercial transport",
    "truck booking in Coimbatore",
    "Irugur packers and movers",
    "Irugur household shifting",
    "Coimbatore transport service",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Irugur Transport Service | Truck Booking | LOADZY",
    description:
      "Find transport options for goods movement from Irugur, Coimbatore. Submit your truck booking enquiry with LOADZY.",
    url: PAGE_URL,
    siteName: "LOADZY",
    type: "website",
    locale: "en_IN",
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
      "Enquire about a dedicated truck for larger shipments, commercial consignments and business goods.",
    href: "/full-load",
  },
  {
    title: "Part Load Transport",
    description:
      "Ask about transport options for smaller shipments that do not require a full truck.",
    href: "/part-load",
  },
  {
    title: "Household Shifting",
    description:
      "Plan the transportation of household furniture, appliances, cartons and personal belongings.",
    href: "/house-shifting",
  },
  {
    title: "Packers & Movers",
    description:
      "Enquire about packing, loading, transportation and relocation requirements.",
    href: "/packers-movers",
  },
  {
    title: "Commercial Transport",
    description:
      "Arrange transport enquiries for business stock, shop supplies and commercial consignments.",
    href: "/contact",
  },
  {
    title: "Industrial Goods Transport",
    description:
      "Discuss truck requirements for equipment, materials, components and industrial goods.",
    href: "/contact",
  },
];

const destinations = [
  "Coimbatore",
  "Sulur",
  "Singanallur",
  "Peelamedu",
  "Tiruppur",
  "Pollachi",
  "Mettupalayam",
  "Erode",
];

const nearbyAreas = [
  {
    name: "Sulur",
    href: "/sulur-transport",
  },
  {
    name: "Karumathampatti",
    href: "/karumathampatti-transport",
  },
  {
    name: "Madukkarai",
    href: "/madukkarai-transport",
  },
  {
    name: "Annur",
    href: "/annur-transport",
  },
  {
    name: "Coimbatore",
    href: "/coimbatore-transport",
  },
];

const faqs = [
  {
    question: "How can I book a truck in Irugur?",
    answer:
      "Fill in the LOADZY transport enquiry form with your name, mobile number, pickup location, delivery location, service, truck type and preferred pickup date. Submit the form to save your enquiry and open WhatsApp.",
  },
  {
    question: "Can I enquire about full load and part load transport?",
    answer:
      "Yes. Select Full Load Transport or Part Load Transport in the enquiry form and provide your pickup and delivery details.",
  },
  {
    question: "Can I transport commercial and industrial goods from Irugur?",
    answer:
      "You can submit an enquiry for commercial consignments, industrial materials, equipment and other goods. Truck suitability and availability must be confirmed for your shipment.",
  },
  {
    question: "Can I book transport from Irugur to another city?",
    answer:
      "Yes. Enter Irugur as your pickup location and provide your destination city or address in the delivery field. Intercity transport arrangements depend on the shipment and vehicle availability.",
  },
  {
    question: "Does LOADZY provide household shifting enquiries?",
    answer:
      "Yes. Select Household Shifting or Packers & Movers in the enquiry form and provide the pickup, destination and preferred date.",
  },
  {
    question: "How are transport charges calculated?",
    answer:
      "Transport charges depend on the route, truck type, goods, load size, distance, loading requirements and vehicle availability. The final price needs to be confirmed for your shipment.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Irugur Transport Service",
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
    "Transport enquiry service for truck booking, goods movement and relocation requirements in Irugur, Coimbatore, Tamil Nadu.",
  areaServed: {
    "@type": "Place",
    name: "Irugur, Coimbatore, Tamil Nadu, India",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Irugur Transport Service",
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
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08A99F]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-300">{description}</p>
    </div>
  );
}

export default function IrugurTransportPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10182D] text-white">
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
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(8,169,159,0.18),_transparent_45%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300"
            >
              <Link href="/" className="transition hover:text-[#08A99F]">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Irugur Transport</span>
            </nav>

            <div className="mb-7 inline-flex rounded-full border border-[#08A99F]/50 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wide text-teal-300">
              MOVE. CONNECT. DELIVER.
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Irugur Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Looking for goods transport in Irugur, Coimbatore district?
              Submit a LOADZY enquiry for full load, part load, commercial
              consignments, industrial goods and household shifting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#transport-enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-[#08A99F] px-6 py-3.5 font-bold text-white transition hover:bg-teal-600"
              >
                Book a Truck
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:border-[#08A99F] hover:text-teal-300"
              >
                Contact LOADZY
              </Link>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Truck Booking Enquiries",
                "Multiple Truck Types",
                "Local & Intercity Routes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-semibold text-slate-200"
                >
                  <span className="mr-2 text-[#08A99F]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="transport-enquiry" className="scroll-mt-8">
            <TransportEnquiryForm />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Transport Services"
            title="Transport Options in Irugur"
            description="Choose the service that best matches your goods, shipment size and relocation requirements."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-[#182239] p-6 transition hover:-translate-y-1 hover:border-[#08A99F]/60"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#08A99F]/15 font-extrabold text-teal-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex font-bold text-teal-300 transition group-hover:text-white"
                >
                  Enquire now <span className="ml-2" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local transport information */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08A99F]">
              Local Transport
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Goods Transport from Irugur, Coimbatore
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-slate-300">
              <p>
                Irugur is in the Coimbatore area of Tamil Nadu and is connected
                to surrounding urban and industrial locations. Transport
                requirements can vary from small commercial consignments to
                larger business shipments and household moves.
              </p>
              <p>
                LOADZY provides an enquiry option for customers who need to
                discuss truck booking, vehicle type, pickup schedules and
                delivery destinations. Provide accurate shipment details so
                your transport requirement can be assessed.
              </p>
              <p>
                For industrial materials, shop goods, equipment, furniture or
                other consignments, select the relevant service in the form
                and enter your destination. Vehicle availability, freight
                charges and delivery arrangements must be confirmed.
              </p>
            </div>

            <a
              href="#transport-enquiry"
              className="mt-7 inline-flex rounded-xl bg-[#08A99F] px-6 py-3.5 font-bold text-white transition hover:bg-teal-600"
            >
              Send Your Transport Enquiry
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1B2941] to-[#142033] p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold">
              What can you enquire about?
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Share your transport requirements for a suitable discussion
              about the next steps.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Commercial goods and business consignments",
                "Industrial materials and equipment",
                "Full truck and part load requirements",
                "Household furniture and relocation goods",
                "Local deliveries and intercity shipments",
                "Pickup date and truck type requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#08A99F]/15 text-sm font-bold text-teal-300">
                    ✓
                  </span>
                  <span className="leading-7 text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Transport Destinations"
            title="Transport Routes from Irugur"
            description="Planning a delivery from Irugur? Use the enquiry form to specify your destination and preferred pickup date."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <div
                key={destination}
                className="rounded-xl border border-white/10 bg-[#182239] p-5"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Pickup: Irugur
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Irugur to {destination}
                </h3>
                <a
                  href="#transport-enquiry"
                  className="mt-3 inline-flex text-sm font-semibold text-slate-300 transition hover:text-teal-300"
                >
                  Enquire about this route →
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm leading-6 text-slate-400">
            The destinations above are examples for transport enquiries, not a
            guarantee of current truck availability or fixed freight rates.
          </p>
        </div>
      </section>

      {/* Booking process */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How It Works"
            title="How to Send a LOADZY Enquiry"
            description="Provide your transport details so your requirement can be reviewed."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Enter Shipment Details",
                description:
                  "Provide your name, phone number, pickup and delivery locations.",
              },
              {
                number: "02",
                title: "Choose Your Requirements",
                description:
                  "Select a service, suitable truck type and preferred pickup date.",
              },
              {
                number: "03",
                title: "Submit Your Enquiry",
                description:
                  "Submit the form to save the enquiry and open WhatsApp when available.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#182239] p-6"
              >
                <p className="text-3xl font-extrabold text-[#08A99F]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nearby Locations"
            title="Explore Nearby Transport Pages"
            description="Explore LOADZY transport information for other locations around the Coimbatore region."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-full border border-white/15 bg-[#182239] px-5 py-3 font-semibold text-slate-200 transition hover:border-[#08A99F] hover:text-teal-300"
              >
                {area.name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Irugur Transport Service FAQs"
            description="Answers to common questions about truck booking and transport enquiries."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-[#182239] p-5 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-white marker:hidden">
                  <span>{faq.question}</span>
                  <span className="text-xl text-[#08A99F] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#08A99F]/30 bg-gradient-to-r from-[#17243A] to-[#18363F] px-6 py-10 text-center sm:px-12 sm:py-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
            LOADZY Transport Enquiry
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Need a Truck in Irugur?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Submit your pickup, delivery, service and truck requirements to
            start your transport enquiry with LOADZY.
          </p>
          <a
            href="#transport-enquiry"
            className="mt-7 inline-flex rounded-xl bg-[#08A99F] px-7 py-4 font-bold text-white transition hover:bg-teal-600"
          >
            Submit Transport Enquiry →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} LOADZY. MOVE. CONNECT. DELIVER.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/" className="transition hover:text-teal-300">
              Home
            </Link>
            <Link href="/contact" className="transition hover:text-teal-300">
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-teal-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition hover:text-teal-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
