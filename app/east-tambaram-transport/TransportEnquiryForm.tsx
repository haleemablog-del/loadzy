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
  "7FT",
  "10FT",
  "14FT",
  "17FT",
  "20FT",
  "22FT",
  "24FT",
  "34FT",
  "Multi-Axle",
];

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("East Tambaram, Chennai");
  const [delivery, setDelivery] = useState("");
  const [service, setService] = useState("Truck Transport");
  const [truck, setTruck] = useState("10FT");
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const cleanName = customerName.trim();
    const cleanPhone = phone.replace(/\D/g, "");
    const cleanPickup = pickup.trim();
    const cleanDelivery = delivery.trim();

    if (
      !cleanName ||
      !cleanPickup ||
      !cleanDelivery ||
      !service ||
      !truck ||
      !pickupDate
    ) {
      setMessage("Please complete all required fields.");
      return;
    }

    if (cleanPhone.length !== 10) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setSaving(true);

    const whatsappMessage = [
      "Hello LOADZY, I would like to enquire about transport.",
      "",
      `Name: ${cleanName}`,
      `Phone: ${cleanPhone}`,
      `Pickup: ${cleanPickup}`,
      `Delivery: ${cleanDelivery}`,
      `Service: ${service}`,
      `Truck Type: ${truck}`,
      `Pickup Date: ${pickupDate}`,
      "Enquiry Source: East Tambaram Transport Page",
    ].join("\n");

    let whatsappWindow: Window | null = null;

    try {
      // Open the WhatsApp tab directly from the user's submit action.
      whatsappWindow = window.open("about:blank", "_blank");

      const { error } = await supabase.from("leads").insert({
        customer_name: cleanName,
        phone: cleanPhone,
        pickup: cleanPickup,
        delivery: cleanDelivery,
        load_type: service,
        truck_type: truck,
        pickup_date: pickupDate,
        source: "east_tambaram_transport_page",
        status: "new",
      });

      if (error) {
        console.error("LOADZY lead insert failed:", error);
        if (whatsappWindow && !whatsappWindow.closed) {
          whatsappWindow.close();
        }
        setMessage(
          "We couldn't save your enquiry just now. Please try again or contact LOADZY on WhatsApp."
        );
        return;
      }

      const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.location.href = whatsappUrl;
      }

      setCustomerName("");
      setPhone("");
      setPickup("East Tambaram, Chennai");
      setDelivery("");
      setService("Truck Transport");
      setTruck("10FT");
      setPickupDate("");
      setMessage("Your enquiry has been saved. Continue in WhatsApp to send your request.");
    } catch (error) {
      console.error("LOADZY enquiry error:", error);
      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.close();
      }
      setMessage(
        "Something went wrong while submitting your enquiry. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <p className="text-sm font-bold uppercase tracking-wider text-teal-700">
        LOADZY Transport Enquiry
      </p>
      <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
        Request a transport service
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Enter your details and transport route. Our team can follow up about
        your requirements.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerName" className="mb-1.5 block text-sm font-semibold">
            Customer Name *
          </label>
          <input
            id="customerName"
            name="customerName"
            autoComplete="name"
            required
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
            Mobile Number *
          </label>
          <input
            id="phone"
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
            className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label htmlFor="pickup" className="mb-1.5 block text-sm font-semibold">
            Pickup Location *
          </label>
          <input
            id="pickup"
            name="pickup"
            required
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            placeholder="Pickup area or address"
            className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label htmlFor="delivery" className="mb-1.5 block text-sm font-semibold">
            Delivery Location *
          </label>
          <input
            id="delivery"
            name="delivery"
            required
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)}
            placeholder="Destination city or address"
            className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">
            Service Type *
          </label>
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          >
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="truck" className="mb-1.5 block text-sm font-semibold">
            Truck Type *
          </label>
          <select
            id="truck"
            name="truck"
            required
            value={truck}
            onChange={(event) => setTruck(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          >
            {truckTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pickupDate" className="mb-1.5 block text-sm font-semibold">
            Pickup Date *
          </label>
          <input
            id="pickupDate"
            name="pickupDate"
            type="date"
            required
            value={pickupDate}
            onChange={(event) => setPickupDate(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className="rounded-lg bg-slate-100 p-3 text-sm leading-6 text-slate-700"
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-yellow-400 px-5 py-3.5 font-extrabold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Submitting..." : "Submit Transport Enquiry"}
        </button>

        <p className="text-xs leading-5 text-slate-500">
          Your enquiry details are submitted to LOADZY. After successful
          submission, WhatsApp opens so you can send your transport request.
        </p>
      </form>
    </div>
  );
}
