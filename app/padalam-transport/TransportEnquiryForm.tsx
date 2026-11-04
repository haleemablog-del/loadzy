"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

const services = ["Truck Transport", "Household Shifting", "Packers & Movers", "Full Load Transport", "Part Load Transport", "Industrial Transport", "Fruits & Vegetables", "Commercial Transport", "Other"];
const truckTypes = ["Tata Ace", "7FT Truck", "10FT Truck", "14FT Truck", "17FT Truck", "20FT Truck", "22FT Truck", "24FT Truck", "34FT Truck", "Multi-Axle Truck"];

export default function TransportEnquiryForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("Padalam, Tamil Nadu");
  const [delivery, setDelivery] = useState("");
  const [service, setService] = useState("");
  const [truck, setTruck] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!customerName.trim() || !phone || !pickup.trim() || !delivery.trim() || !service || !truck || !pickupDate) {
      setMessage("Please fill in all required fields.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setSaving(true);
    const whatsappWindow = window.open("about:blank", "_blank");
    try {
      const { error } = await supabase.from("leads").insert([{
        customer_name: customerName.trim(),
        phone,
        pickup: pickup.trim(),
        delivery: delivery.trim(),
        load_type: service,
        truck_type: truck,
        pickup_date: pickupDate,
        source: "padalam_transport_page",
        status: "new"
      }]);
      if (error) {
        console.error("LOADZY enquiry error:", error);
        if (whatsappWindow) whatsappWindow.close();
        setMessage("Unable to save your enquiry. Please try again.");
        return;
      }
      const whatsappMessage = `🚚 LOADZY Transport Enquiry

Customer Name: ${customerName.trim()}
Phone: ${phone}
Pickup: ${pickup.trim()}
Delivery: ${delivery.trim()}
Service: ${service}
Truck: ${truck}
Pickup Date: ${pickupDate}
Source: Padalam Transport Page`;
      const whatsappUrl = `https://wa.me/919019499448?text=${encodeURIComponent(whatsappMessage)}`;
      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
        setMessage("Enquiry saved successfully. WhatsApp is opening.");
      } else {
        setMessage("Your enquiry was saved. Please allow pop-ups to open WhatsApp.");
      }
    } catch (error) {
      console.error("LOADZY enquiry error:", error);
      if (whatsappWindow) whatsappWindow.close();
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  const field = "w-full rounded-lg border border-slate-300 bg-white px-3 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <p className="text-sm font-bold uppercase tracking-wider text-teal-700">LOADZY Transport Enquiry</p>
      <h2 className="mt-2 text-2xl font-extrabold text-slate-950">Request transport</h2>
      <form className="mt-6 space-y-4" onSubmit={submitEnquiry}>
        <label className="block text-sm font-semibold">Customer Name *<input className={field} required value={customerName} onChange={e => setCustomerName(e.target.value)} /></label>
        <label className="block text-sm font-semibold">Phone *<input className={field} type="tel" inputMode="numeric" maxLength={10} required value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} /></label>
        <label className="block text-sm font-semibold">Pickup Location *<input className={field} required value={pickup} onChange={e => setPickup(e.target.value)} /></label>
        <label className="block text-sm font-semibold">Delivery Location *<input className={field} required value={delivery} onChange={e => setDelivery(e.target.value)} /></label>
        <label className="block text-sm font-semibold">Load / Service Type *<select className={field} required value={service} onChange={e => setService(e.target.value)}><option value="">Select service</option>{services.map(x => <option key={x}>{x}</option>)}</select></label>
        <label className="block text-sm font-semibold">Truck Type *<select className={field} required value={truck} onChange={e => setTruck(e.target.value)}><option value="">Select truck</option>{truckTypes.map(x => <option key={x}>{x}</option>)}</select></label>
        <label className="block text-sm font-semibold">Pickup Date *<input className={field} type="date" required value={pickupDate} onChange={e => setPickupDate(e.target.value)} /></label>
        {message && <p role="status" className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700">{message}</p>}
        <button disabled={saving} className="w-full rounded-lg bg-yellow-400 px-5 py-3.5 font-extrabold text-slate-950 disabled:opacity-60" type="submit">{saving ? "Submitting..." : "Submit Transport Enquiry"}</button>
        <p className="text-xs leading-5 text-slate-500">Submitting saves your enquiry to LOADZY and opens WhatsApp after a successful save.</p>
      </form>
    </div>
  );
}
