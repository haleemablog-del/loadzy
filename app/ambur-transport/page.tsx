import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ambur Truck Transport, Lorry & Goods Transport | LOADZY",
description:
  "Book truck and lorry transport from Ambur for footwear and leather goods, commercial loads, factory goods, full load, part load, house shifting and packers & movers with LOADZY.",
  keywords: [
  "Ambur truck transport",
  "Ambur lorry transport",
  "Ambur goods transport",
  "Ambur commercial transport",
  "Ambur industrial transport",
  "Ambur factory goods transport",
  "Ambur footwear transport",
  "Ambur leather goods transport",
  "Ambur packers and movers",
  "Ambur house shifting",
  "Ambur truck booking",
  "Ambur logistics",
  "Ambur transport services",
  "truck transport Ambur",
  "lorry booking Ambur",
  "LOADZY Ambur",
],
  alternates: {
    canonical: "https://www.loadzyinfra.in/ambur-transport",
  },
  openGraph: {
    title: "Ambur Truck Transport & Packers Movers | LOADZY",
    description:
      "Truck transport, lorry booking, packers and movers, house shifting, full load and part load services from Ambur with LOADZY.",
    url: "https://www.loadzyinfra.in/ambur-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  {
    name: "Truck Transport",
    description:
      "Book suitable trucks and lorries for goods movement from Ambur to nearby cities and major South Indian destinations.",
    href: "/services",
  },
  {
    name: "Packers & Movers",
    description:
      "Transport support for household shifting, office movement and relocation requirements from Ambur.",
    href: "/packers-movers",
  },
  {
    name: "House Shifting",
    description:
      "Arrange truck transport for moving household goods from Ambur to Chennai, Bangalore, Vellore and other destinations.",
    href: "/house-shifting",
  },
  {
    name: "Full Load",
    description:
      "Full-load truck transport for customers who need a dedicated vehicle for their goods.",
    href: "/full-load",
  },
  {
    name: "Part Load",
    description:
      "Part-load transport options for smaller consignments that do not require a complete truck.",
    href: "/part-load",
  },
  {
    name: "Commercial Transport",
    description:
      "Move commercial goods and business consignments from Ambur with suitable transport options.",
    href: "/commercial-transport",
  },
  {
    name: "Industrial Transport",
    description:
      "Transport support for industrial goods, equipment and business requirements.",
    href: "/industrial-transport",
  },
  {
    name: "Fruits & Vegetables",
    description:
      "Truck transport solutions for fruits, vegetables and other time-sensitive goods.",
    href: "/fruits-vegetables",
  },
];

const routes = [
  {
    from: "Ambur",
    to: "Chennai",
    href: "/routes/ambur/chennai",
  },
  {
    from: "Chennai",
    to: "Ambur",
    href: "/routes/chennai/ambur",
  },
  {
    from: "Ambur",
    to: "Bangalore",
    href: "/routes/ambur/bangalore",
  },
  {
    from: "Bangalore",
    to: "Ambur",
    href: "/routes/bangalore/ambur",
  },
  {
    from: "Ambur",
    to: "Vellore",
    href: "/routes/ambur/vellore",
  },
  {
    from: "Vellore",
    to: "Ambur",
    href: "/routes/vellore/ambur",
  },
  {
    from: "Ambur",
    to: "Vaniyambadi",
    href: "/routes/ambur/vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Ambur",
    href: "/routes/vaniyambadi/ambur",
  },
  {
    from: "Ambur",
    to: "Tirupattur",
    href: "/routes/ambur/tirupattur",
  },
  {
    from: "Tirupattur",
    to: "Ambur",
    href: "/routes/tirupattur/ambur",
  },
  {
    from: "Ambur",
    to: "Krishnagiri",
    href: "/routes/ambur/krishnagiri",
  },
  {
    from: "Krishnagiri",
    to: "Ambur",
    href: "/routes/krishnagiri/ambur",
  },
  {
    from: "Ambur",
    to: "Hosur",
    href: "/routes/ambur/hosur",
  },
  {
    from: "Hosur",
    to: "Ambur",
    href: "/routes/hosur/ambur",
  },
  {
    from: "Ambur",
    to: "Salem",
    href: "/routes/ambur/salem",
  },
  {
    from: "Salem",
    to: "Ambur",
    href: "/routes/salem/ambur",
  },
  {
    from: "Ambur",
    to: "Dharmapuri",
    href: "/routes/ambur/dharmapuri",
  },
  {
    from: "Dharmapuri",
    to: "Ambur",
    href: "/routes/dharmapuri/ambur",
  },
  {
    from: "Ambur",
    to: "Jolarpettai",
    href: "/routes/ambur/jolarpettai",
  },
  {
    from: "Jolarpettai",
    to: "Ambur",
    href: "/routes/jolarpettai/ambur",
  },
  {
    from: "Ambur",
    to: "Gudiyatham",
    href: "/routes/ambur/gudiyatham",
  },
  {
    from: "Gudiyatham",
    to: "Ambur",
    href: "/routes/gudiyatham/ambur",
  },
  {
    from: "Ambur",
    to: "Alangayam",
    href: "/routes/ambur/alangayam",
  },
  {
    from: "Alangayam",
    to: "Ambur",
    href: "/routes/alangayam/ambur",
  },
  {
    from: "Ambur",
    to: "Kuppam",
    href: "/routes/ambur/kuppam",
  },
  {
    from: "Kuppam",
    to: "Ambur",
    href: "/routes/kuppam/ambur",
  },
  {
    from: "Ambur",
    to: "Tirupati",
    href: "/routes/ambur/tirupati",
  },
  {
    from: "Tirupati",
    to: "Ambur",
    href: "/routes/tirupati/ambur",
  },
  {
    from: "Ambur",
    to: "Thiruvannamalai",
    href: "/routes/ambur/thiruvannamalai",
  },
  {
    from: "Thiruvannamalai",
    to: "Ambur",
    href: "/routes/thiruvannamalai/ambur",
  },
];

const nearbyAreas = [
  {
    name: "Vaniyambadi",
    href: "/vaniyambadi-transport",
  },
  {
    name: "Tirupattur",
    href: "/tirupattur-transport",
  },
  {
    name: "Jolarpettai",
  },
  {
    name: "Alangayam",
  },
  {
    name: "Natrampalli",
  },
  {
    name: "Vellore",
    href: "/vellore-transport",
  },
  {
    name: "Gudiyatham",
  },
  {
    name: "Krishnagiri",
    href: "/krishnagiri-transport",
  },
];

const faqs = [
  {
    question: "Can I book a truck from Ambur with LOADZY?",
    answer:
      "Yes. LOADZY helps customers find suitable truck transport options from Ambur for household goods, commercial loads, industrial goods and other transport requirements.",
  },
  {
    question: "Does LOADZY provide lorry transport from Ambur?",
    answer:
      "Yes. Customers can use LOADZY for truck and lorry transport requirements from Ambur to destinations across Tamil Nadu and other South Indian locations.",
  },
  {
    question: "Does LOADZY provide packers and movers in Ambur?",
    answer:
      "LOADZY provides transport support for packers and movers and household relocation requirements from Ambur.",
  },
  {
    question: "Can I book a truck from Ambur to Chennai?",
    answer:
      "Yes. LOADZY supports transport requirements between Ambur and Chennai, subject to truck availability and the load requirements.",
  },
  {
    question: "Can I book a truck from Ambur to Bangalore?",
    answer:
      "Yes. LOADZY supports truck transport requirements between Ambur and Bangalore, depending on vehicle availability and load type.",
  },
  {
    question: "Does LOADZY support full-load transport from Ambur?",
    answer:
      "Yes. Full-load transport is available for customers who require a dedicated truck for their goods.",
  },
  {
    question: "Does LOADZY support part-load transport from Ambur?",
    answer:
      "Yes. Part-load transport can be suitable for smaller consignments that do not require an entire truck.",
  },
    {
    question: "Can LOADZY transport footwear and leather goods from Ambur?",
    answer:
      "Yes. LOADZY can support suitable truck transport requirements for footwear, leather goods and other commercial consignments moving from Ambur, subject to load requirements and truck availability.",
  },

  {
    question: "Does LOADZY provide industrial goods transport from Ambur?",
    answer:
      "Yes. LOADZY supports suitable industrial and commercial transport requirements from Ambur, including factory goods, manufacturing materials and other suitable consignments.",
  },

  {
    question: "What types of goods can be transported from Ambur?",
    answer:
      "Transport requirements can include footwear and leather goods, household goods, commercial goods, industrial goods, fruits, vegetables and other suitable consignments.",
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
          name: "Ambur Transport",
          item: "https://www.loadzyinfra.in/ambur-transport",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Ambur Truck Transport & Packers Movers",
      serviceType: [
        "Truck Transport",
        "Lorry Transport",
        "Packers and Movers",
        "House Shifting",
        "Full Load Transport",
        "Part Load Transport",
        "Commercial Transport",
        "Industrial Transport",
      ],
      areaServed: {
        "@type": "Place",
        name: "Ambur, Tamil Nadu, India",
      },
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in",
      },
      url: "https://www.loadzyinfra.in/ambur-transport",
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

export default function AmburTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            LOADZY • Ambur Transport Services
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Ambur Truck Transport & Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Book truck and lorry transport from Ambur for house shifting,
            packers and movers, full load, part load, commercial goods,
            industrial transport and other freight requirements with LOADZY.
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

      {/* INTRO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Truck & Lorry Transport Services in Ambur
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Ambur is an important town in Tirupattur district with transport
              requirements connecting local businesses, households and
              commercial activity with cities across Tamil Nadu and South
              India.
            </p>

            <p>
              LOADZY helps customers looking for truck booking and freight
              transport from Ambur. Depending on the requirement, customers can
              look for full-load trucks, part-load transport, house-shifting
              vehicles, packers and movers transport and commercial goods
              movement.
            </p>

            <p>
              Whether you need to move household goods, business consignments,
              industrial materials, fruits or vegetables, LOADZY provides a
              transport-focused platform for connecting your requirement with
              suitable vehicle options.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Transport Services Available from Ambur
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Choose the transport service that matches your load, vehicle and
            delivery requirement.
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
{/* AMBUR INDUSTRIES & GOODS TRANSPORT */}
<section className="bg-slate-50 px-6 py-16">
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
      AMBUR INDUSTRIAL TRANSPORT
    </p>

    <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
      Industries & Goods Transport from Ambur
    </h2>

    <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
      Ambur has a strong manufacturing and commercial ecosystem, including
      leather and footwear-related businesses. LOADZY helps businesses and
      customers arrange suitable truck transport for commercial consignments,
      manufacturing materials, finished goods and other suitable loads moving
      from Ambur to major destinations.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Footwear & Leather Goods",
          text: "Transport support for suitable footwear, leather goods and related commercial consignments.",
        },
        {
          title: "Factory Goods",
          text: "Truck transport options for suitable goods moving between Ambur businesses, factories and destinations.",
        },
        {
          title: "Commercial Loads",
          text: "Full-load and part-load transport for businesses moving commercial consignments from Ambur.",
        },
        {
          title: "Industrial Materials",
          text: "Transport support for suitable manufacturing materials, equipment and other industrial consignments.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-950">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-2xl border border-teal-100 bg-white p-6">
      <h3 className="text-2xl font-bold text-slate-950">
        Ambur Commercial & Industrial Transport
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Whether you need a truck for commercial goods, footwear-related
        consignments, factory materials or other suitable loads, LOADZY
        connects transport requirements with available truck options based on
        the pickup location, delivery location and load requirement.
      </p>

      <Link
        href="/load-search"
        className="mt-6 inline-block rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
      >
        Find My Truck →
      </Link>
    </div>
  </div>
</section>
      {/* ROUTES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
  Ambur Truck Transport Routes
</h2>

<p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
  Find truck and lorry transport routes from Ambur to Chennai, Bangalore,
  Vellore, Vaniyambadi, Tirupattur, Krishnagiri, Hosur, Salem, Tirupati
  and other important destinations. LOADZY also supports transport
  requirements for goods moving into Ambur from major South Indian cities.
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

      {/* NEARBY LOCATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Nearby Areas We Serve
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            LOADZY can also support transport requirements around Ambur and
            nearby towns.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyAreas.map((area) =>
              area.href ? (
                <Link
                  key={area.name}
                  href={area.href}
                  className="rounded-full border border-teal-200 bg-white px-5 py-3 font-medium text-teal-700 transition hover:bg-teal-50"
                >
                  {area.name}
                </Link>
              ) : (
                <span
                  key={area.name}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700"
                >
                  {area.name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Why Use LOADZY for Ambur Transport?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Truck Options",
                text: "Find suitable vehicle options based on your load and transport requirement.",
              },
              {
                title: "Multiple Load Types",
                text: "Support for full load, part load, household and commercial transport requirements.",
              },
              {
                title: "South India Routes",
                text: "Connect transport requirements from Ambur with major South Indian destinations.",
              },
              {
                title: "Simple Booking",
                text: "Start your transport requirement through the LOADZY platform.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions About Ambur Transport
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need a Truck from Ambur?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell LOADZY about your pickup location, delivery location and load
            requirement to start finding a suitable transport option.
          </p>

          <div className="mt-8 flex justify-center gap-4">
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