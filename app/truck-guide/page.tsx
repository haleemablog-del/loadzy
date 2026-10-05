import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Types, Capacity, Dimensions & Mileage Guide | LOADZY",
  description:
    "Learn about truck types, load capacity, dimensions, mileage, body types, payload, GVW and how to choose the right truck for transport with LOADZY.",
  keywords: [
    "truck types",
    "truck capacity",
    "truck dimensions",
    "truck mileage",
    "lorry types",
    "lorry capacity",
    "truck load capacity",
    "truck information",
    "truck guide India",
    "truck booking guide",
    "LOADZY truck guide",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/truck-guide",
  },
  openGraph: {
    title: "Truck Types, Capacity, Dimensions & Mileage Guide | LOADZY",
    description:
      "Understand truck types, capacity, dimensions, mileage, body types and how to choose the right vehicle for your transport requirement.",
    url: "https://www.loadzyinfra.in/truck-guide",
    siteName: "LOADZY",
    type: "article",
  },
};

const truckTypes = [
  {
    name: "Mini Truck",
    capacity: "Approx. 0.5–1.5 ton category",
    use:
      "Small household moves, local deliveries, retail goods and smaller commercial consignments.",
  },
  {
    name: "Pickup Truck",
    capacity: "Approx. 0.75–2 ton category",
    use:
      "Local and regional transport of smaller commercial, agricultural and business loads.",
  },
  {
    name: "Light Commercial Truck",
    capacity: "Approx. 1–3 ton category",
    use:
      "Medium-sized commercial goods, business consignments and regional transport.",
  },
  {
    name: "Medium Truck",
    capacity: "Approx. 3–7 ton category",
    use:
      "Larger commercial consignments, industrial goods and longer-distance freight.",
  },
  {
    name: "Heavy Truck",
    capacity: "7 ton+ category",
    use:
      "Heavy commercial and industrial cargo where a larger vehicle is required.",
  },
  {
    name: "Container Truck",
    capacity: "Varies by vehicle and container",
    use:
      "Goods that need enclosed transport and protection from weather or handling conditions.",
  },
  {
    name: "Trailer",
    capacity: "Varies significantly",
    use:
      "Large, heavy, long or specialized cargo requiring a trailer configuration.",
  },
  {
    name: "Refrigerated Truck",
    capacity: "Varies by vehicle",
    use:
      "Temperature-sensitive products such as selected food, agricultural and other perishable goods.",
  },
];

const capacityGuide = [
  {
    weight: "Up to 1 ton",
    suitable: "Mini truck / pickup category",
    note: "Suitable for smaller household and commercial loads depending on dimensions.",
  },
  {
    weight: "1–2 tons",
    suitable: "Pickup / light commercial category",
    note: "Useful for medium-sized local and regional consignments.",
  },
  {
    weight: "2–4 tons",
    suitable: "Light / medium truck category",
    note: "Vehicle choice should also consider cargo volume and loading dimensions.",
  },
  {
    weight: "4–7 tons",
    suitable: "Medium truck category",
    note: "Suitable for larger commercial and industrial consignments.",
  },
  {
    weight: "7–10+ tons",
    suitable: "Heavy truck category",
    note: "Requires a vehicle rated for the actual cargo weight and applicable road limits.",
  },
];

const bodyTypes = [
  {
    name: "Open Body",
    description:
      "An open loading body can be useful for goods that do not require enclosed protection.",
  },
  {
    name: "Closed Body",
    description:
      "An enclosed body provides additional protection for goods during transport.",
  },
  {
    name: "Container",
    description:
      "Container vehicles provide an enclosed cargo space and are widely used for commercial freight.",
  },
  {
    name: "High-Side",
    description:
      "Higher side walls can provide additional loading space for suitable types of cargo.",
  },
  {
    name: "Flatbed",
    description:
      "A flat loading platform can be useful for certain machinery, equipment and oversized cargo.",
  },
  {
    name: "Refrigerated",
    description:
      "Temperature-controlled vehicles are designed for suitable temperature-sensitive cargo.",
  },
];

const faqs = [
  {
    question: "What is truck capacity?",
    answer:
      "Truck capacity generally refers to how much cargo a vehicle is rated to carry. The correct payload depends on the specific vehicle, manufacturer rating, body configuration and applicable legal limits.",
  },
  {
    question: "What is payload?",
    answer:
      "Payload is the cargo weight a vehicle is designed and legally permitted to carry. It is different from the vehicle's total gross weight.",
  },
  {
    question: "What is GVW?",
    answer:
      "GVW means Gross Vehicle Weight. It refers to the permitted total weight of the vehicle together with its occupants, fuel and cargo, according to the vehicle's applicable rating.",
  },
  {
    question: "Does truck mileage stay the same for every trip?",
    answer:
      "No. Mileage can change depending on the vehicle model, payload, road conditions, traffic, driving behaviour, terrain, maintenance and other operating conditions.",
  },
  {
    question: "Which truck is suitable for house shifting?",
    answer:
      "The suitable truck depends on the amount, weight, volume and dimensions of the household goods. A smaller move may require a mini truck or pickup, while a larger move may need a larger commercial vehicle.",
  },
  {
    question: "Which truck should I choose for commercial goods?",
    answer:
      "Choose based on cargo weight, cargo volume, dimensions, loading requirements, route and whether the goods need an open, closed, container or specialized body.",
  },
  {
    question: "What is the difference between a truck and a lorry?",
    answer:
      "In everyday Indian usage, truck and lorry are often used interchangeably. The exact vehicle category depends on the vehicle's design, capacity and purpose.",
  },
  {
    question: "Can LOADZY help me find a suitable truck?",
    answer:
      "Yes. You can use LOADZY to start a truck transport requirement and explore suitable transport options based on your pickup, delivery and load requirements.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.loadzyinfra.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Truck Guide",
          item: "https://www.loadzyinfra.in/truck-guide",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Truck Types, Capacity, Dimensions & Mileage Guide",
      description:
        "A practical guide to truck types, capacity, dimensions, mileage, body types and choosing a suitable truck for transport.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/truck-guide",
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

export default function TruckGuidePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            LOADZY • Truck Information Guide
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Truck Types, Capacity, Dimensions & Mileage Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn the basics of truck types, load capacity, dimensions,
            mileage, body types, payload and GVW so you can choose a more
            suitable vehicle for your transport requirement.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Find My Truck
            </Link>

            <Link
              href="/truck-rates"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Truck Rates
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Understanding Trucks Before Booking
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Choosing a truck is not only about the weight of your goods. The
              vehicle should also match the cargo dimensions, volume, loading
              requirements, route and type of goods being transported.
            </p>

            <p>
              A small household move, a commercial shipment and an industrial
              consignment may all require different vehicle configurations.
              Understanding the basic truck categories can help you describe
              your requirement more clearly when requesting transport.
            </p>

            <p>
              The figures on this guide are general categories. Actual payload,
              dimensions, mileage and permitted weight can vary by manufacturer,
              model, body configuration, road conditions and applicable
              regulations.
            </p>
          </div>
        </div>
      </section>

      {/* TRUCK TYPES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Common Truck Types
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Different truck categories are designed for different load sizes,
            cargo types and transport requirements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {truckTypes.map((truck) => (
              <div
                key={truck.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{truck.name}</h3>

                <p className="mt-3 font-semibold text-teal-700">
                  {truck.capacity}
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  {truck.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Truck Load Capacity Guide
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Payload is only one part of selecting a truck. Always consider
            cargo dimensions and the vehicle's actual rated capacity.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-6 py-4">Approx. Load</th>
                    <th className="px-6 py-4">Vehicle Category</th>
                    <th className="px-6 py-4">Typical Use</th>
                  </tr>
                </thead>

                <tbody>
                  {capacityGuide.map((item) => (
                    <tr
                      key={item.weight}
                      className="border-t border-slate-200"
                    >
                      <td className="px-6 py-5 font-semibold">
                        {item.weight}
                      </td>
                      <td className="px-6 py-5">
                        {item.suitable}
                      </td>
                      <td className="px-6 py-5 text-slate-600">
                        {item.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PAYLOAD / GVW */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              What Is Payload?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Payload is the cargo weight that a vehicle is designed and
              permitted to carry. When selecting a truck, the expected cargo
              weight should stay within the vehicle's applicable rated limit.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              What Is GVW?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              GVW means Gross Vehicle Weight. It refers to the permitted total
              weight of the vehicle and its contents. GVW and payload are not
              the same thing.
            </p>
          </div>
        </div>
      </section>

      {/* DIMENSIONS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Truck Dimensions: What Should You Check?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A truck may have enough weight capacity but still be unsuitable if
            your goods are too large or difficult to load. Before booking,
            consider:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Vehicle length",
              "Vehicle width",
              "Vehicle height",
              "Cargo-body length",
              "Cargo-body width",
              "Cargo-body height",
              "Cargo volume",
              "Loading and unloading requirements",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl bg-teal-50 p-6 leading-8 text-slate-700">
            <strong>Tip:</strong> For household, machinery or oversized goods,
            measure the largest individual items before selecting a vehicle.
            Weight alone does not tell you whether everything will physically
            fit.
          </p>
        </div>
      </section>

      {/* MILEAGE */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Truck Mileage & Fuel Efficiency
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Truck mileage is the distance a vehicle can travel for a given
              amount of fuel. There is no single mileage figure that applies to
              every truck in a category.
            </p>

            <p>
              Actual mileage can change with the vehicle model, engine,
              payload, road conditions, traffic, terrain, driving style,
              maintenance and the type of route.
            </p>

            <p>
              Highway trips may produce different fuel efficiency from
              stop-and-go city transport. A heavily loaded vehicle can also
              consume more fuel than the same vehicle running with a lighter
              load.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold">
              What affects truck mileage?
            </h3>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                "Vehicle model and engine",
                "Total payload",
                "Traffic conditions",
                "Road and terrain",
                "Driving behaviour",
                "Vehicle maintenance",
                "Tyre condition",
                "Route distance and stops",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-slate-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BODY TYPES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Truck Body Types
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bodyTypes.map((body) => (
              <div
                key={body.name}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-bold">{body.name}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {body.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            How to Choose the Right Truck
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Start with your actual transport requirement instead of choosing a
            truck only by name or size.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Weight",
                text: "Estimate the total cargo weight.",
              },
              {
                number: "02",
                title: "Volume",
                text: "Estimate how much space the goods need.",
              },
              {
                number: "03",
                title: "Dimensions",
                text: "Check the largest items and loading space.",
              },
              {
                number: "04",
                title: "Cargo Type",
                text: "Consider whether the goods need special protection.",
              },
              {
                number: "05",
                title: "Route",
                text: "Consider distance, road and delivery requirements.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-bold text-teal-400">
                  {item.number}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Choosing a Truck for Different Loads
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "House Shifting",
                text: "Choose based on furniture, appliances, boxes, total weight and the volume of household goods.",
                href: "/house-shifting",
              },
              {
                title: "Commercial Goods",
                text: "Match the vehicle to the weight, volume, dimensions and protection requirements of the goods.",
                href: "/commercial-transport",
              },
              {
                title: "Industrial Goods",
                text: "Industrial cargo may require higher capacity, specialized bodies or specific loading arrangements.",
                href: "/industrial-transport",
              },
              {
                title: "Fruits & Vegetables",
                text: "Vehicle choice depends on quantity, distance, loading conditions and the need for suitable protection.",
                href: "/fruits-vegetables",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-teal-400 hover:shadow-md"
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>

                <span className="mt-5 inline-block font-semibold text-teal-600">
                  Explore service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BASIC TERMS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Basic Truck Terms
          </h2>

          <div className="mt-8 space-y-4">
            {[
              [
                "Payload",
                "The cargo weight a vehicle is rated and permitted to carry.",
              ],
              [
                "GVW",
                "Gross Vehicle Weight, referring to the permitted total vehicle weight.",
              ],
              [
                "Axle",
                "A structural assembly that supports wheels and carries part of the vehicle load.",
              ],
              [
                "Wheelbase",
                "The distance between the front and rear axle centres.",
              ],
              [
                "Cargo Body",
                "The part of the truck designed to carry the goods.",
              ],
              [
                "Mileage",
                "A measure of distance travelled relative to fuel consumed.",
              ],
            ].map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold">{term}</h3>
                <p className="mt-2 text-slate-600">{definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">
            Truck Information FAQs
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-bold">
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

      {/* RELATED GUIDES */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            More LOADZY Transport Information
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Link
              href="/truck-rates"
              className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold transition hover:border-teal-400"
            >
              Truck Rates & Transport Charges →
            </Link>

            <Link
              href="/full-load"
              className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold transition hover:border-teal-400"
            >
              Full Load Transport →
            </Link>

            <Link
              href="/part-load"
              className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold transition hover:border-teal-400"
            >
              Part Load Transport →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Know Your Load? Find Your Truck.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Enter your transport requirement and start finding a suitable
            truck option with LOADZY.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-teal-500 px-7 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Find My Truck
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Transport Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}