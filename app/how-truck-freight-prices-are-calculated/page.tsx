import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Truck Freight Prices Are Calculated | LOADZY",
  description:
    "Learn how truck freight prices are calculated based on distance, truck type, load weight, volume, tolls, loading requirements, availability and return loads.",
  keywords: [
    "how truck freight prices are calculated",
    "truck freight price calculation",
    "truck transport price calculation",
    "lorry freight rates",
    "truck transport cost",
    "freight charges calculation",
    "truck booking rates",
  ],
  alternates: {
    canonical:
      "https://www.loadzyinfra.in/how-truck-freight-prices-are-calculated",
  },
  openGraph: {
    title: "How Truck Freight Prices Are Calculated | LOADZY",
    description:
      "Understand the main factors that affect truck freight prices and transport charges.",
    url: "https://www.loadzyinfra.in/how-truck-freight-prices-are-calculated",
    siteName: "LOADZY",
    type: "article",
  },
};

const faqs = [
  {
    question: "What is the biggest factor in truck freight pricing?",
    answer:
      "Distance is an important factor, but the final freight price can also depend on truck type, load weight and volume, route expenses, loading requirements, availability and other shipment conditions.",
  },
  {
    question: "Does truck size affect freight price?",
    answer:
      "Yes. Different truck sizes have different capacities and operating costs. The suitable truck should be selected based on the weight, volume and nature of the goods.",
  },
  {
    question: "Does the load weight affect transport charges?",
    answer:
      "Yes. Load weight helps determine the appropriate vehicle capacity and whether a particular truck is suitable for the shipment.",
  },
  {
    question: "Do toll charges affect truck freight prices?",
    answer:
      "Tolls and other route-related expenses can contribute to the overall transport cost, depending on the route.",
  },
  {
    question: "Can return loads affect freight pricing?",
    answer:
      "A suitable return load can sometimes improve truck utilisation. Availability depends on the route, timing, truck type and load requirements.",
  },
  {
    question: "Can I get an exact truck freight price online?",
    answer:
      "An accurate transport quotation generally requires pickup location, delivery location, load details, truck requirements and pickup date. LOADZY's booking flow collects these details to help identify the right truck requirement.",
  },
];

const factors = [
  {
    title: "1. Pickup & Delivery Distance",
    text: "The distance between the pickup and delivery locations is a major part of freight pricing because longer journeys generally involve greater fuel, driver and vehicle operating costs.",
  },
  {
    title: "2. Truck Type",
    text: "Mini trucks, pickups, medium trucks, heavy trucks, containers and specialised vehicles have different capacities and operating requirements.",
  },
  {
    title: "3. Load Weight",
    text: "The weight of the goods helps determine which truck capacity is suitable for the shipment.",
  },
  {
    title: "4. Load Volume",
    text: "Some shipments need more physical space even when they are relatively light. Furniture and household goods are common examples.",
  },
  {
    title: "5. Route Expenses",
    text: "Tolls, route conditions and other journey-related expenses can influence the final transport cost.",
  },
  {
    title: "6. Loading & Unloading",
    text: "Special handling, loading or unloading requirements can add to the overall transport requirement.",
  },
  {
    title: "7. Truck Availability",
    text: "The number of suitable trucks available for a particular route and date can affect the freight offered.",
  },
  {
    title: "8. Return Load Availability",
    text: "When a suitable return load is available, truck utilisation may improve and this can sometimes influence the freight arrangement.",
  },
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
          name: "How Truck Freight Prices Are Calculated",
          item: "https://www.loadzyinfra.in/how-truck-freight-prices-are-calculated",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How Truck Freight Prices Are Calculated",
      description:
        "A practical guide explaining the major factors that affect truck freight prices.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/how-truck-freight-prices-are-calculated",
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

export default function TruckFreightPricesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">
            LOADZY TRANSPORT GUIDE
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            How Truck Freight Prices Are Calculated
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Understand the main factors that influence truck freight prices,
            from distance and truck type to load size, route expenses and
            availability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-900"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold"
            >
              Truck Information Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            What Determines Truck Freight Prices?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Truck freight pricing is not based on distance alone. A transport
            requirement can have different costs depending on the route, truck
            capacity, load characteristics, operating expenses and truck
            availability.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            The most useful way to estimate a freight requirement is to provide
            accurate pickup, delivery, load and truck information before
            selecting a vehicle.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Main Factors in Freight Price Calculation
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {factors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-bold">{factor.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Why the Same Route Can Have Different Freight Prices
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Two shipments travelling between the same cities may require
            different trucks or handling arrangements. For example, a small
            household shipment may need a different vehicle from a heavy
            commercial load. Pickup date, truck availability, load dimensions
            and route conditions can also change the transport requirement.
          </p>

          <div className="mt-8 rounded-2xl bg-blue-50 p-7">
            <h3 className="text-xl font-bold">
              Don't choose a truck based only on price
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              The cheapest-looking option may not be suitable for the actual
              weight, volume or dimensions of the goods. Choosing an
              appropriately sized truck can help avoid transport problems.
            </p>

            <Link
              href="/truck-guide"
              className="mt-4 inline-block font-bold text-blue-700 underline"
            >
              Learn about truck types and capacity →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Full Load and Part Load Pricing
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-7">
              <h3 className="text-2xl font-bold">Full Load</h3>
              <p className="mt-3 leading-7 text-slate-300">
                A full-load shipment generally uses a truck for one customer's
                transport requirement. The suitable vehicle depends on the
                shipment size and truck capacity.
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Related LOADZY Guides
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Truck Information Guide", "/truck-guide"],
              [
                "Truck Transport Charges in Tamil Nadu",
                "/truck-transport-charges-tamil-nadu",
              ],
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
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-500 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Need a Truck for Your Route?
          </h2>

          <p className="mt-4 text-lg leading-8 text-white/90">
            Enter your pickup, delivery and load details to find the right
            truck for your transport requirement.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-extrabold text-slate-900"
          >
            Find My Truck →
          </Link>
        </div>
      </section>
    </main>
  );
}