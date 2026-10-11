import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kanchipuram Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport from Kanchipuram for silk, textiles, industrial goods, commercial loads, full loads, part loads and household shifting with LOADZY.",
  keywords: [
    "Kanchipuram truck transport",
    "Kanchipuram lorry transport",
    "Kanchipuram goods transport",
    "Kanchipuram silk goods transport",
    "Kanchipuram packers and movers",
    "Kanchipuram house shifting",
    "Kanchipuram truck booking",
    "Kanchipuram to Chennai transport",
    "Kanchipuram to Bangalore transport",
    "LOADZY Kanchipuram",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/kanchipuram-transport",
  },
};

const services = [
  {
    title: "Full Load Transport",
    description:
      "Book a suitable truck for large commercial consignments, machinery and bulk goods.",
    href: "/full-load",
  },
  {
    title: "Part Load Transport",
    description:
      "Find transport options for smaller consignments and goods that do not need a full truck.",
    href: "/part-load",
  },
  {
    title: "Packers & Movers",
    description:
      "Arrange transport for household belongings, furniture and relocation goods.",
    href: "/packers-movers",
  },
  {
    title: "Industrial Goods Transport",
    description:
      "Transport industrial materials, textile goods and business consignments.",
    href: "/industrial-transport",
  },
];

const routes = [
  { from: "Kanchipuram", to: "Chennai", href: "/routes/kanchipuram/chennai" },
  { from: "Chennai", to: "Kanchipuram", href: "/routes/chennai/kanchipuram" },
  { from: "Kanchipuram", to: "Bangalore", href: "/routes/kanchipuram/bangalore" },
  { from: "Bangalore", to: "Kanchipuram", href: "/routes/bangalore/kanchipuram" },
  { from: "Kanchipuram", to: "Vellore", href: "/routes/kanchipuram/vellore" },
  { from: "Vellore", to: "Kanchipuram", href: "/routes/vellore/kanchipuram" },
  { from: "Kanchipuram", to: "Ranipet", href: "/routes/kanchipuram/ranipet" },
  { from: "Ranipet", to: "Kanchipuram", href: "/routes/ranipet/kanchipuram" },
  { from: "Kanchipuram", to: "Tirupattur", href: "/routes/kanchipuram/tirupattur" },
  { from: "Tirupattur", to: "Kanchipuram", href: "/routes/tirupattur/kanchipuram" },
];

const nearbyAreas = [
  { name: "Chennai", href: "/chennai-transport" },
  { name: "Vellore", href: "/vellore-transport" },
  { name: "Ranipet", href: "/ranipet-transport" },
  { name: "Ambur", href: "/ambur-transport" },
  { name: "Tirupattur", href: "/tirupattur-transport" },
  { name: "Vaniyambadi", href: "/vaniyambadi-transport" },
];

export default function KanchipuramTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            LOADZY · Move. Connect. Deliver.
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Kanchipuram Truck Transport & Goods Booking
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Find transport options from Kanchipuram for silk and textile goods,
            commercial consignments, industrial materials, full loads, part
            loads and household shifting. Connect with LOADZY for your
            transport requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Book a Truck
            </Link>
            <Link
              href="/routes"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Transport Routes
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <h2 className="text-3xl font-bold">
          Transport Services in Kanchipuram
        </h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Kanchipuram is widely known for its silk sarees and textile
          businesses. Businesses and residents may need reliable transport for
          merchandise, shop supplies, industrial goods and household
          belongings. Choose a suitable transport service for your load and
          destination.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-teal-400 hover:shadow-md"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-5 inline-block font-semibold text-teal-700 hover:underline"
              >
                Explore service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Popular Transport Routes from Kanchipuram
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore transport connections between Kanchipuram and important
            destinations in Tamil Nadu and neighbouring states.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <Link
                key={`${route.from}-${route.to}`}
                href={route.href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-semibold transition hover:border-teal-400 hover:shadow-sm"
              >
                {route.from} to {route.to}
                <span className="mt-2 block text-sm font-normal text-teal-700">
                  Explore route →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <h2 className="text-3xl font-bold">
          Nearby Areas We Serve
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Explore LOADZY transport pages for nearby cities and towns.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="rounded-full border border-slate-200 px-5 py-3 font-medium transition hover:border-teal-400 hover:bg-teal-50"
            >
              {area.name} Transport
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-14 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Why Choose LOADZY for Kanchipuram Transport?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Suitable Truck Options",
                description:
                  "Find transport options suited to your load requirements.",
              },
              {
                title: "Full and Part Loads",
                description:
                  "Explore solutions for different consignment sizes.",
              },
              {
                title: "Business and Household",
                description:
                  "Transport support for commercial goods and relocations.",
              },
              {
                title: "Route Connections",
                description:
                  "Explore transport routes connecting Kanchipuram with other destinations.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/15 p-5"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 p-7">
            <h2 className="text-2xl font-bold">
              Need a Truck from Kanchipuram?
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Explore LOADZY to find transport options for your next delivery
              or shifting requirement.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Get Started with LOADZY
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}