import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-east-transport`;

export const metadata: Metadata = {
  title: "Bengaluru East Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in East Bengaluru. Enquire about full load, part load, household shifting, commercial transport and business goods with LOADZY.",
  keywords: [
    "Bengaluru East transport service",
    "East Bangalore transport service",
    "Bengaluru East truck booking",
    "East Bangalore goods transport",
    "Bengaluru East lorry booking",
    "Whitefield transport service",
    "KR Puram truck booking",
    "Mahadevapura goods transport",
    "Hoodi transport service",
    "Kadugodi truck booking",
    "Varthur goods transport",
    "Marathahalli transport service",
    "Brookefield truck booking",
    "Bengaluru full load transport",
    "Bengaluru part load transport",
    "Bengaluru household shifting",
    "Bengaluru commercial transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bengaluru East Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from East Bengaluru and nearby localities.",
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
      "Explore suitable transport options for smaller consignments that do not require an entire truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan the movement of household furniture, appliances, cartons and personal belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Enquire about vehicle arrangements for household and office relocation requirements.",
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
      "Enquire about suitable transport for machinery, equipment, materials and business supplies.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Chennai",
  "Hosur",
  "Coimbatore",
  "Mysuru",
  "Tumakuru",
  "Hubballi",
  "Belagavi",
  "Mangaluru",
  "Hyderabad",
  "Vijayawada",
  "Pune",
  "Mumbai",
];

const localities = [
  {
    name: "Whitefield",
    famousFor: "Technology workplaces, business activity and residential communities",
    goods:
      "Office equipment, furniture, packaged products, commercial stock and household goods.",
  },
  {
    name: "KR Puram",
    famousFor: "Major road and railway connectivity with local markets",
    goods:
      "Retail supplies, household belongings, furniture, construction materials and general cargo.",
  },
  {
    name: "Mahadevapura",
    famousFor: "Commercial offices, technology workplaces and retail activity",
    goods:
      "Office furniture, computers and peripherals, business supplies, packaged goods and commercial stock.",
  },
  {
    name: "Marathahalli",
    famousFor: "Commercial activity, offices, shopping and residential neighbourhoods",
    goods:
      "Office equipment, household shifting items, retail merchandise and business consignments.",
  },
  {
    name: "Hoodi",
    famousFor: "Residential development and access to nearby commercial areas",
    goods:
      "Furniture, household appliances, packaged goods, office supplies and general cargo.",
  },
  {
    name: "Kadugodi",
    famousFor: "Residential neighbourhoods and Whitefield-area connectivity",
    goods:
      "Household belongings, furniture, appliances, retail stock and commercial supplies.",
  },
  {
    name: "Varthur",
    famousFor: "Residential growth and local markets",
    goods:
      "Household shifting loads, furniture, packaged merchandise, construction supplies and general goods.",
  },
  {
    name: "Brookefield",
    famousFor: "Residential communities, offices and neighbourhood shopping",
    goods:
      "Office equipment, furniture, packaged products, business stock and household consignments.",
  },
  {
    name: "Doddanekkundi",
    famousFor: "Residential areas and nearby commercial workplaces",
    goods:
      "Office furniture, business equipment, household goods and commercial supplies.",
  },
  {
    name: "Garudachar Palya",
    famousFor: "Residential and commercial activity in the Mahadevapura area",
    goods:
      "Office supplies, packaged goods, furniture, retail stock and general commercial cargo.",
  },
  {
    name: "Ramamurthy Nagar",
    famousFor: "Residential communities, retail shops and local services",
    goods:
      "Household belongings, furniture, home appliances, shop stock and general goods.",
  },
  {
    name: "Horamavu",
    famousFor: "Residential neighbourhoods and local commercial services",
    goods:
      "House-shifting items, furniture, packaged goods, building supplies and business stock.",
  },
  {
    name: "Devasandra",
    famousFor: "Residential neighbourhood and local trade",
    goods:
      "Household goods, retail merchandise, packaged products and general transport consignments.",
  },
  {
    name: "Basavanapura",
    famousFor: "Residential communities and neighbourhood commerce",
    goods:
      "Furniture, appliances, household belongings, retail stock and commercial supplies.",
  },
  {
    name: "Vijinapura",
    famousFor: "Residential development and local business activity",
    goods:
      "Household shifting loads, furniture, packaged merchandise and general commercial goods.",
  },
  {
    name: "Kaggadasapura",
    famousFor: "Residential communities and neighbourhood businesses",
    goods:
      "Household goods, office furniture, appliances, retail stock and packaged supplies.",
  },
  {
    name: "CV Raman Nagar",
    famousFor: "Residential areas and established office and business locations",
    goods:
      "Office equipment, furniture, household belongings and commercial consignments.",
  },
  {
    name: "Bellandur",
    famousFor: "Residential communities, office campuses and commercial services",
    goods:
      "Office equipment, business supplies, household goods, retail stock and packaged products.",
  },
];

const nearbyAreas = [
  "ITPL and Whitefield Road",
  "Old Madras Road",
  "Outer Ring Road",
  "Varthur Road",
  "Hoodi",
  "Kadugodi",
  "Brookefield",
  "Doddanekkundi",
];

const faqs = [
  {
    question: "How can I book a truck in Bengaluru East?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, required service, truck type and preferred pickup date. Submit the enquiry and confirm vehicle availability, freight charges and pickup arrangements before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from East Bengaluru?",
    answer:
      "Yes. You can submit an enquiry for full load transport. The suitable vehicle and quotation depend on the cargo, route, load dimensions, weight, pickup date and vehicle availability.",
  },
  {
    question: "Is part load transport available in Bengaluru East?",
    answer:
      "You can submit a part load transport enquiry for smaller consignments. Suitable options depend on the destination, shipment size, timing and available transport arrangements.",
  },
  {
    question: "Can I arrange household shifting from Whitefield or KR Puram?",
    answer:
      "You can enquire about household shifting from Whitefield, KR Puram, Hoodi, Varthur and other East Bengaluru localities. Share the pickup and delivery addresses, approximate belongings and preferred date so suitable arrangements can be considered.",
  },
  {
    question: "Can I transport office equipment and business supplies?",
    answer:
      "You can enquire about moving suitable office equipment, furniture, business supplies, packaged products and commercial goods. Share the cargo details, quantity, packaging requirements, pickup location and destination.",
  },
  {
    question: "Can I book a truck from Bengaluru East to another state?",
    answer:
      "You can submit an enquiry for interstate transport. Provide the exact pickup and delivery locations, goods description, required truck and pickup date. Route coverage, vehicle availability and freight charges must be confirmed.",
  },
  {
    question: "How are truck freight charges calculated?",
    answer:
      "Freight charges may depend on distance, truck type, cargo weight and dimensions, loading and unloading requirements, pickup schedule and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. An enquiry is a request for transport options, not a confirmed booking. The vehicle, freight charges, pickup schedule and other arrangements must be confirmed separately.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bengaluru East Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, household shifting, commercial goods and business consignments in East Bengaluru, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Truck booking",
    "Commercial goods transport",
    "Industrial transport",
    "Household shifting",
    "Packers and movers",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "East Bengaluru, Karnataka, India",
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
      name: "Bengaluru East Transport",
      item: PAGE_URL,
    },
  ],
};

export default function BengaluruEastTransportPage() {
  const faqSchema = {
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
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
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

              <span>Bengaluru East Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Bengaluru East Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in East Bengaluru, Karnataka?
              Explore LOADZY for full load, part load, household shifting,
              office relocation and commercial transport enquiries from
              Whitefield, KR Puram, Mahadevapura, Hoodi, Marathahalli and
              nearby localities.
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
                "House Shifting",
                "Commercial Transport",
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
          Goods Transport Services in Bengaluru East
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household belongings, office
          equipment, business stock, packaged merchandise and other
          consignments. Choose a service that matches your cargo, pickup,
          destination and vehicle requirements.
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
              Transport and Truck Booking in East Bengaluru
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              East Bengaluru includes residential neighbourhoods, commercial
              offices, technology workplaces, shopping areas and local
              businesses. Depending on the shipment, customers may need
              transport for office furniture, business equipment, packaged
              goods, retail stock, household belongings and general cargo.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Customers in Whitefield, KR Puram, Mahadevapura, Hoodi,
              Kadugodi, Varthur, Brookefield and Marathahalli can share their
              pickup and delivery requirements through the LOADZY enquiry
              form. Include the goods description, approximate weight and
              dimensions, loading arrangements and preferred pickup date.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts enquiries for local and intercity transport.
              Truck availability, vehicle suitability, freight prices and
              schedules depend on each shipment and must be confirmed before
              transport.
            </p>
          </div>

          <div className="rounded-3xl bg-[#10182D] p-7 text-white md:p-9">
            <h3 className="text-2xl font-bold">Prepare Before Booking</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Pickup and delivery addresses",
                "Goods description and approximate load size",
                "Required truck type or carrying capacity",
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

      {/* EAST BENGALURU LOCALITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Truck Transport in Bengaluru East Localities
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiry coverage across selected East Bengaluru
          localities. Each area has different residential, retail and
          business transport requirements. Share your exact address and
          cargo details to enquire about suitable transport arrangements.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {localities.map((locality) => (
            <Link
              key={locality.name}
              href="/contact"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                  {locality.name} Transport
                </h3>

                <span className="text-xl text-[#08A99F]">↗</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                Famous for: {locality.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Potential transport needs include {locality.goods.toLowerCase()}
              </p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Enquire about transport →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Intercity transport
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Major Destinations from Bengaluru East
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from East Bengaluru to another city?
            Choose a destination to start a transport enquiry. Share the
            shipment details so the route, suitable vehicle and freight
            quotation can be reviewed.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Bengaluru East to {city}
                </span>

                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS AND CORRIDORS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Nearby areas
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Locations and Transport Corridors
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Transport enquiries may include neighbouring localities and
            major road corridors connecting East Bengaluru. Provide the
            precise pickup and delivery addresses when requesting a
            quotation. Coverage and vehicle availability must be confirmed
            for each route.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
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
            Share your shipment requirements, enquire about suitable truck
            options and confirm the arrangements for your route.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📍",
              title: "Route Enquiries",
              text: "Share your pickup and delivery details for a transport enquiry.",
            },
            {
              icon: "🚚",
              title: "Different Load Needs",
              text: "Enquire about full load, part load and suitable truck options.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details, loading needs and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Use Cases",
              text: "Enquire about household shifting, office equipment and commercial consignments.",
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

              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
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
            How to Request Transport from Bengaluru East
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Enter Locations",
                text: "Provide the pickup and delivery addresses.",
              },
              {
                number: "02",
                title: "Share Load Details",
                text: "Choose the service, truck type and pickup date.",
              },
              {
                number: "03",
                title: "Submit Enquiry",
                text: "Send the details through the transport enquiry form.",
              },
              {
                number: "04",
                title: "Confirm Details",
                text: "Confirm truck availability, freight charges and timing.",
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Bengaluru East Transport — Frequently Asked Questions
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
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#10182D] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-teal-300">
            LOADZY Transport
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Looking for Goods Transport from Bengaluru East?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and cargo requirements
            to enquire about suitable transport options for your shipment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Book a Truck →
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-8 py-4 font-bold text-white transition hover:border-[#08A99F] hover:bg-white/5"
            >
              Get Your Transport Price
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