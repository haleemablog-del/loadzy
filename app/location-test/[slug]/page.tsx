import type { Metadata } from "next";
import { notFound } from "next/navigation";
import locations from "@/data/locations.json";
import LocationTransportPage from "@/app/components/LocationTransportPage";

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

const locationBySlug = new Map(
  locationData.map((location) => [location.slug, location])
);

export const revalidate = 86400;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const location = locationBySlug.get(slug);

  if (!location) {
    return {};
  }

  const title = `${location.name} Transport Service | Truck Booking | LOADZY`;

  const description = `Find goods transport and truck booking options in ${location.name}. Explore full load, part load, commercial transport and household shifting with LOADZY.`;

  return {
    title,
    description,
    keywords: [
      `${location.name} transport service`,
      `${location.name} truck booking`,
      `${location.name} goods transport`,
      `${location.name} lorry booking`,
      `${location.name} full load transport`,
      `${location.name} part load transport`,
      `${location.name} house shifting`,
      `${location.name} packers and movers`,
    ],
    alternates: {
      canonical: `https://www.loadzyinfra.in/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.loadzyinfra.in/${location.slug}`,
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

export default async function LocationPage({
  params,
}: Props) {
  const { slug } = await params;

  const location = locationBySlug.get(slug);

  if (!location) {
    notFound();
  }

  return (
    <LocationTransportPage
      location={location}
      form={null}
    />
  );
}