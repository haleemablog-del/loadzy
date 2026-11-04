import type { Metadata } from "next";
import Link from "next/link";
import TransportEnquiryForm from "./TransportEnquiryForm";

const SITE_URL = "https://www.loadzyinfra.in";
const PAGE_URL = `${SITE_URL}/mudichur-transport`;

export const metadata: Metadata = {
  title: "Mudichur Transport Service | Truck Booking | LOADZY",
  description: "Enquire about goods transport, truck booking, full load, part load, commercial transport and household shifting in Mudichur, Tamil Nadu.",
  keywords: [
    "Mudichur transport service",
    "Mudichur truck booking",
    "Mudichur goods transport",
    "Mudichur house shifting",
    "Mudichur packers and movers",
    "LOADZY transport"
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "Mudichur Transport Service | Truck Booking | LOADZY", description: "Enquire about goods transport, truck booking, full load, part load, commercial transport and household shifting in Mudichur, Tamil Nadu.", url: PAGE_URL, type: "website" }
};

const faqs = [
  [
    "Can I enquire about truck booking in Mudichur?",
    "Yes. Submit the form with pickup, delivery, load type, truck type and pickup date so LOADZY can review your transport requirement."
  ],
  [
    "Can I request transport from Mudichur to another city?",
    "Yes. Enter the actual pickup and delivery locations in the enquiry form."
  ],
  [
    "Can I enquire about household shifting in Mudichur?",
    "Select Household Shifting or Packers & Movers in the form and provide your route and preferred date."
  ]
].map(([question, answer]) => ({ question, answer }));

export default function LocationTransportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mudichur Transport Service",
    serviceType: "Goods transport and truck booking enquiries",
    areaServed: { "@type": "Place", name: "Mudichur, Chengalpattu, Tamil Nadu, India" },
    url: PAGE_URL,
    provider: { "@type": "Organization", name: "LOADZY", url: SITE_URL }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-slate-950 px-5 py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-300">LOADZY · Transport Enquiries</p>
            <h1 className="text-3xl font-extrabold sm:text-5xl">{"Mudichur"} Transport Service</h1>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">Enquire about truck booking, goods transport, full-load and part-load services, commercial goods movement, and household shifting in Mudichur, Tamil Nadu.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#transport-enquiry" className="rounded-lg bg-yellow-400 px-5 py-3 font-bold text-slate-950">Request Transport</a>
              <a href="https://wa.me/919019499448" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-500 px-5 py-3 font-bold text-white">WhatsApp LOADZY</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">Transport services</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Full-load and part-load transport</li><li>Household shifting and packers & movers</li><li>Commercial and industrial transport enquiries</li><li>Truck booking for local and outstation routes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-bold">Local transport requirements in Mudichur</h2>
          <p className="mt-4 leading-7 text-slate-600">Transport requirements in Mudichur may vary by customer, cargo type, destination and vehicle size. Confirm local details before publishing this page; the items below are supplied as draft location data, not independently verified claims.</p>
          <h3 className="mt-7 text-xl font-bold">Local activity and specialities</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li key="Residential and local commercial activity">{"Residential and local commercial activity"}</li>
          </ul>
          <h3 className="mt-7 text-xl font-bold">Goods that may require transport</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li key="Household goods">{"Household goods"}</li>
            <li key="Furniture">{"Furniture"}</li>
            <li key="General cargo">{"General cargo"}</li>
          </ul>
          
          <h3 className="mt-7 text-xl font-bold">Forward routes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li key="Chennai">Mudichur to Chennai</li>
            <li key="Vellore">Mudichur to Vellore</li>
            <li key="Salem">Mudichur to Salem</li>
          </ul>
          <h3 className="mt-7 text-xl font-bold">Reverse routes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li key="Chennai">Chennai to Mudichur</li>
            <li key="Vellore">Vellore to Mudichur</li>
            <li key="Salem">Salem to Mudichur</li>
          </ul>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold">Related LOADZY pages</h3>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link className="font-semibold text-teal-700 hover:underline" href="/coimbatore-transport">Coimbatore Transport</Link>
              <Link className="font-semibold text-teal-700 hover:underline" href="/chennai-transport">Chennai Transport</Link>
              <Link className="font-semibold text-teal-700 hover:underline" href="/tambaram-transport">Tambaram Transport</Link>
            </div>
          </div>
        </div>
        <div id="transport-enquiry" className="scroll-mt-8"><TransportEnquiryForm /></div>
      </section>
      <section className="border-t border-slate-200 bg-white px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => <article key={faq.question} className="rounded-xl border border-slate-200 p-5"><h3 className="font-bold">{faq.question}</h3><p className="mt-2 leading-7 text-slate-600">{faq.answer}</p></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
