"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

type Props = {
  fromName: string;
  toName: string;
};

const services = [
  "Truck Transport",
  "Full Load Transport",
  "Part Load Transport",
  "Industrial Transport",
  "Commercial Transport",
  "Household Shifting",
  "Packers & Movers",
  "Fruits & Vegetables",
  "Other",
];

const truckTypes = [
  "Tata Ace",
  "Pickup",
  "Mini Truck",
  "14 Feet",
  "17 Feet",
  "20 Feet",
  "22 Feet",
  "32 Feet",
  "Container",
  "Trailer",
  "Other",
];

export default function TransportEnquiryForm({
  fromName,
  toName,
}: Props) {
  const [pickup, setPickup] = useState(fromName);
  const [destination, setDestination] = useState(toName);
  const [service, setService] = useState("Truck Transport");
  const [truckType, setTruckType] = useState("");
  const [phone, setPhone] = useState("");
  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const submitEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setMessage("");
    setSuccess("");

    try {
      const source = `${fromName.toLowerCase().replace(/\s+/g, "-")}-to-${toName
        .toLowerCase()
        .replace(/\s+/g, "-")}-route-page`;

      const { error } = await supabase.from("leads").insert({
        pickup_location: pickup,
        drop_location: destination,
        service,
        truck_type: truckType,
        phone,
        material,
        weight,
        source,
      });

      if (error) {
        console.error("Lead insert error:", error);
        setMessage("Something went wrong. Please try again.");
        return;
      }

      const whatsappText = `Hello LOADZY,

I need a transport enquiry.

From: ${pickup}
To: ${destination}
Service: ${service}
Truck Type: ${truckType || "Not specified"}
Material: ${material || "Not specified"}
Weight: ${weight || "Not specified"}
Mobile: ${phone}`;

      const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(
        whatsappText
      )}`;

      setSuccess("Your enquiry has been submitted successfully.");

      window.open(whatsappUrl, "_blank");

      setMaterial("");
      setWeight("");
      setPhone("");
      setTruckType("");
    } catch (error) {
      console.error(error);
      setMessage("Unable to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-900">
          Get a Transport Quote
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Enquire for transport from {fromName} to {toName}.
        </p>
      </div>

      <form onSubmit={submitEnquiry} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              From
            </label>

            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-blue-600"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              To
            </label>

            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-blue-600"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Service
            </label>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-blue-600"
            >
              {services.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Truck Type
            </label>

            <select
              value={truckType}
              onChange={(e) => setTruckType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Select truck type</option>

              {truckTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Material
            </label>

            <input
              type="text"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              placeholder="What are you transporting?"
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Weight
            </label>

            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Example: 5 Ton"
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Mobile Number
          </label>

          <input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="Enter 10-digit mobile number"
            className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-blue-600"
            required
          />
        </div>

        {message && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {message}
          </p>
        )}

        {success && (
          <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Get Transport Quote"}
        </button>
      </form>
    </div>
  );
}