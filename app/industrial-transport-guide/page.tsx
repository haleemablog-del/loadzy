import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Transport Guide | Truck & Freight Transport | LOADZY",
  description:
    "Learn how to plan industrial transport, select suitable trucks and move machinery, equipment, materials and industrial goods safely and efficiently.",
  keywords: [
    "industrial transport",
    "industrial transport guide",
    "industrial goods transport",
    "machinery transport",
    "heavy goods transport",
    "industrial truck transport",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/industrial-transport-guide",
  },
};

const factors = [
  {
    title: "Weight & Payload",
    text: "Understand the approximate weight of machinery, equipment or industrial materials before selecting a suitable vehicle.",
  },
  {
    title: "Dimensions",
    text: "Length, width and height of the cargo can determine the required truck body and available loading space.",
  },
  {
    title: "Cargo Type",
    text: "Industrial machinery, equipment, raw materials and finished goods may require different transport arrangements.",
  },
  {
    title: "Loading Requirements",
    text: "Consider how the goods will be loaded, secured and unloaded at the pickup and delivery locations.",
  },
  {
    title: "Route",
    text: "The pickup and delivery route, distance and road conditions are important when planning industrial transport.",
  },
  {
    title: "Vehicle Availability",
    text: "Truck availability can depend on the required vehicle type, route and pickup date.",
  },
];

const cargoTypes = [
  "Industrial machinery",
  "Factory equipment",
  "Raw materials",
  "Manufactured goods",
  "Construction materials",
  "Heavy equipment",
  "Electrical equipment",
  "Industrial components",
];

const faqs = [
  {
    question: "What is industrial transport?",
    answer:
      "Industrial transport involves moving machinery, equipment, materials and other industrial goods between factories, warehouses, project sites and other locations.",
  },
  {
    question: "How do I choose a truck for industrial goods?",
    answer:
      "Consider cargo weight, dimensions, loading requirements, truck capacity, body type, route and pickup date before selecting a vehicle.",
  },
  {
    question: "Can large machinery be transported by truck?",
    answer:
      "Large machinery may require a suitable heavy vehicle or specialized transport arrangement depending on its weight, dimensions and handling requirements.",
  },
  {
    question: "Does industrial transport cost depend on distance?",
    answer:
      "Distance is one factor that can affect freight pricing. Truck type, cargo requirements, route expenses and vehicle availability can also influence the price.",
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
          name: "Industrial Transport Guide",
          item: "https://www.loadzyinfra.in/industrial-transport-guide",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Industrial Transport Guide",
      description:
        "A practical guide to planning industrial goods and equipment transport.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/industrial-transport-guide",
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

export default function IndustrialTransportGuidePage() {
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
            Industrial Transport Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-300">
            Learn how to plan industrial goods transport and select suitable
            trucks for machinery, equipment, materials and commercial cargo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-slate-900"
            >
              Find My Truck →
            </Link>

            <Link
              href="/industrial-transport"
              className="rounded-xl border border-white/30 px-6 py-3 font-extrabold"
            >
              Industrial Transport Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Planning Industrial Transport
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Industrial shipments can include machinery, equipment, raw
            materials and manufactured goods. The right transport solution
            depends on the cargo weight, dimensions, loading requirements,
            route and vehicle availability.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            6 Things to Check Before Booking
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-black text-[#062B55]">
                  {factor.title}
                </h3>

                <p className="mt-3 font-bold leading-7 text-slate-600">
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
            Common Industrial Cargo
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cargoTypes.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-bold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Select the Right Truck
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-300">
            Truck selection should consider payload capacity, cargo
            dimensions, body type, loading method, route and pickup date.
            Actual vehicle suitability depends on the shipment requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/truck-guide"
              className="rounded-xl bg-teal-500 px-6 py-3 font-extrabold"
            >
              Truck Information Guide →
            </Link>

            <Link
              href="/how-to-choose-the-right-truck"
              className="rounded-xl border border-white/30 px-6 py-3 font-extrabold"
            >
              How to Choose the Right Truck →
            </Link>

            <Link
              href="/truck-rates"
              className="rounded-xl border border-white/30 px-6 py-3 font-extrabold"
            >
              Truck Rates →
            </Link>
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
              [
                "How Truck Freight Prices Are Calculated",
                "/how-truck-freight-prices-are-calculated",
              ],
              ["Full Load vs Part Load", "/full-load-vs-part-load"],
              [
                "How to Choose the Right Truck",
                "/how-to-choose-the-right-truck",
              ],
              [
                "House Shifting Truck Guide",
                "/house-shifting-truck-guide",
              ],
              [
                "Commercial Goods Transport Guide",
                "/commercial-goods-transport-guide",
              ],
              ["Industrial Transport", "/industrial-transport"],
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
                <h3 className="text-lg font-extrabold">
                  {faq.question}
                </h3>

                <p className="mt-3 font-bold leading-7 text-slate-600">
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
            Need Industrial Transport?
          </h2>

          <p className="mt-4 text-lg font-bold leading-8 text-white/90">
            Enter your pickup, delivery and load details to find suitable
            transport for your industrial shipment.
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