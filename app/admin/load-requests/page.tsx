"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type LoadRequest = {
  id: number;
  created_at: string;
  load_id: number | null;
  driver_name: string | null;
  driver_phone: string | null;
  pickup: string | null;
  delivery: string | null;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  price: number | null;
  status: string | null;
};

export default function LoadRequestsPage() {
  const [requests, setRequests] = useState<LoadRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState<number | null>(null);

  async function loadRequests() {
    setLoading(true);

    const { data, error } = await supabase
      .from("load_requests")
      .select(
        "id, created_at, load_id, driver_name, driver_phone, pickup, delivery, load_type, truck, pickup_date, price, status"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Load requests error:", error);
      alert("Unable to load requests.");
      setRequests([]);
    } else {
      setRequests(data || []);
    }

    setLoading(false);
  }

  async function acceptRequest(request: LoadRequest) {
    if (request.status !== "new") {
      return;
    }

    const confirmed = window.confirm(
      `Accept this load request?\n\n${request.pickup} → ${request.delivery}\n${request.truck || "Truck not specified"}`
    );

    if (!confirmed) {
      return;
    }

    setActionId(request.id);

    try {
      // 1. Confirm the load request
      const { error: requestError } = await supabase
        .from("load_requests")
        .update({
          status: "confirmed",
        })
        .eq("id", request.id);

      if (requestError) {
        throw requestError;
      }

      // 2. Mark the related load as booked
      if (request.load_id) {
        const { error: loadError } = await supabase
          .from("loads")
          .update({
            status: "booked",
          })
          .eq("id", request.load_id);

        if (loadError) {
          throw loadError;
        }
      }

      alert("Load request accepted successfully.");

      await loadRequests();
    } catch (error) {
      console.error("Accept request error:", error);
      alert("Unable to accept this load request. Please try again.");
    } finally {
      setActionId(null);
    }
  }

  async function rejectRequest(request: LoadRequest) {
    if (request.status !== "new") {
      return;
    }

    const confirmed = window.confirm(
      `Reject this load request?\n\n${request.pickup} → ${request.delivery}`
    );

    if (!confirmed) {
      return;
    }

    setActionId(request.id);

    try {
      const { error } = await supabase
        .from("load_requests")
        .update({
          status: "rejected",
        })
        .eq("id", request.id);

      if (error) {
        throw error;
      }

      alert("Load request rejected.");

      await loadRequests();
    } catch (error) {
      console.error("Reject request error:", error);
      alert("Unable to reject this load request. Please try again.");
    } finally {
      setActionId(null);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#062B55]">
              Load Requests
            </h1>

            <p className="mt-1 text-gray-600">
              View truck-owner requests for available loads.
            </p>
          </div>

          <button
            onClick={loadRequests}
            disabled={loading || actionId !== null}
            className="rounded-lg bg-teal-500 px-5 py-3 font-semibold text-white hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Total Requests</p>

            <p className="mt-1 text-3xl font-bold text-[#062B55]">
              {requests.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">New Requests</p>

            <p className="mt-1 text-3xl font-bold text-orange-500">
              {requests.filter((r) => r.status === "new").length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Confirmed Requests</p>

            <p className="mt-1 text-3xl font-bold text-blue-600">
              {requests.filter((r) => r.status === "confirmed").length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Completed Requests</p>

            <p className="mt-1 text-3xl font-bold text-green-600">
              {requests.filter((r) => r.status === "completed").length}
            </p>
          </div>
        </div>

        {/* Requests table */}
        <div className="overflow-hidden rounded-xl bg-white shadow">
          {loading ? (
            <div className="p-8 text-center text-gray-500">
              Loading requests...
            </div>
          ) : requests.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No load requests found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-[#062B55] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Route</th>
                    <th className="px-4 py-3 text-left">Load</th>
                    <th className="px-4 py-3 text-left">Truck</th>
                    <th className="px-4 py-3 text-left">Pickup Date</th>
                    <th className="px-4 py-3 text-left">Freight</th>
                    <th className="px-4 py-3 text-left">Driver</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {requests.map((request) => {
                    const isNew = request.status === "new";
                    const isProcessing = actionId === request.id;

                    return (
                      <tr
                        key={request.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="px-4 py-4 font-semibold">
                          #{request.id}
                        </td>

                        <td className="px-4 py-4">
                          <div className="font-semibold text-[#062B55]">
                            {request.pickup || "-"} →{" "}
                            {request.delivery || "-"}
                          </div>
                        </td>

                        <td className="px-4 py-4">
                          {request.load_type || "-"}
                        </td>

                        <td className="px-4 py-4">
                          {request.truck || "-"}
                        </td>

                        <td className="px-4 py-4">
                          {request.pickup_date || "-"}
                        </td>

                        <td className="px-4 py-4 font-semibold text-teal-600">
                          {request.price !== null
                            ? `₹${request.price.toLocaleString("en-IN")}`
                            : "-"}
                        </td>

                        <td className="px-4 py-4">
                          <div>{request.driver_name || "Truck Owner"}</div>

                          {request.driver_phone && (
                            <div className="text-sm text-gray-500">
                              {request.driver_phone}
                            </div>
                          )}
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${
                              request.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : request.status === "confirmed"
                                ? "bg-blue-100 text-blue-700"
                                : request.status === "rejected"
                                ? "bg-red-100 text-red-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {request.status || "new"}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          {isNew ? (
                            <div className="flex min-w-[190px] flex-col gap-2">
                              <button
                                onClick={() => acceptRequest(request)}
                                disabled={isProcessing}
                                className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {isProcessing
                                  ? "Processing..."
                                  : "✓ Accept Request"}
                              </button>

                              <button
                                onClick={() => rejectRequest(request)}
                                disabled={isProcessing}
                                className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                {isProcessing
                                  ? "Processing..."
                                  : "✕ Reject Request"}
                              </button>
                            </div>
                          ) : (
                            <span className="text-sm font-semibold text-gray-400">
                              No actions
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}