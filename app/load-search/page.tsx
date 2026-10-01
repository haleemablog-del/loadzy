"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

type Load = {
  id: number;
  pickup: string;
  delivery: string;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  price: number | null;
};

const locationAliases: Record<string, string[]> = {
  chennai: ["chennai", "madras"],
  bangalore: ["bangalore", "bengaluru"],
  bengaluru: ["bangalore", "bengaluru"],
  tirupattur: ["tirupattur", "tirupathur", "tpt"],
  tirupathur: ["tirupattur", "tirupathur", "tpt"],
  tpt: ["tirupattur", "tirupathur", "tpt"],
  coimbatore: ["coimbatore"],
  salem: ["salem"],
  vellore: ["vellore"],
  hosur: ["hosur"],
  krishnagiri: ["krishnagiri"],
  madurai: ["madurai"],
  trichy: ["trichy", "tiruchirappalli"],
  tiruchirappalli: ["trichy", "tiruchirappalli"],
  hyderabad: ["hyderabad"],
  mumbai: ["mumbai", "bombay"],
  bombay: ["mumbai", "bombay"],
  kolkata: ["kolkata", "calcutta"],
  calcutta: ["kolkata", "calcutta"],
};

function getSearchTerms(location: string) {
  const value = location.trim().toLowerCase();

  if (!value) {
    return [];
  }

  return locationAliases[value] || [value];
}

function locationMatches(
  actualLocation: string,
  searchLocation: string
) {
  const actual = actualLocation.trim().toLowerCase();
  const searchTerms = getSearchTerms(searchLocation);

  return searchTerms.some((term) => actual.includes(term));
}

export default function LoadSearchPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loadTypeFilter, setLoadTypeFilter] = useState("");
  const [truckTypeFilter, setTruckTypeFilter] = useState("");
  const [pickupDateFilter, setPickupDateFilter] = useState("");

  const [loads, setLoads] = useState<Load[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function searchLoads() {
    if (!from.trim() || !to.trim()) {
      setMessage("Please enter both pickup and delivery locations.");
      setLoads([]);
      return;
    }

    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("loads")
      .select(
        "id, pickup, delivery, load_type, truck, pickup_date, price"
      )
      .eq("status", "available")
      .order("pickup_date", {
        ascending: true,
        nullsFirst: false,
      });

    if (error) {
      console.error("Load search error:", error);
      setLoads([]);
      setMessage("Unable to search loads. Please try again.");
      setLoading(false);
      return;
    }

   const matchingLoads = (data || []).filter((load) => {
  const normalize = (value: string | null) =>
    (value || "").trim().toLowerCase().replace(/\s+/g, " ");

  const normalizeLoadType = (value: string | null) => {
    const text = normalize(value);

    if (
      text === "packer & movers" ||
      text === "packer and movers" ||
      text === "packers and movers"
    ) {
      return "packers & movers";
    }

    return text;
  };

  const normalizeTruckType = (value: string | null) => {
    return normalize(value)
      .replace(/\s+/g, "")
      .replace(/truck$/i, "");
  };

  const pickupMatches = locationMatches(load.pickup, from);
  const deliveryMatches = locationMatches(load.delivery, to);

  const loadTypeMatches =
    !loadTypeFilter ||
    normalizeLoadType(load.load_type) ===
      normalizeLoadType(loadTypeFilter);

  const truckMatches =
    !truckTypeFilter ||
    normalizeTruckType(load.truck) ===
      normalizeTruckType(truckTypeFilter);

  const dateMatches =
    !pickupDateFilter ||
    (load.pickup_date || "") === pickupDateFilter;

  return (
    pickupMatches &&
    deliveryMatches &&
    loadTypeMatches &&
    truckMatches &&
    dateMatches
  );
});

    setLoads(matchingLoads);

    if (matchingLoads.length === 0) {
      setMessage(
        `No available loads found from ${from} to ${to}.`
      );
    } else {
      setMessage(
        `${matchingLoads.length} available load(s) found.`
      );
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-[#062B55] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-2xl font-black tracking-wide"
          >
            LOADZY
          </a>

          <a
            href="/"
            className="rounded-lg bg-teal-500 px-5 py-2 font-bold hover:bg-teal-600"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#062B55] px-6 pb-14 pt-10 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-teal-300">
            AVAILABLE LOADS
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Find a Load for Your Truck
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Search available LOADZY loads by pickup and delivery
            location.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto -mt-8 max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-6 shadow-xl md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
  <label className="mb-2 block font-bold text-[#062B55]">
    Load Type
  </label>

  <select
    value={loadTypeFilter}
    onChange={(e) => setLoadTypeFilter(e.target.value)}
    className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-teal-500"
  >
    <option value="">All Load Types</option>
    <option value="Furniture">Furniture</option>
    <option value="Packers & Movers">Packers & Movers</option>
    <option value="Vegetables">Vegetables</option>
    <option value="Fruits">Fruits</option>
    <option value="Commercial">Commercial</option>
    <option value="Other">Other</option>
  </select>
</div>
<div>
  <label className="mb-2 block font-bold text-[#062B55]">
    Truck Type
  </label>

  <select
  value={truckTypeFilter}
  onChange={(e) => setTruckTypeFilter(e.target.value)}
  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-teal-500"
>
  <option value="">All Truck Types</option>
  <option value="7FT">7FT</option>
  <option value="10FT">10FT</option>
  <option value="14FT">14FT</option>
  <option value="17FT">17FT</option>
  <option value="20FT">20FT</option>
  <option value="24FT">24FT</option>
  <option value="32FT">32FT</option>
</select>
</div>
<div>
  <label className="mb-2 block font-bold text-[#062B55]">
    Pickup Date
  </label>

  <input
    type="date"
    value={pickupDateFilter}
    onChange={(e) => setPickupDateFilter(e.target.value)}
    className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-teal-500"
  />
</div>
            <div>
              <label className="mb-2 block font-bold text-[#062B55]">
                Pickup Location
              </label>

              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Example: Bangalore"
                autoComplete="off"
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold text-[#062B55]">
                Delivery Location
              </label>

              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Example: Chennai"
                autoComplete="off"
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={searchLoads}
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-teal-500 px-6 py-4 text-lg font-black text-white shadow-lg hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Searching..."
              : "🔎 Find Available Loads →"}
          </button>

          {message && (
            <div className="mt-5 rounded-xl bg-slate-100 p-4 text-center font-bold text-[#062B55]">
              {message}
            </div>
          )}

          {/* Results */}
          {loads.length > 0 && (
            <div className="mt-8 space-y-5">
              {loads.map((load) => (
                <div
                  key={load.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-6 md:flex-row">
                    <div>
                      <h2 className="text-2xl font-black text-[#062B55]">
                        {load.pickup} → {load.delivery}
                      </h2>

                      <div className="mt-4 space-y-2 text-slate-700">
                        <p>
                          <strong>Load:</strong>{" "}
                          {load.load_type || "Not specified"}
                        </p>

                        <p>
                          <strong>Truck:</strong>{" "}
                          {load.truck || "Not specified"}
                        </p>

                        <p>
                          <strong>Pickup Date:</strong>{" "}
                          {load.pickup_date || "Flexible"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start justify-between md:items-end">
                      <div>
                        <p className="text-sm font-bold uppercase text-slate-500">
                          Freight
                        </p>

                        <p className="text-3xl font-black text-teal-600">
                          {load.price !== null
                            ? `₹${load.price.toLocaleString("en-IN")}`
                            : "Price on request"}
                        </p>
                      </div>

                      <a
                        href={`/?loadId=${load.id}&pickup=${encodeURIComponent(load.pickup)}&delivery=${encodeURIComponent(load.delivery)}&loadType=${encodeURIComponent(load.load_type || "")}&truck=${encodeURIComponent(load.truck || "")}&pickupDate=${encodeURIComponent(load.pickup_date || "")}#book`}
                        className="mt-5 rounded-xl bg-[#062B55] px-6 py-3 font-black text-white hover:bg-[#0a3d73]"
                      >
                        🚚 Book This Load →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}