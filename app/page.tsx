"use client";

import { useState } from "react";

const locations = [
  "Chennai",
  "Bangalore",
  "Coimbatore",
  "Salem",
  "Madurai",
  "Tirupattur",
  "Vellore",
  "Hosur",
  "Krishnagiri",
  "Tirunelveli",
  "Trichy",
  "Erode",
  "Tiruppur",
  "Dharmapuri",
  "Kanchipuram",
  "Thanjavur",
  "Dindigul",
  "Pondicherry",
  "Hyderabad",
  "Bengaluru",
  "Mumbai",
  "Delhi",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];


export default function Home() {
  const [pickup, setPickup] = useState("");
const [delivery, setDelivery] = useState("");
const [truck, setTruck] = useState("");
const [message, setMessage] = useState("");

const [customerName, setCustomerName] = useState("");
const [phone, setPhone] = useState("");
const [loadType, setLoadType] = useState("");
const [pickupDate, setPickupDate] = useState("");

  function checkAvailability() {
  if (
    !customerName ||
    !phone ||
    !pickup ||
    !delivery ||
    !loadType ||
    !truck ||
    !pickupDate
  ) {
    setMessage("Please fill all the details.");
    return;
  }

  setMessage(
    "✅ Booking Request Received! LOADZY will contact you shortly."
  );
}

  function bookNow() {
    window.location.href =
      "tel:+919019499448";
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Top Bar */}
      <div className="bg-blue-950 text-white text-center py-3 text-sm font-medium">
        🚚 Affordable freight. Reliable trucks. Across India.
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-2xl">
              🚚
            </div>

            <div>
              <div className="text-2xl font-black tracking-tight text-blue-950">
                LOAD<span className="text-yellow-400">ZY</span>
              </div>

              <div className="text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                LOAD IT. TRACK IT. DELIVER IT.
              </div>
            </div>
          </div>

          <div className="hidden gap-8 font-semibold md:flex">
            <a href="#book" className="hover:text-blue-600">
              Book a Truck
            </a>

            <a href="#loads" className="hover:text-blue-600">
              Find Loads
            </a>

            <a href="#trucks" className="hover:text-blue-600">
              Truck Types
            </a>

            <a href="#routes" className="hover:text-blue-600">
              Routes
            </a>

            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
          </div>

          <button
            onClick={bookNow}
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg hover:bg-blue-700"
          >
            📞 Book Now
          </button>

        </div>
      </nav>

      {/* Hero / Booking */}
      <section
        id="book"
        className="bg-blue-950 px-6 py-16 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          {/* Left */}
          <div className="flex flex-col justify-center">

            <div className="mb-6 inline-flex w-fit rounded-full border border-blue-400/50 bg-blue-900 px-5 py-2 font-semibold">
              🟡 Transport made simple
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Move your load.
              <br />

              <span className="text-yellow-400">
                Move your business.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Book the right truck for your load, find return loads,
              and move goods across India with LOADZY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#book"
                className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-blue-950 hover:bg-yellow-300"
              >
                Book a Truck →
              </a>

              <a
                href="#loads"
                className="rounded-xl border border-blue-300 bg-blue-900 px-7 py-4 font-bold text-white hover:bg-blue-800"
              >
                Find a Load
              </a>

            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">

              <div>
                <div className="text-3xl font-black">24/7</div>
                <div className="text-sm text-blue-200">
                  Support
                </div>
              </div>

              <div>
                <div className="text-3xl font-black">Pan India</div>
                <div className="text-sm text-blue-200">
                  Service
                </div>
              </div>

              <div>
                <div className="text-3xl font-black">Fast</div>
                <div className="text-sm text-blue-200">
                  Booking
                </div>
              </div>

            </div>

          </div>

          {/* Booking Card */}
          <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">

            <div className="text-sm font-black tracking-widest text-blue-600">
              GET STARTED
            </div>

            <h2 className="mt-2 text-4xl font-black text-blue-950">
              Book a Truck
            </h2>

            <p className="mt-2 text-slate-500">
              Tell us where your load needs to go.
            </p>

            {/* Customer Name */}
<div className="mt-5">
  <label className="font-bold">
    Customer Name
  </label>
  <input
    type="text"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    placeholder="Enter your name"
    className="mt-2 w-full rounded-xl border px-4 py-3"
  />
</div>

{/* Phone Number */}
<div className="mt-5">
  <label className="font-bold">
    Phone Number
  </label>
  <input
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="Enter mobile number"
    className="mt-2 w-full rounded-xl border px-4 py-3"
  />
</div>
            <div className="mt-8">
              <label className="font-bold">
                Pickup location
              </label>

              <div className="relative">
  <input
    value={pickup}
    onChange={(e) => setPickup(e.target.value)}
    placeholder="Enter city or location"
    className="mt-2 w-full rounded-xl border px-4 py-3"
  />

  {pickup &&
  !locations.some(
    (location) =>
      location.toLowerCase() === pickup.trim().toLowerCase()
  ) && (
    <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-xl border bg-white shadow-lg">
      {locations
        .filter((location) =>
          location.toLowerCase().includes(pickup.toLowerCase())
        )
        .slice(0, 5)
        .map((location) => (
          <button
            key={location}
            type="button"
            onClick={() => setPickup(location)}
            className="block w-full px-4 py-3 text-left hover:bg-gray-100"
          >
            📍 {location}
          </button>
        ))}
    </div>
  )}
</div>
            </div>

            {/* Delivery */}
            <div className="mt-5">
              <label className="font-bold">
                Delivery location
              </label>

              <input
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                placeholder="Enter destination"
                className="mt-2 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
              />
            </div>{delivery &&
  !locations.some(
    (location) =>
      location.toLowerCase() === delivery.trim().toLowerCase()
  ) && (
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 z-50 mt-1 rounded-xl border bg-white shadow-lg">
        {locations
          .filter((location) =>
            location.toLowerCase().includes(delivery.toLowerCase())
          )
          .slice(0, 5)
          .map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => setDelivery(location)}
              className="block w-full px-4 py-3 text-left hover:bg-gray-100"
            >
              📍 {location}
            </button>
          ))}
      </div>
    </div>
  )}

            {/* Truck */}{/* Load Type */}
<div className="mt-5">
  <label className="font-bold">
    Load Type
  </label>

  <select
    value={loadType}
    onChange={(e) => setLoadType(e.target.value)}
    className="mt-2 w-full rounded-xl border px-4 py-3"
  >
    <option value="">Select load type</option>
    <option value="Furniture">Furniture</option>
    <option value="Household">Household</option>
    <option value="Industrial">Industrial</option>
    <option value="Other">Other</option>
  </select>
</div>
            <div className="mt-5">
              <label className="font-bold">
                Select truck
              </label>

              <select
                value={truck}
                onChange={(e) => setTruck(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-blue-600"
              >
                <option value="">
                  Choose truck type
                </option>

                <option>Tata Ace</option>
                <option>7FT Truck</option>
                <option>10FT Truck</option>
                <option>14FT Truck</option>
                <option>17FT Truck</option>
                <option>20FT Truck</option>
                <option>22FT Truck</option>
                <option>24FT Truck</option>
                <option>34FT Truck</option>
                <option>Multi-Axle Truck</option>
              </select>
            </div>

            {/* Button */}{/* Pickup Date */}
<div className="mt-5">
  <label className="font-bold">
    Pickup Date
  </label>

  <input
    type="date"
    value={pickupDate}
    onChange={(e) => setPickupDate(e.target.value)}
    className="mt-2 w-full rounded-xl border px-4 py-3"
  />
</div>
            <button
              onClick={checkAvailability}
              className="mt-7 w-full rounded-xl bg-blue-600 py-4 text-lg font-black text-white shadow-lg hover:bg-blue-700"
            >🚚 Submit Booking
               →
            </button>

            {/* Message */}
            {message && (
              <div className="mt-5 rounded-xl bg-blue-50 p-4 text-center font-semibold text-blue-900">
                {message}
              </div>
            )}

            <div className="mt-5 text-center text-sm text-slate-500">
              Or call us directly
            </div>

            <a
              href="tel:+919019499448"
              className="mt-2 block text-center text-lg font-black text-blue-600"
            >
              📞 90194 99448
            </a>

          </div>

        </div>
      </section>

      {/* Truck Types */}
      <section
        id="trucks"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <div className="font-bold text-blue-600">
              OUR TRUCKS
            </div>

            <h2 className="mt-2 text-4xl font-black text-blue-950">
              Choose the right truck
            </h2>

            <p className="mt-3 text-slate-500">
              Different truck sizes for different loads.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Tata Ace",
              "7FT Truck",
              "10FT Truck",
              "14FT Truck",
              "17FT Truck",
              "20FT Truck",
              "24FT Truck",
              "34FT Truck",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">🚚</div>

                <h3 className="mt-4 text-xl font-black">
                  {item}
                </h3>

                <button
                  onClick={() => {
                    setTruck(item);
                    document
                      .getElementById("book")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-4 font-bold text-blue-600"
                >
                  Select →
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Loads */}
      <section
        id="loads"
        className="bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl text-center">

          <div className="font-bold text-blue-600">
            FIND LOADS
          </div>

          <h2 className="mt-2 text-4xl font-black text-blue-950">
            Have a truck? Find your next load.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Connect with suitable loads and reduce empty return trips.
          </p>

          <button
            onClick={() =>
              setMessage(
                "Load matching will be connected here."
              )
            }
            className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-black text-white hover:bg-blue-700"
          >
            Find Available Loads →
          </button>

        </div>
      </section>

      {/* Routes */}
      <section
        id="routes"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <div className="font-bold text-blue-600">
              POPULAR ROUTES
            </div>

            <h2 className="mt-2 text-4xl font-black text-blue-950">
              Move goods across India
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {[
              "Tamil Nadu → Karnataka",
              "Chennai → Bangalore",
              "Coimbatore → Chennai",
              "Salem → Bangalore",
              "Vellore → Bangalore",
              "Hosur → Chennai",
            ].map((route) => (
              <div
                key={route}
                className="rounded-2xl border bg-white p-6 font-bold shadow-sm"
              >
                🚚 {route}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-blue-950 px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-4xl text-center">

          <div className="text-yellow-400 font-bold">
            ABOUT LOADZY
          </div>

          <h2 className="mt-3 text-4xl font-black">
            Your load. Our responsibility.
          </h2>

          <p className="mt-6 leading-8 text-blue-100">
            LOADZY helps load owners and truck owners connect,
            making transportation simpler, faster and more affordable.
          </p>

          <button
            onClick={bookNow}
            className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-black text-blue-950"
          >
            Contact LOADZY
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">

          <div>
            <div className="text-2xl font-black">
              LOAD<span className="text-yellow-400">ZY</span>
            </div>

            <div className="mt-2 text-sm text-slate-400">
              Load it. Track it. Deliver it.
            </div>
          </div>

          <div>
            📞{" "}
            <a
              href="tel:+919019499448"
              className="font-bold"
            >
              90194 99448
            </a>

            <div className="mt-2 text-sm text-slate-400">
              Tamil Nadu, India
            </div>
          </div>

        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 LOADZY. All rights reserved.
        </div>

      </footer>

    </main>
  );
}