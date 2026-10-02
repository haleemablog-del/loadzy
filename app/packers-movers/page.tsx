import Link from "next/link";

const services = [
  {
    icon: "🏠",
    title: "Home Shifting",
    text: "Transport support for moving household goods from one home to another.",
  },
  {
    icon: "🏢",
    title: "Office Shifting",
    text: "Move office furniture, equipment, cartons and business materials between locations.",
  },
  {
    icon: "📦",
    title: "Local Shifting",
    text: "Suitable truck options for shifting within the same city or nearby areas.",
  },
  {
    icon: "🛣️",
    title: "Intercity Shifting",
    text: "Transport support for moving your household or office between cities.",
  },
];

const faqs = [
  {
    q: "Can LOADZY help with house shifting?",
    a: "Yes. LOADZY provides truck transport support for household shifting requirements.",
  },
  {
    q: "Can I use LOADZY for office shifting?",
    a: "Yes. You can submit your office shifting transport requirement and choose a suitable truck type.",
  },
  {
    q: "How do I get a transport price?",
    a: "Enter your pickup, delivery, load type, truck type and pickup date in the booking form.",
  },
  {
    q: "Which locations does LOADZY serve?",
    a: "LOADZY is focused on South India and can also support other routes where suitable transport is available.",
  },
];

export default function PackersMoversPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="font-bold tracking-widest text-[#12E6D3]">
                PACKERS & MOVERS TRANSPORT
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Move your home or office with LOADZY
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Find suitable truck transport for household shifting, office
                shifting, local moves and intercity moves.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                 href="/contact?service=Packers%20%26%20Movers"
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
              <div className="text-6xl">📦🏠🚚</div>

              <h2 className="mt-6 text-3xl font-black">
                One simple transport request
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Tell LOADZY where you are moving from, where you are moving to,
                what you are carrying and which truck you need.
              </p>

              <div className="mt-6 rounded-2xl bg-white p-5 text-blue-950">
                <div className="font-black">Need a truck for shifting?</div>

                <p className="mt-2 text-sm text-slate-600">
                  Submit your details and get connected with the transport team.
                </p>

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

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              PACKERS & MOVERS SERVICES
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Transport for every type of move
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Choose the type of move you are planning and tell LOADZY your
              transport requirement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/#book-form"
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:bg-white hover:shadow-lg"
              >
                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-5 text-xl font-black text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>

                <div className="mt-5 font-black text-teal-600">
                  Get a Quote →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              WHY LOADZY
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Make your move easier
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🚚</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Multiple Truck Sizes
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Select a truck suitable for the size and type of your move.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">📍</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Route-Based Booking
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Submit your pickup and delivery locations to start your
                transport request.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">💬</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Easy Enquiry
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Contact LOADZY through the website, phone or WhatsApp.
              </p>
            </div>
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
            From enquiry to transport
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">1️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Submit your requirement
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Tell us your route, load type, truck type and pickup date.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">2️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Get transport assistance
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                LOADZY checks the requirement and available transport options.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">3️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Move your goods
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Confirm the suitable transport and continue your move.
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
              Packers & Movers Questions
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

      {/* Final CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="font-bold text-[#12E6D3]">
            READY TO MOVE?
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Get your Packers & Movers transport price
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Submit your requirement and LOADZY will help you with the transport
            process.
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