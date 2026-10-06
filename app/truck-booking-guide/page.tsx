import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Booking Guide | How to Book a Truck | LOADZY",
  description:
    "Learn how to book a truck for goods transport, house shifting, commercial loads and freight transportation with LOADZY.",
  keywords: [
    "truck booking guide",
    "how to book a truck",
    "truck booking",
    "truck transport booking",
    "lorry booking",
    "goods transport booking",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/truck-booking-guide",
  },
  openGraph: {
    title: "Truck Booking Guide | LOADZY",
    description:
      "Learn how to choose and book the right truck for your transport requirement.",
    url: "https://www.loadzyinfra.in/truck-booking-guide",
    siteName: "LOADZY",
    type: "article",
  },
};

const faqs = [
  {
    question: "How do I book a truck with LOADZY?",
    answer:
      "Enter your pickup location, delivery location, load type, truck type and pickup date. LOADZY can then help you find suitable transport for your requirement.",
  },
  {
    question: "What information is needed to book a truck?",
    answer:
      "Important details include pickup location, delivery location, load type, approximate load size or weight, preferred truck type and pickup date.",
  },
  {
    question: "Can I book a truck for house shifting?",
    answer:
      "Yes. LOADZY can be used for household shifting, furniture transport and packers and movers requirements.",
  },
  {
    question: "Can I book trucks for commercial goods?",
    answer:
      "Yes. Commercial goods can be transported using a suitable truck based on the cargo type, weight, dimensions and route.",
  },
  {
    question: "How do I choose the right truck?",
    answer:
      "Choose the truck based on your load weight, dimensions, volume, cargo type, loading requirements and route.",
  },
];

export default function TruckBookingGuidePage() {
  return (
    <main className="bg-white text-[#062B55]">
      {/* Hero */}
      <section className="bg-[#10182D] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            LOADZY TRANSPORT GUIDE
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Truck Booking Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Learn how to book the right truck for goods transport, house
            shifting, commercial loads and freight transportation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-yellow-400 px-6 py-4 font-black text-slate-900 transition hover:bg-yellow-300"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Truck Information Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            How to Book a Truck
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Truck booking starts with understanding your pickup location,
            delivery location and cargo requirements. The right truck should
            match the weight, size and type of goods being transported.
          </p>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Before booking, keep your route, load details and preferred pickup
            date ready. This helps you identify a suitable truck for the
            transport requirement.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            Steps to Book a Truck
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Enter Pickup Location",
                text: "Provide the city or area where your goods need to be picked up.",
              },
              {
                number: "02",
                title: "Enter Delivery Location",
                text: "Provide the destination where the goods need to be delivered.",
              },
              {
                number: "03",
                title: "Select Load Type",
                text: "Choose the type of goods or cargo you need to transport.",
              },
              {
                number: "04",
                title: "Choose Truck Type",
                text: "Select a suitable truck based on your load requirements.",
              },
              {
                number: "05",
                title: "Select Pickup Date",
                text: "Choose the date when the truck is required.",
              },
              {
                number: "06",
                title: "Submit Your Requirement",
                text: "Submit the details so suitable transport can be identified.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-3xl font-black text-[#08A99F]">
                  {step.number}
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

      {/* Information needed */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Information You Should Have Before Booking
          </h2>

          <div className="mt-7 space-y-4">
            {[
              "Pickup city or area",
              "Delivery city or area",
              "Type of goods",
              "Approximate load weight",
              "Load dimensions or volume",
              "Required truck type",
              "Preferred pickup date",
              "Special loading or transport requirements",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 font-bold shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose truck */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Choose the Right Truck
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            The right truck depends on the weight, volume, dimensions and type
            of your cargo. Truck availability and route requirements should
            also be considered before booking.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/truck-guide"
              className="rounded-xl bg-[#08A99F] px-6 py-4 font-black text-white"
            >
              View Truck Types & Capacity →
            </Link>

            <Link
              href="/truck-rates"
              className="rounded-xl border border-[#062B55] px-6 py-4 font-black"
            >
              View Truck Rates →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            Truck Booking for Different Requirements
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Link
              href="/house-shifting"
              className="rounded-2xl border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-2xl font-black">
                House Shifting
              </h3>
              <p className="mt-3 font-bold text-slate-600">
                Book suitable trucks for household goods, furniture and
                shifting requirements.
              </p>
            </Link>

            <Link
              href="/commercial-transport"
              className="rounded-2xl border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-2xl font-black">
                Commercial Goods
              </h3>
              <p className="mt-3 font-bold text-slate-600">
                Transport commercial cargo based on load and route
                requirements.
              </p>
            </Link>

            <Link
              href="/full-load"
              className="rounded-2xl border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-2xl font-black">
                Full Load Transport
              </h3>
              <p className="mt-3 font-bold text-slate-600">
                Suitable for shipments that require the available truck
                capacity.
              </p>
            </Link>

            <Link
              href="/part-load"
              className="rounded-2xl border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1"
            >
              <h3 className="text-2xl font-black">
                Part Load Transport
              </h3>
              <p className="mt-3 font-bold text-slate-600">
                Useful when the shipment does not require the full truck
                capacity.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Truck Booking FAQs
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

      {/* CTA */}
      <section className="bg-[#062B55] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black">
            Need a Truck for Your Route?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-white/90">
            Enter your pickup, delivery and load details to find the right
            truck for your transport requirement.
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