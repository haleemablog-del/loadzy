
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alangayam Truck Transport & Lorry Services | LOADZY",
  description:
    "Find truck transport in Alangayam, Tirupattur district, Tamil Nadu. Explore goods transport for agricultural produce, local businesses, commercial loads and household shifting with LOADZY.",
  alternates: {
    canonical: "https://www.loadzyinfra.in/alangayam-transport",
  },
};

const services = [
  {
    title: "Agricultural Goods Transport",
    description:
      "Explore transport options for agricultural produce and related goods. Availability depends on the commodity, load size and destination.",
  },
  {
    title: "Commercial Goods Transport",
    description:
      "Arrange transport enquiries for shop supplies, packaged goods, business materials and other commercial consignments.",
  },
  {
    title: "Full Load Transport",
    description:
      "Explore suitable truck options for larger consignments that require a dedicated vehicle.",
  },
  {
    title: "Part Load Transport",
    description:
      "Enquire about options for smaller consignments, subject to truck availability and route compatibility.",
  },
  {
    title: "Industrial and Business Loads",
    description:
      "Submit transport requirements for machinery, equipment, raw materials and other business-related goods.",
  },
  {
    title: "Household Shifting",
    description:
      "Explore transport options for household items when moving from Alangayam to nearby towns or other destinations.",
  },
];

const routes = [
  { name: "Alangayam to Tirupattur", href: "/routes/alangayam/tirupattur" },
  { name: "Tirupattur to Alangayam", href: "/routes/tirupattur/alangayam" },
  { name: "Alangayam to Vaniyambadi", href: "/routes/alangayam/vaniyambadi" },
  { name: "Vaniyambadi to Alangayam", href: "/routes/vaniyambadi/alangayam" },
  { name: "Alangayam to Ambur", href: "/routes/alangayam/ambur" },
  { name: "Ambur to Alangayam", href: "/routes/ambur/alangayam" },
  { name: "Alangayam to Jolarpettai", href: "/routes/alangayam/jolarpettai" },
  { name: "Jolarpettai to Alangayam", href: "/routes/jolarpettai/alangayam" },
  { name: "Alangayam to Vellore", href: "/routes/alangayam/vellore" },
  { name: "Vellore to Alangayam", href: "/routes/vellore/alangayam" },
  { name: "Alangayam to Chennai", href: "/routes/alangayam/chennai" },
  { name: "Chennai to Alangayam", href: "/routes/chennai/alangayam" },
  { name: "Alangayam to Bangalore", href: "/routes/alangayam/bangalore" },
  { name: "Bangalore to Alangayam", href: "/routes/bangalore/alangayam" },
];

const nearbyAreas = [
  { name: "Tirupattur", href: "/tirupattur-transport" },
  { name: "Vaniyambadi", href: "/vaniyambadi-transport" },
  { name: "Ambur", href: "/ambur-transport" },
  { name: "Jolarpettai", href: "/jolarpettai-transport" },
  { name: "Natrampalli", href: "/natrampalli-transport" },
];

const faqs = [
  {
    question: "Can I request truck transport from Alangayam?",
    answer:
      "Yes. Submit your pickup location, destination, goods details and preferred date to enquire about suitable transport options.",
  },
  {
    question: "Can agricultural produce be transported from Alangayam?",
    answer:
      "You can submit an enquiry for agricultural produce and related goods. The suitable vehicle depends on the commodity, quantity, handling requirements and destination.",
  },
  {
    question: "Does LOADZY support business and industrial goods?",
    answer:
      "You can enquire about transporting commercial goods, equipment, machinery and raw materials. Vehicle suitability depends on the dimensions, weight and nature of the goods.",
  },
  {
    question: "Are transport rates fixed?",
    answer:
      "Rates are not fixed on this page. Costs depend on the route, truck type, load size, goods and vehicle availability.",
  },
];

export default function AlangayamTransportPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            LOADZY · TAMIL NADU TRANSPORT
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Alangayam Truck Transport &amp; Lorry Services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Looking for goods transport from Alangayam? Explore truck
            transport options for agricultural produce, commercial goods,
            business consignments, full loads, part loads and household
            shifting with LOADZY.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#booking"
              className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Request Transport
            </Link>
            <Link
              href="/routes"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Routes
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            ABOUT ALANGAYAM
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Alangayam: Local Economy, Businesses and Transport
          </h2>
          <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Alangayam is a town in Tirupattur district, Tamil Nadu, connected
              to neighbouring settlements through the regional road network.
              Local trade, agriculture-related activities and small businesses
              contribute to the movement of goods within the surrounding area.
            </p>
            <p>
              Agricultural produce and supplies, shop merchandise, packaged
              products and materials used by local businesses can create
              different transport requirements. The vehicle needed depends on
              the type of goods, quantity, handling requirements and delivery
              destination.
            </p>
            <p>
              Local enterprises may also need to move equipment, tools, raw
              materials and finished goods between suppliers, businesses and
              customers. These requirements can call for different vehicle
              sizes and transport arrangements depending on the consignment.
            </p>
            <p>
              For farmers, traders, shop owners, businesses and households,
              LOADZY provides a way to submit transport requirements and
              explore suitable truck options. Customers should provide accurate
              pickup and delivery details to help process their enquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Goods and Business Transport Services in Alangayam
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Explore transport options based on your goods, load size,
            destination and preferred pickup date.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Popular Transport Routes from Alangayam
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore route options in both directions. Confirm availability
            and pricing when requesting transport.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="rounded-xl border border-slate-200 p-5 font-semibold transition hover:border-teal-500 hover:text-teal-700"
              >
                {route.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Nearby Transport Service Areas
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 transition hover:border-teal-500 hover:text-teal-700"
              >
                {area.name} Transport
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold">
              Need transport from Alangayam?
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Share your load details and destination to start your transport
              enquiry with LOADZY.
            </p>
            <Link
              href="/#booking"
              className="mt-6 inline-block rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Request Transport
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
