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
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#08A99F] focus:ring-2 focus:ring-[#08A99F]/20";

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

    // Open the tab during the submit action to reduce popup blocking.
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

    try {
      const { error } = await supabase
        .from("leads")
        .insert([enquiry]);

      if (error) {
        console.error("Hungund enquiry database error:", error);

        if (whatsappWindow) {
          whatsappWindow.location.href = whatsappUrl;
        } else {
          window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer",
          );
        }

        setErrorMessage(
          "Your enquiry could not be saved to the website database. You can still continue through WhatsApp.",
        );
        return;
      }

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.open(
          whatsappUrl,
          "_blank",
          "noopener,noreferrer",
        );
      }

      setSuccessMessage(
        "Your enquiry was saved. Continue in WhatsApp to send the details and confirm availability.",
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

      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.open(
          whatsappUrl,
          "_blank",
          "noopener,noreferrer",
        );
      }

      setErrorMessage(
        "We couldn't confirm that the enquiry was saved. You can continue through WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-black/20 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#08A99F]">
          Quick transport enquiry
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Move Goods from Hungund
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Enter your shipment details. Vehicle availability and freight
          charges will need to be confirmed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="hungund-customer-name"
            className="text-sm font-semibold text-slate-700"
          >
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
          <label
            htmlFor="hungund-phone"
            className="text-sm font-semibold text-slate-700"
          >
            Mobile Number *
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
          <label
            htmlFor="hungund-pickup"
            className="text-sm font-semibold text-slate-700"
          >
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
          <label
            htmlFor="hungund-delivery"
            className="text-sm font-semibold text-slate-700"
          >
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
            <label
              htmlFor="hungund-load-type"
              className="text-sm font-semibold text-slate-700"
            >
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
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="hungund-truck-type"
              className="text-sm font-semibold text-slate-700"
            >
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
                <option key={truck} value={truck}>
                  {truck}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="hungund-pickup-date"
            className="text-sm font-semibold text-slate-700"
          >
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
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
          >
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p
            role="status"
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800"
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

        <p className="text-center text-xs leading-5 text-slate-500">
          Submitting an enquiry does not guarantee a truck. Please confirm
          availability, freight charges and pickup arrangements.
        </p>
      </form>
    </div>
  );
}