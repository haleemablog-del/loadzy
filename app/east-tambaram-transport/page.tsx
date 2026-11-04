import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/east-tambaram-transport`;

export const metadata: Metadata = {
  title: "East Tambaram Transport Service | Truck Booking | LOADZY",
  description:
    "Looking for transport services in East Tambaram, Chennai? Contact LOADZY for truck booking, goods transport, commercial loads and household shifting enquiries.",
  keywords: [
    "East Tambaram transport service",
    "East Tambaram truck booking",
    "goods transport East Tambaram",
    "lorry booking East Tambaram",
    "house shifting East Tambaram",
    "packers and movers East Tambaram",
    "Chennai goods transport",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "East Tambaram Transport Service | LOADZY",
    description:
      "Enquire about truck booking, goods transport and shifting services in East Tambaram, Chennai.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    question: "Can I enquire about truck booking in East Tambaram?",
    answer:
      "Yes. Submit the enquiry form with your pickup location, delivery location, load type and preferred pickup date. The LOADZY team can follow up about your transport requirement.",
  },
  {
    question: "Can I request transport outside East Tambaram?",
    answer:
      "Yes. Enter your actual pickup and delivery locations in the form so your transport requirement can be understood.",
  },
  {
    question: "Can I enquire about household shifting?",
    answer:
      "Yes. Select Household Shifting or Packers & Movers in the enquiry form and provide your pickup and destination details.",
  },
  {
    question: "How do I request a transport quote?",
    answer:
      "Complete the enquiry form with your contact number, route, service type, truck type and pickup date. Your final transport price depends on the specific requirement and availability.",
  },
];

export default function EastTambaramTransportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "East Tambaram Transport Service",
    serviceType: "Goods transport and truck booking enquiries",
    areaServed: {
      "@type": "Place",
      name: "East Tambaram, Chennai, Tamil Nadu, India",
    },
    url: PAGE_URL,
    provider: {
      "@type": "Organization",
      name: "LOADZY",
      url: SITE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              LOADZY · Transport Enquiries
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              East Tambaram Transport Service
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Looking for a truck, goods transport or shifting service in East
              Tambaram, Chennai? Send your transport requirements to LOADZY
              with your pickup, destination and preferred date.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#transport-enquiry"
                className="rounded-lg bg-yellow-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Request Transport
              </a>
              <a
                href="https://wa.me/919019499448"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-500 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                WhatsApp LOADZY
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">
              Transport services you can enquire about
            </h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>✓ Truck booking and goods transport</li>
              <li>✓ Full-load and part-load enquiries</li>
              <li>✓ Household shifting and packers & movers</li>
              <li>✓ Commercial and industrial goods enquiries</li>
              <li>✓ Pickup and delivery between locations</li>
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Services, vehicle availability and pricing depend on your route
              and transport requirements. Submit an enquiry to discuss your
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Goods transport in East Tambaram
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            East Tambaram is part of the wider Tambaram area in Chennai.
            Transport requirements can include moving household items,
            delivering commercial goods, shifting equipment and arranging
            vehicle movement between local and outstation destinations.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            When making an enquiry, include accurate pickup and delivery
            addresses, the type of goods, your preferred date and the vehicle
            size you need. This helps the team understand the request and
            follow up with relevant details.
          </p>

          <h2 className="mt-9 text-2xl font-bold">
            How to request a transport service
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-3 leading-7 text-slate-600">
            <li>Enter your name and contact number.</li>
            <li>Provide the pickup and delivery locations.</li>
            <li>Select your service type and truck type.</li>
            <li>Choose your preferred pickup date.</li>
            <li>Submit the form to continue your enquiry through WhatsApp.</li>
          </ol>

          <div className="mt-9 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold">Other LOADZY transport pages</h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              <Link className="font-semibold text-teal-700 hover:underline" href="/tambaram-transport">
                Tambaram Transport
              </Link>
              <Link className="font-semibold text-teal-700 hover:underline" href="/chromepet-transport">
                Chromepet Transport
              </Link>
              <Link className="font-semibold text-teal-700 hover:underline" href="/chennai-transport">
                Chennai Transport
              </Link>
            </div>
          </div>
        </div>

        <div id="transport-enquiry" className="scroll-mt-8">
          <TransportEnquiryForm />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
