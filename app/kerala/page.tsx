import Link from "next/link";

const routes = [
  {
    from: "Kochi",
    to: "Bangalore",
    href: "/routes/kochi/bangalore",
  },
  {
    from: "Kochi",
    to: "Chennai",
    href: "/routes/kochi/chennai",
  },
  {
    from: "Kochi",
    to: "Coimbatore",
    href: "/routes/kochi/coimbatore",
  },
  {
    from: "Kochi",
    to: "Thiruvananthapuram",
    href: "/routes/kochi/thiruvananthapuram",
  },
  {
    from: "Kochi",
    to: "Thrissur",
    href: "/routes/kochi/thrissur",
  },
  {
    from: "Kochi",
    to: "Kozhikode",
    href: "/routes/kochi/kozhikode",
  },
  {
    from: "Kochi",
    to: "Palakkad",
    href: "/routes/kochi/palakkad",
  },
  {
    from: "Kozhikode",
    to: "Bangalore",
    href: "/routes/kozhikode/bangalore",
  },
  {
    from: "Kannur",
    to: "Bangalore",
    href: "/routes/kannur/bangalore",
  },
  {
    from: "Thrissur",
    to: "Bangalore",
    href: "/routes/thrissur/bangalore",
  },
  {
    from: "Palakkad",
    to: "Coimbatore",
    href: "/routes/palakkad/coimbatore",
  },
  {
    from: "Thiruvananthapuram",
    to: "Chennai",
    href: "/routes/thiruvananthapuram/chennai",
  },
];

export default function KeralaRoutesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-teal-600">
            LOADZY ROUTES
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#062B55] md:text-5xl">
            Kerala Truck Transport Routes
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Find truck transport routes across Kerala for full loads,
            part loads, house shifting, packers & movers and commercial goods.
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