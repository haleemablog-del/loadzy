import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tambaram Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Tambaram for full load, part load, house shifting, packers and movers, commercial goods and industrial transport across Tamil Nadu and South India.",
  keywords: [
    "Tambaram truck transport",
    "Tambaram lorry transport",
    "Tambaram packers and movers",
    "truck booking Tambaram",
    "Tambaram freight transport",
    "Tambaram to Chennai transport",
    "house shifting Tambaram",
    "Tambaram to Bangalore transport",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/tambaram-transport",
  },
  openGraph: {
    title: "Tambaram Truck Transport & Packers Movers | LOADZY",
    description:
      "Find truck transport for commercial goods, house shifting and industrial loads from Tambaram.",
    url: "https://www.loadzyinfra.in/tambaram-transport",
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
  ["Tambaram → Chennai", "/routes/tambaram/chennai"],
  ["Chennai → Tambaram", "/routes/chennai/tambaram"],
  ["Tambaram → Chengalpattu", "/routes/tambaram/chengalpattu"],
  ["Chengalpattu → Tambaram", "/routes/chengalpattu/tambaram"],
  ["Tambaram → Kanchipuram", "/routes/tambaram/kanchipuram"],
  ["Kanchipuram → Tambaram", "/routes/kanchipuram/tambaram"],
  ["Tambaram → Tiruvallur", "/routes/tambaram/tiruvallur"],
  ["Tiruvallur → Tambaram", "/routes/tiruvallur/tambaram"],
  ["Tambaram → Vellore", "/routes/tambaram/vellore"],
  ["Vellore → Tambaram", "/routes/vellore/tambaram"],
  ["Tambaram → Ranipet", "/routes/tambaram/ranipet"],
  ["Ranipet → Tambaram", "/routes/ranipet/tambaram"],
  ["Tambaram → Bangalore", "/routes/tambaram/bangalore"],
  ["Bangalore → Tambaram", "/routes/bangalore/tambaram"],
  ["Tambaram → Hosur", "/routes/tambaram/hosur"],
  ["Hosur → Tambaram", "/routes/hosur/tambaram"],
  ["Tambaram → Coimbatore", "/routes/tambaram/coimbatore"],
  ["Coimbatore → Tambaram", "/routes/coimbatore/tambaram"],
  ["Tambaram → Salem", "/routes/tambaram/salem"],
  ["Salem → Tambaram", "/routes/salem/tambaram"],
  ["Tambaram → Madurai", "/routes/tambaram/madurai"],
  ["Madurai → Tambaram", "/routes/madurai/tambaram"],
  ["Tambaram → Tiruchirappalli", "/routes/tambaram/tiruchirappalli"],
  ["Tiruchirappalli → Tambaram", "/routes/tiruchirappalli/tambaram"],
  ["Tambaram → Tiruppur", "/routes/tambaram/tiruppur"],
  ["Tiruppur → Tambaram", "/routes/tiruppur/tambaram"],
  ["Tambaram → Tirunelveli", "/routes/tambaram/tirunelveli"],
  ["Tirunelveli → Tambaram", "/routes/tirunelveli/tambaram"],
  ["Tambaram → Hyderabad", "/routes/tambaram/hyderabad"],
  ["Hyderabad → Tambaram", "/routes/hyderabad/tambaram"],
  ["Tambaram → Vijayawada", "/routes/tambaram/vijayawada"],
  ["Vijayawada → Tambaram", "/routes/vijayawada/tambaram"],
  ["Tambaram → Tirupati", "/routes/tambaram/tirupati"],
  ["Tirupati → Tambaram", "/routes/tirupati/tambaram"],
  ["Tambaram → Kochi", "/routes/tambaram/kochi"],
  ["Kochi → Tambaram", "/routes/kochi/tambaram"],
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
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Avadi", "/avadi-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Vellore", "/vellore-transport"],
  ["Ranipet", "/ranipet-transport"],
  ["Hosur", "/hosur-transport"],
  ["Ambur", "/ambur-transport"],
  ["Vaniyambadi", "/vaniyambadi-transport"],
];

const faqs = [
  {
    q: "Can I book a truck in Tambaram?",
    a: "You can submit your pickup, delivery, cargo and vehicle requirements through LOADZY to explore suitable transport options.",
  },
  {
    q: "Does LOADZY support house shifting in Tambaram?",
    a: "LOADZY supports house-shifting and packers-and-movers transport requirements depending on your route and vehicle needs.",
  },
  {
    q: "Can I book full load and part load transport?",
    a: "You can submit full load or part load requirements and explore suitable transport options for your goods.",
  },
  {
    q: "Can I book transport between Tambaram and Chennai?",
    a: "You can submit transport enquiries for Tambaram–Chennai and Chennai–Tambaram. Availability depends on your requirements.",
  },
  {
    q: "How can I find a truck in Tambaram?",
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
          name: "Tambaram Truck Transport",
          item: "https://www.loadzyinfra.in/tambaram-transport",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Tambaram Truck Transport Services",
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in/",
      },
      areaServed: {
        "@type": "Place",
        name: "Tambaram, Chennai, Tamil Nadu, India",
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

export default function TambaramTransportPage() {
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
            LOADZY TAMBARAM
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Tambaram Truck Transport & Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Find transport options from Tambaram for house shifting,
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
            Truck Transport Services in Tambaram
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Tambaram is an important commercial and residential hub in the
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
            About Tambaram – Business & Goods Transport
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Tambaram connects residential neighbourhoods, commercial areas
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
            Major Cities for Transport from Tambaram
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore major commercial destinations for goods transport,
            truck booking and freight enquiries from Tambaram.
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
            Tambaram Major Cities & Reverse Truck Routes
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore transport routes in both directions between Tambaram
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
            Explore transport pages for cities and towns around Tambaram
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
            Why Choose LOADZY for Tambaram Transport?
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
            Tambaram Truck Transport FAQs
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
          Need a Truck in Tambaram?
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
