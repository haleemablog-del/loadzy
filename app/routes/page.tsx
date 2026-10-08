import { loadzyRoutes } from "../lib/routes";

const townRoutes = [
  ["Vaniyambadi", "Chennai"],
  ["Vaniyambadi", "Bangalore"],
  ["Ambur", "Chennai"],
  ["Ambur", "Bangalore"],
  ["Tirupattur", "Chennai"],
  ["Tirupattur", "Bangalore"],
  ["Krishnagiri", "Chennai"],
  ["Krishnagiri", "Bangalore"],
  ["Hosur", "Chennai"],
  ["Hosur", "Bangalore"],
  ["Gudiyatham", "Chennai"],
  ["Gudiyatham", "Bangalore"],
  ["Ranipet", "Chennai"],
  ["Arakkonam", "Chennai"],
  ["Mettur", "Salem"],
  ["Pollachi", "Coimbatore"],
  ["Udumalpet", "Coimbatore"],
];

const cityRoutes = [
  ["Chennai", "Coimbatore"],
  ["Chennai", "Madurai"],
  ["Chennai", "Salem"],
  ["Chennai", "Tiruchirappalli"],
  ["Chennai", "Tirunelveli"],
  ["Chennai", "Vellore"],
  ["Chennai", "Hosur"],
  ["Chennai", "Tiruppur"],
  ["Coimbatore", "Chennai"],
  ["Coimbatore", "Bangalore"],
  ["Madurai", "Chennai"],
  ["Madurai", "Coimbatore"],
  ["Salem", "Chennai"],
  ["Salem", "Bangalore"],
  ["Vellore", "Chennai"],
  ["Vellore", "Bangalore"],
  ["Tiruppur", "Chennai"],
  ["Tiruppur", "Bangalore"],
];

const districtRoutes = [
  ["Tirupattur", "Chennai"],
  ["Tirupattur", "Bangalore"],
  ["Vellore", "Chennai"],
  ["Vellore", "Bangalore"],
  ["Ranipet", "Chennai"],
  ["Tiruvannamalai", "Chennai"],
  ["Krishnagiri", "Chennai"],
  ["Krishnagiri", "Bangalore"],
  ["Dharmapuri", "Chennai"],
  ["Dharmapuri", "Bangalore"],
  ["Salem", "Chennai"],
  ["Namakkal", "Chennai"],
  ["Erode", "Chennai"],
  ["Erode", "Bangalore"],
  ["Coimbatore", "Chennai"],
  ["Dindigul", "Chennai"],
  ["Madurai", "Chennai"],
  ["Thanjavur", "Chennai"],
  ["Tiruchirappalli", "Chennai"],
  ["Tirunelveli", "Chennai"],
  ["Kanyakumari", "Chennai"],
];

const tamilNaduRoutes = [
  ["Chennai", "Coimbatore"],
  ["Chennai", "Madurai"],
  ["Chennai", "Salem"],
  ["Chennai", "Tiruchirappalli"],
  ["Chennai", "Tirunelveli"],
  ["Chennai", "Tiruppur"],
  ["Chennai", "Vellore"],
  ["Chennai", "Hosur"],
  ["Coimbatore", "Chennai"],
  ["Coimbatore", "Madurai"],
  ["Coimbatore", "Salem"],
  ["Coimbatore", "Tiruppur"],
  ["Madurai", "Chennai"],
  ["Madurai", "Coimbatore"],
  ["Salem", "Chennai"],
  ["Salem", "Coimbatore"],
  ["Tiruchirappalli", "Chennai"],
  ["Tiruchirappalli", "Coimbatore"],
  ["Tirunelveli", "Chennai"],
  ["Kanyakumari", "Chennai"],
];

const karnatakaRoutes = [
  ["Chennai", "Bangalore"],
  ["Bangalore", "Chennai"],
  ["Coimbatore", "Bangalore"],
  ["Bangalore", "Coimbatore"],
  ["Salem", "Bangalore"],
  ["Vellore", "Bangalore"],
  ["Hosur", "Bangalore"],
  ["Bangalore", "Mysore"],
  ["Mysore", "Bangalore"],
  ["Bangalore", "Mangalore"],
  ["Mangalore", "Bangalore"],
  ["Bangalore", "Hubli"],
  ["Hubli", "Bangalore"],
  ["Bangalore", "Tumakuru"],
  ["Tumakuru", "Bangalore"],
];

const keralaRoutes = [
  ["Chennai", "Kochi"],
  ["Kochi", "Chennai"],
  ["Coimbatore", "Kochi"],
  ["Kochi", "Coimbatore"],
  ["Coimbatore", "Palakkad"],
  ["Palakkad", "Coimbatore"],
  ["Chennai", "Thiruvananthapuram"],
  ["Thiruvananthapuram", "Chennai"],
  ["Coimbatore", "Thrissur"],
  ["Thrissur", "Coimbatore"],
  ["Kochi", "Thrissur"],
  ["Thrissur", "Kochi"],
  ["Kochi", "Kozhikode"],
  ["Kozhikode", "Kochi"],
  ["Kochi", "Kannur"],
  ["Kannur", "Kochi"],
];

const andhraRoutes = [
  ["Chennai", "Tirupati"],
  ["Tirupati", "Chennai"],
  ["Chennai", "Nellore"],
  ["Nellore", "Chennai"],
  ["Chennai", "Vijayawada"],
  ["Vijayawada", "Chennai"],
  ["Chennai", "Visakhapatnam"],
  ["Visakhapatnam", "Chennai"],
  ["Chennai", "Kurnool"],
  ["Kurnool", "Chennai"],
  ["Chennai", "Chittoor"],
  ["Chittoor", "Chennai"],
  ["Bangalore", "Tirupati"],
  ["Tirupati", "Bangalore"],
  ["Bangalore", "Vijayawada"],
  ["Vijayawada", "Bangalore"],
];

const telanganaRoutes = [
  ["Chennai", "Hyderabad"],
  ["Hyderabad", "Chennai"],
  ["Bangalore", "Hyderabad"],
  ["Hyderabad", "Bangalore"],
  ["Chennai", "Warangal"],
  ["Warangal", "Chennai"],
  ["Bangalore", "Warangal"],
  ["Warangal", "Bangalore"],
  ["Hyderabad", "Nizamabad"],
  ["Nizamabad", "Hyderabad"],
  ["Hyderabad", "Karimnagar"],
  ["Karimnagar", "Hyderabad"],
  ["Hyderabad", "Khammam"],
  ["Khammam", "Hyderabad"],
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function RouteCard({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  return (
    <a
      href={`/routes/${slugify(from)}/${slugify(to)}`}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#1ee1d3] hover:shadow-lg"
    >
      <div className="font-black text-[#09264b]">
        🚚 {from} → {to}
      </div>

      <div className="mt-2 text-sm font-bold text-[#08a99f] group-hover:underline">
        View Route →
      </div>
    </a>
  );
}

function RouteSection({
  number,
  label,
  title,
  description,
  routes,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  routes: string[][];
}) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="font-black tracking-[0.25em] text-[#08a99f]">
            {number} · {label}
          </div>

          <h2 className="mt-3 text-3xl font-black text-[#09264b] md:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map(([from, to]) => (
            <RouteCard
              key={`${from}-${to}`}
              from={from}
              to={to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-[#062c54] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <div className="font-black tracking-[0.3em] text-[#1ee1d3]">
            LOADZY ROUTES
          </div>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Truck Transport Routes Across South India
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Find reliable truck transport routes for full loads, part loads,
            house shifting, packers & movers and commercial goods with LOADZY.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#book"
              className="rounded-xl bg-[#1ee1d3] px-7 py-4 font-black text-[#06264a] shadow-lg"
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

      {/* 01 TOWN ROUTES */}
      <RouteSection
        number="01"
        label="TOWN ROUTES"
        title="Tamil Nadu Town Truck Routes"
        description="Explore truck transport connections from important towns and local transport hubs across Tamil Nadu."
        routes={townRoutes}
      />

      {/* 02 CITY ROUTES */}
      <section className="bg-white">
        <RouteSection
          number="02"
          label="CITY ROUTES"
          title="Tamil Nadu City Truck Routes"
          description="Find major city-to-city truck transport routes for household shifting, commercial loads, part loads and full loads."
          routes={cityRoutes}
        />
      </section>

      {/* 03 DISTRICT ROUTES */}
      <RouteSection
        number="03"
        label="DISTRICT ROUTES"
        title="Tamil Nadu District Transport Routes"
        description="Connect important Tamil Nadu districts with major transport destinations through LOADZY."
        routes={districtRoutes}
      />


    

            <div className="px-6 pb-16 text-center">
        <a
          href="/routes/major-tamil-nadu"
          className="inline-block rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a] shadow-lg transition hover:-translate-y-1"
        >
          Explore Tamil Nadu Routes →
        </a>
      </div>

    </main>
  );
}