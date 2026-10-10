import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jolarpettai Truck Transport & Lorry Services | LOADZY",
  description:
    "Find truck transport in Jolarpettai, Tirupattur district, Tamil Nadu. Explore goods transport, full load, part load, commercial freight and household shifting with LOADZY.",
  alternates: {
    canonical: "https://www.loadzyinfra.in/jolarpettai-transport",
  },
};

const services = [
  {
    title: "Full Truck Load",
    description:
      "Find suitable trucks for commercial goods and larger consignments moving from Jolarpettai to your destination.",
  },
  {
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments when a full truck may not be necessary.",
  },
  {
    title: "Business & Commercial Goods",
    description:
      "Arrange transport for shop goods, business supplies, packaged products and other commercial consignments.",
  },
  {
    title: "Household Shifting",
    description:
      "Find transport options for household goods when moving within Tamil Nadu or to another city.",
  },
];


const routes = [
  { name: "Jolarpettai to Tirupattur", href: "/routes/jolarpettai/tirupattur" },
  { name: "Tirupattur to Jolarpettai", href: "/routes/tirupattur/jolarpettai" },

  { name: "Jolarpettai to Vaniyambadi", href: "/routes/jolarpettai/vaniyambadi" },
  { name: "Vaniyambadi to Jolarpettai", href: "/routes/vaniyambadi/jolarpettai" },

  { name: "Jolarpettai to Vellore", href: "/routes/jolarpettai/vellore" },
  { name: "Vellore to Jolarpettai", href: "/routes/vellore/jolarpettai" },

  { name: "Jolarpettai to Chennai", href: "/routes/jolarpettai/chennai" },
  { name: "Chennai to Jolarpettai", href: "/routes/chennai/jolarpettai" },

  { name: "Jolarpettai to Bangalore", href: "/routes/jolarpettai/bangalore" },
  { name: "Bangalore to Jolarpettai", href: "/routes/bangalore/jolarpettai" },

  { name: "Jolarpettai to Coimbatore", href: "/routes/jolarpettai/coimbatore" },
  { name: "Coimbatore to Jolarpettai", href: "/routes/coimbatore/jolarpettai" },

  { name: "Jolarpettai to Salem", href: "/routes/jolarpettai/salem" },
  { name: "Salem to Jolarpettai", href: "/routes/salem/jolarpettai" },

  { name: "Jolarpettai to Hosur", href: "/routes/jolarpettai/hosur" },
  { name: "Hosur to Jolarpettai", href: "/routes/hosur/jolarpettai" },

  { name: "Jolarpettai to Krishnagiri", href: "/routes/jolarpettai/krishnagiri" },
  { name: "Krishnagiri to Jolarpettai", href: "/routes/krishnagiri/jolarpettai" },

  { name: "Jolarpettai to Hyderabad", href: "/routes/jolarpettai/hyderabad" },
  { name: "Hyderabad to Jolarpettai", href: "/routes/hyderabad/jolarpettai" },

  { name: "Jolarpettai to Kochi", href: "/routes/jolarpettai/kochi" },
  { name: "Kochi to Jolarpettai", href: "/routes/kochi/jolarpettai" },
];


const nearbyAreas = [
  { name: "Tirupattur", href: "/tirupattur-transport" },
  { name: "Vaniyambadi", href: "/vaniyambadi-transport" },
  { name: "Ambur", href: "/ambur-transport" },
  { name: "Natrampalli", href: "/natrampalli-transport" },
  { name: "Alangayam", href: "/alangayam-transport" },
];

const faqs = [
  {
    question: "Can I book a truck from Jolarpettai with LOADZY?",
    answer:
      "LOADZY helps customers submit transport requirements and find suitable truck options. Availability depends on the route, truck type and booking details.",
  },
  {
    question: "Can I arrange full-load and part-load transport?",
    answer:
      "You can submit your full-load or part-load requirement and provide the pickup location, destination, goods details and preferred date.",
  },
  {
    question: "Does LOADZY support household shifting?",
    answer:
      "You can enquire about transport for household goods and shifting requirements from Jolarpettai to your intended destination.",
  },
  {
    question: "How can I request transport pricing?",
    answer:
      "Share your pickup and delivery locations, load details, truck requirement and pickup date to request suitable transport options.",
  },
];

export default function JolarpettaiTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            LOADZY · TAMIL NADU TRANSPORT
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Jolarpettai Truck Transport &amp; Lorry Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Looking for goods transport from Jolarpettai? Explore truck
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
            ABOUT JOLARPETTAI
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Transport Services in Jolarpettai, Tamil Nadu
          </h2>
          <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Jolarpettai is a town in Tirupattur district, Tamil Nadu, known
              for its important railway junction and connections to surrounding
              towns. Its location makes road transport an important option for
              businesses, traders and households moving goods across the
              region.
            </p>
            <p>
              Customers looking for Jolarpettai lorry services can submit
              requirements for commercial consignments, packaged goods,
              household items and other transport needs. The right truck
              depends on the goods, load size, pickup location and destination.
            </p>
            <p>
              LOADZY helps customers communicate their transport requirements
              and explore suitable truck options. Provide accurate pickup and
              delivery details to make your enquiry easier to process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Goods Transport Services in Jolarpettai
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Choose a transport option based on your goods, load size, route and
            preferred pickup date.
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
            Popular Transport Routes from Jolarpettai
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Explore these route options for your transport enquiry. Confirm
            route availability and pricing when requesting a truck.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="rounded-xl border border-slate-200 p-5 font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700"
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
                className="rounded-full border border-slate-300 bg-white px-5 py-3 font-medium transition hover:border-teal-500 hover:text-teal-700"
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

          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-6">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Need truck transport from Jolarpettai?
            </h2>
            <p className="mt-3 text-slate-300">
              Share your load and route details with LOADZY.
            </p>
          </div>
          <Link
            href="/#booking"
            className="inline-flex w-fit rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
          >
            Request Transport
          </Link>
        </div>
      </section>
    </main>
  );
}