export default function TruckOwnerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-[#062B55]">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-black tracking-tight">
            LOAD<span className="text-teal-500">ZY</span>
          </a>

          <a
            href="/"
            className="font-bold text-[#062B55] hover:text-teal-600"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#062B55] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.2em] text-teal-400">
            TRUCK OWNERS & DRIVERS
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Find Available Loads
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Find suitable loads, reduce empty return trips, and keep your
            truck moving with LOADZY.
          </p>
        </div>
      </section>

      {/* Load Search */}
      <section id="load-search" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-teal-600">
              AVAILABLE LOADS
            </div>

            <h2 className="mt-2 text-3xl font-black text-[#062B55]">
              Search for your next load
            </h2>

            <p className="mt-2 text-slate-500">
              Enter your preferred route to find matching loads.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="font-bold">From</label>
                <input
                  type="text"
                  placeholder="Pickup location"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="font-bold">To</label>
                <input
                  type="text"
                  placeholder="Delivery location"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl bg-teal-500 px-6 py-4 text-lg font-black text-white shadow-lg hover:bg-teal-600"
            >
              🔎 Find Available Loads →
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.2em] text-teal-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#062B55]">
              Keep your truck moving
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-md ring-1 ring-slate-200">
              <div className="text-3xl">📍</div>
              <h3 className="mt-4 text-xl font-black">Choose your route</h3>
              <p className="mt-2 text-slate-500">
                Enter where your truck is available and where you want to go.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-md ring-1 ring-slate-200">
              <div className="text-3xl">📦</div>
              <h3 className="mt-4 text-xl font-black">Find a load</h3>
              <p className="mt-2 text-slate-500">
                Discover suitable loads for your truck and route.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-md ring-1 ring-slate-200">
              <div className="text-3xl">🚚</div>
              <h3 className="mt-4 text-xl font-black">Move the load</h3>
              <p className="mt-2 text-slate-500">
                Connect with the load owner and complete the trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-black">
          Have a truck? Keep it moving with LOADZY.
        </h2>

        <a
          href="/truck-owner#load-search"
          className="mt-6 inline-block rounded-xl bg-[#062B55] px-7 py-4 font-black shadow-lg hover:bg-blue-950"
        >
          Find More Loads →
        </a>
      </section>
    </main>
  );
}