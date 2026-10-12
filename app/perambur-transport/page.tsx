import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perambur Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport options in Perambur, Chennai. Explore full load, part load, commercial goods transport and household shifting with LOADZY.",
  keywords: [
    "Perambur transport service",
    "Perambur truck booking",
    "Perambur goods transport",
    "Perambur to Chennai transport",
    "Chennai to Perambur transport",
    "Perambur lorry service",
    "North Chennai truck booking",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/perambur-transport",
  },
  openGraph: {
    title: "Perambur Transport Service | LOADZY",
    description:
      "Explore goods transport services and routes to and from Perambur, Chennai.",
    url: "https://www.loadzyinfra.in/perambur-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Royapuram", "/royapuram-transport"],
  ["Tondiarpet", "/tondiarpet-transport"],
  ["Kodungaiyur", "/kodungaiyur-transport"],
  ["Vyasarpadi", "/vyasarpadi-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Ambattur", "/ambattur-transport"],
  ["Tiruvottiyur", "/tiruvottiyur-transport"],
];

const routes = [
  ["Perambur", "Chennai", "/chennai-transport"],
  ["Chennai", "Perambur", "/perambur-transport"],
  ["Perambur", "Royapuram", "/royapuram-transport"],
  ["Royapuram", "Perambur", "/perambur-transport"],
  ["Perambur", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Perambur", "/perambur-transport"],
  ["Perambur", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Perambur", "/perambur-transport"],
  ["Perambur", "Vyasarpadi", "/vyasarpadi-transport"],
  ["Vyasarpadi", "Perambur", "/perambur-transport"],
];

export default function PeramburTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Perambur Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore truck transport options from Perambur for commercial goods,
            general cargo, full loads, part loads and household shifting.
            Share your route and shipment details to request transport.
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
          Transport Services in Perambur
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Tell LOADZY where your shipment will be collected and delivered.
          Include the type and approximate weight of the goods, vehicle
          requirements and preferred pickup date so the transport request can
          be assessed accurately.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For shipments requiring a dedicated vehicle."],
            ["Part Load Transport", "Options for suitable smaller consignments."],
            ["Commercial Goods", "For retail stock, business supplies and general cargo."],
            ["Furniture Transport", "For suitable furniture and bulky household goods."],
            ["Packers and Movers", "For home and office relocation requirements."],
            ["Truck Booking", "Submit pickup, destination, load and date details."],
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
            About Perambur and Local Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Perambur is an established residential and commercial locality in
            North Chennai. Transport requirements may include business
            inventory, furniture, household belongings and general merchandise.
            The right vehicle depends on shipment size, weight, loading access
            and delivery conditions.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Its connections to other Chennai localities make it practical to
            consider outbound and return journeys when planning goods
            movement. Customers should share accurate pickup and drop-off
            addresses, cargo details and the intended collection date.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Browse relevant LOADZY location pages for nearby transport
          connections and destination information.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Perambur to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Perambur Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore both directions when planning a shipment. These links
            direct visitors to relevant locality pages, where available.
            Confirm the exact route and truck availability before booking.
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
            Need a Truck in Perambur?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your pickup point, delivery location, cargo type and
            preferred date to request transport through LOADZY.
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
