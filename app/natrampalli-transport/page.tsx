
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Natrampalli Truck Transport & Lorry Services | LOADZY",
  description:
    "Find truck transport in Natrampalli, Tirupattur district, Tamil Nadu. Explore commercial goods transport, full loads, part loads and household shifting with LOADZY.",
  alternates: {
    canonical: "https://www.loadzyinfra.in/natrampalli-transport",
  },
};

const services = [
  {
    title: "Commercial Goods Transport",
    description:
      "Explore truck options for shop goods, business supplies, packaged products and commercial consignments from Natrampalli.",
  },
  {
    title: "Full Load Transport",
    description:
      "Find suitable transport options for consignments that require a dedicated truck. Share your pickup, destination and load details.",
  },
  {
    title: "Part Load Transport",
    description:
      "Enquire about transport options for smaller consignments, subject to truck availability and route compatibility.",
  },
  {
    title: "Household Shifting",
    description:
      "Explore transport for household items when moving from Natrampalli to nearby towns or other destinations.",
  },
];

const routes = [
  { name: "Natrampalli to Tirupattur", href: "/routes/natrampalli/tirupattur" },
  { name: "Tirupattur to Natrampalli", href: "/routes/tirupattur/natrampalli" },
  { name: "Natrampalli to Vaniyambadi", href: "/routes/natrampalli/vaniyambadi" },
  { name: "Vaniyambadi to Natrampalli", href: "/routes/vaniyambadi/natrampalli" },
  { name: "Natrampalli to Jolarpettai", href: "/routes/natrampalli/jolarpettai" },
  { name: "Jolarpettai to Natrampalli", href: "/routes/jolarpettai/natrampalli" },
  { name: "Natrampalli to Vellore", href: "/routes/natrampalli/vellore" },
  { name: "Vellore to Natrampalli", href: "/routes/vellore/natrampalli" },
  { name: "Natrampalli to Chennai", href: "/routes/natrampalli/chennai" },
  { name: "Chennai to Natrampalli", href: "/routes/chennai/natrampalli" },
  { name: "Natrampalli to Bangalore", href: "/routes/natrampalli/bangalore" },
  { name: "Bangalore to Natrampalli", href: "/routes/bangalore/natrampalli" },
];

const nearbyAreas = [
  { name: "Tirupattur", href: "/tirupattur-transport" },
  { name: "Jolarpettai", href: "/jolarpettai-transport" },
  { name: "Vaniyambadi", href: "/vaniyambadi-transport" },
  { name: "Ambur", href: "/ambur-transport" },
  { name: "Alangayam", href: "/alangayam-transport" },
];

const faqs = [
  {
    question: "Can I request truck transport from Natrampalli with LOADZY?",
    answer:
      "Yes. Submit your transport requirements, including pickup, destination, goods details and preferred date, so suitable options can be explored.",
  },
  {
    question: "Does LOADZY support full-load and part-load enquiries?",
    answer:
      "You can enquire about both full-load and part-load transport. Options depend on truck availability, load details and the requested route.",
  },
  {
    question: "Can I arrange household shifting from Natrampalli?",
    answer:
      "You can submit a household-shifting enquiry with your pickup location, destination, moving date and an estimate of the items to be transported.",
  },
  {
    question: "Are transport prices fixed on this page?",
    answer:
      "No fixed price is promised here. Transport costs depend on the route, truck type, goods, load size and availability.",
  },
];

export default function NatrampalliTransportPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            LOADZY · TAMIL NADU TRANSPORT
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Natrampalli Truck Transport &amp; Lorry Services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Looking for goods transport from Natrampalli? Explore truck
            transport options for commercial goods, full loads, part loads and
            household shifting with LOADZY.
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
            ABOUT NATRAMPALLI
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Transport Services in Natrampalli, Tamil Nadu
          </h2>
          <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Natrampalli is a town in Tirupattur district, Tamil Nadu.
              Its connections with nearby towns make road transport useful
              for local businesses, traders and households moving goods.
            </p>
            <p>
              Customers looking for lorry services can submit requirements
              for commercial consignments, packaged goods, household items
              and other transport needs. The suitable truck depends on the
              goods, load size, pickup location and destination.
            </p>
            <p>
              LOADZY helps customers communicate their transport requirements
              and explore suitable truck options. Share accurate pickup and
              delivery details to help process your enquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Goods Transport Services in Natrampalli
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Choose a transport option based on your goods, load size, route
            and preferred pickup date.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
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
            Popular Transport Routes from Natrampalli
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore these route options for your transport enquiry. Confirm
            route availability and pricing when requesting a truck.
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
              Need transport from Natrampalli?
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
