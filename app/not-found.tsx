import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm md:p-14">

        <div className="text-7xl font-black text-[#062B55] md:text-8xl">
          404
        </div>

        <div className="mt-4 text-4xl">
          🚚
        </div>

        <h1 className="mt-5 text-3xl font-black text-[#062B55] md:text-4xl">
          This route could not be found.
        </h1>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
          The page you are looking for may have moved or may no longer exist.
          Let LOADZY help you get back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-[#FFD21C] px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-[#FFE66D]"
          >
            Go to Homepage →
          </Link>

          <Link
            href="/load-search"
            className="rounded-xl bg-teal-500 px-7 py-4 font-black text-white shadow-lg transition hover:bg-teal-600"
          >
            Find a Load →
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-[#062B55] transition hover:bg-slate-50"
          >
            Contact LOADZY
          </Link>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-400">
          LOADZY · Move. Connect. Deliver.
        </div>

      </div>
    </main>
  );
}