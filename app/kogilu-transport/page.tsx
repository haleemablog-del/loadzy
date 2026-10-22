import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/kogilu-transport`;

export const metadata: Metadata = {
  title: "Kogilu Transport Service | Truck Booking | LOADZY",
  description:
    "Find goods transport and truck booking services in Kogilu, Bengaluru. Enquire about full load, part load, household shifting, commercial goods and industrial transport with LOADZY.",
  keywords: [
    "Kogilu transport service",
    "Kogilu truck booking",
    "Kogilu goods transport",
    "Kogilu lorry booking",
    "Kogilu logistics",
    "Kogilu full load transport",
    "Kogilu part load transport",
    "Kogilu household shifting",
    "Kogilu packers and movers",
    "Kogilu commercial transport",
    "Kogilu industrial transport",
    "Kogilu furniture transport",
    "Kogilu goods vehicle booking",
    "Kogilu Bengaluru transport",
    "North Bengaluru goods transport",
    "Yelahanka transport service",
    "Jakkur truck booking",
    "Thanisandra transport service",
    "Bengaluru truck booking",
    "Karnataka goods transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Kogilu Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from Kogilu and nearby urban localities in Bengaluru.",
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
      "Enquire about dedicated truck options for larger consignments requiring a full vehicle.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore options for smaller consignments that may not need an entire truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan the movement of furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Enquire about suitable vehicle arrangements for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Share your requirements for shop stock, business goods and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about suitable transport for machinery, industrial materials and business supplies.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Chennai",
  "Hosur",
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

const localities = [
  {
    name: "Yelahanka",
    famousFor:
      "Established northern Bengaluru urban locality with residential and commercial activity",
    goods:
      "Furniture, household belongings, office equipment and commercial stock.",
    href: "/yelahanka-transport",
  },
  {
    name: "Yelahanka New Town",
    famousFor:
      "Urban residential neighbourhood in northern Bengaluru",
    goods:
      "Household goods, appliances, furniture and packaged merchandise.",
    href: "/yelahanka-new-town-transport",
  },
  {
    name: "Jakkur",
    famousFor:
      "Northern Bengaluru urban locality with residential and business activity",
    goods:
      "Furniture, household belongings, office supplies and general cargo.",
    href: "/jakkur-transport",
  },
  {
    name: "Thanisandra",
    famousFor:
      "Urban residential and commercial growth in northern Bengaluru",
    goods:
      "Furniture, office equipment, household goods and commercial supplies.",
    href: "/thanisandra-transport",
  },
  {
    name: "Hebbal",
    famousFor:
      "Major northern Bengaluru area with important road connections and business activity",
    goods:
      "Office equipment, retail inventory, furniture and business supplies.",
    href: "/hebbal-transport",
  },
  {
    name: "Sahakara Nagar",
    famousFor:
      "Established urban neighbourhood with residential and local commercial activity",
    goods:
      "Household shifting goods, furniture, appliances and shop stock.",
    href: "/contact",
  },
  {
    name: "Amruthahalli",
    famousFor:
      "Residential neighbourhood and local business activity in northern Bengaluru",
    goods:
      "Furniture, household goods, appliances and commercial consignments.",
    href: "/contact",
  },
  {
    name: "Nagawara",
    famousFor:
      "Northern Bengaluru urban locality with residential and commercial activity",
    goods:
      "Office equipment, packaged goods, commercial stock and general cargo.",
    href: "/contact",
  },
  {
    name: "Manyata Tech Park",
    famousFor:
      "Major technology and office campus in northern Bengaluru",
    goods:
      "Office furniture, workplace equipment and business supplies.",
    href: "/contact",
  },
  {
    name: "Hennur",
    famousFor:
      "Urban residential and commercial area in northern Bengaluru",
    goods:
      "Furniture, household goods, shop stock and office equipment.",
    href: "/contact",
  },
  {
    name: "HBR Layout",
    famousFor:
      "Planned urban layout with residential and commercial activity",
    goods:
      "Household belongings, office supplies, furniture and retail products.",
    href: "/contact",
  },
  {
    name: "Kalyan Nagar",
    famousFor:
      "Established urban residential and commercial neighbourhood",
    goods:
      "Commercial inventory, furniture, household belongings and business supplies.",
    href: "/contact",
  },
];

const nearbyAreas = [
  "Yelahanka",
  "Yelahanka New Town",
  "Jakkur",
  "Thanisandra",
  "Hebbal",
  "Sahakara Nagar",
  "Amruthahalli",
  "Nagawara",
  "Manyata Tech Park",
  "Hennur",
  "HBR Layout",
  "Kalyan Nagar",
];

const faqs = [
  {
    question: "How can I book a truck in Kogilu?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit your enquiry and confirm vehicle availability, freight charges and pickup arrangements before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Kogilu?",
    answer:
      "Yes. You can submit an enquiry for full load transport. The suitable vehicle, availability and freight charges depend on your goods, route, load requirements and preferred pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, shipment size, timing and suitable transport options.",
  },
  {
    question: "Can I arrange household shifting from Kogilu?",
    answer:
      "You can enquire about moving furniture, appliances, cartons and other household belongings. Share your pickup and delivery addresses, preferred date and loading requirements.",
  },
  {
    question: "Can I transport commercial goods from Kogilu?",
    answer:
      "You can enquire about transporting suitable commercial goods, shop stock, office equipment, business supplies and general cargo. Provide accurate cargo details before confirming transport.",
  },
  {
    question: "Can I book transport from Kogilu to another city?",
    answer:
      "You can submit a transport enquiry for intercity and interstate routes. Truck availability, freight charges and pickup arrangements must be confirmed for your specific shipment.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, truck type, cargo weight and dimensions, loading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
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
  name: "Kogilu Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods, industrial transport and household shifting from Kogilu, Bengaluru, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Commercial goods transport",
    "Industrial transport",
    "Household shifting transport",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Kogilu, Bengaluru, Karnataka, India",
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
      name: "Bengaluru Transport",
      item: `${SITE_URL}/bengaluru-transport`,
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
      name: "Kogilu Transport",
      item: PAGE_URL,
    },
  ],
};

export default function KogiluTransportPage() {
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
                href="/bengaluru-transport"
                className="hover:text-teal-300"
              >
                Bengaluru Transport
              </Link>

              <span className="mx-2">/</span>

              <Link
                href="/bengaluru-urban-transport"
                className="hover:text-teal-300"
              >
                Bengaluru Urban
              </Link>

              <span className="mx-2">/</span>

              <span>Kogilu Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Kogilu Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Kogilu, Bengaluru?
              Explore LOADZY for full load, part load, commercial
              goods, industrial transport and household shifting
              enquiries for local and intercity routes.
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
                "Commercial Transport",
                "Industrial Goods",
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
          Goods Transport Services in Kogilu
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household belongings,
          office equipment, commercial stock, machinery and
          general cargo. Choose the service that matches your
          pickup, destination and load requirements.
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
              Transport and Truck Booking in Kogilu, Bengaluru
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Kogilu is an urban locality in northern Bengaluru.
              Transport needs in the area can include household
              moves, furniture delivery, office relocation,
              commercial deliveries and general goods movement.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Depending on the shipment, customers may need
              vehicles for furniture, household belongings,
              appliances, office equipment, retail inventory,
              packaged products and business supplies.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup
              and delivery addresses, goods description,
              approximate weight and dimensions, loading
              requirements and preferred pickup date. These
              details help determine a suitable vehicle and
              quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and
              intercity movement. Vehicle availability, freight
              charges and schedules depend on each booking and
              must be confirmed before transport.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">
              Prepare Before Booking
            </h3>

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

      {/* URBAN LOCALITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport in Kogilu and Nearby Urban Localities
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiries for major neighbourhoods
          and commercial areas around northern Bengaluru.
          Existing individual locality pages are linked directly.
          Other locations open the enquiry page until their pages
          are ready. No village pages are included.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {localities.map((locality) => (
            <Link
              key={locality.name}
              href={locality.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                  {locality.name} Transport
                </h3>

                <span className="text-xl text-[#08A99F]">↗</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                {locality.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                <span className="font-semibold text-slate-800">
                  Potential transport goods:
                </span>{" "}
                {locality.goods}
              </p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Enquire about {locality.name} transport →
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
            Major Destinations from Kogilu
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Kogilu to another city?
            Select a destination to submit a transport enquiry.
            Route coverage, vehicle availability and freight
            charges must be confirmed for each shipment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Kogilu to {city}
                </span>

                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Nearby urban areas
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Locations Around Kogilu
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Browse transport enquiries for Kogilu and nearby
            Bengaluru urban localities. Links open existing
            locality pages where available; the remaining
            locations open the enquiry page.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {nearbyAreas.map((area) => {
              const existingRoutes: Record<string, string> = {
                Yelahanka: "/yelahanka-transport",
                "Yelahanka New Town": "/yelahanka-new-town-transport",
                Jakkur: "/jakkur-transport",
                Thanisandra: "/thanisandra-transport",
                Hebbal: "/hebbal-transport",
              };

              return (
                <Link
                  key={area}
                  href={existingRoutes[area] || "/contact"}
                  className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
                >
                  <span className="font-medium text-slate-700 group-hover:text-teal-800">
                    {area}
                  </span>

                  <span className="shrink-0 text-[#08A99F]">→</span>
                </Link>
              );
            })}
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
            Share your shipment details, enquire about suitable
            transport options and confirm the arrangements for
            your route before booking.
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
              text: "Enquire about full load, part load and suitable truck options.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details and your preferred pickup date.",
            },
            {
              icon: "📦",
              title: "Multiple Use Cases",
              text: "Enquire about household goods, office equipment and commercial cargo.",
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
            How to Request Transport from Kogilu
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
                text: "Confirm availability, freight charges and pickup timing.",
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
            Kogilu Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Kogilu?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load
            requirements to enquire about suitable transport
            options for your shipment.
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