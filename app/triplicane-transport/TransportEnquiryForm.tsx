"use client";

import { useState, type FormEvent } from "react";
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

const DEFAULT_PICKUP = "Triplicane, Chennai, Tamil Nadu";
const WHATSAPP_NUMBER = "919019499448";

function getLocalDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState(DEFAULT_PICKUP);
  const [delivery, setDelivery] = useState("");
  const [service, setService] = useState("");
  const [truck, setTruck] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function submitEnquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (saving) return;

    const nameValue = customerName.trim();
    const phoneValue = phone.trim();
    const pickupValue = pickup.trim();
    const deliveryValue = delivery.trim();

    if (
      !nameValue ||
      !phoneValue ||
      !pickupValue ||
      !deliveryValue ||
      !service ||
      !truck ||
      !pickupDate
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phoneValue)) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (pickupDate < getLocalDate()) {
      setMessage("Please select today or a future pickup date.");
      return;
    }

    setSaving(true);
    setMessage("");

    // Open the tab during the user action to reduce popup-blocking issues.
    const whatsappWindow = window.open("about:blank", "_blank");

    const whatsappMessage = `LOADZY TRANSPORT ENQUIRY

Customer Name: ${nameValue}
Phone: ${phoneValue}
Pickup: ${pickupValue}
Delivery: ${deliveryValue}
Service: ${service}
Truck Type: ${truck}
Pickup Date: ${pickupDate}
Source: Triplicane Transport Page`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    let enquirySaved = false;

    try {
      const { error } = await supabase.from("leads").insert([
        {
          customer_name: nameValue,
          phone: phoneValue,
          pickup: pickupValue,
          delivery: deliveryValue,
          load_type: service,
          truck_type: truck,
          pickup_date: pickupDate,
          source: "triplicane_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Triplicane enquiry save failed:", error);
      } else {
        enquirySaved = true;
      }
    } catch (error) {
      console.error("Unexpected Triplicane enquiry save error:", error);
    }

    // Open WhatsApp whether the database save succeeded or failed.
    try {
      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error("Unable to open WhatsApp:", error);
      window.location.href = whatsappUrl;
    }

    if (enquirySaved) {
      setMessage(
        "Enquiry saved successfully! WhatsApp is opening so you can send your booking details to LOADZY."
      );

      setCustomerName("");
      setPhone("");
      setPickup(DEFAULT_PICKUP);
      setDelivery("");
      setService("");
      setTruck("");
      setPickupDate("");
    } else {
      setMessage(
        "WhatsApp is opening with your enquiry details, but the database save failed. Please send the WhatsApp message and notify LOADZY that the enquiry may not be recorded in the website."
      );
    }

    setSaving(false);
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/15 bg-[#293247] px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20";

  const labelClass = "text-sm font-semibold text-slate-200";

  return (
    <div
      id="transport-enquiry-form"
      className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-xl backdrop-blur-sm"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-teal-400">
            TRANSPORT ENQUIRY
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Move goods from Triplicane
          </h2>
        </div>

        <span className="text-4xl" aria-hidden="true">
          🚚
        </span>
      </div>

      <form onSubmit={submitEnquiry} className="space-y-4">
        <div>
          <label className={labelClass} htmlFor="triplicane-name">
            Customer Name *
          </label>

          <input
            id="triplicane-name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="triplicane-phone">
            Phone Number *
          </label>

          <input
            id="triplicane-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
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
          <label className={labelClass} htmlFor="triplicane-pickup">
            Pickup Location *
          </label>

          <input
            id="triplicane-pickup"
            type="text"
            required
            maxLength={250}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Pickup location"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="triplicane-delivery">
            Delivery Location *
          </label>

          <input
            id="triplicane-delivery"
            type="text"
            required
            maxLength={250}
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            placeholder="Enter destination"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="triplicane-service">
            Service Required *
          </label>

          <select
            id="triplicane-service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            <option value="">Select service</option>

            {services.map((item) => (
              <option key={item} value={item} className="bg-[#10182D]">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="triplicane-truck">
            Truck Type *
          </label>

          <select
            id="triplicane-truck"
            required
            value={truck}
            onChange={(e) => setTruck(e.target.value)}
            className={inputClass}
          >
            <option value="">Select truck type</option>

            {truckTypes.map((item) => (
              <option key={item} value={item} className="bg-[#10182D]">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="triplicane-date">
            Pickup Date *
          </label>

          <input
            id="triplicane-date"
            type="date"
            required
            min={getLocalDate()}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-xl bg-[#08A99F] px-5 py-4 font-bold text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Submitting..." : "Submit Transport Enquiry →"}
        </button>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-xl border border-white/10 bg-white/10 p-4 text-center text-sm font-semibold text-white"
          >
            {message}
          </div>
        )}
      </form>

      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
        Your enquiry is submitted to LOADZY through the website and WhatsApp.
        Truck availability and freight charges must be confirmed.
      </p>
    </div>
  );
}
