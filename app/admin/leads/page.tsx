"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Lead = {
  id: number;
  created_at: string;
  customer_name: string | null;
  phone: string | null;
  pickup: string | null;
  delivery: string | null;
  load_type: string | null;
  truck_type: string | null;
  pickup_date: string | null;
  source: string | null;
  status: string | null;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");
  async function fetchLeads() {
    setLoading(true);

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Leads fetch error:", error);
      setLoading(false);
      return;
    }

    setLeads(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  async function updateStatus(id: number, status: string) {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchLeads();
  }

  async function deleteLead(id: number) {
    if (!window.confirm("Delete this lead?")) return;

    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchLeads();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-black text-[#062B55]">
                Customer Leads
              </h1>
              <p className="text-slate-600 mt-1">
                Manage leads generated through LOADZY.
              </p>
            </div>

            <button
              onClick={fetchLeads}
              className="rounded-xl bg-slate-100 px-4 py-2 font-bold text-slate-700 hover:bg-slate-200"
            >
              🔄 Refresh
            </button>
          </div>
<div className="mb-6">
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="🔎 Search customer, phone, pickup or delivery..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
  />
</div>
          {loading ? (
            <p className="text-slate-600">Loading leads...</p>
          ) : leads.length === 0 ? (
            <p className="text-slate-600">No leads found.</p>
          ) : (
            <div className="space-y-4">
              {leads.filter((lead) =>
  `${lead.customer_name || ""} ${lead.phone || ""} ${lead.pickup || ""} ${lead.delivery || ""}`
    .toLowerCase()
    .includes(search.toLowerCase())
).map((lead) => (
                <div
                  key={lead.id}
                  className="border border-slate-200 rounded-2xl p-5"
                >
                  <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black text-[#062B55]">
                        {lead.customer_name || "Unknown Customer"}
                      </h2>

                      <p className="text-sm text-slate-600 mt-1">
                        Lead #{lead.id}
                      </p>

                      <div className="mt-3 grid md:grid-cols-2 gap-2 text-sm">
                        <p><strong>Phone:</strong> {lead.phone || "-"}</p>
                        <p><strong>Route:</strong> {lead.pickup || "-"} → {lead.delivery || "-"}</p>
                        <p><strong>Load:</strong> {lead.load_type || "-"}</p>
                        <p><strong>Truck:</strong> {lead.truck_type || "-"}</p>
                        <p><strong>Pickup Date:</strong> {lead.pickup_date || "-"}</p>
                        <p><strong>Source:</strong> {lead.source || "-"}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <select
                        value={lead.status || "new"}
                        onChange={(e) =>
                          updateStatus(lead.id, e.target.value)
                        }
                        className="rounded-xl border border-slate-300 px-4 py-2 font-bold"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                        <option value="closed">Closed</option>
                      </select>

                      <a
                        href={`tel:${lead.phone || ""}`}
                        className="rounded-xl bg-teal-500 px-4 py-2 text-center font-bold text-white"
                      >
                        📞 Call
                      </a>
<a
  href={`https://wa.me/91${lead.phone || ""}`}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-green-600 px-4 py-2 text-center font-bold text-white"
>
  💬 WhatsApp
</a>
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="rounded-xl bg-red-600 px-4 py-2 font-bold text-white"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}