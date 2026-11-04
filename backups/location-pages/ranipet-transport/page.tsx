import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ranipet Truck Transport & Packers Movers | LOADZY",
  description:
    "Find truck transport from Ranipet for leather goods, industrial materials, commercial loads, full loads, part loads and household shifting with LOADZY.",
  keywords: [
    "Ranipet truck transport",
    "Ranipet lorry transport",
    "Ranipet goods transport",
    "Ranipet industrial transport",
    "Ranipet leather goods transport",
    "Ranipet packers and movers",
    "Ranipet house shifting",
    "Ranipet truck booking",
    "Ranipet to Chennai transport",
    "Ranipet to Bangalore transport",
    "LOADZY Ranipet",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/ranipet-transport",
  },
  openGraph: {
    title: "Ranipet Truck Transport & Packers Movers | LOADZY",
    description:
      "Truck transport for industrial goods, commercial loads, full loads, part loads and household shifting from Ranipet.",
    url: "https://www.loadzyinfra.in/ranipet-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  {
    name: "Truck Transport",
    description: "Truck and lorry transport for goods moving from Ranipet to nearby towns and major destinations.",
    href: "/services",
  },
  {
    name: "Industrial Transport",
    description: "Transport enquiries for industrial materials, factory goods and suitable commercial consignments.",
    href: "/industrial-transport",
  },
  {
    name: "Full Load",
    description: "Dedicated truck transport for customers who need a vehicle for their complete consignment.",
    href: "/full-load",
  },
  {
    name: "Part Load",
    description: "Transport enquiries for smaller consignments that do not need a complete truck.",
    href: "/part-load",
  },
  {
    name: "Packers & Movers",
    description: "Transport support for household shifting, office relocation and moving requirements.",
    href: "/packers-movers",
  },
  {
    name: "House Shifting",
    description: "Truck transport for household goods moving from Ranipet to other locations.",
    href: "/house-shifting",
  },
  {
    name: "Commercial Transport",
    description: "Transport enquiries for shop goods, business consignments and commercial materials.",
    href: "/commercial-transport",
  },
  {
    name: "Find My Truck",
    description: "Submit your pickup, delivery and load details to explore suitable truck options.",
    href: "/load-search",
  },
];

const routes = [
  { from: "Ranipet", to: "Chennai", href: "/routes/ranipet/chennai" },
  { from: "Chennai", to: "Ranipet", href: "/routes/chennai/ranipet" },
  { from: "Ranipet", to: "Bangalore", href: "/routes/ranipet/bangalore" },
  { from: "Bangalore", to: "Ranipet", href: "/routes/bangalore/ranipet" },
  { from: "Ranipet", to: "Vellore", href: "/routes/ranipet/vellore" },
  { from: "Vellore", to: "Ranipet", href: "/routes/vellore/ranipet" },
  { from: "Ranipet", to: "Ambur", href: "/routes/ranipet/ambur" },
  { from: "Ambur", to: "Ranipet", href: "/routes/ambur/ranipet" },
  { from: "Ranipet", to: "Kanchipuram", href: "/routes/ranipet/kanchipuram" },
  { from: "Kanchipuram", to: "Ranipet", href: "/routes/kanchipuram/ranipet" },
  { from: "Ranipet", to: "Tirupattur", href: "/routes/ranipet/tirupattur" },
  { from: "Tirupattur", to: "Ranipet", href: "/routes/tirupattur/ranipet" },
];

const nearbyAreas = [
  { name: "Vellore", href: "/vellore-transport" },
  { name: "Ambur", href: "/ambur-transport" },
  { name: "Vaniyambadi", href: "/vaniyambadi-transport" },
  { name: "Tirupattur", href: "/tirupattur-transport" },
  { name: "Kanchipuram", href: "/kanchipuram-transport" },
  { name: "Chennai", href: "/chennai-transport" },
];

const faqs = [
  {
    question: "Can I book a truck from Ranipet with LOADZY?",
    answer:
      "You can submit your transport requirement through LOADZY with your pickup location, delivery location, cargo details and preferred date. Vehicle options depend on availability.",
  },
  {
    question: "Does LOADZY support industrial goods transport from Ranipet?",
    answer:
      "LOADZY supports transport enquiries for suitable industrial materials, factory goods and commercial consignments, depending on the cargo and truck requirements.",
  },
  {
    question: "Can I arrange transport from Ranipet to Chennai?",
    answer:
      "You can submit a transport enquiry for the Ranipet to Chennai route. Suitable vehicle options depend on availability and your load details.",
  },
  {
    question: "Can I transport goods from Ranipet to Bangalore?",
    answer:
      "You can submit a transport enquiry for goods moving from Ranipet to Bangalore and provide your cargo and delivery details.",
  },
  {
    question: "Does LOADZY support full-load and part-load transport?",
    answer:
      "LOADZY supports enquiries for full-load and part-load transport. Suitable options depend on the shipment size, vehicle requirements and availability.",
  },
  {
    question: "Can I arrange household shifting from Ranipet?",
    answer:
      "You can submit a household shifting or packers and movers transport enquiry with the pickup, destination and household goods details.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.loadzyinfra.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ranipet Transport",
          item: "https://www.loadzyinfra.in/ranipet-transport",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Ranipet Truck Transport & Packers Movers",
      serviceType: [
        "Truck Transport",
        "Lorry Transport",
        "Industrial Transport",
        "Commercial Transport",
        "Full Load Transport",
        "Part Load Transport",
        "House Shifting",
      ],
      areaServed: {
        "@type": "Place",
        name: "Ranipet, Tamil Nadu, India",
      },
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in",
      },
      url: "https://www.loadzyinfra.in/ranipet-transport",
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

export default function RanipetTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            LOADZY • Ranipet Transport Services
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Ranipet Truck Transport & Packers Movers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Find transport options for industrial goods, commercial loads,
            full loads, part loads and household shifting from Ranipet with
            LOADZY.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Find My Truck
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact LOADZY
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Truck & Lorry Transport Services in Ranipet
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Ranipet is an important industrial and commercial area in
              northern Tamil Nadu. Road connections link the area with Vellore,
              Chennai, Kanchipuram and other regional destinations.
            </p>
            <p>
              Businesses may need transport for industrial materials, factory
              goods, packaged products, shop merchandise, equipment and other
              suitable consignments. Households may also need vehicles for
              furniture and relocation.
            </p>
            <p>
              LOADZY provides a platform to submit transport enquiries for
              suitable truck options. Share accurate pickup and delivery
              addresses, cargo details, load dimensions and preferred dates
              when making an enquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            ABOUT RANIPET
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            Ranipet: Local Economy, Industries and Goods Transport
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Ranipet district has industrial, trading and service activities
              that generate different transport requirements. The wider area
              includes manufacturing businesses, commercial establishments
              and industrial facilities.
            </p>
            <p>
              Depending on the business and consignment, transport needs may
              include raw materials, packaged goods, machinery, equipment,
              finished products and shop supplies. Cargo handling and vehicle
              selection should be based on the actual load and delivery
              requirements.
            </p>
            <p>
              LOADZY helps businesses, traders and households submit transport
              enquiries for full-load, part-load, commercial goods and
              household shifting requirements from Ranipet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Transport Services Available from Ranipet
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Choose a service based on your cargo, vehicle and delivery
            requirements.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
                <span className="mt-5 inline-block font-semibold text-teal-600">
                  Explore service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Ranipet Truck Transport Routes</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Explore transport enquiries for routes between Ranipet and major
            destinations. Route availability depends on your load and vehicle
            requirements.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-400 hover:shadow-md"
              >
                <p className="text-lg font-bold">
                  {route.from} → {route.to}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Truck transport route
                </p>
                <span className="mt-4 inline-block font-semibold text-teal-600">
                  View route →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Nearby Areas We Serve</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Explore nearby transport pages to learn more about LOADZY service
            enquiries in surrounding areas.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-semibold shadow-sm transition hover:border-teal-400"
              >
                {area.name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Why Use LOADZY for Ranipet Transport?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Truck Options",
                text: "Submit load details to explore suitable vehicle options.",
              },
              {
                title: "Multiple Load Types",
                text: "Transport enquiries for full loads, part loads and commercial consignments.",
              },
              {
                title: "Regional Connectivity",
                text: "Explore transport routes connecting Ranipet with nearby towns and major cities.",
              },
              {
                title: "Simple Enquiry",
                text: "Share your pickup, destination and cargo details through LOADZY.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions About Ranipet Transport
          </h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need a Truck from Ranipet?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Share your pickup location, delivery location and cargo details
            to start a transport enquiry with LOADZY.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-teal-500 px-7 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Find My Truck
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}