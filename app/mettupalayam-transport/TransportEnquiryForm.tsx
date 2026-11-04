"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/app/lib/supabase";

const services = [
  "Full Load Transport",
  "Part Load Transport",
  "House Shifting",
  "Packers and Movers",
  "Commercial Transport",
  "Industrial Transport",
];

const truckTypes = [
  "Mini Truck",
  "Tata Ace / Chota Hathi",
  "Pickup Truck",
  "7 Feet Truck",
  "14 Feet Truck",
  "17 Feet Truck",
  "19 Feet Truck",
  "22 Feet Truck",
  "32 Feet Truck",
  "Container Truck",
  "Not Sure - Recommend a Truck",
];

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState(
    "Mettupalayam, Coimbatore, Tamil Nadu"
  );
  const [delivery, setDelivery] = useState("");
  const [loadType, setLoadType] = useState("Full Load Transport");
  const [truckType, setTruckType] = useState(
    "Not Sure - Recommend a Truck"
  );
  const [pickupDate, setPickupDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!pickup.trim() || !delivery.trim()) {
      setMessage("Please enter both pickup and delivery locations.");
      return;
    }

    setLoading(true);

    const whatsappWindow = window.open("", "_blank");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          customer_name: customerName.trim(),
          phone: cleanPhone,
          pickup: pickup.trim(),
          delivery: delivery.trim(),
          load_type: loadType,
          truck_type: truckType,
          pickup_date: pickupDate || null,
          source: "mettupalayam_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Mettupalayam transport enquiry error:", error);
        whatsappWindow?.close();
        setMessage(
          "We could not submit your enquiry right now. Please try again or contact LOADZY."
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
        `Truck Type: ${truckType}`,
        `Pickup Date: ${pickupDate || "Not decided"}`,
        "Source: Mettupalayam Transport Page",
      ].join("\n");

      if (whatsappWindow) {
        whatsappWindow.location.href =
          `https://wa.me/919019499448?text=${encodeURIComponent(
            whatsappMessage
          )}`;
      } else {
        window.location.href =
          `https://wa.me/919019499448?text=${encodeURIComponent(
            whatsappMessage
          )}`;
      }

      setMessage("Enquiry submitted. Continue in WhatsApp to share your details.");
      setCustomerName("");
      setPhone("");
      setDelivery("");
      setLoadType("Full Load Transport");
      setTruckType("Not Sure - Recommend a Truck");
      setPickupDate("");
    } catch (error) {
      console.error("Unable to submit enquiry:", error);
      whatsappWindow?.close();
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100";

  return (
    <div
      id="transport-enquiry"
      className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl md:p-8"
    >
      <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal-700">
        LOADZY Transport
      </p>
      <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
        Book a Truck in Mettupalayam
      </h2>
      <p className="mt-3 leading-7 text-slate-600">
        Share your route and load details to enquire about suitable transport
        options.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="customerName" className="text-sm font-bold">
            Customer Name *
          </label>
          <input
            id="customerName"
            name="customer_name"
            autoComplete="name"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className={inputClass}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-bold">
            Mobile Number *
          </label>
          <input
            id="phone"
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
            className={inputClass}
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label htmlFor="pickup" className="text-sm font-bold">
            Pickup Location *
          </label>
          <input
            id="pickup"
            name="pickup"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className={inputClass}
            placeholder="Pickup area or address"
          />
        </div>

        <div>
          <label htmlFor="delivery" className="text-sm font-bold">
            Delivery Location *
          </label>
          <input
            id="delivery"
            name="delivery"
            required
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            className={inputClass}
            placeholder="Destination area or address"
          />
        </div>

        <div>
          <label htmlFor="loadType" className="text-sm font-bold">
            Service Required *
          </label>
          <select
            id="loadType"
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
          <label htmlFor="truckType" className="text-sm font-bold">
            Truck Type
          </label>
          <select
            id="truckType"
            name="truck_type"
            value={truckType}
            onChange={(e) => setTruckType(e.target.value)}
            className={inputClass}
          >
            {truckTypes.map((truck) => (
              <option key={truck} value={truck}>
                {truck}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pickupDate" className="text-sm font-bold">
            Preferred Pickup Date
          </label>
          <input
            id="pickupDate"
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
            className="rounded-xl bg-teal-50 p-3 text-sm leading-6 text-teal-900"
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-yellow-400 px-6 py-4 font-extrabold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting Enquiry..." : "Submit Enquiry via WhatsApp →"}
        </button>

        <p className="text-xs leading-5 text-slate-500">
          Truck availability, freight charges, and pickup timing are subject
          to confirmation. Submitting an enquiry does not confirm a booking.
        </p>
      </form>
    </div>
  );
}
