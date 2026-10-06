import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadzyLocations } from "@/app/lib/locations";

type PageProps = {
  params: Promise<{
    district: string;
    location: string;
  }>;
};

function getLocation(districtSlug: string, locationSlug: string) {
  return loadzyLocations.find(
    (item) =>
      item.slug === locationSlug &&
      item.parent === districtSlug &&
      (item.type === "city" || item.type === "town")
  );
}

function getDistrict(districtSlug: string) {
  return loadzyLocations.find(
    (item) =>
      item.slug === districtSlug &&
      item.type === "district" &&
      item.parent === "tamil-nadu"
  );
}

export async function generateStaticParams() {
  return loadzyLocations
    .filter(
      (item) =>
        (item.type === "city" || item.type === "town") &&
        item.parent &&
        loadzyLocations.some(
          (district) =>
            district.slug === item.parent &&
            district.type === "district" &&
            district.parent === "tamil-nadu"
        )
    )
    .map((item) => ({
      district: item.parent!,
      location: item.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { district, location } = await params;

  const locationData = getLocation(district, location);
  const districtData = getDistrict(district);

  if (!locationData || !districtData) {
    return {};
  }

  const title = `${locationData.name} Transport Services | LOADZY`;
  const description = `Truck transport services in ${locationData.name}, ${districtData.name}. Book trucks for full load, part load, house shifting, packers & movers, commercial and industrial transport with LOADZY.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.loadzyinfra.in/tamil-nadu/${districtData.slug}/${locationData.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.loadzyinfra.in/tamil-nadu/${districtData.slug}/${locationData.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { district, location } = await params;

  const locationData = getLocation(district, location);
  const districtData = getDistrict(district);

  if (!locationData || !districtData) {
    notFound();
  }

  const nearbyLocations = loadzyLocations
    .filter(
      (item) =>
        item.parent === districtData.slug &&
        (item.type === "city" || item.type === "town") &&
        item.slug !== locationData.slug
    )
    .slice(0, 12);

  const services = [
    {
      title: "Full Load Truck Transport",
      description:
        "Reliable trucks for transporting complete loads from your location to destinations across South India.",
    },
    {
      title: "Part Load Transport",
      description:
        "Affordable transport solutions when your goods do not require a full truck.",
    },
    {
      title: "House Shifting",
      description:
        "Truck transport for household shifting and moving goods safely between locations.",
    },
    {
      title: "Packers & Movers",
      description:
        "Transport support for residential and commercial relocation requirements.",
    },
    {
      title: "Commercial Transport",
      description:
        "Truck solutions for shops, businesses, warehouses and commercial goods.",
    },
    {
      title: "Industrial Transport",
      description:
        "Transport solutions for machinery, equipment, materials and industrial loads.",
    },
  ];

  const faqs = [
    {
      question: `Can I book a truck from ${locationData.name}?`,
      answer: `Yes. LOADZY helps customers find suitable trucks for transport requirements from ${locationData.name} and surrounding areas.`,
    },
    {
      question: `What types of transport are available in ${locationData.name}?`,
      answer: `Depending on availability, transport requirements can include full load, part load, house shifting, packers and movers, commercial and industrial transport.`,
    },
    {
      question: `Can I transport goods from ${locationData.name} to another city?`,
      answer: `Yes. LOADZY is designed to connect transport requirements with suitable trucks for routes from ${locationData.name} to destinations across South India.`,
    },
    {
      question: `How can I find the right truck?`,
      answer: `Enter your pickup location, delivery location, load details and preferred truck requirement to find a suitable transport option.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${locationData.name} Transport Services`,
    description: `Truck transport and logistics services in ${locationData.name}, ${districtData.name}, Tamil Nadu.`,
    provider: {
      "@type": "Organization",
      name: "LOADZY",
      url: "https://www.loadzyinfra.in",
    },
    areaServed: {
      "@type": "Place",
      name: `${locationData.name}, ${districtData.name}, Tamil Nadu`,
    },
    serviceType: [
      "Truck Transport",
      "Full Load Transport",
      "Part Load Transport",
      "House Shifting",
      "Packers and Movers",
      "Commercial Transport",
      "Industrial Transport",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.loadzyinfra.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tamil Nadu",
        item: "https://www.loadzyinfra.in/tamil-nadu",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: districtData.name,
        item: `https://www.loadzyinfra.in/tamil-nadu/${districtData.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: locationData.name,
        item: `https://www.loadzyinfra.in/tamil-nadu/${districtData.slug}/${locationData.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <nav className="mb-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white">
              Home
            </a>{" "}
            /{" "}
            <a href="/tamil-nadu" className="hover:text-white">
              Tamil Nadu
            </a>{" "}
            /{" "}
            <span>{districtData.name}</span> /{" "}
            <span className="text-white">{locationData.name}</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-400">
            LOADZY Transport Services
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {locationData.name} Truck Transport Services
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Find reliable truck transport solutions from {locationData.name},{" "}
            {districtData.name}, Tamil Nadu for full load, part load, house
            shifting, packers & movers, commercial and industrial goods.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/load-search"
              className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Find My Truck
            </a>

            <a
              href="/truck-rates"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Check Truck Rates
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Transport Services in {locationData.name}
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            LOADZY provides truck booking and transport solutions for customers
            looking to move goods from {locationData.name} and nearby areas.
            Whether you need a truck for household shifting, commercial goods,
            industrial materials, fruits and vegetables or other loads, you can
            use LOADZY to find a suitable transport option.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Truck Transport Services Available in {locationData.name}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LOADZY */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Why Use LOADZY in {locationData.name}?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Find suitable trucks",
              "Full and part load options",
              "House shifting support",
              "Transport across South India",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      {nearbyLocations.length > 0 && (
        <section className="bg-slate-50 px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold">
              Nearby Transport Locations
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {nearbyLocations.map((item) => (
                <a
                  key={item.slug}
                  href={`/tamil-nadu/${districtData.slug}/${item.slug}`}
                  className="rounded-lg border border-slate-200 bg-white p-4 font-medium transition hover:border-teal-500 hover:text-teal-600"
                >
                  {item.name} Transport
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            Need a Truck in {locationData.name}?
          </h2>

          <p className="mt-4 text-slate-300">
            Enter your pickup, delivery and load details to find the right
            truck for your transport requirement.
          </p>

          <a
            href="/load-search"
            className="mt-8 inline-block rounded-lg bg-teal-500 px-7 py-3 font-semibold text-white transition hover:bg-teal-600"
          >
            Find My Truck
          </a>
        </div>
      </section>
    </main>
  );
}