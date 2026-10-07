import Link from "next/link";
import { loadzyLocations } from "../lib/locations";

export default function TamilNaduRoutesPage() {
  const districts = loadzyLocations.filter(
    (location) =>
      location.type === "district" &&
      location.parent === "tamil-nadu"
  );

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-teal-600">
            LOADZY ROUTES
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#062B55] md:text-5xl">
            Tamil Nadu Truck Transport Routes
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Find truck transport routes across Tamil Nadu for full loads,
            part loads, house shifting, packers & movers and commercial goods.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {districts.map((district) => (
            <Link
              key={district.slug}
              href={`/tamil-nadu/${district.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-black text-[#062B55]">
                {district.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Truck transport routes in {district.name}
              </p>

              <span className="mt-4 inline-block font-bold text-teal-600">
                Explore routes →
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