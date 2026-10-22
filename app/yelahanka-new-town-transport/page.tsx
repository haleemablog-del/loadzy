import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/yelahanka-new-town-transport`;

export const metadata: Metadata = {
  title: "Yelahanka New Town Transport | Truck Booking | LOADZY",
  description:
    "Find goods transport and truck booking options in Yelahanka New Town, Bengaluru. Enquire about full load, part load, household shifting, commercial goods and industrial transport with LOADZY.",
  keywords: [
    "Yelahanka New Town transport",
    "Yelahanka New Town truck booking",
    "Yelahanka New Town goods transport",
    "Yelahanka New Town lorry booking",
    "Yelahanka New Town logistics",
    "Yelahanka New Town full load transport",
    "Yelahanka New Town part load transport",
    "Yelahanka New Town household shifting",
    "Yelahanka New Town packers and movers",
    "Yelahanka New Town commercial transport",
    "Yelahanka New Town industrial transport",
    "Yelahanka furniture transport",
    "Yelahanka goods vehicle booking",
    "Yelahanka transport service",
    "North Bengaluru goods transport",
    "Bengaluru truck booking",
    "Karnataka goods transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Yelahanka New Town Transport | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from Yelahanka New Town and nearby Bengaluru urban localities.",
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
      "Enquire about dedicated truck options for larger consignments that require a full vehicle.",
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
      "Enquire about vehicle arrangements for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Share your requirements for shop stock, office goods and commercial consignments.",
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
      "Established northern Bengaluru locality with residential, institutional and commercial activity",
    goods:
      "Office equipment, furniture, retail stock, household belongings and general cargo.",
    href: "/yelahanka-transport",
  },
  {
    name: "Yelahanka Old Town",
    famousFor:
      "Established neighbourhood with local markets and residential activity",
    goods:
      "Household goods, furniture, shop stock and packaged merchandise.",
    href: "/contact",
  },
  {
    name: "Jakkur",
    famousFor:
      "Northern Bengaluru residential area with local commercial activity",
    goods:
      "Furniture, appliances, office supplies and general consignments.",
    href: "/contact",
  },
  {
    name: "Thanisandra",
    famousFor:
      "Residential and commercial growth in northern Bengaluru",
    goods:
      "Household goods, furniture, building supplies and commercial stock.",
    href: "/contact",
  },
  {
    name: "Hebbal",
    famousFor:
      "Major northern Bengaluru area with road connections and business activity",
    goods:
      "Office equipment, retail inventory, packaged products and general cargo.",
    href: "/contact",
  },
  {
    name: "Sahakara Nagar",
    famousFor:
      "Residential neighbourhoods and local commercial services",
    goods:
      "Furniture, household belongings, shop stock and office supplies.",
    href: "/contact",
  },
  {
    name: "Vidyaranyapura",
    famousFor:
      "Established residential neighbourhood in north Bengaluru",
    goods:
      "Furniture, appliances, household shifting goods and commercial supplies.",
    href: "/contact",
  },
  {
    name: "Kogilu",
    famousFor:
      "Northern Bengaluru residential development and neighbourhood commerce",
    goods:
      "Household goods, packaged products, furniture and building materials.",
    href: "/contact",
  },
  {
    name: "Amruthahalli",
    famousFor:
      "Urban residential development and local business activity",
    goods:
      "Household goods, furniture, shop supplies and general cargo.",
    href: "/contact",
  },
  {
    name: "Kodigehalli",
    famousFor:
      "Established Bengaluru neighbourhood with residential and commercial activity",
    goods:
      "Retail stock, furniture, household belongings and business supplies.",
    href: "/contact",
  },
  {
    name: "Byatarayanapura",
    famousFor:
      "Urban residential and commercial activity in northern Bengaluru",
    goods:
      "Furniture, appliances, shop stock and general transport consignments.",
    href: "/contact",
  },
  {
    name: "Doddabommasandra",
    famousFor:
      "Residential neighbourhood and local commercial services",
    goods:
      "Household shifting goods, furniture, retail products and office supplies.",
    href: "/contact",
  },
];

const nearbyAreas = [
  "Yelahanka",
  "Yelahanka Old Town",
  "Jakkur",
  "Thanisandra",
  "Hebbal",
  "Sahakara Nagar",
  "Vidyaranyapura",
  "Kogilu",
  "Amruthahalli",
  "Kodigehalli",
  "Byatarayanapura",
  "Doddabommasandra",
];

const faqs = [
  {
    question: "How can I book a truck in Yelahanka New Town?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit your enquiry and confirm vehicle availability, freight charges and pickup arrangements before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Yelahanka New Town?",
    answer:
      "Yes, you can submit an enquiry for full load transport. The suitable vehicle, availability and freight charges depend on your cargo, route, load requirements and preferred pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, shipment size, timing and suitable transport options.",
  },
  {
    question: "Can I arrange household shifting from Yelahanka New Town?",
    answer:
      "You can enquire about moving furniture, appliances, cartons and other household belongings. Share the pickup and delivery addresses, your preferred date and any loading requirements.",
  },
  {
    question: "Can I transport commercial goods from Yelahanka New Town?",
    answer:
      "You can enquire about moving suitable commercial goods, shop stock, office equipment, packaged merchandise and general cargo. Provide accurate cargo details and delivery information when submitting your enquiry.",
  },
  {
    question: "Can I book transport from Yelahanka New Town to another city?",
    answer:
      "You can submit a transport enquiry for intercity and interstate routes. Vehicle availability, freight price and pickup arrangements must be confirmed for your specific shipment.",
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
  name: "Yelahanka New Town Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, household shifting, commercial goods and industrial transport from Yelahanka New Town, Bengaluru, Karnataka.",
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
    name: "Yelahanka New Town, Bengaluru, Karnataka, India",
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
      name: "Yelahanka New Town Transport",
      item: PAGE_URL,
    },
  ],
};

export default function YelahankaNewTownTransportPage() {
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

              <span>Yelahanka New Town</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Yelahanka New Town Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Yelahanka New Town,
              Bengaluru? Explore LOADZY for full load, part load,
              household shifting, commercial goods and industrial
              transport enquiries for local and intercity routes.
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
                "Household Shifting",
                "Commercial Transport",
                "Industrial Goods",
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
          Goods Transport Services in Yelahanka New Town
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household belongings,
          commercial stock, office equipment, machinery and general
          cargo. Select the service that matches your pickup,
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
              Transport and Truck Booking in Yelahanka New Town, Bengaluru
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Yelahanka New Town is an urban residential locality
              in the northern part of Bengaluru. Residents and
              businesses may need transport for household moves,
              furniture, appliances, office equipment, retail
              inventory and other commercial consignments.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Customers planning a move or goods shipment can
              provide their pickup and delivery addresses, goods
              description, approximate weight and dimensions,
              loading requirements and preferred pickup date.
              These details help identify a suitable vehicle
              and request a quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and
              intercity movement. Vehicle availability, freight
              charges and schedules depend on the individual
              shipment and must be confirmed before transport.
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

      {/* NEARBY URBAN LOCALITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport in Yelahanka New Town and Nearby Urban Localities
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport information for Yelahanka and other
          recognised urban neighbourhoods in Bengaluru. These are
          locality references, not a list of villages. Other
          locality links will point to the enquiry page until their
          individual transport pages are ready.
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
            Major Destinations from Yelahanka New Town
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Moving goods from Yelahanka New Town to another city?
            Choose a destination to open the enquiry page and
            share your route and cargo details. Route coverage,
            vehicle availability and freight charges must be
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
                  Yelahanka New Town to {city}
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
            Nearby Bengaluru Localities
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Submit transport enquiries for Yelahanka and nearby
            urban neighbourhoods. These cards use the enquiry
            page until the relevant individual locality pages
            are created.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {nearbyAreas.map((area) => (
              <Link
                key={area}
                href={area === "Yelahanka" ? "/yelahanka-transport" : "/contact"}
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
              text: "Enquire about household goods, commercial stock and general cargo.",
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
            How to Request Transport from Yelahanka New Town
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
            Yelahanka New Town Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Yelahanka New Town?
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