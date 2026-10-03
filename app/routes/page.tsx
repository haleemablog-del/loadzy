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

      {/* 04 TAMIL NADU */}
      <section className="bg-white">
        <RouteSection
          number="04"
          label="TAMIL NADU"
          title="Truck Routes Across Tamil Nadu"
          description="Explore major freight corridors connecting cities and districts across Tamil Nadu."
          routes={tamilNaduRoutes}
        />
      </section>

      {/* 05 KARNATAKA */}
      <RouteSection
        number="05"
        label="KARNATAKA"
        title="Truck Routes to and from Karnataka"
        description="Explore LOADZY truck transport routes connecting Tamil Nadu with Bangalore, Mysore, Mangalore, Hubli and other important Karnataka locations."
        routes={karnatakaRoutes}
      />

      {/* 06 KERALA */}
      <section className="bg-white">
        <RouteSection
          number="06"
          label="KERALA"
          title="Truck Routes to and from Kerala"
          description="Explore truck transport routes connecting Tamil Nadu with Kochi, Palakkad, Thrissur, Kozhikode, Kannur and other Kerala destinations."
          routes={keralaRoutes}
        />
      </section>

      {/* 07 ANDHRA PRADESH */}
      <RouteSection
        number="07"
        label="ANDHRA PRADESH"
        title="Truck Routes to and from Andhra Pradesh"
        description="Explore LOADZY routes connecting Tamil Nadu and Karnataka with Tirupati, Nellore, Vijayawada, Visakhapatnam and other Andhra Pradesh destinations."
        routes={andhraRoutes}
      />

      {/* 08 TELANGANA */}
      <section className="bg-white">
        <RouteSection
          number="08"
          label="TELANGANA"
          title="Truck Routes to and from Telangana"
          description="Explore truck transport routes connecting South India with Hyderabad, Warangal, Nizamabad, Karimnagar and Khammam."
          routes={telanganaRoutes}
        />
      </section>

      {/* TAMIL NADU ROUTES */}
<section className="bg-slate-50 px-6 py-16">
  <div className="mx-auto max-w-7xl">

    {/* 01 TOWN ROUTES */}
    <div className="text-center">
      <div className="font-black tracking-[0.25em] text-[#08a99f]">
        01 · TOWN ROUTES
      </div>

      <h2 className="mt-3 text-4xl font-black text-[#09264b]">
        Tamil Nadu Town Truck Routes
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-slate-600">
        Explore truck transport routes connecting important towns across
        Tamil Nadu for household shifting, part loads, full loads and
        commercial goods.
      </p>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {townRoutes.map(([from, to]) => {
        const fromSlug = from.toLowerCase().replace(/\s+/g, "-");
        const toSlug = to.toLowerCase().replace(/\s+/g, "-");

        return (
          <a
            key={`${fromSlug}-${toSlug}`}
            href={`/routes/${fromSlug}/${toSlug}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-[#09264b] shadow-sm transition hover:-translate-y-1 hover:border-[#1ee1d3] hover:shadow-md"
          >
            🚚 {from} → {to}

            <span className="mt-2 block text-sm font-bold text-[#08a99f]">
              View Town Route →
            </span>
          </a>
        );
      })}
    </div>


    {/* 02 CITY ROUTES */}
    <div className="mt-20 text-center">
      <div className="font-black tracking-[0.25em] text-[#08a99f]">
        02 · CITY ROUTES
      </div>

      <h2 className="mt-3 text-4xl font-black text-[#09264b]">
        Tamil Nadu City Truck Routes
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-slate-600">
        Find major city-to-city truck transport routes across Tamil Nadu.
      </p>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cityRoutes.map(([from, to]) => {
        const fromSlug = from.toLowerCase().replace(/\s+/g, "-");
        const toSlug = to.toLowerCase().replace(/\s+/g, "-");

        return (
          <a
            key={`${fromSlug}-${toSlug}`}
            href={`/routes/${fromSlug}/${toSlug}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-[#09264b] shadow-sm transition hover:-translate-y-1 hover:border-[#1ee1d3] hover:shadow-md"
          >
            🚚 {from} → {to}

            <span className="mt-2 block text-sm font-bold text-[#08a99f]">
              View City Route →
            </span>
          </a>
        );
      })}
    </div>


    {/* 03 DISTRICT ROUTES */}
    <div className="mt-20 text-center">
      <div className="font-black tracking-[0.25em] text-[#08a99f]">
        03 · DISTRICT ROUTES
      </div>

      <h2 className="mt-3 text-4xl font-black text-[#09264b]">
        Tamil Nadu District Truck Routes
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-slate-600">
        Connect major Tamil Nadu districts with reliable truck transport
        routes for goods movement and shifting.
      </p>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ["Chennai", "Coimbatore"],
        ["Chennai", "Madurai"],
        ["Chennai", "Salem"],
        ["Chennai", "Tiruchirappalli"],
        ["Chennai", "Tirunelveli"],
        ["Chennai", "Vellore"],
        ["Coimbatore", "Madurai"],
        ["Coimbatore", "Salem"],
        ["Madurai", "Tiruchirappalli"],
        ["Salem", "Erode"],
        ["Vellore", "Tirupattur"],
        ["Krishnagiri", "Dharmapuri"],
      ].map(([from, to]) => {
        const fromSlug = from.toLowerCase().replace(/\s+/g, "-");
        const toSlug = to.toLowerCase().replace(/\s+/g, "-");

        return (
          <a
            key={`${fromSlug}-${toSlug}`}
            href={`/routes/${fromSlug}/${toSlug}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-[#09264b] shadow-sm transition hover:-translate-y-1 hover:border-[#1ee1d3] hover:shadow-md"
          >
            🚚 {from} → {to}

            <span className="mt-2 block text-sm font-bold text-[#08a99f]">
              View District Route →
            </span>
          </a>
        );
      })}
    </div>


    {/* 04 ALL TAMIL NADU ROUTES */}
    <div className="mt-20 rounded-3xl bg-[#062c54] px-6 py-12 text-center text-white">

      <div className="font-black tracking-[0.25em] text-[#1ee1d3]">
        04 · ALL TAMIL NADU ROUTES
      </div>

      <h2 className="mt-3 text-4xl font-black">
        Complete Tamil Nadu Truck Routes
      </h2>

      <p className="mx-auto mt-4 max-w-3xl leading-7 text-blue-100">
        Explore LOADZY truck transport routes across Tamil Nadu for
        full loads, part loads, house shifting, packers & movers and
        commercial goods.
      </p>

      <a
        href="/routes"
        className="mt-8 inline-block rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a] shadow-lg transition hover:-translate-y-1"
      >
        Explore Tamil Nadu Routes →
      </a>

    </div>

  </div>
</section>

      {/* OTHER SOUTH INDIA STATES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">

          <div className="font-black tracking-[0.25em] text-[#08a99f]">
            SOUTH INDIA
          </div>

          <h2 className="mt-3 text-4xl font-black text-[#09264b]">
            LOADZY South India Network
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            LOADZY is building a growing truck transport network across
            Tamil Nadu, Karnataka, Kerala, Andhra Pradesh and Telangana.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Tamil Nadu",
              "Karnataka",
              "Kerala",
              "Andhra Pradesh",
              "Telangana",
            ].map((state) => (
              <span
                key={state}
                className="rounded-full bg-slate-100 px-5 py-3 font-black text-[#09264b]"
              >
                {state}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#062c54] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Need a truck for your route?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Tell LOADZY your pickup, delivery and truck requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#book"
              className="rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a] shadow-lg"
            >
              Book a Truck →
            </a>

            <a
              href="/load-search"
              className="rounded-xl border border-white px-8 py-4 font-black text-white"
            >
              Find Available Loads →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}