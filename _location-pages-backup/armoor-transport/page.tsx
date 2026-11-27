import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/armoor-transport`;

export const metadata: Metadata = {
  title: "Armoor Transport Service | Truck Booking | LOADZY",
  description:
    "Find goods transport and truck booking options in Armoor, Nizamabad, Telangana. Explore full load, part load, commercial transport and household shifting with LOADZY.",
  keywords: [
    "Armoor transport service",
    "Armoor truck booking",
    "Armoor goods transport",
    "Armoor lorry booking",
    "Armoor full load transport",
    "Armoor part load transport",
    "Armoor house shifting",
    "Armoor packers and movers",
    "Armoor to Chennai transport",
    "Armoor to Bangalore transport",
    "LOADZY transport",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Armoor Transport Service | LOADZY",
    description:
      "Submit a truck booking or goods transport enquiry from Armoor, Nizamabad, Telangana.",
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
  "Armoor to Hyderabad",
  "Armoor to Warangal",
  "Armoor to Karimnagar",
  "Armoor to Nizamabad",
  "Armoor to Khammam",
  "Armoor to Nalgonda",
  "Armoor to Suryapet",
  "Armoor to Adilabad",
  "Armoor to Nirmal",
  "Armoor to Mancherial",
  "Armoor to Ramagundam",
  "Armoor to Peddapalli",
  "Armoor to Siddipet",
  "Armoor to Medak",
  "Armoor to Sangareddy",
  "Armoor to Vikarabad",
  "Armoor to Mahabubnagar",
  "Armoor to Nagarkurnool",
  "Armoor to Wanaparthy",
  "Armoor to Gadwal",
  "Armoor to Narayanpet",
  "Armoor to Kothagudem",
  "Armoor to Bhadrachalam",
  "Armoor to Jagtial",
  "Armoor to Sircilla",
];

const nearbyAreas = [
  "Nizamabad",
  "Bodhan",
  "Balkonda",
  "Bheemgal",
  "Dichpally",
  "Navipet",
  "Yedpally",
  "Jakranpally",
  "Mortad",
  "Varni",
];

const faqs = [
  {
    question: "How can I book a truck in Armoor?",
    answer:
      "Fill in the transport enquiry form with your name, phone number, pickup and delivery locations, service, truck type and pickup date. Submit the request and confirm availability and freight charges before finalising your booking.",
  },
  {
    question: "Can I enquire about full load transport from Armoor?",
    answer:
      "You can submit an enquiry for full load transport. Vehicle suitability, availability and freight charges depend on your goods, route and pickup date.",
  },
  {
    question: "Does LOADZY support part load transport?",
    answer:
      "You can enquire about part load transport for smaller consignments. Availability depends on the route, load size, timing and suitable transport options.",
  },
  {
    question: "Can I arrange house shifting from Armoor?",
    answer:
      "You can submit a household shifting enquiry. Provide your pickup and delivery addresses, preferred moving date and details about your belongings.",
  },
  {
    question: "Can I book transport from Armoor to Bangalore?",
    answer:
      "You can submit a transport enquiry for Armoor to Bangalore. The vehicle, price and pickup schedule must be confirmed for your specific shipment.",
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
  name: "Armoor Goods Transport and Truck Booking",
  description:
    "Transport enquiries for full load, part load, commercial goods and household shifting from Armoor, Nizamabad, Telangana.",
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
    name: "Armoor, Nizamabad, Telangana, India",
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
      name: "Armoor Transport",
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

export default function ArmoorTransportPage() {
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
              <span>Armoor Transport</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Armoor Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Armoor, Nizamabad, Telangana? Explore LOADZY
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
          Goods Transport Services in Armoor
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
              Transport and Truck Booking in Armoor, Nizamabad, Telangana
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Armoor is a location in Nizamabad. Transport requirements can vary depending on the shipment, destination and vehicle type.

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
          Transport Routes from Armoor
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiry routes from Armoor. Vehicle availability,
          freight charges and schedules must be confirmed.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          
        <Link
          key={"Armoor to Hyderabad"}
          href="/routes/armoor-transport/hyderabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Hyderabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Warangal"}
          href="/routes/armoor-transport/warangal-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Warangal
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Karimnagar"}
          href="/routes/armoor-transport/karimnagar-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Karimnagar
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Nizamabad"}
          href="/routes/armoor-transport/nizamabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Nizamabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Khammam"}
          href="/routes/armoor-transport/khammam-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Khammam
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Nalgonda"}
          href="/routes/armoor-transport/nalgonda-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Nalgonda
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Suryapet"}
          href="/routes/armoor-transport/suryapet-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Suryapet
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Adilabad"}
          href="/routes/armoor-transport/adilabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Adilabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Nirmal"}
          href="/routes/armoor-transport/nirmal-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Nirmal
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Mancherial"}
          href="/routes/armoor-transport/mancherial-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Mancherial
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Ramagundam"}
          href="/routes/armoor-transport/ramagundam-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Ramagundam
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Peddapalli"}
          href="/routes/armoor-transport/peddapalli-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Peddapalli
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Siddipet"}
          href="/routes/armoor-transport/siddipet-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Siddipet
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Medak"}
          href="/routes/armoor-transport/medak-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Medak
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Sangareddy"}
          href="/routes/armoor-transport/sangareddy-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Sangareddy
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Vikarabad"}
          href="/routes/armoor-transport/vikarabad-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Vikarabad
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Mahabubnagar"}
          href="/routes/armoor-transport/mahabubnagar-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Mahabubnagar
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Nagarkurnool"}
          href="/routes/armoor-transport/nagarkurnool-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Nagarkurnool
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Wanaparthy"}
          href="/routes/armoor-transport/wanaparthy-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Wanaparthy
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Gadwal"}
          href="/routes/armoor-transport/gadwal-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Gadwal
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Narayanpet"}
          href="/routes/armoor-transport/narayanpet-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Narayanpet
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Kothagudem"}
          href="/routes/armoor-transport/kothagudem-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Kothagudem
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Bhadrachalam"}
          href="/routes/armoor-transport/bhadrachalam-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Bhadrachalam
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Jagtial"}
          href="/routes/armoor-transport/jagtial-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Jagtial
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Armoor to Sircilla"}
          href="/routes/armoor-transport/sircilla-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Armoor to Sircilla
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
            Transport Routes to Armoor
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore return-direction transport enquiries to Armoor.
            Vehicle availability, freight charges and schedules must be confirmed.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            
        <Link
          key={"Hyderabad to Armoor"}
          href="/routes/hyderabad-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Hyderabad to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Warangal to Armoor"}
          href="/routes/warangal-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Warangal to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Karimnagar to Armoor"}
          href="/routes/karimnagar-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Karimnagar to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nizamabad to Armoor"}
          href="/routes/nizamabad-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nizamabad to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Khammam to Armoor"}
          href="/routes/khammam-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Khammam to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nalgonda to Armoor"}
          href="/routes/nalgonda-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nalgonda to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Suryapet to Armoor"}
          href="/routes/suryapet-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Suryapet to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Adilabad to Armoor"}
          href="/routes/adilabad-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Adilabad to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nirmal to Armoor"}
          href="/routes/nirmal-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nirmal to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Mancherial to Armoor"}
          href="/routes/mancherial-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Mancherial to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Ramagundam to Armoor"}
          href="/routes/ramagundam-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Ramagundam to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Peddapalli to Armoor"}
          href="/routes/peddapalli-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Peddapalli to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Siddipet to Armoor"}
          href="/routes/siddipet-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Siddipet to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Medak to Armoor"}
          href="/routes/medak-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Medak to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Sangareddy to Armoor"}
          href="/routes/sangareddy-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Sangareddy to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Vikarabad to Armoor"}
          href="/routes/vikarabad-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Vikarabad to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Mahabubnagar to Armoor"}
          href="/routes/mahabubnagar-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Mahabubnagar to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Nagarkurnool to Armoor"}
          href="/routes/nagarkurnool-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Nagarkurnool to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Wanaparthy to Armoor"}
          href="/routes/wanaparthy-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Wanaparthy to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Gadwal to Armoor"}
          href="/routes/gadwal-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Gadwal to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Narayanpet to Armoor"}
          href="/routes/narayanpet-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Narayanpet to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Kothagudem to Armoor"}
          href="/routes/kothagudem-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Kothagudem to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Bhadrachalam to Armoor"}
          href="/routes/bhadrachalam-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Bhadrachalam to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Jagtial to Armoor"}
          href="/routes/jagtial-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Jagtial to Armoor
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>

        <Link
          key={"Sircilla to Armoor"}
          href="/routes/sircilla-transport/armoor-transport"
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            Sircilla to Armoor
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
            Nearby Locations Around Armoor
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
            How to Request Transport from Armoor
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
            Armoor Transport — Frequently Asked Questions
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
            Looking for Goods Transport from Armoor?
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
