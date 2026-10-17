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
  const [pickup, setPickup] = useState("Siruguppa, Karnataka");
  const [delivery, setDelivery] = useState("");
  const [service, setService] = useState("");
  const [truck, setTruck] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  async function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const cleanName = customerName.trim();
    const cleanPhone = phone.replace(/\D/g, "");
    const cleanPickup = pickup.trim();
    const cleanDelivery = delivery.trim();

    if (
      !cleanName ||
      !cleanPhone ||
      !cleanPickup ||
      !cleanDelivery ||
      !service ||
      !truck ||
      !pickupDate
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (cleanPickup.toLowerCase() === cleanDelivery.toLowerCase()) {
      setMessage("Pickup and delivery locations must be different.");
      return;
    }

    if (pickupDate < today) {
      setMessage("Please select today or a future pickup date.");
      return;
    }

    setSaving(true);

    // Open the WhatsApp tab from the submit action to reduce popup blocking.
    const whatsappWindow = window.open("about:blank", "_blank");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          customer_name: cleanName,
          phone: cleanPhone,
          pickup: cleanPickup,
          delivery: cleanDelivery,
          load_type: service,
          truck_type: truck,
          pickup_date: pickupDate,
          source: "siruguppa_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Siruguppa enquiry error:", error);

        if (whatsappWindow) {
          whatsappWindow.close();
        }

        setMessage("Unable to save your enquiry. Please try again.");
        return;
      }

      const whatsappMessage = `🚚 LOADZY Transport Enquiry

Customer Name: ${cleanName}
Phone: ${cleanPhone}
Pickup: ${cleanPickup}
Delivery: ${cleanDelivery}
Service: ${service}
Truck: ${truck}
Pickup Date: ${pickupDate}
Source: Siruguppa Transport Page`;

      const whatsappUrl =
        `https://wa.me/919019499448?text=${encodeURIComponent(
          whatsappMessage,
        )}`;

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        setMessage(
          "Your enquiry was saved, but WhatsApp could not open. Please allow pop-ups or contact LOADZY.",
        );
      }

      setMessage("✅ Enquiry saved successfully! WhatsApp is opening.");

      setCustomerName("");
      setPhone("");
      setPickup("Siruguppa, Karnataka");
      setDelivery("");
      setService("");
      setTruck("");
      setPickupDate("");
    } catch (error) {
      console.error("Unexpected Siruguppa enquiry error:", error);

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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#08A99F]">
            TRANSPORT ENQUIRY
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#10182D]">
            Move Goods from Siruguppa
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enquire about truck booking for agricultural goods, rice,
            commercial consignments and other goods from Siruguppa.
          </p>
        </div>

        <span className="text-4xl" aria-hidden="true">
          🚚
        </span>
      </div>

      <form onSubmit={submitEnquiry} className="space-y-4">
        <div>
          <label className={labelClass} htmlFor="siruguppa-name">
            Customer Name *
          </label>

          <input
            id="siruguppa-name"
            name="customer_name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="siruguppa-phone">
            Phone Number *
          </label>

          <input
            id="siruguppa-phone"
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
          <label className={labelClass} htmlFor="siruguppa-pickup">
            Pickup Location *
          </label>

          <input
            id="siruguppa-pickup"
            name="pickup"
            type="text"
            maxLength={200}
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup location"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="siruguppa-delivery">
            Delivery Location *
          </label>

          <input
            id="siruguppa-delivery"
            name="delivery"
            type="text"
            maxLength={200}
            required
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            placeholder="Enter destination"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="siruguppa-service">
            Service Required *
          </label>

          <select
            id="siruguppa-service"
            name="load_type"
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
          <label className={labelClass} htmlFor="siruguppa-truck">
            Truck Type *
          </label>

          <select
            id="siruguppa-truck"
            name="truck_type"
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
          <label className={labelClass} htmlFor="siruguppa-date">
            Pickup Date *
          </label>

          <input
            id="siruguppa-date"
            name="pickup_date"
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