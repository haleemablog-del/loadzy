import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Transport Charges in Tamil Nadu | LOADZY",
  description:
    "Understand truck transport charges in Tamil Nadu, including the factors that affect freight prices, truck type, distance, load size, tolls, loading costs and return-load availability.",
  keywords: [
    "truck transport charges in Tamil Nadu",
    "truck booking rates Tamil Nadu",
    "lorry transport charges Tamil Nadu",
    "truck freight rates Tamil Nadu",
    "transport charges per km Tamil Nadu",
    "truck hire charges Tamil Nadu",
    "lorry booking Tamil Nadu",
  ],
  alternates: {
    canonical:
      "https://www.loadzyinfra.in/truck-transport-charges-tamil-nadu",
  },
  openGraph: {
    title: "Truck Transport Charges in Tamil Nadu | LOADZY",
    description:
      "Learn how truck transport charges are calculated in Tamil Nadu and what affects your freight price.",
    url: "https://www.loadzyinfra.in/truck-transport-charges-tamil-nadu",
    siteName: "LOADZY",
    type: "article",
  },
};

const faqs = [
  {
    question: "How are truck transport charges calculated in Tamil Nadu?",
    answer:
      "Truck transport charges depend on factors such as pickup and delivery distance, truck type, load weight and volume, route conditions, tolls, loading and unloading requirements, date and truck availability.",
  },
  {
    question: "Is truck transport charged only based on kilometres?",
    answer:
      "No. Distance is an important factor, but the final freight can also depend on truck capacity, load type, route expenses, tolls, loading requirements and availability.",
  },
  {
    question: "Does the type of truck affect the transport price?",
    answer:
      "Yes. Different trucks have different capacities, body types and operating costs. The suitable truck depends on the weight, volume and nature of the goods.",
  },
  {
    question: "Is full-load transport different from part-load transport?",
    answer:
      "Yes. Full-load transport generally uses the available truck capacity for one customer's shipment, while part-load transport combines suitable shipments when possible. Pricing can therefore work differently.",
  },
  {
    question: "Can return-load availability reduce transport cost?",
    answer:
      "Return-load availability can sometimes improve pricing because a truck may be able to carry another suitable load on its return journey. Actual pricing depends on route, timing and availability.",
  },
  {
    question: "How can I get a truck for my route?",
    answer:
      "You can submit your pickup, delivery, load and truck requirements through LOADZY's Find My Truck booking form to request transport assistance.",
  },
];

const routeLinks = [
  ["Chennai", "Bangalore", "/routes/chennai/bangalore"],
  ["Chennai", "Coimbatore", "/routes/chennai/coimbatore"],
  ["Chennai", "Salem", "/routes/chennai/salem"],
  ["Chennai", "Madurai", "/routes/chennai/madurai"],
  ["Bangalore", "Chennai", "/routes/bangalore/chennai"],
  ["Coimbatore", "Bangalore", "/routes/coimbatore/bangalore"],
  ["Salem", "Chennai", "/routes/salem/chennai"],
  ["Tirupattur", "Chennai", "/routes/tirupattur/chennai"],
  ["Vaniyambadi", "Chennai", "/routes/vaniyambadi/chennai"],
  ["Ambur", "Chennai", "/routes/ambur/chennai"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.loadzyinfra.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Truck Transport Charges in Tamil Nadu",
          item: "https://www.loadzyinfra.in/truck-transport-charges-tamil-nadu",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Truck Transport Charges in Tamil Nadu",
      description:
        "A practical guide to understanding truck transport charges and freight pricing factors in Tamil Nadu.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/truck-transport-charges-tamil-nadu",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function TruckTransportChargesTamilNaduPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-400">
            LOADZY TRANSPORT GUIDE
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Truck Transport Charges in Tamil Nadu
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Understand how truck transport charges are calculated in Tamil
            Nadu and what factors can affect the freight price for your
            shipment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
             href="/"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-yellow-300"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Truck Information Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            How Much Does Truck Transport Cost in Tamil Nadu?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            There is no single fixed truck transport price for every route in
            Tamil Nadu. Freight charges can change depending on the pickup
            location, delivery location, distance, truck type, load
            requirements, route expenses and truck availability.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            The right way to estimate a transport requirement is to first
            understand the shipment and then select a suitable truck. This
            helps avoid choosing a vehicle that is too small or unnecessarily
            large for the load.
          </p>
        </div>
      </section>

      {/* Main factors */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Factors That Affect Truck Transport Charges
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "1. Distance",
                text: "Longer routes generally involve greater fuel, driver and operating costs. The pickup and delivery distance is one of the main pricing factors.",
              },
              {
                title: "2. Truck Type",
                text: "Mini trucks, pickups, medium trucks, heavy trucks, containers and specialised vehicles have different capacities and operating requirements.",
              },
              {
                title: "3. Load Weight",
                text: "The weight of the shipment helps determine the appropriate truck capacity and whether a particular vehicle is suitable for the load.",
              },
              {
                title: "4. Load Volume",
                text: "A shipment can require more truck space even when its weight is relatively low. Furniture and household goods are common examples.",
              },
              {
                title: "5. Route Expenses",
                text: "Tolls, route conditions and other journey-related expenses can influence the overall transport cost.",
              },
              {
                title: "6. Loading & Unloading",
                text: "Special loading, unloading or handling requirements may affect the final transport quotation.",
              },
              {
                title: "7. Truck Availability",
                text: "Availability can vary by location, date, truck type and route. Pricing may change when suitable trucks are limited.",
              },
              {
                title: "8. Return Load",
                text: "A suitable return load can sometimes help improve truck utilisation and may affect the freight offered for a route.",
              },
              {
                title: "9. Shipment Requirements",
                text: "Goods requiring specific truck bodies or handling arrangements can have different transport requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Truck type */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Choose the Right Truck for the Load
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Truck selection should be based on the actual weight, volume,
            dimensions and nature of the goods. Common categories include
            mini trucks, pickup trucks, light commercial trucks, medium
            trucks, heavy trucks and container vehicles.
          </p>

          <div className="mt-8 rounded-2xl bg-blue-50 p-6">
            <p className="font-semibold text-slate-800">
              For detailed truck types, capacity, dimensions, mileage and body
              types, visit our:
            </p>

            <Link
              href="/truck-guide"
              className="mt-3 inline-block font-bold text-blue-700 underline"
            >
              Truck Information Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Full vs part load */}
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Full Load vs Part Load Transport
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-7">
              <h3 className="text-2xl font-bold">Full Load</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Full-load transport is suitable when the shipment requires a
                substantial portion or the available capacity of a truck for
                one customer's movement.
              </p>

              <Link
                href="/full-load"
                className="mt-5 inline-block font-bold text-yellow-300"
              >
                Full Load Services →
              </Link>
            </div>

            <div className="rounded-2xl bg-white/10 p-7">
              <h3 className="text-2xl font-bold">Part Load</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Part-load transport can be suitable for smaller shipments when
                compatible loads can be combined on a route.
              </p>

              <Link
                href="/part-load"
                className="mt-5 inline-block font-bold text-yellow-300"
              >
                Part Load Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost saving */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            How to Manage Your Transport Cost
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              <strong className="text-slate-900">
                1. Share accurate load details:
              </strong>{" "}
              Give the correct information about weight, quantity, dimensions
              and goods.
            </p>

            <p>
              <strong className="text-slate-900">
                2. Select the appropriate truck:
              </strong>{" "}
              Avoid choosing a truck without considering the actual load
              requirement.
            </p>

            <p>
              <strong className="text-slate-900">
                3. Plan the pickup date:
              </strong>{" "}
              Sharing the required pickup date helps identify suitable truck
              availability.
            </p>

            <p>
              <strong className="text-slate-900">
                4. Consider return-load opportunities:
              </strong>{" "}
              Suitable return loads may improve truck utilisation on some
              routes.
            </p>

            <p>
              <strong className="text-slate-900">
                5. Compare suitable transport options:
              </strong>{" "}
              Consider the right truck type and transport arrangement instead
              of looking only at the lowest initial price.
            </p>
          </div>
        </div>
      </section>

      {/* Popular routes */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Popular Truck Transport Routes
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Explore selected LOADZY transport routes across Tamil Nadu and
            South India.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routeLinks.map(([from, to, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl bg-white p-5 font-bold shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:ring-teal-400"
              >
                {from} → {to}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/routes"
              className="font-bold text-blue-700 underline"
            >
              Explore All Transport Routes →
            </Link>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Related LOADZY Transport Guides
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Truck Information Guide", "/truck-guide"],
              ["Truck Rates", "/truck-rates"],
              ["Full Load Transport", "/full-load"],
              ["Part Load Transport", "/part-load"],
              ["House Shifting", "/house-shifting"],
              ["Commercial Transport", "/commercial-transport"],
              ["Industrial Transport", "/industrial-transport"],
              ["Transport Services", "/services"],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 p-5 font-bold transition hover:border-teal-400 hover:bg-teal-50"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Need a Truck for Your Route?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/90">
            Enter your pickup, delivery and load details to find the right
            truck for your transport requirement.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-extrabold text-slate-900 shadow-lg transition hover:bg-yellow-300"
          >
            Find My Truck →
          </Link>
        </div>
      </section>
    </main>
  );
}