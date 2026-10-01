"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

type Review = {
  id: string | number;
  customer_name: string;
  rating: number;
  review: string;
  created_at: string;
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, customer_name, rating, review, created_at")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setReviews(data);
      }

      setLoading(false);
    }

    loadReviews();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <div className="font-bold text-[#08c9bd]">
            CUSTOMER REVIEWS
          </div>

          <h1 className="mt-3 text-4xl font-black text-blue-950">
            What Our Customers Say
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Real experiences from customers who used LOADZY
            for their transport requirements.
          </p>
        </div>

        {loading ? (
          <div className="mt-12 text-center text-slate-500">
            Loading reviews...
          </div>
        ) : reviews.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-black text-blue-950">
                    {review.customer_name}
                  </h2>

                  <div className="text-yellow-400">
                    {"★".repeat(
                      Math.max(0, Math.min(5, review.rating))
                    )}
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  "{review.review}"
                </p>

                <div className="mt-5 text-sm font-semibold text-slate-400">
                  LOADZY Customer
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="text-5xl">⭐</div>

            <h2 className="mt-5 text-2xl font-black text-blue-950">
              No reviews yet
            </h2>

            <p className="mt-3 text-slate-600">
              Be the first customer to share your LOADZY experience.
            </p>
          </div>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/reviews/submit"
            className="rounded-xl bg-teal-500 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-teal-600"
          >
            ⭐ Share Your Experience
          </a>

          <a
            href="/"
            className="rounded-xl bg-yellow-400 px-7 py-3 font-bold text-blue-950 shadow-lg transition hover:bg-yellow-300"
          >
            ← Back to LOADZY
          </a>
        </div>

      </div>
    </main>
  );
}