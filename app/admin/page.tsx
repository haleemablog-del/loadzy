"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminPage() {
  const [availableLoads, setAvailableLoads] = useState(0);
  const [newBookings, setNewBookings] = useState(0);
  const [confirmedBookings, setConfirmedBookings] = useState(0);
  const [completedBookings, setCompletedBookings] = useState(0);
  const [loadRequests, setLoadRequests] = useState(0);
  const [totalLoads, setTotalLoads] = useState(0);
const [bookedLoads, setBookedLoads] = useState(0);
const [cancelledLoads, setCancelledLoads] = useState(0);
const [totalDrivers, setTotalDrivers] = useState(0);
const [pendingDrivers, setPendingDrivers] = useState(0);
const [approvedDrivers, setApprovedDrivers] = useState(0);
const [rejectedDrivers, setRejectedDrivers] = useState(0);

  const [totalLeads, setTotalLeads] = useState(0);
const [newLeads, setNewLeads] = useState(0);
const [contactedLeads, setContactedLeads] = useState(0);
const [convertedLeads, setConvertedLeads] = useState(0);
const [closedLeads, setClosedLeads] = useState(0);

  const [loading, setLoading] = useState(true);
  const [activityLoading, setActivityLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function refreshDashboard() {
    setActivityLoading(true);
    setMessage("");

    try {
      const [
  availableLoadsResult,
  totalLoadsResult,
bookedLoadsResult,
cancelledLoadsResult,

  newBookingsResult,
  confirmedBookingsResult,
  completedBookingsResult,
  loadRequestsResult,
  totalLeadsResult,
  newLeadsResult,
  contactedLeadsResult,
  convertedLeadsResult,
  closedLeadsResult,
] = await Promise.all([
        supabase
          .from("loads")
          .select("id", { count: "exact", head: true })
          .eq("status", "available"),
          supabase
  .from("loads")
  .select("id", { count: "exact", head: true }),

supabase
  .from("loads")
  .select("id", { count: "exact", head: true })
  .eq("status", "booked"),

supabase
  .from("loads")
  .select("id", { count: "exact", head: true })
  .eq("status", "cancelled"),
  supabase
  .from("drivers")
  .select("id", { count: "exact", head: true }),

supabase
  .from("drivers")
  .select("id", { count: "exact", head: true })
  .eq("status", "pending"),

supabase
  .from("drivers")
  .select("id", { count: "exact", head: true })
  .eq("status", "approved"),

supabase
  .from("drivers")
  .select("id", { count: "exact", head: true })
  .eq("status", "rejected"),


        supabase
          .from("bookings")
          .select("id", { count: "exact", head: true })
          .eq("status", "new"),

        supabase
          .from("bookings")
          .select("id", { count: "exact", head: true })
          .eq("status", "confirmed"),

        supabase
          .from("bookings")
          .select("id", { count: "exact", head: true })
          .eq("status", "completed"),

        supabase
          .from("load_requests")
          .select("id", { count: "exact", head: true }),
          supabase
  .from("leads")
  .select("id", { count: "exact", head: true }),

supabase
  .from("leads")
  .select("id", { count: "exact", head: true })
  .eq("status", "new"),

supabase
  .from("leads")
  .select("id", { count: "exact", head: true })
  .eq("status", "contacted"),

supabase
  .from("leads")
  .select("id", { count: "exact", head: true })
  .eq("status", "converted"),

supabase
  .from("leads")
  .select("id", { count: "exact", head: true })
  .eq("status", "closed"),
      ]);

      if (availableLoadsResult.error) {
        throw availableLoadsResult.error;
      }

      if (newBookingsResult.error) {
        throw newBookingsResult.error;
      }

      if (confirmedBookingsResult.error) {
        throw confirmedBookingsResult.error;
      }

      if (completedBookingsResult.error) {
        throw completedBookingsResult.error;
      }

      if (loadRequestsResult.error) {
        throw loadRequestsResult.error;
      }

      setAvailableLoads(availableLoadsResult.count ?? 0);
      setNewBookings(newBookingsResult.count ?? 0);
      setConfirmedBookings(confirmedBookingsResult.count ?? 0);
      setCompletedBookings(completedBookingsResult.count ?? 0);
      setLoadRequests(loadRequestsResult.count ?? 0);
      setTotalLoads(totalLoadsResult.count ?? 0);
setBookedLoads(bookedLoadsResult.count ?? 0);
setCancelledLoads(cancelledLoadsResult.count ?? 0);
      setTotalLeads(totalLeadsResult.count ?? 0);
setNewLeads(newLeadsResult.count ?? 0);
setContactedLeads(contactedLeadsResult.count ?? 0);
setConvertedLeads(convertedLeadsResult.count ?? 0);
setClosedLeads(closedLeadsResult.count ?? 0);
    } catch (error) {
      console.error(error);
      setMessage("Unable to refresh dashboard.");
    } finally {
      setLoading(false);
      setActivityLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }

  useEffect(() => {
    refreshDashboard();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-teal-600">
              LOADZY ADMIN
            </p>

            <h1 className="text-4xl font-extrabold text-[#062B55]">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-slate-600">
              Manage loads, customer bookings and drivers from one place.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={refreshDashboard}
              disabled={activityLoading}
              className="rounded-xl bg-white px-5 py-3 font-bold text-[#062B55] shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
            >
              {activityLoading ? "Refreshing..." : "🔄 Refresh Stats"}
            </button>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-[#062B55] px-5 py-3 font-bold text-white transition hover:bg-[#041f3d]"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Error message */}
        {message && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 font-semibold text-red-700">
            {message}
          </div>
        )}

        {/* Statistics */}
        <section className="mb-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Available Loads
            </p>

            <p className="mt-2 text-4xl font-extrabold text-[#062B55]">
              {loading ? "..." : availableLoads}
            </p>

            <p className="mt-2 text-sm text-teal-600">
              Loads ready for booking
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              New Bookings
            </p>

            <p className="mt-2 text-4xl font-extrabold text-orange-500">
              {loading ? "..." : newBookings}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Waiting for confirmation
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Confirmed Bookings
            </p>

            <p className="mt-2 text-4xl font-extrabold text-blue-600">
              {loading ? "..." : confirmedBookings}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Active confirmed bookings
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Completed
            </p>

            <p className="mt-2 text-4xl font-extrabold text-green-600">
              {loading ? "..." : completedBookings}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Completed bookings
            </p>
          </div>
        </section>
        {/* Lead Statistics */}
<section className="mb-8">
  <h2 className="mb-4 text-2xl font-black text-[#062B55]">
    Lead Statistics
  </h2>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

    <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Total Leads
      </p>
      <p className="mt-2 text-4xl font-black text-teal-600">
        {loading ? "..." : totalLeads}
      </p>
    </div>

    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        New Leads
      </p>
      <p className="mt-2 text-4xl font-black text-orange-500">
        {loading ? "..." : newLeads}
      </p>
    </div>

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Contacted
      </p>
      <p className="mt-2 text-4xl font-black text-blue-600">
        {loading ? "..." : contactedLeads}
      </p>
    </div>

    <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Converted
      </p>
      <p className="mt-2 text-4xl font-black text-green-600">
        {loading ? "..." : convertedLeads}
      </p>
    </div>

    <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Closed
      </p>
      <p className="mt-2 text-4xl font-black text-slate-600">
        {loading ? "..." : closedLeads}
      </p>
    </div>

  </div>
</section>
{/* Load Statistics */}
<section className="mb-8">
  <h2 className="mb-4 text-2xl font-black text-[#062B55]">
    Load Statistics
  </h2>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Total Loads
      </p>
      <p className="mt-2 text-4xl font-black text-blue-600">
        {loading ? "..." : totalLoads}
      </p>
    </div>

    <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Available
      </p>
      <p className="mt-2 text-4xl font-black text-teal-600">
        {loading ? "..." : availableLoads}
      </p>
    </div>

    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Booked
      </p>
      <p className="mt-2 text-4xl font-black text-orange-500">
        {loading ? "..." : bookedLoads}
      </p>
    </div>

    <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Cancelled
      </p>
      <p className="mt-2 text-4xl font-black text-slate-600">
        {loading ? "..." : cancelledLoads}
      </p>
    </div>

  </div>
</section>
{/* Driver Statistics */}
<section className="mb-8">
  <h2 className="mb-4 text-2xl font-black text-[#062B55]">
    Driver Statistics
  </h2>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Total Drivers
      </p>
      <p className="mt-2 text-4xl font-black text-blue-600">
        {loading ? "..." : totalDrivers}
      </p>
    </div>

    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Pending
      </p>
      <p className="mt-2 text-4xl font-black text-orange-500">
        {loading ? "..." : pendingDrivers}
      </p>
    </div>

    <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Approved
      </p>
      <p className="mt-2 text-4xl font-black text-green-600">
        {loading ? "..." : approvedDrivers}
      </p>
    </div>

    <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Rejected
      </p>
      <p className="mt-2 text-4xl font-black text-red-600">
        {loading ? "..." : rejectedDrivers}
      </p>
    </div>
  </div>
</section>
{/* Booking Statistics */}
<section className="mb-8">
  <h2 className="mb-4 text-2xl font-black text-[#062B55]">
    Booking Statistics
  </h2>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        New Bookings
      </p>
      <p className="mt-2 text-4xl font-black text-orange-500">
        {loading ? "..." : newBookings}
      </p>
    </div>

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Confirmed Bookings
      </p>
      <p className="mt-2 text-4xl font-black text-blue-600">
        {loading ? "..." : confirmedBookings}
      </p>
    </div>

    <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Completed Bookings
      </p>
      <p className="mt-2 text-4xl font-black text-green-600">
        {loading ? "..." : completedBookings}
      </p>
    </div>
  </div>
</section>
{/* Conversion Statistics */}
<section className="mb-8">
  <h2 className="mb-4 text-2xl font-black text-[#062B55]">
    Conversion Statistics
  </h2>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Total Leads
      </p>
      <p className="mt-2 text-4xl font-black text-teal-600">
        {loading ? "..." : totalLeads}
      </p>
    </div>

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Contacted Leads
      </p>
      <p className="mt-2 text-4xl font-black text-blue-600">
        {loading ? "..." : contactedLeads}
      </p>
    </div>

    <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        Converted Leads
      </p>
      <p className="mt-2 text-4xl font-black text-green-600">
        {loading ? "..." : convertedLeads}
      </p>
    </div>
  </div>
</section>

        {/* Management */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-[#062B55]">
              Management
            </h2>

            <p className="mt-1 text-slate-600">
              Open a section to manage your LOADZY operations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {/* Loads */}
            <Link
              href="/admin/loads"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-teal-400 hover:bg-teal-50"
            >
              <div className="text-4xl">📦</div>

              <h3 className="mt-4 text-xl font-extrabold text-[#062B55]">
                Manage Loads
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Add, edit, search, filter and delete available loads.
              </p>

              <p className="mt-4 font-bold text-teal-600">
                Open Loads →
              </p>
            </Link>

            {/* Bookings */}
            <Link
              href="/admin/bookings"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-400 hover:bg-blue-50"
            >
              <div className="text-4xl">📋</div>

              <h3 className="mt-4 text-xl font-extrabold text-[#062B55]">
                Customer Bookings
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                View bookings, update status and assign loads.
              </p>

              <p className="mt-4 font-bold text-blue-600">
                Open Bookings →
              </p>
            </Link>
            {/* Shipment & Delivery History */}
<Link
  href="/admin/delivery-history"
  className="group rounded-2xl border border-green-200 bg-green-50 p-6 transition hover:border-green-400 hover:bg-green-100"
>
  <div className="text-4xl">🚚</div>

  <h3 className="mt-4 text-xl font-extrabold text-[#062B55]">
    Shipment & Delivery History
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Track booking progress, transit times and completed deliveries.
  </p>

  <p className="mt-4 font-bold text-green-600">
    Open Delivery History →
  </p>
</Link>

            {/* Drivers */}
            <Link
              href="/admin/drivers"
              className="group rounded-2xl border border-orange-200 bg-orange-50 p-6 transition hover:border-orange-400 hover:bg-orange-100"
            >
              <div className="text-4xl">🚚</div>

              <h3 className="mt-4 text-xl font-extrabold text-[#062B55]">
                Manage Drivers
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Review and manage driver registrations.
              </p>

              <p className="mt-4 font-bold text-orange-600">
                Open Drivers →
              </p>
            </Link>
            <Link
  href="/admin/leads"
  className="group rounded-2xl border border-teal-200 bg-teal-50 p-5 transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-md"
>
  <div className="text-3xl">🎯</div>

  <h3 className="mt-3 text-lg font-extrabold text-[#062B55]">
    Customer Leads
  </h3>

  <p className="mt-1 text-sm text-slate-600">
    View and manage customer enquiries.
  </p>

  <p className="mt-3 font-bold text-teal-600">
    Open Leads →
  </p>
</Link>
{/* Reviews */}
<Link
  href="/admin/reviews"
  className="group rounded-2xl border border-yellow-200 bg-yellow-50 p-6 transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-100"
>
  <div className="text-4xl">⭐</div>

  <h3 className="mt-4 text-xl font-extrabold text-[#062B55]">
    Customer Reviews
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Review, approve and manage customer feedback.
  </p>

  <p className="mt-4 font-bold text-yellow-600">
    Open Reviews →
  </p>
</Link>

            {/* Orders */}
            <Link
              href="/admin/orders"
              className="group rounded-2xl border border-teal-200 bg-teal-50 p-6 transition hover:border-teal-400 hover:bg-teal-100"
            >
              <div className="text-4xl">📦</div>

              <h3 className="mt-4 text-xl font-extrabold text-[#062B55]">
                Manage Orders
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Manage confirmed and completed LOADZY orders.
              </p>

              <p className="mt-4 font-bold text-teal-600">
                Open Orders →
              </p>
            </Link>

            {/* Load Requests */}
            <Link
              href="/admin/load-requests"
              className="group rounded-2xl border border-purple-200 bg-purple-50 p-6 transition hover:border-purple-400 hover:bg-purple-100"
            >
              <div className="text-4xl">📨</div>

              <h3 className="mt-4 text-xl font-extrabold text-[#062B55]">
                Load Requests
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                View truck-owner requests for available loads.
              </p>

              <p className="mt-4 font-bold text-purple-600">
                Open Requests →
              </p>
            </Link>
          </div>
        </section>

        {/* Quick information */}
        <section className="mt-8 rounded-2xl bg-[#062B55] p-6 text-white shadow-sm">
          <h2 className="text-xl font-extrabold">
            LOADZY Admin
          </h2>

          <p className="mt-2 text-slate-200">
            Use Bookings to assign an available load to a customer booking.
            Assigned loads can then appear in Orders for ongoing order
            management.
          </p>
        </section>
      </div>
    </main>
  );
}