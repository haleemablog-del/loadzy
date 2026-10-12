import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ennore Transport Service | Truck Booking | LOADZY",
  description:
    "Explore truck booking and goods transport in Ennore, North Chennai. Find options for commercial cargo, suitable industrial goods, full loads, part loads and household shifting with LOADZY.",
  keywords: [
    "Ennore transport service",
    "Ennore truck booking",
    "Ennore goods transport",
    "Ennore to Chennai transport",
    "Chennai to Ennore transport",
    "Ennore lorry service",
    "Ennore industrial transport",
    "Ennore freight service",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/ennore-transport",
  },
  openGraph: {
    title: "Ennore Transport Service | LOADZY",
    description:
      "Explore goods transport options and routes to and from Ennore, North Chennai.",
    url: "https://www.loadzyinfra.in/ennore-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Kathivakkam", "/kathivakkam-transport"],
  ["Minjur", "/minjur-transport"],
  ["Manali", "/manali-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
];

const routes = [
  ["Ennore", "Chennai", "/chennai-transport"],
  ["Chennai", "Ennore", "/ennore-transport"],
  ["Ennore", "Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Tiruvottiyur", "Ennore", "/ennore-transport"],
  ["Ennore", "Kathivakkam", "/kathivakkam-transport"],
  ["Kathivakkam", "Ennore", "/ennore-transport"],
  ["Ennore", "Minjur", "/minjur-transport"],
  ["Minjur", "Ennore", "/ennore-transport"],
  ["Ennore", "Manali", "/manali-transport"],
  ["Manali", "Ennore", "/ennore-transport"],
];

export default function EnnoreTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Ennore Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore transport options from Ennore for suitable industrial
            cargo, commercial goods, full loads, part loads and household
            shifting. Share your route and shipment requirements to request
            suitable transport through LOADZY.
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
          Transport Services in Ennore
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Customers and businesses can share pickup and delivery locations,
          cargo type, approximate weight and preferred date to explore a
          suitable transport option. Vehicle suitability depends on the
          shipment, loading requirements and destination access.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For consignments requiring a dedicated vehicle."],
            ["Part Load Transport", "Options for suitable smaller shipments."],
            ["Commercial Goods", "For business stock, supplies and general cargo."],
            ["Industrial Cargo", "Suitable transport options for permitted industrial goods."],
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
            About Ennore and Industrial Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Ennore is in the northern Chennai coastal region and is associated
            with industrial and port-related activity. Transport requirements
            may include permitted industrial materials, commercial supplies,
            equipment and general cargo. The appropriate vehicle depends on
            the cargo specifications, handling needs and delivery location.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            When arranging transport from Ennore, customers should confirm
            site entry rules, loading arrangements and any applicable cargo
            handling requirements. Providing accurate pickup and drop-off
            details helps clarify the transport request.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore these LOADZY locality pages for transport connections to
          and from Ennore.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Ennore to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Ennore Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore both directions when planning a freight journey. These
            links lead to relevant locality pages; confirm the exact route,
            cargo requirements and vehicle availability before booking.
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
            Need a Truck in Ennore?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your pickup, delivery, cargo and preferred date to request
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
