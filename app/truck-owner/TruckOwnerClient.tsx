"use client";

import { useEffect, useState } from "react";
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

type RequestStatus = {
  requestId: number;
  status: string;
};

const locationAliases: Record<string, string[]> = {
  tpt: ["tpt", "tirupattur", "tirupathur"],
  tirupattur: ["tpt", "tirupattur", "tirupathur"],
  tirupathur: ["tpt", "tirupattur", "tirupathur"],

  jnpt: [
    "jnpt",
    "jawaharlal nehru port",
    "jawaharlal nehru port trust",
    "nhava sheva",
    "navi mumbai",
  ],

  chennai: ["chennai", "madras"],

  bangalore: ["bangalore", "bengaluru"],
  bengaluru: ["bangalore", "bengaluru"],

  bombay: ["bombay", "mumbai"],
  mumbai: ["bombay", "mumbai"],

  calcutta: ["calcutta", "kolkata"],
  kolkata: ["calcutta", "kolkata"],

  hyderabad: ["hyderabad"],
  coimbatore: ["coimbatore"],
  salem: ["salem"],
  vellore: ["vellore"],
  hosur: ["hosur"],
  krishnagiri: ["krishnagiri"],
  madurai: ["madurai"],

  trichy: ["trichy", "tiruchirappalli"],
  tiruchirappalli: ["trichy", "tiruchirappalli"],
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

function getStatusLabel(status: string) {
  switch (status) {
    case "new":
      return "🟡 Pending";

    case "confirmed":
      return "🟢 Confirmed";

    case "completed":
      return "🔵 Completed";

    case "rejected":
      return "🔴 Rejected";

    default:
      return `⚪ ${status}`;
  }
}

export default function TruckOwnerClient() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [loads, setLoads] = useState<Load[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [driverName, setDriverName] = useState("");
  const [driverPhone, setDriverPhone] = useState("");

  const [requestingLoadId, setRequestingLoadId] =
    useState<number | null>(null);

  const [requestStatus, setRequestStatus] =
    useState<RequestStatus | null>(null);

  const [checkingStatus, setCheckingStatus] = useState(false);

  /*
   * --------------------------------
   * LOAD SAVED REQUEST
   * --------------------------------
   */

  useEffect(() => {
    const savedRequest = localStorage.getItem(
      "loadzy_truck_owner_request"
    );

    if (!savedRequest) {
      return;
    }

    try {
      const parsed = JSON.parse(savedRequest);

      if (parsed.requestId && parsed.requestToken) {
        setRequestStatus({
          requestId: Number(parsed.requestId),
          status: parsed.status || "new",
        });
      }
    } catch {
      localStorage.removeItem("loadzy_truck_owner_request");
    }
  }, []);

  /*
   * --------------------------------
   * FIND LOADS
   * --------------------------------
   */

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
      .order("pickup_date", { ascending: true });

    if (error) {
      console.error("Load search error:", error);

      setLoading(false);
      setMessage("Load search failed. Please try again.");
      setLoads([]);

      return;
    }

    const availableLoads = data || [];

    const matchingLoads = availableLoads.filter((load) => {
      const pickupMatches = locationMatches(load.pickup, from);
      const deliveryMatches = locationMatches(load.delivery, to);

      return pickupMatches && deliveryMatches;
    });

    setLoads(matchingLoads);
    setLoading(false);

    if (matchingLoads.length === 0) {
      setMessage(
        `No available loads found from ${from.trim()} to ${to.trim()}.`
      );
    } else {
      setMessage(
        `${matchingLoads.length} available load(s) found.`
      );
    }
  }

  /*
   * --------------------------------
   * REQUEST LOAD
   * --------------------------------
   */

  async function requestLoad(load: Load) {
    setRequestingLoadId(load.id);
    setMessage("");

    const { data, error } = await supabase.rpc(
      "create_loadzy_load_request",
      {
        p_load_id: load.id,
        p_driver_name: driverName.trim() || "Truck Owner",
        p_driver_phone: driverPhone.trim() || "Not provided",
        p_pickup: load.pickup,
        p_delivery: load.delivery,
        p_load_type: load.load_type,
        p_truck: load.truck,
        p_pickup_date: load.pickup_date,
        p_price: load.price,
      }
    );

    if (error) {
      console.error("Load request error:", error);

      alert(
        `Unable to save load request.\n\n${error.message}`
      );

      setRequestingLoadId(null);
      return;
    }

    const result = data?.[0];

    if (!result) {
      alert("Request was not created. Please try again.");

      setRequestingLoadId(null);
      return;
    }

    const savedRequest = {
      requestId: Number(result.request_id),
      requestToken: result.request_token,
      status: result.request_status || "new",
    };

    localStorage.setItem(
      "loadzy_truck_owner_request",
      JSON.stringify(savedRequest)
    );

    setRequestStatus({
      requestId: savedRequest.requestId,
      status: savedRequest.status,
    });

    setMessage(
      "✅ Load request sent successfully. LOADZY will contact you."
    );

    const whatsappMessage = `LOADZY Load Request

Driver: ${driverName.trim() || "Truck Owner"}
Mobile: ${driverPhone.trim() || "Not provided"}

Route: ${load.pickup} → ${load.delivery}
Load Type: ${load.load_type || "Not specified"}
Truck: ${load.truck || "Not specified"}
Pickup Date: ${load.pickup_date || "Not specified"}
Freight: ₹${
      load.price?.toLocaleString("en-IN") || "Not specified"
    }

Load ID: ${load.id}
Request ID: ${savedRequest.requestId}`;

    const whatsappUrl =
      `https://wa.me/919019499448?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappUrl, "_blank");

    setRequestingLoadId(null);
  }

  /*
   * --------------------------------
   * CHECK REQUEST STATUS
   * --------------------------------
   */

  async function checkRequestStatus() {
    const savedRequest = localStorage.getItem(
      "loadzy_truck_owner_request"
    );

    if (!savedRequest) {
      setMessage("No truck-owner request found.");
      return;
    }

    let parsed;

    try {
      parsed = JSON.parse(savedRequest);
    } catch {
      setMessage("Saved request information is invalid.");
      return;
    }

    if (!parsed.requestId || !parsed.requestToken) {
      setMessage("Request information is incomplete.");
      return;
    }

    setCheckingStatus(true);
    setMessage("");

    const { data, error } = await supabase.rpc(
  "get_load_request_status",
  {
    p_request_id: Number(parsed.requestId),
    p_request_token: parsed.requestToken,
  }
);

    if (error) {
      console.error("Status check error:", error);

      setMessage(
        "Unable to check request status. Please try again."
      );

      setCheckingStatus(false);
      return;
    }

    const result = data?.[0];

    if (!result) {
      setMessage("Request not found.");
      setCheckingStatus(false);
      return;
    }

    const newStatus = result.status;

setRequestStatus({
  requestId: Number(result.id),
  status: newStatus,
});

    localStorage.setItem(
      "loadzy_truck_owner_request",
      JSON.stringify({
        requestId: Number(result.request_id),
        requestToken: parsed.requestToken,
        status: newStatus,
      })
    );

    setMessage("✅ Request status updated.");

    setCheckingStatus(false);
  }

  return (
    <>
      {/* --------------------------------
          REQUEST STATUS
      --------------------------------- */}

      {requestStatus && (
        <section className="px-6 pt-10">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-600">
                    YOUR LOAD REQUEST
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-[#062B55]">
                    Request #{requestStatus.requestId}
                  </h2>

                  <p className="mt-2 text-xl font-black">
                    {getStatusLabel(requestStatus.status)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={checkRequestStatus}
                  disabled={checkingStatus}
                  className="rounded-xl bg-[#062B55] px-6 py-3 font-black text-white shadow-md hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {checkingStatus
                    ? "Checking..."
                    : "🔄 Check Request Status"}
                </button>

              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">

                <div
                  className={`rounded-xl p-4 text-center ${
                    requestStatus.status === "new"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <p className="font-black">🟡 Pending</p>
                  <p className="mt-1 text-sm">
                    Waiting for LOADZY
                  </p>
                </div>

                <div
                  className={`rounded-xl p-4 text-center ${
                    requestStatus.status === "confirmed"
                      ? "bg-green-100 text-green-800"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <p className="font-black">🟢 Confirmed</p>
                  <p className="mt-1 text-sm">
                    Load accepted
                  </p>
                </div>

                <div
                  className={`rounded-xl p-4 text-center ${
                    requestStatus.status === "completed"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <p className="font-black">🔵 Completed</p>
                  <p className="mt-1 text-sm">
                    Trip completed
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* --------------------------------
          LOAD SEARCH
      --------------------------------- */}

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

            {/* DRIVER DETAILS */}

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <h3 className="text-xl font-black text-[#062B55]">
                Truck Owner Details
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Enter your details before requesting a load.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">

                <div>
                  <label className="font-bold text-[#062B55]">
                    Driver Name
                  </label>

                  <input
                    type="text"
                    value={driverName}
                    onChange={(e) =>
                      setDriverName(e.target.value)
                    }
                    placeholder="Enter your name"
                    autoComplete="new-password"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#062B55]">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    value={driverPhone}
                    onChange={(e) =>
                      setDriverPhone(e.target.value)
                    }
                    placeholder="Enter mobile number"
                    autoComplete="new-password"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                  />
                </div>

              </div>
            </div>

            {/* SEARCH FIELDS */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div>
                <label className="font-bold text-[#062B55]">
                  From
                </label>

                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Pickup location"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="font-bold text-[#062B55]">
                  To
                </label>

                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Delivery location"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

            </div>

            {/* SEARCH BUTTON */}

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

            {/* MESSAGE */}

            {message && (
              <p className="mt-5 text-center font-bold text-[#062B55]">
                {message}
              </p>
            )}

            {/* RESULTS */}

            {loads.length > 0 && (
              <div className="mt-8 space-y-4">

                {loads.map((load) => (
                  <div
                    key={load.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                      <div>

                        <p className="text-xl font-black text-[#062B55]">
                          {load.pickup} → {load.delivery}
                        </p>

                        <div className="mt-3 space-y-1 text-slate-600">

                          {load.load_type && (
                            <p>
                              <span className="font-bold">
                                Load:
                              </span>{" "}
                              {load.load_type}
                            </p>
                          )}

                          {load.truck && (
                            <p>
                              <span className="font-bold">
                                Truck:
                              </span>{" "}
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
                        <div className="text-left sm:min-w-[220px] sm:text-right">

                          <p className="text-sm font-bold uppercase text-slate-500">
                            Freight
                          </p>

                          <p className="text-2xl font-black text-teal-600">
                            ₹{load.price.toLocaleString("en-IN")}
                          </p>

                          <button
                            type="button"
                            onClick={() => requestLoad(load)}
                            disabled={
                              requestingLoadId === load.id
                            }
                            className="mt-4 w-full rounded-xl bg-[#062B55] px-5 py-3 font-black text-white shadow-md hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {requestingLoadId === load.id
                              ? "Sending Request..."
                              : "🚚 Request This Load →"}
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

      {/* --------------------------------
          HOW IT WORKS
      --------------------------------- */}

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

      {/* --------------------------------
          CTA
      --------------------------------- */}

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