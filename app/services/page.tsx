import Link from "next/link";

const services = [
  {
    icon: "🚚",
    title: "Full Load Transport",
    description:
      "Dedicated truck transport for large commercial, industrial and household shipments.",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Move smaller shipments with suitable transport when part-load availability exists.",
  },
  {
    icon: "🏠",
    title: "Household Shifting",
    description:
      "Transport support for moving household goods between cities and locations.",
  },
  {
    icon: "📦",
    title: "Packers & Movers",
    description:
      "Truck transport support for residential and commercial shifting requirements.",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Transport solutions for machinery, equipment, materials and industrial goods.",
  },
  {
    icon: "🥭",
    title: "Fruits & Vegetables",
    description:
      "Truck options for moving agricultural produce and other fresh goods.",
  },
  {
    icon: "🏢",
    title: "Commercial Goods",
    description:
      "Reliable transport options for business goods, cartons and regular shipments.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <div className="font-bold tracking-widest text-[#12E6D3]">
            LOADZY TRANSPORT SERVICES
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Transport solutions for every load
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Book suitable trucks for household shifting, commercial goods,
            industrial loads, part loads and full loads with LOADZY.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#book-form"
              className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
            >
              Get Your Transport Price →
            </Link>

            <Link
              href="/load-search"
              className="rounded-xl border border-blue-300 bg-blue-900 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Find Available Loads
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              OUR SERVICES
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Choose a transport service
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              LOADZY connects your transport requirement with suitable truck
              options across routes and load categories.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#08c9bd] hover:shadow-xl"
              >
                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-5 text-2xl font-black text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                
 <Link
  href={
  {
    "Full Load Transport": "/full-load",
    "Part Load Transport": "/part-load",
    "Household Shifting": "/house-shifting",
    "Packers & Movers": "/packers-movers",
    "Industrial Transport": "/industrial-transport",
    "Fruits & Vegetables": "/fruits-vegetables",
    "Commercial Goods": "/commercial-transport",
  }[service.title] ?? "/#book-form"
}
  className="mt-6 inline-block font-black text-teal-600 transition group-hover:text-teal-700"
>
  {service.title === "Full Load Transport" ||
  service.title === "Part Load Transport" ||
  service.title === "Household Shifting" ||
  service.title === "Packers & Movers" ||
  service.title === "Industrial Transport" ||
  service.title === "Fruits & Vegetables" ||
  service.title === "Commercial Goods"
    ? "View Service →"
    : "Get a Quote →"}
</Link>
              </div>
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
            Simple steps. Faster transport.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">1️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Tell us your requirement
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Enter your pickup, delivery, load type, truck type and pickup
                date.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">2️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Find a suitable truck
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                LOADZY checks available transport and matching requirements.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">3️⃣</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">
                Move your load
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Confirm the transport and move your goods with LOADZY.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-bold text-[#12E6D3]">
            NEED TRANSPORT?
          </div>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Tell LOADZY what you need to move
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Submit your transport requirement and our team will contact you
            about the available truck options.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#book-form"
              className="rounded-xl bg-[#FFD21C] px-8 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
            >
              Get Your Transport Price →
            </Link>

            <a
              href="https://wa.me/919019499448"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-teal-500 px-8 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
            >
              WhatsApp LOADZY
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}