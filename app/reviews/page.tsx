"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ReviewsPage() {
  const [bookingId, setBookingId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [rating, setRating] = useState("5");
  const [reviewText, setReviewText] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function submitReview(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("reviews").insert({
      booking_id: Number(bookingId),
      customer_name: customerName.trim(),
      rating: Number(rating),
      review: reviewText.trim(),
    });

    if (error) {
      console.error("Review error:", error);
      setMessage("Unable to submit review.");
      setSaving(false);
      return;
    }

    setMessage("✅ Thank you! Your review has been submitted for approval.");

    setBookingId("");
    setCustomerName("");
    setRating("5");
    setReviewText("");
    setSaving(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-black text-[#062B55]">
            Rate Your LOADZY Experience
          </h1>

          <p className="mt-2 text-slate-600">
            Your feedback helps us improve our service.
          </p>

          <form onSubmit={submitReview} className="mt-8 space-y-5">
            <div>
              <label className="block font-bold mb-2">
                Booking ID
              </label>

              <input
                type="number"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                placeholder="Example: 34"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">
                Your Name
              </label>

              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">
                Rating
              </label>

              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              >
                <option value="5">★★★★★ 5 - Excellent</option>
                <option value="4">★★★★☆ 4 - Very Good</option>
                <option value="3">★★★☆☆ 3 - Good</option>
                <option value="2">★★☆☆☆ 2 - Fair</option>
                <option value="1">★☆☆☆☆ 1 - Poor</option>
              </select>
            </div>

            <div>
              <label className="block font-bold mb-2">
                Your Review
              </label>

              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Tell us about your LOADZY experience..."
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl bg-teal-500 px-5 py-3 font-bold text-white hover:bg-teal-600 disabled:opacity-50"
            >
              {saving ? "Submitting..." : "Submit Review"}
            </button>
          </form>

          {message && (
            <p className="mt-5 rounded-xl bg-slate-100 p-4 font-semibold text-slate-700">
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}