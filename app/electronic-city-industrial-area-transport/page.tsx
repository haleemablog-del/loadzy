import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/electronic-city-industrial-area-transport`;

export const metadata: Metadata = {
  title: "Electronic City Industrial Area Transport | LOADZY",
  description:
    "Looking for truck booking in Electronic City Industrial Area, Bengaluru? Enquire about industrial goods transport, full load, part load, commercial transport and household shifting with LOADZY.",
  keywords: [
    "Electronic City Industrial Area transport",
    "Electronic City truck booking",
    "Electronic City goods transport",
    "Electronic City lorry booking",
    "Electronic City industrial transport",
    "Electronic City logistics",
    "Electronic City full load transport",
    "Electronic City part load transport",
    "Electronic City packers and movers",
    "Electronic City household shifting",
    "Electronic City commercial transport",
    "Electronic City to Chennai transport",
    "Electronic City to Coimbatore transport",
    "Chennai to Electronic City transport",
    "Hosur to Electronic City truck booking",
    "Bengaluru industrial goods transport",
    "Karnataka truck booking",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Electronic City Industrial Area Transport | LOADZY",
    description:
      "Submit a truck booking enquiry for industrial goods transport and other transport services from Electronic City Industrial Area, Bengaluru.",
    url: PAGE_URL,
    siteName: "LOADZY",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    icon: "🚛",
    title: "Full Load Transport",
    description:
      "Enquire about dedicated truck options for larger consignments and industrial goods.",
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
      "Share your requirements for moving business stock, packaged goods and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about transporting industrial materials, machinery, equipment and business supplies.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Chennai",
  "Coimbatore",
  "Salem",
  "Madurai",
  "Tiruppur",
  "Erode",
  "Tirunelveli",
  "Vellore",
  "Dindigul",
  "Thanjavur",
  "Tiruchirappalli",
  "Thoothukudi",
  "Karur",
  "Krishnagiri",
  "Ambur",
  "Tirupattur",
  "Vaniyambadi",
  "Hosur",
  "Mysuru",
  "Mangaluru",
  "Hubballi",
  "Belagavi",
  "Davangere",
  "Tumakuru",
  "Kochi",
  "Kozhikode",
  "Thrissur",
  "Palakkad",
  "Vijayawada",
  "Visakhapatnam",
  "Guntur",
  "Hyderabad",
  "Warangal",
  "Mumbai",
  "Pune",
  "Nagpur",
  "Ahmedabad",
  "Delhi",
];

const nearbyAreas = [
  {
    name: "Electronic City Phase 1",
    href: "/electronic-city-phase-1-transport",
    famousFor: "Technology campuses, offices and commercial activity",
    goods: "Office equipment, furniture, IT supplies and business consignments.",
  },
  {
    name: "Electronic City Phase 2",
    href: "/electronic-city-phase-2-transport",
    famousFor: "Technology parks and business establishments",
    goods: "Commercial stock, office furniture, equipment and packaged goods.",
  },
  {
    name: "Electronic City Phase 3",
    href: "/electronic-city-phase-3-transport",
    famousFor: "Business facilities and surrounding industrial activity",
    goods: "Business supplies, machinery, furniture and general cargo.",
  },
  {
    name: "Bommasandra Industrial Area",
    href: "/bommasandra-industrial-area-transport",
    famousFor: "Manufacturing and industrial establishments",
    goods: "Industrial materials, machinery, packaged products and supplies.",
  },
  {
    name: "Bommasandra 1st Stage",
    href: "/bommasandra-1st-stage-transport",
    famousFor: "Industrial and commercial activity",
    goods: "Factory materials, commercial goods and equipment.",
  },
  {
    name: "Veerasandra Industrial Area",
    href: "/veerasandra-industrial-area-transport",
    famousFor: "Industrial facilities and business operations",
    goods: "Manufacturing supplies, equipment and commercial consignments.",
  },
  {
    name: "Attibele",
    href: "/attibele-transport",
    famousFor: "Regional road connectivity and commercial activity",
    goods: "Packaged goods, business stock and general freight.",
  },
  {
    name: "Attibele Industrial Area",
    href: "/attibele-industrial-area-transport",
    famousFor: "Industrial and manufacturing activity",
    goods: "Factory supplies, equipment and commercial goods.",
  },
];

const faqs = [
  {
    question: "How can I book a truck in Electronic City Industrial Area?",
    answer:
      "Fill in the LOADZY transport enquiry form with your name, phone number, pickup and delivery locations, service type, truck type and preferred pickup date. Submit the enquiry and confirm truck availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I arrange industrial goods transport from Electronic City?",
    answer:
      "You can submit an enquiry for industrial goods, equipment, factory supplies and commercial consignments. Share the cargo description, approximate weight and dimensions, loading requirements, pickup location and destination.",
  },
  {
    question: "Can I enquire about full load and part load transport?",
    answer:
      "Yes. You can submit enquiries for full load and part load transport. Suitable vehicle options, availability, route coverage and freight charges depend on your shipment details and preferred pickup date.",
  },
  {
    question: "Can businesses transport machinery and equipment?",
    answer:
      "Businesses can enquire about transporting machinery, equipment, industrial materials and other commercial goods. Special handling or vehicle requirements should be discussed and confirmed before booking.",
  },
  {
    question: "Can I arrange household shifting from Electronic City?",
    answer:
      "You can enquire about household shifting and packers and movers services. Provide the pickup and delivery addresses, approximate quantity of belongings and preferred moving date.",
  },
  {
    question: "Can I transport goods from Electronic City to another city?",
    answer:
      "You can submit an enquiry for intercity goods transport to your chosen destination. Route coverage, truck availability, schedules and final freight charges must be confirmed for each shipment.",
  },
  {
    question: "How are truck freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, load weight and dimensions, loading and unloading requirements, pickup date and vehicle availability. Confirm the final quotation before booking.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. Submitting an enquiry does not automatically confirm a vehicle or price. Wait for confirmation of truck availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electronic City Industrial Area Goods Transport and Truck Booking",
  description:
    "Transport enquiries for industrial goods, full load, part load, commercial transport and household shifting from Electronic City Industrial Area, Bengaluru, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Industrial transport",
    "Commercial goods transport",
    "Household shifting transport",
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
    name: "Electronic City Industrial Area, Bengaluru, Karnataka, India",
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
      name: "Electronic City Industrial Area Transport",
      item: PAGE_URL,
    },
  ],
};

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

export default function ElectronicCityIndustrialAreaTransportPage() {
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
              <span>Electronic City Industrial Area Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Electronic City Industrial Area Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Electronic City Industrial Area,
              Bengaluru? Enquire with LOADZY about industrial consignments,
              full load, part load, commercial goods transport, machinery,
              equipment and household shifting for local and intercity routes.
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
                "Industrial Transport",
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
          Goods Transport Services in Electronic City Industrial Area
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for industrial materials, machinery,
          equipment, household belongings, business stock and packaged goods.
          Select the service that matches your pickup location, destination
          and load requirements.
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
              Industrial Goods Transport and Truck Booking in Electronic City,
              Bengaluru
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Electronic City is a major technology and business area in
              Bengaluru, with offices, commercial establishments and
              surrounding industrial activity. Transport requirements can
              include office equipment, furniture, packaged goods, industrial
              materials, machinery and general commercial consignments.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and delivery
              addresses, goods description, approximate weight and dimensions,
              loading requirements and preferred pickup date. For industrial
              shipments, mention any special vehicle, handling or access
              requirements.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, freight rates and schedules
              depend on each booking and must be confirmed before transport.
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

      {/* NEARBY LOCALITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Truck Transport in Electronic City and Nearby Bengaluru Areas
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport pages for selected nearby locations. These areas
          may have different requirements, from industrial consignments and
          commercial stock to office relocation and household goods.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700">
                  {area.name} Transport
                </h3>
                <span className="text-xl text-[#08A99F]">↗</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                {area.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">{area.goods}</p>

              <span className="mt-5 inline-flex font-bold text-teal-700">
                Explore {area.name} →
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
            Major Destinations from Electronic City Industrial Area
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Electronic City to another city?
            Choose a destination to submit a transport enquiry. Route coverage,
            vehicle availability and freight charges must be confirmed for
            each shipment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  Electronic City to {city}
                </span>
                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVERSE ROUTES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Return route enquiries
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Truck Transport to Electronic City from Major Cities
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Need to transport goods to Electronic City, Bengaluru? Submit an
            enquiry for shipments from Chennai, Coimbatore, Hosur, Mysuru and
            other major cities. Share your pickup location, cargo details and
            delivery requirements to enquire about suitable transport options.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                  {city} to Electronic City
                </span>

                <span className="ml-2 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#10182D] p-6 text-white md:p-8">
            <h3 className="text-xl font-bold md:text-2xl">
              Need a truck to Electronic City?
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Enquire about full load, part load, industrial goods transport,
              commercial consignments and household shifting from your city
              to Electronic City, Bengaluru. Truck availability and freight
              charges must be confirmed.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Enquire About Reverse Routes →
            </Link>
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
            Share your shipment details, enquire about suitable transport
            options and confirm the arrangements for your route.
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
              text: "Provide cargo details and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Use Cases",
              text: "Enquire about industrial goods, office items, household shifting and commercial consignments.",
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
            How to Request Transport from Electronic City Industrial Area
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Electronic City Industrial Area Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Electronic City Industrial Area?
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