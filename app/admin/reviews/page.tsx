"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Review = {
  id: number;
  created_at: string;
  booking_id: number;
  customer_name: string;
  rating: number;
  review: string;
  status: string;
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function fetchReviews() {
    setLoading(true);

    const { data, error } = await supabase
      .from("reviews")
      .select(
        "id, created_at, booking_id, customer_name, rating, review, status"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setMessage("Unable to load reviews.");
      setLoading(false);
      return;
    }

    setReviews(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  async function updateStatus(id: number, status: string) {
    setMessage("");

    const { error } = await supabase
      .from("reviews")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
      setMessage("Unable to update review.");
      return;
    }

    setMessage(
      status === "approved"
        ? "Review approved successfully."
        : "Review rejected successfully."
    );

    fetchReviews();
  }

  async function deleteReview(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      setMessage("Unable to delete review.");
      return;
    }

    setMessage("Review deleted successfully.");
    fetchReviews();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <a
          href="/admin"
          className="mb-6 inline-block font-semibold text-teal-600 hover:text-teal-700"
        >
          ← Back to Admin Panel
        </a>

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Review Management
            </h1>
            <p className="mt-2 text-slate-600">
              Review and manage customer feedback.
            </p>
          </div>

          <button
            onClick={fetchReviews}
            className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-800 shadow hover:bg-slate-100"
          >
            🔄 Refresh
          </button>
        </div>

        {message && (
          <div className="mb-6 rounded-xl bg-white px-5 py-4 font-semibold text-slate-700 shadow">
            {message}
          </div>
        )}

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-semibold text-slate-500">
              Total Reviews
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {reviews.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-semibold text-slate-500">
              Pending Reviews
            </p>
            <p className="mt-2 text-3xl font-bold text-orange-500">
              {reviews.filter((r) => r.status === "pending").length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-semibold text-slate-500">
              Approved Reviews
            </p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {reviews.filter((r) => r.status === "approved").length}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {loading ? (
            <div className="rounded-2xl bg-white p-8 text-center shadow">
              Loading reviews...
            </div>
          ) : reviews.length === 0 ? (
            <div className="rounded-2xl bg-white p-8 text-center shadow">
              No reviews found.
            </div>
          ) : (
            reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-bold text-slate-900">
                        {review.customer_name}
                      </h2>

                      <span className="rounded-full bg-yellow-100 px-3 py-1 font-semibold text-yellow-700">
                        {"⭐".repeat(review.rating)}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-bold ${
                          review.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : review.status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {review.status.toUpperCase()}
                      </span>
                    </div>

                    <p className="mt-4 text-lg text-slate-700">
                      “{review.review}”
                    </p>

                    <div className="mt-4 text-sm text-slate-500">
                      Booking ID: #{review.booking_id}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      Submitted:{" "}
                      {new Date(review.created_at).toLocaleString()}
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 lg:w-48">
                    {review.status !== "approved" && (
                      <button
                        onClick={() => updateStatus(review.id, "approved")}
                        className="rounded-xl bg-green-600 px-4 py-3 font-bold text-white hover:bg-green-700"
                      >
                        ✅ Approve
                      </button>
                    )}

                    {review.status !== "rejected" && (
                      <button
                        onClick={() => updateStatus(review.id, "rejected")}
                        className="rounded-xl bg-orange-500 px-4 py-3 font-bold text-white hover:bg-orange-600"
                      >
                        ❌ Reject
                      </button>
                    )}

                    <button
                      onClick={() => deleteReview(review.id)}
                      className="rounded-xl bg-red-600 px-4 py-3 font-bold text-white hover:bg-red-700"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}