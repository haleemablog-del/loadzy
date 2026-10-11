import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avadi Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Avadi for full load, part load, house shifting, packers and movers, commercial goods and industrial transport across Tamil Nadu and South India.",
  keywords: [
    "Avadi truck transport",
    "Avadi lorry transport",
    "Avadi packers and movers",
    "truck booking Avadi",
    "Avadi freight transport",
    "Avadi to Chennai transport",
    "house shifting Avadi",
    "Avadi to Bangalore transport",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/avadi-transport",
  },
  openGraph: {
    title: "Avadi Truck Transport & Packers Movers | LOADZY",
    description:
      "Find truck transport for commercial goods, house shifting and industrial loads from Avadi.",
    url: "https://www.loadzyinfra.in/avadi-transport",
    siteName: "LOADZY",
    type: "website",
  },
};

const services = [
  ["Full Load Transport", "/full-load"],
  ["Part Load Transport", "/part-load"],
  ["House Shifting", "/house-shifting"],
  ["Packers & Movers", "/packers-movers"],
  ["Commercial Transport", "/commercial-transport"],
  ["Industrial Transport", "/industrial-transport"],
  ["Fruits & Vegetables", "/fruits-vegetables"],
  ["Truck Booking", "/load-search"],
];

const routes = [
  ["Avadi → Chennai", "/routes/avadi/chennai"],
  ["Chennai → Avadi", "/routes/chennai/avadi"],
  ["Avadi → Chengalpattu", "/routes/avadi/chengalpattu"],
  ["Chengalpattu → Avadi", "/routes/chengalpattu/avadi"],
  ["Avadi → Kanchipuram", "/routes/avadi/kanchipuram"],
  ["Kanchipuram → Avadi", "/routes/kanchipuram/avadi"],
  ["Avadi → Tiruvallur", "/routes/avadi/tiruvallur"],
  ["Tiruvallur → Avadi", "/routes/tiruvallur/avadi"],
  ["Avadi → Vellore", "/routes/avadi/vellore"],
  ["Vellore → Avadi", "/routes/vellore/avadi"],
  ["Avadi → Ranipet", "/routes/avadi/ranipet"],
  ["Ranipet → Avadi", "/routes/ranipet/avadi"],
  ["Avadi → Bangalore", "/routes/avadi/bangalore"],
  ["Bangalore → Avadi", "/routes/bangalore/avadi"],
  ["Avadi → Hosur", "/routes/avadi/hosur"],
  ["Hosur → Avadi", "/routes/hosur/avadi"],
  ["Avadi → Coimbatore", "/routes/avadi/coimbatore"],
  ["Coimbatore → Avadi", "/routes/coimbatore/avadi"],
  ["Avadi → Salem", "/routes/avadi/salem"],
  ["Salem → Avadi", "/routes/salem/avadi"],
  ["Avadi → Madurai", "/routes/avadi/madurai"],
  ["Madurai → Avadi", "/routes/madurai/avadi"],
  ["Avadi → Tiruchirappalli", "/routes/avadi/tiruchirappalli"],
  ["Tiruchirappalli → Avadi", "/routes/tiruchirappalli/avadi"],
  ["Avadi → Tiruppur", "/routes/avadi/tiruppur"],
  ["Tiruppur → Avadi", "/routes/tiruppur/avadi"],
  ["Avadi → Tirunelveli", "/routes/avadi/tirunelveli"],
  ["Tirunelveli → Avadi", "/routes/tirunelveli/avadi"],
  ["Avadi → Hyderabad", "/routes/avadi/hyderabad"],
  ["Hyderabad → Avadi", "/routes/hyderabad/avadi"],
  ["Avadi → Vijayawada", "/routes/avadi/vijayawada"],
  ["Vijayawada → Avadi", "/routes/vijayawada/avadi"],
  ["Avadi → Tirupati", "/routes/avadi/tirupati"],
  ["Tirupati → Avadi", "/routes/tirupati/avadi"],
  ["Avadi → Kochi", "/routes/avadi/kochi"],
  ["Kochi → Avadi", "/routes/kochi/avadi"],
];

const majorCities = [
  ["Chennai", "/chennai-transport"],
  ["Bangalore", "/bangalore-transport"],
  ["Coimbatore", "/coimbatore-transport"],
  ["Madurai", "/madurai-transport"],
  ["Salem", "/salem-transport"],
  ["Tiruchirappalli", "/tiruchirappalli-transport"],
  ["Vellore", "/vellore-transport"],
  ["Hosur", "/hosur-transport"],
  ["Hyderabad", "/hyderabad-transport"],
  ["Vijayawada", "/vijayawada-transport"],
  ["Tirupati", "/tirupati-transport"],
  ["Kochi", "/kochi-transport"],
];

const nearbyPlaces = [
  ["Chennai", "/chennai-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Vellore", "/vellore-transport"],
  ["Hosur", "/hosur-transport"],
];

const faqs = [
  {
    q: "Can I book a truck in Avadi?",
    a: "You can submit your pickup, delivery, cargo and vehicle requirements through LOADZY to explore suitable transport options.",
  },
  {
    q: "Does LOADZY support house shifting in Avadi?",
    a: "LOADZY supports house-shifting and packers-and-movers transport requirements depending on your route and vehicle needs.",
  },
  {
    q: "Can I book full load and part load transport?",
    a: "You can submit full load or part load requirements and explore suitable transport options for your goods.",
  },
  {
    q: "Can I book transport between Avadi and Chennai?",
    a: "You can submit transport enquiries for Avadi–Chennai and Chennai–Avadi. Availability depends on your requirements.",
  },
  {
    q: "How can I find a truck in Avadi?",
    a: "Select Find My Truck and provide your pickup, delivery, load and vehicle details to submit your transport requirements.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.loadzyinfra.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Avadi Truck Transport",
          item: "https://www.loadzyinfra.in/avadi-transport",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Avadi Truck Transport Services",
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in/",
      },
      areaServed: {
        "@type": "Place",
        name: "Avadi, Chennai, Tamil Nadu, India",
      },
      serviceType: [
        "Truck Transport",
        "Full Load Transport",
        "Part Load Transport",
        "House Shifting",
        "Packers and Movers",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function AvadiTransportPage() {
  return (
    <main className="bg-white text-[#062B55]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="bg-[#10182D] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#08A99F]">
            LOADZY AVADI
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Avadi Truck Transport & Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Find transport options from Avadi for house shifting,
            commercial goods, industrial cargo, full load and part load
            requirements across Tamil Nadu and South India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/load-search"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-slate-900"
            >
              Find My Truck →
            </Link>

            <Link
              href="/truck-guide"
              className="rounded-xl border border-white/30 px-7 py-4 font-black"
            >
              Truck Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Truck Transport Services in Avadi
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Avadi is an important commercial and residential hub in the
            Chennai metropolitan region. Businesses and households may need
            transport for furniture, building materials, machinery, packaged
            products, business supplies and household belongings. LOADZY helps
            customers submit their transport requirements and explore suitable
            vehicle options.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-black shadow-sm hover:border-[#08A99F] hover:bg-teal-50"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            About Avadi – Business & Goods Transport
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Avadi connects residential neighbourhoods, commercial areas
            and businesses across the Chennai region. Its road connections
            support regional goods movement, business deliveries and household
            shifting requirements.
          </p>

          <p className="mt-4 text-lg font-bold leading-8 text-slate-600">
            Whether you need to move furniture, business supplies, industrial
            equipment or a larger shipment, enter your pickup and delivery
            details through LOADZY to explore transport options for your
            requirements.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Major Cities for Transport from Avadi
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore major commercial destinations for goods transport,
            truck booking and freight enquiries from Avadi.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {majorCities.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-black shadow-sm hover:border-[#08A99F]"
              >
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Avadi Major Cities & Reverse Truck Routes
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore transport routes in both directions between Avadi
            and major destinations. Each route link should be published only
            after confirming that its destination page exists.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-black shadow-sm hover:border-[#08A99F]"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Nearby Places for Truck Transport
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore transport pages for cities and towns around Avadi
            and across Tamil Nadu. Availability depends on your route and
            transport requirements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-black shadow-sm hover:border-[#08A99F]"
              >
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Why Choose LOADZY for Avadi Transport?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Full load and part load options",
              "Multiple truck types",
              "House shifting support",
              "Commercial goods transport",
              "Industrial cargo requirements",
              "Route-based transport enquiries",
              "Freight options based on requirements",
              "Pickup and delivery planning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-bold shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Avadi Truck Transport FAQs
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer text-lg font-black">
                  {faq.q}
                </summary>

                <p className="mt-4 font-bold leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062B55] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-black md:text-4xl">
          Need a Truck in Avadi?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-white/90">
          Enter your pickup, delivery and load details to explore transport
          options for your requirements.
        </p>

        <Link
          href="/load-search"
          className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-black text-slate-900"
        >
          Find My Truck →
        </Link>
      </section>
    </main>
  );
}
