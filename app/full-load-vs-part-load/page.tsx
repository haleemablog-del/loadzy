import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Load vs Part Load Transport | LOADZY",
  description:
    "Learn the difference between full load and part load truck transport, when to choose each option, and what factors affect your transport requirement.",
  keywords: [
    "full load vs part load",
    "full load transport",
    "part load transport",
    "full truck load",
    "part truck load",
    "truck transport services",
    "part load transport Tamil Nadu",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/full-load-vs-part-load",
  },
  openGraph: {
    title: "Full Load vs Part Load Transport | LOADZY",
    description:
      "Understand full load and part load transport and choose the right option for your shipment.",
    url: "https://www.loadzyinfra.in/full-load-vs-part-load",
    siteName: "LOADZY",
    type: "article",
  },
};

const faqs = [
  {
    question: "What is full load transport?",
    answer:
      "Full load transport is generally used when a shipment requires a substantial portion or the available capacity of a truck for one customer's movement.",
  },
  {
    question: "What is part load transport?",
    answer:
      "Part load transport can be suitable for smaller shipments when compatible loads can be combined on a suitable route.",
  },
  {
    question: "Which is cheaper, full load or part load?",
    answer:
      "There is no single answer. Pricing depends on the route, shipment size, truck type, availability and transport requirements.",
  },
  {
    question: "Is part load suitable for household goods?",
    answer:
      "It can be suitable for smaller household shipments when the goods and route are compatible with the available transport arrangement.",
  },
  {
    question: "How do I choose between full load and part load?",
    answer:
      "Consider the weight, volume, dimensions, nature of the goods, route and required delivery timing. The suitable option depends on the actual shipment.",
  },
];

const comparison = [
  {
    feature: "Truck usage",
    full: "Truck capacity is mainly used for one shipment.",
    part: "Available truck space may be shared with compatible shipments.",
  },
  {
    feature: "Suitable for",
    full: "Larger shipments and substantial loads.",
    part: "Smaller shipments that do not require the full truck.",
  },
  {
    feature: "Space requirement",
    full: "Requires a larger portion of truck capacity.",
    part: "Requires only the space needed for the shipment.",
  },
  {
    feature: "Route",
    full: "Pickup and delivery are planned around the shipment.",
    part: "Loads need compatible routes and timing.",
  },
  {
    feature: "Pricing",
    full: "Usually based on the selected truck and transport requirement.",
    part: "Can depend on shipment space, route and shared-load arrangement.",
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
          name: "Full Load vs Part Load",
          item: "https://www.loadzyinfra.in/full-load-vs-part-load",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Full Load vs Part Load Transport",
      description:
        "A practical guide comparing full load and part load truck transport.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/full-load-vs-part-load",
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

export default function FullLoadVsPartLoadPage() {
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
            Full Load vs Part Load Transport
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-300">
            Understand the difference between full load and part load
            transport and choose a suitable option for your shipment.
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
            What Is the Difference?
          </h2>

          <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
            Full load and part load transport are two different ways of
            arranging truck transport. The right choice depends on how much
            space your goods require, the weight and nature of the shipment,
            the route and your delivery requirements.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Full Load vs Part Load
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="grid grid-cols-3 bg-slate-900 p-5 font-bold text-white">
              <div>Feature</div>
              <div>Full Load</div>
              <div>Part Load</div>
            </div>

            {comparison.map((item) => (
              <div
                key={item.feature}
                className="grid grid-cols-3 border-t border-slate-200 p-5"
              >
                <div className="font-bold">{item.feature}</div>
                <div className="font-semibold text-slate-600">
                  {item.full}
                </div>
                <div className="font-semibold text-slate-600">
                  {item.part}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#062B55]">
              When Full Load Makes Sense
            </h2>

            <ul className="mt-5 space-y-3 font-semibold leading-7 text-slate-600">
              <li>• Your shipment occupies a large amount of truck space.</li>
              <li>• You need dedicated truck movement for your goods.</li>
              <li>• The shipment is large or commercially significant.</li>
              <li>• You need a truck selected specifically for the load.</li>
            </ul>

            <Link
              href="/full-load"
              className="mt-6 inline-block font-bold text-teal-600 underline"
            >
              Explore Full Load Services →
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#062B55]">
              When Part Load Makes Sense
            </h2>

            <ul className="mt-5 space-y-3 font-semibold leading-7 text-slate-600">
              <li>• Your shipment does not require the full truck.</li>
              <li>• The shipment is smaller in size or volume.</li>
              <li>• A compatible route and transport arrangement is available.</li>
              <li>• You want to explore a shared-load option.</li>
            </ul>

            <Link
              href="/part-load"
              className="mt-6 inline-block font-bold text-teal-600 underline"
            >
              Explore Part Load Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            How to Choose the Right Option
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Check the weight of your shipment.",
              "Estimate the total volume and dimensions.",
              "Consider the nature of the goods.",
              "Check the pickup and delivery route.",
              "Consider your required pickup and delivery timing.",
              "Select a truck arrangement suitable for the shipment.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/10 p-5 font-semibold text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/truck-guide"
            className="mt-8 inline-block font-bold text-yellow-300 underline"
          >
            Learn about truck types and capacity →
          </Link>
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
              ["Full Load Transport", "/full-load"],
              ["Part Load Transport", "/part-load"],
              ["House Shifting", "/house-shifting"],
              ["Commercial Transport", "/commercial-transport"],
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
                <p className="mt-3 font-semibold leading-7 text-slate-600">
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

          <p className="mt-4 text-lg font-semibold leading-8 text-white/90">
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