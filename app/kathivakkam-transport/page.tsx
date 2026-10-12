import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kathivakkam Transport Service | Truck Booking | LOADZY",
  description:
    "Explore truck booking and goods transport from Kathivakkam, Chennai. Find options for commercial cargo, full loads, part loads and household shifting with LOADZY.",
  keywords: [
    "Kathivakkam transport service",
    "Kathivakkam truck booking",
    "Kathivakkam goods transport",
    "Kathivakkam to Chennai transport",
    "Chennai to Kathivakkam transport",
    "Kathivakkam lorry service",
    "North Chennai industrial transport",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/kathivakkam-transport",
  },
  openGraph: {
    title: "Kathivakkam Transport Service | LOADZY",
    description:
      "Explore goods transport, truck booking and routes to and from Kathivakkam.",
    url: "https://www.loadzyinfra.in/kathivakkam-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Manali", "/manali-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Minjur", "/minjur-transport"],
  ["Ennore", "/ennore-transport"],
  ["Ambur", "/ambur-transport"],
  ["Vellore", "/vellore-transport"],
];

const routes = [
  ["Kathivakkam", "Chennai", "/chennai-transport"],
  ["Chennai", "Kathivakkam", "/kathivakkam-transport"],
  ["Kathivakkam", "Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Tiruvottiyur", "Kathivakkam", "/kathivakkam-transport"],
  ["Kathivakkam", "Ennore", "/ennore-transport"],
  ["Ennore", "Kathivakkam", "/kathivakkam-transport"],
  ["Kathivakkam", "Manali", "/manali-transport"],
  ["Manali", "Kathivakkam", "/kathivakkam-transport"],
  ["Kathivakkam", "Minjur", "/minjur-transport"],
  ["Minjur", "Kathivakkam", "/kathivakkam-transport"],
];

export default function KathivakkamTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Kathivakkam Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore transport options from Kathivakkam in North Chennai for
            commercial goods, industrial consignments, full loads, part loads
            and household shifting.
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
          Transport Services in Kathivakkam
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Share your pickup point, destination, cargo details and preferred
          date to explore a suitable transport option with LOADZY. Vehicle
          suitability depends on the size, weight and nature of the goods.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "Truck options for consignments requiring a dedicated vehicle."],
            ["Part Load Transport", "Options for suitable smaller shipments."],
            ["Commercial Goods", "Transport for business stock and general cargo."],
            ["Industrial Cargo", "Arrange suitable transport for permitted industrial goods."],
            ["Packers and Movers", "Transport options for home and office relocations."],
            ["Truck Booking", "Provide route and cargo details for a transport request."],
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
            About Kathivakkam and Local Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Kathivakkam is in the northern Chennai area, where transport
            requirements can include commercial supplies, general goods,
            construction materials and other suitable cargo. Businesses should
            confirm vehicle access, loading arrangements and delivery
            requirements before booking.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Its connections with nearby northern Chennai localities make it
            useful to consider both outbound and return transport journeys.
            For a more accurate request, provide the exact pickup and delivery
            locations, load description, approximate weight and pickup date.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore these LOADZY location pages for transport information and
          destination planning.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Kathivakkam to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Kathivakkam Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore both directions when planning a shipment. Confirm route
            details and truck availability for your specific transport request.
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
            Need Transport from Kathivakkam?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your pickup, delivery, cargo and date requirements to request
            transport through LOADZY.
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
