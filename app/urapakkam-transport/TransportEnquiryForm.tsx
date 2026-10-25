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

const DEFAULT_PICKUP = "Urapakkam, Chengalpattu, Tamil Nadu";
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
          source: "urapakkam_transport_page",
          status: "new",
        },
      ]);

      if (error) {
        console.error("Urapakkam transport lead submission failed:", error);
        setErrorMessage(
          "We couldn't submit your enquiry right now. Please try again."
        );
        return;
      }

      setSuccessMessage(
        "Your enquiry has been submitted successfully!"
      );

      const message = [
        "Hello LOADZY, I want to enquire about transport from Urapakkam.",
        "",
        `Customer Name: ${cleanName}`,
        `Phone: ${cleanPhone}`,
        `Pickup Location: ${cleanPickup}`,
        `Delivery Location: ${cleanDelivery}`,
        `Service Type: ${loadType}`,
        `Truck Type: ${truckType}`,
        `Pickup Date: ${pickupDate}`,
        "Source: Urapakkam Transport Page",
      ].join("\n");

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      resetForm();
    } catch (error) {
      console.error("Urapakkam transport enquiry error:", error);
      setErrorMessage(
        "Something went wrong. Please try again or contact LOADZY."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100";

  const labelClassName =
    "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <section
      id="transport-enquiry"
      className="w-full scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="bg-[#10182D] px-6 py-8 text-white sm:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#08A99F]">
              LOADZY Transport Services
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Move goods from Urapakkam
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Need a truck for goods transport, household shifting, or
              packers and movers? Share your requirements with LOADZY.
              We&apos;ll help you with your transport enquiry.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="urapakkam-name"
                  className={labelClassName}
                >
                  Customer Name *
                </label>

                <input
                  id="urapakkam-name"
                  name="customer_name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={customerName}
                  onChange={(event) =>
                    setCustomerName(event.target.value)
                  }
                  className={inputClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="urapakkam-phone"
                  className={labelClassName}
                >
                  Mobile Number *
                </label>

                <input
                  id="urapakkam-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  className={inputClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="urapakkam-pickup"
                  className={labelClassName}
                >
                  Pickup Location *
                </label>

                <input
                  id="urapakkam-pickup"
                  name="pickup"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(event) => setPickup(event.target.value)}
                  className={inputClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="urapakkam-delivery"
                  className={labelClassName}
                >
                  Delivery Location *
                </label>

                <input
                  id="urapakkam-delivery"
                  name="delivery"
                  type="text"
                  placeholder="Enter destination location"
                  value={delivery}
                  onChange={(event) => setDelivery(event.target.value)}
                  className={inputClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="urapakkam-service"
                  className={labelClassName}
                >
                  Service Type *
                </label>

                <select
                  id="urapakkam-service"
                  name="load_type"
                  value={loadType}
                  onChange={(event) => setLoadType(event.target.value)}
                  className={inputClassName}
                  required
                >
                  <option value="">Select service type</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="urapakkam-truck"
                  className={labelClassName}
                >
                  Truck Type *
                </label>

                <select
                  id="urapakkam-truck"
                  name="truck_type"
                  value={truckType}
                  onChange={(event) => setTruckType(event.target.value)}
                  className={inputClassName}
                  required
                >
                  <option value="">Select truck type</option>

                  {truckTypes.map((truck) => (
                    <option key={truck} value={truck}>
                      {truck}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="urapakkam-date"
                  className={labelClassName}
                >
                  Preferred Pickup Date *
                </label>

                <input
                  id="urapakkam-date"
                  name="pickup_date"
                  type="date"
                  min={today}
                  value={pickupDate}
                  onChange={(event) => setPickupDate(event.target.value)}
                  className={inputClassName}
                  required
                />
              </div>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              >
                {successMessage}
              </div>
            )}

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-[#FACC15] px-6 py-3 text-base font-bold text-[#10182D] shadow-sm transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting Enquiry..." : "Submit Transport Enquiry"}
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello LOADZY, I need transport service from Urapakkam."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#08A99F] px-6 py-3 text-center text-sm font-bold text-[#087F79] transition hover:bg-teal-50"
              >
                Enquire on WhatsApp
              </a>
            </div>

            <p className="text-center text-xs leading-5 text-slate-500">
              By submitting this form, you agree to be contacted by LOADZY
              regarding your transport enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
