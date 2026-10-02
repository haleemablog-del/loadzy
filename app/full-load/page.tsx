import Link from "next/link";

const benefits = [
  {
    icon: "🚚",
    title: "Dedicated Truck",
    text: "A dedicated vehicle for your full-load transport requirement.",
  },
  {
    icon: "📍",
    title: "Route-Based Booking",
    text: "Share your pickup and delivery locations to request transport.",
  },
  {
    icon: "💰",
    title: "Transport Price",
    text: "Get a transport price based on route, truck type and requirements.",
  },
  {
    icon: "📦",
    title: "Different Load Types",
    text: "Suitable for commercial, household and industrial shipments.",
  },
];

export default function FullLoadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="font-bold tracking-widest text-[#12E6D3]">
                FULL LOAD TRANSPORT
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Dedicated truck transport for your full load
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Move large household, commercial and industrial shipments with
                a dedicated truck through LOADZY.
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
              <div className="text-6xl">🚚📦</div>

              <h2 className="mt-6 text-3xl font-black">
                One truck. One shipment.
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Tell us your route, load type, truck requirement and pickup
                date to start your transport request.
              </p>

              <a
               href="/contact?service=Full%20Load%20Transport"
                className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-black text-blue-950"
              >
                Book a Truck →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              FULL LOAD BENEFITS
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Transport built around your shipment
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Share your requirement and LOADZY will help with a suitable
              transport option.
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

      {/* Suitable loads */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            SUITABLE FOR
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            Full-load transport requirements
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Household Goods",
              "Furniture",
              "Commercial Goods",
              "Industrial Materials",
              "Machinery & Equipment",
              "Business Shipments",
            ].map((item) => (
              <Link
                key={item}
                href="/#book-form"
                className="rounded-2xl border bg-white p-6 font-bold text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-md"
              >
                📦 {item}
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
            Book your full-load transport
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">1️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Enter your route
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Tell us your pickup and delivery locations.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">2️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Select truck
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Choose a suitable truck type for your shipment.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">3️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Get connected
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Submit your requirement and LOADZY will contact you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="font-bold text-[#12E6D3]">
            NEED A FULL LOAD TRUCK?
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Get your transport price
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Submit your route and load details to start your transport enquiry.
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