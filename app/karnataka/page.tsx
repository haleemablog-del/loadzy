import Link from "next/link";

const routes = [
  {
    from: "Bangalore",
    to: "Chennai",
    href: "/routes/bangalore/chennai",
  },
  {
    from: "Bangalore",
    to: "Hyderabad",
    href: "/routes/bangalore/hyderabad",
  },
  {
    from: "Bangalore",
    to: "Coimbatore",
    href: "/routes/bangalore/coimbatore",
  },
  {
    from: "Bangalore",
    to: "Kochi",
    href: "/routes/bangalore/kochi",
  },
  {
    from: "Bangalore",
    to: "Salem",
    href: "/routes/bangalore/salem",
  },
  {
    from: "Bangalore",
    to: "Mysore",
    href: "/routes/bangalore/mysore",
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
    from: "Bangalore",
    to: "Mangalore",
    href: "/routes/bangalore/mangalore",
  },
  {
    from: "Bangalore",
    to: "Thrissur",
    href: "/routes/bangalore/thrissur",
  },
  {
    from: "Bangalore",
    to: "Kozhikode",
    href: "/routes/bangalore/kozhikode",
  },
  {
    from: "Bangalore",
    to: "Kannur",
    href: "/routes/bangalore/kannur",
  },
];

export default function KarnatakaRoutesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-teal-600">
            LOADZY ROUTES
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#062B55] md:text-5xl">
            Karnataka Truck Transport Routes
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Find truck transport routes from Bangalore and across Karnataka
            for full loads, part loads, house shifting and commercial goods.
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