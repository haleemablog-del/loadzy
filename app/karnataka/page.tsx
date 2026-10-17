
import Link from "next/link";

const routePairs = [
  // Bangalore to Karnataka cities and towns
  ["Bangalore", "Mysuru"],
  ["Bangalore", "Mangaluru"],
  ["Bangalore", "Hubballi"],
  ["Bangalore", "Dharwad"],
  ["Bangalore", "Belagavi"],
  ["Bangalore", "Kalaburagi"],
  ["Bangalore", "Davanagere"],
  ["Bangalore", "Ballari"],
  ["Bangalore", "Vijayapura"],
  ["Bangalore", "Shivamogga"],
  ["Bangalore", "Tumakuru"],
  ["Bangalore", "Hassan"],
  ["Bangalore", "Udupi"],
  ["Bangalore", "Chitradurga"],
  ["Bangalore", "Kolar"],
  ["Bangalore", "Chikkaballapur"],
  ["Bangalore", "Mandya"],
  ["Bangalore", "Chamarajanagar"],
  ["Bangalore", "Madikeri"],
  ["Bangalore", "Haveri"],
  ["Bangalore", "Gadag"],
  ["Bangalore", "Bagalkot"],
  ["Bangalore", "Raichur"],
  ["Bangalore", "Bidar"],
  ["Bangalore", "Yadgir"],
  ["Bangalore", "Koppal"],
  ["Bangalore", "Karwar"],
  ["Bangalore", "Puttur"],
  ["Bangalore", "Chikkamagaluru"],
  ["Bangalore", "Ramanagara"],
  ["Bangalore", "Channapatna"],
  ["Bangalore", "Doddaballapur"],
  ["Bangalore", "Nelamangala"],
  ["Bangalore", "Anekal"],
  ["Bangalore", "Hoskote"],
  ["Bangalore", "Kanakapura"],
  ["Bangalore", "Gokak"],
  ["Bangalore", "Ranebennur"],
  ["Bangalore", "Sirsi"],
  ["Bangalore", "Bhadravati"],

  // Karnataka local routes
  ["Mysuru", "Mangaluru"],
  ["Mysuru", "Hubballi"],
  ["Mysuru", "Hassan"],
  ["Mysuru", "Mandya"],
  ["Mysuru", "Chamarajanagar"],
  ["Mangaluru", "Udupi"],
  ["Mangaluru", "Puttur"],
  ["Mangaluru", "Madikeri"],
  ["Mangaluru", "Shivamogga"],
  ["Hubballi", "Dharwad"],
  ["Hubballi", "Belagavi"],
  ["Hubballi", "Haveri"],
  ["Hubballi", "Gadag"],
  ["Hubballi", "Bagalkot"],
  ["Hubballi", "Vijayapura"],
  ["Dharwad", "Belagavi"],
  ["Belagavi", "Vijayapura"],
  ["Belagavi", "Bagalkot"],
  ["Kalaburagi", "Bidar"],
  ["Kalaburagi", "Raichur"],
  ["Kalaburagi", "Yadgir"],
  ["Ballari", "Koppal"],
  ["Ballari", "Raichur"],
  ["Ballari", "Davanagere"],
  ["Shivamogga", "Davanagere"],
  ["Shivamogga", "Chikkamagaluru"],
  ["Tumakuru", "Chitradurga"],
  ["Tumakuru", "Hassan"],
  ["Hassan", "Chikkamagaluru"],
  ["Hassan", "Madikeri"],
  ["Kolar", "Chikkaballapur"],
  ["Mandya", "Hassan"],
  ["Udupi", "Karwar"],
  ["Davanagere", "Haveri"],

  // Interstate routes
  ["Bangalore", "Chennai"],
  ["Bangalore", "Hyderabad"],
  ["Bangalore", "Coimbatore"],
  ["Bangalore", "Kochi"],
  ["Bangalore", "Salem"],
  ["Bangalore", "Tirupati"],
  ["Bangalore", "Vijayawada"],
  ["Bangalore", "Thrissur"],
  ["Bangalore", "Kozhikode"],
  ["Bangalore", "Kannur"],
  ["Bangalore", "Mumbai"],
  ["Bangalore", "Pune"],
  ["Bangalore", "Madurai"],
  ["Bangalore", "Tiruchirappalli"],
  ["Mysuru", "Coimbatore"],
  ["Mangaluru", "Kochi"],
  ["Belagavi", "Pune"],
  ["Hubballi", "Goa"],

  // Reverse routes
  ["Mysuru", "Bangalore"],
  ["Mangaluru", "Bangalore"],
  ["Hubballi", "Bangalore"],
  ["Belagavi", "Bangalore"],
  ["Chennai", "Bangalore"],
  ["Hyderabad", "Bangalore"],
  ["Coimbatore", "Bangalore"],
  ["Kochi", "Bangalore"],
  ["Salem", "Bangalore"],
  ["Tirupati", "Bangalore"],
  ["Vijayawada", "Bangalore"],
  ["Mumbai", "Bangalore"],
  ["Pune", "Bangalore"],
] as const;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const routes = routePairs.map(([from, to]) => ({
  from,
  to,
  href: `/routes/${slugify(from)}/${slugify(to)}`,
}));

export default function KarnatakaRoutesPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-teal-400">
            LOADZY · KARNATAKA ROUTES
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Karnataka Truck Transport & Logistics
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Explore truck transport routes across Karnataka for full loads,
            part loads, commercial goods, industrial transport, packers and
            movers, and household shifting with LOADZY.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/karnataka-truck-transport"
            className="rounded-xl bg-teal-400 px-7 py-3 font-black text-[#06264a] shadow-lg transition hover:bg-teal-300"
          >
            Karnataka Transport →
          </Link>

          <Link
            href="/routes"
            className="rounded-xl border border-slate-600 px-7 py-3 font-bold text-white transition hover:border-teal-400 hover:text-teal-300"
          >
            Explore All LOADZY Routes →
          </Link>
        </div>

        <section className="mt-16">
          <div className="mb-7">
            <p className="font-bold uppercase tracking-widest text-teal-400">
              Local & Interstate Connections
            </p>
            <h2 className="mt-2 text-2xl font-black md:text-3xl">
              Explore Truck Routes from Cities and Towns
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Find transport connections between Karnataka's commercial
              centres and destinations in neighbouring states.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <Link
                key={`${route.from}-${route.to}`}
                href={route.href}
                className="group rounded-2xl border border-slate-700 bg-slate-800/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-white transition group-hover:text-teal-300">
                  {route.from} → {route.to}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Explore truck transport from {route.from} to {route.to}
                  for commercial goods and shifting requirements.
                </p>

                <span className="mt-5 inline-block font-bold text-teal-400">
                  View route →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-700 bg-slate-800 p-8 md:p-10">
          <p className="font-bold uppercase tracking-widest text-teal-400">
            LOCAL TRANSPORT
          </p>

          <h2 className="mt-3 text-2xl font-black md:text-3xl">
            Discover Karnataka's Districts, Cities and Towns
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Our Karnataka expansion will include individual location pages
            with locally relevant industries, famous products, commercial
            transport requirements and links to relevant routes.
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            From Mysuru's silk industry to Channapatna's traditional wooden
            toys, each location page will feature its own relevant transport
            information rather than generic repeated content.
          </p>

          <Link
            href="/karnataka-truck-transport"
            className="mt-6 inline-block rounded-xl bg-yellow-400 px-7 py-3 font-black text-[#06264a] transition hover:bg-yellow-300"
          >
            Explore Karnataka Transport →
          </Link>
        </section>
      </div>
    </main>
  );
}
