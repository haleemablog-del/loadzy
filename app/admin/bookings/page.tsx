"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Booking = {
  id: number;
  created_at: string;
  customer_name: string;
  phone: string;
  pickup: string;
  delivery: string;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  status: string | null;
  load_id: number | null;
};

type AvailableLoad = {
  id: number;
  pickup: string;
  delivery: string;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  price: number | null;
  status: string | null;
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [availableLoads, setAvailableLoads] = useState<AvailableLoad[]>([]);
  const [selectedLoadIds, setSelectedLoadIds] = useState<
    Record<number, string>
  >({});
  const [assigningBookingId, setAssigningBookingId] = useState<number | null>(
    null
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateSort, setDateSort] = useState("oldest");

  async function loadBookings() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("bookings")
      .select(
        "id, created_at, customer_name, phone, pickup, delivery, load_type, truck, pickup_date, status, load_id"
      )
      .order("pickup_date", {
        ascending: true,
        nullsFirst: false,
      });

    if (error) {
      console.error("Booking load error:", error);
      setMessage("Unable to load bookings.");
      setBookings([]);
      setLoading(false);
      return;
    }

    setBookings(data || []);

    if (!data || data.length === 0) {
      setMessage("No customer bookings found.");
    }

    setLoading(false);
  }

  async function loadAvailableLoads() {
    const { data, error } = await supabase
      .from("loads")
      .select(
        "id, pickup, delivery, load_type, truck, pickup_date, price, status"
      )
      .eq("status", "available")
      .order("pickup_date", {
        ascending: true,
        nullsFirst: false,
      });

    if (error) {
      console.error("Error loading available loads:", error);
      return;
    }

    setAvailableLoads(data || []);
  }

  /*
   * Return ONLY loads that match the booking.
   *
   * Matching rules:
   * 1. Pickup location must match
   * 2. Delivery location must match
   * 3. Load type must match when booking has one
   * 4. Truck type must match when booking has one
   * 5. Pickup date must match when booking has one
   */
   function getMatchingLoads(booking: Booking) {
    const normalize = (value: string | null) =>
      (value || "").trim().toLowerCase();

    const bookingPickup = normalize(booking.pickup);
    const bookingDelivery = normalize(booking.delivery);
    const bookingLoadType = normalize(booking.load_type);
    const bookingTruck = normalize(booking.truck);
    const bookingDate = booking.pickup_date || "";

    return availableLoads.filter((load) => {
      const loadPickup = normalize(load.pickup);
      const loadDelivery = normalize(load.delivery);
      const loadType = normalize(load.load_type);
      const loadTruck = normalize(load.truck);
      const loadDate = load.pickup_date || "";

      // Route must match exactly
      if (loadPickup !== bookingPickup) {
        return false;
      }

      if (loadDelivery !== bookingDelivery) {
        return false;
      }

      // Load type must match if booking specifies one
      if (bookingLoadType && loadType !== bookingLoadType) {
        return false;
      }

      // Truck type must match if booking specifies one
      if (bookingTruck && loadTruck !== bookingTruck) {
        return false;
      }

      // Pickup date must match if booking specifies one
      if (bookingDate && loadDate !== bookingDate) {
        return false;
      }

      return true;
    });
  }

  async function assignLoad(bookingId: number) {
    const selectedLoadId = selectedLoadIds[bookingId];

    if (!selectedLoadId) {
      setMessage("Please select a matching load first.");
      return;
    }

    const loadId = Number(selectedLoadId);

    if (!Number.isFinite(loadId)) {
      setMessage("Invalid load selected.");
      return;
    }

    const booking = bookings.find((item) => item.id === bookingId);

    if (!booking) {
      setMessage("Booking not found.");
      return;
    }

    if (booking.load_id) {
      setMessage("This booking already has a load assigned.");
      return;
    }

    // Extra safety check
    const matchingLoads = getMatchingLoads(booking);

    const selectedLoad = matchingLoads.find(
      (load) => load.id === loadId
    );

    if (!selectedLoad) {
      setMessage(
        "This load does not match the customer's route, truck, load type or pickup date."
      );
      return;
    }

    const confirmed = window.confirm(
      `Assign Load #${loadId} to ${booking.customer_name}'s booking?`
    );

    if (!confirmed) return;

    setAssigningBookingId(bookingId);
    setMessage("");

    const { error } = await supabase.rpc("assign_load_to_booking", {
      p_booking_id: bookingId,
      p_load_id: loadId,
    });

    if (error) {
      console.error("Assign load error:", error);
      setMessage(`Unable to assign load: ${error.message}`);
      setAssigningBookingId(null);
      return;
    }

    setMessage("✅ Matching load assigned successfully. Booking confirmed.");

    setSelectedLoadIds((current) => {
      const updated = { ...current };
      delete updated[bookingId];
      return updated;
    });

    await loadBookings();
    await loadAvailableLoads();

    setAssigningBookingId(null);
  }

  async function updateBookingStatus(
    bookingId: number,
    status: string
  ) {
    const { error } = await supabase.rpc("update_booking_status", {
      p_booking_id: bookingId,
      p_status: status,
    });

    if (error) {
      console.error("Booking status update error:", error);

      setMessage(
        `Unable to update booking status: ${error.message}`
      );

      return;
    }

    setBookings((current) =>
      current.map((booking) =>
        booking.id === bookingId
          ? { ...booking, status }
          : booking
      )
    );

    setMessage("✅ Booking status updated successfully.");
  }

  async function deleteBooking(bookingId: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", bookingId);

    if (error) {
      console.error("Booking delete error:", error);

      setMessage(
        `Unable to delete booking: ${error.message}`
      );

      return;
    }

    setBookings((current) =>
      current.filter((booking) => booking.id !== bookingId)
    );

    setMessage("✅ Booking deleted.");
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");

    if (
      status === "new" ||
      status === "contacted" ||
      status === "confirmed" ||
      status === "completed" ||
      status === "cancelled"
    ) {
      setStatusFilter(status);
    }

    loadBookings();
    loadAvailableLoads();
  }, []);

  const filteredBookings = bookings
    .filter((booking) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        booking.customer_name
          .toLowerCase()
          .includes(searchText) ||
        booking.phone
          .toLowerCase()
          .includes(searchText) ||
        booking.pickup
          .toLowerCase()
          .includes(searchText) ||
        booking.delivery
          .toLowerCase()
          .includes(searchText) ||
        (booking.load_type || "")
          .toLowerCase()
          .includes(searchText) ||
        (booking.truck || "")
          .toLowerCase()
          .includes(searchText);

      const matchesStatus =
        statusFilter === "all" ||
        (booking.status || "new").toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const dateA = a.pickup_date
        ? new Date(a.pickup_date).getTime()
        : Infinity;

      const dateB = b.pickup_date
        ? new Date(b.pickup_date).getTime()
        : Infinity;

      if (dateSort === "oldest") {
        return dateA - dateB;
      }

      return dateB - dateA;
    });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <a
          href="/admin"
          className="font-bold text-teal-600 hover:text-teal-700"
        >
          ← Back to Admin Panel
        </a>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black text-[#062B55]">
              Customer Bookings
            </h1>

            <p className="mt-2 text-slate-600">
              View customer booking requests from the LOADZY website.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              loadBookings();
              loadAvailableLoads();
            }}
            className="rounded-xl bg-white px-5 py-3 font-bold text-[#062B55] shadow hover:bg-slate-50"
          >
            🔄 Refresh
          </button>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <div className="mb-6 grid gap-4 md:grid-cols-3">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔎 Search customer, phone, pickup, delivery, load or truck..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={dateSort}
              onChange={(e) => setDateSort(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            >
              <option value="oldest">
                📅 Earliest Pickup First
              </option>

              <option value="newest">
                📅 Latest Pickup First
              </option>
            </select>

          </div>

          {message && !loading && (
            <p className="mb-5 rounded-xl bg-slate-100 px-4 py-3 font-bold text-slate-700">
              {message}
            </p>
          )}

          {loading ? (
            <p className="font-bold text-[#062B55]">
              Loading bookings...
            </p>
          ) : bookings.length === 0 ? (
            <p className="font-bold text-slate-600">
              No bookings found.
            </p>
          ) : filteredBookings.length === 0 ? (
            <p className="font-bold text-slate-600">
              No bookings match your search or filter.
            </p>
          ) : (
            <div className="space-y-5">

              {filteredBookings.map((booking) => {
                const matchingLoads = getMatchingLoads(booking);

                return (
                  <div
                    key={booking.id}
                    className="rounded-2xl border border-slate-200 p-5"
                  >

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                      <div className="flex-1">

                        <h2 className="text-2xl font-black text-[#062B55]">
                          {booking.pickup} → {booking.delivery}
                        </h2>

                        <div className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">

                          <p>
                            <strong>Customer:</strong>{" "}
                            {booking.customer_name}
                          </p>

                          <p>
                            <strong>Phone:</strong>{" "}
                            {booking.phone}
                          </p>

                          <p>
                            <strong>Load:</strong>{" "}
                            {booking.load_type || "Not specified"}
                          </p>

                          <p>
                            <strong>Truck:</strong>{" "}
                            {booking.truck || "Not specified"}
                          </p>

                          <p>
                            <strong>Pickup Date:</strong>{" "}
                            {booking.pickup_date || "Not specified"}
                          </p>

                          <div>
                            <label className="font-bold">
                              Status:{" "}
                            </label>

                            <select
                              value={booking.status || "new"}
                              onChange={(e) =>
                                updateBookingStatus(
                                  booking.id,
                                  e.target.value
                                )
                              }
                              className="rounded-lg border border-slate-300 px-3 py-2"
                            >
                              <option value="new">
                                New
                              </option>

                              <option value="contacted">
                                Contacted
                              </option>

                              <option value="confirmed">
                                Confirmed
                              </option>

                              <option value="completed">
                                Completed
                              </option>

                              <option value="cancelled">
                                Cancelled
                              </option>
                            </select>
                          </div>

                        </div>

                        {/* Assigned load */}

                        {booking.load_id && (
                          <div className="mt-5 rounded-xl bg-teal-50 px-4 py-3">

                            <p className="font-black text-teal-800">
                              🚚 Assigned Load: #{booking.load_id}
                            </p>

                            <p className="mt-1 text-sm text-teal-700">
                              This booking has already been assigned a load.
                            </p>

                          </div>
                        )}

                        {/* Assign matching load */}

                        {!booking.load_id && (
                          <div className="mt-5 rounded-xl border border-teal-200 bg-teal-50 p-4">

                            <p className="mb-3 font-black text-[#062B55]">
                              🚚 Assign Matching Load
                            </p>

                            {matchingLoads.length === 0 ? (
                              <div>
                                <p className="text-sm font-bold text-slate-600">
                                  No matching available load right now.
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                  Load must match the pickup, delivery,
                                  truck, load type and pickup date.
                                </p>
                              </div>
                            ) : (
                              <div className="flex flex-col gap-3 md:flex-row">

                                <select
                                  value={
                                    selectedLoadIds[booking.id] || ""
                                  }
                                  onChange={(e) =>
                                    setSelectedLoadIds((current) => ({
                                      ...current,
                                      [booking.id]: e.target.value,
                                    }))
                                  }
                                  className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                                >

                                  <option value="">
                                    Select a matching load...
                                  </option>

                                  {matchingLoads.map((load) => (
                                    <option
                                      key={load.id}
                                      value={load.id}
                                    >
                                      #{load.id} — {load.pickup} →{" "}
                                      {load.delivery}
                                      {load.truck
                                        ? ` — ${load.truck}`
                                        : ""}
                                      {load.price
                                        ? ` — ₹${Number(
                                            load.price
                                          ).toLocaleString("en-IN")}`
                                        : ""}
                                    </option>
                                  ))}

                                </select>

                                <button
                                  type="button"
                                  onClick={() =>
                                    assignLoad(booking.id)
                                  }
                                  disabled={
                                    assigningBookingId === booking.id ||
                                    !selectedLoadIds[booking.id]
                                  }
                                  className="rounded-xl bg-teal-500 px-5 py-3 font-black text-white shadow hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  {assigningBookingId === booking.id
                                    ? "Assigning..."
                                    : "Assign Load"}
                                </button>

                              </div>
                            )}

                          </div>
                        )}

                      </div>

                      <div className="flex flex-col gap-3">

                        <a
                          href={`tel:${booking.phone}`}
                          className="rounded-xl bg-teal-500 px-5 py-3 text-center font-black text-white shadow hover:bg-teal-600"
                        >
                          📞 Call Customer
                        </a>

                        <a
                          href={`https://wa.me/${
                            booking.phone.replace(/\D/g, "").length === 10
                              ? `91${booking.phone.replace(/\D/g, "")}`
                              : booking.phone.replace(/\D/g, "")
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl bg-green-500 px-5 py-3 text-center font-black text-white shadow hover:bg-green-600"
                        >
                          💬 WhatsApp Customer
                        </a>

                        <button
                          type="button"
                          onClick={() => deleteBooking(booking.id)}
                          className="rounded-xl bg-red-600 px-5 py-3 text-center font-black text-white shadow hover:bg-red-700"
                        >
                          🗑️ Delete Booking
                        </button>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>
          )}

        </section>
      </div>
    </main>
  );
}