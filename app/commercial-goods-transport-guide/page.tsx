import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Goods Transport Guide | LOADZY",
  description:
    "Learn how to plan commercial goods transport, choose the right truck, estimate load requirements and arrange reliable freight movement with LOADZY.",
  keywords: [
    "commercial goods transport",
    "commercial goods transport guide",
    "commercial truck transport",
    "goods transport services",
    "commercial freight transport",
    "truck transport",
  ],
  alternates: {
    canonical:
      "https://www.loadzyinfra.in/commercial-goods-transport-guide",
  },
  openGraph: {
    title: "Commercial Goods Transport Guide | LOADZY",
    description:
      "A practical guide to choosing trucks and planning commercial goods transport.",
    url: "https://www.loadzyinfra.in/commercial-goods-transport-guide",
    siteName: "LOADZY",
    type: "article",
  },
};

const factors = [
  {
    title: "Load Weight",
    text: "Know the approximate weight of the goods so the vehicle has suitable payload capacity.",
  },
  {
    title: "Load Volume",
    text: "The amount of space required can be just as important as weight when selecting a truck.",
  },
  {
    title: "Goods Type",
    text: "Different goods may require open body, closed body, container or other suitable truck configurations.",
  },
  {
    title: "Truck Size",
    text: "Choose a vehicle with enough loading space for the quantity and dimensions of your goods.",
  },
  {
    title: "Transport Route",
    text: "Pickup and delivery locations, distance and route conditions can influence the transport requirement.",
  },
  {
    title: "Pickup Date",
    text: "Vehicle availability can vary depending on the route, truck type and required pickup date.",
  },
];

const goods = [
  "Retail and wholesale goods",
  "Manufactured products",
  "Industrial materials",
  "Furniture and equipment",
  "Packaging materials",
  "Construction-related goods",
  "Agricultural products",
  "General commercial cargo",
];

const faqs = [
  {
    question: "What is commercial goods transport?",
    answer:
      "Commercial goods transport involves moving products, materials or business cargo between pickup and delivery locations using suitable transport vehicles.",
  },
  {
    question: "How do I choose a truck for commercial goods?",
    answer:
      "Consider the weight, volume, dimensions and type of goods, along with the route and required pickup date.",
  },
  {
    question: "Does truck size depend only on load weight?",
    answer:
      "No. Available loading space and the dimensions of the goods are also important when selecting a suitable vehicle.",
  },
  {
    question: "Can LOADZY help find a truck for commercial goods?",
    answer:
      "Yes. You can submit your pickup, delivery, load and truck requirements through LOADZY to find suitable transport options.",
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
          name: "Commercial Goods Transport Guide",
          item:
            "https://www.loadzyinfra.in/commercial-goods-transport-guide",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Commercial Goods Transport Guide",
      description:
        "A practical guide to planning commercial goods transport and choosing a suitable truck.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/commercial-goods-transport-guide",
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

export default function CommercialGoodsTransportGuidePage() {
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
            Commercial Goods Transport Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-300">
            Learn how to plan commercial goods transport and choose a suitable
            truck based on your cargo, truck capacity, route and transport
            requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-slate-900"
            >
              Find My Truck →
            </Link>

            <Link
              href="/commercial-transport"
              className="rounded-xl border border-white/30 px-6 py-3 font-extrabold"
            >
              Commercial Transport Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Planning Commercial Goods Transport
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Commercial shipments can vary significantly in weight, volume,
            dimensions and handling requirements. Choosing the appropriate
            truck starts with understanding the cargo and the route.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            6 Factors to Check Before Booking
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
            Common Commercial Goods
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {goods.map((item) => (
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
            Choose the Right Truck
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-300">
            Truck selection should consider payload capacity, available
            loading space, body type, goods dimensions, route and pickup date.
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
              ["Commercial Transport", "/commercial-transport"],
              ["Full Load Transport", "/full-load"],
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
            Need a Truck for Commercial Goods?
          </h2>

          <p className="mt-4 text-lg font-bold leading-8 text-white/90">
            Enter your pickup, delivery and load details to find a suitable
            truck for your commercial transport requirement.
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