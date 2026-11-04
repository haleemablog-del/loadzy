import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/walajabad-transport`;

export const metadata: Metadata = {
  title: "Walajabad Transport Service | Truck Booking | LOADZY",
  description:
    "Find goods transport and truck booking options in Walajabad, Kancheepuram, Tamil Nadu. Explore full load, part load, commercial transport and household shifting with LOADZY.",
  keywords: [
    "Walajabad transport service",
    "Walajabad truck booking",
    "Walajabad goods transport",
    "Walajabad lorry booking",
    "Walajabad full load transport",
    "Walajabad part load transport",
    "Walajabad house shifting",
    "Walajabad packers and movers",
    "Walajabad to Chennai transport",
    "Walajabad to Bangalore transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Walajabad Transport Service | LOADZY",
    description:
      "Submit a truck booking or goods transport enquiry from Walajabad, Kancheepuram, Tamil Nadu.",
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
      "Explore dedicated truck options for larger consignments and goods requiring a full vehicle.",
    href: "/full-load",
  },
  {
    icon: "📦",
    title: "Part Load Transport",
    description:
      "Enquire about transport options for smaller consignments that may not require a full truck.",
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
      "Explore vehicle arrangements for household and office relocation requirements.",
    href: "/packers-movers",
  },
  {
    icon: "🏪",
    title: "Commercial Transport",
    description:
      "Enquire about moving shop stock, business goods and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Share your shipment details to enquire about suitable transport for materials and equipment.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Coimbatore",
  "Tiruppur",
  "Erode",
  "Salem",
  "Chennai",
  "Bengaluru",
  "Hosur",
  "Krishnagiri",
  "Dharmapuri",
  "Vellore",
  "Tiruchirappalli",
  "Madurai",
  "Dindigul",
  "Karur",
  "Namakkal",
  "Pollachi",
  "Mettupalayam",
  "Ooty",
  "Palakkad",
  "Thrissur",
  "Kochi",
  "Hyderabad",
  "Vijayawada",
  "Mumbai",
  "Pune",
];

const nearbyAreas = [
  "Kancheepuram",
  "Uthiramerur",
  "Oragadam",
];

const faqs = [
  {
    question: "How can I book a truck in Walajabad?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, service, truck type and pickup date. Submit the request and confirm availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Walajabad?",
    answer:
      "You can submit an enquiry for full load transport. Vehicle suitability, availability and freight charges depend on your goods, route and pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, load size, timing and suitable transport options.",
  },
  {
    question: "Can I arrange house shifting from Walajabad?",
    answer:
      "You can submit a household shifting enquiry. Provide your pickup and delivery addresses, preferred moving date and details about your belongings.",
  },
  {
    question: "Can I book transport from Walajabad to Bangalore?",
    answer:
      "You can submit a transport enquiry for Walajabad to Bangalore. The vehicle, price and pickup schedule must be confirmed for your specific shipment.",
  },
  {
    question: "How are freight charges calculated?",
    answer:
      "Freight charges may depend on distance, vehicle type, load weight and dimensions, loading requirements, pickup date and availability. Confirm the final quotation before booking.",
  },
  {
    question: "Can I request a return load?",
    answer:
      "You can enquire about return-load options for your route. Availability is not guaranteed and depends on matching loads and trucks.",
  },
  {
    question: "Does submitting the enquiry guarantee a truck?",
    answer:
      "Submitting an enquiry does not automatically confirm a vehicle or price. Wait for confirmation of truck availability, freight charges and pickup arrangements.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Walajabad Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods and household shifting from Walajabad, Kancheepuram, Tamil Nadu.",
  serviceType: [
    "Full load transport",
    "Part load transport",
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
    "@type": "Place",
    name: "Walajabad, Kancheepuram, Tamil Nadu, India",
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
      name: "Walajabad Transport",
      item: PAGE_URL,
    },
  ],
};

export default function WalajabadTransportPage() {
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

      {/* HERO: heading left, enquiry form right */}
      <section className="relative overflow-hidden bg-[#10182D] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#08A99F]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-slate-300">
              <Link href="/" className="hover:text-teal-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Walajabad Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Walajabad Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Walajabad, Kancheepuram, Tamil Nadu? Explore LOADZY
              for full load, part load, commercial goods transport and
              household shifting enquiries for local and intercity routes.
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
                Contact LOADZY
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {["Full Load", "Part Load", "House Shifting", "Commercial Goods"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* The enquiry form stays inside the same two-column hero grid */}
          <TransportEnquiryForm />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport solutions
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Goods Transport Services in Walajabad
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport options for household goods, business stock and
          suitable consignments. Choose the service that matches your pickup,
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
              Transport and Truck Booking in Walajabad, Kancheepuram, Tamil Nadu
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Walajabad is a location in Kancheepuram. Transport requirements can vary depending on the shipment, destination and vehicle type.

Goods that may require transport include Agricultural produce, Textiles, Grains, Retail goods.

When requesting a truck, provide pickup and delivery addresses, goods details, approximate load size, loading requirements and the preferred pickup date. Confirm vehicle availability, freight charges and schedules before booking.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide the exact pickup and delivery
              addresses, goods description, approximate weight and dimensions,
              loading requirements and preferred pickup date. These details
              help determine a suitable vehicle and quotation.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Vehicle availability, rates and schedules depend on the
              individual booking and must be confirmed before transport.
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
              Get Transport Assistance →
            </Link>
          </div>
        </div>
      </section>

      
      {/* FORWARD ROUTES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Forward routes
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Routes from Walajabad
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiry routes from Walajabad. Vehicle availability,
          freight charges and schedules must be confirmed.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          
          <Link
            key={"Coimbatore"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Coimbatore
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Tiruppur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Tiruppur
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Erode"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Erode
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Salem"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Salem
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Chennai"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Chennai
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Bengaluru"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Bengaluru
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Hosur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Hosur
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Krishnagiri"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Krishnagiri
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Dharmapuri"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Dharmapuri
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Vellore"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Vellore
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Tiruchirappalli"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Tiruchirappalli
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Madurai"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Madurai
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Dindigul"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Dindigul
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Karur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Karur
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Namakkal"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Namakkal
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Pollachi"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Pollachi
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Mettupalayam"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Mettupalayam
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Ooty"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Ooty
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Palakkad"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Palakkad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Thrissur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Thrissur
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Kochi"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Kochi
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Hyderabad"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Hyderabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Vijayawada"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Vijayawada
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Mumbai"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Mumbai
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Pune"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Walajabad to Pune
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>
        </div>
      </section>

      {/* RETURN ROUTES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Return routes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Transport Routes to Walajabad
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore return-direction transport enquiries to Walajabad.
            Vehicle availability, freight charges and schedules must be confirmed.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            
          <Link
            key={"Coimbatore"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Coimbatore to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Tiruppur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Tiruppur to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Erode"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Erode to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Salem"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Salem to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Chennai"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Chennai to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Bengaluru"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Bengaluru to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Hosur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Hosur to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Krishnagiri"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Krishnagiri to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Dharmapuri"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Dharmapuri to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Vellore"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Vellore to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Tiruchirappalli"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Tiruchirappalli to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Madurai"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Madurai to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Dindigul"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Dindigul to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Karur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Karur to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Namakkal"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Namakkal to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Pollachi"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Pollachi to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Mettupalayam"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Mettupalayam to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Ooty"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Ooty to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Palakkad"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Palakkad to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Thrissur"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Thrissur to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Kochi"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Kochi to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Hyderabad"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Hyderabad to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Vijayawada"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Vijayawada to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Mumbai"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Mumbai to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>

          <Link
            key={"Pune"}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              Pune to Walajabad
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Nearby areas
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Nearby Locations Around Walajabad
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore nearby localities when planning a transport enquiry.
Select a locality to open the corresponding transport page.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {nearbyAreas.map((area) => (
              <Link
                key={area}
                href={`/${area.toLowerCase().replace(/\s+/g, "-")}-transport`}
                className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
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
            Share your shipment details, explore available transport options
            and confirm the arrangements for your route.
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
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How to Request Transport from Walajabad
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
                text: "Send your booking details through the form.",
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
              Submit a Transport Enquiry →
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
            Walajabad Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Walajabad?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Share your pickup location, destination and load requirements to
            explore a suitable transport option for your shipment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Book a Truck →
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
