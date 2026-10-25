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

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("Kolathur, Chennai, Tamil Nadu");
  const [delivery, setDelivery] = useState("");
  const [loadType, setLoadType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const cleanName = customerName.trim();
    const cleanPhone = phone.trim();
    const cleanPickup = pickup.trim();
    const cleanDelivery = delivery.trim();

    if (
      !cleanName ||
      !cleanPhone ||
      !cleanPickup ||
      !cleanDelivery ||
      !loadType ||
      !truckType ||
      !pickupDate
    ) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    if (!/^[0-9+\-\s()]{8,20}$/.test(cleanPhone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const { error: insertError } = await supabase.from("leads").insert([
        {
          customer_name: cleanName,
          phone: cleanPhone,
          pickup: cleanPickup,
          delivery: cleanDelivery,
          load_type: loadType,
          truck_type: truckType,
          pickup_date: pickupDate,
          source: "kolathur_transport_page",
          status: "new",
        },
      ]);

      if (insertError) {
        console.error("Kolathur enquiry error:", insertError);
        setError("Unable to submit your enquiry. Please try again.");
        return;
      }

      setSuccess("Enquiry submitted successfully. Opening WhatsApp...");

      const message = [
        "LOADZY Transport Enquiry",
        "",
        `Customer Name: ${cleanName}`,
        `Phone: ${cleanPhone}`,
        `Pickup Location: ${cleanPickup}`,
        `Delivery Location: ${cleanDelivery}`,
        `Load Type: ${loadType}`,
        `Truck Type: ${truckType}`,
        `Pickup Date: ${pickupDate}`,
        "Source: Kolathur Transport Page",
      ].join("\n");

      const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setCustomerName("");
      setPhone("");
      setPickup("Kolathur, Chennai, Tamil Nadu");
      setDelivery("");
      setLoadType("");
      setTruckType("");
      setPickupDate("");
    } catch (unexpectedError) {
      console.error("Unexpected Kolathur enquiry error:", unexpectedError);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20";

  return (
    <div
      id="transport-enquiry-form"
      className="scroll-mt-24 rounded-3xl bg-white p-6 text-slate-800 shadow-2xl md:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#08A99F]">
          LOADZY Transport
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
          Move goods from Kolathur
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Share your transport requirements. Our team can follow up to confirm
          suitable vehicle options, availability, and freight charges.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="kolathur-name" className="text-sm font-bold text-slate-700">
            Customer Name *
          </label>
          <input
            id="kolathur-name"
            className={inputClass}
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label htmlFor="kolathur-phone" className="text-sm font-bold text-slate-700">
            Phone Number *
          </label>
          <input
            id="kolathur-phone"
            className={inputClass}
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter your phone number"
            autoComplete="tel"
            required
          />
        </div>

        <div>
          <label htmlFor="kolathur-pickup" className="text-sm font-bold text-slate-700">
            Pickup Location *
          </label>
          <input
            id="kolathur-pickup"
            className={inputClass}
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            placeholder="Enter pickup location"
            required
          />
        </div>

        <div>
          <label htmlFor="kolathur-delivery" className="text-sm font-bold text-slate-700">
            Delivery Location *
          </label>
          <input
            id="kolathur-delivery"
            className={inputClass}
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)}
            placeholder="Enter delivery location"
            required
          />
        </div>

        <div>
          <label htmlFor="kolathur-service" className="text-sm font-bold text-slate-700">
            Service / Load Type *
          </label>
          <select
            id="kolathur-service"
            className={inputClass}
            value={loadType}
            onChange={(event) => setLoadType(event.target.value)}
            required
          >
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="kolathur-truck" className="text-sm font-bold text-slate-700">
            Required Truck Type *
          </label>
          <select
            id="kolathur-truck"
            className={inputClass}
            value={truckType}
            onChange={(event) => setTruckType(event.target.value)}
            required
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
          <label htmlFor="kolathur-date" className="text-sm font-bold text-slate-700">
            Pickup Date *
          </label>
          
<input
  id="kolathur-date"
  className={inputClass}
  type="date"
  value={pickupDate}
  onChange={(event) => setPickupDate(event.target.value)}
  required
/>

        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        {success && (
          <p
            role="status"
            className="rounded-xl border border-teal-200 bg-teal-50 p-3 text-sm text-teal-800"
          >
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#08A99F] px-6 py-4 font-extrabold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting Enquiry..." : "Submit Enquiry via WhatsApp →"}
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          Your request is saved to our enquiry system when submission succeeds.
          Vehicle availability and freight charges require confirmation.
        </p>
      </form>
    </div>
  );
}
