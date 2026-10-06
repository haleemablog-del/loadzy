import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Return Load Transport Guide | LOADZY",
  description:
    "Learn how return load transport works, why return loads can improve truck utilization, and how LOADZY helps connect trucks with available loads.",
  keywords: [
    "return load transport",
    "return load truck",
    "return load booking",
    "truck return load",
    "back load transport",
    "return freight",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/return-load-transport-guide",
  },
};

const benefits = [
  {
    title: "Better Truck Utilization",
    text: "A return load can help a truck carry another shipment instead of travelling back without cargo.",
  },
  {
    title: "More Load Opportunities",
    text: "Truck owners can look for suitable loads along or near their return route.",
  },
  {
    title: "Route Matching",
    text: "Pickup and delivery locations help determine whether a return load is suitable for the truck.",
  },
  {
    title: "Reduced Empty Travel",
    text: "Finding a suitable return shipment can help reduce unnecessary empty running.",
  },
  {
    title: "Suitable Load Type",
    text: "The load should match the truck's capacity, body type and transport requirements.",
  },
  {
    title: "Pickup Timing",
    text: "The pickup date and timing need to match the truck's availability after completing its first trip.",
  },
];

const steps = [
  "Complete the original delivery.",
  "Check the truck's return route and available time.",
  "Search for loads near the delivery location.",
  "Compare the load's pickup and delivery route.",
  "Confirm truck capacity and load requirements.",
  "Accept a suitable return load and continue the journey.",
];

const faqs = [
  {
    question: "What is a return load?",
    answer:
      "A return load is a shipment picked up by a truck after completing its original delivery, usually for a journey back toward its next destination or operating area.",
  },
  {
    question: "Why are return loads useful for truck owners?",
    answer:
      "A suitable return load can help improve truck utilization and reduce empty travel after completing a delivery.",
  },
  {
    question: "Can every truck take every return load?",
    answer:
      "No. The load must be suitable for the truck's payload capacity, available space, body type and transport requirements.",
  },
  {
    question: "How can I find a return load?",
    answer:
      "Truck owners can search available loads based on pickup, delivery, load type and truck requirements.",
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
          name: "Return Load Transport Guide",
          item:
            "https://www.loadzyinfra.in/return-load-transport-guide",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Return Load Transport Guide",
      description:
        "A practical guide to return load transport and truck load matching.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/return-load-transport-guide",
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

export default function ReturnLoadTransportGuidePage() {
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
            Return Load Transport Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-300">
            Learn how return loads work and how truck owners can find suitable
            shipments after completing a delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-slate-900"
            >
              Find a Load →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-6 py-3 font-extrabold"
            >
              Truck Information Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            What Is a Return Load?
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            After delivering a shipment, a truck may need to travel toward
            another location. A suitable return load can allow the truck to
            carry another shipment instead of travelling back without cargo.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Benefits of Return Load Transport
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-black text-[#062B55]">
                  {benefit.title}
                </h3>

                <p className="mt-3 font-bold leading-7 text-slate-600">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            How Return Load Matching Works
          </h2>

          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-slate-200 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500 font-black text-white">
                  {index + 1}
                </span>

                <p className="font-bold text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Find Available Loads
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-300">
            Truck owners can search available loads based on pickup location,
            delivery location, load type and truck requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-teal-500 px-6 py-3 font-extrabold"
            >
              Find a Load →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-6 py-3 font-extrabold"
            >
              Truck Information Guide →
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
              [
                "Industrial Transport Guide",
                "/industrial-transport-guide",
              ],
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
            Looking for a Return Load?
          </h2>

          <p className="mt-4 text-lg font-bold leading-8 text-white/90">
            Search available LOADZY loads and find a shipment that matches
            your truck and route.
          </p>

          <Link
            href="/load-search"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-extrabold text-slate-900"
          >
            Find a Load →
          </Link>
        </div>
      </section>
    </main>
  );
}