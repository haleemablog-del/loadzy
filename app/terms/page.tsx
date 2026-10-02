import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="font-black uppercase tracking-[0.2em] text-teal-600">
            LOADZY
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#062B55] md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-slate-500">
            Last updated: October 2026
          </p>

          <div className="mt-10 space-y-8 leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                1. About LOADZY
              </h2>

              <p className="mt-3">
                LOADZY provides a platform for transport enquiries, truck
                booking, load discovery and related logistics services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                2. Use of Our Services
              </h2>

              <p className="mt-3">
                Information provided through the LOADZY website should be
                accurate and complete. Customers, truck owners and drivers are
                responsible for the information they submit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                3. Bookings
              </h2>

              <p className="mt-3">
                A booking enquiry submitted through LOADZY does not
                automatically guarantee transport availability or final
                confirmation. LOADZY may contact the customer to confirm
                details and availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                4. Transport Information
              </h2>

              <p className="mt-3">
                Truck availability, freight prices, pickup dates and other
                transport details may depend on the specific route, load,
                vehicle and operational conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                5. Customer Responsibilities
              </h2>

              <p className="mt-3">
                Customers are responsible for providing correct pickup,
                delivery, contact and load information and for following
                applicable laws and transport requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                6. Driver and Truck Owner Information
              </h2>

              <p className="mt-3">
                Drivers and truck owners who register with LOADZY must provide
                accurate vehicle, contact and registration information.
                Submitted information may be reviewed before approval.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                7. Reviews
              </h2>

              <p className="mt-3">
                Users submitting reviews must provide genuine and appropriate
                feedback. LOADZY may review, approve, reject or remove
                submissions that do not meet its requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                8. Service Availability
              </h2>

              <p className="mt-3">
                LOADZY may update, change, suspend or discontinue website
                features, transport services or platform functionality when
                required for operational or technical reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                9. Changes to These Terms
              </h2>

              <p className="mt-3">
                These Terms & Conditions may be updated from time to time.
                Changes will be published on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                10. Contact LOADZY
              </h2>

              <p className="mt-3">
                For questions about these terms or LOADZY services, please
                contact us through the Contact page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block rounded-xl bg-teal-500 px-6 py-3 font-black text-white transition hover:bg-teal-600"
              >
                Contact LOADZY →
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}