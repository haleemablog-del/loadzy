import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/nalgonda-transport`;

export const metadata: Metadata = {
  title: "Nalgonda Transport Service | Truck Booking | LOADZY",
  description:
    "Find goods transport and truck booking options in Nalgonda, Nalgonda, Telangana. Explore full load, part load, commercial transport and household shifting with LOADZY.",
  keywords: [
    "Nalgonda transport service",
    "Nalgonda truck booking",
    "Nalgonda goods transport",
    "Nalgonda lorry booking",
    "Nalgonda full load transport",
    "Nalgonda part load transport",
    "Nalgonda house shifting",
    "Nalgonda packers and movers",
    "Nalgonda to Chennai transport",
    "Nalgonda to Bangalore transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Nalgonda Transport Service | LOADZY",
    description:
      "Submit a truck booking or goods transport enquiry from Nalgonda, Nalgonda, Telangana.",
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
  "Nalgonda to Hyderabad",
  "Nalgonda to Warangal",
  "Nalgonda to Karimnagar",
  "Nalgonda to Nizamabad",
  "Nalgonda to Khammam",
  "Nalgonda to Suryapet",
  "Nalgonda to Adilabad",
  "Nalgonda to Nirmal",
  "Nalgonda to Mancherial",
  "Nalgonda to Ramagundam",
  "Nalgonda to Peddapalli",
  "Nalgonda to Siddipet",
  "Nalgonda to Medak",
  "Nalgonda to Sangareddy",
  "Nalgonda to Vikarabad",
  "Nalgonda to Mahabubnagar",
  "Nalgonda to Nagarkurnool",
  "Nalgonda to Wanaparthy",
  "Nalgonda to Gadwal",
  "Nalgonda to Narayanpet",
  "Nalgonda to Kothagudem",
  "Nalgonda to Bhadrachalam",
  "Nalgonda to Jagtial",
  "Nalgonda to Sircilla",
  "Nalgonda to Kamareddy",
];

const nearbyAreas = [
  "Miryalaguda",
  "Devarakonda",
  "Nakrekal",
  "Suryapet Road",
  "Munugode",
  "Narketpally",
  "Marriguda",
  "Anumula",
];

const faqs = [
  {
    question: "How can I book a truck in Nalgonda?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, service, truck type and pickup date. Submit the request and confirm availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Nalgonda?",
    answer:
      "You can submit an enquiry for full load transport. Vehicle suitability, availability and freight charges depend on your goods, route and pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, load size, timing and suitable transport options.",
  },
  {
    question: "Can I arrange house shifting from Nalgonda?",
    answer:
      "You can submit a household shifting enquiry. Provide your pickup and delivery addresses, preferred moving date and details about your belongings.",
  },
  {
    question: "Can I book transport from Nalgonda to Bangalore?",
    answer:
      "You can submit a transport enquiry for Nalgonda to Bangalore. The vehicle, price and pickup schedule must be confirmed for your specific shipment.",
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
  name: "Nalgonda Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods and household shifting from Nalgonda, Nalgonda, Telangana.",
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
    name: "Nalgonda, Nalgonda, Telangana, India",
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
      name: "Nalgonda Transport",
      item: PAGE_URL,
    },
  ],
};
function getLocationUrl(route: string): string {
  const slug = route
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `/${slug}-transport`;
}

export default function NalgondaTransportPage() {
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
              <span>Nalgonda Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Nalgonda Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Nalgonda, Nalgonda, Telangana? Explore LOADZY
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
          Goods Transport Services in Nalgonda
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
              Transport and Truck Booking in Nalgonda, Nalgonda, Telangana
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Nalgonda is a location in Nalgonda. Transport requirements can vary depending on the shipment, destination and vehicle type.

When requesting a truck, provide pickup and delivery addresses, goods details, approximate load size, loading requirements and the preferred pickup date. Confirm vehicle availability, freight charges and schedules before booking.</p>
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
          Transport Routes from Nalgonda
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiry routes from Nalgonda. Vehicle availability,
          freight charges and schedules must be confirmed.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          
        <Link
          key={"Nalgonda to Hyderabad"}
          href="/routes/nalgonda-transport/hyderabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Hyderabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Warangal"}
          href="/routes/nalgonda-transport/warangal-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Warangal
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Karimnagar"}
          href="/routes/nalgonda-transport/karimnagar-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Karimnagar
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Nizamabad"}
          href="/routes/nalgonda-transport/nizamabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Nizamabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Khammam"}
          href="/routes/nalgonda-transport/khammam-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Khammam
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Suryapet"}
          href="/routes/nalgonda-transport/suryapet-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Suryapet
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Adilabad"}
          href="/routes/nalgonda-transport/adilabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Adilabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Nirmal"}
          href="/routes/nalgonda-transport/nirmal-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Nirmal
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Mancherial"}
          href="/routes/nalgonda-transport/mancherial-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Mancherial
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Ramagundam"}
          href="/routes/nalgonda-transport/ramagundam-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Ramagundam
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Peddapalli"}
          href="/routes/nalgonda-transport/peddapalli-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Peddapalli
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Siddipet"}
          href="/routes/nalgonda-transport/siddipet-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Siddipet
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Medak"}
          href="/routes/nalgonda-transport/medak-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Medak
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Sangareddy"}
          href="/routes/nalgonda-transport/sangareddy-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Sangareddy
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Vikarabad"}
          href="/routes/nalgonda-transport/vikarabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Vikarabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Mahabubnagar"}
          href="/routes/nalgonda-transport/mahabubnagar-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Mahabubnagar
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Nagarkurnool"}
          href="/routes/nalgonda-transport/nagarkurnool-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Nagarkurnool
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Wanaparthy"}
          href="/routes/nalgonda-transport/wanaparthy-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Wanaparthy
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Gadwal"}
          href="/routes/nalgonda-transport/gadwal-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Gadwal
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Narayanpet"}
          href="/routes/nalgonda-transport/narayanpet-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Narayanpet
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Kothagudem"}
          href="/routes/nalgonda-transport/kothagudem-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Kothagudem
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Bhadrachalam"}
          href="/routes/nalgonda-transport/bhadrachalam-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Bhadrachalam
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Jagtial"}
          href="/routes/nalgonda-transport/jagtial-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Jagtial
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Sircilla"}
          href="/routes/nalgonda-transport/sircilla-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Sircilla
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Kamareddy"}
          href="/routes/nalgonda-transport/kamareddy-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Kamareddy
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
            Transport Routes to Nalgonda
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore return-direction transport enquiries to Nalgonda.
            Vehicle availability, freight charges and schedules must be confirmed.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            
        <Link
          key={"Hyderabad to Nalgonda"}
          href="/routes/hyderabad-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Hyderabad to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Warangal to Nalgonda"}
          href="/routes/warangal-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Warangal to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Karimnagar to Nalgonda"}
          href="/routes/karimnagar-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Karimnagar to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nizamabad to Nalgonda"}
          href="/routes/nizamabad-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nizamabad to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Khammam to Nalgonda"}
          href="/routes/khammam-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Khammam to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Suryapet to Nalgonda"}
          href="/routes/suryapet-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Suryapet to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Adilabad to Nalgonda"}
          href="/routes/adilabad-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Adilabad to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nirmal to Nalgonda"}
          href="/routes/nirmal-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nirmal to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Mancherial to Nalgonda"}
          href="/routes/mancherial-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Mancherial to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Ramagundam to Nalgonda"}
          href="/routes/ramagundam-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Ramagundam to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Peddapalli to Nalgonda"}
          href="/routes/peddapalli-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Peddapalli to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Siddipet to Nalgonda"}
          href="/routes/siddipet-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Siddipet to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Medak to Nalgonda"}
          href="/routes/medak-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Medak to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Sangareddy to Nalgonda"}
          href="/routes/sangareddy-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Sangareddy to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Vikarabad to Nalgonda"}
          href="/routes/vikarabad-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Vikarabad to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Mahabubnagar to Nalgonda"}
          href="/routes/mahabubnagar-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Mahabubnagar to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nagarkurnool to Nalgonda"}
          href="/routes/nagarkurnool-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nagarkurnool to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Wanaparthy to Nalgonda"}
          href="/routes/wanaparthy-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Wanaparthy to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Gadwal to Nalgonda"}
          href="/routes/gadwal-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Gadwal to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Narayanpet to Nalgonda"}
          href="/routes/narayanpet-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Narayanpet to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Kothagudem to Nalgonda"}
          href="/routes/kothagudem-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Kothagudem to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Bhadrachalam to Nalgonda"}
          href="/routes/bhadrachalam-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Bhadrachalam to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Jagtial to Nalgonda"}
          href="/routes/jagtial-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Jagtial to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Sircilla to Nalgonda"}
          href="/routes/sircilla-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Sircilla to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Kamareddy to Nalgonda"}
          href="/routes/kamareddy-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Kamareddy to Nalgonda
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
            Nearby Locations Around Nalgonda
          </h2>
          
<p className="mt-4 max-w-3xl leading-7 text-slate-600">
  Explore nearby localities when planning a transport enquiry.
  Select a locality to open its corresponding transport page.
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
            How to Request Transport from Nalgonda
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
            Nalgonda Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Nalgonda?
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
