"use client";

import { useState } from "react";
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
  "7FT",
  "10FT",
  "14FT",
  "17FT",
  "20FT",
  "22FT",
  "24FT",
  "34FT",
  "Multi-Axle",
];

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("Bailhongal, Karnataka");
  const [delivery, setDelivery] = useState("");
  const [loadType, setLoadType] = useState("Truck Transport");
  const [truckType, setTruckType] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!customerName.trim() || !pickup.trim() || !delivery.trim()) {
      setMessage("Please complete all required fields.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("leads").insert([
        {
          customer_name: customerName.trim(),
          phone: cleanPhone,
          pickup: pickup.trim(),
          delivery: delivery.trim(),
          load_type: loadType,
          truck_type: truckType || null,
          pickup_date: pickupDate || null,
          source: "bailhongal_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Bailhongal enquiry insert error:", error);
        setMessage(
          "We couldn't submit your enquiry right now. Please try again.",
        );
        return;
      }

      const whatsappMessage = [
        "Hello LOADZY, I want a transport quotation.",
        "",
        `Name: ${customerName.trim()}`,
        `Phone: ${cleanPhone}`,
        `Pickup: ${pickup.trim()}`,
        `Delivery: ${delivery.trim()}`,
        `Service: ${loadType}`,
        `Truck type: ${truckType || "Not specified"}`,
        `Pickup date: ${pickupDate || "Not specified"}`,
        "Source: Bailhongal Transport Page",
      ].join("\n");

      setMessage("Enquiry submitted successfully! Opening WhatsApp...");

      const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(
        whatsappMessage,
      )}`;

      window.location.assign(whatsappUrl);
    } catch (error) {
      console.error("Bailhongal enquiry error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20";

  return (
    <div
      id="bailhongal-enquiry"
      className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl md:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-widest text-[#08A99F]">
          Transport enquiry
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-[#10182D] md:text-3xl">
          Get Your Transport Price
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your shipment details. Our team can review your requirements
          and confirm availability and freight charges.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="bailhongal-customer-name"
            className="text-sm font-semibold text-slate-700"
          >
            Customer Name *
          </label>
          <input
            id="bailhongal-customer-name"
            name="customer_name"
            type="text"
            autoComplete="name"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="bailhongal-phone"
            className="text-sm font-semibold text-slate-700"
          >
            Mobile Number *
          </label>
          <input
            id="bailhongal-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="bailhongal-pickup"
            className="text-sm font-semibold text-slate-700"
          >
            Pickup Location *
          </label>
          <input
            id="bailhongal-pickup"
            name="pickup"
            type="text"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup location"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="bailhongal-delivery"
            className="text-sm font-semibold text-slate-700"
          >
            Delivery Location *
          </label>
          <input
            id="bailhongal-delivery"
            name="delivery"
            type="text"
            required
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            placeholder="Enter delivery city or address"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="bailhongal-load-type"
            className="text-sm font-semibold text-slate-700"
          >
            Service Type *
          </label>
          <select
            id="bailhongal-load-type"
            name="load_type"
            required
            value={loadType}
            onChange={(e) => setLoadType(e.target.value)}
            className={inputClass}
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="bailhongal-truck-type"
            className="text-sm font-semibold text-slate-700"
          >
            Truck Type
          </label>
          <select
            id="bailhongal-truck-type"
            name="truck_type"
            value={truckType}
            onChange={(e) => setTruckType(e.target.value)}
            className={inputClass}
          >
            <option value="">Select truck type</option>
            {truckTypes.map((truck) => (
              <option key={truck} value={truck}>
                {truck}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="bailhongal-pickup-date"
            className="text-sm font-semibold text-slate-700"
          >
            Preferred Pickup Date
          </label>
          <input
            id="bailhongal-pickup-date"
            name="pickup_date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className={inputClass}
          />
        </div>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`rounded-xl p-3 text-sm ${
              message.startsWith("Enquiry submitted")
                ? "bg-teal-50 text-teal-800"
                : "bg-red-50 text-red-700"
            }`}
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-yellow-400 px-6 py-4 font-extrabold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting Enquiry..." : "Submit Transport Enquiry →"}
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          Submitting an enquiry does not guarantee truck availability or a
          confirmed price. Final arrangements must be confirmed.
        </p>
      </form>
    </div>
  );
}