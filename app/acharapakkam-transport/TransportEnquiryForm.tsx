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

const DEFAULT_PICKUP = "Acharapakkam, Tamil Nadu";
const WHATSAPP_NUMBER = "919019499448";

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState(DEFAULT_PICKUP);
  const [delivery, setDelivery] = useState("");
  const [loadType, setLoadType] = useState("");
  const [truckType, setTruckType] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  const resetForm = () => {
    setCustomerName("");
    setPhone("");
    setPickup(DEFAULT_PICKUP);
    setDelivery("");
    setLoadType("");
    setTruckType("");
    setPickupDate("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

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
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    if (!/^\d{10}$/.test(cleanPhone)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (pickupDate < today) {
      setErrorMessage("Please select today or a future pickup date.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("leads").insert([
        {
          customer_name: cleanName,
          phone: cleanPhone,
          pickup: cleanPickup,
          delivery: cleanDelivery,
          load_type: loadType,
          truck_type: truckType,
          pickup_date: pickupDate,
          source: "acharapakkam_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Acharapakkam lead submission failed:", error);
        setErrorMessage(
          "We couldn't submit your enquiry right now. Please try again."
        );
        return;
      }

      setSuccessMessage("Your enquiry has been submitted successfully!");

      const message = [
        "Hello LOADZY, I want to enquire about transport from Acharapakkam.",
        "",
        `Customer Name: ${cleanName}`,
        `Phone: ${cleanPhone}`,
        `Pickup Location: ${cleanPickup}`,
        `Delivery Location: ${cleanDelivery}`,
        `Service Type: ${loadType}`,
        `Truck Type: ${truckType}`,
        `Pickup Date: ${pickupDate}`,
        "Source: Acharapakkam Transport Page",
      ].join("\n");

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      resetForm();
    } catch (error) {
      console.error("Acharapakkam transport enquiry error:", error);
      setErrorMessage(
        "Something went wrong. Please try again or contact LOADZY."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    "w-full min-w-0 rounded-xl border border-slate-600 bg-[#293448] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20";

  const labelClassName = "mb-2 block text-sm font-semibold text-slate-200";

  return (
    <div className="w-full min-w-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1c2939] via-[#202e40] to-[#12313b] p-4 text-white shadow-2xl sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#08D6C0]">
            Transport Enquiry
          </p>
          <h2 className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl">
            Move Goods from Acharapakkam
          </h2>
        </div>
        <span className="mt-1 text-3xl" aria-hidden="true">
          🚚
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="acharapakkam-name" className={labelClassName}>
            Customer Name *
          </label>
          <input
            id="acharapakkam-name"
            name="customer_name"
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="acharapakkam-phone" className={labelClassName}>
            Phone Number *
          </label>
          <input
            id="acharapakkam-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
            }
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="acharapakkam-pickup" className={labelClassName}>
            Pickup Location *
          </label>
          <input
            id="acharapakkam-pickup"
            name="pickup"
            type="text"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="acharapakkam-delivery" className={labelClassName}>
            Delivery Location *
          </label>
          <input
            id="acharapakkam-delivery"
            name="delivery"
            type="text"
            placeholder="Enter destination"
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)}
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="acharapakkam-service" className={labelClassName}>
            Service Required *
          </label>
          <select
            id="acharapakkam-service"
            name="load_type"
            value={loadType}
            onChange={(event) => setLoadType(event.target.value)}
            className={inputClassName}
            required
          >
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service} value={service} className="bg-[#293448]">
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="acharapakkam-truck" className={labelClassName}>
            Truck Type *
          </label>
          <select
            id="acharapakkam-truck"
            name="truck_type"
            value={truckType}
            onChange={(event) => setTruckType(event.target.value)}
            className={inputClassName}
            required
          >
            <option value="">Select truck type</option>
            {truckTypes.map((truck) => (
              <option key={truck} value={truck} className="bg-[#293448]">
                {truck}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="acharapakkam-date" className={labelClassName}>
            Pickup Date *
          </label>
          <input
            id="acharapakkam-date"
            name="pickup_date"
            type="date"
            min={today}
            value={pickupDate}
            onChange={(event) => setPickupDate(event.target.value)}
            className={inputClassName}
            required
          />
        </div>

        {errorMessage && (
          <div
            role="alert"
            className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
          >
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div
            role="status"
            className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
          >
            {successMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#08A99F] px-5 py-3 font-bold text-white shadow-lg transition hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#1c2939] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting Enquiry..." : "Submit Transport Enquiry →"}
        </button>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hello LOADZY, I need transport service from Acharapakkam."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 w-full items-center justify-center rounded-xl border border-[#08A99F]/60 px-5 py-3 text-sm font-bold text-[#66E5D8] transition hover:bg-[#08A99F]/10"
        >
          Enquire on WhatsApp
        </a>

        <p className="text-center text-xs leading-5 text-slate-400">
          Please confirm truck availability, freight charges, and pickup
          arrangements before finalising your booking.
        </p>
      </form>
    </div>
  );
}
