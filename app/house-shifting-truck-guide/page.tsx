import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Shifting Truck Guide | Choose the Right Truck | LOADZY",
  description:
    "Learn how to choose a truck for house shifting based on household goods, furniture, load size, truck capacity and transport requirements.",
  keywords: [
    "house shifting truck",
    "house shifting truck guide",
    "truck for house shifting",
    "house shifting transport",
    "household goods transport",
    "packers movers truck",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/house-shifting-truck-guide",
  },
  openGraph: {
    title: "House Shifting Truck Guide | LOADZY",
    description:
      "Learn how to select a suitable truck for household shifting and furniture transport.",
    url: "https://www.loadzyinfra.in/house-shifting-truck-guide",
    siteName: "LOADZY",
    type: "article",
  },
};

const steps = [
  {
    title: "1. List Your Household Goods",
    text: "Make a simple list of furniture, appliances, boxes and other items that need to be transported.",
  },
  {
    title: "2. Estimate the Load",
    text: "Consider both the approximate weight and the amount of space your household goods will occupy.",
  },
  {
    title: "3. Check Furniture Dimensions",
    text: "Large beds, sofas, wardrobes and appliances may require additional loading space even when the total weight is moderate.",
  },
  {
    title: "4. Choose Suitable Truck Space",
    text: "Select a truck with enough payload capacity and physical loading space for the shipment.",
  },
  {
    title: "5. Consider the Route",
    text: "Pickup and delivery locations and the distance between them are important when arranging house-shifting transport.",
  },
  {
    title: "6. Confirm the Pickup Date",
    text: "Truck availability can depend on the required pickup date, route and vehicle type.",
  },
];

const faqs = [
  {
    question: "Which truck is suitable for house shifting?",
    answer:
      "The suitable truck depends on the quantity, weight, volume and dimensions of the household goods being moved.",
  },
  {
    question: "Can a mini truck be used for house shifting?",
    answer:
      "A mini truck can be suitable for smaller household shipments when the goods fit within its available capacity and loading space.",
  },
  {
    question: "How do I estimate the truck size for household goods?",
    answer:
      "Make a list of furniture and other goods, estimate their weight and volume, and consider the dimensions of larger items before selecting a vehicle.",
  },
  {
    question: "Does distance affect house-shifting transport cost?",
    answer:
      "Yes. Distance is one of the factors that can affect transport pricing, along with truck type, load requirements, route expenses and availability.",
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
          name: "House Shifting Truck Guide",
          item: "https://www.loadzyinfra.in/house-shifting-truck-guide",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "House Shifting Truck Guide",
      description:
        "A practical guide to choosing a suitable truck for house shifting.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/house-shifting-truck-guide",
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

export default function HouseShiftingTruckGuidePage() {
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
            House Shifting Truck Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-300">
            Learn how to choose a suitable truck for household goods,
            furniture and house shifting based on load size and transport
            requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-900"
            >
              Find My Truck →
            </Link>

            <Link
              href="/house-shifting"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold"
            >
              House Shifting Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            How to Plan a House Shifting Truck
          </h2>

          <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
            House shifting can involve furniture, appliances, cartons and
            personal belongings of different sizes. The right truck should
            provide suitable payload capacity and enough physical space for
            the shipment.
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
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Common Household Items to Consider
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Beds and mattresses",
              "Sofas and chairs",
              "Wardrobes and cabinets",
              "Refrigerators and washing machines",
              "Televisions and appliances",
              "Kitchen items and cartons",
              "Tables and other furniture",
              "Personal household belongings",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-bold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <Link
            href="/truck-guide"
            className="mt-8 inline-block font-bold text-teal-600 underline"
          >
            Learn about truck types and capacity →
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            House Shifting Within Tamil Nadu & South India
          </h2>

          <p className="mt-5 text-lg font-semibold leading-8 text-slate-300">
            LOADZY supports transport requirements for local and longer-distance
            household movements. The suitable vehicle depends on the actual
            shipment, route, pickup date and truck availability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/house-shifting"
              className="rounded-xl bg-teal-500 px-6 py-3 font-bold"
            >
              House Shifting Services →
            </Link>

            <Link
              href="/truck-rates"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold"
            >
              View Truck Rates →
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
              ["How to Choose the Right Truck", "/how-to-choose-the-right-truck"],
              ["Full Load Transport", "/full-load"],
              ["Part Load Transport", "/part-load"],
              ["Packers & Movers", "/packers-movers"],
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
            Planning a House Move?
          </h2>

          <p className="mt-4 text-lg font-semibold leading-8 text-white/90">
            Enter your pickup, delivery and load details to find a suitable
            truck for your house-shifting requirement.
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