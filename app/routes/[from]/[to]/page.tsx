import type { Metadata } from "next";

type RoutePageProps = {
  params: Promise<{
    from: string;
    to: string;
  }>;
};

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { from, to } = await params;

  const fromCity = formatCity(from);
  const toCity = formatCity(to);
return {
  title: `${fromCity} to ${toCity} Truck Transport | LOADZY`,
  description: `Book a truck from ${fromCity} to ${toCity} with LOADZY. Find transport for full loads, part loads, household shifting and commercial goods.`,

  alternates: {
    canonical: `https://www.loadzyinfra.in/routes/${from}/${to}`,
  },

  openGraph: {
    title: `${fromCity} to ${toCity} Truck Transport | LOADZY`,
    description: `Book a truck from ${fromCity} to ${toCity} with LOADZY for full loads, part loads, household shifting and commercial transport.`,
    url: `https://www.loadzyinfra.in/routes/${from}/${to}`,
    siteName: "LOADZY",
    type: "website",
  },
};
}

export default async function RoutePage({
  params,
}: RoutePageProps) {
  const { from, to } = await params;

  const fromCity = formatCity(from);
  const toCity = formatCity(to);

  const routeName = `${fromCity} → ${toCity}`;
    const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${fromCity} to ${toCity} Truck Transport | LOADZY`,
    description: `Book a truck from ${fromCity} to ${toCity} with LOADZY for full loads, part loads, house shifting and commercial goods.`,
    url: `https://www.loadzyinfra.in/routes/${from}/${to}`,
    about: {
      "@type": "Service",
      name: `${fromCity} to ${toCity} Truck Transport`,
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in",
      },
      areaServed: [
        {
          "@type": "Place",
          name: fromCity,
        },
        {
          "@type": "Place",
          name: toCity,
        },
      ],
    },
  };

  const trucks = [
    "7 FT",
    "10 FT",
    "14 FT",
    "17 FT / 20 FT",
  ];

  const services = [
    "Full Load",
    "Part Load",
    "House Shifting",
    "Packers & Movers",
  ];

  const benefits = [
    "On-Time Delivery",
    "Safe Delivery",
    "Affordable Freight Price",
    "Return Load Available",
  ];

  const faqs = [
    {
      question: `How can I book a truck from ${fromCity} to ${toCity}?`,
      answer: `You can submit your pickup, delivery, load type and truck requirement through LOADZY. Our transport booking system helps connect your requirement with a suitable truck.`,
    },
    {
      question: `What types of loads can I transport from ${fromCity} to ${toCity}?`,
      answer: `LOADZY supports different transport requirements including household goods, commercial goods, part loads and full loads.`,
    },
    {
      question: `Can I use LOADZY for house shifting?`,
      answer: `Yes. LOADZY can be used for household shifting and transport requirements between ${fromCity} and ${toCity}.`,
    },
    {
      question: `How do I find the right truck for my load?`,
      answer: `Use the Find My Truck option and provide your pickup location, delivery location, load type and truck requirement.`,
    },
  ];

  const relatedRoutes = [
    {
      from: fromCity,
      to: "Hyderabad",
    },
    {
      from: fromCity,
      to: "Coimbatore",
    },
    {
      from: toCity,
      to: fromCity,
    },
    {
      from: toCity,
      to: "Kochi",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-[#062c54] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <div className="font-black tracking-widest text-[#1ee1d3]">
            LOADZY TRANSPORT ROUTE
          </div>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            {fromCity} → {toCity} Truck Transport
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Book a truck from {fromCity} to {toCity} with LOADZY.
            Find transport solutions for part loads, full loads,
            household shifting and commercial goods.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/#book"
              className="rounded-xl bg-[#1ee1d3] px-7 py-4 font-black text-[#06264a] transition hover:scale-105"
            >
              Get Transport Price →
            </a>

            <a
              href="/load-search"
              className="rounded-xl border border-white px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#06264a]"
            >
              Find Available Loads →
            </a>

          </div>

        </div>
      </section>

      {/* ROUTE OVERVIEW */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">

            <div className="font-black tracking-widest text-[#08a99f]">
              ROUTE OVERVIEW
            </div>

            <h2 className="mt-3 text-3xl font-black text-[#09264b] md:text-4xl">
              Transport from {fromCity} to {toCity}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Looking for reliable truck transport from {fromCity} to{" "}
              {toCity}? LOADZY connects customers with transport
              solutions for different load requirements.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you are moving household goods, transporting
              commercial products, sending a part load or booking
              a full truck, you can submit your requirement through
              LOADZY.
            </p>

          </div>

        </div>
      </section>

      {/* TRUCK OPTIONS */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="font-black tracking-widest text-[#08a99f]">
              TRUCK OPTIONS
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#09264b]">
              Choose the right truck for your load
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Different truck sizes can be suitable for different
              transport requirements.
            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {trucks.map((truck) => (
              <div
                key={truck}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">🚚</div>

                <h3 className="mt-3 font-black text-[#09264b]">
                  {truck} Truck
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Suitable for different load and transport
                  requirements.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="font-black tracking-widest text-[#08a99f]">
              LOADZY SERVICES
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#09264b]">
              Transport services available
            </h2>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">🚚</div>

                <h3 className="mt-3 font-black text-[#09264b]">
                  {service}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Transport solutions through LOADZY for your
                  route requirement.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="bg-[#062c54] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="font-black tracking-widest text-[#1ee1d3]">
              WHY LOADZY
            </div>

            <h2 className="mt-3 text-4xl font-black">
              Transport made simple
            </h2>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="text-2xl text-[#1ee1d3]">
                  ✓
                </div>

                <h3 className="mt-3 font-black">
                  {benefit}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FIND MY TRUCK */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">

          <div className="font-black tracking-widest text-[#08a99f]">
            FIND MY TRUCK
          </div>

          <h2 className="mt-3 text-4xl font-black text-[#09264b]">
            Need a truck for {routeName}?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Tell LOADZY your pickup location, delivery location,
            load type and truck requirement. We can help connect
            your transport requirement with a suitable truck.
          </p>

          <a
            href="/#book"
            className="mt-8 inline-block rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a] transition hover:scale-105"
          >
            Find My Truck →
          </a>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <div className="font-black tracking-widest text-[#08a99f]">
              FAQ
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#09264b]">
              {fromCity} to {toCity} Transport FAQs
            </h2>

          </div>

          <div className="mt-10 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <summary className="cursor-pointer list-none font-black text-[#09264b]">
                  {faq.question}
                  <span className="float-right text-[#08a99f]">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>

      {/* RELATED ROUTES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="font-black tracking-widest text-[#08a99f]">
              RELATED ROUTES
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#09264b]">
              Explore more LOADZY routes
            </h2>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {relatedRoutes.map((route) => {
              const fromSlug = route.from
                .toLowerCase()
                .replace(/\s+/g, "-");

              const toSlug = route.to
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <a
                  key={`${fromSlug}-${toSlug}`}
                  href={`/routes/${fromSlug}/${toSlug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-[#09264b] shadow-sm transition hover:-translate-y-1 hover:border-[#1ee1d3] hover:shadow-md"
                >
                  🚚 {route.from} → {route.to}

                  <span className="mt-2 block text-sm text-[#08a99f]">
                    View Route →
                  </span>
                </a>
              );
            })}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#062c54] px-6 py-16 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Book a Truck from {fromCity} to {toCity}
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Submit your transport requirement and get started
            with LOADZY.
          </p>

          <a
            href="/#book"
            className="mt-8 inline-block rounded-xl bg-[#1ee1d3] px-8 py-4 font-black text-[#06264a] transition hover:scale-105"
          >
            Book a Truck →
          </a>

        </div>

      </section>

    </main>
  );
}