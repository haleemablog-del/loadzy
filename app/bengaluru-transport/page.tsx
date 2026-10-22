import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-transport`;

export const metadata: Metadata = {
  title: "Bengaluru Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Bengaluru, Karnataka. Enquire about full load, part load, industrial goods, commercial transport, machinery and household shifting with LOADZY.",
  keywords: [
    "Bengaluru transport service",
    "Bangalore transport service",
    "Bengaluru truck booking",
    "Bangalore truck booking",
    "Bengaluru goods transport",
    "Bengaluru lorry booking",
    "Bengaluru logistics",
    "Bengaluru full load transport",
    "Bengaluru part load transport",
    "Bengaluru industrial transport",
    "Bengaluru commercial transport",
    "Bengaluru machinery transport",
    "Bengaluru household shifting",
    "Bengaluru packers and movers",
    "Yelahanka transport",
    "Attibele transport",
    "Bommasandra transport",
    "Jigani transport",
    "Kumbalgodu transport",
    "Karnataka goods transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bengaluru Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from Bengaluru and its major urban localities.",
    url: PAGE_URL,
    siteName: "LOADZY",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "🚛",
    title: "Full Load Transport",
    description:
      "Enquire about dedicated trucks for larger consignments, commercial goods and shipments requiring a full vehicle.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that may not require an entire truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan the transport of furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Enquire about vehicle arrangements for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Share your requirements for shop stock, business supplies and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about transporting machinery, components, production materials and industrial goods.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Hosur",
  "Chennai",
  "Coimbatore",
  "Mysuru",
  "Hubballi",
  "Mangaluru",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Kochi",
  "Vijayawada",
  "Tiruppur",
];

const towns = [
  {
    name: "Yelahanka",
    slug: "yelahanka",
    famousFor:
      "A major northern Bengaluru locality with residential, institutional and commercial activity",
    goods:
      "Office equipment, furniture, retail stock, household goods and general cargo.",
  },
  {
    name: "Hunasamaranahalli",
    slug: "hunasamaranahalli",
    famousFor:
      "Urban growth and local commerce in northern Bengaluru",
    goods:
      "Construction materials, household goods, packaged products and commercial supplies.",
  },
  {
    name: "Kadigenahalli",
    slug: "kadigenahalli",
    famousFor:
      "Residential and commercial activity in the northern Bengaluru area",
    goods:
      "Household goods, shop stock, furniture, building supplies and general cargo.",
  },
  {
    name: "Madanayakanahalli",
    slug: "madanayakanahalli",
    famousFor:
      "Growing settlement and access to the northern industrial corridor",
    goods:
      "Building supplies, packaged merchandise, factory supplies and commercial consignments.",
  },
  {
    name: "Chikkabanavara",
    slug: "chikkabanavara",
    famousFor:
      "Residential and commercial activity in northwest Bengaluru",
    goods:
      "Furniture, appliances, household shifting goods and retail stock.",
  },
  {
    name: "Chikkabidarakallu",
    slug: "chikkabidarakallu",
    famousFor:
      "Urban development and industrial surroundings in northwest Bengaluru",
    goods:
      "Building materials, factory supplies and general commercial cargo.",
  },
  {
    name: "Anekal",
    slug: "anekal",
    famousFor:
      "Regional commerce and access to the southeast Bengaluru corridor",
    goods:
      "Agricultural produce, retail stock, construction supplies and commercial goods.",
    href: "/bengaluru-anekal-transport",
  },
  {
    name: "Attibele",
    slug: "attibele",
    famousFor:
      "Commercial activity and access to the Karnataka–Tamil Nadu border corridor",
    goods:
      "Factory materials, packaged products, components and commercial consignments.",
  },
  {
    name: "Bommasandra",
    slug: "bommasandra",
    famousFor:
      "Industrial estates, manufacturing and biotechnology-related business activity",
    goods:
      "Manufacturing inputs, packaged products, equipment, components and factory supplies.",
  },
  {
    name: "Dommasandra",
    slug: "dommasandra",
    famousFor:
      "Residential and commercial growth in southeast Bengaluru",
    goods:
      "Furniture, household goods, construction materials and shop stock.",
  },
  {
    name: "Hebbagodi",
    slug: "hebbagodi",
    famousFor:
      "Urban activity near the Electronic City and Bommasandra corridor",
    goods:
      "Commercial supplies, furniture, equipment and general consignments.",
  },
  {
    name: "Jigani",
    slug: "jigani",
    famousFor:
      "Industrial estates and manufacturing-related businesses",
    goods:
      "Industrial components, machinery, packaged products and factory materials.",
  },
  {
    name: "Sarjapura",
    slug: "sarjapura",
    famousFor:
      "Residential development and commercial activity in southeast Bengaluru",
    goods:
      "Furniture, appliances, construction materials and commercial supplies.",
  },
  {
    name: "Kumbalgodu",
    slug: "kumbalgodu",
    famousFor:
      "Industrial estates and manufacturing activity in southwest Bengaluru",
    goods:
      "Factory materials, packaged products, equipment and commercial stock.",
  },
  {
    name: "Konappana Agrahara",
    slug: "konappana-agrahara",
    famousFor:
      "Urban and commercial activity along the Electronic City corridor",
    goods:
      "Office equipment, furniture, electronics-related supplies and commercial stock.",
  },
  {
    name: "Maragondahalli",
    slug: "maragondahalli",
    famousFor:
      "Local settlement and regional commercial activity",
    goods:
      "Packaged goods, retail stock, household items and commercial consignments.",
  },
];

const nearbyAreas = [
  "Peenya",
  "Whitefield",
  "Electronic City",
  "Hebbal",
  "Rajajinagar",
  "Yeshwanthpur",
  "Marathahalli",
  "KR Puram",
  "Indiranagar",
  "Koramangala",
  "Bellandur",
  "Mahadevapura",
];

const faqs = [
  {
    question: "How can I book a truck in Bengaluru?",
    answer:
      "Fill in the transport enquiry form with your name, contact number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit your enquiry and confirm truck availability, freight charges and pickup arrangements before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport in Bengaluru?",
    answer:
      "Yes, you can submit an enquiry for full load transport. Suitable vehicle options and freight charges depend on your goods, route, load requirements, pickup date and vehicle availability.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, shipment size, timing and suitable transport options.",
  },
  {
    question: "Can I transport industrial goods and machinery?",
    answer:
      "You can enquire about moving industrial materials, machinery, components and other commercial consignments. Share the cargo description, approximate weight and dimensions, loading requirements and destination.",
  },
  {
    question: "Can I book a truck from Bengaluru to another city?",
    answer:
      "You can submit an enquiry for intercity and interstate transport. The route, suitable vehicle, freight price and pickup schedule must be confirmed for your shipment.",
  },
  {
    question: "Can I arrange household shifting in Bengaluru?",
    answer:
      "You can enquire about transporting furniture, appliances, cartons and other household belongings. Share the pickup and delivery addresses, preferred date and any special loading requirements.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, cargo weight and dimensions, loading requirements, pickup date and availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. Submitting an enquiry does not automatically confirm a vehicle or price. Truck availability, freight charges and pickup arrangements must be confirmed separately.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bengaluru Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods, industrial consignments and household shifting in Bengaluru, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Industrial transport",
    "Household shifting transport",
    "Machinery transport",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "City",
    name: "Bengaluru, Karnataka, India",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Karnataka Truck Transport",
      item: `${SITE_URL}/karnataka-truck-transport`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bengaluru Urban Transport",
      item: `${SITE_URL}/bengaluru-urban-transport`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Bengaluru Transport",
      item: PAGE_URL,
    },
  ],
};

export default function BengaluruTransportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#10182D] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-20">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-7 text-sm text-slate-300"
            >
              <Link href="/" className="hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/bengaluru-urban-transport"
                className="hover:text-teal-300"
              >
                Bengaluru Urban
              </Link>
              <span className="mx-2">/</span>
              <span>Bengaluru Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Bengaluru Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Bengaluru, Karnataka?
              Explore LOADZY for full load, part load, industrial goods,
              commercial transport, machinery and household shifting
              enquiries across the city and its major urban localities.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Book a Truck →
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
              >
                Get Your Transport Price
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {[
                "Full Load",
                "Part Load",
                "Industrial Goods",
                "Commercial Transport",
                "Household Shifting",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <TransportEnquiryForm />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Goods Transport Services in Bengaluru
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for commercial stock, industrial
          supplies, machinery, household goods and general cargo.
          Choose a service and share your pickup, destination and
          shipment requirements.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-3xl">
                {service.icon}
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-teal-700">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCAL INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-start md:px-8 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Local transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Transport and Truck Booking in Bengaluru, Karnataka
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bengaluru is a major technology and commercial centre
              with business activity across information technology,
              manufacturing, electronics, biotechnology, engineering
              and related sectors. These activities contribute to
              varied transport requirements across the city.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Depending on the shipment, customers may need transport
              for office equipment, electronics, machinery,
              manufacturing materials, packaged products, shop stock,
              furniture, appliances and general commercial goods.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and
              delivery addresses, goods description, approximate
              weight and dimensions, loading requirements and
              preferred pickup date. These details help determine a
              suitable vehicle and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and
              intercity movement. Vehicle availability, freight rates
              and schedules depend on each booking and must be
              confirmed before transport.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Prepare Before Booking</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Pickup and delivery addresses",
                "Goods description and approximate load size",
                "Required truck type or capacity",
                "Preferred pickup date",
                "Loading and unloading requirements",
                "Contact details for confirmation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-6 text-slate-200"
                >
                  <span className="font-bold text-[#08A99F]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Your Transport Price →
            </Link>
          </div>
        </div>
      </section>

{/* BENGALURU TRANSPORT LOCATION STRUCTURE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Explore Bengaluru
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Bengaluru Transport Locations
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore Bengaluru transport coverage by region, city zone,
            Anekal and industrial areas. Each section will organize its
            relevant locations and individual transport pages.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/bengaluru-urban-transport"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="text-3xl">🏙️</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-teal-700">
                01. Bengaluru Urban
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Explore urban neighbourhoods, residential localities and
                commercial transport locations across Bengaluru Urban.
              </p>
              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore Urban Locations →
              </span>
            </Link>

            <Link
              href="/bengaluru-rural-transport"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="text-3xl">🗺️</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-teal-700">
                02. Bengaluru Rural
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Organize rural towns, regional commercial locations and
                relevant goods transport destinations.
              </p>
              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore Rural Locations →
              </span>
            </Link>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-3xl">🧭</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                03. Bengaluru City Zones
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Explore separate transport coverage for North, South, East,
                West and Central Bengaluru.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {[
                  { name: "North", href: "/bengaluru-north-transport" },
                  { name: "South", href: "/bengaluru-south-transport" },
                  { name: "East", href: "/bengaluru-east-transport" },
                  { name: "West", href: "/bengaluru-west-transport" },
                  { name: "Central", href: "/bengaluru-central-transport" },
                ].map((zone) => (
                  <Link
                    key={zone.name}
                    href={zone.href}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#08A99F] hover:bg-teal-50 hover:text-teal-800"
                  >
                    Bengaluru {zone.name} →
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/bengaluru-anekal-transport"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="text-3xl">🚚</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-teal-700">
                04. Anekal
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Organize Anekal transport coverage, local commercial activity
                and relevant nearby freight locations.
              </p>
              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore Anekal →
              </span>
            </Link>

            <Link
              href="/bengaluru-industrial-hubs-transport"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="text-3xl">🏭</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-teal-700">
                05. Industrial Areas
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Organize industrial estates, manufacturing hubs and locations
                requiring machinery, materials and commercial goods transport.
              </p>
              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore Industrial Areas →
              </span>
            </Link>
          </div>
        </div>
      </section>


      {/* BENGALURU URBAN LOCATIONS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Truck Transport Across Bengaluru Urban Locations
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore the approved locations from the Bengaluru Urban
          coverage list. Each location will receive its own transport
          page as we work through the list. Until an individual page
          is available, use the enquiry link to request transport.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {towns.map((town) => (
            <Link
              key={town.slug}
              href={town.href ?? "/contact"}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                  {town.name} Transport
                </h3>

                <span className="text-xl text-[#08A99F]">↗</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                Famous for: {town.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                <span className="font-semibold text-slate-800">
                  Potential transport goods:
                </span>{" "}
                {town.goods}
              </p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                {town.href
                  ? `Explore ${town.name} transport →`
                  : `Enquire about ${town.name} transport →`}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* INTERCITY DESTINATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Major Destinations from Bengaluru
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Bengaluru to another city?
            Select a destination to submit a transport price enquiry.
            Route coverage, availability and freight charges must be
            confirmed for each shipment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Bengaluru to {city}
                </span>

                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY BUSINESS AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Nearby areas
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Other Major Business Areas Around Bengaluru
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Need transport from another major business locality?
            Select an area below to submit an enquiry. Dedicated
            location pages will be linked here when they have been
            created and tested.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {nearbyAreas.map((area) => (
              <Link
                key={area}
                href="/contact"
                className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-medium text-slate-700 group-hover:text-teal-800">
                  {area}
                </span>

                <span className="shrink-0 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Why LOADZY
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            A Simpler Way to Explore Transport Options
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Share your shipment details, explore transport options and
            confirm the arrangements for your route.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📍",
              title: "Route Enquiries",
              text: "Share pickup and delivery details for your shipment.",
            },
            {
              icon: "🚚",
              title: "Different Load Needs",
              text: "Explore full load, part load and suitable truck options.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details, loading needs and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Use Cases",
              text: "Enquire about industrial goods, commercial stock, shifting and general cargo.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-3xl">{item.icon}</span>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING STEPS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How to Request Transport from Bengaluru
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Enter Locations",
                text: "Provide pickup and delivery addresses.",
              },
              {
                number: "02",
                title: "Share Load Details",
                text: "Choose your service, truck type and pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send your booking details through the enquiry form.",
              },
              {
                number: "04",
                title: "Confirm Details",
                text: "Confirm availability, freight charges and timing.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-extrabold tracking-widest text-[#08A99F]">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#08A99F] px-8 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Get Your Transport Price →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Bengaluru Transport — Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-9 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                <span>{faq.question}</span>

                <span className="text-xl text-[#08A99F] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#10182D] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-teal-300">
            LOADZY Transport
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Looking for Goods Transport in Bengaluru?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load
            requirements to enquire about suitable transport options
            for your shipment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Your Transport Price →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
            >
              Back to LOADZY Home
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            LOADZY — MOVE. CONNECT. DELIVER.
          </p>
        </div>
      </section>
    </main>
  );
}