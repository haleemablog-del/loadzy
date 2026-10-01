import Link from "next/link";

const benefits = [
  {
    icon: "🏭",
    title: "Industrial Goods",
    text: "Transport support for machinery, equipment, materials and other industrial shipments.",
  },
  {
    icon: "🚚",
    title: "Suitable Truck Options",
    text: "Choose from different truck types based on your shipment requirements.",
  },
  {
    icon: "📍",
    title: "Route-Based Transport",
    text: "Share your pickup and delivery locations to request suitable transport.",
  },
  {
    icon: "💰",
    title: "Get a Transport Price",
    text: "Submit your requirements and get connected with LOADZY for pricing.",
  },
];

const loadTypes = [
  "Machinery",
  "Industrial Equipment",
  "Steel & Materials",
  "Factory Goods",
  "Engineering Goods",
  "Commercial Materials",
];

const faqs = [
  {
    q: "What industrial goods can LOADZY transport?",
    a: "LOADZY can support transport requirements for machinery, equipment, materials, engineering goods and other commercial or industrial shipments depending on vehicle availability.",
  },
  {
    q: "How do I request industrial transport?",
    a: "Enter your customer details, pickup location, delivery location, load type, truck type and pickup date in the LOADZY booking form.",
  },
  {
    q: "Can LOADZY arrange different truck sizes?",
    a: "Yes. LOADZY provides multiple truck options for different shipment requirements, subject to availability.",
  },
  {
    q: "Does LOADZY support South India routes?",
    a: "LOADZY is currently focusing on South India and supports suitable routes where transport availability exists.",
  },
];

export default function IndustrialTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="font-bold tracking-widest text-[#12E6D3]">
                INDUSTRIAL TRANSPORT
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Move industrial goods with suitable transport
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Transport support for machinery, equipment, engineering goods,
                materials and industrial shipments with LOADZY.
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
              <div className="text-6xl">🏭🚚📦</div>

              <h2 className="mt-6 text-3xl font-black">
                Transport for your business
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Tell us what needs to move, where it is going and which truck
                you require. LOADZY will help with the transport request.
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
              INDUSTRIAL TRANSPORT BENEFITS
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Transport built around your shipment
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              LOADZY helps connect industrial transport requirements with
              suitable truck options.
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

      {/* Load types */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            INDUSTRIAL LOAD TYPES
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            Transport for different industrial goods
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Select a requirement below to start your transport enquiry.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loadTypes.map((item) => (
              <Link
                key={item}
                href="/#book-form"
                className="rounded-2xl border border-slate-200 bg-white p-6 font-bold text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-md"
              >
                🏭 {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            HOW IT WORKS
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            Start your industrial transport enquiry
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">1️⃣</div>

              <h3 className="mt-4 text-xl font-black text-blue-950">
                Enter shipment details
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Tell us your load, route, truck type and pickup date.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">2️⃣</div>

              <h3 className="mt-4 text-xl font-black text-blue-950">
                Check transport options
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                LOADZY checks suitable transport based on the requirement and
                available loads.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">3️⃣</div>

              <h3 className="mt-4 text-xl font-black text-blue-950">
                Confirm your transport
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Continue with the suitable transport option for your shipment.
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
              Industrial Transport Questions
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
            NEED INDUSTRIAL TRANSPORT?
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Get your transport price
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Share your route and shipment details with LOADZY to start your
            transport enquiry.
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