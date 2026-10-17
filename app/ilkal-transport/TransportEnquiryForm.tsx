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
  const [pickup, setPickup] = useState("Ilkal, Karnataka");
  const [delivery, setDelivery] = useState("");
  const [service, setService] = useState("");
  const [truck, setTruck] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !customerName.trim() ||
      !phone ||
      !pickup.trim() ||
      !delivery.trim() ||
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

    const whatsappWindow = window.open("about:blank", "_blank");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          customer_name: customerName.trim(),
          phone,
          pickup: pickup.trim(),
          delivery: delivery.trim(),
          load_type: service,
          truck_type: truck,
          pickup_date: pickupDate,
          source: "ilkal_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Ilkal enquiry error:", error);

        if (whatsappWindow) {
          whatsappWindow.close();
        }

        setMessage("Unable to save your enquiry. Please try again.");
        return;
      }

      const whatsappMessage = `🚚 LOADZY Transport Enquiry

Customer Name: ${customerName.trim()}
Phone: ${phone}
Pickup: ${pickup.trim()}
Delivery: ${delivery.trim()}
Service: ${service}
Truck: ${truck}
Pickup Date: ${pickupDate}
Source: Ilkal Transport Page`;

      const whatsappUrl =
        `https://wa.me/919019499448?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        setMessage(
          "Your enquiry was saved, but WhatsApp could not open. Please allow pop-ups or contact LOADZY."
        );
      }

      if (whatsappWindow) {
        setMessage("✅ Enquiry saved successfully! WhatsApp is opening.");
      }

      setCustomerName("");
      setPhone("");
      setPickup("Ilkal, Karnataka");
      setDelivery("");
      setService("");
      setTruck("");
      setPickupDate("");
    } catch (error) {
      console.error("Unexpected Ilkal enquiry error:", error);

      if (whatsappWindow) {
        whatsappWindow.close();
      }

      setMessage("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20";

  const labelClass = "text-sm font-semibold text-slate-700";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl md:p-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#08A99F]">
            TRANSPORT ENQUIRY
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#10182D]">
            Move Goods from Ilkal
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enquire about truck booking for Ilkal sarees, textiles and other goods.
          </p>
        </div>

        <span className="text-4xl" aria-hidden="true">
          🚚
        </span>
      </div>

      <form onSubmit={submitEnquiry} className="space-y-4">
        <div>
          <label className={labelClass} htmlFor="ilkal-name">
            Customer Name *
          </label>
          <input
            id="ilkal-name"
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
          <label className={labelClass} htmlFor="ilkal-phone">
            Phone Number *
          </label>
          <input
            id="ilkal-phone"
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
          <label className={labelClass} htmlFor="ilkal-pickup">
            Pickup Location *
          </label>
          <input
            id="ilkal-pickup"
            type="text"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup location"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="ilkal-delivery">
            Delivery Location *
          </label>
          <input
            id="ilkal-delivery"
            type="text"
            required
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            placeholder="Enter destination"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="ilkal-service">
            Service Required *
          </label>
          <select
            id="ilkal-service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            <option value="">Select service</option>
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="ilkal-truck">
            Truck Type *
          </label>
          <select
            id="ilkal-truck"
            required
            value={truck}
            onChange={(e) => setTruck(e.target.value)}
            className={inputClass}
          >
            <option value="">Select truck type</option>
            {truckTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="ilkal-date">
            Pickup Date *
          </label>
          <input
            id="ilkal-date"
            type="date"
            required
            min={new Date().toLocaleDateString("en-CA")}
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
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-semibold text-slate-800"
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