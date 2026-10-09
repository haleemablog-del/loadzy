import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vaniyambadi Truck Transport, Lorry & Goods Transport | LOADZY",
  description:
    "Book truck and lorry transport from Vaniyambadi for commercial goods, footwear-related consignments, factory goods, full load, part load, house shifting and packers & movers with LOADZY.",
  keywords: [
    "Vaniyambadi truck transport",
    "Vaniyambadi lorry transport",
    "Vaniyambadi goods transport",
    "Vaniyambadi commercial transport",
    "Vaniyambadi industrial transport",
    "Vaniyambadi factory goods transport",
    "Vaniyambadi packers and movers",
    "Vaniyambadi house shifting",
    "Vaniyambadi truck booking",
    "Vaniyambadi transport services",
    "Vaniyambadi to Chennai truck",
    "Vaniyambadi to Bangalore truck",
    "Vaniyambadi to Vellore truck",
    "Vaniyambadi to Hosur truck",
    "Vaniyambadi to Krishnagiri truck",
    "LOADZY Vaniyambadi",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/vaniyambadi-transport",
  },
  openGraph: {
    title: "Vaniyambadi Truck Transport, Lorry & Goods Transport | LOADZY",
    description:
      "Truck booking, lorry transport, commercial goods transport, house shifting and packers & movers from Vaniyambadi with LOADZY.",
    url: "https://www.loadzyinfra.in/vaniyambadi-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  {
    name: "Truck Transport",
    description:
      "Book suitable trucks for goods movement from Vaniyambadi to different destinations.",
    href: "/services",
  },
  {
    name: "Packers & Movers",
    description:
      "Transport support for household shifting, furniture and moving requirements.",
    href: "/packers-movers",
  },
  {
    name: "House Shifting",
    description:
      "Truck transport support for moving household goods from Vaniyambadi.",
    href: "/house-shifting",
  },
  {
    name: "Full Load Transport",
    description:
      "Suitable transport options when you need a dedicated truck for your load.",
    href: "/full-load",
  },
  {
    name: "Part Load Transport",
    description:
      "Transport options for smaller shipments that do not require a full truck.",
    href: "/part-load",
  },
  {
    name: "Commercial Transport",
    description:
      "Move business goods, cartons, furniture, inventory and commercial shipments.",
    href: "/commercial-transport",
  },
  {
    name: "Industrial Transport",
    description:
      "Transport support for industrial goods and larger business requirements.",
    href: "/industrial-transport",
  },
  {
    name: "Fruits & Vegetables",
    description:
      "Transport support for fruits, vegetables and agricultural loads.",
    href: "/fruits-vegetables",
  },
];

const routes = [
  {
    name: "Vaniyambadi → Chennai",
    href: "/routes/vaniyambadi/chennai",
  },
  {
    name: "Chennai → Vaniyambadi",
    href: "/routes/chennai/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Bangalore",
    href: "/routes/vaniyambadi/bangalore",
  },
  {
    name: "Bangalore → Vaniyambadi",
    href: "/routes/bangalore/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Vellore",
    href: "/routes/vaniyambadi/vellore",
  },
  {
    name: "Vellore → Vaniyambadi",
    href: "/routes/vellore/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Krishnagiri",
    href: "/routes/vaniyambadi/krishnagiri",
  },
  {
    name: "Krishnagiri → Vaniyambadi",
    href: "/routes/krishnagiri/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Hosur",
    href: "/routes/vaniyambadi/hosur",
  },
  {
    name: "Hosur → Vaniyambadi",
    href: "/routes/hosur/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Salem",
    href: "/routes/vaniyambadi/salem",
  },
  {
    name: "Salem → Vaniyambadi",
    href: "/routes/salem/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Tirupattur",
    href: "/routes/vaniyambadi/tirupattur",
  },
  {
    name: "Tirupattur → Vaniyambadi",
    href: "/routes/tirupattur/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Ambur",
    href: "/routes/vaniyambadi/ambur",
  },
  {
    name: "Ambur → Vaniyambadi",
    href: "/routes/ambur/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Gudiyatham",
    href: "/routes/vaniyambadi/gudiyatham",
  },
  {
    name: "Gudiyatham → Vaniyambadi",
    href: "/routes/gudiyatham/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Alangayam",
    href: "/routes/vaniyambadi/alangayam",
  },
  {
    name: "Alangayam → Vaniyambadi",
    href: "/routes/alangayam/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Polur",
    href: "/routes/vaniyambadi/polur",
  },
  {
    name: "Polur → Vaniyambadi",
    href: "/routes/polur/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Kuppam",
    href: "/routes/vaniyambadi/kuppam",
  },
  {
    name: "Kuppam → Vaniyambadi",
    href: "/routes/kuppam/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Dharmapuri",
    href: "/routes/vaniyambadi/dharmapuri",
  },
  {
    name: "Dharmapuri → Vaniyambadi",
    href: "/routes/dharmapuri/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Thiruvannamalai",
    href: "/routes/vaniyambadi/thiruvannamalai",
  },
  {
    name: "Thiruvannamalai → Vaniyambadi",
    href: "/routes/thiruvannamalai/vaniyambadi",
  },
  {
    name: "Vaniyambadi → Tirupati",
    href: "/routes/vaniyambadi/tirupati",
  },
  {
    name: "Tirupati → Vaniyambadi",
    href: "/routes/tirupati/vaniyambadi",
  },
];

const nearbyAreas = [
  { name: "Tirupattur", href: "/tirupattur-transport" },
  { name: "Ambur" },
  { name: "Jolarpettai" },
  { name: "Natrampalli" },
  { name: "Alangayam" },
  { name: "Vellore" },
  { name: "Krishnagiri" },
  { name: "Hosur" },
];

const faqs = [
  {
    question: "Can I book a truck from Vaniyambadi with LOADZY?",
    answer:
      "Yes. LOADZY helps customers submit truck transport requirements from Vaniyambadi based on their pickup location, delivery location, load type and truck requirement.",
  },
  {
    question: "Does LOADZY provide lorry transport from Vaniyambadi?",
    answer:
      "Yes. LOADZY supports truck and lorry transport requirements for household, commercial and other goods transportation.",
  },
  {
    question: "Can I get packers and movers transport from Vaniyambadi?",
    answer:
      "Yes. LOADZY supports transport requirements for packers and movers and household shifting from Vaniyambadi.",
  },
  {
    question: "Can I book a full load truck from Vaniyambadi?",
    answer:
      "Yes. Full load transport is available as a LOADZY service, subject to truck availability for the requested route and pickup date.",
  },
  {
    question: "Can I transport a part load from Vaniyambadi?",
    answer:
      "Yes. LOADZY supports part load transport requirements for suitable routes and available vehicles.",
  },
  {
    question: "Can I book a truck from Vaniyambadi to Chennai?",
    answer:
      "Yes. LOADZY provides a route page for Vaniyambadi to Chennai truck transport where customers can explore the route and submit their requirement.",
  },
  {
    question: "Can I book a truck from Vaniyambadi to Bangalore?",
    answer:
      "Yes. LOADZY provides a Vaniyambadi to Bangalore transport route for suitable truck and load requirements.",
  },
  {
    question: "What truck size should I choose?",
    answer:
      "The suitable truck depends on the type, volume and weight of the goods, as well as the pickup and delivery requirements.",
  },
];

export default function VaniyambadiTransportPage() {
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
            item: "https://www.loadzyinfra.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Vaniyambadi Truck Transport",
            item: "https://www.loadzyinfra.in/vaniyambadi-transport",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Vaniyambadi Truck Transport",
        description:
          "Truck booking, lorry transport, packers and movers, house shifting and commercial goods transport services from Vaniyambadi with LOADZY.",
        provider: {
          "@type": "Organization",
          name: "LOADZY",
          url: "https://www.loadzyinfra.in",
        },
        areaServed: {
          "@type": "City",
          name: "Vaniyambadi",
        },
        serviceType: "Truck Transport",
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
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-[0.2em] text-teal-300">
              LOADZY TRANSPORT SERVICES
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Vaniyambadi Truck Transport & Packers Movers
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
              Book trucks and lorries from Vaniyambadi for house shifting,
              packers and movers, full load, part load, commercial goods and
              industrial transport with LOADZY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="rounded-xl bg-teal-500 px-7 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
              >
                Book a Truck →
              </Link>

              <Link
                href="/routes"
                className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-yellow-300"
              >
                Explore Routes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-blue-950 md:text-4xl">
            Truck Booking in Vaniyambadi
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            LOADZY helps customers find transport solutions for different
            types of loads from Vaniyambadi. Whether you need a lorry for
            household shifting, business goods, part load, full load or
            commercial transportation, you can submit your transport
            requirement through LOADZY.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Customers looking for Vaniyambadi truck transport, lorry
            transport, packers and movers or house shifting services can use
            LOADZY to request suitable transport based on their route, load
            type and pickup date.
          </p>
        </div>
      </section>
      {/* ABOUT VANIYAMBADI */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            ABOUT VANIYAMBADI
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            About Vaniyambadi, Tamil Nadu
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Vaniyambadi is a town in Tirupattur district, Tamil Nadu, connected
              by road to nearby towns including Ambur, Tirupattur and Vellore, as
              well as major destinations such as Chennai and Bangalore.
            </p>

            <p>
              Vaniyambadi is known for its leather and leather-related
              manufacturing businesses. These activities can create transport
              needs for suitable finished goods, commercial consignments and
              manufacturing materials.
            </p>

            <p>
              LOADZY helps businesses, traders and households request suitable
              truck transport from Vaniyambadi for commercial goods, industrial
              consignments, full loads, part loads and household shifting,
              depending on route and vehicle availability.
            </p>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-teal-600">
              TRANSPORT SERVICES
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Transport Services in Vaniyambadi
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg"
              >
                <h3 className="text-xl font-black text-blue-950">
                  {service.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-5 block font-bold text-teal-600">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* VANIYAMBADI INDUSTRIES & GOODS TRANSPORT */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            VANIYAMBADI INDUSTRIAL TRANSPORT
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            Industries & Goods Transport from Vaniyambadi
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Vaniyambadi is known for leather and leather-related manufacturing.
            LOADZY helps businesses and customers request suitable truck
            transport for commercial consignments, finished goods, manufacturing
            materials and other suitable loads moving from Vaniyambadi to
            major destinations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Leather & Related Goods",
                text: "Transport support for suitable leather products and related commercial consignments.",
              },
              {
                title: "Finished Goods",
                text: "Truck transport options for suitable finished products moving from local businesses to destinations.",
              },
              {
                title: "Commercial Loads",
                text: "Full-load and part-load transport options for suitable business consignments.",
              },
              {
                title: "Manufacturing Materials",
                text: "Transport support for suitable materials and other goods required by manufacturing businesses.",
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
              Vaniyambadi Commercial & Industrial Transport
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Tell LOADZY your pickup location, delivery destination and load
              requirements to request suitable truck options, subject to
              vehicle availability.
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
           

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Vaniyambadi Truck Transport Routes
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Explore truck transport routes connecting Vaniyambadi with
              important cities and towns across Tamil Nadu, Karnataka and
              nearby regions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg"
              >
                🚚 {route.name}

                <span className="mt-2 block text-sm font-bold text-teal-600">
                  View Route →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY LOCATIONS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.2em] text-teal-600">
            NEARBY LOCATIONS
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Areas Near Vaniyambadi
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            LOADZY can support transport requirements around Vaniyambadi and
            nearby areas depending on route and vehicle availability.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) =>
  area.href ? (
    <Link
      key={area.name}
      href={area.href}
      className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-blue-950 shadow-sm transition hover:border-teal-400 hover:text-teal-600"
    >
      {area.name}
    </Link>
  ) : (
    <span
      key={area.name}
      className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-blue-950 shadow-sm"
    >
      {area.name}
    </span>
  )
)}
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.2em] text-yellow-400">
            WHY LOADZY
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Simple Transport Booking for Vaniyambadi
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Route-based truck booking",
              "Support for different truck sizes",
              "Full load and part load options",
              "House shifting and packers & movers",
              "Commercial and industrial transport",
              "Affordable freight-focused transport options",
              "On-time and safe delivery focus",
              "Return-load availability where suitable",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left font-bold text-blue-100"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-teal-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Vaniyambadi Transport Questions
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-blue-950">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black md:text-5xl">
            Need a Truck from Vaniyambadi?
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Submit your pickup, delivery and load requirements and get started
            with LOADZY.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-teal-500 px-8 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
          >
            Book a Truck →
          </Link>
        </div>
      </section>
    </main>
  );
}