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

export default function TruckOwnerClient() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loads, setLoads] = useState<Load[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function findLoads() {
    if (!from.trim() || !to.trim()) {
      setMessage("Please enter both From and To locations.");
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
      .ilike("pickup", `%${from.trim()}%`)
.ilike("delivery", `%${to.trim()}%`)
      .order("pickup_date", { ascending: true });

    setLoading(false);

    if (error) {
      console.error("Load search error:", error);
      setMessage("Unable to search loads. Please try again.");
      setLoads([]);
      return;
    }

    setLoads(data || []);

    if (!data || data.length === 0) {
      setMessage("No available loads found for this route.");
    } else {
      setMessage(`${data.length} available load(s) found.`);
    }
  }

  return (
    <>
      {/* Load Search */}
      <section id="load-search" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-teal-600">
              AVAILABLE LOADS
            </div>

            <h2 className="mt-2 text-3xl font-black text-[#062B55]">
              Search for your next load
            </h2>

            <p className="mt-2 text-slate-500">
              Enter your preferred route to find matching loads.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="font-bold">From</label>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Pickup location"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="font-bold">To</label>
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Delivery location"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                findLoads();
              }}
              disabled={loading}
              className="mt-7 w-full rounded-xl bg-teal-500 px-6 py-4 text-lg font-black text-white shadow-lg hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Searching..."
                : "🔎 Find Available Loads →"}
            </button>

            {message && (
              <p className="mt-5 text-center font-bold text-[#062B55]">
                {message}
              </p>
            )}

            {loads.length > 0 && (
              <div className="mt-8 space-y-4">
                {loads.map((load) => (
                  <div
                    key={load.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xl font-black text-[#062B55]">
                          {load.pickup} → {load.delivery}
                        </p>

                        <div className="mt-3 space-y-1 text-slate-600">
                          {load.load_type && (
                            <p>
                              <span className="font-bold">Load:</span>{" "}
                              {load.load_type}
                            </p>
                          )}

                          {load.truck && (
                            <p>
                              <span className="font-bold">Truck:</span>{" "}
                              {load.truck}
                            </p>
                          )}

                          {load.pickup_date && (
                            <p>
                              <span className="font-bold">
                                Pickup Date:
                              </span>{" "}
                              {load.pickup_date}
                            </p>
                          )}
                        </div>
                      </div>

                      {load.price !== null && (
  <div className="text-left sm:text-right">
    <p className="text-sm font-bold uppercase text-slate-500">
      Freight
    </p>

    <p className="text-2xl font-black text-teal-600">
      ₹{load.price.toLocaleString("en-IN")}
    </p>

    <button
      type="button"
      className="mt-4 w-full rounded-xl bg-[#062B55] px-5 py-3 font-black text-white shadow-md hover:bg-blue-950"
      onClick={() => {
        const message = `🚚 LOADZY Load Request

Route: ${load.pickup} → ${load.delivery}
Load Type: ${load.load_type || "Not specified"}
Truck: ${load.truck || "Not specified"}
Pickup Date: ${load.pickup_date || "Not specified"}
Freight: ₹${load.price?.toLocaleString("en-IN") || "Not specified"}`;

        const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
      }}
    >
      🚚 Request This Load →
    </button>
  </div>
)}
                      
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-teal-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#062B55]">
              Keep your truck moving
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-md ring-1 ring-slate-200">
              <div className="text-3xl">📍</div>
              <h3 className="mt-4 text-xl font-black">
                Choose your route
              </h3>
              <p className="mt-2 text-slate-500">
                Enter where your truck is available and where you want to go.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-md ring-1 ring-slate-200">
              <div className="text-3xl">📦</div>
              <h3 className="mt-4 text-xl font-black">
                Find a load
              </h3>
              <p className="mt-2 text-slate-500">
                Discover suitable loads for your truck and route.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-md ring-1 ring-slate-200">
              <div className="text-3xl">🚚</div>
              <h3 className="mt-4 text-xl font-black">
                Move the load
              </h3>
              <p className="mt-2 text-slate-500">
                Connect with the load owner and complete the trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-black">
          Have a truck? Keep it moving with LOADZY.
        </h2>

        <a
          href="/truck-owner#load-search"
          className="mt-6 inline-block rounded-xl bg-[#062B55] px-7 py-4 font-black shadow-lg hover:bg-blue-950"
        >
          Find More Loads →
        </a>
      </section>
    </>
  );
}