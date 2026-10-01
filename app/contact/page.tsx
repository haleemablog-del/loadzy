"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

const services = [
  "Truck Transport",
  "Household Shifting",
  "Packers & Movers",
  "Full Load Transport",
  "Part Load Transport",
  "Industrial Transport",
  "Fruits & Vegetables",
  "Commercial Transport",
  "Other",
];

const truckTypes = [
  "Tata Ace",
  "7FT Truck",
  "10FT Truck",
  "14FT Truck",
  "17FT Truck",
  "20FT Truck",
  "22FT Truck",
  "24FT Truck",
  "34FT Truck",
  "Multi-Axle Truck",
];

export default function ContactPage() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [service, setService] = useState("");
  const [truck, setTruck] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();

    if (
      !customerName ||
      !phone ||
      !pickup ||
      !delivery ||
      !service ||
      !truck ||
      !pickupDate
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("leads").insert([
      {
        customer_name: customerName,
        phone: phone,
        pickup: pickup,
        delivery: delivery,
        load_type: service,
        truck_type: truck,
        pickup_date: pickupDate,
        source: "contact_page",
        status: "new",
      },
    ]);

    if (error) {
      console.error("Contact enquiry error:", error);
      setMessage("Unable to submit your enquiry. Please try again.");
      setSaving(false);
      return;
    }

    const whatsappMessage = `🚚 LOADZY Transport Enquiry

Customer Name: ${customerName}
Phone: ${phone}
Pickup: ${pickup}
Delivery: ${delivery}
Service: ${service}
Truck: ${truck}
Pickup Date: ${pickupDate}`;

    const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setMessage(
      "✅ Enquiry received successfully. Opening WhatsApp..."
    );

    setCustomerName("");
    setPhone("");
    setPickup("");
    setDelivery("");
    setService("");
    setTruck("");
    setPickupDate("");

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }

    setSaving(false);
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <div className="font-bold tracking-widest text-[#12E6D3]">
            CONTACT LOADZY
          </div>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Tell us what you need to move
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Share your transport requirement and LOADZY will contact you about
            suitable transport options.
          </p>
        </div>
      </section>

      {/* Contact / Form */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact details */}
          <div>
            <div className="font-bold text-[#08c9bd]">
              GET IN TOUCH
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Speak with LOADZY
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Whether you need a truck for household shifting, business goods,
              industrial loads or agricultural produce, send us your details
              and we will contact you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+919019499448"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[#08c9bd] hover:shadow-md"
              >
                <div className="text-sm font-bold text-slate-400">
                  CALL LOADZY
                </div>

                <div className="mt-2 text-xl font-black text-blue-950">
                  📞 90194 99448
                </div>
              </a>

              <a
                href="https://wa.me/919019499448"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[#08c9bd] hover:shadow-md"
              >
                <div className="text-sm font-bold text-slate-400">
                  WHATSAPP
                </div>

                <div className="mt-2 text-xl font-black text-blue-950">
                  💬 Chat with LOADZY
                </div>
              </a>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-bold text-slate-400">
                  SERVICE AREA
                </div>

                <div className="mt-2 text-xl font-black text-blue-950">
                  📍 South India
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Transport availability depends on the route, date and
                  available trucks.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:p-10">
            <div className="text-2xl font-black text-blue-950">
              Get Your Transport Price
            </div>

            <p className="mt-2 text-slate-500">
              Submit your requirement and create a transport enquiry.
            </p>

            <form onSubmit={submitEnquiry} className="mt-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="font-bold text-blue-950">
                    Customer Name
                  </label>

                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
                  />
                </div>

                <div>
                  <label className="font-bold text-blue-950">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    placeholder="10-digit mobile number"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
                  />
                </div>

                <div>
                  <label className="font-bold text-blue-950">
                    Pickup Location
                  </label>

                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup location"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
                  />
                </div>

                <div>
                  <label className="font-bold text-blue-950">
                    Delivery Location
                  </label>

                  <input
                    type="text"
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    placeholder="Enter delivery location"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
                  />
                </div>

                <div>
                  <label className="font-bold text-blue-950">
                    Service Required
                  </label>

                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
                  >
                    <option value="">Select service</option>

                    {services.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-blue-950">
                    Truck Type
                  </label>

                  <select
                    value={truck}
                    onChange={(e) => setTruck(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
                  >
                    <option value="">Select truck type</option>

                    {truckTypes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="font-bold text-blue-950">
                  Pickup Date
                </label>

                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
                />
              </div>

              <button
                type="submit"
                disabled={saving}
                className="mt-7 w-full rounded-xl bg-teal-500 py-4 text-lg font-black text-white shadow-lg transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Submitting..."
                  : "🚚 Get My Transport Price →"}
              </button>

              {message && (
                <div className="mt-5 rounded-xl bg-blue-50 p-4 text-center font-semibold text-blue-900">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <div className="font-bold text-[#08c9bd]">
            QUICK OPTIONS
          </div>

          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Looking for something specific?
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/house-shifting"
              className="rounded-xl bg-white px-6 py-3 font-bold text-blue-950 shadow-sm hover:shadow-md"
            >
              🏠 House Shifting
            </Link>

            <Link
              href="/packers-movers"
              className="rounded-xl bg-white px-6 py-3 font-bold text-blue-950 shadow-sm hover:shadow-md"
            >
              📦 Packers & Movers
            </Link>

            <Link
              href="/load-search"
              className="rounded-xl bg-white px-6 py-3 font-bold text-blue-950 shadow-sm hover:shadow-md"
            >
              🚚 Find Loads
            </Link>

            <Link
              href="/track-shipment"
              className="rounded-xl bg-white px-6 py-3 font-bold text-blue-950 shadow-sm hover:shadow-md"
            >
              📍 Track Shipment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}