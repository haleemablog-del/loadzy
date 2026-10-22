import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-anekal-transport`;

export const metadata: Metadata = {
  title: "Anekal Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Anekal, Bengaluru Urban, Karnataka. Enquire about full load, part load, agricultural produce, household shifting and commercial transport with LOADZY.",
  keywords: [
    "Anekal transport service",
    "Anekal truck booking",
    "Anekal goods transport",
    "Anekal lorry booking",
    "Anekal logistics",
    "Anekal full load transport",
    "Anekal part load transport",
    "Anekal household shifting",
    "Anekal commercial transport",
    "Attibele transport service",
    "Chandapura truck booking",
    "Sarjapura goods transport",
    "Dommasandra transport service",
    "Anekal agricultural transport",
    "Anekal ragi transport",
    "Anekal to Chennai transport",
    "Anekal to Hosur truck booking",
    "Bengaluru goods transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Anekal Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for goods transport from Anekal and nearby settlements in Bengaluru Urban, Karnataka.",
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
    icon: "🌾",
    title: "Agricultural Goods Transport",
    description:
      "Share your requirements for suitable transport of farm produce and packaged agricultural goods.",
    href: "/contact",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Enquire about transporting shop stock, business supplies and commercial consignments.",
    href: "/commercial-transport",
  },
];

const destinations = [
  "Bengaluru",
  "Hosur",
  "Chennai",
  "Coimbatore",
  "Mysuru",
  "Tumakuru",
  "Salem",
  "Krishnagiri",
  "Vellore",
  "Tirupattur",
  "Hyderabad",
  "Pune",
];

const localities = [
  {
    name: "Anekal",
    famousFor:
      "Taluk headquarters, historic temples and agricultural connections",
    goods:
      "Ragi, other farm produce, household belongings, packaged products, shop stock and general cargo.",
  },
  {
    name: "Attibele",
    famousFor:
      "Town area, local commerce and connectivity towards the Karnataka–Tamil Nadu border",
    goods:
      "Commercial merchandise, household goods, packaged supplies, retail stock and general transport consignments.",
  },
  {
    name: "Chandapura",
    famousFor:
      "Growing residential area, local markets and road connectivity",
    goods:
      "Household shifting items, furniture, appliances, retail goods and general cargo.",
  },
  {
    name: "Sarjapura",
    famousFor:
      "Established village and town-area trade, residential growth and local temples",
    goods:
      "Household belongings, market supplies, farm produce and commercial consignments.",
  },
  {
    name: "Dommasandra",
    famousFor:
      "Local markets, residential development and connections towards Sarjapura",
    goods:
      "Packaged products, furniture, retail stock, household goods and general cargo.",
  },
  {
    name: "Neraluru",
    famousFor:
      "Local settlement, agricultural surroundings and regional road connectivity",
    goods:
      "Suitable farm produce, household goods, packaged merchandise and general commercial cargo.",
  },
  {
    name: "Muthanallur",
    famousFor:
      "Village settlement and surrounding agricultural activity",
    goods:
      "Farm produce, packaged agricultural goods, household belongings and local business supplies.",
  },
  {
    name: "Bidaraguppe",
    famousFor:
      "Village settlement and local trade in the Anekal area",
    goods:
      "Agricultural produce, retail supplies, packaged merchandise and general cargo.",
  },
  {
    name: "Huskur",
    famousFor:
      "Village settlement and surrounding agricultural activity",
    goods:
      "Suitable farm produce, household goods, local market supplies and commercial consignments.",
  },
  {
    name: "Haragadde",
    famousFor:
      "Village settlement and regional connectivity in Anekal taluk",
    goods:
      "Agricultural goods, packaged products, building supplies and general cargo.",
  },
  {
    name: "Hennagara",
    famousFor:
      "Local settlement, residential growth and regional trade",
    goods:
      "Household shifting goods, furniture, retail stock, packaged supplies and general consignments.",
  },
  {
    name: "Neriga",
    famousFor:
      "Village settlement and local community activity",
    goods:
      "Farm produce, household items, general merchandise and local business supplies.",
  },
  {
    name: "Gonighattapura",
    famousFor:
      "Village settlement and agricultural surroundings",
    goods:
      "Agricultural produce, packaged goods, household belongings and general commercial cargo.",
  },
  {
    name: "Byagadadenahalli",
    famousFor:
      "Village settlement and regional agricultural activity",
    goods:
      "Farm produce, shop supplies, packaged merchandise and general transport consignments.",
  },
  {
    name: "Ballur",
    famousFor:
      "Village settlement and local trade",
    goods:
      "Agricultural goods, household belongings, commercial stock and general cargo.",
  },
  {
    name: "Marsur",
    famousFor:
      "Local settlement and regional road connections",
    goods:
      "Household goods, retail supplies, packaged products and general commercial consignments.",
  },
  {
    name: "Indlabele",
    famousFor:
      "Village settlement and agricultural surroundings",
    goods:
      "Suitable farm produce, household goods, local market supplies and general cargo.",
  },
  {
    name: "Karpur",
    famousFor:
      "Village settlement and local community activity",
    goods:
      "Agricultural produce, packaged merchandise, household belongings and general supplies.",
  },
];

const nearbyAreas = [
  "Attibele",
  "Chandapura",
  "Sarjapura",
  "Dommasandra",
  "Neraluru",
  "Muthanallur",
  "Bidaraguppe",
  "Hennagara",
];

const faqs = [
  {
    question: "How can I book a truck in Anekal?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, required service, truck type and preferred pickup date. Submit your enquiry and confirm vehicle availability, freight charges and pickup arrangements before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Anekal?",
    answer:
      "Yes. You can submit an enquiry for full load transport. The suitable vehicle and quotation depend on your cargo, route, load dimensions, weight, pickup date and vehicle availability.",
  },
  {
    question: "Is part load transport available in Anekal?",
    answer:
      "You can submit a part load transport enquiry for smaller consignments. Suitable options depend on the destination, shipment size, timing and available transport arrangements.",
  },
  {
    question: "Can I enquire about agricultural goods transport from Anekal?",
    answer:
      "Yes. You can enquire about suitable transport for agricultural produce and other packaged goods. Share the type of goods, approximate quantity, packaging, pickup address and destination so the transport requirements can be reviewed.",
  },
  {
    question: "Can I book a truck from Anekal to Hosur?",
    answer:
      "You can submit a transport enquiry for Anekal to Hosur. Provide the pickup and delivery addresses, goods description, required truck type and pickup date. Vehicle availability and freight charges must be confirmed for your shipment.",
  },
  {
    question: "Can I arrange household shifting from Attibele or Chandapura?",
    answer:
      "You can enquire about household shifting from Attibele, Chandapura, Anekal and nearby localities. Share your pickup and delivery addresses, approximate belongings and preferred date so suitable arrangements can be considered.",
  },
  {
    question: "How are truck freight charges calculated?",
    answer:
      "Freight charges may depend on distance, truck type, cargo weight and dimensions, loading and unloading requirements, pickup schedule and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. An enquiry is a request for transport options, not a confirmed booking. Vehicle availability, freight charges, pickup schedule and other arrangements must be confirmed separately.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Anekal Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, agricultural produce, commercial goods and household shifting in Anekal taluk, Bengaluru Urban, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Truck booking",
    "Agricultural goods transport",
    "Commercial goods transport",
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
    name: "Anekal Taluk, Bengaluru Urban, Karnataka, India",
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
      name: "Anekal Transport",
      item: PAGE_URL,
    },
  ],
};

export default function BengaluruAnekalTransportPage() {
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

              <span>Anekal Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Anekal Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Anekal, Bengaluru Urban,
              Karnataka? Explore LOADZY for full load, part load,
              agricultural goods, household shifting and commercial
              transport enquiries across Anekal town and nearby settlements.
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
          Goods Transport Services in Anekal
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for farm produce, household belongings,
          packaged merchandise, business stock and other suitable
          consignments. Choose the service that matches your cargo, pickup,
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
              Transport and Truck Booking in Anekal, Karnataka
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Anekal is a taluk within Bengaluru Urban district. The
              district administration lists four hoblis and 224 villages
              under its Anekal block. The wider area includes the Anekal
              town area and many settlements with local residential,
              commercial and agricultural transport requirements.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Anekal is also associated with historic temples, including
              Thimmarayaswamy, Adinarayana, Amrita Mallikarjuna,
              Channakeshava and Bhavanishankara temples. Agricultural
              profiles for Bengaluru Urban identify ragi and other field
              crops among the region's agricultural products. Transport
              requirements may therefore include suitable farm produce,
              packaged goods, household belongings, shop stock and other
              commercial cargo.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Customers in Anekal, Attibele, Chandapura, Sarjapura,
              Dommasandra and nearby settlements can share pickup and
              delivery requirements through the LOADZY enquiry form.
              Include your goods description, approximate weight and
              dimensions, loading arrangements and preferred pickup date.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts enquiries for local and intercity transport.
              Vehicle availability, freight prices, route coverage and
              schedules depend on each shipment and must be confirmed
              before transport.
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

      {/* ANEKAL LOCALITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Truck Transport in Anekal and Nearby Settlements
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiries across selected Anekal-town and
          surrounding settlement names. Local needs may include agricultural
          produce, household shifting, shop supplies and general
          commercial cargo. Provide your exact pickup address to request
          suitable transport options.
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
            Major Destinations from Anekal
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Anekal to another town or city?
            Select a destination to start a transport enquiry. Share your
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
                  Anekal to {city}
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
            Nearby areas
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Locations Around Anekal
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Transport enquiries may include nearby town areas and
            settlements. Provide the precise pickup and delivery addresses
            when requesting a quotation. Vehicle availability, route
            coverage and final charges must be confirmed for each shipment.
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
              icon: "🌾",
              title: "Agricultural Goods",
              text: "Share the goods type, quantity and packaging requirements for review.",
            },
            {
              icon: "📦",
              title: "Local and Commercial Loads",
              text: "Enquire about household goods, shop supplies and general consignments.",
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
            How to Request Transport from Anekal
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
            Anekal Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Anekal?
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