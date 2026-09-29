"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Load = {
  id: number;
  pickup: string;
  delivery: string;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  price: number | null;
  status: string | null;
  driver_id: number | null;
};
type Driver = {
  id: number;
  name: string;
  phone: string;
  truck_type: string | null;
  vehicle_number: string | null;
  status: string | null;
};

const emptyForm = {
  pickup: "",
  delivery: "",
  load_type: "",
  truck: "",
  pickup_date: "",
  price: "",
  status: "available",
driver_id: "",
};

export default function ManageLoadsPage() {
  const [loads, setLoads] = useState<Load[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateSort, setDateSort] = useState("earliest");

  async function fetchLoads() {
    setLoading(true);
    setMessage("");
   


    const { data, error } = await supabase
      .from("loads")
      .select(
  "id, pickup, delivery, load_type, truck, pickup_date, price, status, driver_id"
)
      .order("pickup_date", {
        ascending: true,
        nullsFirst: false,
      });

    setLoading(false);

    if (error) {
      console.error("Load fetch error:", error);
      setMessage("Unable to load data.");
      return;
    }

    setLoads(data || []);
  }
  async function fetchDrivers() {
  const { data, error } = await supabase
    .from("drivers")
    .select("id, name, phone, truck_type, vehicle_number, status")
    .eq("status", "approved")
    .order("name", { ascending: true });

  if (error) {
    console.error("Driver fetch error:", error);
    return;
  }

  setDrivers(data || []);
}

  useEffect(() => {
  fetchLoads();
  fetchDrivers();
}, []);
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function startEdit(load: Load) {
    setEditingId(load.id);

    setForm({
      pickup: load.pickup || "",
      delivery: load.delivery || "",
      load_type: load.load_type || "",
      truck: load.truck || "",
      pickup_date: load.pickup_date || "",
      price: load.price?.toString() || "",
      status: load.status || "available",
      driver_id: load.driver_id ? String(load.driver_id) : "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
    setMessage("");
  }

  async function saveLoad(e: React.FormEvent) {
    e.preventDefault();

    if (!form.pickup.trim() || !form.delivery.trim()) {
      setMessage("Please enter pickup and delivery locations.");
      return;
    }

    setSaving(true);
    setMessage("");

    const loadData = {
  pickup: form.pickup.trim(),
  delivery: form.delivery.trim(),
  load_type: form.load_type.trim() || null,
  truck: form.truck.trim() || null,
  pickup_date: form.pickup_date || null,
  price: form.price ? Number(form.price) : null,
  status: form.status,
  driver_id: form.driver_id ? Number(form.driver_id) : null,
};

    if (editingId !== null) {
  const { data, error } = await supabase
    .from("loads")
    .update(loadData)
    .eq("id", editingId)
    .select()
    .single();

  if (error) {
    console.error("LOAD UPDATE ERROR:", error);
    setMessage(`Update failed: ${error.message}`);
    setSaving(false);
    return;
  }

  console.log("Updated load:", data);
  setMessage("✅ Load updated successfully.");
} else {
      const { error } = await supabase
        .from("loads")
        .insert([loadData]);

      if (error) {
        console.error("Load insert error:", error);
        setMessage("Unable to add load.");
        setSaving(false);
        return;
      }

      setMessage("✅ Load added successfully.");
    }

    setSaving(false);
    setEditingId(null);
    setForm(emptyForm);

    await fetchLoads();
  }

  async function deleteLoad(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this load?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("loads")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Load delete error:", error);
      setMessage("Unable to delete load.");
      return;
    }

    setMessage("✅ Load deleted successfully.");

    await fetchLoads();
  }

  const filteredLoads = loads.filter((load) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      !searchText ||
      load.pickup.toLowerCase().includes(searchText) ||
      load.delivery.toLowerCase().includes(searchText) ||
      (load.load_type || "").toLowerCase().includes(searchText) ||
      (load.truck || "").toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "all" ||
      (load.status || "available").toLowerCase() === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const sortedLoads = [...filteredLoads].sort((a, b) => {
    if (!a.pickup_date && !b.pickup_date) return 0;
    if (!a.pickup_date) return 1;
    if (!b.pickup_date) return -1;

    const dateA = new Date(a.pickup_date).getTime();
    const dateB = new Date(b.pickup_date).getTime();

    return dateSort === "earliest"
      ? dateA - dateB
      : dateB - dateA;
  });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <a
            href="/admin"
            className="text-sm font-bold text-teal-600 hover:text-teal-700"
          >
            ← Back to Admin Panel
          </a>

          <h1 className="mt-4 text-3xl font-black text-[#062B55]">
            Manage Loads
          </h1>

          <p className="mt-2 text-slate-600">
            Add, edit, search and manage loads stored in the LOADZY database.
          </p>
        </div>

        {/* Add / Edit Form */}
        <form
          onSubmit={saveLoad}
          className="rounded-2xl bg-white p-6 shadow-lg"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#062B55]">
              {editingId !== null ? "Edit Load" : "Add New Load"}
            </h2>

            {editingId !== null && (
              <button
                type="button"
                onClick={cancelEdit}
                className="rounded-lg px-4 py-2 font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel Edit
              </button>
            )}
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Pickup */}
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Pickup Location
              </label>

              <input
                name="pickup"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Example: Chennai"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* Delivery */}
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Delivery Location
              </label>

              <input
                name="delivery"
                value={form.delivery}
                onChange={handleChange}
                placeholder="Example: Bangalore"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* Load Type */}
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Load Type
              </label>

              <input
                name="load_type"
                value={form.load_type}
                onChange={handleChange}
                placeholder="Example: Packers & Movers"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* Truck */}
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Truck Type
              </label>

              <input
                name="truck"
                value={form.truck}
                onChange={handleChange}
                placeholder="Example: 24FT Truck"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* Pickup Date */}
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Pickup Date
              </label>

              <input
                type="date"
                name="pickup_date"
                value={form.pickup_date}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Freight Price
              </label>

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Example: 15000"
                min="0"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>
{/* Driver */}
<div>
  <label className="mb-2 block font-bold text-slate-700">
    Driver
  </label>

  <select
    name="driver_id"
    value={form.driver_id}
    onChange={handleChange}
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
  >
    <option value="">No Driver Assigned</option>

    {drivers.map((driver) => (
      <option key={driver.id} value={driver.id}>
        {driver.name} - {driver.phone}
      </option>
    ))}
  </select>
</div>
            {/* Status */}
            <div>
              <label className="mb-2 block font-bold text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              >
                <option value="available">Available</option>
                <option value="booked">Booked</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Message */}
          {message && (
            <p className="mt-5 rounded-xl bg-slate-100 px-4 py-3 font-bold text-slate-700">
              {message}
            </p>
          )}

          {/* Save */}
          <button
            type="submit"
            disabled={saving}
            className="mt-6 rounded-xl bg-teal-500 px-7 py-3 font-black text-white shadow-lg hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving
              ? "Saving..."
              : editingId !== null
              ? "Update Load"
              : "➕ Add Load"}
          </button>
        </form>

        {/* Existing Loads */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#062B55]">
              Existing Loads
            </h2>

            <button
              type="button"
              onClick={fetchLoads}
              className="rounded-lg bg-slate-100 px-4 py-2 font-bold text-slate-700 hover:bg-slate-200"
            >
              🔄 Refresh
            </button>
          </div>

          {/* Search + Status + Date Sort */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">

            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔎 Search pickup, delivery, load type or truck..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            >
              <option value="all">All Statuses</option>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
              <option value="cancelled">Cancelled</option>
            </select>

            {/* Pickup Date Sort */}
            <select
              value={dateSort}
              onChange={(e) => setDateSort(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            >
              <option value="earliest">
                📅 Earliest Pickup First
              </option>

              <option value="latest">
                📅 Latest Pickup First
              </option>
            </select>
          </div>

          {/* Loads */}
          {loading ? (
            <p className="mt-6 text-slate-600">
              Loading loads...
            </p>
          ) : loads.length === 0 ? (
            <p className="mt-6 text-slate-600">
              No loads found.
            </p>
          ) : sortedLoads.length === 0 ? (
            <p className="mt-6 text-slate-600">
              No loads match your search or filter.
            </p>
          ) : (
            <div className="mt-6 space-y-4">

              {sortedLoads.map((load) => (
                <div
                  key={load.id}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row">

                    {/* Load Information */}
                    <div>
                      <h3 className="text-xl font-black text-[#062B55]">
                        {load.pickup} → {load.delivery}
                      </h3>

                      <div className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">

                        <p>
                          <strong>Load:</strong>{" "}
                          {load.load_type || "Not specified"}
                        </p>

                        <p>
                          <strong>Truck:</strong>{" "}
                          {load.truck || "Not specified"}
                        </p>

                        <p>
                          <strong>Date:</strong>{" "}
                          {load.pickup_date || "Not specified"}
                        </p>

                        <p>
                          <strong>Freight:</strong>{" "}
                          {load.price !== null
                            ? `₹${load.price.toLocaleString("en-IN")}`
                            : "Not specified"}
                        </p>

                        <p className="flex items-center gap-2">
                          <strong>Status:</strong>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              load.status === "available"
                                ? "bg-green-100 text-green-700"
                                : load.status === "booked"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {(load.status || "available").toUpperCase()}
                          </span>
                        </p>
                        {load.driver_id && (
  <p className="mt-2 text-sm text-slate-600">
    <strong>Driver:</strong>{" "}
    {drivers.find((driver) => String(driver.id) === String(load.driver_id))?.name || "Assigned Driver"}
  </p>
)}

                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 md:flex-col">

                      <button
                        type="button"
                        onClick={() => startEdit(load)}
                        className="rounded-xl bg-blue-600 px-5 py-3 font-black text-white hover:bg-blue-700"
                      >
                        ✏️ Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteLoad(load.id)}
                        className="rounded-xl bg-red-600 px-5 py-3 font-black text-white hover:bg-red-700"
                      >
                        🗑️ Delete
                      </button>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          )}

        </section>

      </div>
    </main>
  );
}