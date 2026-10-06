import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interstate Truck Transport Guide | LOADZY",
  description:
    "Learn how interstate truck transport works, what to prepare before booking, how to choose the right truck and how LOADZY supports transport across South India.",
  keywords: [
    "interstate truck transport",
    "interstate truck booking",
    "interstate goods transport",
    "truck transport South India",
    "interstate freight transport",
    "lorry transport",
    "LOADZY",
  ],
  alternates: {
    canonical:
      "https://www.loadzyinfra.in/interstate-truck-transport-guide",
  },
  openGraph: {
    title: "Interstate Truck Transport Guide | LOADZY",
    description:
      "A practical guide to interstate truck transport, truck selection, route planning and freight booking.",
    url: "https://www.loadzyinfra.in/interstate-truck-transport-guide",
    siteName: "LOADZY",
    type: "article",
  },
};

const steps = [
  {
    title: "Plan the Route",
    text: "Confirm the pickup location, delivery location and expected travel route before booking transport.",
  },
  {
    title: "Understand the Load",
    text: "Keep the cargo type, approximate weight, dimensions and loading requirements ready.",
  },
  {
    title: "Choose the Truck",
    text: "Select a truck that is suitable for the load weight, volume, body type and transport requirement.",
  },
  {
    title: "Check Pickup Date",
    text: "Make sure the truck availability and pickup schedule match your required date.",
  },
  {
    title: "Confirm Transport Details",
    text: "Review the route, load details, truck requirement and delivery expectations before confirming.",
  },
  {
    title: "Track the Shipment",
    text: "Keep the transport details available so the shipment can be followed through the delivery process.",
  },
];

const benefits = [
  "Transport goods between different states",
  "Suitable truck selection for different cargo",
  "Full load and part load transport options",
  "House shifting and commercial goods transport",
  "Route-based truck matching",
  "Transport planning based on pickup and delivery requirements",
];

const faqs = [
  {
    question: "What is interstate truck transport?",
    answer:
      "Interstate truck transport means moving goods from one state to another using road transportation.",
  },
  {
    question: "Can LOADZY help with interstate truck booking?",
    answer:
      "LOADZY is designed to help customers find suitable truck transport based on pickup location, delivery location, load requirements and truck type.",
  },
  {
    question: "What information is needed for interstate transport?",
    answer:
      "You should have the pickup location, delivery location, cargo type, approximate weight or volume, preferred truck type and pickup date.",
  },
  {
    question: "Can I use interstate transport for house shifting?",
    answer:
      "Yes. Interstate household shifting can require suitable trucks for furniture, appliances and other household goods.",
  },
  {
    question: "How do I choose the right interstate truck?",
    answer:
      "Choose the truck according to cargo weight, dimensions, volume, body type, loading requirements and route.",
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
          item: "https://www.loadzyinfra.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Interstate Truck Transport Guide",
          item:
            "https://www.loadzyinfra.in/interstate-truck-transport-guide",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Interstate Truck Transport Guide",
      description:
        "Guide to interstate truck transport, route planning and truck selection.",
      author: {
        "@type": "Organization",
        name: "LOADZY",
      },
      publisher: {
        "@type": "Organization",
        name: "LOADZY",
      },
      mainEntityOfPage:
        "https://www.loadzyinfra.in/interstate-truck-transport-guide",
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

export default function InterstateTruckTransportGuidePage() {
  return (
    <main className="bg-white text-[#062B55]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="bg-[#10182D] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            LOADZY TRANSPORT GUIDE
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Interstate Truck Transport Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Learn how interstate truck transport works and how to prepare your
            route, load and truck requirements for movement between states.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-yellow-400 px-6 py-4 font-black text-slate-900"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-6 py-4 font-black"
            >
              Truck Information Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            What Is Interstate Truck Transport?
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Interstate truck transport is the movement of goods by road from
            one state to another. It can be used for commercial cargo,
            household shifting, industrial goods, agricultural products and
            other transport requirements.
          </p>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            The truck should be selected according to the cargo, route,
            capacity and loading requirements. Pickup and delivery details
            should also be confirmed before booking.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            How Interstate Truck Booking Works
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-3xl font-black text-[#08A99F]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-xl font-black">
                  {step.title}
                </h3>

                <p className="mt-3 font-bold leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            What to Prepare Before Interstate Transport
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Pickup state and city",
              "Delivery state and city",
              "Type of goods",
              "Approximate load weight",
              "Cargo dimensions or volume",
              "Required truck type",
              "Pickup date",
              "Loading and unloading requirements",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-bold shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Benefits of Interstate Truck Transport
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl bg-white p-5 font-bold shadow-sm ring-1 ring-slate-200"
              >
                ✓ {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            Related Transport Guides
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              ["Truck Booking Guide", "/truck-booking-guide"],
              [
                "Commercial Goods Transport Guide",
                "/commercial-goods-transport-guide",
              ],
              [
                "Industrial Transport Guide",
                "/industrial-transport-guide",
              ],
              [
                "Return Load Transport Guide",
                "/return-load-transport-guide",
              ],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 p-5 font-bold transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Interstate Truck Transport FAQs
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer text-lg font-black">
                  {faq.question}
                </summary>

                <p className="mt-4 font-bold leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062B55] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black">
            Need Interstate Truck Transport?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-white/90">
            Enter your pickup, delivery and load details to find the right
            truck for your interstate transport requirement.
          </p>

          <Link
            href="/load-search"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-black text-slate-900"
          >
            Find My Truck →
          </Link>
        </div>
      </section>
    </main>
  );
}