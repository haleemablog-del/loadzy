"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function SubmitReviewPage() {
  const [bookingId, setBookingId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function submitReview(e: React.FormEvent) {
    e.preventDefault();

    if (!bookingId || !customerName || !review) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("reviews").insert({
      booking_id: Number(bookingId),
      customer_name: customerName,
      rating,
      review,
      status: "pending",
    });

    if (error) {
      console.error(error);
      setMessage("Unable to submit your review. Please try again.");
      setSaving(false);
      return;
    }

    setBookingId("");
    setCustomerName("");
    setRating(5);
    setReview("");
    setMessage("Thank you! Your review has been submitted for approval.");
    setSaving(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">

        <div className="text-center">
          <div className="font-bold text-[#08c9bd]">
            LOADZY REVIEWS
          </div>

          <h1 className="mt-3 text-4xl font-black text-blue-950">
            Share Your LOADZY Experience
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Tell us about your experience with LOADZY.
            Your review will appear after approval.
          </p>
        </div>

        <form
          onSubmit={submitReview}
          className="mt-10 rounded-3xl bg-white p-8 shadow-xl"
        >

          <div>
            <label className="mb-2 block font-bold text-blue-950">
              Booking ID *
            </label>

            <input
              type="number"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              placeholder="Example: 30"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-bold text-blue-950">
              Your Name *
            </label>

            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />
          </div>

          <div className="mt-6">
            <label className="mb-3 block font-bold text-blue-950">
              Your Rating *
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-4xl ${
                    star <= rating
                      ? "text-yellow-400"
                      : "text-slate-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <p className="mt-2 text-sm text-slate-500">
              {rating} out of 5 stars
            </p>
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-bold text-blue-950">
              Your Review *
            </label>

            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your LOADZY experience..."
              rows={6}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
            />
          </div>

          {message && (
            <div className="mt-6 rounded-xl bg-slate-50 p-4 font-semibold text-slate-700">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="mt-6 w-full rounded-xl bg-teal-500 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-teal-600 disabled:opacity-60"
          >
            {saving ? "Submitting..." : "Submit Review →"}
          </button>

        </form>

        <div className="mt-8 text-center">
          <a
            href="/reviews"
            className="font-bold text-blue-950 hover:text-teal-500"
          >
            ← Back to Reviews
          </a>
        </div>

      </div>
    </main>
  );
}