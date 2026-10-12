import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Puzhal Transport Service | Truck Booking | LOADZY",
  description:
    "Explore truck booking and goods transport from Puzhal, Chennai. Find options for commercial cargo, full load, part load and household shifting with LOADZY.",
  keywords: [
    "Puzhal transport service",
    "Puzhal truck booking",
    "Puzhal goods transport",
    "Puzhal to Chennai transport",
    "Chennai to Puzhal transport",
    "Puzhal lorry service",
    "Puzhal freight service",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/puzhal-transport",
  },
  openGraph: {
    title: "Puzhal Transport Service | LOADZY",
    description:
      "Explore goods transport services and routes to and from Puzhal, Chennai.",
    url: "https://www.loadzyinfra.in/puzhal-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Manali", "/manali-transport"],
  ["Minjur", "/minjur-transport"],
  ["Red Hills", "/red-hills-transport"],
  ["Avadi", "/avadi-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
];

const routes = [
  ["Puzhal", "Chennai", "/chennai-transport"],
  ["Chennai", "Puzhal", "/puzhal-transport"],
  ["Puzhal", "Madhavaram", "/madhavaram-transport"],
  ["Madhavaram", "Puzhal", "/puzhal-transport"],
  ["Puzhal", "Manali", "/manali-transport"],
  ["Manali", "Puzhal", "/puzhal-transport"],
  ["Puzhal", "Minjur", "/minjur-transport"],
  ["Minjur", "Puzhal", "/puzhal-transport"],
  ["Puzhal", "Red Hills", "/red-hills-transport"],
  ["Red Hills", "Puzhal", "/puzhal-transport"],
];

export default function PuzhalTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Puzhal Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore transport options from Puzhal for commercial goods, general
            cargo, full loads, part loads and household shifting. Share your
            route and shipment details to request suitable transport.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-slate-950 hover:bg-teal-400"
            >
              Book a Truck
            </Link>
            <Link
              href="/routes"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Explore Routes
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">
          Transport Services in Puzhal
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Tell LOADZY your pickup location, delivery destination, cargo type,
          approximate weight and preferred date. Vehicle selection depends on
          the shipment requirements and access conditions at both locations.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For shipments requiring a dedicated truck."],
            ["Part Load Transport", "Options for suitable smaller consignments."],
            ["Commercial Goods", "For business stock, supplies and general cargo."],
            ["Construction Supplies", "Arrange suitable transport for permitted building materials."],
            ["Packers and Movers", "For household and office relocation requirements."],
            ["Truck Booking", "Submit route, load and pickup-date details."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About section must appear before Major Cities. */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            About Puzhal and Local Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Puzhal is in the northern Chennai region. Local transport needs
            can include commercial inventory, general merchandise, building
            supplies and household belongings. The appropriate vehicle depends
            on cargo dimensions, weight, loading access and destination.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Its connections with other northern Chennai localities make it
            useful to plan both outbound and return journeys. Customers should
            provide exact pickup and delivery locations, shipment details and
            their preferred collection date when requesting transport.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore these LOADZY locality pages to plan transport to and from
          Puzhal.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Puzhal to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Puzhal Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Consider both directions when planning freight. These links lead
            to relevant location pages; confirm the exact journey and vehicle
            availability for your shipment.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map(([from, to, href], index) => (
              <Link
                key={`${from}-${to}-${index}`}
                href={href}
                className="rounded-lg border border-slate-200 bg-white p-4 hover:border-teal-500"
              >
                <span className="font-semibold">{from}</span>
                <span className="mx-2 text-teal-600">→</span>
                <span className="font-semibold">{to}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Need a Truck in Puzhal?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your pickup, delivery, cargo and date details to request
            suitable transport through LOADZY.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-lg bg-yellow-400 px-7 py-3 font-bold text-slate-950 hover:bg-yellow-300"
          >
            Request Transport
          </Link>
        </div>
      </section>
    </main>
  );
}
