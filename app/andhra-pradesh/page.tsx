import Link from "next/link";

const routes = [
  {
    from: "Chennai",
    to: "Vijayawada",
    href: "/routes/chennai/vijayawada",
  },
  {
    from: "Vijayawada",
    to: "Chennai",
    href: "/routes/vijayawada/chennai",
  },
  {
    from: "Chennai",
    to: "Tirupati",
    href: "/routes/chennai/tirupati",
  },
  {
    from: "Bangalore",
    to: "Tirupati",
    href: "/routes/bangalore/tirupati",
  },
  {
    from: "Bangalore",
    to: "Vijayawada",
    href: "/routes/bangalore/vijayawada",
  },
  {
    from: "Chennai",
    to: "Nellore",
    href: "/routes/chennai/nellore",
  },
  {
    from: "Chennai",
    to: "Guntur",
    href: "/routes/chennai/guntur",
  },
  {
    from: "Chennai",
    to: "Visakhapatnam",
    href: "/routes/chennai/visakhapatnam",
  },
  {
    from: "Hyderabad",
    to: "Vijayawada",
    href: "/routes/hyderabad/vijayawada",
  },
  {
    from: "Hyderabad",
    to: "Visakhapatnam",
    href: "/routes/hyderabad/visakhapatnam",
  },
  {
    from: "Vijayawada",
    to: "Visakhapatnam",
    href: "/routes/vijayawada/visakhapatnam",
  },
  {
    from: "Chennai",
    to: "Kadapa",
    href: "/routes/chennai/kadapa",
  },
];

export default function AndhraPradeshRoutesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-teal-600">
            LOADZY ROUTES
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#062B55] md:text-5xl">
            Andhra Pradesh Truck Transport Routes
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Find truck transport routes connecting Andhra Pradesh with
            Chennai, Bangalore, Hyderabad and other major cities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Link
              key={`${route.from}-${route.to}`}
              href={route.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-black text-[#062B55]">
                {route.from} → {route.to}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Truck transport from {route.from} to {route.to}
              </p>

              <span className="mt-4 inline-block font-bold text-teal-600">
                View route →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/routes"
            className="inline-block rounded-xl bg-teal-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-teal-600"
          >
            Explore All LOADZY Routes →
          </Link>
        </div>
      </div>
    </main>
  );
}