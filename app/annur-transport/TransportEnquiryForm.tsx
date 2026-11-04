"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

const WHATSAPP_NUMBER = "919019499448";

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

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20";

const labelClass = "block text-sm font-semibold text-slate-700";

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("Annur, Coimbatore, Tamil Nadu");
  const [delivery, setDelivery] = useState("");
  const [service, setService] = useState("Truck Transport");
  const [truck, setTruck] = useState("10FT Truck");
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [saving, setSaving] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  async function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    const cleanPhone = phone.replace(/\D/g, "");

    if (
      !customerName.trim() ||
      !cleanPhone ||
      !pickup.trim() ||
      !delivery.trim() ||
      !service ||
      !truck ||
      !pickupDate
    ) {
      setMessage("Please fill in all required fields.");
      setMessageType("error");
      return;
    }

    if (!/^\d{10}$/.test(cleanPhone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      setMessageType("error");
      return;
    }

    if (pickupDate < today) {
      setMessage("Please select today or a future pickup date.");
      setMessageType("error");
      return;
    }

    // Open the tab during the submit action to reduce popup blocking.
    const whatsappWindow = window.open("about:blank", "_blank");
    setSaving(true);

    try {
      const { error } = await supabase.from("leads").insert([
        {
          customer_name: customerName.trim(),
          phone: cleanPhone,
          pickup: pickup.trim(),
          delivery: delivery.trim(),
          load_type: service,
          truck_type: truck,
          pickup_date: pickupDate,
          source: "annur_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Annur enquiry error:", error);

        if (whatsappWindow) {
          whatsappWindow.close();
        }

        setMessage("Unable to save your enquiry. Please try again.");
        setMessageType("error");
        return;
      }

      const whatsappMessage = [
        "🚚 LOADZY Transport Enquiry",
        "",
        "Source: Annur Transport Page",
        `Customer Name: ${customerName.trim()}`,
        `Phone: ${cleanPhone}`,
        `Pickup Location: ${pickup.trim()}`,
        `Delivery Location: ${delivery.trim()}`,
        `Service Required: ${service}`,
        `Truck Type: ${truck}`,
        `Pickup Date: ${pickupDate}`,
      ].join("\n");

      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      }

      setMessage(
        whatsappWindow
          ? "Your enquiry was saved successfully. WhatsApp is opening."
          : "Your enquiry was saved successfully. Allow pop-ups to open WhatsApp, or contact LOADZY directly."
      );
      setMessageType("success");

      setCustomerName("");
      setPhone("");
      setPickup("Annur, Coimbatore, Tamil Nadu");
      setDelivery("");
      setService("Truck Transport");
      setTruck("10FT Truck");
      setPickupDate("");
    } catch (error) {
      console.error("Unexpected Annur enquiry error:", error);

      if (whatsappWindow) {
        whatsappWindow.close();
      }

      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      id="transport-enquiry"
      className="w-full rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Transport enquiry
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#10182D] sm:text-3xl">
          Move goods from Annur
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share your details and transport requirements. Submit your enquiry to
          proceed with LOADZY.
        </p>
      </div>

      <form onSubmit={submitEnquiry} className="space-y-4">
        <div>
          <label className={labelClass} htmlFor="annur-name">
            Customer Name *
          </label>
          <input
            id="annur-name"
            type="text"
            autoComplete="name"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="annur-phone">
            Phone Number *
          </label>
          <input
            id="annur-phone"
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
          <label className={labelClass} htmlFor="annur-pickup">
            Pickup Location *
          </label>
          <input
            id="annur-pickup"
            type="text"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup location"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="annur-delivery">
            Delivery Location *
          </label>
          <input
            id="annur-delivery"
            type="text"
            required
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            placeholder="Enter destination"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="annur-service">
            Service Required *
          </label>
          <select
            id="annur-service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="annur-truck">
            Truck Type *
          </label>
          <select
            id="annur-truck"
            required
            value={truck}
            onChange={(e) => setTruck(e.target.value)}
            className={inputClass}
          >
            {truckTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="annur-date">
            Pickup Date *
          </label>
          <input
            id="annur-date"
            type="date"
            required
            min={today}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-xl bg-[#08A99F] px-5 py-4 font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Submitting..." : "Submit Transport Enquiry →"}
        </button>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-xl border p-4 text-center text-sm font-semibold ${
              messageType === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-teal-200 bg-teal-50 text-teal-800"
            }`}
          >
            {message}
          </div>
        )}
      </form>

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        Your enquiry is saved before WhatsApp opens. Truck availability and
        freight charges must be confirmed.
      </p>
    </div>
  );
}