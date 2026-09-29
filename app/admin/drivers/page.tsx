"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Driver = {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  location: string;
  experience: number | null;
  truck_type: string | null;
  vehicle_number: string | null;
  preferred_routes: string | null;
  availability: string | null;
  status: string | null;
};
type AvailableLoad = {
  id: number;
  pickup: string;
  delivery: string;
  load_type: string | null;
  truck: string | null;
  pickup_date: string | null;
  price: number | null;
  driver_id: number | null;
};

type DriverForm = {
  name: string;
  phone: string;
  location: string;
  experience: string;
  truck_type: string;
  vehicle_number: string;
  preferred_routes: string;
  availability: string;
  status: string;
};

const emptyDriverForm: DriverForm = {
  name: "",
  phone: "",
  location: "",
  experience: "",
  truck_type: "",
  vehicle_number: "",
  preferred_routes: "",
  availability: "",
  status: "pending",
};

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [availableLoads, setAvailableLoads] = useState<AvailableLoad[]>([]);
  const [assignedLoads, setAssignedLoads] = useState<AvailableLoad[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const [editingDriver, setEditingDriver] =
    useState<Driver | null>(null);

  const [editForm, setEditForm] =
    useState<DriverForm>(emptyDriverForm);

  const [savingEdit, setSavingEdit] = useState(false);

  async function loadDrivers() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("drivers")
      .select(
        "id, created_at, name, phone, location, experience, truck_type, vehicle_number, preferred_routes, availability, status"
      )
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Unable to load drivers.");
      return;
    }

    setDrivers(data || []);
  }
  async function loadAvailableLoads() {
  const { data, error } = await supabase
    .from("loads")
    .select(
      "id, pickup, delivery, load_type, truck, pickup_date, price, driver_id"
    )
    .eq("status", "available")
    .order("pickup_date", {
      ascending: true,
      nullsFirst: false,
    });

  if (error) {
    console.error(error);
    return;
  }

  setAvailableLoads(data || []);
  const { data: assignedData, error: assignedError } = await supabase
  .from("loads")
  .select("id, pickup, delivery, load_type, truck, pickup_date, price, driver_id")
  .not("driver_id", "is", null);

if (assignedError) {
  console.error("Assigned loads fetch error:", assignedError);
  return;
}

setAssignedLoads(assignedData || []);
}

  useEffect(() => {
  loadDrivers();
  loadAvailableLoads();
}, []);

  async function updateStatus(
    driverId: number,
    status: string
  ) {
    const { error } = await supabase
      .from("drivers")
      .update({ status })
      .eq("id", driverId);

    if (error) {
      console.error(error);
      setMessage("Unable to update driver status.");
      return;
    }

    setDrivers((current) =>
      current.map((driver) =>
        driver.id === driverId
          ? { ...driver, status }
          : driver
      )
    );

    setMessage("✅ Driver status updated.");
  }

  function callDriver(phone: string) {
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = `tel:${phone}`;
      return;
    }

    navigator.clipboard.writeText(phone);
    setMessage(
      `📋 Driver phone number copied: ${phone}`
    );
  }

  function whatsappDriver(phone: string) {
    const cleanPhone = phone.replace(/\D/g, "");

    const whatsappNumber =
      cleanPhone.length === 10
        ? `91${cleanPhone}`
        : cleanPhone;

    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank"
    );
  }

  function startEdit(driver: Driver) {
    setEditingDriver(driver);

    setEditForm({
      name: driver.name || "",
      phone: driver.phone || "",
      location: driver.location || "",
      experience:
        driver.experience !== null
          ? String(driver.experience)
          : "",
      truck_type: driver.truck_type || "",
      vehicle_number: driver.vehicle_number || "",
      preferred_routes:
        driver.preferred_routes || "",
      availability: driver.availability || "",
      status: driver.status || "pending",
    });

    setMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelEdit() {
    setEditingDriver(null);
    setEditForm(emptyDriverForm);
    setSavingEdit(false);
  }

  function handleEditChange(
    field: keyof DriverForm,
    value: string
  ) {
    setEditForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function saveDriverEdit() {
    if (!editingDriver) return;

    if (!editForm.name.trim()) {
      setMessage("Driver name is required.");
      return;
    }

    if (!editForm.phone.trim()) {
      setMessage("Driver phone number is required.");
      return;
    }

    setSavingEdit(true);
    setMessage("");

    const driverData = {
      name: editForm.name.trim(),
      phone: editForm.phone.trim(),
      location: editForm.location.trim(),
      experience: editForm.experience
        ? Number(editForm.experience)
        : null,
      truck_type:
        editForm.truck_type.trim() || null,
      vehicle_number:
        editForm.vehicle_number.trim() || null,
      preferred_routes:
        editForm.preferred_routes.trim() || null,
      availability:
        editForm.availability.trim() || null,
      status: editForm.status,
    };

    const { data, error } = await supabase
      .from("drivers")
      .update(driverData)
      .eq("id", editingDriver.id)
      .select()
      .single();

    setSavingEdit(false);

    if (error) {
      console.error(error);
      setMessage("Unable to update driver.");
      return;
    }

    setDrivers((current) =>
      current.map((driver) =>
        driver.id === editingDriver.id
          ? data
          : driver
      )
    );

    setMessage("✅ Driver updated successfully.");

    setEditingDriver(null);
    setEditForm(emptyDriverForm);
  }

  async function deleteDriver(driverId: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this driver?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("drivers")
      .delete()
      .eq("id", driverId);

    if (error) {
      console.error(error);
      setMessage("Unable to delete driver.");
      return;
    }

    setDrivers((current) =>
      current.filter(
        (driver) => driver.id !== driverId
      )
    );

    setMessage("✅ Driver deleted.");
  }

  const filteredDrivers = drivers
    .filter((driver) => {
      const searchText =
        search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        driver.name
          .toLowerCase()
          .includes(searchText) ||
        driver.phone
          .toLowerCase()
          .includes(searchText) ||
        driver.location
          .toLowerCase()
          .includes(searchText) ||
        (driver.truck_type || "")
          .toLowerCase()
          .includes(searchText) ||
        (driver.vehicle_number || "")
          .toLowerCase()
          .includes(searchText) ||
        (driver.preferred_routes || "")
          .toLowerCase()
          .includes(searchText);

      const matchesStatus =
        statusFilter === "all" ||
        driver.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const dateA =
        new Date(a.created_at).getTime();

      const dateB =
        new Date(b.created_at).getTime();

      return sortOrder === "latest"
        ? dateB - dateA
        : dateA - dateB;
    });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <a
              href="/admin"
              className="font-bold text-teal-600 hover:text-teal-700"
            >
              ← Back to Admin Panel
            </a>

            <h1 className="mt-5 text-4xl font-black text-[#062B55]">
              Driver Management
            </h1>

            <p className="mt-2 text-slate-600">
              View and manage LOADZY driver registrations.
            </p>
          </div>

          <button
            type="button"
            onClick={loadDrivers}
            className="rounded-xl bg-white px-5 py-3 font-bold text-[#062B55] shadow hover:bg-slate-50"
          >
            🔄 Refresh
          </button>
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="mb-6 rounded-xl bg-white px-5 py-4 font-bold text-[#062B55] shadow">
            {message}
          </div>
        )}

        {/* EDIT DRIVER */}
        {editingDriver && (
          <section className="mb-6 rounded-2xl bg-white p-6 shadow">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#062B55]">
                  Edit Driver
                </h2>

                <p className="mt-1 text-slate-500">
                  Update driver information below.
                </p>
              </div>

              <button
                type="button"
                onClick={cancelEdit}
                className="rounded-xl bg-slate-200 px-4 py-2 font-bold text-slate-700 hover:bg-slate-300"
              >
                ✕ Cancel
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Driver Name
                </label>

                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    handleEditChange(
                      "name",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Phone
                </label>

                <input
                  type="text"
                  value={editForm.phone}
                  onChange={(e) =>
                    handleEditChange(
                      "phone",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Location
                </label>

                <input
                  type="text"
                  value={editForm.location}
                  onChange={(e) =>
                    handleEditChange(
                      "location",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Experience
                </label>

                <input
                  type="number"
                  value={editForm.experience}
                  onChange={(e) =>
                    handleEditChange(
                      "experience",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Truck Type
                </label>

                <input
                  type="text"
                  value={editForm.truck_type}
                  onChange={(e) =>
                    handleEditChange(
                      "truck_type",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Vehicle Number
                </label>

                <input
                  type="text"
                  value={editForm.vehicle_number}
                  onChange={(e) =>
                    handleEditChange(
                      "vehicle_number",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Preferred Routes
                </label>

                <input
                  type="text"
                  value={editForm.preferred_routes}
                  onChange={(e) =>
                    handleEditChange(
                      "preferred_routes",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Availability
                </label>

                <input
                  type="text"
                  value={editForm.availability}
                  onChange={(e) =>
                    handleEditChange(
                      "availability",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-600">
                  Status
                </label>

                <select
                  value={editForm.status}
                  onChange={(e) =>
                    handleEditChange(
                      "status",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 font-bold outline-none focus:border-teal-500"
                >
                  <option value="pending">
                    Pending
                  </option>

                  <option value="approved">
                    Approved
                  </option>

                  <option value="rejected">
                    Rejected
                  </option>
                </select>
              </div>

            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={saveDriverEdit}
                disabled={savingEdit}
                className="rounded-xl bg-teal-500 px-6 py-3 font-black text-white hover:bg-teal-600 disabled:opacity-60"
              >
                {savingEdit
                  ? "Saving..."
                  : "💾 Save Changes"}
              </button>

              <button
                type="button"
                onClick={cancelEdit}
                className="rounded-xl bg-slate-200 px-6 py-3 font-bold text-slate-700 hover:bg-slate-300"
              >
                Cancel
              </button>
            </div>
          </section>
        )}

        {/* STATS */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-bold text-slate-500">
              Total Drivers
            </p>

            <p className="mt-2 text-3xl font-black text-[#062B55]">
              {drivers.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-bold text-slate-500">
              Pending
            </p>

            <p className="mt-2 text-3xl font-black text-orange-500">
              {
                drivers.filter(
                  (driver) =>
                    driver.status === "pending"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-bold text-slate-500">
              Approved
            </p>

            <p className="mt-2 text-3xl font-black text-green-600">
              {
                drivers.filter(
                  (driver) =>
                    driver.status === "approved"
                ).length
              }
            </p>
          </div>

        </div>

        {/* DRIVER LIST */}
        <section className="rounded-2xl bg-white p-6 shadow">

          <div className="mb-6">
            <h2 className="text-2xl font-black text-[#062B55]">
              Registered Drivers
            </h2>
          </div>

          {/* SEARCH / FILTER / SORT */}
          <div className="mb-6 grid gap-4 md:grid-cols-3">

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="🔎 Search driver, phone, vehicle, location..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            >
              <option value="all">
                All Statuses
              </option>

              <option value="pending">
                Pending
              </option>

              <option value="approved">
                Approved
              </option>

              <option value="rejected">
                Rejected
              </option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            >
              <option value="latest">
                📅 Latest Registration First
              </option>

              <option value="oldest">
                📅 Oldest Registration First
              </option>
            </select>

          </div>

          {/* CONTENT */}
          {loading ? (
            <p className="py-10 text-center font-bold text-slate-500">
              Loading drivers...
            </p>
          ) : filteredDrivers.length === 0 ? (
            <div className="rounded-xl bg-slate-50 px-6 py-10 text-center">
              <p className="text-lg font-bold text-slate-600">
                No drivers match your search or filter.
              </p>
            </div>
          ) : (
            <div className="space-y-5">

              {filteredDrivers.map((driver) => (

                <div
                  key={driver.id}
                  className="rounded-2xl border border-slate-200 p-6"
                >

                  <div className="flex flex-col justify-between gap-5 lg:flex-row">

                    {/* DRIVER INFORMATION */}
                    <div className="grid flex-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Driver
                        </p>

                        <p className="mt-1 text-lg font-black text-[#062B55]">
                          {driver.name}
                        </p>

                        <p className="text-slate-600">
                          📞 {driver.phone}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Location
                        </p>

                        <p className="mt-1 font-bold text-slate-700">
                          {driver.location ||
                            "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Experience
                        </p>

                        <p className="mt-1 font-bold text-slate-700">
                          {driver.experience
                            ? `${driver.experience} years`
                            : "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Truck Type
                        </p>

                        <p className="mt-1 font-bold text-slate-700">
                          {driver.truck_type ||
                            "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Vehicle Number
                        </p>

                        <p className="mt-1 font-bold text-slate-700">
                          {driver.vehicle_number ||
                            "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Preferred Routes
                        </p>

                        <p className="mt-1 font-bold text-slate-700">
                          {driver.preferred_routes ||
                            "Not specified"}
                        </p>
                      </div>

<div>
  <p className="text-xs font-bold uppercase text-slate-400">
    Assigned Loads
  </p>

  <p className="mt-1 font-bold text-slate-700">
    {assignedLoads.filter((load) => load.driver_id === driver.id).length}
  </p>
</div>
                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Availability
                        </p>

                        <p className="mt-1 font-bold text-slate-700">
                          {driver.availability ||
                            "Not specified"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase text-slate-400">
                          Registered
                        </p>

                        <p className="mt-1 font-bold text-slate-700">
                          {new Date(
                            driver.created_at
                          ).toLocaleDateString("en-IN")}
                        </p>
                      </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="flex min-w-[200px] flex-col gap-3">

                      <label className="text-sm font-bold text-slate-500">
                        Status
                      </label>

                      <select
                        value={
                          driver.status || "pending"
                        }
                        onChange={(e) =>
                          updateStatus(
                            driver.id,
                            e.target.value
                          )
                        }
                        className="rounded-xl border border-slate-300 px-4 py-3 font-bold text-[#062B55] outline-none focus:border-teal-500"
                      >
                        <option value="pending">
                          Pending
                        </option>

                        <option value="approved">
                          Approved
                        </option>

                        <option value="rejected">
                          Rejected
                        </option>
                      </select>

                      {/* CALL */}
                      <button
                        type="button"
                        onClick={() =>
                          callDriver(driver.phone)
                        }
                        className="rounded-xl bg-teal-500 px-4 py-3 text-center font-black text-white hover:bg-teal-600"
                      >
                        📞 Call Driver
                      </button>

                      {/* EDIT */}
                      <button
                        type="button"
                        onClick={() =>
                          startEdit(driver)
                        }
                        className="rounded-xl bg-[#062B55] px-4 py-3 text-center font-black text-white hover:bg-[#0A3D73]"
                      >
                        ✏️ Edit Driver
                      </button>

                      {/* WHATSAPP */}
                      <button
                        type="button"
                        onClick={() =>
                          whatsappDriver(
                            driver.phone
                          )
                        }
                        className="rounded-xl bg-green-500 px-4 py-3 text-center font-black text-white hover:bg-green-600"
                      >
                        💬 WhatsApp Driver
                      </button>

                      {/* DELETE */}
                      <button
                        type="button"
                        onClick={() =>
                          deleteDriver(driver.id)
                        }
                        className="rounded-xl bg-red-600 px-4 py-3 font-black text-white hover:bg-red-700"
                      >
                        🗑️ Delete Driver
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