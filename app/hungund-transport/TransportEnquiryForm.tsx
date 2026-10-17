"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

const services = [
  "Full Load",
  "Part Load",
  "Packers and Movers",
  "House Shifting",
  "Commercial Transport",
  "Industrial Transport",
  "Agricultural Goods Transport",
  "Other",
];

const truckTypes = [
  "Tata Ace / Mini Truck",
  "Pickup Truck",
  "14 Feet Truck",
  "17 Feet Truck",
  "19 Feet Truck",
  "20 Feet Truck",
  "22 Feet Truck",
  "32 Feet Truck",
  "Container Truck",
  "Not Sure",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#293247] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20";

const labelClass = "text-sm font-semibold text-slate-200";

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("Hungund, Karnataka");
  const [delivery, setDelivery] = useState("");
  const [loadType, setLoadType] = useState("Full Load");
  const [truckType, setTruckType] = useState("Not Sure");
  const [pickupDate, setPickupDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const cleanName = customerName.trim();
    const cleanPhone = phone.replace(/\D/g, "");
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
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (cleanPickup.toLowerCase() === cleanDelivery.toLowerCase()) {
      setErrorMessage(
        "Pickup and delivery locations must be different.",
      );
      return;
    }

    if (pickupDate < today) {
      setErrorMessage(
        "Please select today or a future pickup date.",
      );
      return;
    }

    setLoading(true);

    // Open a tab directly from the submit action to reduce popup blocking.
    const whatsappWindow = window.open("about:blank", "_blank");

    const enquiry = {
      customer_name: cleanName,
      phone: cleanPhone,
      pickup: cleanPickup,
      delivery: cleanDelivery,
      load_type: loadType,
      truck_type: truckType,
      pickup_date: pickupDate,
      source: "hungund_transport_page",
      status: "new",
    };

    const whatsappMessage = [
      "Hello LOADZY, I want to enquire about transport from Hungund.",
      "",
      `Name: ${cleanName}`,
      `Phone: ${cleanPhone}`,
      `Pickup: ${cleanPickup}`,
      `Delivery: ${cleanDelivery}`,
      `Service: ${loadType}`,
      `Truck type: ${truckType}`,
      `Pickup date: ${pickupDate}`,
      "",
      "Source: Hungund Transport Page",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/919019499448?text=${encodeURIComponent(
        whatsappMessage,
      )}`;

    function openWhatsApp() {
      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    }

    try {
      const { error } = await supabase
        .from("leads")
        .insert([enquiry]);

      if (error) {
        console.error("Hungund enquiry database error:", error);

        if (whatsappWindow && !whatsappWindow.closed) {
          whatsappWindow.close();
        }

        setErrorMessage(
          "Your enquiry could not be saved. Please try again.",
        );
        return;
      }

      openWhatsApp();

      setSuccessMessage(
        "Your enquiry was saved successfully. Continue in WhatsApp to send the details.",
      );

      setCustomerName("");
      setPhone("");
      setPickup("Hungund, Karnataka");
      setDelivery("");
      setLoadType("Full Load");
      setTruckType("Not Sure");
      setPickupDate("");
    } catch (error) {
      console.error("Hungund enquiry submission error:", error);

      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.close();
      }

      setErrorMessage(
        "Something went wrong while saving your enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#08A99F]">
          Transport Enquiry
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
          Move Goods from Hungund
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          Enter your shipment details. Vehicle availability and
          freight charges will need to be confirmed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hungund-customer-name" className={labelClass}>
            Customer Name *
          </label>
          <input
            id="hungund-customer-name"
            name="customer_name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="hungund-phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="hungund-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            required
            maxLength={10}
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="hungund-pickup" className={labelClass}>
            Pickup Location *
          </label>
          <input
            id="hungund-pickup"
            name="pickup"
            type="text"
            required
            maxLength={200}
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            placeholder="Enter pickup location"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="hungund-delivery" className={labelClass}>
            Delivery Location *
          </label>
          <input
            id="hungund-delivery"
            name="delivery"
            type="text"
            required
            maxLength={200}
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)}
            placeholder="Where should the goods be delivered?"
            className={inputClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="hungund-load-type" className={labelClass}>
              Service Type *
            </label>
            <select
              id="hungund-load-type"
              name="load_type"
              required
              value={loadType}
              onChange={(event) => setLoadType(event.target.value)}
              className={inputClass}
            >
              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                  className="bg-[#10182D] text-white"
                >
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="hungund-truck-type" className={labelClass}>
              Truck Type *
            </label>
            <select
              id="hungund-truck-type"
              name="truck_type"
              required
              value={truckType}
              onChange={(event) => setTruckType(event.target.value)}
              className={inputClass}
            >
              {truckTypes.map((truck) => (
                <option
                  key={truck}
                  value={truck}
                  className="bg-[#10182D] text-white"
                >
                  {truck}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="hungund-pickup-date" className={labelClass}>
            Preferred Pickup Date *
          </label>
          <input
            id="hungund-pickup-date"
            name="pickup_date"
            type="date"
            required
            min={today}
            value={pickupDate}
            onChange={(event) => setPickupDate(event.target.value)}
            className={inputClass}
          />
        </div>

        {errorMessage && (
          <p
            role="alert"
            className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200"
          >
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p
            role="status"
            className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-emerald-200"
          >
            {successMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#08A99F] px-6 py-4 font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Submitting Enquiry..."
            : "Submit Enquiry & Continue to WhatsApp →"}
        </button>

        <p className="text-center text-xs leading-5 text-slate-400">
          Submitting an enquiry does not guarantee a truck. Please
          confirm availability, freight charges and pickup arrangements.
        </p>
      </form>
    </div>
  );
}
