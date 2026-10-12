import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Royapuram Transport Service | Truck Booking | LOADZY",
  description:
    "Explore truck booking and goods transport in Royapuram, Chennai. Find transport options for commercial cargo, full loads, part loads and household shifting with LOADZY.",
  keywords: [
    "Royapuram transport service",
    "Royapuram truck booking",
    "Royapuram goods transport",
    "Royapuram to Chennai transport",
    "Chennai to Royapuram transport",
    "Royapuram lorry service",
    "North Chennai goods transport",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/royapuram-transport",
  },
  openGraph: {
    title: "Royapuram Transport Service | LOADZY",
    description:
      "Find goods transport options and explore routes to and from Royapuram, Chennai.",
    url: "https://www.loadzyinfra.in/royapuram-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Tondiarpet", "/tondiarpet-transport"],
  ["Perambur", "/perambur-transport"],
  ["Kodungaiyur", "/kodungaiyur-transport"],
  ["Vyasarpadi", "/vyasarpadi-transport"],
  ["Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Manali", "/manali-transport"],
];

const routes = [
  ["Royapuram", "Chennai", "/chennai-transport"],
  ["Chennai", "Royapuram", "/royapuram-transport"],
  ["Royapuram", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Royapuram", "/royapuram-transport"],
  ["Royapuram", "Perambur", "/perambur-transport"],
  ["Perambur", "Royapuram", "/royapuram-transport"],
  ["Royapuram", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Royapuram", "/royapuram-transport"],
  ["Royapuram", "Vyasarpadi", "/vyasarpadi-transport"],
  ["Vyasarpadi", "Royapuram", "/royapuram-transport"],
];

export default function RoyapuramTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Royapuram Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore transport options from Royapuram for commercial goods,
            general cargo, full loads, part loads and household shifting.
            Submit your pickup, delivery and load details to request transport.
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
          Transport Services in Royapuram
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          LOADZY helps customers explore suitable truck options based on cargo
          type, shipment size, pickup access and destination. Provide accurate
          route and load details when requesting a vehicle.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For consignments that need a dedicated truck."],
            ["Part Load Transport", "Options for suitable smaller consignments."],
            ["Commercial Goods", "For business stock, supplies and general cargo."],
            ["Wholesale Shipments", "Transport options for suitable wholesale goods."],
            ["Packers and Movers", "For household and office relocation requirements."],
            ["Truck Booking", "Share your pickup, destination, load and date details."],
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
            About Royapuram and Local Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Royapuram is a historic locality in North Chennai. Transport needs
            in the area may include commercial supplies, retail stock, general
            merchandise and household belongings. The suitable vehicle depends
            on the shipment's dimensions, weight, loading arrangements and
            destination.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Customers planning journeys between Royapuram and other parts of
            Chennai can consider both outbound and return transport routes.
            Share the precise pickup and drop-off locations, cargo details and
            preferred date to make a transport request through LOADZY.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore these relevant LOADZY location pages for nearby transport
          connections.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Royapuram to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Royapuram Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore both directions when planning goods transport. These links
            lead to relevant location pages, where you can continue exploring
            your transport requirements.
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
            Need a Truck in Royapuram?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Submit your pickup, delivery, cargo and preferred date to request
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
