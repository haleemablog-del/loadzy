import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck Rates & Transport Charges in India | LOADZY",
  description:
    "Check truck transport rates, freight charges and truck booking options across India. Get suitable trucks for house shifting, commercial loads, part loads and full loads with LOADZY.",
  keywords: [
    "truck rates in India",
    "truck transport charges",
    "transport charges in India",
    "truck booking price",
    "lorry rate in India",
    "house shifting truck charges",
    "LOADZY truck booking",
  ],
};

const truckTypes = [
  {
    name: "Tata Ace / Mini Truck",
    use: "Small loads, local shifting and lightweight goods",
  },
  {
    name: "7 FT Truck",
    use: "Household goods, small commercial loads and city transport",
  },
  {
    name: "10 FT Truck",
    use: "Medium household and commercial loads",
  },
  {
    name: "14 FT Truck",
    use: "Larger household shifting and commercial goods",
  },
  {
    name: "17 FT Truck",
    use: "Bulkier commercial and industrial loads",
  },
  {
    name: "20–24 FT Truck",
    use: "Large commercial and heavy-volume transportation",
  },
];

const factors = [
  "Pickup and delivery locations",
  "Distance between pickup and delivery",
  "Truck size and load capacity",
  "Type and volume of goods",
  "Pickup date and truck availability",
  "One-way or return-load requirements",
];

const routes = [
  "Chennai → Bangalore",
  "Vellore → Bangalore",
  "Tirupattur → Chennai",
  "Vaniyambadi → Chennai",
  "Coimbatore → Bangalore",
  "Salem → Bangalore",
  "Hosur → Chennai",
];

export default function TruckRatesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center">
            <img
              src="/loadzy-logo.png"
              alt="LOADZY"
              className="h-12 w-auto object-contain"
            />
          </a>

          <a
            href="/#book"
            className="rounded-xl bg-teal-500 px-5 py-3 font-bold text-white shadow-md transition hover:bg-teal-600"
          >
            Book a Truck
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="font-bold tracking-wide text-teal-300">
            LOADZY TRUCK RATES
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Truck Rates & Transport Charges in India
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Looking for a truck for house shifting, commercial goods or a
            business load? LOADZY helps you find suitable truck options and
            request a transport quote based on your actual route and load.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/#book"
              className="rounded-xl bg-teal-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-teal-600"
            >
              Get a Truck Quote →
            </a>

            <a
              href="https://wa.me/919019499448"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-bold text-white hover:bg-white/20"
            >
              WhatsApp LOADZY
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="font-bold text-teal-600">
                TRANSPORT PRICING
              </div>

              <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
                How much does a truck cost?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Truck transport charges are not the same for every journey.
                The final freight depends on the route, distance, truck type,
                load requirements and availability.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Instead of relying on one fixed price, LOADZY helps load owners
                request a suitable truck for their specific transportation
                requirement.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-black text-blue-950">
                What affects truck rates?
              </h3>

              <ul className="mt-6 space-y-4">
                {factors.map((factor) => (
                  <li key={factor} className="flex gap-3 text-slate-700">
                    <span className="font-bold text-teal-500">✓</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Types */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="font-bold text-teal-600">TRUCK TYPES</div>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Choose the right truck for your load
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              Different loads require different truck sizes. Selecting the
              right vehicle can help you avoid paying for unnecessary capacity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {truckTypes.map((truck) => (
              <div
                key={truck.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">🚚</div>

                <h3 className="mt-4 text-xl font-black text-blue-950">
                  {truck.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{truck.use}</p>

                <a
                  href="/#book"
                  className="mt-5 inline-block font-bold text-teal-600 hover:text-teal-700"
                >
                  Check truck options →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="font-bold text-teal-600">POPULAR ROUTES</div>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Truck transportation routes
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              LOADZY is designed to help connect load owners with suitable
              trucks for routes across cities and states.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <a
                key={route}
                href="/#book"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-blue-950 shadow-sm transition hover:border-teal-400 hover:text-teal-600"
              >
                🚚 {route}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="font-bold text-teal-300">LOADZY SERVICES</div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Transport solutions for different loads
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "House Shifting",
              "Packers & Movers",
              "Commercial Loads",
              "Part Load",
              "Full Load",
              "Furniture Transport",
              "Industrial Loads",
              "Business Deliveries",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-2xl">📦</div>
                <div className="mt-3 font-bold">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="font-bold text-teal-600">FAQ</div>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Frequently asked questions about truck rates
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl border border-slate-200 p-6">
              <summary className="cursor-pointer font-bold text-blue-950">
                How are truck transport charges calculated?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Transport charges can depend on distance, truck size, load
                requirements, route conditions, pickup date and vehicle
                availability.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 p-6">
              <summary className="cursor-pointer font-bold text-blue-950">
                Does house shifting have a fixed truck price?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                No. House shifting requirements can differ considerably.
                Truck size, route, quantity of goods and other requirements can
                affect the final freight.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 p-6">
              <summary className="cursor-pointer font-bold text-blue-950">
                Can I book a truck for an interstate route?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                LOADZY is designed to connect load owners with truck options
                for transportation across cities and states.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 p-6">
              <summary className="cursor-pointer font-bold text-blue-950">
                How can I request a truck through LOADZY?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Enter your customer details, pickup location, delivery
                location, load type, truck type and pickup date on the booking
                form, then submit your request.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a truck for your next load?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-teal-50">
            Tell LOADZY where your load needs to go and what type of truck you
            need.
          </p>

          <a
            href="/#book"
            className="mt-7 inline-block rounded-xl bg-white px-8 py-4 font-black text-blue-950 shadow-lg hover:bg-slate-100"
          >
            Book Your Truck →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-400">
        <p>
          © 2026 LOADZY. Truck booking and transport solutions across India.
        </p>

        <p className="mt-2">
          <a
            href="tel:+919019499448"
            className="font-bold text-white hover:text-teal-400"
          >
            📞 90194 99448
          </a>
        </p>
      </footer>
    </main>
  );
}