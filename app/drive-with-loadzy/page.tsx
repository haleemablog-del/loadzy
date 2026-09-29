"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function DriveWithLoadzyPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    experience: "",
    truck_type: "",
    vehicle_number: "",
    preferred_routes: "",
    availability: "available",
  });

  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!form.name || !form.location || !form.truck_type) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("drivers").insert([
      {
        name: form.name,
        phone: form.phone,
        location: form.location,
        experience: form.experience
          ? Number(form.experience)
          : null,
        truck_type: form.truck_type,
        vehicle_number: form.vehicle_number,
        preferred_routes: form.preferred_routes,
        availability: form.availability,
        status: "pending",
      },
    ]);

    setSaving(false);

    if (error) {
      console.error(error);
      setMessage("Unable to submit registration. Please try again.");
      return;
    }

    setForm({
      name: "",
      phone: "",
      location: "",
      experience: "",
      truck_type: "",
      vehicle_number: "",
      preferred_routes: "",
      availability: "available",
    });

    setMessage(
      "✅ Registration submitted successfully! LOADZY will contact you soon."
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-[#062B55]">
            Drive with LOADZY
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Register your truck and get connected with transport
            opportunities.
          </p>
        </div>

        <section className="rounded-2xl bg-white p-6 shadow-lg md:p-10">
          <h2 className="mb-6 text-2xl font-black text-[#062B55]">
            Driver Registration
          </h2>

          {message && (
            <div className="mb-6 rounded-xl bg-slate-100 px-5 py-4 font-bold text-[#062B55]">
              {message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-6 md:grid-cols-2"
          >
            <div>
              <label className="font-bold text-[#062B55]">
                Driver Name *
              </label>

              <input
                name="name"
                autoComplete="off"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="font-bold text-[#062B55]">
                Mobile Number *
              </label>

              <input
                name="phone"
                autoComplete="off"
                value={form.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                inputMode="numeric"
                maxLength={10}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="font-bold text-[#062B55]">
                Current Location *
              </label>

              <input
                name="location"
                autoComplete="off"
                value={form.location}
                onChange={handleChange}
                placeholder="City / District"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="font-bold text-[#062B55]">
                Driving Experience
              </label>

              <input
                name="experience"
                autoComplete="off"
                value={form.experience}
                onChange={handleChange}
                placeholder="Years"
                type="number"
                min="0"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="font-bold text-[#062B55]">
                Truck Type *
              </label>

              <select
                name="truck_type"
                value={form.truck_type}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                required
              >
                <option value="">Select truck type</option>
                <option value="Tata Ace">Tata Ace</option>
                <option value="7FT">7FT</option>
                <option value="10FT">10FT</option>
                <option value="14FT">14FT</option>
                <option value="17FT">17FT</option>
                <option value="20FT">20FT</option>
                <option value="24FT">24FT</option>
                <option value="32FT">32FT</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-[#062B55]">
                Vehicle Number
              </label>

              <input
                name="vehicle_number"
                value={form.vehicle_number}
                onChange={handleChange}
                placeholder="TN XX XX 0000"
                autoComplete="off"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 uppercase outline-none focus:border-teal-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-bold text-[#062B55]">
                Preferred Routes
              </label>

              <input
                name="preferred_routes"
                value={form.preferred_routes}
                onChange={handleChange}
                placeholder="Example: Chennai → Bangalore, Chennai → Coimbatore"
                autoComplete="off"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="font-bold text-[#062B55]">
                Availability
              </label>

              <select
                name="availability"
                value={form.availability}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              >
                <option value="available">Available</option>
                <option value="busy">Currently Busy</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-xl bg-teal-500 px-6 py-4 text-lg font-black text-white shadow-lg hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Submitting..."
                  : "🚚 Register with LOADZY →"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}