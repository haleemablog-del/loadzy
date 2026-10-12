import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiruvottiyur Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Tiruvottiyur for full load, part load, house shifting, packers and movers, commercial goods and industrial cargo across Tamil Nadu and South India.",
  keywords: [
    "Tiruvottiyur truck transport",
    "Tiruvottiyur lorry transport",
    "Tiruvottiyur packers and movers",
    "truck booking Tiruvottiyur",
    "Tiruvottiyur freight transport",
    "Tiruvottiyur to Chennai transport",
    "house shifting Tiruvottiyur",
    "Tiruvottiyur to Bangalore transport",
    "LOADZY",
  ],
};

const majorCities = [
  ["Chennai", "/chennai-transport"],
  ["Bangalore", "/bangalore-transport"],
  ["Coimbatore", "/coimbatore-transport"],
  ["Madurai", "/madurai-transport"],
  ["Salem", "/salem-transport"],
  ["Tiruchirappalli", "/tiruchirappalli-transport"],
  ["Vellore", "/vellore-transport"],
  ["Tirupati", "/tirupati-transport"],
];

const routes = [
  ["Tiruvottiyur", "Chennai", "/routes/tiruvottiyur/chennai"],
  ["Chennai", "Tiruvottiyur", "/routes/chennai/tiruvottiyur"],
  ["Tiruvottiyur", "Bangalore", "/routes/tiruvottiyur/bangalore"],
  ["Bangalore", "Tiruvottiyur", "/routes/bangalore/tiruvottiyur"],
  ["Tiruvottiyur", "Coimbatore", "/routes/tiruvottiyur/coimbatore"],
  ["Coimbatore", "Tiruvottiyur", "/routes/coimbatore/tiruvottiyur"],
  ["Tiruvottiyur", "Vellore", "/routes/tiruvottiyur/vellore"],
  ["Vellore", "Tiruvottiyur", "/routes/vellore/tiruvottiyur"],
  ["Tiruvottiyur", "Tirupati", "/routes/tiruvottiyur/tirupati"],
  ["Tirupati", "Tiruvottiyur", "/routes/tirupati/tiruvottiyur"],
  ["Tiruvottiyur", "Salem", "/routes/tiruvottiyur/salem"],
  ["Salem", "Tiruvottiyur", "/routes/salem/tiruvottiyur"],
  ["Tiruvottiyur", "Madurai", "/routes/tiruvottiyur/madurai"],
  ["Madurai", "Tiruvottiyur", "/routes/madurai/tiruvottiyur"],
  ["Tiruvottiyur", "Tiruchirappalli", "/routes/tiruvottiyur/tiruchirappalli"],
  ["Tiruchirappalli", "Tiruvottiyur", "/routes/tiruchirappalli/tiruvottiyur"],
];

const nearbyPlaces = [
  ["Chennai", "/chennai-transport"],
  ["Manali", "/manali-transport"],
  ["Madhavaram", "/madhavaram-transport"],
  ["Avadi", "/avadi-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Vellore", "/vellore-transport"],
  ["Hosur", "/hosur-transport"],
  ["Ranipet", "/ranipet-transport"],
];

export default function TiruvottiyurTransportPage() {
  return (
    <main className="bg-white text-[#092b59]">
      <section className="bg-[#10192f] px-6 py-20 text-white md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#00bfae]">
            LOADZY TIRUVOTTIYUR
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Tiruvottiyur Truck Transport &amp; Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-200">
            Find transport options from Tiruvottiyur for house shifting,
            commercial goods, industrial cargo, full load and part load
            requirements across Tamil Nadu and South India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#booking"
              className="rounded-xl bg-[#ffca05] px-7 py-4 font-extrabold text-[#092b59] transition hover:bg-yellow-300"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-rates"
              className="rounded-xl border border-white/30 px-7 py-4 font-extrabold text-white transition hover:bg-white/10"
            >
              Truck Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Truck Transport Services in Tiruvottiyur
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            LOADZY helps customers explore transport options for household
            goods, business supplies, commercial shipments and industrial
            cargo. Whether you need a truck for local movement or delivery
            to another city, submit your pickup and delivery details to
            enquire about suitable transport.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Full Load Transport",
                description:
                  "Explore truck options for large shipments, commercial goods and dedicated cargo.",
              },
              {
                title: "Part Load Transport",
                description:
                  "Enquire about transport options for smaller consignments and shared-load requirements.",
              },
              {
                title: "Packers and Movers",
                description:
                  "Arrange transport enquiries for household shifting, furniture and personal belongings.",
              },
              {
                title: "Commercial and Industrial Goods",
                description:
                  "Find transport options for business supplies, equipment and industrial shipments.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="text-xl font-extrabold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="px-6 py-16 md:px-12 lg:px-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-3xl font-extrabold text-[#092b59] md:text-4xl">
      About Truck Transport in Tiruvottiyur
    </h2>

    <div className="mt-6 max-w-5xl space-y-4 leading-8 text-slate-700">
      <p>
        Tiruvottiyur is an important industrial and commercial area in North Chennai.
        Businesses and households may need reliable transport for industrial goods,
        construction materials, machinery, furniture, and other shipments.
      </p>
      <p>
        LOADZY helps customers explore truck transport options for full-load and
        part-load requirements, commercial deliveries, and household shifting from
        Tiruvottiyur to Chennai, other parts of Tamil Nadu, and nearby states.
      </p>
      <p>
        Choose your pickup location, delivery destination, load type, and truck
        requirement to enquire about suitable transport options. Availability and
        freight prices depend on the route, vehicle, load, and travel date.
      </p>
    </div>
  </div>
</section>

      <section className="bg-slate-50 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Major Cities for Transport from Tiruvottiyur
          </h2>
          <p className="mt-4 text-slate-600">
            Explore major destinations for truck booking, goods transport
            and freight enquiries.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {majorCities.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-extrabold shadow-sm transition hover:border-[#00bfae]"
              >
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Tiruvottiyur Major Cities &amp; Reverse Truck Routes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore both directions for transport between Tiruvottiyur and
            other destinations. Route links are shown for navigation and
            should be checked against existing route pages before publishing.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map(([from, to, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 p-5 font-bold shadow-sm transition hover:border-[#00bfae]"
              >
                {from} → {to} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Nearby Places for Truck Transport
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore transport pages for nearby cities and towns. Use these
            links to find relevant local transport information.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-bold shadow-sm transition hover:border-[#00bfae]"
              >
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Why Choose LOADZY for Tiruvottiyur Transport?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Multiple truck types for different shipment requirements",
              "Full load and part load enquiries",
              "House shifting and packers and movers transport",
              "Local, intercity and interstate transport enquiries",
              "Options for commercial and industrial cargo",
              "Convenient truck booking enquiries",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-slate-200 p-5 font-bold"
              >
                <span className="mr-2 text-[#00bfae]">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="bg-[#10192f] px-6 py-16 text-white md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Need a Truck in Tiruvottiyur?
          </h2>
          <p className="mt-5 leading-7 text-slate-200">
            Submit your transport requirements through LOADZY to enquire
            about truck options for your shipment or house shifting needs.
          </p>

          <Link
            href="/#booking"
            className="mt-8 inline-block rounded-xl bg-[#ffca05] px-8 py-4 font-extrabold text-[#092b59] transition hover:bg-yellow-300"
          >
            Book a Truck →
          </Link>
        </div>
      </section>
    </main>
  );
}