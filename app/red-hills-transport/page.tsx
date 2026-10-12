import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Red Hills Transport Service | Truck Booking | LOADZY",
  description:
    "Explore truck booking and goods transport from Red Hills, North Chennai. Find options for commercial goods, full loads, part loads and household shifting with LOADZY.",
  keywords: [
    "Red Hills transport service",
    "Red Hills truck booking",
    "Red Hills goods transport",
    "Red Hills to Chennai transport",
    "Chennai to Red Hills transport",
    "Red Hills lorry service",
    "Red Hills freight transport",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/red-hills-transport",
  },
  openGraph: {
    title: "Red Hills Transport Service | LOADZY",
    description:
      "Find transport services and routes to and from Red Hills, Chennai.",
    url: "https://www.loadzyinfra.in/red-hills-transport",
    type: "website",
  },
};

const destinations = [
  ["Chennai", "/chennai-transport"],
  ["Puzhal", "/puzhal-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Minjur", "/minjur-transport"],
  ["Manali", "/manali-transport"],
  ["Avadi", "/avadi-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
];

const routes = [
  ["Red Hills", "Chennai", "/chennai-transport"],
  ["Chennai", "Red Hills", "/red-hills-transport"],
  ["Red Hills", "Puzhal", "/puzhal-transport"],
  ["Puzhal", "Red Hills", "/red-hills-transport"],
  ["Red Hills", "Madhavaram", "/madhavaram-transport"],
  ["Madhavaram", "Red Hills", "/red-hills-transport"],
  ["Red Hills", "Minjur", "/minjur-transport"],
  ["Minjur", "Red Hills", "/red-hills-transport"],
  ["Red Hills", "Avadi", "/avadi-transport"],
  ["Avadi", "Red Hills", "/red-hills-transport"],
];

export default function RedHillsTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-teal-400">
            LOADZY · MOVE. CONNECT. DELIVER.
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Red Hills Transport Service & Truck Booking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore transport options from Red Hills for commercial goods,
            general cargo, full loads, part loads and household shifting.
            Share your pickup, destination and shipment details to request
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
          Transport Services in Red Hills
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Share your cargo type, approximate weight, pickup access and
          delivery location to explore a suitable vehicle. The right transport
          arrangement depends on the goods and the requirements of your journey.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Full Load Transport", "For consignments requiring a dedicated truck."],
            ["Part Load Transport", "Options for suitable smaller shipments."],
            ["Commercial Goods", "For business stock, supplies and general cargo."],
            ["Construction Supplies", "Transport options for permitted building materials."],
            ["Packers and Movers", "For household and office relocation requirements."],
            ["Truck Booking", "Submit route, load and preferred pickup-date details."],
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
            About Red Hills and Local Goods Transport
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Red Hills is in the northern Chennai region. Residents, traders
            and businesses may require transport for general merchandise,
            commercial supplies, household belongings and other suitable
            cargo. Vehicle selection depends on shipment dimensions, weight,
            loading arrangements and delivery access.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Its connections with nearby northern Chennai localities make it
            useful to consider both outbound and return journeys. Include
            precise pickup and delivery locations, cargo details and your
            preferred date when requesting transport through LOADZY.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Major Transport Destinations</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore these LOADZY locality pages for transport connections to
          and from Red Hills.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="rounded-lg border border-slate-200 p-4 font-semibold hover:border-teal-500 hover:text-teal-700"
            >
              Red Hills to/from {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Red Hills Routes and Reverse Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Consider both directions when planning freight. These links lead
            to relevant location pages; confirm the precise journey and
            transport availability before booking.
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
            Need a Truck in Red Hills?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Share your pickup, delivery, cargo and preferred date to request
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
