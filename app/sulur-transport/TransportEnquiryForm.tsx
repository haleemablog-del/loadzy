"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/app/lib/supabase";

const WHATSAPP_NUMBER = "919019499448";

export default function TransportEnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName = String(formData.get("customer_name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const pickup = String(formData.get("pickup") || "").trim();
    const delivery = String(formData.get("delivery") || "").trim();
    const loadType = String(formData.get("load_type") || "").trim();
    const truckType = String(formData.get("truck_type") || "").trim();
    const pickupDate = String(formData.get("pickup_date") || "").trim();

    if (
      !customerName ||
      !phone ||
      !pickup ||
      !delivery ||
      !loadType ||
      !truckType ||
      !pickupDate
    ) {
      setMessage("Please complete all fields before submitting.");
      setMessageType("error");
      setLoading(false);
      return;
    }

    const normalizedPhone = phone.replace(/\D/g, "");
    if (!/^\d{10}$/.test(normalizedPhone)) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      setMessageType("error");
      setLoading(false);
      return;
    }

    const enquiry = {
      customer_name: customerName,
      phone: normalizedPhone,
      pickup,
      delivery,
      load_type: loadType,
      truck_type: truckType,
      pickup_date: pickupDate,
      source: "sulur_transport_page",
      status: "new",
    };

    try {
      const { error } = await supabase.from("leads").insert([enquiry]);

      if (error) {
        console.error("Sulur transport enquiry error:", error);
        setMessage(
          "We could not submit your enquiry right now. Please try again or contact LOADZY.",
        );
        setMessageType("error");
        return;
      }

      setMessage(
        "Your enquiry was submitted successfully. WhatsApp will open so you can share the details with LOADZY.",
      );
      setMessageType("success");

      const whatsappText = [
        "Hello LOADZY, I would like to enquire about transport from Sulur.",
        "",
        `Name: ${customerName}`,
        `Phone: ${normalizedPhone}`,
        `Pickup: ${pickup}`,
        `Delivery: ${delivery}`,
        `Load Type: ${loadType}`,
        `Truck Type: ${truckType}`,
        `Pickup Date: ${pickupDate}`,
      ].join("\n");

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`,
        "_blank",
        "noopener,noreferrer",
      );

      form.reset();
    } catch (error) {
      console.error("Unexpected Sulur enquiry error:", error);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#08A99F]">
        Transport enquiry
      </p>
      <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
        Book a Truck in Sulur
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Tell us about your shipment. Submit your details to send a transport
        enquiry to LOADZY.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="sulur-customer-name"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Customer Name *
          </label>
          <input
            id="sulur-customer-name"
            name="customer_name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20"
          />
        </div>

        <div>
          <label
            htmlFor="sulur-phone"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Mobile Number *
          </label>
          <input
            id="sulur-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            minLength={10}
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20"
          />
        </div>

        <div>
          <label
            htmlFor="sulur-pickup"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Pickup Location *
          </label>
          <input
            id="sulur-pickup"
            name="pickup"
            type="text"
            defaultValue="Sulur, Coimbatore, Tamil Nadu"
            placeholder="Enter pickup location"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20"
          />
        </div>

        <div>
          <label
            htmlFor="sulur-delivery"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Delivery Location *
          </label>
          <input
            id="sulur-delivery"
            name="delivery"
            type="text"
            placeholder="Enter destination city or address"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20"
          />
        </div>

        <div>
          <label
            htmlFor="sulur-load-type"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Service / Load Type *
          </label>
          <select
            id="sulur-load-type"
            name="load_type"
            defaultValue=""
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20"
          >
            <option value="" disabled>
              Select service type
            </option>
            <option value="Truck Transport">Truck Transport</option>
            <option value="Full Load Transport">Full Load Transport</option>
            <option value="Part Load Transport">Part Load Transport</option>
            <option value="Household Shifting">Household Shifting</option>
            <option value="Packers and Movers">Packers and Movers</option>
            <option value="Industrial Transport">Industrial Transport</option>
            <option value="Commercial Transport">Commercial Transport</option>
            <option value="Fruits and Vegetables">Fruits and Vegetables</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sulur-truck-type"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Required Truck Type *
          </label>
          <select
            id="sulur-truck-type"
            name="truck_type"
            defaultValue=""
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20"
          >
            <option value="" disabled>
              Select truck type
            </option>
            <option value="Tata Ace">Tata Ace</option>
            <option value="7FT">7FT Truck</option>
            <option value="10FT">10FT Truck</option>
            <option value="14FT">14FT Truck</option>
            <option value="17FT">17FT Truck</option>
            <option value="20FT">20FT Truck</option>
            <option value="22FT">22FT Truck</option>
            <option value="24FT">24FT Truck</option>
            <option value="32FT / 34FT">32FT / 34FT Truck</option>
            <option value="Multi-Axle">Multi-Axle Truck</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sulur-pickup-date"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Preferred Pickup Date *
          </label>
          <input
            id="sulur-pickup-date"
            name="pickup_date"
            type="date"
            min={new Date().toLocaleDateString("en-CA")}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20"
          />
        </div>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-xl p-3 text-sm leading-6 ${
              messageType === "success"
                ? "border border-green-200 bg-green-50 text-green-800"
                : "border border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#08A99F] px-6 py-4 font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting Enquiry..." : "Submit Transport Enquiry →"}
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          Vehicle availability, freight charges and pickup arrangements require
          confirmation.
        </p>
      </form>
    </div>
  );
}
