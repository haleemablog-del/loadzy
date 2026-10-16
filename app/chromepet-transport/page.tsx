import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/chromepet-transport`;

export const metadata: Metadata = {
  title: "Chromepet Truck Transport & Packers Movers | LOADZY",
  description:
    "Find truck transport in Chromepet, Chennai for full load, part load, house shifting, packers and movers, commercial goods and industrial cargo across Tamil Nadu and South India.",
  keywords: [
    "Chromepet truck transport",
    "Chromepet lorry transport",
    "Chromepet packers and movers",
    "truck booking Chromepet",
    "Chromepet freight transport",
    "Chromepet to Chennai transport",
    "Chennai to Chromepet transport",
    "Chromepet to Bangalore transport",
    "Bangalore to Chromepet transport",
    "Chromepet goods transport",
    "Chromepet house shifting",
    "Chromepet full load transport",
    "Chromepet part load transport",
    "LOADZY",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Chromepet Truck Transport & Packers Movers | LOADZY",
    description:
      "Explore transport options for commercial goods, house shifting, full loads and part loads from Chromepet, Chennai.",
    url: PAGE_URL,
    siteName: "LOADZY",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
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

const routes = [
  ["Chromepet → Chennai", "/routes/chromepet/chennai"],
  ["Chennai → Chromepet", "/routes/chennai/chromepet"],
  ["Chromepet → Tambaram", "/routes/chromepet/tambaram"],
  ["Tambaram → Chromepet", "/routes/tambaram/chromepet"],
  ["Chromepet → Chengalpattu", "/routes/chromepet/chengalpattu"],
  ["Chengalpattu → Chromepet", "/routes/chengalpattu/chromepet"],
  ["Chromepet → Kanchipuram", "/routes/chromepet/kanchipuram"],
  ["Kanchipuram → Chromepet", "/routes/kanchipuram/chromepet"],
  ["Chromepet → Vellore", "/routes/chromepet/vellore"],
  ["Vellore → Chromepet", "/routes/vellore/chromepet"],
  ["Chromepet → Ranipet", "/routes/chromepet/ranipet"],
  ["Ranipet → Chromepet", "/routes/ranipet/chromepet"],
  ["Chromepet → Bangalore", "/routes/chromepet/bangalore"],
  ["Bangalore → Chromepet", "/routes/bangalore/chromepet"],
  ["Chromepet → Hosur", "/routes/chromepet/hosur"],
  ["Hosur → Chromepet", "/routes/hosur/chromepet"],
  ["Chromepet → Coimbatore", "/routes/chromepet/coimbatore"],
  ["Coimbatore → Chromepet", "/routes/coimbatore/chromepet"],
  ["Chromepet → Salem", "/routes/chromepet/salem"],
  ["Salem → Chromepet", "/routes/salem/chromepet"],
  ["Chromepet → Madurai", "/routes/chromepet/madurai"],
  ["Madurai → Chromepet", "/routes/madurai/chromepet"],
  ["Chromepet → Tiruchirappalli", "/routes/chromepet/tiruchirappalli"],
  ["Tiruchirappalli → Chromepet", "/routes/tiruchirappalli/chromepet"],
  ["Chromepet → Tiruppur", "/routes/chromepet/tiruppur"],
  ["Tiruppur → Chromepet", "/routes/tiruppur/chromepet"],
  ["Chromepet → Tirunelveli", "/routes/chromepet/tirunelveli"],
  ["Tirunelveli → Chromepet", "/routes/tirunelveli/chromepet"],
  ["Chromepet → Hyderabad", "/routes/chromepet/hyderabad"],
  ["Hyderabad → Chromepet", "/routes/hyderabad/chromepet"],
  ["Chromepet → Vijayawada", "/routes/chromepet/vijayawada"],
  ["Vijayawada → Chromepet", "/routes/vijayawada/chromepet"],
  ["Chromepet → Tirupati", "/routes/chromepet/tirupati"],
  ["Tirupati → Chromepet", "/routes/tirupati/chromepet"],
  ["Chromepet → Kochi", "/routes/chromepet/kochi"],
  ["Kochi → Chromepet", "/routes/kochi/chromepet"],
];

const nearbyPlaces = [
  ["Pallavaram", "/pallavaram-transport"],
  ["Pammal", "/pammal-transport"],
  ["Anakaputhur", "/anakaputhur-transport"],
  ["Tambaram", "/tambaram-transport"],
  ["Selaiyur", "/selaiyur-transport"],
  ["Medavakkam", "/medavakkam-transport"],
  ["Sholinganallur", "/sholinganallur-transport"],
  ["Perungudi", "/perungudi-transport"],
  ["Velachery", "/velachery-transport"],
  ["Pallikaranai", "/pallikaranai-transport"],
  ["Keelkattalai", "/keelkattalai-transport"],
  ["Madipakkam", "/madipakkam-transport"],
  ["Nanganallur", "/nanganallur-transport"],
  ["Thoraipakkam", "/thoraipakkam-transport"],
  ["Perumbakkam", "/perumbakkam-transport"],
  ["Pozhichalur", "/pozhichalur-transport"],
  ["Kundrathur", "/kundrathur-transport"],
  ["Kovur", "/kovur-transport"],
  ["Porur", "/porur-transport"],
  ["Guindy", "/guindy-transport"],
  ["Adambakkam", "/adambakkam-transport"],
  ["Alandur", "/alandur-transport"],
  ["Adyar", "/adyar-transport"],
  ["Ambattur", "/ambattur-transport"],
  ["Avadi", "/avadi-transport"],
  ["Poonamallee", "/poonamallee-transport"],
  ["Sriperumbudur", "/sriperumbudur-transport"],
  ["Kanchipuram", "/kanchipuram-transport"],
  ["Vellore", "/vellore-transport"],
  ["Chennai", "/chennai-transport"],
];

const faqs = [
  {
    q: "Can I book a truck in Chromepet?",
    a: "Submit your pickup, delivery, cargo and vehicle requirements through LOADZY to enquire about suitable transport options.",
  },
  {
    q: "Does LOADZY support house shifting in Chromepet?",
    a: "You can submit a house-shifting or packers-and-movers transport enquiry. Share your moving date, addresses and approximate goods quantity.",
  },
  {
    q: "Can I enquire about full-load and part-load transport?",
    a: "You can submit either requirement. Suitable vehicle options depend on your goods, route, shipment size and availability.",
  },
  {
    q: "Can I book transport between Chromepet and Chennai?",
    a: "You can enquire about transport in either direction. Truck availability, route coverage and freight charges must be confirmed.",
  },
  {
    q: "Can I arrange transport from Bangalore to Chromepet?",
    a: "You can submit a transport enquiry for Bangalore to Chromepet. Provide your shipment details and preferred pickup date.",
  },
  {
    q: "How can I find a truck in Chromepet?",
    a: "Select Find My Truck and provide your pickup, delivery, load and vehicle details to submit your transport requirements.",
  },
  {
    q: "How are freight charges calculated?",
    a: "Freight may depend on distance, vehicle type, cargo weight and dimensions, loading conditions and vehicle availability. Confirm the final quote before booking.",
  },
  {
    q: "Can I request a return load?",
    a: "You can enquire about return-load options. A matching truck or load is not guaranteed and must be confirmed.",
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
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Chromepet Truck Transport",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Chromepet Truck Transport Services",
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "LOADZY",
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Place",
        name: "Chromepet, Chennai, Tamil Nadu, India",
      },
      serviceType: [
        "Truck Transport",
        "Full Load Transport",
        "Part Load Transport",
        "House Shifting",
        "Packers and Movers",
        "Commercial Goods Transport",
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

export default function ChromepetTransportPage() {
  return (
    <main className="bg-white text-[#062B55]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      
      {/* Hero */}
      <section className="bg-[#10182D] px-6 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-slate-300">
            <Link href="/" className="hover:text-[#08A99F]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/routes" className="hover:text-[#08A99F]">
              Routes
            </Link>
            <span className="mx-2">/</span>
            <span>Chromepet</span>
          </nav>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            {/* Left: Hero heading and buttons */}
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#08A99F]">
                LOADZY CHROMEPET
              </p>

              <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                Chromepet Truck Transport &amp; Packers Movers
              </h1>

              <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-slate-200">
                Find transport options from Chromepet for house shifting,
                commercial goods, industrial cargo, full-load and part-load
                requirements across Tamil Nadu and South India.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Share your pickup and delivery locations, goods details and
                preferred date to start a transport enquiry. Confirm truck
                availability, route coverage and freight prices before booking.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                
<Link
  href="/load-search"
  className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-slate-900 transition hover:bg-yellow-300"
>
  Find My Truck →
</Link>

                <Link
                  href="/truck-guide"
                  className="rounded-xl border border-white/30 px-7 py-4 font-black text-white transition hover:border-[#08A99F]"
                >
                  Truck Guide
                </Link>
              </div>
            </div>

            {/* Right: Transport enquiry form */}
            <div className="w-full">
              <TransportEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Truck Transport Services in Chromepet
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Chromepet is a residential and commercial locality in southern
            Chennai. Households and businesses may need transport for
            furniture, appliances, packaged goods, shop stock, equipment and
            other consignments. LOADZY helps customers submit their transport
            requirements and enquire about suitable vehicle options.
          </p>

          <p className="mt-4 text-lg font-bold leading-8 text-slate-600">
            When requesting a truck, provide accurate pickup and delivery
            addresses, goods type, approximate weight and dimensions, loading
            access and preferred date. Final vehicle availability, freight
            charges and delivery arrangements must be confirmed before booking.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-black shadow-sm transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local information */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Chromepet – Local Goods and Transport Requirements
          </h2>

          <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
            Transport requirements around Chromepet can include household
            moves, business deliveries, shop supplies, packaged products and
            equipment. The appropriate vehicle depends on the shipment and
            access conditions at both locations.
          </p>

          <p className="mt-4 text-lg font-bold leading-8 text-slate-600">
            For a more accurate enquiry, mention whether you need a dedicated
            full truck or want to explore part-load options. For household
            shifting, estimate the furniture, appliances and cartons that need
            to be moved.
          </p>
        </div>
      </section>

      {/* Major cities */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Major Cities for Transport from Chromepet
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore major destinations for goods transport, truck booking and
            freight enquiries from Chromepet.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {majorCities.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-black shadow-sm transition hover:border-[#08A99F]"
              >
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Forward and reverse routes */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Chromepet Major Cities &amp; Reverse Truck Routes
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore transport routes in both directions between Chromepet and
            major destinations. Route pages must exist in LOADZY for these
            links to open successfully.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-black shadow-sm transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Nearby Places for Truck Transport
          </h2>

          <p className="mt-4 font-bold leading-7 text-slate-600">
            Explore nearby areas around Chromepet and southern Chennai for
            transport enquiries. Confirm pickup and delivery coverage for your
            exact addresses before booking.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-200 bg-white p-5 font-black shadow-sm transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                {name} Transport →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why LOADZY */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Why Choose LOADZY for Chromepet Transport?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Full-load and part-load enquiries",
              "Multiple truck-type requirements",
              "House-shifting transport enquiries",
              "Commercial goods transport",
              "Industrial cargo requirements",
              "Route-based transport enquiries",
              "Freight options based on requirements",
              "Pickup and delivery planning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 font-bold shadow-sm"
              >
                <span className="mr-2 text-[#08A99F]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking steps */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            How to Request Transport with LOADZY
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Enter Locations",
                text: "Provide your pickup and delivery addresses.",
              },
              {
                title: "Share Load Details",
                text: "Describe your goods and vehicle requirements.",
              },
              {
                title: "Submit Enquiry",
                text: "Use the booking section or Find My Truck page.",
              },
              {
                title: "Confirm the Booking",
                text: "Verify availability, freight, pickup and delivery terms.",
              },
            ].map((step) => (
              <article
                key={step.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-black">{step.title}</h3>
                <p className="mt-3 font-bold leading-7 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          
<div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#chromepet-booking"
    className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-slate-900 transition hover:bg-yellow-300"
  >
    Book a Truck →
  </a>

  <Link
    href="#chromepet-booking"
    className="rounded-xl border border-white/30 px-7 py-4 font-black text-white transition hover:border-[#08A99F]"
  >
    Search Available Loads →
  </Link>
</div>

        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Chromepet Truck Transport FAQs
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

      {/* Final CTA */}
      <section className="bg-[#062B55] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a Truck in Chromepet?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-white/90">
            Enter your pickup, delivery and load details to enquire about
            transport options. Confirm truck availability and the final freight
            quote before booking.
          </p>

          <a
  href="#chromepet-booking"
  className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-black text-slate-900 transition hover:bg-yellow-300"
>
  Book a Truck →
</a>
        </div>
      </section>
    </main>
  );
}
