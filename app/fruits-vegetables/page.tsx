import Link from "next/link";

const benefits = [
  {
    icon: "🥭",
    title: "Fresh Produce Transport",
    text: "Transport support for fruits, vegetables and other agricultural produce.",
  },
  {
    icon: "🚚",
    title: "Suitable Truck Options",
    text: "Choose a truck type based on your shipment size and transport requirement.",
  },
  {
    icon: "📍",
    title: "Route-Based Transport",
    text: "Share your pickup and delivery locations to start your transport enquiry.",
  },
  {
    icon: "📅",
    title: "Pickup Date",
    text: "Tell us your preferred pickup date so the transport requirement can be matched.",
  },
];

const produceTypes = [
  "Mango",
  "Banana",
  "Onion",
  "Tomato",
  "Coconut",
  "Potato",
  "Vegetables",
  "Fruits",
  "Other Agricultural Produce",
];

const faqs = [
  {
    q: "Can LOADZY transport fruits and vegetables?",
    a: "Yes. LOADZY supports transport requirements for fruits, vegetables and other agricultural produce where suitable transport is available.",
  },
  {
    q: "Which fruits and vegetables can I transport?",
    a: "You can submit requirements for different types of fruits, vegetables and agricultural produce.",
  },
  {
    q: "How do I book transport for produce?",
    a: "Enter your pickup, delivery, load type, truck type and pickup date in the LOADZY booking form.",
  },
  {
    q: "Does LOADZY support South India routes?",
    a: "LOADZY is currently focusing on South India and supports suitable routes where transport availability exists.",
  },
];

export default function FruitsVegetablesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="font-bold tracking-widest text-[#12E6D3]">
                FRUITS & VEGETABLES TRANSPORT
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Move fruits and vegetables with suitable transport
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Find transport options for fruits, vegetables and agricultural
                produce with LOADZY.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#book-form"
                  className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
                >
                  Get Your Transport Price →
                </Link>

                <a
                  href="https://wa.me/919019499448"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-teal-500 px-7 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
                >
                  WhatsApp LOADZY
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
              <div className="text-6xl">🥭🍅🥬🚚</div>

              <h2 className="mt-6 text-3xl font-black">
                Transport for agricultural produce
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Tell us what you are moving, where it needs to go and which
                truck you require. LOADZY will help with the transport request.
              </p>

              <Link
                href="/#book-form"
                className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-black text-blue-950"
              >
                Book Transport →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              PRODUCE TRANSPORT BENEFITS
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Transport support for your produce
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Share your route and shipment requirements to find suitable
              transport options available for your load.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-lg"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-black text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produce types */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            LOAD TYPES
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            Fruits, vegetables and produce
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Choose a produce type to start your transport enquiry.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {produceTypes.map((item) => (
              <Link
                key={item}
                href="/#book-form"
                className="rounded-2xl border border-slate-200 bg-white p-6 font-bold text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-md"
              >
                🍅 {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            HOW IT WORKS
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            Book produce transport in 3 steps
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">1️⃣</div>

              <h3 className="mt-4 text-xl font-black text-blue-950">
                Enter your route
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Tell us where the produce will be picked up and delivered.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">2️⃣</div>

              <h3 className="mt-4 text-xl font-black text-blue-950">
                Tell us your load
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Select your produce type and suitable truck requirement.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">3️⃣</div>

              <h3 className="mt-4 text-xl font-black text-blue-950">
                Get transport assistance
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Submit your requirement and LOADZY will contact you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              FAQ
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Fruits & Vegetables Transport Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-bold text-blue-950">
                  {faq.q}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="font-bold text-[#12E6D3]">
            NEED PRODUCE TRANSPORT?
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Tell LOADZY what you need to move
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Submit your fruit or vegetable transport requirement and get
            connected with LOADZY.
          </p>

          <Link
            href="/#book-form"
            className="mt-8 inline-block rounded-xl bg-[#FFD21C] px-8 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
          >
            Get Your Transport Price →
          </Link>
        </div>
      </section>
    </main>
  );
}