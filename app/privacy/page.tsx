import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="font-black uppercase tracking-[0.2em] text-teal-600">
            LOADZY
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#062B55] md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-500">
            Last updated: October 2026
          </p>

          <div className="mt-10 space-y-8 text-slate-600 leading-8">
            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                1. Information We Collect
              </h2>

              <p className="mt-3">
                LOADZY may collect information that you provide when you use
                our website, request transport services, submit a booking,
                contact us, submit a review, or register as a truck owner or
                driver.
              </p>

              <p className="mt-3">
                This may include your name, phone number, pickup location,
                delivery location, load type, truck type, pickup date, booking
                details, driver or vehicle information, reviews, and enquiry
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                2. How We Use Your Information
              </h2>

              <p className="mt-3">
                We may use the information you provide to process transport
                enquiries, manage bookings, connect customers with suitable
                transport, communicate with you, manage driver registrations,
                provide shipment-related services, and improve LOADZY.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                3. Communication
              </h2>

              <p className="mt-3">
                We may contact you by phone, WhatsApp, SMS, or other available
                communication methods regarding your enquiry, booking,
                transport service, or support request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                4. Reviews and Public Information
              </h2>

              <p className="mt-3">
                Reviews submitted through LOADZY may be reviewed before
                publication. Approved reviews may be displayed publicly on the
                LOADZY website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                5. Data Security
              </h2>

              <p className="mt-3">
                LOADZY takes reasonable steps to protect information submitted
                through our services. However, no online system can guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                6. Third-Party Services
              </h2>

              <p className="mt-3">
                LOADZY may use third-party services and technology providers to
                support website functionality, communication, maps, data
                storage, analytics, or other operational requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                7. Your Choices
              </h2>

              <p className="mt-3">
                You may contact LOADZY regarding questions about information
                submitted through our website or requests relating to your
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                8. Changes to This Policy
              </h2>

              <p className="mt-3">
                LOADZY may update this Privacy Policy from time to time. Any
                changes will be published on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#062B55]">
                9. Contact LOADZY
              </h2>

              <p className="mt-3">
                For privacy-related questions, contact LOADZY using the
                information provided on our Contact page.
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