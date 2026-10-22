import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/bengaluru-urban-transport`;

export const metadata: Metadata = {
  title: "Bengaluru Urban Transport Service | Truck Booking | LOADZY",
  description:
    "Find truck booking and goods transport services across Bengaluru Urban, Karnataka. Enquire about industrial goods, full load, part load, commercial freight and household shifting with LOADZY.",
  keywords: [
    "Bengaluru Urban transport service",
    "Bengaluru truck booking",
    "Bangalore goods transport",
    "Bengaluru lorry booking",
    "Bengaluru logistics",
    "Bengaluru industrial transport",
    "Peenya industrial transport",
    "Bommasandra truck booking",
    "Jigani goods transport",
    "Electronic City transport service",
    "Whitefield goods transport",
    "Bengaluru full load transport",
    "Bengaluru part load transport",
    "Bengaluru commercial transport",
    "Bengaluru house shifting",
    "LOADZY transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bengaluru Urban Transport Service | LOADZY",
    description:
      "Submit a truck booking enquiry for industrial, commercial, household and general goods transport across Bengaluru Urban.",
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
      "Enquire about suitable transport options for smaller consignments that may not require an entire truck.",
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
      "Share your requirements for moving shop stock, business goods and commercial consignments.",
    href: "/commercial-transport",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Enquire about transporting industrial materials, machinery, components and business supplies.",
    href: "/industrial-transport",
  },
];

const destinations = [
  "Chennai",
  "Hosur",
  "Krishnagiri",
  "Coimbatore",
  "Mysuru",
  "Hubballi",
  "Belagavi",
  "Mangaluru",
  "Hyderabad",
  "Vijayawada",
  "Kochi",
  "Tirupati",
];

const urbanSettlements = [
  {
    name: "Bengaluru",
    famousFor:
      "State capital, technology, manufacturing, trade and commercial activity",
    goods:
      "Commercial stock, office equipment, machinery, industrial supplies and general cargo.",
  },
  {
    name: "Yelahanka",
    famousFor:
      "North Bengaluru's residential, institutional and commercial development",
    goods:
      "Office equipment, furniture, retail stock and household shifting goods.",
  },
  {
    name: "Hunasamaranahalli",
    famousFor:
      "Urban growth and local commerce in northern Bengaluru",
    goods:
      "Construction materials, household goods, packaged products and commercial supplies.",
  },
  {
    name: "Kadigenahalli",
    famousFor:
      "Local settlement and commercial activity in northern Bengaluru",
    goods:
      "Household goods, shop stock, building supplies and general cargo.",
  },
  {
    name: "Madanayakanahalli",
    famousFor:
      "Growing settlement and access to the northern industrial corridor",
    goods:
      "Building supplies, packaged merchandise, factory supplies and commercial consignments.",
  },
  {
    name: "Chikkabanavara",
    famousFor:
      "Residential and commercial activity in northwest Bengaluru",
    goods:
      "Furniture, appliances, household shifting goods and retail stock.",
  },
  {
    name: "Chikkabidarakallu",
    famousFor:
      "Urban development and industrial surroundings in northwest Bengaluru",
    goods:
      "Building materials, factory supplies and general commercial cargo.",
  },
  {
    name: "Anekal",
    famousFor:
      "Regional commerce and access to the southeast Bengaluru corridor",
    goods:
      "Agricultural produce, retail stock, construction supplies and commercial goods.",
  },
  {
    name: "Attibele",
    famousFor:
      "Commercial activity and access to the Karnataka–Tamil Nadu border corridor",
    goods:
      "Factory materials, packaged products, components and commercial consignments.",
  },
  {
    name: "Bommasandra",
    famousFor:
      "Industrial estates, manufacturing and biotechnology-related business activity",
    goods:
      "Manufacturing inputs, packaged products, equipment, components and factory supplies.",
  },
  {
    name: "Dommasandra",
    famousFor:
      "Residential and commercial growth in southeast Bengaluru",
    goods:
      "Furniture, household goods, construction materials and shop stock.",
  },
  {
    name: "Hebbagodi",
    famousFor:
      "Urban activity near the Electronic City and Bommasandra corridor",
    goods:
      "Commercial supplies, furniture, equipment and general consignments.",
  },
  {
    name: "Jigani",
    famousFor:
      "Industrial estates and manufacturing-related businesses",
    goods:
      "Industrial components, machinery, packaged products and factory materials.",
  },
  {
    name: "Sarjapura",
    famousFor:
      "Residential development and commercial activity in southeast Bengaluru",
    goods:
      "Furniture, appliances, construction materials and commercial supplies.",
  },
  {
    name: "Kumbalgodu",
    famousFor:
      "Industrial estates and manufacturing activity in southwest Bengaluru",
    goods:
      "Factory materials, packaged products, equipment and commercial stock.",
  },
  {
    name: "Konappana Agrahara",
    famousFor:
      "Urban and commercial activity along the Electronic City corridor",
    goods:
      "Office equipment, furniture, electronics-related supplies and commercial stock.",
  },
  {
    name: "Maragondahalli",
    famousFor:
      "Local settlement and regional commercial activity",
    goods:
      "Agricultural produce, packaged goods and commercial consignments.",
  },
];

const industrialHubs = [
  {
    name: "Peenya Industrial Area",
    famousFor:
      "Engineering, machinery, manufacturing and industrial production",
    goods:
      "Machine components, engineering goods, metals, equipment and factory supplies.",
  },
  {
    name: "Rajajinagar Industrial Estate",
    famousFor:
      "Established manufacturing and commercial activity in western Bengaluru",
    goods:
      "Manufactured products, machinery, packaging materials and business consignments.",
  },
  {
    name: "Bommasandra Industrial Area",
    famousFor:
      "Manufacturing and industrial activity in southern Bengaluru",
    goods:
      "Industrial materials, components, packaged products and equipment.",
  },
  {
    name: "Jigani Industrial Area",
    famousFor:
      "Manufacturing and industrial businesses",
    goods:
      "Factory materials, components, machinery and commercial products.",
  },
  {
    name: "Electronic City",
    famousFor:
      "Technology campuses, business services and supporting commercial activity",
    goods:
      "Office furniture, IT equipment, commercial supplies and relocation consignments.",
  },
  {
    name: "Veerasandra Industrial Area",
    famousFor:
      "Industrial activity along the southern Bengaluru corridor",
    goods:
      "Manufacturing components, factory supplies, equipment and packaged goods.",
  },
  {
    name: "Attibele Industrial Area",
    famousFor:
      "Industrial activity near the southeast Bengaluru border corridor",
    goods:
      "Industrial components, commercial stock, packaging materials and factory supplies.",
  },
  {
    name: "Kumbalgodu Industrial Area",
    famousFor:
      "Industrial and manufacturing activity in southwest Bengaluru",
    goods:
      "Manufacturing supplies, commercial goods, equipment and packaged products.",
  },
  {
    name: "Doddanekkundi Industrial Area",
    famousFor:
      "Industrial and business activity in eastern Bengaluru",
    goods:
      "Office equipment, machinery, electronic equipment and business supplies.",
  },
  {
    name: "Kadugodi–Sadarmangala Industrial Area",
    famousFor:
      "Industrial activity associated with the eastern Bengaluru corridor",
    goods:
      "Manufacturing materials, commercial consignments and industrial cargo.",
  },
  {
    name: "Dyavasandra Industrial Area",
    famousFor:
      "Listed industrial-area location in Bengaluru",
    goods:
      "Manufacturing supplies, business materials and commercial cargo.",
  },
  {
    name: "Yarandahalli Industrial Layout",
    famousFor:
      "Industrial-layout location in the southern industrial corridor",
    goods:
      "Factory supplies, machinery, components and packaged consignments.",
  },
  {
    name: "Kachanayakanahalli Sub-layout",
    famousFor:
      "Industrial-layout location in the southern Bengaluru corridor",
    goods:
      "Industrial materials, manufactured goods and commercial supplies.",
  },
];

const technologyHubs = [
  {
    name: "International Tech Park Bengaluru (ITPL)",
    area: "Whitefield",
    goods:
      "Office furniture, IT equipment, fixtures and commercial supplies.",
  },
  {
    name: "Whitefield EPIP Zone",
    area: "Whitefield",
    goods:
      "Business equipment, electronics-related supplies and commercial consignments.",
  },
  {
    name: "Manyata Tech Park",
    area: "Nagawara",
    goods:
      "Office equipment, furniture, event materials and relocation goods.",
  },
  {
    name: "Bagmane Tech Park",
    area: "Doddanekkundi and Mahadevapura area",
    goods:
      "Office furniture, computer equipment and commercial supplies.",
  },
  {
    name: "Cessna Business Park",
    area: "Kadubeesanahalli area",
    goods:
      "Office equipment, furniture, fit-out materials and commercial supplies.",
  },
  {
    name: "Wipro technology campus",
    area: "Doddakannelli",
    goods:
      "Office equipment, furniture, IT-related supplies and commercial goods.",
  },
  {
    name: "Biocon campus and biotechnology cluster",
    area: "Bommasandra area",
    goods:
      "Business supplies, equipment and suitable industrial consignments.",
  },
];

const wholesaleHubs = [
  {
    name: "Yeshwanthpur APMC Market",
    goods:
      "Wholesale produce, agricultural consignments, packaged goods and market supplies.",
  },
  {
    name: "KR Market",
    goods:
      "Wholesale merchandise, market supplies, flowers, produce and commercial stock.",
  },
  {
    name: "Chickpet Wholesale Market",
    goods:
      "Textiles, garments, wholesale merchandise, packaging and retail stock.",
  },
  {
    name: "Cottonpet Wholesale Area",
    goods:
      "Wholesale merchandise, packaged goods, shop supplies and commercial consignments.",
  },
  {
    name: "Avenue Road Commercial Area",
    goods:
      "Books, stationery, paper products, wholesale stock and retail supplies.",
  },
  {
    name: "SJP Road Commercial Market",
    goods:
      "Electrical goods, hardware, tools, components and commercial supplies.",
  },
  {
    name: "Whitefield Commercial Area",
    goods:
      "Office equipment, shop stock, furniture, appliances and commercial goods.",
  },
  {
    name: "Marathahalli Commercial Area",
    goods:
      "Retail stock, furniture, electronics-related supplies and business goods.",
  },
];

const majorLocalities = [
  "MG Road",
  "Brigade Road",
  "Commercial Street",
  "Shivajinagar",
  "Vasanth Nagar",
  "Seshadripuram",
  "Gandhinagar",
  "Majestic",
  "Chickpet",
  "KR Market",
  "Cottonpet",
  "Chamarajpet",
  "Basavanagudi",
  "Wilson Garden",
  "Richmond Town",
  "Frazer Town",
  "Cooke Town",
  "Cox Town",
  "Ulsoor",
  "Indiranagar",
  "Domlur",
  "CV Raman Nagar",
  "Old Airport Road",
  "KR Puram",
  "Mahadevapura",
  "Doddanekkundi",
  "Whitefield",
  "Hoodi",
  "Kadugodi",
  "Brookefield",
  "Marathahalli",
  "Bellandur",
  "Varthur",
  "Panathur",
  "Gunjur",
  "Kadubeesanahalli",
  "Doddakannelli",
  "Sarjapur Road",
  "Koramangala",
  "Ejipura",
  "BTM Layout",
  "HSR Layout",
  "Jayanagar",
  "JP Nagar",
  "Banashankari",
  "Padmanabhanagar",
  "Kumaraswamy Layout",
  "Uttarahalli",
  "Konanakunte",
  "Arekere",
  "Hulimavu",
  "Bannerghatta Road",
  "Gottigere",
  "Anjanapura",
  "Begur",
  "Bommanahalli",
  "Hongasandra",
  "Singasandra",
  "Kudlu Gate",
  "Electronic City",
  "Chandapura",
  "Suryanagar",
  "Hebbal",
  "Nagawara",
  "Thanisandra",
  "Jakkur",
  "Kogilu",
  "Hennur",
  "RT Nagar",
  "Sanjaynagar",
  "Sahakara Nagar",
  "Vidyaranyapura",
  "Mathikere",
  "Jalahalli",
  "Peenya",
  "Yeshwanthpur",
  "Dasarahalli",
  "Mahalakshmipuram",
  "Basaveshwaranagar",
  "Vijayanagar",
  "Kamakshipalya",
  "Nagarbhavi",
  "Chandra Layout",
  "Sunkadakatte",
  "Kengeri",
  "Jnanabharathi",
  "Rajarajeshwari Nagar",
  "Mysore Road",
];

const faqs = [
  {
    question: "How can I book a truck in Bengaluru Urban?",
    answer:
      "Fill in the transport enquiry form with your contact details, pickup and delivery locations, service type, truck type and preferred pickup date. Submit the enquiry and confirm vehicle availability and freight charges before finalising the booking.",
  },
  {
    question: "Can I enquire about industrial transport from Peenya or Bommasandra?",
    answer:
      "You can submit an enquiry for suitable industrial goods transport from areas such as Peenya, Bommasandra, Jigani, Electronic City and other Bengaluru business locations. Share the cargo details, dimensions, loading requirements and destination so suitable options can be considered.",
  },
  {
    question: "Does LOADZY support part load and full load transport?",
    answer:
      "You can enquire about both full load and part load transport. Suitable vehicles and availability depend on the goods, route, shipment size, pickup date and current transport arrangements.",
  },
  {
    question: "Can I arrange transport from Bengaluru to Chennai or Hosur?",
    answer:
      "You can submit a route enquiry for Bengaluru to Chennai, Hosur and other destinations. Provide the pickup and delivery addresses, goods details and preferred date. Freight charges and vehicle availability must be confirmed.",
  },
  {
    question: "Can I arrange office or household shifting?",
    answer:
      "You can enquire about moving furniture, cartons, appliances, office equipment and other suitable belongings. Mention the pickup location, destination, approximate quantity and any special loading requirements.",
  },
  {
    question: "What details are needed for a transport quotation?",
    answer:
      "Share the pickup and delivery addresses, type of goods, approximate weight and dimensions, vehicle requirements, loading and unloading details, and preferred pickup date.",
  },
  {
    question: "Does submitting an enquiry guarantee a truck?",
    answer:
      "No. Submitting an enquiry does not automatically confirm a vehicle or freight price. Availability, charges, transit arrangements and pickup timing must be confirmed for the particular shipment.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bengaluru Urban Goods Transport and Truck Booking",
  description:
    "Transport enquiries for industrial materials, commercial goods, full load, part load and household shifting across Bengaluru Urban, Karnataka.",
  serviceType: [
    "Full load transport",
    "Part load transport",
    "Industrial goods transport",
    "Commercial goods transport",
    "Household shifting",
    "Office relocation transport",
  ],
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "LOADZY",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Bengaluru Urban, Karnataka, India",
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
      name: "Bengaluru Urban Transport",
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

export default function BengaluruUrbanTransportPage() {
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
              <Link
                href="/karnataka-truck-transport"
                className="hover:text-teal-300"
              >
                Karnataka Transport
              </Link>
              <span className="mx-2">/</span>
              <span>Bengaluru Urban</span>
            </nav>

            <p className="inline-flex rounded-full border border-[#08A99F]/40 bg-[#08A99F]/10 px-4 py-2 text-sm font-bold tracking-wider text-teal-300">
              MOVE. CONNECT. DELIVER.
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Bengaluru Urban Transport Service
              <span className="mt-3 block text-[#08A99F]">
                Truck Booking Made Easier
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Looking for goods transport in Bengaluru Urban, Karnataka?
              Enquire about full load, part load, industrial materials,
              commercial freight, office equipment and household shifting.
              Share your route and shipment requirements with LOADZY to explore
              suitable transport options for local and intercity movement.
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
                "Industrial Goods",
                "Commercial Transport",
                "House Shifting",
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
          Goods Transport Services in Bengaluru Urban
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Bengaluru has a mix of manufacturing, technology, wholesale, retail
          and household transport needs. Choose a service and share the exact
          pickup location, destination and cargo details for your enquiry.
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
              Transport and Truck Booking in Bengaluru Urban, Karnataka
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bengaluru Urban includes a broad range of economic activity,
              including technology businesses, manufacturing, engineering,
              wholesale markets, retail trade, construction and professional
              services. Transport requirements vary between industrial estates,
              technology campuses, wholesale centres and residential areas.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Depending on the shipment, customers may need to move machinery,
              industrial components, electrical supplies, office furniture,
              computer equipment, textiles, packaged merchandise, building
              materials or household goods. Suitable truck arrangements depend
              on the cargo, route and loading requirements.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When requesting a truck, provide exact pickup and delivery
              addresses, a goods description, approximate weight and dimensions,
              loading requirements and preferred pickup date. These details
              help determine a suitable vehicle and quotation.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              LOADZY accepts transport enquiries for local and intercity
              movement. Vehicle availability, rates and schedules depend on
              each booking and must be confirmed before transport.
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

      {/* URBAN SETTLEMENTS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Local coverage
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Enquiries Across Bengaluru Urban
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          This initial coverage directory records key urban settlements and
          transport locations for the Bengaluru Urban project. A locality is
          not necessarily a separate town or municipality. We will verify
          administrative boundaries and create individual location pages as
          part of the upcoming regional work.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {urbanSettlements.map((place) => (
            <div
              key={place.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#08A99F] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {place.name} Transport
                </h3>

                <span className="text-xl text-[#08A99F]" aria-hidden="true">
                  ↗
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold text-teal-700">
                Famous for: {place.famousFor}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Potential transport goods: {place.goods}
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
              >
                Enquire about {place.name} transport →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIAL ESTATES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Manufacturing and industrial freight
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Industrial Areas and Manufacturing Hubs
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Industrial locations can generate demand for equipment,
            manufactured products, factory inputs, components and packaged
            goods. These entries form our industrial coverage checklist. We
            will verify exact official estate names, phases and boundaries
            before creating each separate location page.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industrialHubs.map((hub) => (
              <div
                key={hub.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#08A99F] hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                  🏭
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {hub.name}
                </h3>

                <p className="mt-3 text-sm font-semibold text-teal-700">
                  Famous for: {hub.famousFor}
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Potential freight: {hub.goods}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
                >
                  Enquire about industrial transport →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PARKS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Technology and business
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Technology Parks and Office Transport
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Technology campuses and office clusters may need commercial
          deliveries, equipment movement, furniture transport, fit-out
          materials and relocation support. Confirm each site’s delivery rules
          and access requirements before dispatch.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyHubs.map((hub) => (
            <div
              key={hub.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#08A99F] hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                🏢
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {hub.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-teal-700">
                Area: {hub.area}
              </p>

              <p className="mt-3 leading-7 text-slate-600">{hub.goods}</p>

              <Link
                href="/contact"
                className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-900"
              >
                Enquire about business transport →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHOLESALE AND COMMERCIAL CENTRES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Wholesale and business cargo
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Wholesale Markets and Commercial Centres
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            These markets and commercial areas are relevant to wholesale goods,
            retail distribution and business consignments. Actual cargo
            requirements and delivery permissions depend on the specific market
            and address.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wholesaleHubs.map((hub) => (
              <div
                key={hub.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {hub.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{hub.goods}</p>

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

      {/* LOCALITY DIRECTORY */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Locality directory
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Bengaluru Localities and Neighbourhoods
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Use this directory as a checklist for future location pages. These
          names are not all separate towns or municipalities. We will compare
          them with the master spreadsheet and existing project folders before
          creating URLs.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {majorLocalities.map((place) => (
            <span
              key={place}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
            >
              {place}
            </span>
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
            Major Destinations from Bengaluru
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Planning to move goods from Bengaluru to another city? Submit a
            transport price enquiry and provide your route and cargo details.
            Freight charges, route coverage and truck availability must be
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
                  Bengaluru to {city}
                </span>

                <span className="ml-2 text-[#08A99F]" aria-hidden="true">
                  →
                </span>
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
            Share your shipment details, explain your cargo requirements and
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
              text: "Discuss industrial materials, machinery and commercial stock.",
            },
            {
              icon: "💬",
              title: "Clear Requirements",
              text: "Provide cargo details and pickup preferences for confirmation.",
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
      </section>

      {/* BOOKING STEPS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            How to Request Transport from Bengaluru
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
            Bengaluru Urban Transport — Frequently Asked Questions
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
            Looking for Goods Transport in Bengaluru Urban?
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