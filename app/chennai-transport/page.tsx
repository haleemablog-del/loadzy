import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/chennai-transport`;

export const metadata: Metadata = {
  title: "Chennai Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services in Chennai. Enquire about full load, part load, household shifting, packers and movers, commercial and industrial transport with LOADZY.",
  keywords: [
    "Chennai transport service",
    "Chennai truck booking",
    "Chennai lorry booking",
    "Chennai goods transport",
    "Chennai full load transport",
    "Chennai part load transport",
    "Chennai house shifting",
    "Chennai packers and movers",
    "Chennai commercial transport",
    "Chennai industrial transport",
    "Chennai to Bangalore transport",
    "Chennai to Coimbatore transport",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Chennai Transport Service | Truck Booking | LOADZY",
    description:
      "Submit your truck booking and goods transport enquiry in Chennai with LOADZY.",
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
      "Enquire about dedicated truck options for larger consignments and goods requiring a full vehicle.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Explore transport options for smaller consignments that may not require a full truck.",
    href: "/part-load",
  },
  {
    icon: "🏠",
    title: "House Shifting",
    description:
      "Plan the transportation of furniture, appliances, cartons and household belongings.",
    href: "/house-shifting",
  },
  {
    icon: "🧰",
    title: "Packers and Movers",
    description:
      "Enquire about transport arrangements for household and office relocation.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Request transport for shop stock, business goods and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Share your requirements for moving materials, equipment and industrial goods.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Bangalore",
  "Coimbatore",
  "Vellore",
  "Tirupattur",
  "Hosur",
  "Salem",
  "Madurai",
  "Tiruchirappalli",
  "Tirunelveli",
  "Erode",
  "Hyderabad",
  "Tirupati",
  "Kochi",
  "Mysore",
  "Krishnagiri",
  "Dharmapuri",
];

const chennaiAreas = [
  { name: "Pammal", slug: "pammal" },
  { name: "Anna Nagar", slug: "anna-nagar" },
  { name: "T Nagar", slug: "t-nagar" },
  { name: "Tambaram", slug: "tambaram" },
  { name: "Chromepet", slug: "chromepet" },
  { name: "Pallavaram", slug: "pallavaram" },
  { name: "Porur", slug: "porur" },
  { name: "Guindy", slug: "guindy" },
  { name: "Velachery", slug: "velachery" },
  { name: "Madhavaram", slug: "madhavaram" },
  { name: "Perambur", slug: "perambur" },
  { name: "Sholinganallur", slug: "sholinganallur" },
  { name: "Kodambakkam", slug: "kodambakkam" },
  { name: "Mylapore", slug: "mylapore" },
  { name: "Egmore", slug: "egmore" },
  { name: "Koyambedu", slug: "koyambedu" },
];

const faqs = [
  {
    question: "How can I book a truck in Chennai?",
    answer:
      "Complete the transport enquiry form with your name, phone number, pickup and delivery locations, service, truck type and pickup date. Submit the enquiry and confirm vehicle availability, freight charges and pickup arrangements before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport in Chennai?",
    answer:
      "You can submit an enquiry for full load transport. Vehicle suitability, availability and freight charges depend on your goods, route and pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, load size, timing and suitable transport options.",
  },
  {
    question: "Can I arrange house shifting in Chennai?",
    answer:
      "You can submit a household shifting enquiry for your move. Provide your pickup and delivery locations, preferred moving date and details about your belongings.",
  },
  {
    question: "Can I enquire about transport from Chennai to Bangalore?",
    answer:
      "You can submit a transport enquiry for Chennai to Bangalore. Truck type, price and pickup schedule must be confirmed for your particular shipment.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, truck type, load weight and dimensions, loading requirements, pickup date and availability. Confirm the final quotation before booking.",
  },
  {
    question: "Can I request a return load?",
    answer:
      "You can enquire about return-load options for your route. Availability is not guaranteed and depends on suitable trucks and matching loads.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "Submitting an enquiry does not automatically confirm a vehicle or price. Wait for confirmation of truck availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chennai Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods, industrial transport and household shifting in Chennai.",
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
    "@type": "City",
    name: "Chennai",
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
      name: "Chennai Transport",
      item: PAGE_URL,
    },
  ],
};

export default function ChennaiTransportPage() {
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

      {/* HERO SECTION: Pammal-style layout */}
      <section className="relative overflow-hidden bg-[#10182D] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-12 md:px-8 md:py-16 lg:py-20">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm text-slate-300"
            >
              <Link href="/" className="transition hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Chennai Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Chennai Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Chennai? Explore LOADZY for
              full load, part load, household shifting, packers and movers,
              commercial goods and industrial transport enquiries for local
              and intercity routes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#transport-enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Book a Truck →
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
              >
                Contact LOADZY
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
              {[
                "Full Load",
                "Part Load",
                "House Shifting",
                "Commercial Goods",
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

          <div id="transport-enquiry" className="scroll-mt-6">
            <TransportEnquiryForm />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport Solutions
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Goods Transport Services in Chennai
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household goods, business stock,
          industrial materials and other consignments. Choose the service
          that matches your pickup, destination and load requirements.
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

              <h3 className="mt-5 text-xl font-bold text-slate-900 transition group-hover:text-teal-700">
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

      {/* LOCAL TRANSPORT INFORMATION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
              Local Transport
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Truck Booking and Goods Transport in Chennai
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Chennai is a major commercial, manufacturing and logistics
              centre. Transport requirements can include household moves,
              retail deliveries, commercial consignments, industrial goods
              and shipments between Chennai and other cities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and delivery
              locations, a description of the goods, approximate load size,
              loading requirements and preferred pickup date. These details
              help determine a suitable vehicle and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Vehicle availability, freight rates and schedules depend on
              each enquiry and must be confirmed before transport.
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

            <a
              href="#transport-enquiry"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Transport Assistance →
            </a>
          </div>
        </div>
      </section>

      {/* INTERCITY DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Intercity Transport
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Major Transport Routes from Chennai
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Planning to transport goods from Chennai to another city? Select
          a destination and submit your requirements for a route enquiry.
          Truck availability and charges must be confirmed.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((city) => (
            <a
              key={city}
              href="#transport-enquiry"
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
            >
              <span className="font-semibold text-slate-800 group-hover:text-teal-800">
                Chennai to {city}
              </span>
              <span className="ml-2 text-[#08A99F]">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* CHENNAI LOCALITY LINKS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Chennai Localities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Transport Services Across Chennai Areas
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore transport pages for Chennai neighbourhoods and nearby
            localities. Select an area to view its dedicated transport page.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {chennaiAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}-transport`}
                className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
              >
                <span className="font-medium text-slate-700 group-hover:text-teal-800">
                  {area.name} Transport
                </span>
                <span className="shrink-0 text-[#08A99F]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Grouped Locality Transport Pages */}
      <section className="mt-16 px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.15em] text-[#08a99f]">
              LOCAL TRANSPORT SERVICES
            </p>
      
            <h2 className="mt-2 text-3xl font-black text-[#062B55] md:text-4xl">
              Explore Locality Transport Services
            </h2>
      
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Find truck booking, goods transport, industrial freight and shifting
              services across Chennai and surrounding areas with LOADZY.
            </p>
          </div>
      
          {[
            {
              title: "North Chennai",
              description: "Truck transport and goods movement across North Chennai.",
              places: [
        ["Ennore", "/ennore-transport"],
        ["Kathivakkam", "/kathivakkam-transport"],
        ["Kodungaiyur", "/kodungaiyur-transport"],
        ["Madhavaram", "/madhavaram-transport"],
        ["Manali", "/manali-transport"],
        ["Minjur", "/minjur-transport"],
        ["Perambur", "/perambur-transport"],
        ["Puzhal", "/puzhal-transport"],
        ["Red Hills", "/red-hills-transport"],
        ["Royapuram", "/royapuram-transport"],
        ["Tondiarpet", "/tondiarpet-transport"],
        ["Vyasarpadi", "/vyasarpadi-transport"],
      ],
            },
            {
              title: "South Chennai",
              description: "Local transport, shifting and commercial freight in South Chennai.",
              places: [
                ["Anakaputhur", "/anakaputhur-transport"],
                ["Chromepet", "/chromepet-transport"],
                ["Kelambakkam", "/kelambakkam-transport"],
                ["Kundrathur", "/kundrathur-transport"],
                ["Medavakkam", "/medavakkam-transport"],
                ["Pallavaram", "/pallavaram-transport"],
                ["Pammal", "/pammal-transport"],
                ["Perungudi", "/perungudi-transport"],
                ["Selaiyur", "/selaiyur-transport"],
                ["Sholinganallur", "/sholinganallur-transport"],
                ["Tambaram", "/tambaram-transport"],
                ["Thoraipakkam", "/thoraipakkam-transport"],
                ["Velachery", "/velachery-transport"],
              ],
            },
            {
              title: "Outer Chennai & Surrounding Areas",
              description: "Transport links for outer suburbs and nearby industrial areas.",
              places: [
                ["Ambattur", "/ambattur-transport"],
                ["Avadi", "/avadi-transport"],
                ["Chengalpattu", "/chengalpattu-transport"],
                ["Oragadam", "/oragadam-transport"],
                ["Poonamallee", "/poonamallee-transport"],
                ["Sriperumbudur", "/sriperumbudur-transport"],
                ["Tiruvallur", "/tiruvallur-transport"],
              ],
            },
          ].map((group) => (
            <div key={group.title} className="mt-12">
              <div className="mb-5">
                <h3 className="text-2xl font-black text-[#062B55]">
                  {group.title}
                </h3>
                <p className="mt-2 text-slate-600">
                  {group.description}
                </p>
              </div>
      
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.places.map(([name, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-[#062B55] shadow-sm transition hover:-translate-y-1 hover:border-[#08A99F] hover:bg-teal-50"
                  >
                    🚚 {name} Transport
                    <span className="mt-2 block text-sm font-bold text-teal-600">
                      Explore locality →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
            confirm arrangements for your route with LOADZY.
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
              title: "Truck Options",
              text: "Enquire about suitable truck types for your load.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details and pickup preferences.",
            },
            {
              icon: "📦",
              title: "Multiple Services",
              text: "Enquire about shifting, commercial goods and consignments.",
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
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How to Request Transport from Chennai
          </h2>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                text: "Send your transport requirements through the form.",
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
            <a
              href="#transport-enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-[#08A99F] px-8 py-4 font-bold text-white transition hover:bg-teal-700"
            >
              Submit a Transport Enquiry →
            </a>
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
            Chennai Transport — Frequently Asked Questions
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
            Looking for Goods Transport in Chennai?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements
            to enquire about a suitable transport option for your shipment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#transport-enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Book a Truck →
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-[#08A99F] hover:bg-white/5"
            >
              Contact LOADZY
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