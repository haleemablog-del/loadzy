import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chennai Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Chennai for full load, part load, house shifting, packers and movers, commercial and industrial goods across Tamil Nadu and South India.",
  keywords: [
    "Chennai truck transport",
    "Chennai lorry transport",
    "Chennai packers movers",
    "truck booking Chennai",
    "Chennai freight transport",
    "house shifting Chennai",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/chennai-transport",
  },
  openGraph: {
    title: "Chennai Truck Transport & Packers Movers | LOADZY",
    description:
      "Truck booking and transport services from Chennai to Tamil Nadu and South India.",
    url: "https://www.loadzyinfra.in/chennai-transport",
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
  ["Chennai → Bangalore", "/routes/chennai/bangalore"],
  ["Bangalore → Chennai", "/routes/bangalore/chennai"],

  ["Chennai → Coimbatore", "/routes/chennai/coimbatore"],
  ["Coimbatore → Chennai", "/routes/coimbatore/chennai"],

  ["Chennai → Madurai", "/routes/chennai/madurai"],
  ["Madurai → Chennai", "/routes/madurai/chennai"],

  ["Chennai → Salem", "/routes/chennai/salem"],
  ["Salem → Chennai", "/routes/salem/chennai"],

  ["Chennai → Vellore", "/routes/chennai/vellore"],
  ["Vellore → Chennai", "/routes/vellore/chennai"],

  ["Chennai → Tiruchirappalli", "/routes/chennai/tiruchirappalli"],
  ["Tiruchirappalli → Chennai", "/routes/tiruchirappalli/chennai"],

  ["Chennai → Tiruppur", "/routes/chennai/tiruppur"],
  ["Tiruppur → Chennai", "/routes/tiruppur/chennai"],

  ["Chennai → Erode", "/routes/chennai/erode"],
  ["Erode → Chennai", "/routes/erode/chennai"],

  ["Chennai → Hyderabad", "/routes/chennai/hyderabad"],
  ["Hyderabad → Chennai", "/routes/hyderabad/chennai"],

  ["Chennai → Kochi", "/routes/chennai/kochi"],
  ["Kochi → Chennai", "/routes/kochi/chennai"],

  ["Chennai → Vijayawada", "/routes/chennai/vijayawada"],
  ["Vijayawada → Chennai", "/routes/vijayawada/chennai"],

  ["Chennai → Tirupati", "/routes/chennai/tirupati"],
  ["Tirupati → Chennai", "/routes/tirupati/chennai"],
];

const nearbyPlaces = [
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Avadi", "/avadi-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Madhavaram", "/madhavaram-transport"],
];

const faqs = [
  {
    q: "Can I book a truck from Chennai?",
    a: "Yes. LOADZY helps customers find suitable truck transport based on pickup, delivery, load and truck requirements.",
  },
  {
    q: "Does LOADZY provide Chennai house shifting transport?",
    a: "Yes. House shifting requirements can be matched with suitable truck transport depending on the quantity and type of household goods.",
  },
  {
    q: "Can I book full load and part load trucks from Chennai?",
    a: "LOADZY supports both full load and part load transport requirements.",
  },
  {
    q: "Which cities can I transport goods from Chennai to?",
    a: "Transport routes include major destinations across Tamil Nadu and South India, depending on truck availability.",
  },
  {
    q: "How do I find a truck in Chennai?",
    a: "Enter your pickup, delivery and load details through LOADZY to find a suitable transport option.",
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
          name: "Chennai Truck Transport",
          item: "https://www.loadzyinfra.in/chennai-transport",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Chennai Truck Transport Services",
      provider: {
        "@type": "Organization",
        name: "LOADZY",
      },
      areaServed: "Chennai",
      serviceType: "Truck Transport",
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

export default function ChennaiTransportPage() {
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
            LOADZY CHENNAI
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Chennai Truck Transport & Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Reliable truck transport from Chennai for house shifting, packers
            and movers, commercial goods, industrial loads, full load and
            part load requirements across Tamil Nadu and South India.
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
          <h2 className="text-4xl font-black">
            Truck Transport Services in Chennai
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Chennai is a major transport and commercial hub connecting Tamil
            Nadu with Karnataka, Kerala, Andhra Pradesh and Telangana. LOADZY
            helps customers plan truck transport according to their pickup,
            delivery, cargo and vehicle requirements.
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
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            Popular Truck Routes from Chennai
          </h2>

          <p className="mt-4 font-bold text-slate-600">
            Explore available Chennai-to-city transport routes through LOADZY.
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
```tsx
const nearbyPlaces = [
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Chengalpattu", "/chengalpattu-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Avadi", "/avadi-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Madhavaram", "/madhavaram-transport"],
];

<section className="bg-slate-50 px-6 py-14">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-black md:text-4xl">
      Nearby Places for Truck Transport from Chennai
    </h2>

    <p className="mt-4 font-bold leading-7 text-slate-600">
      Explore nearby cities, towns and industrial locations for
      truck booking, goods transport, commercial loads and house
      shifting. Service availability depends on the route and
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
          <h2 className="text-4xl font-black">
            Why Choose LOADZY for Chennai Transport?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Multiple truck types",
              "Full load and part load options",
              "House shifting support",
              "Commercial and industrial transport",
              "Tamil Nadu and South India routes",
              "Route-based truck matching",
              "Affordable freight options",
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

<section className="px-6 py-14">
  <div className="mx-auto max-w-5xl">
    <h2 className="text-3xl font-black md:text-4xl">
      About Chennai – Commercial, Industrial & Goods Transport
    </h2>

    <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
      Chennai is the capital of Tamil Nadu and a major commercial,
      manufacturing and logistics hub in South India. The city connects
      businesses, warehouses, industrial areas, ports and distribution
      centres with destinations across Tamil Nadu and other states.
    </p>

    <p className="mt-4 text-lg font-bold leading-8 text-slate-600">
      Businesses may require trucks to transport machinery, building
      materials, furniture, packaged goods, industrial products, fruits
      and vegetables. LOADZY helps customers explore truck booking,
      full load, part load, commercial transport and house shifting
      options based on their pickup and delivery requirements.
    </p>

    <p className="mt-4 text-lg font-bold leading-8 text-slate-600">
      Whether you need goods transport from Chennai to another city
      or a truck for delivery into Chennai, explore the available
      routes below and submit your transport requirements through
      LOADZY.
    </p>
  </div>
</section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black">
            Chennai Truck Transport FAQs
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
        <h2 className="text-4xl font-black">
          Need a Truck from Chennai?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-bold text-white/90">
          Enter your pickup, delivery and load details to find the right truck
          for your transport requirement.
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
