import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chengalpattu Truck Transport & Packers Movers | LOADZY",
  description:
    "Book truck transport in Chengalpattu for full load, part load, house shifting, packers and movers, commercial goods and industrial transport across Tamil Nadu and South India.",
  keywords: [
    "Chengalpattu truck transport",
    "Chengalpattu lorry transport",
    "Chengalpattu packers and movers",
    "truck booking Chengalpattu",
    "Chengalpattu freight transport",
    "Chengalpattu to Chennai transport",
    "house shifting Chengalpattu",
    "LOADZY",
  ],
  alternates: {
    canonical: "https://www.loadzyinfra.in/chengalpattu-transport",
  },
  openGraph: {
    title: "Chengalpattu Truck Transport & Packers Movers | LOADZY",
    description:
      "Find truck transport for commercial goods, house shifting and industrial loads from Chengalpattu.",
    url: "https://www.loadzyinfra.in/chengalpattu-transport",
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
  ["Chengalpattu → Chennai", "/routes/chengalpattu/chennai"],
  ["Chennai → Chengalpattu", "/routes/chennai/chengalpattu"],
  ["Chengalpattu → Tambaram", "/routes/chengalpattu/tambaram"],
  ["Tambaram → Chengalpattu", "/routes/tambaram/chengalpattu"],
  ["Chengalpattu → Kanchipuram", "/routes/chengalpattu/kanchipuram"],
  ["Kanchipuram → Chengalpattu", "/routes/kanchipuram/chengalpattu"],
  ["Chengalpattu → Tiruvallur", "/routes/chengalpattu/tiruvallur"],
  ["Tiruvallur → Chengalpattu", "/routes/tiruvallur/chengalpattu"],
  ["Chengalpattu → Vellore", "/routes/chengalpattu/vellore"],
  ["Vellore → Chengalpattu", "/routes/vellore/chengalpattu"],
  ["Chengalpattu → Ranipet", "/routes/chengalpattu/ranipet"],
  ["Ranipet → Chengalpattu", "/routes/ranipet/chengalpattu"],
  ["Chengalpattu → Bangalore", "/routes/chengalpattu/bangalore"],
  ["Bangalore → Chengalpattu", "/routes/bangalore/chengalpattu"],
  ["Chengalpattu → Hosur", "/routes/chengalpattu/hosur"],
  ["Hosur → Chengalpattu", "/routes/hosur/chengalpattu"],
  ["Chengalpattu → Coimbatore", "/routes/chengalpattu/coimbatore"],
  ["Coimbatore → Chengalpattu", "/routes/coimbatore/chengalpattu"],
  ["Chengalpattu → Salem", "/routes/chengalpattu/salem"],
  ["Salem → Chengalpattu", "/routes/salem/chengalpattu"],
  ["Chengalpattu → Erode", "/routes/chengalpattu/erode"],
  ["Erode → Chengalpattu", "/routes/erode/chengalpattu"],
  ["Chengalpattu → Tiruppur", "/routes/chengalpattu/tiruppur"],
  ["Tiruppur → Chengalpattu", "/routes/tiruppur/chengalpattu"],
  ["Chengalpattu → Madurai", "/routes/chengalpattu/madurai"],
  ["Madurai → Chengalpattu", "/routes/madurai/chengalpattu"],
  ["Chengalpattu → Tiruchirappalli", "/routes/chengalpattu/tiruchirappalli"],
  ["Tiruchirappalli → Chengalpattu", "/routes/tiruchirappalli/chengalpattu"],
  ["Chengalpattu → Tirunelveli", "/routes/chengalpattu/tirunelveli"],
  ["Tirunelveli → Chengalpattu", "/routes/tirunelveli/chengalpattu"],
  ["Chengalpattu → Hyderabad", "/routes/chengalpattu/hyderabad"],
  ["Hyderabad → Chengalpattu", "/routes/hyderabad/chengalpattu"],
  ["Chengalpattu → Vijayawada", "/routes/chengalpattu/vijayawada"],
  ["Vijayawada → Chengalpattu", "/routes/vijayawada/chengalpattu"],
  ["Chengalpattu → Tirupati", "/routes/chengalpattu/tirupati"],
  ["Tirupati → Chengalpattu", "/routes/tirupati/chengalpattu"],
  ["Chengalpattu → Kochi", "/routes/chengalpattu/kochi"],
  ["Kochi → Chengalpattu", "/routes/kochi/chengalpattu"],
];


const nearbyPlaces = [
  ["Chennai", "/chennai-transport"],
  ["Tiruvallur", "/tiruvallur-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Vellore", "/vellore-transport"],
  ["Ranipet", "/ranipet-transport"],
  ["Tirupattur", "/tirupattur-transport"],
  ["Ambur", "/ambur-transport"],
  ["Vaniyambadi", "/vaniyambadi-transport"],
  ["Salem", "/salem-transport"],
  ["Coimbatore", "/coimbatore-transport"],
  ["Madurai", "/madurai-transport"],
  ["Tiruchirappalli", "/tiruchirappalli-transport"],
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

const faqs = [
  {
    q: "Can I book a truck in Chengalpattu?",
    a: "You can submit your pickup, delivery, cargo and vehicle requirements through LOADZY to explore suitable transport options.",
  },
  {
    q: "Does LOADZY support house shifting in Chengalpattu?",
    a: "LOADZY supports house-shifting and packers-and-movers transport requirements depending on your route and vehicle needs.",
  },
  {
    q: "Can I book full load and part load transport?",
    a: "You can submit full load or part load requirements and explore suitable transport options for your goods.",
  },
  {
    q: "Can I book transport between Chengalpattu and Chennai?",
    a: "You can submit transport enquiries for Chengalpattu–Chennai and Chennai–Chengalpattu. Availability depends on your requirements.",
  },
  {
    q: "How can I find a truck in Chengalpattu?",
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
          name: "Chengalpattu Truck Transport",
          item: "https://www.loadzyinfra.in/chengalpattu-transport",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Chengalpattu Truck Transport Services",
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: "https://www.loadzyinfra.in/",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Chengalpattu, Tamil Nadu, India",
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

export default function ChengalpattuTransportPage() {
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
            LOADZY CHENGALPATTU
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Chengalpattu Truck Transport & Packers Movers
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-200">
            Find transport options from Chengalpattu for house shifting,
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
            Truck Transport Services in Chengalpattu
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Chengalpattu is an important district in northern Tamil Nadu,
            connected to Chennai and other commercial centres. Customers
            may require trucks for household goods, furniture, building
            materials, machinery, packaged products and business supplies.
            LOADZY helps customers submit their transport requirements and
            explore suitable vehicle options.
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
            About Chengalpattu – Business & Goods Transport
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Chengalpattu connects local businesses and residential areas
            with the wider Chennai region. Its location along important
            road and rail corridors makes it relevant for regional goods
            movement, commercial deliveries and household shifting.
          </p>

          <p className="mt-4 text-lg font-bold leading-8 text-slate-600">
            Whether you need to move furniture, business supplies,
            industrial equipment or a larger shipment, enter your pickup
            and delivery details through LOADZY to explore transport
            options for your requirements.
          </p>
        </div>
      </section>


<section className="bg-slate-50 px-6 py-14">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-black md:text-4xl">
      Major Cities for Transport from Chengalpattu
    </h2>

    <p className="mt-4 font-bold leading-7 text-slate-600">
      Explore major commercial destinations for goods transport,
      truck booking and freight enquiries from Chengalpattu.
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
            Chengalpattu Major Cities & Reverse Truck Routes
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore transport routes in both directions between
            Chengalpattu and major destinations. Confirm that each route
            page exists before publishing its link.
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
            Explore transport pages for cities and towns around
            Chengalpattu and across Tamil Nadu. Availability depends
            on your route and transport requirements.
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
            Why Choose LOADZY for Chengalpattu Transport?
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
            Chengalpattu Truck Transport FAQs
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
          Need a Truck in Chengalpattu?
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
