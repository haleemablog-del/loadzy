import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tondiarpet Transport Service | Truck Booking | LOADZY",
  description:
    "Book transport from Tondiarpet, North Chennai with LOADZY. Explore full load, part load, commercial goods transport, truck booking and household shifting options.",
  keywords: [
    "Tondiarpet transport service",
    "Tondiarpet truck booking",
    "Tondiarpet goods transport",
    "Tondiarpet to Chennai transport",
    "Chennai to Tondiarpet transport",
    "Tondiarpet lorry service",
    "North Chennai commercial transport",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/tondiarpet-transport",
  },
  openGraph: {
    title: "Tondiarpet Transport Service | LOADZY",
    description:
      "Explore transport services and routes to and from Tondiarpet, Chennai.",
    url: "https://www.loadzyinfra.in/tondiarpet-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Royapuram", "/royapuram-transport"],
  ["Perambur", "/perambur-transport"],
  ["Kodungaiyur", "/kodungaiyur-transport"],
  ["Vyasarpadi", "/vyasarpadi-transport"],
  ["Kathivakkam", "/kathivakkam-transport"],
  ["Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Manali", "/manali-transport"],
];

const routes = [
  ["Tondiarpet", "Chennai", "/chennai-transport"],
  ["Chennai", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Royapuram", "/royapuram-transport"],
  ["Royapuram", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Perambur", "/perambur-transport"],
  ["Perambur", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Kodungaiyur", "/kodungaiyur-transport"],
  ["Kodungaiyur", "Tondiarpet", "/tondiarpet-transport"],
  ["Tondiarpet", "Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Tiruvottiyur", "Tondiarpet", "/tondiarpet-transport"],
];

export default function TondiarpetTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Tondiarpet Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Find transport options from Tondiarpet for commercial stock,
            general goods, full loads, part loads and household shifting.
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
          Transport Services in Tondiarpet
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Whether you are moving business goods or household belongings, provide
          the pickup address, delivery location, cargo description and required
          date to explore a suitable transport option through LOADZY.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For consignments requiring a dedicated vehicle."],
            ["Part Load Transport", "For suitable smaller shipments and shared capacity."],
            ["Commercial Goods", "Transport options for business stock and supplies."],
            ["Wholesale Cargo", "Suitable vehicle options for general wholesale goods."],
            ["Packers and Movers", "For home and office relocation requirements."],
            ["Truck Booking", "Submit route, cargo and pickup-date details."],
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
            About Tondiarpet and Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Tondiarpet is a well-established locality in North Chennai.
            Residents, traders and businesses may need transport for general
            merchandise, commercial supplies, household goods and other
            suitable cargo. Vehicle selection depends on load size, weight,
            access conditions and delivery requirements.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Transport planning between Tondiarpet and nearby Chennai localities
            should consider both outbound and return journeys. Share accurate
            pickup and drop-off details with your cargo information when
            submitting a request.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Browse these relevant LOADZY location pages for nearby destinations
          and transport planning.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Tondiarpet to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Tondiarpet Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore both directions when planning a freight journey. These
            links lead to relevant location pages; confirm your exact route
            and transport availability before booking.
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
            Need a Truck in Tondiarpet?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your pickup, destination, load type and preferred date to
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
