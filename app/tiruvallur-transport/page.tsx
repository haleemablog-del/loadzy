import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiruvallur Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Tiruvallur for full load, part load, house shifting, packers and movers, commercial goods and industrial transport across Tamil Nadu and South India.",
  keywords: [
    "Tiruvallur truck transport",
    "Tiruvallur lorry transport",
    "Tiruvallur packers and movers",
    "truck booking Tiruvallur",
    "Tiruvallur freight transport",
    "house shifting Tiruvallur",
    "Tiruvallur to Chennai transport",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/tiruvallur-transport",
  },
  openGraph: {
    title: "Tiruvallur Truck Transport & Packers Movers | LOADZY",
    description:
      "Find truck transport for goods, house shifting and commercial loads from Tiruvallur.",
    url: "https://www.loadzyinfra.in/tiruvallur-transport",
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
  ["Tiruvallur → Chennai", "/routes/tiruvallur/chennai"],
  ["Chennai → Tiruvallur", "/routes/chennai/tiruvallur"],

  ["Tiruvallur → Bangalore", "/routes/tiruvallur/bangalore"],
  ["Bangalore → Tiruvallur", "/routes/bangalore/tiruvallur"],

  ["Tiruvallur → Vellore", "/routes/tiruvallur/vellore"],
  ["Vellore → Tiruvallur", "/routes/vellore/tiruvallur"],

  ["Tiruvallur → Coimbatore", "/routes/tiruvallur/coimbatore"],
  ["Coimbatore → Tiruvallur", "/routes/coimbatore/tiruvallur"],

  ["Tiruvallur → Salem", "/routes/tiruvallur/salem"],
  ["Salem → Tiruvallur", "/routes/salem/tiruvallur"],

  ["Tiruvallur → Madurai", "/routes/tiruvallur/madurai"],
  ["Madurai → Tiruvallur", "/routes/madurai/tiruvallur"],

  ["Tiruvallur → Tiruchirappalli", "/routes/tiruvallur/tiruchirappalli"],
  ["Tiruchirappalli → Tiruvallur", "/routes/tiruchirappalli/tiruvallur"],

  ["Tiruvallur → Tiruppur", "/routes/tiruvallur/tiruppur"],
  ["Tiruppur → Tiruvallur", "/routes/tiruppur/tiruvallur"],

  ["Tiruvallur → Erode", "/routes/tiruvallur/erode"],
  ["Erode → Tiruvallur", "/routes/erode/tiruvallur"],

  ["Tiruvallur → Hyderabad", "/routes/tiruvallur/hyderabad"],
  ["Hyderabad → Tiruvallur", "/routes/hyderabad/tiruvallur"],

  ["Tiruvallur → Vijayawada", "/routes/tiruvallur/vijayawada"],
  ["Vijayawada → Tiruvallur", "/routes/vijayawada/tiruvallur"],

  ["Tiruvallur → Tirupati", "/routes/tiruvallur/tirupati"],
  ["Tirupati → Tiruvallur", "/routes/tirupati/tiruvallur"],

  ["Tiruvallur → Kochi", "/routes/tiruvallur/kochi"],
  ["Kochi → Tiruvallur", "/routes/kochi/tiruvallur"],

  ["Tiruvallur → Kozhikode", "/routes/tiruvallur/kozhikode"],
  ["Kozhikode → Tiruvallur", "/routes/kozhikode/tiruvallur"],
];



const nearbyPlaces = [
  ["Chennai", "/chennai-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Ranipet", "/ranipet-transport"],
  ["Vellore", "/vellore-transport"],
  ["Hosur", "/hosur-transport"],
  ["Tirupattur", "/tirupattur-transport"],
  ["Ambur", "/ambur-transport"],
  ["Vaniyambadi", "/vaniyambadi-transport"],
  ["Tiruchirappalli", "/tiruchirappalli-transport"],
  ["Salem", "/salem-transport"],
  ["Coimbatore", "/coimbatore-transport"],
  ["Madurai", "/madurai-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Avadi", "/avadi-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
];


const faqs = [
  {
    q: "Can I book a truck in Tiruvallur?",
    a: "You can submit your pickup, delivery, cargo and vehicle requirements through LOADZY to explore suitable transport options.",
  },
  {
    q: "Does LOADZY support house shifting in Tiruvallur?",
    a: "LOADZY supports house-shifting and packers-and-movers transport requirements, depending on your route and vehicle needs.",
  },
  {
    q: "Can I book full load and part load transport?",
    a: "Yes. You can submit full load or part load requirements and find a suitable transport option based on your needs.",
  },
  {
    q: "Can I transport goods between Tiruvallur and Chennai?",
    a: "Tiruvallur-to-Chennai and Chennai-to-Tiruvallur are useful routes to explore for commercial and household goods transport. Availability depends on your requirements.",
  },
  {
    q: "How can I find a truck from Tiruvallur?",
    a: "Use the Find My Truck option and provide your pickup location, delivery location, load details and preferred vehicle requirements.",
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
          name: "Tiruvallur Truck Transport",
          item: "https://www.loadzyinfra.in/tiruvallur-transport",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Tiruvallur Truck Transport Services",
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in/",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Tiruvallur, Tamil Nadu, India",
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

export default function TiruvallurTransportPage() {
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
            LOADZY TIRUVALLUR
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Tiruvallur Truck Transport & Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Find transport options from Tiruvallur for house shifting,
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
            Truck Transport Services in Tiruvallur
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Tiruvallur is a district in northern Tamil Nadu with residential
            communities, commercial activity and industrial areas. Customers
            may need transport for machinery, furniture, building materials,
            packaged goods and household belongings. LOADZY helps customers
            submit their requirements and explore suitable truck options.
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
            About Tiruvallur – Industry, Business & Goods Transport
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Tiruvallur is connected to the wider Chennai metropolitan
            region and northern Tamil Nadu transport network. Nearby
            industrial and commercial locations create transport needs
            for business supplies, equipment, furniture and other goods.
          </p>

          <p className="mt-4 text-lg font-bold leading-8 text-slate-600">
            Whether you are moving household belongings, arranging a
            commercial delivery or transporting a larger load, provide
            your pickup and delivery details through LOADZY to explore
            suitable transport options.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Tiruvallur Outgoing & Reverse Truck Routes
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore both directions for transport between Tiruvallur
            and other destinations. Each route page must be available
            before its link is published.
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
            Explore transport pages for nearby cities and towns around
            Tiruvallur. Transport availability depends on the selected
            route, load and vehicle requirements.
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
            Why Choose LOADZY for Tiruvallur Transport?
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
            Tiruvallur Truck Transport FAQs
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
          Need a Truck in Tiruvallur?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-white/90">
          Enter your pickup, delivery and load details to explore
          transport options for your requirements.
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
