"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "./lib/supabase";

const locations = [
  "Chennai",
  "Bangalore",
  "Coimbatore",
  "Salem",
  "Madurai",
  "Tirupattur",
"Vaniyambadi",
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

const [pickupIndex, setPickupIndex] = useState(-1);
const [deliveryIndex, setDeliveryIndex] = useState(-1);
const pickupSuggestions = locations.filter((location) =>
  location.toLowerCase().includes(pickup.toLowerCase())
).slice(0, 5);
const pickupRef = useRef<HTMLDivElement>(null);
const deliveryRef = useRef<HTMLDivElement>(null);
const [truck, setTruck] = useState("");
const [message, setMessage] = useState("");

const [customerName, setCustomerName] = useState("");
const [phone, setPhone] = useState("");
const [loadType, setLoadType] = useState("");
const [pickupDate, setPickupDate] = useState("");
const [selectedLoadId, setSelectedLoadId] = useState("");
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
const loadIdParam = params.get("loadId");
  const pickupParam = params.get("pickup");
  const deliveryParam = params.get("delivery");
  const loadTypeParam = params.get("loadType");
  const truckParam = params.get("truck");
  const pickupDateParam = params.get("pickupDate");

  if (pickupParam) setPickup(pickupParam);
  if (deliveryParam) setDelivery(deliveryParam);
  if (loadTypeParam) setLoadType(loadTypeParam);
  if (truckParam) setTruck(truckParam);
  if (pickupDateParam) setPickupDate(pickupDateParam);
}, []);
const [reviews, setReviews] = useState<
  {
    id: string | number;
    customer_name: string;
    rating: number;
    review: string;
  }[]
>([]);

useEffect(() => {
  async function loadReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("id, customer_name, rating, review")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error && data) {
      setReviews(data);
    }
  }

  loadReviews();
}, []);

  


  async function checkAvailability() {
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

  if (!/^\d{10}$/.test(phone)) {
    setMessage("Please enter a valid 10-digit phone number.");
    return;
  }

  const { error } = await supabase.from("bookings").insert([
    {
      customer_name: customerName,
      phone: phone,
      pickup: pickup,
      delivery: delivery,
      load_type: loadType,
      truck: truck,
      pickup_date: pickupDate,
load_id: selectedLoadId ? Number(selectedLoadId) : null,
status: "new",
    },
  ]);

  if (error) {
    console.error("Booking save error:", error);
    setMessage("Unable to save booking. Please try again.");
    return;
  }
const { error: leadError } = await supabase.from("leads").insert([
  {
    customer_name: customerName,
    phone: phone,
    pickup: pickup,
    delivery: delivery,
    load_type: loadType,
    truck_type: truck,
    pickup_date: pickupDate,
    source: "booking_form",
    status: "new",
  },
]);

if (leadError) {
  console.error("Lead save error:", leadError);
}
  const message = `🚚 LOADZY Booking Request

Customer Name: ${customerName}
Phone: ${phone}
Pickup: ${pickup}
Delivery: ${delivery}
Load Type: ${loadType}
Truck: ${truck}
Pickup Date: ${pickupDate}`;

  const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(message)}`;

  if (typeof window !== "undefined") window.open(whatsappUrl, "_blank");

  setMessage("✅ Booking saved successfully. Opening WhatsApp...");
}

  function bookNow() {
   if (typeof window !== "undefined") window.location.href =
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
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-3 md:gap-8 md:px-6 md:py-4">
          <div className="flex items-center">
  <img
    src="/loadzy-logo.png"
    alt="LOADZY"
   className="h-14 w-auto max-w-[190px] object-contain md:h-20 md:max-w-[280px]"
  />
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

            <a href="/about" className="hover:text-blue-600">
              About Us
            </a>
            <a href="/services" className="hover:text-blue-600">
  Services
</a>
            <a href="#faq" className="hover:text-blue-600">
  FAQ
</a>

<a href="/reviews" className="hover:text-blue-600">
  Reviews
</a>
<a href="/mobile-app" className="hover:text-blue-600">
  Mobile App
</a> 


<a href="/track-shipment" className="hover:text-blue-600">
  Track Shipment
</a>
            
          </div>
          <details className="relative md:hidden">
 <summary className="cursor-pointer list-none whitespace-nowrap shrink-0 rounded-lg bg-blue-950 px-2 py-2 text-xs font-bold text-white">
    ☰ Menu
  </summary>

  <div className="absolute right-0 z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
    <div className="flex flex-col gap-2 font-semibold">
      <a
        href="#book"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Book a Truck
      </a>

      <a
        href="#loads"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Find Loads
      </a>

      <a
        href="#trucks"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Truck Types
      </a>

      <a
        href="#routes"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Routes
      </a>

      <a
        href="/about"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        About Us
      </a>

      <a
        href="/services"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Services
      </a>

      <a
        href="#faq"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        FAQ
      </a>

      <a
        href="/reviews"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Reviews
      </a>

      <a
        href="/track-shipment"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Track Shipment
      </a>

      <a
        href="/contact"
        className="rounded-lg px-4 py-3 text-blue-950 hover:bg-slate-100"
      >
        Contact
      </a>
    </div>
  </div>
</details>

          <button
            onClick={bookNow}
            className="hidden md:block rounded-xl bg-teal-500 px-6 py-3 font-bold text-white shadow-lg hover:bg-teal-600"
          >
            📞 Book Now
          </button>

        </div>
      </nav>

      {/* Hero / Booking */}
      <section
        id="book"
       className="bg-gradient-to-br from-[#063B66] via-[#075985] to-[#021B36] px-6 py-16 text-white"
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

              <span className="text-[#12E6D3]">
                Move your business.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-text-[#B8FFF6]">
              Book the right truck for your load, find return loads,
              and move goods across India with LOADZY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
               href="#book-form"
                className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 hover:bg-[#FFE66D]"
              >
                Book a Truck →
              </a>

              <a
  href="/load-search"
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
        <div
  id="book-form"
  className="rounded-3xl bg-white p-8 text-[#062B55] shadow-2xl ring-1 ring-slate-200 lg:p-10"
>

            <div className="text-sm font-black tracking-[0.2em] text-[#00A896]">
  GET STARTED
</div>

            <h2 className="mt-2 text-4xl font-black text-[#062B55]">
              Get Your Transport Price
            </h2>

            <p className="mt-2 text-[#496A85]">
              Enter your load details and route to get your transport price.
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
    className="mt-2 w-full rounded-xl border border-[#B8C9D9] bg-white px-4 py-3 text-[#062B55] outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
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
    className="mt-2 w-full rounded-xl border border-[#B8C9D9] bg-white px-4 py-3 text-[#062B55] outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
  />
</div>
            <div className="mt-8 relative">
              <label className="font-bold">
    Pickup Location            
</label>

<input
  type="text"
  value={pickup}
  onChange={(e) => {
    setPickup(e.target.value);
    setPickupIndex(-1);
  }}
  placeholder="Enter pickup location"
  className="w-full rounded-xl border border-[#B8C9D9] bg-white px-4 py-3 text-[#062B55] outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
/>

  {pickup && !locations.some((location) => location.toLowerCase() === pickup.trim().toLowerCase()) && (
    <div className="absolute left-0 top-full w-full z-50 mt-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
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
            className="block w-full px-4 py-3 text-left hover:bg-slate-100"
          >
            {location}
          </button>
        ))}
    </div>
  )}
</div>

            {/* Delivery */}
            <div className="mt-5 relative">
              <label className="font-bold">
                Delivery Location
                

              </label>

              <input
  type="text"
  value={delivery}
  onChange={(e) => setDelivery(e.target.value)}
  placeholder="Enter delivery location"
  className="w-full rounded-xl border border-[#B8C9D9] bg-white px-4 py-3 text-[#062B55] outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
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
    className="mt-2 w-full rounded-xl border border-[#B8C9D9] bg-white px-4 py-3 text-[#062B55] outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
  >
    <option value="" disabled>Select Load Type</option>
<option value="Packers & Movers">Packers & Movers</option>
<option value="Furniture">Furniture</option>
<option value="Industrial">Industrial</option>
<option value="Fruits & Vegetables">Fruits & Vegetables</option>
<option value="Commercial Goods">Commercial Goods</option>
<option value="Other">Other</option>
  </select>
</div>
            <div className="mt-5">
              <label className="font-bold">
                Truck Type
              </label>

              <select
                value={truck}
                onChange={(e) => setTruck(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[#B8C9D9] bg-white px-4 py-3 text-[#062B55] outline-none focus:border-[#00C9B7] focus:ring-2 focus:ring-[#00C9B7]/20"
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
  className="mt-7 w-full rounded-xl bg-teal-500 py-4 text-lg font-black text-white shadow-lg hover:bg-teal-600"
>
  🚚 Find My Truck →
</button>

<p className="mt-3 text-center text-sm font-semibold text-slate-500">
  Tell us your route and load details. LOADZY will help match the right truck for you.
</p>

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
          onClick={() => {
  window.location.href = "/truck-owner#load-search";
}}
            className="mt-8 rounded-xl bg-teal-500 px-8 py-4 font-black text-white shadow-lg hover:bg-teal-600"
          >

            Find Available Loads →
          </button>

        </div>
       
      </section>

      {/* Why Choose LOADZY */}
<section className="px-6 py-20 bg-white">
  <div className="mx-auto max-w-7xl text-center">
    <div className="font-bold text-teal-600">
      WHY CHOOSE LOADZY
    </div>

    <h2 className="mt-2 text-4xl font-black text-blue-950">
      Transport made simple, reliable and affordable
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
      LOADZY helps load owners find suitable trucks and move goods
      across India with a simple booking experience.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-4">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-3xl">🚚</div>
        <h3 className="mt-4 text-xl font-bold text-blue-950">
          Reliable Trucks
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Find suitable truck options for different load requirements.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-3xl">💰</div>
        <h3 className="mt-4 text-xl font-bold text-blue-950">
          Affordable Freight
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Compare your transport needs and choose a suitable option.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-3xl">📍</div>
        <h3 className="mt-4 text-xl font-bold text-blue-950">
          Pan India Service
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Connect routes and move loads across cities and states.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-3xl">⚡</div>
        <h3 className="mt-4 text-xl font-bold text-blue-950">
          Simple Booking
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Enter your load details and quickly send your booking request.
        </p>
      </div>
    </div>

    <a
      href="#book"
      className="mt-10 inline-block rounded-xl bg-teal-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-teal-600"
    >
      Book Your Truck →
    </a>
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
          {
            name: "Chennai → Bangalore",
            href: "/routes/chennai/bangalore",
          },
          {
            name: "Coimbatore → Chennai",
            href: "/routes/coimbatore/chennai",
          },
          {
            name: "Salem → Bangalore",
            href: "/routes/salem/bangalore",
          },
          {
            name: "Vellore → Bangalore",
            href: "/routes/vellore/bangalore",
          },
          ,
          ,,
{
  name: "Bangalore → Chennai",
  href: "/routes/bangalore/chennai",
},
{
  name: "Chennai → Hyderabad",
  href: "/routes/chennai/hyderabad",
},
{
  name: "Hyderabad → Chennai",
  href: "/routes/hyderabad/chennai",
},
{
  name: "Bangalore → Hyderabad",
  href: "/routes/bangalore/hyderabad",
},
{
  name: "Hyderabad → Bangalore",
  href: "/routes/hyderabad/bangalore",
},
{
  name: "Chennai → Coimbatore",
  href: "/routes/chennai/coimbatore",
},
,
{
  name: "Coimbatore → Bangalore",
  href: "/routes/coimbatore/bangalore",
},
{
  name: "Bangalore → Coimbatore",
  href: "/routes/bangalore/coimbatore",
},
{
  name: "Chennai → Madurai",
  href: "/routes/chennai/madurai",
},
{
  name: "Madurai → Chennai",
  href: "/routes/madurai/chennai",
},
{
  name: "Chennai → Salem",
  href: "/routes/chennai/salem",
},
{
  name: "Salem → Chennai",
  href: "/routes/salem/chennai",
},
{
  name: "Chennai → Tirupattur",
  href: "/routes/chennai/tirupattur",
},
{
  name: "Tirupattur → Chennai",
  href: "/routes/tirupattur/chennai",
},
{
  name: "Chennai → Hosur",
  href: "/routes/chennai/hosur",
},
{
  name: "Hosur → Chennai",
  href: "/routes/hosur/chennai",
},
{
  name: "Chennai → Kochi",
  href: "/routes/chennai/kochi",
},
{
  name: "Kochi → Chennai",
  href: "/routes/kochi/chennai",
},
{
  name: "Bangalore → Kochi",
  href: "/routes/bangalore/kochi",
},
{
  name: "Kochi → Bangalore",
  href: "/routes/kochi/bangalore",
},
{
  name: "Chennai → Vijayawada",
  href: "/routes/chennai/vijayawada",
},
{
  name: "Vijayawada → Chennai",
  href: "/routes/vijayawada/chennai",
},
       ].filter(
  (route): route is { name: string; href: string } => Boolean(route)
).map((route) => (
          <a
            key={route.href}
            href={route.href}
            className="rounded-2xl border bg-white p-6 font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-[#08c9bd]"
          >
            🚚 {route.name}
          </a>
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
            {/* FAQ */}
      <section id="faq" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Find answers about truck booking, freight rates, truck types,
              delivery, load matching and household shifting with LOADZY.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                How do I book a truck with LOADZY?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Enter your pickup location, delivery location, load type,
                truck type and pickup date in the booking form. Submit your
                request and LOADZY will contact you regarding the booking.
              </p>
            </details>

            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                How much does truck transport cost?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Transport charges depend on the route, truck type, load type,
                pickup date and availability. Contact LOADZY to get a
                transport price for your requirement.
              </p>
            </details>

            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                Which truck should I choose for my load?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                The right truck depends on the size, weight and type of your
                goods. LOADZY provides different truck options so you can
                choose a vehicle suitable for your shipment.
              </p>
            </details>

            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                Does LOADZY provide part-load transport?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Yes. LOADZY is designed to support both part-load and
                full-load transport requirements, depending on route and
                available trucks.
              </p>
            </details>

            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                Can I use LOADZY for household shifting?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Yes. LOADZY can be used for household shifting and packers &
                movers requirements. Select the appropriate load and truck
                type when submitting your booking request.
              </p>
            </details>

            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                How does Find My Truck work?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Submit your pickup, delivery, load and truck requirements.
                LOADZY checks available loads and matches suitable transport
                based on the booking details.
              </p>
            </details>

            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                Can I find available loads on LOADZY?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Yes. Available loads can be searched by route and other
                requirements when matching loads are available on the LOADZY
                platform.
              </p>
            </details>

            <details className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-blue-950">
                Does LOADZY offer return-load options?
                <span className="float-right text-[#08c9bd] group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                LOADZY aims to help truck owners find suitable return loads
                where availability exists on the route.
              </p>
            </details>
          </div>

          <div className="mt-10 text-center">
  <p className="text-slate-600">
    Still have a question? Ask LOADZY.
  </p>

  <button
    onClick={bookNow}
    className="mt-4 rounded-xl bg-yellow-400 px-7 py-3 font-bold text-blue-950 transition hover:scale-105"
  >
    Ask LOADZY →
  </button>
</div>
        </div>
      </section>
      

      {/* Reviews */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <div className="font-bold text-[#08c9bd]">
              CUSTOMER REVIEWS
            </div>

            <h2 className="mt-3 text-4xl font-black text-blue-950">
              What our customers say
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Real experiences from customers who used LOADZY for their
              transport requirements.
            </p>
          </div>

          {reviews.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-black text-blue-950">
                      review.customer_name
                    </div>

                    <div className="text-yellow-500">
                      {"★".repeat(Math.max(0, Math.min(5, review.rating)))}
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                   review.review
                  </p>

                  <div className="mt-5 text-sm font-semibold text-slate-400">
                    LOADZY Customer
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <div className="text-4xl">⭐</div>

              <h3 className="mt-4 text-xl font-black text-blue-950">
                Be the first to review LOADZY
              </h3>

              <p className="mt-2 text-slate-600">
                Share your experience and help other customers discover LOADZY.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/reviews"
              className="rounded-xl bg-teal-500 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-teal-600"
            >
              View All Reviews →
            </a>

            <a
             href="/reviews/submit"
              className="rounded-xl bg-yellow-400 px-7 py-3 font-bold text-blue-950 shadow-lg transition hover:bg-yellow-300"
            >
              ⭐ Share Your Experience
            </a>
          </div>

        </div>
      </section>
      {/* Mobile App Promotion */}
<section className="bg-slate-50 px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 rounded-3xl bg-blue-950 p-8 text-white md:p-12 lg:grid-cols-2 lg:items-center">

      <div>
        <div className="font-black uppercase tracking-[0.2em] text-teal-300">
          LOADZY MOBILE APP
        </div>

        <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
          Manage your transport from your phone.
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-blue-100">
          Book trucks, find loads, track shipments and stay connected with
          LOADZY from one convenient mobile experience.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/mobile-app#customer-app"
            className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
          >
            Customer App →
          </a>

          <a
            href="/mobile-app#driver-app"
            className="rounded-xl bg-teal-500 px-7 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
          >
            Driver App →
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md">
        <div className="rounded-[2rem] border border-blue-300/20 bg-white/10 p-5">
          <div className="rounded-[1.5rem] bg-white p-6 text-blue-950 shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-3xl">
              🚚
            </div>

            <h3 className="mt-5 text-center text-2xl font-black">
              LOADZY
            </h3>

            <p className="mt-2 text-center text-sm text-slate-500">
              Move. Connect. Deliver.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-xl bg-slate-50 p-4 font-bold">
                📦 Book a Truck
              </div>

              <div className="rounded-xl bg-slate-50 p-4 font-bold">
                🔎 Find a Load
              </div>

              <div className="rounded-xl bg-slate-50 p-4 font-bold">
                📍 Track Shipment
              </div>

              <a
                href="/mobile-app"
                className="rounded-xl bg-teal-500 p-4 text-center font-black text-white"
              >
                Explore Mobile App →
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
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
<div className="mx-auto mt-8 flex flex-wrap justify-center gap-5 text-sm font-semibold">
  <a
    href="/services"
    className="text-teal-400 hover:text-teal-300"
  >
    Services
  </a>

  <a
    href="/house-shifting"
    className="text-teal-400 hover:text-teal-300"
  >
    House Shifting
  </a>

  <a
    href="/packers-movers"
    className="text-teal-400 hover:text-teal-300"
  >
    Packers & Movers
  </a>

  <a
    href="/track-shipment"
    className="text-teal-400 hover:text-teal-300"
  >
    Track Shipment
  </a>

  <a
    href="/reviews"
    className="text-teal-400 hover:text-teal-300"
  >
    Reviews
  </a>

  <a
    href="/contact"
    className="text-teal-400 hover:text-teal-300"
  >
    Contact
  </a>
</div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 LOADZY. All rights reserved.
        </div>

      </footer>

    </main>
  );
}