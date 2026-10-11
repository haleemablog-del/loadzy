import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Poonamallee Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Poonamallee for full load, part load, house shifting, packers and movers, commercial goods and industrial cargo with LOADZY.",
  keywords: [
    "Poonamallee truck transport",
    "Poonamallee lorry transport",
    "Poonamallee packers and movers",
    "truck booking Poonamallee",
    "Poonamallee freight transport",
    "Poonamallee to Chennai transport",
    "house shifting Poonamallee",
    "Poonamallee to Bangalore transport",
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
  ["Hosur", "/hosur-transport"],
  ["Hyderabad", "/hyderabad-transport"],
  ["Vijayawada", "/vijayawada-transport"],
  ["Tirupati", "/tirupati-transport"],
  ["Kochi", "/kochi-transport"],
] as const;

const routes = [
  ["Poonamallee", "Chennai"],
  ["Poonamallee", "Chengalpattu"],
  ["Poonamallee", "Kanchipuram"],
  ["Poonamallee", "Tiruvallur"],
  ["Poonamallee", "Vellore"],
  ["Poonamallee", "Ranipet"],
  ["Poonamallee", "Bangalore"],
  ["Poonamallee", "Hosur"],
  ["Poonamallee", "Coimbatore"],
  ["Poonamallee", "Salem"],
  ["Poonamallee", "Madurai"],
  ["Poonamallee", "Tiruchirappalli"],
] as const;

const nearbyPlaces = [
  ["Chennai", "/chennai-transport"],
  ["Avadi", "/avadi-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Vellore", "/vellore-transport"],
  ["Ranipet", "/ranipet-transport"],
  ["Hosur", "/hosur-transport"],
  ["Ambur", "/ambur-transport"],
  ["Vaniyambadi", "/vaniyambadi-transport"],
] as const;

const services = [
  {
    title: "Full Load Transport",
    description:
      "Truck options for large consignments, business shipments and complete household moves.",
  },
  {
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that do not require a full truck.",
  },
  {
    title: "House Shifting",
    description:
      "Transport options for household furniture, appliances and personal belongings.",
  },
  {
    title: "Packers & Movers",
    description:
      "Explore vehicle options for home relocation and moving requirements.",
  },
  {
    title: "Commercial Goods",
    description:
      "Transport options for shop goods, business stock and commercial deliveries.",
  },
  {
    title: "Industrial Transport",
    description:
      "Explore suitable truck options for machinery, equipment and industrial cargo.",
  },
  {
    title: "Fruits & Vegetables",
    description:
      "Transport options for agricultural produce and other goods, according to vehicle requirements.",
  },
  {
    title: "Truck Booking",
    description:
      "Submit your pickup, delivery and load details to explore available transport options.",
  },
];

const benefits = [
  "Multiple truck types",
  "Full load and part load options",
  "House shifting and commercial transport",
  "Transport enquiries for different routes",
  "Pickup and delivery details in one request",
  "Convenient booking enquiry through LOADZY",
];

const cardClass =
  "block rounded-xl border border-slate-200 bg-white p-5 font-bold text-[#092b59] shadow-sm transition hover:border-[#00b8a9] hover:shadow-md";

export default function PoonamalleeTransportPage() {
  return (
    <main className="bg-white text-[#092b59]">
      {/* Hero */}
      <section className="bg-[#10192f] px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-extrabold tracking-[0.25em] text-[#00b8a9]">
            LOADZY POONAMALLEE
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Poonamallee Truck Transport &amp; Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-200 md:text-lg">
            Find transport options from Poonamallee for house shifting,
            commercial goods, industrial cargo, full load and part load
            requirements across Tamil Nadu and South India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#booking"
              className="rounded-xl bg-[#ffca05] px-7 py-4 font-extrabold text-[#092b59] transition hover:bg-yellow-300"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-slate-500 px-7 py-4 font-bold text-white transition hover:border-[#00b8a9]"
            >
              Truck Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Truck Transport Services in Poonamallee
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Poonamallee is an important transport and commercial area in the
            Chennai region. Customers may need trucks for household goods,
            furniture, building materials, machinery, packaged products and
            business supplies. LOADZY helps customers submit transport
            requirements and explore suitable vehicle options.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className={cardClass}>
                <h3 className="text-lg font-extrabold">
                  {service.title} →
                </h3>
                <p className="mt-3 font-medium leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            About Poonamallee – Business &amp; Goods Transport
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Poonamallee connects residential neighbourhoods, commercial
            establishments and industrial areas around western Chennai.
            Businesses and households may require local transport as well as
            deliveries to other cities in Tamil Nadu and neighbouring states.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Whether you need to move furniture, business supplies, industrial
            equipment or a larger shipment, enter your pickup and delivery
            details through LOADZY to explore transport options for your
            requirements.
          </p>
        </div>
      </section>

      {/* Major cities */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Major Cities for Transport from Poonamallee
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Explore major commercial destinations for goods transport, truck
            booking and freight enquiries from Poonamallee.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {majorCities.map(([name, href]) => (
              <Link key={name} href={href} className={cardClass}>
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Major cities and reverse routes */}
      <section className="bg-slate-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Poonamallee Major Cities &amp; Reverse Truck Routes
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Explore transport routes in both directions between Poonamallee
            and major destinations. Each link uses the existing dynamic route
            structure.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes
              .flatMap(([origin, destination]) => [
                {
                  label: `${origin} → ${destination}`,
                  href: `/routes/${origin.toLowerCase()}/${destination.toLowerCase()}`,
                },
                {
                  label: `${destination} → ${origin}`,
                  href: `/routes/${destination.toLowerCase()}/${origin.toLowerCase()}`,
                },
              ])
              .map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className={cardClass}
                >
                  {route.label} →
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Nearby places */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Nearby Places for Truck Transport
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Explore transport pages for cities and towns around Poonamallee
            and across Tamil Nadu. Availability depends on your route and
            transport requirements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.map(([name, href]) => (
              <Link key={name} href={href} className={cardClass}>
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Why Choose LOADZY for Poonamallee Transport?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-slate-200 bg-white p-5 font-bold"
              >
                <span className="mr-2 text-[#00a99a]">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#10192f] p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a Truck in Poonamallee?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-200">
            Submit your pickup location, delivery destination, load type and
            preferred pickup date to explore transport options with LOADZY.
          </p>

          <Link
            href="/#booking"
            className="mt-7 inline-block rounded-xl bg-[#ffca05] px-8 py-4 font-extrabold text-[#092b59] transition hover:bg-yellow-300"
          >
            Book a Truck →
          </Link>
        </div>
      </section>
    </main>
  );
}
