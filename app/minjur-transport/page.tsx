import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minjur Transport Service | Truck Booking | LOADZY",
  description:
    "Book trucks from Minjur for full load, part load, commercial goods transport and household shifting with LOADZY. Explore transport routes from Minjur and return routes to Minjur.",
  keywords: [
    "Minjur transport service",
    "Minjur truck booking",
    "Minjur goods transport",
    "Minjur to Chennai transport",
    "Chennai to Minjur transport",
    "Minjur lorry service",
    "Minjur industrial transport",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/minjur-transport",
  },
  openGraph: {
    title: "Minjur Transport Service | LOADZY",
    description:
      "Find transport options and truck booking routes from and to Minjur.",
    url: "https://www.loadzyinfra.in/minjur-transport",
    type: "website",
  },
};

const routes = [
  { from: "Minjur", to: "Chennai", slug: "chennai-transport" },
  { from: "Chennai", to: "Minjur", slug: "minjur-transport" },
  { from: "Minjur", to: "Tiruvottiyur", slug: "tiruvottiyur-transport" },
  { from: "Tiruvottiyur", to: "Minjur", slug: "minjur-transport" },
  { from: "Minjur", to: "Manali", slug: "manali-transport" },
  { from: "Manali", to: "Minjur", slug: "minjur-transport" },
  { from: "Minjur", to: "Madhavaram", slug: "madhavaram-transport" },
  { from: "Madhavaram", to: "Minjur", slug: "minjur-transport" },
  { from: "Minjur", to: "Poonamallee", slug: "poonamallee-transport" },
  { from: "Poonamallee", to: "Minjur", slug: "minjur-transport" },
];

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Tiruvottiyur", "/tiruvottiyur-transport"],
  ["Manali", "/manali-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Ambur", "/ambur-transport"],
  ["Vellore", "/vellore-transport"],
];

export default function MinjurTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Minjur Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Looking for goods transport from Minjur? Explore truck booking
            options for commercial goods, industrial consignments, full loads,
            part loads and household shifting with LOADZY.
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
          Transport Services Available in Minjur
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          LOADZY helps customers explore truck transport options for different
          types of consignments. Select a suitable vehicle and share your
          pickup, delivery and load requirements to request transport.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For consignments requiring a dedicated truck."],
            ["Part Load Transport", "For suitable smaller consignments sharing available capacity."],
            ["Commercial Goods", "For business stock, supplies and general cargo."],
            ["Industrial Transport", "For suitable industrial materials and equipment."],
            ["Packers and Movers", "For home and office relocation requirements."],
            ["Truck Booking", "Share your route, load details and required pickup date."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Keep About before Major Cities. */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            About Minjur and Local Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Minjur is located in the northern Chennai region of Tamil Nadu.
            Businesses and residents may need transport for general goods,
            construction supplies, commercial stock and household belongings.
            Transport requirements depend on the cargo, vehicle size, pickup
            access and destination.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Customers arranging transport from Minjur can compare relevant
            destination options around Chennai and other parts of Tamil Nadu.
            For an accurate request, provide the exact pickup point, delivery
            location, load description, approximate weight and preferred date.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore existing LOADZY location pages to learn about transport
          options for nearby areas and longer routes.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Minjur transport to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Minjur Routes and Reverse Routes</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Both directions matter when planning freight. These links connect
            Minjur with existing location pages; confirm truck availability
            and freight details for your specific journey.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route, index) => (
              <Link
                key={`${route.from}-${route.to}-${index}`}
                href={`/${route.slug}`}
                className="rounded-lg border border-slate-200 bg-white p-4 hover:border-teal-500"
              >
                <span className="font-semibold">{route.from}</span>
                <span className="mx-2 text-teal-600">→</span>
                <span className="font-semibold">{route.to}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Need a Truck from Minjur?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Submit your transport requirements, including pickup and delivery
            locations, load type and preferred pickup date.
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
