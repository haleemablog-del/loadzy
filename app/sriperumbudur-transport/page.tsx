
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sriperumbudur Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Sriperumbudur for industrial cargo, commercial goods, full load, part load, house shifting and packers and movers with LOADZY.",
  keywords: [
    "Sriperumbudur truck transport",
    "Sriperumbudur lorry transport",
    "Sriperumbudur packers and movers",
    "truck booking Sriperumbudur",
    "Sriperumbudur industrial transport",
    "Sriperumbudur freight transport",
    "Sriperumbudur to Chennai transport",
    "Sriperumbudur to Bangalore transport",
    "house shifting Sriperumbudur",
    "LOADZY",
  ],
};

const services = [
  {
    title: "Industrial Goods Transport",
    description:
      "Transport options for machinery, equipment, components, materials and industrial consignments.",
  },
  {
    title: "Full Load Transport",
    description:
      "Explore truck options for large shipments, factory dispatches and complete commercial loads.",
  },
  {
    title: "Part Load Transport",
    description:
      "Find transport options for smaller consignments that do not require a dedicated full truck.",
  },
  {
    title: "Commercial Goods Transport",
    description:
      "Transport options for business stock, packaged products, wholesale goods and supplies.",
  },
  {
    title: "House Shifting",
    description:
      "Truck options for furniture, household appliances and personal belongings during relocation.",
  },
  {
    title: "Packers & Movers",
    description:
      "Explore transport options for residential and business relocation requirements.",
  },
  {
    title: "Construction Materials",
    description:
      "Transport enquiries for building materials and other goods, depending on vehicle capacity.",
  },
  {
    title: "Truck Booking",
    description:
      "Submit your pickup, destination, load type and preferred pickup date to enquire about transport.",
  },
];

const majorCities = [
  ["Chennai", "/chennai-transport"],
  ["Bangalore", "/bangalore-transport"],
  ["Coimbatore", "/coimbatore-transport"],
  ["Vellore", "/vellore-transport"],
  ["Hosur", "/hosur-transport"],
  ["Salem", "/salem-transport"],
  ["Madurai", "/madurai-transport"],
  ["Tiruchirappalli", "/tiruchirappalli-transport"],
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Avadi", "/avadi-transport"],
] as const;

const routeDestinations = [
  "Chennai",
  "Poonamallee",
  "Tambaram",
  "Chengalpattu",
  "Kanchipuram",
  "Tiruvallur",
  "Bangalore",
  "Vellore",
  "Ranipet",
  "Hosur",
  "Coimbatore",
  "Salem",
] as const;

const nearbyPlaces = [
  ["Chennai", "/chennai-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Avadi", "/avadi-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Vellore", "/vellore-transport"],
  ["Ranipet", "/ranipet-transport"],
  ["Hosur", "/hosur-transport"],
  ["Ambur", "/ambur-transport"],
  ["Vaniyambadi", "/vaniyambadi-transport"],
] as const;

const benefits = [
  "Multiple truck types for different loads",
  "Full load and part load transport enquiries",
  "Industrial and commercial goods transport",
  "House shifting and relocation options",
  "Transport enquiries for different destinations",
  "Convenient booking enquiries through LOADZY",
];

const faqs = [
  {
    question: "How can I book a truck in Sriperumbudur?",
    answer:
      "Use the LOADZY booking option and provide your pickup location, delivery location, load type, truck requirement and preferred pickup date.",
  },
  {
    question: "Can I arrange industrial goods transport from Sriperumbudur?",
    answer:
      "You can submit an enquiry for machinery, components, equipment and other industrial cargo. Vehicle suitability depends on the shipment's dimensions, weight and handling requirements.",
  },
  {
    question: "Does LOADZY support full load and part load enquiries?",
    answer:
      "The page supports enquiries for both full load and part load transport. Available options depend on the route and shipment requirements.",
  },
  {
    question: "Can I arrange house shifting from Sriperumbudur?",
    answer:
      "You can submit your household shifting requirements, including pickup and destination details, to enquire about suitable transport options.",
  },
  {
    question: "Which destinations can I explore from Sriperumbudur?",
    answer:
      "You can explore destination pages and route links for locations such as Chennai, Bangalore, Vellore, Chengalpattu and Coimbatore. Confirm route availability and booking details before arranging transport.",
  },
];

const cardClass =
  "block rounded-xl border border-slate-200 bg-white p-5 font-bold text-[#092b59] shadow-sm transition hover:border-[#00b8a9] hover:shadow-md";

export default function SriperumbudurTransportPage() {
  return (
    <main className="bg-white text-[#092b59]">
      {/* Hero */}
      <section className="bg-[#10192f] px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-extrabold tracking-[0.25em] text-[#00b8a9]">
            LOADZY SRIPERUMBUDUR
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Sriperumbudur Truck Transport &amp; Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-200 md:text-lg">
            Find transport options from Sriperumbudur for industrial cargo,
            commercial goods, factory consignments, house shifting, full load
            and part load requirements across Tamil Nadu and South India.
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
            Truck Transport Services in Sriperumbudur
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Sriperumbudur is an important industrial and manufacturing area
            in the Kanchipuram region of Tamil Nadu. Industrial activity,
            commercial distribution, construction and residential movement
            can create demand for transporting goods between factories,
            warehouses, businesses and customer destinations.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            LOADZY helps customers submit their transport requirements and
            explore options for different shipment sizes, vehicle types and
            destinations.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className={cardClass}>
                <h3 className="text-lg font-extrabold">
                  {service.title}
                </h3>
                <p className="mt-3 font-medium leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local economy */}
      <section className="bg-slate-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Industries &amp; Goods Transport from Sriperumbudur
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Sriperumbudur and its surrounding areas are associated with
            manufacturing, industrial estates, automotive-related activity,
            engineering, electronics and supporting businesses. These
            activities can involve the movement of raw materials, components,
            packaged products, machinery and finished goods.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Commercial establishments and households may also need vehicles
            for inventory movement, furniture delivery, relocation and
            construction materials. The appropriate truck depends on cargo
            weight, dimensions, loading arrangements and the delivery route.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Whether your shipment is travelling to Chennai, another Tamil
            Nadu district or a destination in a neighbouring state, enter
            your pickup and delivery details through LOADZY to enquire about
            suitable transport options.
          </p>
        </div>
      </section>

      {/* Major cities */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Major Cities for Transport from Sriperumbudur
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Explore destination pages for commercial transport, truck
            booking and freight enquiries from Sriperumbudur.
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

      {/* Two-way routes */}
      <section className="bg-slate-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Sriperumbudur Major Cities &amp; Reverse Truck Routes
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Explore both directions between Sriperumbudur and major
            destinations. These links use the project's dynamic route URL
            pattern; verify that each route is supported before publishing
            the links on the live website.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routeDestinations
              .flatMap((destination) => [
                {
                  label: `Sriperumbudur → ${destination}`,
                  href: `/routes/sriperumbudur/${destination
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`,
                },
                {
                  label: `${destination} → Sriperumbudur`,
                  href: `/routes/${destination
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/sriperumbudur`,
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
            Explore transport pages for nearby cities and towns around
            Sriperumbudur and across Tamil Nadu. Availability depends on
            your route and transport requirements.
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

      {/* Why LOADZY */}
      <section className="bg-slate-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Why Choose LOADZY for Sriperumbudur Transport?
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

      {/* FAQs */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="text-lg font-extrabold">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#10192f] p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a Truck in Sriperumbudur?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-200">
            Submit your pickup location, delivery destination, cargo type
            and preferred pickup date to enquire about transport options
            through LOADZY.
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
