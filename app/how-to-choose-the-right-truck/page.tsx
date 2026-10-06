import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose the Right Truck for Your Load | LOADZY",
  description:
    "Learn how to choose the right truck based on load weight, volume, dimensions, goods type, route and transport requirements.",
  keywords: [
    "how to choose the right truck",
    "choose truck for load",
    "truck capacity guide",
    "truck selection guide",
    "which truck for my load",
    "truck types and capacity",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/how-to-choose-the-right-truck",
  },
  openGraph: {
    title: "How to Choose the Right Truck for Your Load | LOADZY",
    description:
      "A practical guide to selecting a suitable truck for your transport requirement.",
    url: "https://www.loadzyinfra.in/how-to-choose-the-right-truck",
    siteName: "LOADZY",
    type: "article",
  },
};

const steps = [
  {
    title: "1. Know Your Load Weight",
    text: "Estimate the total weight of the goods before selecting a truck. The vehicle should have suitable payload capacity for the shipment.",
  },
  {
    title: "2. Check the Load Volume",
    text: "Weight is not the only consideration. Bulky or lightweight goods may require more truck space even when the total weight is relatively low.",
  },
  {
    title: "3. Measure Large Items",
    text: "For furniture, machinery and other oversized goods, consider length, width and height so the available loading space is suitable.",
  },
  {
    title: "4. Consider the Goods Type",
    text: "Different goods may require different body types, loading arrangements or protection during transport.",
  },
  {
    title: "5. Check Your Route",
    text: "Pickup and delivery locations, road conditions and route requirements can influence the suitable vehicle.",
  },
  {
    title: "6. Consider Delivery Requirements",
    text: "Your pickup date, delivery timing and shipment urgency can influence the transport arrangement and truck availability.",
  },
];

const truckTypes = [
  ["Mini Truck", "Small household and commercial loads"],
  ["Pickup Truck", "Smaller goods and local transport"],
  ["Light Commercial Truck", "Light to medium commercial loads"],
  ["Medium Truck", "Medium-weight commercial shipments"],
  ["Heavy Truck", "Large and heavier shipments"],
  ["Container Truck", "Goods requiring enclosed transport"],
];

const faqs = [
  {
    question: "How do I know which truck I need?",
    answer:
      "Start with the weight, volume and dimensions of your goods. Then consider the goods type, route and pickup requirements.",
  },
  {
    question: "Should I choose a truck only by its ton capacity?",
    answer:
      "No. Payload capacity is important, but the physical size and volume of the shipment also need to fit the available loading space.",
  },
  {
    question: "Which truck is suitable for house shifting?",
    answer:
      "The suitable truck depends on the amount and type of household goods, furniture dimensions and the distance between locations.",
  },
  {
    question: "Can LOADZY help find the right truck?",
    answer:
      "Yes. LOADZY's booking flow collects pickup, delivery, load and truck requirements to help identify a suitable transport requirement.",
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
          name: "How to Choose the Right Truck",
          item: "https://www.loadzyinfra.in/how-to-choose-the-right-truck",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Choose the Right Truck for Your Load",
      description:
        "A practical guide to selecting a suitable truck for different transport requirements.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/how-to-choose-the-right-truck",
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

export default function HowToChooseTruckPage() {
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
            How to Choose the Right Truck for Your Load
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-300">
            Learn how to select a suitable truck based on load weight, volume,
            dimensions, goods type, route and transport requirements.
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
            Choosing the Right Truck
          </h2>

          <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
            The right truck is not always the biggest truck. A suitable vehicle
            should match the weight, volume and dimensions of your goods while
            also fitting the route and transport requirements.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            6 Things to Check Before Booking
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-black text-[#062B55]">
                  {step.title}
                </h3>

                <p className="mt-3 font-semibold leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Common Truck Types
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {truckTypes.map(([type, use]) => (
              <div
                key={type}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-[#062B55]">{type}</h3>
                <p className="mt-2 font-semibold text-slate-600">{use}</p>
              </div>
            ))}
          </div>

          <Link
            href="/truck-guide"
            className="mt-8 inline-block font-bold text-teal-600 underline"
          >
            See the complete Truck Information Guide →
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Weight vs Volume: Both Matter
          </h2>

          <p className="mt-5 text-lg font-semibold leading-8 text-slate-300">
            A truck can have enough payload capacity but still have insufficient
            loading space for bulky goods. Conversely, a large truck may not be
            necessary for a compact heavy shipment. Consider both the physical
            space and weight of your goods before selecting a vehicle.
          </p>

          <Link
            href="/truck-guide"
            className="mt-7 inline-block font-bold text-yellow-300 underline"
          >
            Learn about payload, GVW and truck capacity →
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
              ["Full Load vs Part Load", "/full-load-vs-part-load"],
              ["Full Load Transport", "/full-load"],
              ["Part Load Transport", "/part-load"],
              ["House Shifting", "/house-shifting"],
              ["Commercial Transport", "/commercial-transport"],
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
            Need Help Finding the Right Truck?
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