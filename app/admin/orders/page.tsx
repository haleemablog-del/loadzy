"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
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

type Load = {
  id: number;
  pickup: string;
  delivery: string;
  truck: string | null;
  price: number | null;
  status: string | null;
};

type Order = Booking & {
  assignedLoad: Load | null;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [message, setMessage] = useState("");

  async function fetchOrders() {
    setLoading(true);
    setMessage("");

    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select(
        "id, created_at, customer_name, phone, pickup, delivery, load_type, truck, pickup_date, status, load_id"
      )
      .in("status", ["confirmed", "completed"])
      .order("created_at", { ascending: false });

    if (bookingsError) {
      setMessage(`Failed to load orders: ${bookingsError.message}`);
      setOrders([]);
      setLoading(false);
      return;
    }

    const loadIds = (bookings || [])
      .map((booking) => booking.load_id)
      .filter((id): id is number => id !== null);

    let loads: Load[] = [];

    if (loadIds.length > 0) {
      const { data: loadData, error: loadsError } = await supabase
        .from("loads")
        .select("id, pickup, delivery, truck, price, status")
        .in("id", loadIds);

      if (loadsError) {
        setMessage(`Orders loaded, but assigned loads could not be loaded.`);
      } else {
        loads = loadData || [];
      }
    }

    const loadMap = new Map<number, Load>();

    loads.forEach((load) => {
      loadMap.set(load.id, load);
    });

    const orderData: Order[] = (bookings || []).map((booking) => ({
      ...booking,
      assignedLoad: booking.load_id
        ? loadMap.get(booking.load_id) || null
        : null,
    }));

    setOrders(orderData);
    setLoading(false);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return orders.filter((order) => {
      const matchesSearch =
        !searchText ||
        order.customer_name.toLowerCase().includes(searchText) ||
        order.phone.toLowerCase().includes(searchText) ||
        order.pickup.toLowerCase().includes(searchText) ||
        order.delivery.toLowerCase().includes(searchText) ||
        String(order.id).includes(searchText);

      const matchesStatus =
        statusFilter === "all" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  function formatDate(date: string | null) {
    if (!date) return "Not set";

    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function formatDateTime(date: string) {
    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  function statusStyle(status: string | null) {
    if (status === "completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "confirmed") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-gray-100 text-gray-700";
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link
              href="/admin"
              className="font-semibold text-teal-600 hover:underline"
            >
              ← Back to Admin Panel
            </Link>

            <h1 className="mt-5 text-4xl font-extrabold text-[#062B55]">
              📦 Orders
            </h1>

            <p className="mt-2 text-slate-600">
              Manage confirmed and completed LOADZY orders.
            </p>
          </div>

          <button
            onClick={fetchOrders}
            className="rounded-xl bg-white px-5 py-3 font-bold text-[#062B55] shadow hover:bg-slate-50"
          >
            🔄 Refresh
          </button>
        </div>

        {message && (
          <div className="mb-5 rounded-xl border border-yellow-300 bg-yellow-50 p-4 font-semibold text-yellow-800">
            {message}
          </div>
        )}

        <div className="mb-6 rounded-2xl bg-white p-5 shadow">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Search order, customer, phone or route..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            >
              <option value="all">All Order Statuses</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="mb-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm font-semibold text-slate-500">
              Total Orders
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#062B55]">
              {orders.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm font-semibold text-slate-500">
              Confirmed
            </p>
            <p className="mt-2 text-3xl font-extrabold text-blue-600">
              {orders.filter((order) => order.status === "confirmed").length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm font-semibold text-slate-500">
              Completed
            </p>
            <p className="mt-2 text-3xl font-extrabold text-green-600">
              {orders.filter((order) => order.status === "completed").length}
            </p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <p className="font-bold text-[#062B55]">Loading orders...</p>
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <p className="text-5xl">📦</p>
            <h2 className="mt-4 text-2xl font-bold text-[#062B55]">
              No Orders Found
            </h2>
            <p className="mt-2 text-slate-500">
              Confirmed or completed bookings will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-lg bg-[#062B55] px-3 py-1 text-sm font-bold text-white">
                        ORDER #{order.id}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-bold uppercase ${statusStyle(
                          order.status
                        )}`}
                      >
                        {order.status || "Unknown"}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-extrabold text-[#062B55]">
                      {order.pickup} → {order.delivery}
                    </h2>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <p>
                        <strong>Customer:</strong> {order.customer_name}
                      </p>

                      <p>
                        <strong>Phone:</strong> {order.phone}
                      </p>

                      <p>
                        <strong>Load:</strong>{" "}
                        {order.load_type || "Not specified"}
                      </p>

                      <p>
                        <strong>Truck:</strong>{" "}
                        {order.truck || "Not specified"}
                      </p>

                      <p>
                        <strong>Pickup Date:</strong>{" "}
                        {formatDate(order.pickup_date)}
                      </p>

                      <p>
                        <strong>Order Created:</strong>{" "}
                        {formatDateTime(order.created_at)}
                      </p>
                    </div>

                    {order.assignedLoad ? (
                      <div className="mt-5 rounded-xl bg-teal-50 p-4">
                        <p className="font-bold text-[#062B55]">
                          🚚 Assigned Load #{order.assignedLoad.id}
                        </p>

                        <p className="mt-2 text-sm text-slate-700">
                          Route: {order.assignedLoad.pickup} →{" "}
                          {order.assignedLoad.delivery}
                        </p>

                        <p className="mt-1 text-sm text-slate-700">
                          Truck:{" "}
                          {order.assignedLoad.truck || "Not specified"}
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-700">
                          Freight:{" "}
                          {order.assignedLoad.price !== null
                            ? `₹${order.assignedLoad.price.toLocaleString(
                                "en-IN"
                              )}`
                            : "Not specified"}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-5 rounded-xl bg-yellow-50 p-4">
                        <p className="font-bold text-yellow-800">
                          ⚠️ No load assigned
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 lg:w-52">
                    <a
                      href={`tel:${order.phone}`}
                      className="rounded-xl bg-teal-500 px-5 py-3 text-center font-bold text-white hover:bg-teal-600"
                    >
                      📞 Call Customer
                    </a>

                    <a
                      href={`https://wa.me/91${order.phone.replace(
                        /\D/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-green-500 px-5 py-3 text-center font-bold text-white hover:bg-green-600"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}