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

          {/* TIRUPATTUR TRANSPORT SECTION */}
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#08a99f]">
          Tirupattur Transport
        </p>

        <h3 className="mt-2 text-2xl font-black text-[#062B55]">
          Truck Transport &amp; Logistics in Tirupattur
        </h3>

        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
          Book trucks from Tirupattur for house shifting, packers &amp; movers,
          part load, full load and commercial goods transport.
        </p>

        <a
          href="/tirupattur-transport"
          className="mt-5 inline-block rounded-xl bg-[#1ee1d3] px-7 py-3 font-black text-[#06264a] shadow-lg transition hover:-translate-y-1 hover:bg-[#12d5c8]"
        >
          Tirupattur Transport →
        </a>
      </div>
    </section>

    {/* VANIYAMBADI TRANSPORT SECTION */}
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="font-black uppercase tracking-[0.2em] text-teal-600">
            VANIYAMBADI TRANSPORT SERVICES
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Vaniyambadi Truck Transport &amp; Packers Movers
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Book trucks and lorries from Vaniyambadi for house shifting,
            packers and movers, full load, part load, commercial goods and
            industrial transport with LOADZY. Explore truck transport routes
            connecting Vaniyambadi with Chennai, Bangalore, Vellore,
            Krishnagiri, Hosur, Salem and other important locations.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="/vaniyambadi-transport"
              className="rounded-xl bg-teal-500 px-7 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
            >
              Vaniyambadi Transport →
            </a>

            <a
              href="/routes/vaniyambadi/chennai"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-yellow-300"
            >
              Vaniyambadi → Chennai →
            </a>

            <a
              href="/routes/vaniyambadi/bangalore"
              className="rounded-xl border-2 border-blue-950 px-7 py-4 font-black text-blue-950 transition hover:bg-blue-950 hover:text-white"
            >
              Vaniyambadi → Bangalore →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* AMBUR TRANSPORT SECTION */}
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            Ambur Transport Services
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Ambur Truck Transport &amp; Packers Movers
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Book trucks and lorries from Ambur for house shifting, packers and
            movers, full load, part load, commercial goods and industrial
            transport with LOADZY. Explore transport routes connecting Ambur
            with Chennai, Bangalore, Vellore, Vaniyambadi, Tirupattur and other
            destinations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ambur-transport"
              className="rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Explore Ambur Transport
            </Link>

            <Link
              href="/load-search"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Find My Truck
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>
);
}