import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tirupattur Truck Transport & Logistics | LOADZY",
  description:
    "Book trucks from Tirupattur for house shifting, packers and movers, part load, full load and commercial goods transport with LOADZY.",

  alternates: {
    canonical: "https://www.loadzyinfra.in/tirupattur-transport",
  },

  openGraph: {
    title: "Tirupattur Truck Transport & Logistics | LOADZY",
    description:
      "Book trucks from Tirupattur for house shifting, packers and movers, part load, full load and commercial goods transport with LOADZY.",
    url: "https://www.loadzyinfra.in/tirupattur-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const routes = [
  {
    name: "Tirupattur → Chennai",
    href: "/routes/tirupattur/chennai",
  },
  {
    name: "Chennai → Tirupattur",
    href: "/routes/chennai/tirupattur",
  },
  {
    name: "Tirupattur → Bangalore",
    href: "/routes/tirupattur/bangalore",
  },
  {
    name: "Bangalore → Tirupattur",
    href: "/routes/bangalore/tirupattur",
  },
];

const services = [
  "Full Load Transport",
  "Part Load Transport",
  "House Shifting",
  "Packers & Movers",
  "Commercial Goods Transport",
  "Industrial Transport",
];

const faqs = [
  {
    question: "Can I book a truck from Tirupattur with LOADZY?",
    answer:
      "Yes. LOADZY provides truck booking support for different load requirements from Tirupattur and other South India locations.",
  },
  {
    question: "Does LOADZY support house shifting from Tirupattur?",
    answer:
      "Yes. LOADZY supports transport requirements for household shifting and packers and movers.",
  },
  {
    question: "Can I book a part load from Tirupattur?",
    answer:
      "Yes. Part load transport is one of the services supported by LOADZY.",
  },
  {
    question: "Which truck types are available?",
    answer:
      "Truck availability can vary according to the route, load type, vehicle requirement and pickup date.",
  },
];

export default function TirupatturTransportPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Tirupattur Truck Transport",
        description:
          "Truck booking and freight transport services from Tirupattur with LOADZY.",
        provider: {
          "@type": "Organization",
          name: "LOADZY",
          url: "https://www.loadzyinfra.in",
        },
        areaServed: {
          "@type": "City",
          name: "Tirupattur",
        },
        serviceType: "Truck Transport",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero */}
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-[0.2em] text-teal-300">
              LOADZY TRANSPORT SERVICES
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Tirupattur Truck Transport & Logistics
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
              Book trucks from Tirupattur for house shifting, packers and
              movers, part load, full load and commercial goods transport with
              LOADZY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/"
                className="rounded-xl bg-teal-500 px-7 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
              >
                Book a Truck →
              </a>

              <a
                href="/routes"
                className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-yellow-300"
              >
                Explore Routes →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-blue-950 md:text-4xl">
            Truck Booking in Tirupattur
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            LOADZY helps customers find transport solutions for different
            types of loads from Tirupattur. Whether you need a truck for
            household shifting, commercial goods, part load or full load
            transport, you can use LOADZY to submit your transport requirement.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our South India transport network is designed to connect customers
            with suitable truck options for their pickup and delivery
            requirements.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-teal-600">
              TRANSPORT SOLUTIONS
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Transport Services from Tirupattur
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-2xl">🚚</div>

                <h3 className="mt-4 text-xl font-black text-blue-950">
                  {service}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Transport support for your pickup, delivery and load
                  requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular routes */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.2em] text-teal-600">
            ROUTES
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Tirupattur Transport Routes
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore dedicated LOADZY route pages for truck transport between
            Tirupattur and major South India destinations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg"
              >
                {route.name}
                <span className="mt-2 block text-sm font-bold text-teal-600">
                  View route →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why LOADZY */}
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-black uppercase tracking-[0.2em] text-teal-300">
                WHY LOADZY
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                A simple way to manage your transport requirement
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                Tell LOADZY where your load needs to go, what you are
                transporting and what type of truck you need. We help connect
                your requirement with available transport options.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "On-Time Delivery",
                "Safe Delivery",
                "Affordable Freight",
                "Return Load Availability",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <div className="text-2xl">✓</div>

                  <h3 className="mt-3 font-black">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-black uppercase tracking-[0.2em] text-teal-600">
            FAQ
          </p>

          <h2 className="mt-3 text-center text-3xl font-black text-blue-950 md:text-4xl">
            Tirupattur Truck Transport FAQs
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-black text-blue-950">
                  {faq.question}
                </summary>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-950 p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a truck from Tirupattur?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Submit your transport requirement and explore truck booking
            options with LOADZY.
          </p>

          <a
            href="/"
            className="mt-7 inline-block rounded-xl bg-teal-500 px-8 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
          >
            Book a Truck with LOADZY →
          </a>
        </div>
      </section>
    </main>
  );
}