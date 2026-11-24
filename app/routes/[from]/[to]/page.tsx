import type { Metadata } from "next";
import Link from "next/link";
import locations from "@/data/locations.json";

type Location = {
  name: string;
  slug: string;
  state: string;
  district?: string;
  routes?: string[];
  returnRoutes?: string[];
  nearbyAreas?: string[];
  famousFor?: string[];
  goods?: string[];
};

const locationData = locations as Location[];

type Props = {
  params: Promise<{
    from: string;
    to: string;
  }>;
};

function cleanTransportSlug(value: string) {
  return value
    .replace(/-transport$/, "")
    .replace(/-truck-booking$/, "")
    .replace(/-goods-transport$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function findLocation(slug: string) {
  return locationData.find(
    (location) => location.slug.toLowerCase() === slug.toLowerCase()
  );
}

function findLocationByName(name: string) {
  const normalized = name.trim().toLowerCase();

  return locationData.find(
    (location) => location.name.trim().toLowerCase() === normalized
  );
}

function getLocationSlug(name: string) {
  const location = findLocationByName(name);

  if (location) {
    return location.slug;
  }

  return `${name
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}-transport`;
}

function getRouteHref(fromName: string, toName: string) {
  return `/routes/${getLocationSlug(fromName)}/${getLocationSlug(toName)}`;
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { from, to } = await params;

  const fromLocation = findLocation(from);
  const toLocation = findLocation(to);

  const fromName = fromLocation?.name || cleanTransportSlug(from);
  const toName = toLocation?.name || cleanTransportSlug(to);

  const title = `${fromName} to ${toName} Transport | Truck Booking | LOADZY`;

  const description = `Book truck transport from ${fromName} to ${toName} with LOADZY. Get full load, part load, commercial goods transport and truck booking options.`;

  return {
    title,
    description,
    keywords: [
      `${fromName} to ${toName} transport`,
      `${fromName} to ${toName} truck booking`,
      `${fromName} to ${toName} goods transport`,
      `${fromName} to ${toName} lorry booking`,
      `${fromName} to ${toName} freight`,
      `${toName} to ${fromName} transport`,
      `${toName} to ${fromName} truck booking`,
    ],
    alternates: {
      canonical: `https://www.loadzyinfra.in/routes/${from}/${to}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.loadzyinfra.in/routes/${from}/${to}`,
      siteName: "LOADZY",
      locale: "en_IN",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RoutePage({ params }: Props) {
  const { from, to } = await params;

  const fromLocation = findLocation(from);
  const toLocation = findLocation(to);

  const fromName = fromLocation?.name || cleanTransportSlug(from);
  const toName = toLocation?.name || cleanTransportSlug(to);

  const popularRoutes = (fromLocation?.routes || [])
    .filter(
      (route) =>
        route.trim().toLowerCase() !== toName.trim().toLowerCase()
    )
    .slice(0, 25);

  const returnRoutes = (fromLocation?.returnRoutes || [])
    .filter(
      (route) =>
        route.trim().toLowerCase() !== toName.trim().toLowerCase()
    )
    .slice(0, 25);

  const nearbyLocations = (fromLocation?.nearbyAreas || []).slice(0, 40);

  const reverseRouteHref = getRouteHref(toName, fromName);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {" / "}
          <span>Routes</span>
          {" / "}
          <span>
            {fromName} to {toName}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
              LOADZY TRANSPORT ROUTE
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              {fromName} to {toName}
              <span className="block text-teal-400">
                Transport Service
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Looking for reliable goods transport from {fromName} to{" "}
              {toName}? LOADZY helps you connect with truck transport
              options for full load, part load, commercial goods and
              household shifting requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-950"
              >
                Book a Truck →
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold"
              >
                Back to LOADZY
              </Link>
            </div>
          </div>

          {/* RIGHT ENQUIRY CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

            <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
              ROUTE ENQUIRY
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Book a truck from {fromName} to {toName}
            </h2>

            <p className="mt-4 text-slate-300">
              Submit your transport requirement and our team can help
              with suitable truck options.
            </p>

            <div className="mt-6 rounded-xl bg-slate-900/70 p-5">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-sm text-slate-400">
                    Pickup
                  </p>

                  <p className="font-bold">
                    {fromName}
                  </p>
                </div>

                <div className="text-2xl text-teal-400">
                  →
                </div>

                <div className="text-right">
                  <p className="text-sm text-slate-400">
                    Delivery
                  </p>

                  <p className="font-bold">
                    {toName}
                  </p>
                </div>

              </div>

            </div>

            <Link
              href="/contact"
              className="mt-6 block rounded-xl bg-teal-500 px-6 py-4 text-center font-bold text-slate-950"
            >
              Get Transport Quote
            </Link>

          </div>
        </div>
      </section>

      {/* TRANSPORT SERVICES */}
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
            TRANSPORT SERVICES
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            {fromName} to {toName} Transport Options
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Full Load Transport",
              "Part Load Transport",
              "Commercial Goods Transport",
              "Household Shifting",
            ].map((service) => (
              <div
                key={service}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="font-bold">
                  {service}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Transport solutions for requirements from{" "}
                  {fromName} to {toName}.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      {popularRoutes.length > 0 && (
        <section className="bg-white py-16 text-slate-900">
          <div className="mx-auto max-w-7xl px-6">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
              POPULAR ROUTES
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Popular Transport Routes from {fromName}
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600">
              Explore popular truck transport routes from {fromName} to
              major cities and business locations.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {popularRoutes.map((route) => (
                <Link
                  key={route}
                  href={getRouteHref(fromName, route)}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-5 font-bold transition hover:border-teal-400 hover:text-teal-600"
                >
                  <span>
                    {fromName} to {route}
                  </span>

                  <span className="text-teal-500">
                    →
                  </span>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* RETURN ROUTES */}
      {returnRoutes.length > 0 && (
        <section className="bg-slate-50 py-16 text-slate-900">
          <div className="mx-auto max-w-7xl px-6">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
              RETURN ROUTES
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Transport Routes to {fromName}
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600">
              Explore return-direction truck transport routes to{" "}
              {fromName}. Vehicle availability, freight charges and
              schedules must be confirmed.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {returnRoutes.map((route) => (
                <Link
                  key={route}
                  href={getRouteHref(route, fromName)}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 font-bold transition hover:border-teal-400 hover:text-teal-600"
                >
                  <span>
                    {route} to {fromName}
                  </span>

                  <span className="text-teal-500">
                    →
                  </span>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* NEARBY LOCATIONS */}
      {nearbyLocations.length > 0 && (
        <section className="bg-white py-16 text-slate-900">
          <div className="mx-auto max-w-7xl px-6">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
              NEARBY LOCATIONS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Nearby Transport Locations Around {fromName}
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600">
              Find transport services and truck booking options around{" "}
              {fromName} and nearby business areas.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              {nearbyLocations.map((area) => {
                const nearbySlug = getLocationSlug(area);

                return (
                  <Link
                    key={area}
                    href={`/${nearbySlug}`}
                    className="rounded-xl border border-slate-200 p-5 font-bold transition hover:border-teal-400 hover:text-teal-600"
                  >
                    {area} Transport →
                  </Link>
                );
              })}

            </div>
          </div>
        </section>
      )}

      {/* TRUCK BOOKING */}
      <section className="bg-slate-50 py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-extrabold">
            {fromName} to {toName} Truck Booking
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            LOADZY provides a platform for transport enquiries between{" "}
            {fromName} and {toName}. Depending on the requirement,
            customers can enquire for full truck load, part load,
            commercial transportation and household shifting services.
            Truck availability, freight charges and schedules should be
            confirmed before booking.
          </p>

        </div>
      </section>

      {/* OTHER ROUTES */}
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-extrabold">
            Other Routes
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            <Link
              href={reverseRouteHref}
              className="rounded-xl border border-slate-200 p-5 font-bold hover:border-teal-400"
            >
              {toName} to {fromName} Transport →
            </Link>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 text-slate-900">
        <div className="mx-auto max-w-5xl px-6">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            {fromName} to {toName} Transport FAQs
          </h2>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold">
                How can I book a truck from {fromName} to {toName}?
              </h3>

              <p className="mt-2 text-slate-600">
                You can submit your transport requirement through LOADZY
                to enquire about suitable truck transport options.
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold">
                What transport services are available from {fromName} to{" "}
                {toName}?
              </h3>

              <p className="mt-2 text-slate-600">
                Depending on availability and requirement, customers can
                enquire for full load, part load, commercial goods
                transport and household shifting.
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">

              <h3 className="font-bold">
                Can I book a return truck from {toName} to {fromName}?
              </h3>

              <p className="mt-2 text-slate-600">
                Yes. LOADZY also provides a dedicated route page for the
                reverse direction:{" "}

                <Link
                  href={reverseRouteHref}
                  className="font-semibold text-teal-600 hover:underline"
                >
                  {toName} to {fromName} Transport
                </Link>
                .
              </p>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}