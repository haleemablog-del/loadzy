import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kundrathur Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Kundrathur for full load, part load, house shifting, packers and movers, commercial goods and industrial cargo across Tamil Nadu and South India.",
  keywords: [
    "Kundrathur truck transport",
    "Kundrathur lorry transport",
    "Kundrathur packers and movers",
    "truck booking Kundrathur",
    "Kundrathur freight transport",
    "Kundrathur to Chennai transport",
    "house shifting Kundrathur",
    "Kundrathur to Bangalore transport",
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
];

const routeDestinations = [
  "Chennai",
  "Chengalpattu",
  "Kanchipuram",
  "Tiruvallur",
  "Tambaram",
  "Avadi",
  "Poonamallee",
  "Sriperumbudur",
  "Vellore",
  "Ranipet",
  "Bangalore",
  "Coimbatore",
  "Salem",
  "Madurai",
  "Tiruchirappalli",
  "Tiruppur",
  "Tirunelveli",
  "Tirupati",
];

const nearbyPlaces = [
  ["Chennai", "/chennai-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Avadi", "/avadi-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Vellore", "/vellore-transport"],
  ["Ranipet", "/ranipet-transport"],
  ["Hosur", "/hosur-transport"],
  ["Ambur", "/ambur-transport"],
];

const benefits = [
  {
    title: "Multiple Truck Types",
    description:
      "Explore suitable truck options for household goods, business shipments and commercial cargo.",
  },
  {
    title: "Full Load & Part Load",
    description:
      "Find transport options for larger shipments or smaller loads according to your requirements.",
  },
  {
    title: "Packers & Movers",
    description:
      "Arrange transport for furniture, household belongings and relocation requirements.",
  },
  {
    title: "Intercity Transport",
    description:
      "Explore transport requirements from Kundrathur to destinations across Tamil Nadu and South India.",
  },
];

export default function KundrathurTransportPage() {
  return (
    <main className="min-h-screen bg-white text-[#092b59]">
      <section className="bg-[#10192e] px-6 py-20 text-white md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-extrabold tracking-[0.2em] text-[#00b9a7]">
            LOADZY KUNDRATHUR
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Kundrathur Truck Transport &amp; Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            Find transport options from Kundrathur for house shifting,
            commercial goods, industrial cargo, full load and part load
            requirements across Tamil Nadu and South India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#booking"
              className="rounded-xl bg-[#ffca05] px-7 py-4 font-extrabold text-[#092b59] transition hover:bg-yellow-400"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-rates"
              className="rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Truck Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Truck Transport Services in Kundrathur
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-700">
            Kundrathur customers may need transport for household shifting,
            furniture, business supplies, construction materials and commercial
            shipments. LOADZY helps customers explore truck booking options
            based on pickup location, delivery destination, load type and truck
            requirements.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-700">
            Whether you need a vehicle for a local move or goods delivery to
            another city, submit your pickup and delivery details to explore
            suitable transport options.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f8fc] px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Major Cities for Transport from Kundrathur
          </h2>

          <p className="mt-4 text-gray-700">
            Explore major destinations for goods transport, truck booking and
            freight enquiries from Kundrathur.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {majorCities.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-bold shadow-sm transition hover:border-[#00b9a7] hover:shadow-md"
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
            Kundrathur Major Cities &amp; Reverse Truck Routes
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Explore transport routes in both directions between Kundrathur and
            major destinations. Route links should be published only after
            confirming that the destination route pages exist.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routeDestinations.map((destination) => {
              const slug = destination
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <div
                  key={destination}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <Link
                    href={`/routes/kundrathur/${slug}`}
                    className="rounded-xl border border-slate-200 p-5 font-bold shadow-sm transition hover:border-[#00b9a7]"
                  >
                    Kundrathur → {destination} →
                  </Link>

                  <Link
                    href={`/routes/${slug}/kundrathur`}
                    className="rounded-xl border border-slate-200 p-5 font-bold shadow-sm transition hover:border-[#00b9a7]"
                  >
                    {destination} → Kundrathur →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Nearby Places for Truck Transport
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Explore transport pages for cities and towns around Kundrathur.
            Transport availability depends on your route and requirements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-bold shadow-sm transition hover:border-[#00b9a7] hover:shadow-md"
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
            Why Choose LOADZY for Kundrathur Transport?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-extrabold">
                  <span className="text-[#00b9a7]">✓ </span>
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-700">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10192e] px-6 py-16 text-center text-white md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Need a Truck in Kundrathur?
          </h2>

          <p className="mt-4 leading-7 text-gray-200">
            Share your transport requirements with LOADZY and explore suitable
            truck booking options for your goods or shifting needs.
          </p>

          <Link
            href="/#booking"
            className="mt-8 inline-block rounded-xl bg-[#ffca05] px-8 py-4 font-extrabold text-[#092b59] transition hover:bg-yellow-400"
          >
            Book a Truck →
          </Link>
        </div>
      </section>
    </main>
  );
}