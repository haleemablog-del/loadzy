import { loadzyRoutes } from "../../lib/routes";

export default function MajorTamilNaduRoutesPage() {
  return (
    <main className="min-h-screen bg-[#062c54] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center">
          <div className="font-black tracking-[0.25em] text-[#1ee1d3]">
            04 · MAJOR TAMIL NADU ROUTES
          </div>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Major Tamil Nadu Truck Routes
          </h1>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-blue-100">
            Explore major truck transport routes across Tamil Nadu for
            full loads, part loads, house shifting, packers & movers and
            commercial goods.
          </p>
        </div>

        {/* ROUTES */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loadzyRoutes.map((route) => (
            <a
              key={`${route.fromSlug}-${route.toSlug}`}
              href={`/routes/${route.fromSlug}/${route.toSlug}`}
              className="rounded-2xl border border-white/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#1ee1d3] hover:shadow-lg"
            >
              <div className="font-black text-[#09264b]">
                🚚 {route.from} → {route.to}
              </div>

              <div className="mt-2 text-sm font-bold text-[#08a99f]">
                View Major Route →
              </div>
            </a>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <a
            href="/routes"
            className="inline-block rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a] shadow-lg transition hover:-translate-y-1"
          >
            ← Back to Tamil Nadu Routes
          </a>
        </div>

      </div>
    </main>
  );
}