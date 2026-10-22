import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-rural-transport`;

export const metadata: Metadata = {
  title: "Bengaluru Rural Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Bengaluru Rural, Karnataka. Enquire about silk, agricultural produce, industrial goods, full load, part load and commercial transport with LOADZY.",
  keywords: [
    "Bengaluru Rural transport service",
    "Bangalore Rural truck booking",
    "Bengaluru Rural goods transport",
    "Bengaluru Rural lorry booking",
    "Devanahalli transport service",
    "Doddaballapura goods transport",
    "Doddaballapura silk transport",
    "Hoskote truck booking",
    "Nelamangala transport service",
    "Vijayapura Karnataka transport",
    "Bengaluru Rural industrial transport",
    "Bengaluru Rural agricultural transport",
    "Full load transport Bengaluru Rural",
    "Part load transport Bengaluru Rural",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bengaluru Rural Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for agricultural, silk, industrial, commercial and household goods transport across Bengaluru Rural, Karnataka.",
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
      "Enquire about dedicated truck options for larger consignments, commercial dispatches and goods requiring a full vehicle.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Enquire about transport options for smaller consignments that may not require an entire truck.",
    href: "/part-load",
  },
  {
    icon: "🌾",
    title: "Agricultural Goods Transport",
    description:
      "Share your requirements for suitable farm produce, grains, horticultural goods and other agricultural consignments.",
    href: "/contact",
  },
  {
    icon: "🧵",
    title: "Silk and Textile Transport",
    description:
      "Enquire about moving silk sarees, handloom products, fabric bundles and other suitably packed textile goods.",
    href: "/contact",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Share your requirements for moving shop stock, business supplies, packaged merchandise and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about transporting manufacturing inputs, components, machinery, equipment and factory supplies.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Bengaluru",
  "Hosur",
  "Chennai",
  "Krishnagiri",
  "Coimbatore",
  "Mysuru",
  "Hubballi",
  "Belagavi",
  "Mangaluru",
  "Hyderabad",
  "Vijayawada",
  "Tirupati",
];

const towns = [
  {
    name: "Devanahalli",
    slug: "devanahalli",
    taluk: "Devanahalli Taluk",
    famousFor:
      "Devanahalli Fort, Kempegowda International Airport and Devanahalli pomelo",
    goods:
      "Pomelo and other produce, packaged goods, commercial supplies, airport-related business cargo and general consignments.",
  },
  {
    name: "Doddaballapura",
    slug: "doddaballapura",
    taluk: "Doddaballapura Taluk",
    famousFor:
      "Silk sarees, silk weaving, textile trade and manufacturing",
    goods:
      "Silk sarees, textile bundles, handloom products, machinery, manufacturing materials and shop stock.",
  },
  {
    name: "Hoskote",
    slug: "hoskote",
    taluk: "Hoskote Taluk",
    famousFor:
      "Regional trade, agriculture, local markets and surrounding factory activity",
    goods:
      "Agricultural produce, packaged products, industrial supplies, shop stock and commercial goods.",
  },
  {
    name: "Nelamangala",
    slug: "nelamangala",
    taluk: "Nelamangala Taluk",
    famousFor:
      "Regional commerce, agriculture, handloom activity and small and large industries",
    goods:
      "Textiles, agricultural products, commercial stock, building supplies and industrial consignments.",
  },
  {
    name: "Vijayapura",
    slug: "vijayapura-karnataka",
    taluk: "Devanahalli Taluk",
    famousFor:
      "Local markets, regional trade and surrounding agricultural activity",
    goods:
      "Agricultural produce, handloom goods, market supplies, packaged merchandise and general cargo.",
  },
];

const nearbyAreas = [
  {
    name: "Sulibele",
    taluk: "Hoskote Taluk",
    famousFor: "Local trade and agricultural activity",
  },
  {
    name: "Nandagudi",
    taluk: "Hoskote Taluk",
    famousFor: "Regional village markets and farming activity",
  },
  {
    name: "Doddabelavangala",
    taluk: "Doddaballapura Taluk",
    famousFor: "Rural commerce and agricultural activity",
  },
  {
    name: "Thubagere",
    taluk: "Doddaballapura Taluk",
    famousFor: "Local markets and agricultural activity",
  },
  {
    name: "Thyamagondlu",
    taluk: "Nelamangala Taluk",
    famousFor: "Local trade and surrounding agricultural activity",
  },
  {
    name: "Sompura",
    taluk: "Nelamangala Taluk",
    famousFor: "Regional commerce and industrial surroundings",
  },
  {
    name: "Channarayapatna",
    taluk: "Devanahalli Taluk",
    famousFor: "Local settlement and agricultural activity",
  },
  {
    name: "Kundana",
    taluk: "Devanahalli Taluk",
    famousFor: "Local village markets and regional activity",
  },
];

const industrialHubs = [
  {
    name: "Obadenahalli Industrial Area",
    area: "Doddaballapura — Third Phase",
    famousFor:
      "An industrial area identified in Karnataka industrial development records",
    goods:
      "Manufactured products, machinery, industrial components, factory inputs and commercial consignments.",
  },
  {
    name: "Aadinarayanahosahalli Industrial Area",
    area: "Doddaballapura — Fourth Phase",
    famousFor:
      "An industrial area identified in Karnataka industrial development records",
    goods:
      "Industrial materials, manufacturing equipment, packaged products and factory supplies.",
  },
  {
    name: "Hitech Defence and Aerospace Park — Aerospace Sector",
    area: "Bengaluru Rural district industrial coverage",
    famousFor:
      "Aerospace-sector industrial development listed for Bengaluru Rural",
    goods:
      "Suitable industrial components, equipment, packaged materials and commercial freight, subject to site rules.",
  },
  {
    name: "Doddaballapura Manufacturing Cluster",
    area: "Doddaballapura",
    famousFor:
      "Silk weaving, textiles, manufacturing and small- and large-scale industries",
    goods:
      "Silk products, fabrics, manufacturing inputs, equipment and commercial stock.",
  },
  {
    name: "Hoskote Factory and Commercial Belt",
    area: "Hoskote",
    famousFor:
      "Factories, local trade and commercial activity around Hoskote",
    goods:
      "Industrial supplies, packaged products, machinery, agricultural goods and commercial stock.",
  },
  {
    name: "Nelamangala Industrial and Logistics Corridor",
    area: "Nelamangala",
    famousFor:
      "Industrial activity and access to regional road transport corridors",
    goods:
      "Factory materials, commercial goods, equipment and general freight.",
  },
];

const businessHubs = [
  {
    name: "Kempegowda International Airport area",
    area: "Devanahalli",
    description:
      "An important airport and business gateway. Deliveries must follow the destination facility's access, security and cargo-handling rules.",
    goods:
      "Suitable commercial supplies, packaged goods, office equipment and approved business consignments.",
  },
  {
    name: "Doddaballapura silk and textile trade",
    area: "Doddaballapura",
    description:
      "A significant local textile and silk-weaving activity identified by the district administration.",
    goods:
      "Silk sarees, handloom products, fabric bundles, textile inputs and packaged merchandise.",
  },
  {
    name: "Devanahalli horticulture and produce trade",
    area: "Devanahalli",
    description:
      "The district identifies Devanahalli pomelo as a distinctive local product and describes agriculture and horticulture as important activities.",
    goods:
      "Pomelo and other suitable produce, farm supplies and packaged agricultural goods.",
  },
  {
    name: "Bengaluru Rural agricultural markets",
    area: "Across the district's four taluks",
    description:
      "Agricultural activity includes ragi, fodder maize, red gram, cowpea, field bean and other crops.",
    goods:
      "Suitable grains, pulses, farm produce, agricultural inputs and packaged farm supplies.",
  },
];

const faqs = [
  {
    question: "How can I book a truck in Bengaluru Rural?",
    answer:
      "Fill in the transport enquiry form with your name, mobile number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit your enquiry and confirm vehicle availability and freight charges before finalising the booking.",
  },
  {
    question: "Which towns are included on this Bengaluru Rural page?",
    answer:
      "This page covers the main urban local bodies of Devanahalli, Doddaballapura, Hoskote, Nelamangala and Vijayapura, along with selected nearby areas. Individual location pages can be added as they are completed and checked.",
  },
  {
    question: "Can I enquire about silk and textile transport from Doddaballapura?",
    answer:
      "You can submit an enquiry for suitably packed silk sarees, textiles, handloom products and related commercial goods. Share the shipment quantity, packaging, pickup address and destination so suitable transport arrangements can be considered.",
  },
  {
    question: "Can I transport agricultural goods from Devanahalli or Hoskote?",
    answer:
      "You can enquire about suitable agricultural produce and farm-related goods. Provide the type of produce, quantity, packaging, pickup date and destination so the transport requirements can be reviewed.",
  },
  {
    question: "Can I enquire about industrial transport in Bengaluru Rural?",
    answer:
      "You can submit enquiries for suitable factory supplies, manufacturing materials, equipment and commercial consignments. The correct vehicle and handling arrangements depend on the cargo, dimensions, route and site requirements.",
  },
  {
    question: "Can I request transport from Bengaluru Rural to Chennai or Hosur?",
    answer:
      "You can submit an enquiry for Bengaluru Rural to Chennai, Hosur and other destinations. Share the exact pickup and delivery addresses, cargo details and preferred pickup date. Freight charges and vehicle availability must be confirmed.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on route distance, truck type, cargo weight and dimensions, loading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does an enquiry guarantee a truck?",
    answer:
      "No. Submitting an enquiry does not automatically confirm a vehicle or freight price. Wait for confirmation of vehicle availability, charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bengaluru Rural Goods Transport and Truck Booking",
  description:
    "Transport enquiries for silk and textile goods, agricultural produce, industrial materials, commercial consignments, full load, part load and household shifting in Bengaluru Rural, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Agricultural goods transport",
    "Silk and textile transport",
    "Industrial transport",
    "Commercial goods transport",
    "Household shifting transport",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Bengaluru Rural, Karnataka, India",
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
      name: "Bengaluru Rural Transport",
      item: PAGE_URL,
    },
  ],
};

export default function BengaluruRuralTransportPage() {
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
                href="/karnataka-truck-transport"
                className="hover:text-teal-300"
              >
                Karnataka Transport
              </Link>
              <span className="mx-2">/</span>
              <span>Bengaluru Rural</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Bengaluru Rural Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Bengaluru Rural, Karnataka?
              Enquire about agricultural produce, silk and textile goods,
              industrial materials, commercial freight, full load, part load
              and household shifting for local and intercity routes.
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
                "Agricultural Goods",
                "Silk and Textiles",
                "Industrial Transport",
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
          Goods Transport Services in Bengaluru Rural
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Bengaluru Rural includes agricultural production, silk and textile
          activity, regional markets and industrial businesses. Choose the
          service that matches your shipment and share the exact pickup,
          destination and load requirements.
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
              Bengaluru Rural Industries, Agriculture and Transport
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bengaluru Rural district comprises Devanahalli, Doddaballapura,
              Hoskote and Nelamangala taluks. Its economy includes agriculture,
              horticulture, sericulture, silk weaving, regional trade and
              industrial activity. Kempegowda International Airport is also
              located in the Devanahalli area.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Doddaballapura is associated with silk and textile production.
              Devanahalli is known for its pomelo, while agricultural activity
              across the district includes ragi, fodder maize, red gram, cowpea
              and field bean. Transport requirements depend on the exact goods,
              quantity, packaging and destination.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The district also has industrial locations, including the
              Doddaballapura industrial phases and the aerospace-sector
              development listed in Karnataka industrial records. Customers
              moving machinery, factory supplies or manufactured products
              should share cargo dimensions and loading details before a
              vehicle is selected.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the pickup and delivery
              addresses, goods description, approximate weight and dimensions,
              loading requirements and preferred pickup date. LOADZY accepts
              transport enquiries; availability, charges and schedules must be
              confirmed for each shipment.
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
                <li key={item} className="flex gap-3 leading-6 text-slate-200">
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

      {/* TOWNS IN BENGALURU RURAL */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport in Bengaluru Rural Towns
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          The district administration lists five urban local bodies:
          Devanahalli, Doddaballapura, Hoskote, Nelamangala and Vijayapura.
          These cards provide an initial location directory. Individual
          transport pages will be connected as they are created and tested.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {towns.map((town) => (
            <div
              key={town.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {town.name} Transport
                </h3>

                <span className="text-xl text-[#08A99F]" aria-hidden="true">
                  ↗
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-teal-700">
                {town.taluk}
              </p>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                Famous for: {town.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">{town.goods}</p>

              <Link
                href="/contact"
                className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
              >
                Enquire about {town.name} transport →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Additional local coverage
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Settlements and Local Markets
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            The following settlements are listed as additional locations to
            track within the district's taluks. They are separate from the five
            urban local bodies above. We can add individual pages after
            verifying the place details and checking for existing URLs.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {area.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-teal-700">
                  {area.taluk}
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  {area.famousFor}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
                >
                  Enquire about transport →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAL HUBS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Industrial freight
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Industrial Areas and Manufacturing Hubs
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Bengaluru Rural has named industrial locations as well as established
          manufacturing and commercial clusters. The entries below distinguish
          identified industrial phases from broader industry corridors. We
          will verify individual estate boundaries and official names before
          creating a standalone page for each location.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industrialHubs.map((hub) => (
            <div
              key={hub.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-3xl">
                🏭
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {hub.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-teal-700">
                Location: {hub.area}
              </p>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                Famous for: {hub.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">{hub.goods}</p>

              <Link
                href="/contact"
                className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
              >
                Enquire about industrial transport →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS AND LOGISTICS HUBS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Local goods and business
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Important Business and Transport Hubs
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            These entries focus on goods and business activity that may create
            transport requirements across the district.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {businessHubs.map((hub) => (
              <div
                key={hub.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {hub.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-teal-700">
                  Area: {hub.area}
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  {hub.description}
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Potential transport goods: {hub.goods}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
                >
                  Enquire about transport →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAJOR DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Intercity transport
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Major Destinations from Bengaluru Rural
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Planning to move goods from Bengaluru Rural to another city? Select
          a destination to submit a transport price enquiry. Route coverage,
          vehicle availability and freight charges must be confirmed for each
          shipment.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {destinations.map((city) => (
            <Link
              key={city}
              href="/contact"
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                Bengaluru Rural to {city}
              </span>

              <span className="ml-2 text-[#08A99F]" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY LOADZY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Why LOADZY
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              A Simpler Way to Explore Transport Options
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Share your shipment details, explain your requirements and
              confirm a suitable transport arrangement for your route.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "📍",
                title: "Route Enquiries",
                text: "Share exact pickup and delivery details for your shipment.",
              },
              {
                icon: "🚚",
                title: "Load Options",
                text: "Enquire about full load, part load and suitable truck types.",
              },
              {
                icon: "🏭",
                title: "Business Freight",
                text: "Discuss factory supplies, manufacturing goods and commercial stock.",
              },
              {
                icon: "🌾",
                title: "Local Goods",
                text: "Enquire about suitable agricultural produce, silk products and other consignments.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING STEPS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          How it works
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          How to Request Transport from Bengaluru Rural
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

              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
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
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Bengaluru Rural Transport — Frequently Asked Questions
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

                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#10182D] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-teal-300">
            LOADZY Transport
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Looking for Goods Transport in Bengaluru Rural?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements to
            enquire about suitable transport options for your shipment.
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