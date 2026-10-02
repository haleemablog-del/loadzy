import Link from "next/link";

const customerFeatures = [
  {
    icon: "🚚",
    title: "Book a Truck",
    text: "Submit your pickup, delivery, load and truck requirements from your phone.",
  },
  {
    icon: "🔎",
    title: "Find My Truck",
    text: "Get help finding suitable transport based on your booking requirement.",
  },
  {
    icon: "📍",
    title: "Track Shipment",
    text: "Use your booking ID to check shipment progress.",
  },
  {
    icon: "💬",
    title: "Easy Support",
    text: "Contact LOADZY directly for transport enquiries and assistance.",
  },
];

const driverFeatures = [
  {
    icon: "📦",
    title: "Find Loads",
    text: "Discover suitable load opportunities for your vehicle and routes.",
  },
  {
    icon: "🛣️",
    title: "Route Opportunities",
    text: "Find transport opportunities based on available routes.",
  },
  {
    icon: "📲",
    title: "Manage Trips",
    text: "Keep your transport work organized from one place.",
  },
  {
    icon: "💰",
    title: "Reduce Empty Trips",
    text: "Look for available loads that can help improve vehicle utilization.",
  },
];

export default function MobileAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="font-bold tracking-[0.2em] text-[#12E6D3]">
              LOADZY MOBILE APP
            </div>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Transport at your fingertips.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Book trucks, find loads, manage transport requirements and stay
              connected with LOADZY from your mobile device.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#customer-app"
                className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
              >
                Customer App →
              </a>

              <a
                href="#driver-app"
                className="rounded-xl border border-blue-300 bg-blue-900 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
              >
                Driver App →
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[2.5rem] border border-blue-300/20 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[2rem] bg-white p-5 text-blue-950">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-2xl">
                  🚚
                </div>

                <div className="mt-5 text-center text-2xl font-black">
                  LOADZY
                </div>

                <div className="mt-2 text-center text-sm text-slate-500">
                  Move. Connect. Deliver.
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl bg-slate-50 p-4 font-bold">
                    📍 Pickup Location
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4 font-bold">
                    📍 Delivery Location
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4 font-bold">
                    🚚 Choose Truck
                  </div>

                  <div className="rounded-xl bg-teal-500 p-4 text-center font-black text-white">
                    Find My Truck →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer App */}
      <section id="customer-app" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              FOR CUSTOMERS
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Everything you need to move your load
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              The LOADZY customer experience is designed to make transport
              enquiries and shipment management easier.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {customerFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-lg"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-5 text-xl font-black text-blue-950">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-50 p-8 text-center">
            <div className="text-3xl">📱</div>

            <h3 className="mt-4 text-2xl font-black text-blue-950">
              Download the LOADZY Customer App
            </h3>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Android and iOS download links will be connected here once the
              official store listings are ready.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <div className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-bold text-slate-500">
                ▶ Android App
              </div>

              <div className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-bold text-slate-500">
                 iOS App
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver App */}
      <section id="driver-app" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              FOR TRUCK OWNERS
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Connect your truck with available loads
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              LOADZY is designed to help truck owners discover suitable load
              opportunities and manage their transport workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {driverFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-lg"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-5 text-xl font-black text-blue-950">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-blue-950 p-10 text-center text-white">
            <div className="font-bold text-[#12E6D3]">
              DRIVE WITH LOADZY
            </div>

            <h3 className="mt-3 text-3xl font-black">
              Ready to join the LOADZY network?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Register your vehicle and transport details through our driver
              registration process.
            </p>

            <Link
              href="/drive-with-loadzy"
              className="mt-7 inline-block rounded-xl bg-[#FFD21C] px-8 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
            >
              Register as Driver →
            </Link>
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="font-bold text-[#08c9bd]">
            WHY USE THE APP
          </div>

          <h2 className="mt-3 text-4xl font-black text-blue-950">
            One connected transport experience
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Faster Enquiries
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Keep important transport details together in one place.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-4xl">🔗</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Better Connections
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Connect customer requirements with available transport
                opportunities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-4xl">📍</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Stay Connected
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Keep track of bookings and transport activity as the system
                grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-bold text-[#12E6D3]">
            READY TO MOVE?
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Start with LOADZY today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Book a truck, find available loads or contact LOADZY for your
            transport requirement.
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