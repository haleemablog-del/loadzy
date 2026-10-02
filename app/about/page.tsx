import Link from "next/link";

const values = [
  {
    icon: "🚚",
    title: "Suitable Transport",
    text: "LOADZY helps customers identify suitable truck options for different transport requirements.",
  },
  {
    icon: "🔗",
    title: "Better Connections",
    text: "We help connect load owners and truck owners through a simpler transport workflow.",
  },
  {
    icon: "📍",
    title: "Route Focused",
    text: "Customers can provide pickup and delivery locations so transport can be matched to the requirement.",
  },
  {
    icon: "💬",
    title: "Easy Enquiry",
    text: "Customers can contact LOADZY through the website, phone and WhatsApp.",
  },
];

const services = [
  "Truck Transport",
  "Household Shifting",
  "Packers & Movers",
  "Full Load Transport",
  "Part Load Transport",
  "Industrial Transport",
  "Fruits & Vegetables",
  "Commercial Transport",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <div className="font-bold tracking-widest text-[#12E6D3]">
            ABOUT LOADZY
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Making transport simpler for load owners and truck owners
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            LOADZY is a logistics platform designed to help customers find
            suitable truck transport and help truck owners discover available
            load opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#book-form"
              className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
            >
              Get Your Transport Price →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-blue-300 bg-blue-900 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="font-bold text-[#08c9bd]">
              WHO WE ARE
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Your load. Our responsibility.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              LOADZY brings together the customer side of transport and the
              truck-owner side in one simple workflow. Customers can submit
              their transport requirements, while truck owners can look for
              suitable load opportunities.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              The platform is built around route details, load requirements,
              truck types and pickup dates so that transport requests can be
              handled in a structured way.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <div className="text-6xl">🚚</div>

            <h3 className="mt-6 text-3xl font-black text-blue-950">
              Move. Connect. Deliver.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              From booking a truck to finding loads and tracking a shipment,
              LOADZY brings key transport actions together in one place.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              WHAT LOADZY DOES
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Built around real transport requirements
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Customers can use LOADZY for different types of transport needs,
              while truck owners can use the platform to discover available
              load opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-lg"
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

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              OUR TRANSPORT SERVICES
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              One platform for different transport needs
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service}
                href="/services"
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-bold text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-md"
              >
                🚚 {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            HOW LOADZY WORKS
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            A simple transport journey
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">1️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Submit Requirement
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Enter your route, load and truck details.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">2️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Find a Match
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                LOADZY checks suitable available transport.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">3️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Confirm
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Continue with the suitable transport option.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">4️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Track
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Track shipment progress through the tracking page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* South India */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="font-bold text-[#12E6D3]">
            OUR CURRENT FOCUS
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            South India
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-100">
            LOADZY is currently focusing on building transport connectivity
            across South India, while the platform is designed to support
            broader routes as the network grows.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold">
            {[
              "Tamil Nadu",
              "Karnataka",
              "Kerala",
              "Andhra Pradesh",
              "Telangana",
            ].map((state) => (
              <span
                key={state}
                className="rounded-full border border-blue-400/40 bg-blue-900 px-5 py-2"
              >
                📍 {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-50 p-10 text-center shadow-sm">
          <div className="font-bold text-[#08c9bd]">
            READY TO MOVE?
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950 md:text-5xl">
            Tell LOADZY what you need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Submit your transport requirement and get connected with LOADZY.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#book-form"
              className="rounded-xl bg-[#FFD21C] px-8 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
            >
              Get Your Transport Price →
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-teal-500 px-8 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
            >
              Contact LOADZY
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}