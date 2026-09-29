import { loadzyRoutes } from "../lib/routes";

export default function RoutesPage() {
  const states = [
    {
      name: "Tamil Nadu",
      slug: "tamil-nadu",
      cities: [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Salem",
        "Hosur",
        "Tirupur",
        "Vellore",
        "Tirunelveli",
      ],
    },
    {
      name: "Karnataka",
      slug: "karnataka",
      cities: [
        "Bangalore",
        "Mysore",
        "Mangalore",
        "Hubli",
        "Dharwad",
        "Tumakuru",
      ],
    },
    {
      name: "Kerala",
      slug: "kerala",
      cities: [
        "Kochi",
        "Thiruvananthapuram",
        "Kozhikode",
        "Thrissur",
        "Palakkad",
        "Kannur",
      ],
    },
    {
      name: "Andhra Pradesh",
      slug: "andhra-pradesh",
      cities: [
        "Vijayawada",
        "Visakhapatnam",
        "Tirupati",
        "Chittoor",
        "Nellore",
        "Kurnool",
      ],
    },
    {
      name: "Telangana",
      slug: "telangana",
      cities: [
        "Hyderabad",
        "Warangal",
        "Nizamabad",
        "Karimnagar",
        "Khammam",
      ],
    },
  ];

 const majorRoutes = loadzyRoutes;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-[#062c54] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <div className="font-black tracking-widest text-[#1ee1d3]">
            LOADZY ROUTES
          </div>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Truck Transport Routes Across South India
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Book trucks and connect loads across Tamil Nadu, Karnataka,
            Kerala, Andhra Pradesh and Telangana with LOADZY.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#book"
              className="rounded-xl bg-[#1ee1d3] px-7 py-4 font-black text-[#06264a]"
            >
              Get Truck Quote →
            </a>

            <a
              href="/load-search"
              className="rounded-xl border border-white px-7 py-4 font-black text-white"
            >
              Find Available Loads →
            </a>
          </div>

        </div>
      </section>

      {/* States */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <div className="font-black tracking-widest text-[#08a99f]">
              SOUTH INDIA
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#09264b]">
              Transport across five states
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Explore important cities and transport locations served by
              the LOADZY network.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {states.map((state) => (
              <div
                key={state.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-black text-[#09264b]">
                  {state.name}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {state.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-6 font-black text-[#08a99f]"
                >
                  Explore {state.name} Routes →
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Major Routes */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <div className="font-black tracking-widest text-[#08a99f]">
              POPULAR CORRIDORS
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#09264b]">
              Major South India Truck Routes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Important routes we can build dedicated LOADZY pages for.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {majorRoutes.map((route) => (
  <a
    key={`${route.fromSlug}-${route.toSlug}`}
    href={`/routes/${route.fromSlug}/${route.toSlug}`}
    className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-[#09264b] shadow-sm transition hover:-translate-y-1 hover:border-[#1ee1d3] hover:shadow-md"
  >
    🚚 {route.from} → {route.to}

    <span className="mt-2 block text-sm font-bold text-[#08a99f]">
      View Route →
    </span>
  </a>
))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#062c54] px-6 py-16 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-black">
            Need a truck for your route?
          </h2>

          <p className="mt-4 text-blue-100">
            Tell LOADZY your pickup, delivery and truck requirements.
          </p>

          <a
            href="/#book"
            className="mt-8 inline-block rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a]"
          >
            Book a Truck →
          </a>

        </div>

      </section>

    </main>
  );
}