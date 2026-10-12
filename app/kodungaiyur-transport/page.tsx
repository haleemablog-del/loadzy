import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kodungaiyur Transport Service | Truck Booking | LOADZY",
  description:
    "Find goods transport and truck booking options in Kodungaiyur, North Chennai. Explore full load, part load, commercial cargo and household shifting services with LOADZY.",
  keywords: [
    "Kodungaiyur transport service",
    "Kodungaiyur truck booking",
    "Kodungaiyur goods transport",
    "Kodungaiyur to Chennai transport",
    "Chennai to Kodungaiyur transport",
    "Kodungaiyur lorry service",
    "North Chennai truck transport",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/kodungaiyur-transport",
  },
  openGraph: {
    title: "Kodungaiyur Transport Service | LOADZY",
    description:
      "Explore goods transport services and routes to and from Kodungaiyur.",
    url: "https://www.loadzyinfra.in/kodungaiyur-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Perambur", "/perambur-transport"],
  ["Vyasarpadi", "/vyasarpadi-transport"],
  ["Tondiarpet", "/tondiarpet-transport"],
  ["Royapuram", "/royapuram-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Manali", "/manali-transport"],
  ["Minjur", "/minjur-transport"],
];

const routes = [
  ["Kodungaiyur", "Chennai", "/chennai-transport"],
  ["Chennai", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Perambur", "/perambur-transport"],
  ["Perambur", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Vyasarpadi", "/vyasarpadi-transport"],
  ["Vyasarpadi", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Madhavaram", "/madhavaram-transport"],
  ["Madhavaram", "Kodungaiyur", "/kodungaiyur-transport"],
];

export default function KodungaiyurTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Kodungaiyur Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Arrange transport from Kodungaiyur for commercial goods, general
            cargo, full loads, part loads and household shifting. Share your
            route and cargo requirements to explore suitable truck options.
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
          Transport Services in Kodungaiyur
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          LOADZY helps customers explore transport options for different cargo
          requirements. Choose a suitable service based on your load, vehicle
          requirements, pickup access and delivery destination.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "Options for consignments requiring a dedicated truck."],
            ["Part Load Transport", "Transport options for suitable smaller consignments."],
            ["Commercial Goods", "For business inventory, supplies and general cargo."],
            ["Construction Materials", "Arrange appropriate vehicles for permitted building supplies."],
            ["Packers and Movers", "For household and office relocation requirements."],
            ["Truck Booking", "Submit your pickup, destination, load and date details."],
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
            About Kodungaiyur and Local Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Kodungaiyur is a locality in North Chennai. Residents, traders and
            businesses may require transport for household belongings,
            commercial stock, general merchandise and other suitable goods.
            Vehicle choice depends on the type and quantity of cargo, loading
            conditions and delivery location.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Its connections with other Chennai localities make it useful to
            plan both outbound and return journeys. Customers should provide
            precise pickup and drop-off details, cargo dimensions or weight,
            and the preferred pickup date when requesting transport.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Browse relevant LOADZY locality pages to explore nearby transport
          connections.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Kodungaiyur to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Kodungaiyur Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Review both directions when planning a transport request. Route
            links lead to location pages; confirm the exact journey and
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
            Need a Truck in Kodungaiyur?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your pickup point, delivery location, cargo type and preferred
            date to request transport through LOADZY.
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
