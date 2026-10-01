"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

type Booking = {
  id: number;
  customer_name: string;
  pickup: string;
  delivery: string;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  status: string | null;
  load_id: number | null;
};

export default function TrackShipmentPage() {
  const [bookingId, setBookingId] = useState("");
  const [booking, setBooking] = useState<Booking | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function trackShipment(e: React.FormEvent) {
    e.preventDefault();

    if (!bookingId.trim()) {
      setMessage("Please enter your Booking ID.");
      return;
    }

    setLoading(true);
    setMessage("");
    setBooking(null);

    const { data, error } = await supabase
      .from("bookings")
      .select(
        "id, customer_name, pickup, delivery, load_type, truck, pickup_date, status, load_id"
      )
      .eq("id", Number(bookingId))
      .maybeSingle();

    if (error) {
      console.error(error);
      setMessage("Unable to track your shipment. Please try again.");
      setLoading(false);
      return;
    }

    if (!data) {
      setMessage("Booking not found. Please check your Booking ID.");
      setLoading(false);
      return;
    }

    setBooking(data);
    setLoading(false);
  }

  const statusLabel = (status: string | null) => {
    switch (status) {
      case "new":
        return "Booking Received";
      case "contacted":
        return "Customer Contacted";
      case "confirmed":
        return "Load Confirmed";
      case "completed":
        return "Delivery Completed";
      case "cancelled":
        return "Booking Cancelled";
      default:
        return "Booking Received";
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <div className="font-bold text-[#08c9bd]">
            LOADZY TRACKING
          </div>

          <h1 className="mt-3 text-4xl font-black text-blue-950">
            Track Your Shipment
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Enter your LOADZY Booking ID to check your shipment status.
          </p>
        </div>

        <form
          onSubmit={trackShipment}
          className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-8 shadow-xl"
        >
          <label className="mb-2 block font-bold text-blue-950">
            Booking ID
          </label>

          <input
            type="number"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            placeholder="Example: 30"
            className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-teal-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-xl bg-teal-500 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-teal-600 disabled:opacity-60"
          >
            {loading ? "Checking..." : "🔎 Track Shipment →"}
          </button>

          {message && (
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-center font-semibold text-slate-700">
              {message}
            </div>
          )}
        </form>

        {booking && (
          <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-slate-400">
                  BOOKING ID
                </div>

                <div className="text-3xl font-black text-blue-950">
                  #{booking.id}
                </div>
              </div>

              <div className="rounded-full bg-teal-50 px-5 py-2 font-bold text-teal-700">
                {statusLabel(booking.status)}
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-bold text-slate-400">
                  CUSTOMER
                </div>
                <div className="mt-1 font-bold text-blue-950">
                  {booking.customer_name}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-bold text-slate-400">
                  PICKUP DATE
                </div>
                <div className="mt-1 font-bold text-blue-950">
                  {booking.pickup_date || "Not available"}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-bold text-slate-400">
                  PICKUP
                </div>
                <div className="mt-1 font-bold text-blue-950">
                  {booking.pickup}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-bold text-slate-400">
                  DELIVERY
                </div>
                <div className="mt-1 font-bold text-blue-950">
                  {booking.delivery}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-bold text-slate-400">
                  LOAD TYPE
                </div>
                <div className="mt-1 font-bold text-blue-950">
                  {booking.load_type || "Not available"}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-sm font-bold text-slate-400">
                  TRUCK
                </div>
                <div className="mt-1 font-bold text-blue-950">
                  {booking.truck || "Not assigned yet"}
                </div>
              </div>

            </div>

            <div className="mt-8 border-t pt-6">
              <div className="text-sm font-bold text-slate-400">
                SHIPMENT STATUS
              </div>
              <div className="mt-8">
  <div className="text-sm font-bold text-slate-400">
    SHIPMENT PROGRESS
  </div>

  <div className="mt-6 space-y-5">

    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 font-black text-white">
        ✓
      </div>

      <div>
        <div className="font-black text-blue-950">
          Booking Received
        </div>
        <div className="text-sm text-slate-500">
          Your booking request has been received.
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full font-black ${
          booking.status === "confirmed" ||
          booking.status === "completed"
            ? "bg-teal-500 text-white"
            : "bg-slate-200 text-slate-400"
        }`}
      >
        {booking.status === "confirmed" ||
        booking.status === "completed"
          ? "✓"
          : "2"}
      </div>

      <div>
        <div className="font-black text-blue-950">
          Load Confirmed
        </div>
        <div className="text-sm text-slate-500">
          LOADZY has confirmed the transport requirement.
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full font-black ${
          booking.load_id
            ? "bg-teal-500 text-white"
            : "bg-slate-200 text-slate-400"
        }`}
      >
        {booking.load_id ? "✓" : "3"}
      </div>

      <div>
        <div className="font-black text-blue-950">
          Truck Assigned
        </div>
        <div className="text-sm text-slate-500">
          {booking.load_id
            ? `Assigned Load #${booking.load_id}`
            : "Waiting for truck assignment."}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-black text-slate-400">
        4
      </div>

      <div>
        <div className="font-black text-blue-950">
          In Transit
        </div>
        <div className="text-sm text-slate-500">
          Shipment movement will be updated here.
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full font-black ${
          booking.status === "completed"
            ? "bg-teal-500 text-white"
            : "bg-slate-200 text-slate-400"
        }`}
      >
        {booking.status === "completed" ? "✓" : "5"}
      </div>

      <div>
        <div className="font-black text-blue-950">
          Delivered
        </div>
        <div className="text-sm text-slate-500">
          {booking.status === "completed"
            ? "Delivery completed."
            : "Delivery is not yet completed."}
        </div>
      </div>
    </div>

  </div>
</div>

              <div className="mt-2 text-2xl font-black text-teal-600">
                {statusLabel(booking.status)}
              </div>

              {booking.load_id && (
                <p className="mt-2 text-slate-500">
                  🚚 Assigned Load #{booking.load_id}
                </p>
              )}
            </div>

          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="/"
            className="font-bold text-blue-950 hover:text-teal-500"
          >
            ← Back to LOADZY
          </a>
        </div>

      </div>
    </main>
  );
}