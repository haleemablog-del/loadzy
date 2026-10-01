import Link from "next/link";

const benefits = [
  {
    icon: "🚚",
    title: "Suitable Truck Options",
    text: "Choose from multiple truck sizes based on the volume of your household goods.",
  },
  {
    icon: "📦",
    title: "Shifting Support",
    text: "Tell us your pickup, delivery and shifting requirements and we will help with the transport.",
  },
  {
    icon: "💰",
    title: "Affordable Transport",
    text: "Get a transport price based on your route, truck requirement and pickup date.",
  },
  {
    icon: "📍",
    title: "Route Coverage",
    text: "Transport support across South India and other routes served by LOADZY.",
  },
];

const movingTypes = [
  "1 BHK House Shifting",
  "2 BHK House Shifting",
  "3 BHK House Shifting",
  "Office Shifting",
  "Room Shifting",
  "Local Shifting",
  "Intercity Shifting",
];

export default function HouseShiftingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="font-bold tracking-widest text-[#12E6D3]">
                HOUSE SHIFTING TRANSPORT
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Move your home with the right truck
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Book suitable transport for household shifting, room shifting,
                office shifting and intercity moves with LOADZY.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#book-form"
                  className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
                >
                  Get Your Moving Price →
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
              <div className="text-6xl">🏠🚚📦</div>

              <h2 className="mt-6 text-3xl font-black">
                Simple house shifting
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Share your route and moving requirements. LOADZY will help you
                find a suitable truck for your shipment.
              </p>

              <div className="mt-6 rounded-2xl bg-white p-5 text-blue-950">
                <div className="font-black">Need a truck?</div>
                <div className="mt-2 text-sm text-slate-600">
                  Tell us your pickup, delivery, load and date.
                </div>

                <Link
                  href="/#book-form"
                  className="mt-4 inline-block font-black text-teal-600"
                >
                  Book a Truck →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              WHY USE LOADZY
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Make your move simpler
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              LOADZY helps customers connect their household shifting
              requirement with suitable transport options.
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

      {/* Moving types */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            HOUSE SHIFTING OPTIONS
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            Transport for different moving needs
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {movingTypes.map((type) => (
              <Link
                key={type}
                href="/#book-form"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-md"
              >
                🏠 {type}
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
            Book your shifting transport
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">1️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Enter your route
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Enter your pickup and delivery locations.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">2️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Select your truck
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Choose the truck size that fits your moving requirement.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">3️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Confirm transport
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Submit your requirement and LOADZY will contact you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-bold text-[#12E6D3]">
            READY TO MOVE?
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Get your house shifting transport price
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Submit your moving requirement and let LOADZY help you find a
            suitable transport option.
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