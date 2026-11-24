import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LocationTransportPage from "@/app/components/LocationTransportPage";
import LocationTransportForm from "@/app/components/LocationTransportForm";

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
    slug: string;
  }>;
};

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const location = locationData.find(
    (item) => item.slug === slug
  );

  if (!location) {
    return {
      title: "Transport Service | LOADZY",
      description:
        "Goods transport and truck booking services with LOADZY.",
    };
  }

  return {
    title: `${location.name} Transport Service | Truck Booking | LOADZY`,
    description: `Find goods transport and truck booking options in ${location.name}. Explore full load, part load, commercial transport, household shifting and packers and movers with LOADZY.`,
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
      title: `${location.name} Transport Service | LOADZY`,
      description: `Submit a truck booking or goods transport enquiry from ${location.name}.`,
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

  const location = locationData.find(
    (item) => item.slug === slug
  );

  if (!location) {
    notFound();
  }

  console.log(
    "LOCATION PAGE RENDER:",
    location.name,
    location.slug
  );

  return (
    <LocationTransportPage
      location={location}
      form={<LocationTransportForm location={location} />}
    />
  );
}