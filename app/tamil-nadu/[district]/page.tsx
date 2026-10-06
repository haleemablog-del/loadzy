import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadzyLocations } from "@/app/lib/locations";

type PageProps = {
  params: Promise<{
    district: string;
  }>;
};

function getDistrict(slug: string) {
  return loadzyLocations.find(
    (location) =>
      location.type === "district" &&
      location.slug === slug &&
      location.parent === "tamil-nadu"
  );
}

function getDistrictLocations(districtSlug: string) {
  return loadzyLocations.filter(
    (location) =>
      (location.type === "city" || location.type === "town") &&
      location.parent === districtSlug
  );
}

export async function generateStaticParams() {
  return loadzyLocations
    .filter(
      (location) =>
        location.type === "district" &&
        location.parent === "tamil-nadu"
    )
    .map((district) => ({
      district: district.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { district } = await params;
  const districtData = getDistrict(district);

  if (!districtData) {
    return {
      title: "District Not Found | LOADZY",
    };
  }

  return {
    title: `${districtData.name} Truck Transport Services | LOADZY`,
    description: `Find truck transport, full load, part load, house shifting, packers and movers and commercial transport services in ${districtData.name}, Tamil Nadu.`,
    alternates: {
      canonical: `https://www.loadzyinfra.in/tamil-nadu/${districtData.slug}`,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { district } = await params;

  const districtData = getDistrict(district);

  if (!districtData) {
    notFound();
  }

  const locations = getDistrictLocations(districtData.slug);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <nav className="mb-6 text-sm text-blue-200">
            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>{" "}
            /{" "}
            <Link
              href="/tamil-nadu"
              className="hover:text-white"
            >
              Tamil Nadu
            </Link>{" "}
            /{" "}
            <span>{districtData.name}</span>
          </nav>

          <p className="font-bold uppercase tracking-[0.2em] text-teal-400">
            TAMIL NADU TRANSPORT
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            {districtData.name} Truck Transport Services
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Find reliable truck transport and logistics services across{" "}
            {districtData.name}, Tamil Nadu, including full load,
            part load, house shifting, packers & movers and commercial
            transport.
          </p>

        </div>
      </section>

      {/* Locations */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="font-black uppercase tracking-[0.2em] text-teal-600">
              LOCATIONS
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              Cities & Towns in {districtData.name}
            </h2>

            <p className="mt-4 max-w-3xl text-gray-600">
              Explore LOADZY truck transport services in cities and
              towns across {districtData.name} district.
            </p>
          </div>

          {locations.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {locations.map((location) => (
                <Link
                  key={`${districtData.slug}-${location.slug}`}
                  href={`/tamil-nadu/${districtData.slug}/${location.slug}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-50"
                >
                  <h3 className="text-lg font-black text-blue-950">
                    {location.name} Transport
                  </h3>

                  <p className="mt-3 font-semibold text-teal-600">
                    View location →
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center">
              <p className="text-gray-600">
                Transport locations for this district are being added.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl font-black text-blue-950">
            Transport Services in {districtData.name}
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link
              href="/full-load"
              className="rounded-2xl border border-gray-200 p-6 transition hover:border-teal-500 hover:bg-teal-50"
            >
              <h3 className="font-black text-blue-950">
                Full Load Transport
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Book trucks for full-load goods transportation.
              </p>
            </Link>

            <Link
              href="/part-load"
              className="rounded-2xl border border-gray-200 p-6 transition hover:border-teal-500 hover:bg-teal-50"
            >
              <h3 className="font-black text-blue-950">
                Part Load Transport
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Affordable transport for smaller loads.
              </p>
            </Link>

            <Link
              href="/house-shifting"
              className="rounded-2xl border border-gray-200 p-6 transition hover:border-teal-500 hover:bg-teal-50"
            >
              <h3 className="font-black text-blue-950">
                House Shifting
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Truck transport for household shifting.
              </p>
            </Link>

            <Link
              href="/packers-movers"
              className="rounded-2xl border border-gray-200 p-6 transition hover:border-teal-500 hover:bg-teal-50"
            >
              <h3 className="font-black text-blue-950">
                Packers & Movers
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Transport support for moving requirements.
              </p>
            </Link>

            <Link
              href="/commercial-transport"
              className="rounded-2xl border border-gray-200 p-6 transition hover:border-teal-500 hover:bg-teal-50"
            >
              <h3 className="font-black text-blue-950">
                Commercial Transport
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Transport solutions for commercial goods.
              </p>
            </Link>

            <Link
              href="/industrial-transport"
              className="rounded-2xl border border-gray-200 p-6 transition hover:border-teal-500 hover:bg-teal-50"
            >
              <h3 className="font-black text-blue-950">
                Industrial Transport
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Transport solutions for industrial requirements.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-black">
          Need a Truck in {districtData.name}?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Find the right truck for your load and transport requirement
          with LOADZY.
        </p>

        <Link
          href="/load-search"
          className="mt-8 inline-block rounded-xl bg-teal-500 px-8 py-4 font-black text-white transition hover:bg-teal-400"
        >
          Find My Truck →
        </Link>
      </section>

    </main>
  );
}
