import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyasarpadi Transport Service | Truck Booking | LOADZY",
  description:
    "Explore truck booking and goods transport in Vyasarpadi, North Chennai. Find options for commercial cargo, full loads, part loads and household shifting with LOADZY.",
  keywords: [
    "Vyasarpadi transport service",
    "Vyasarpadi truck booking",
    "Vyasarpadi goods transport",
    "Vyasarpadi to Chennai transport",
    "Chennai to Vyasarpadi transport",
    "Vyasarpadi lorry service",
    "North Chennai transport service",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/vyasarpadi-transport",
  },
  openGraph: {
    title: "Vyasarpadi Transport Service | LOADZY",
    description:
      "Explore transport services and routes to and from Vyasarpadi, Chennai.",
    url: "https://www.loadzyinfra.in/vyasarpadi-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Perambur", "/perambur-transport"],
  ["Kodungaiyur", "/kodungaiyur-transport"],
  ["Tondiarpet", "/tondiarpet-transport"],
  ["Royapuram", "/royapuram-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Manali", "/manali-transport"],
  ["Tiruvottiyur", "/tiruvottiyur-transport"],
];

const routes = [
  ["Vyasarpadi", "Chennai", "/chennai-transport"],
  ["Chennai", "Vyasarpadi", "/vyasarpadi-transport"],
  ["Vyasarpadi", "Perambur", "/perambur-transport"],
  ["Perambur", "Vyasarpadi", "/vyasarpadi-transport"],
  ["Vyasarpadi", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Vyasarpadi", "/vyasarpadi-transport"],
  ["Vyasarpadi", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Vyasarpadi", "/vyasarpadi-transport"],
  ["Vyasarpadi", "Madhavaram", "/madhavaram-transport"],
  ["Madhavaram", "Vyasarpadi", "/vyasarpadi-transport"],
];

export default function VyasarpadiTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Vyasarpadi Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Find transport options from Vyasarpadi for commercial goods,
            general cargo, full loads, part loads and household shifting.
            Share your route and cargo details to request suitable transport.
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
          Transport Services in Vyasarpadi
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Share your pickup location, delivery address, cargo type, approximate
          weight and required date to explore a suitable vehicle. Transport
          arrangements depend on the shipment and access conditions at both
          locations.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For consignments requiring a dedicated truck."],
            ["Part Load Transport", "Options for suitable smaller shipments."],
            ["Commercial Goods", "For business stock, supplies and general cargo."],
            ["Furniture Transport", "For suitable furniture and bulky items."],
            ["Packers and Movers", "For household and office relocation requirements."],
            ["Truck Booking", "Provide route, cargo and pickup-date details."],
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
            About Vyasarpadi and Local Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Vyasarpadi is a locality in North Chennai. Local transport needs
            can include household belongings, commercial inventory, retail
            supplies and other general goods. The appropriate truck depends
            on cargo dimensions, weight, loading access and the destination.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Connections with nearby Chennai localities make it useful to
            consider both outbound and return transport journeys. Include
            accurate pickup and delivery details when requesting transport
            through LOADZY.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore relevant LOADZY locality pages for transport connections
          around Chennai.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Vyasarpadi to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Vyasarpadi Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Review both directions when planning a shipment. These links
            connect to relevant location pages; confirm the actual route and
            truck availability for your requirements.
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
            Need a Truck in Vyasarpadi?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Submit your pickup, destination, cargo type and preferred date to
            request transport through LOADZY.
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
