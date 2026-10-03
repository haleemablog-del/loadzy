"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
type Booking = {
  id: number;
  customer_name: string | null;
  phone: string | null;
  pickup: string | null;
  delivery: string | null;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  status: string | null;
};

type DeliveryRecord = {
  id: number;
  booking_id: number;
  pickup_completed_at: string | null;
  in_transit_at: string | null;
  delivered_at: string | null;
  delivery_notes: string | null;
  pod_file_url: string | null;
  created_at: string | null;
  updated_at: string | null;
};

type Shipment = Booking & {
  delivery_record?: DeliveryRecord;
};

export default function DeliveryHistoryPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchDeliveryHistory();
  }, []);

  async function fetchDeliveryHistory() {
    setLoading(true);
    setMessage("");

    const { data: bookings, error: bookingError } = await supabase
      .from("bookings")
      .select(
        "id, customer_name, phone, pickup, delivery, load_type, truck, pickup_date, status"
      )
      .order("created_at", { ascending: false });

    if (bookingError) {
      console.error("Booking history error:", bookingError);
      setMessage("Unable to load booking history.");
      setLoading(false);
      return;
    }

    const { data: deliveryRecords, error: deliveryError } = await supabase
      .from("delivery_records")
      .select(
        "id, booking_id, pickup_completed_at, in_transit_at, delivered_at, delivery_notes, pod_file_url, created_at, updated_at"
      )
      .order("updated_at", { ascending: false });

    if (deliveryError) {
      console.error("Delivery history error:", deliveryError);
      setMessage("Unable to load delivery records.");
      setLoading(false);
      return;
    }

    const recordsMap = new Map<number, DeliveryRecord>();

    (deliveryRecords || []).forEach((record) => {
      recordsMap.set(record.booking_id, record);
    });

    const combined: Shipment[] = (bookings || []).map((booking) => ({
      ...booking,
      delivery_record: recordsMap.get(booking.id),
    }));

    setShipments(combined);
    setLoading(false);
  }

  function formatDate(value: string | null | undefined) {
    if (!value) return "—";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return "—";

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getStatusLabel(status: string | null | undefined) {
    if (!status) return "Unknown";

    return status
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function getStatusClass(status: string | null | undefined) {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";

      case "in_transit":
        return "bg-blue-100 text-blue-700";

      case "confirmed":
        return "bg-purple-100 text-purple-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  const filteredShipments = shipments.filter((shipment) => {
    const searchText = search.toLowerCase().trim();

    if (!searchText) return true;

    return (
      String(shipment.id).includes(searchText) ||
      shipment.customer_name?.toLowerCase().includes(searchText) ||
      shipment.phone?.toLowerCase().includes(searchText) ||
      shipment.pickup?.toLowerCase().includes(searchText) ||
      shipment.delivery?.toLowerCase().includes(searchText) ||
      shipment.load_type?.toLowerCase().includes(searchText) ||
      shipment.truck?.toLowerCase().includes(searchText) ||
      shipment.status?.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Shipment & Delivery History
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View booking progress, transit times and completed deliveries.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6 rounded-xl bg-white p-4 shadow-sm">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search booking, customer, phone, pickup, delivery, truck..."
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        {/* Message */}
        {message && (
          <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {message}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="rounded-xl bg-white p-10 text-center text-slate-500 shadow-sm">
            Loading shipment history...
          </div>
        ) : filteredShipments.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <p className="font-medium text-slate-700">
              No shipment records found.
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Try another search or complete a booking to create delivery
              records.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredShipments.map((shipment) => {
              const record = shipment.delivery_record;

              return (
                <div
                  key={shipment.id}
                  className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
                >
                  {/* Top section */}
                  <div className="flex flex-col gap-4 border-b border-slate-100 p-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-lg font-bold text-slate-900">
                          Booking #{shipment.id}
                        </h2>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                            shipment.status
                          )}`}
                        >
                          {getStatusLabel(shipment.status)}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        {shipment.customer_name || "Customer not available"}
                      </p>
                    </div>

                    {record?.pod_file_url && (
                      <a
                        href={record.pod_file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
                      >
                        View POD
                      </a>
                    )}
                  </div>

                  {/* Booking details */}
                  <div className="grid gap-4 border-b border-slate-100 p-5 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-xs font-medium uppercase text-slate-400">
                        Customer
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {shipment.customer_name || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase text-slate-400">
                        Phone
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {shipment.phone || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase text-slate-400">
                        Load Type
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {shipment.load_type || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase text-slate-400">
                        Truck
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {shipment.truck || "—"}
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-xs font-medium uppercase text-slate-400">
                        Pickup
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {shipment.pickup || "—"}
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-xs font-medium uppercase text-slate-400">
                        Delivery
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {shipment.delivery || "—"}
                      </p>
                    </div>
                  </div>

                  {/* Delivery timeline */}
                  <div className="p-5">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700">
                      Delivery Timeline
                    </h3>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-slate-50 p-4">
                        <p className="text-xs font-medium text-slate-400">
                          Pickup Completed
                        </p>

                        <p className="mt-2 text-sm font-semibold text-slate-800">
                          {formatDate(record?.pickup_completed_at)}
                        </p>
                      </div>

                      <div className="rounded-lg bg-blue-50 p-4">
                        <p className="text-xs font-medium text-blue-500">
                          In Transit
                        </p>

                        <p className="mt-2 text-sm font-semibold text-slate-800">
                          {formatDate(record?.in_transit_at)}
                        </p>
                      </div>

                      <div className="rounded-lg bg-green-50 p-4">
                        <p className="text-xs font-medium text-green-600">
                          Delivered
                        </p>

                        <p className="mt-2 text-sm font-semibold text-slate-800">
                          {formatDate(record?.delivered_at)}
                        </p>
                      </div>
                    </div>

                    {/* Notes */}
                    {record?.delivery_notes && (
                      <div className="mt-4 rounded-lg bg-amber-50 p-4">
                        <p className="text-xs font-medium uppercase text-amber-600">
                          Delivery Notes
                        </p>

                        <p className="mt-1 text-sm text-slate-700">
                          {record.delivery_notes}
                        </p>
                      </div>
                    )}

                    {!record && (
                      <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm text-slate-500">
                        No delivery record has been created for this booking
                        yet.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}