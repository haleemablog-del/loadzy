type PageProps = {
  params: Promise<{
    from: string;
    to: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { from, to } = await params;

  const fromName = from.replace(/-/g, " ");
  const toName = to.replace(/-/g, " ");

  const title = `${fromName} to ${toName} Transport Service | LOADZY`;

  const description = `Book reliable truck transport from ${fromName} to ${toName} with LOADZY. Get transport assistance for full load, part load, commercial goods and more.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/transport/${from}/${to}`,
    },
  };
}

export default async function TransportRoutePage({
  params,
}: PageProps) {
  const { from, to } = await params;

  const fromName = from.replace(/-/g, " ");
  const toName = to.replace(/-/g, " ");

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">

      <section>
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
          LOADZY TRANSPORT SERVICE
        </p>

        <h1 className="mt-3 text-4xl font-bold capitalize text-slate-900">
          {fromName} to {toName} Transport Service
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Book reliable truck transport from {fromName} to {toName} with
          LOADZY. Get transport assistance for full load, part load,
          commercial goods and other transportation requirements.
        </p>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-bold">
          Need transport from {fromName} to {toName}?
        </h2>

        <p className="mt-3 text-slate-300">
          Submit your transport requirement and our team can help you
          with truck availability and freight requirements.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block rounded-xl bg-teal-500 px-6 py-3 font-bold text-white hover:bg-teal-600"
        >
          Get Transport Assistance →
        </a>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">
          Transport from {fromName} to {toName}
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          LOADZY helps businesses, traders, manufacturers, farmers and
          other customers arrange commercial transportation between{" "}
          {fromName} and {toName}.
        </p>
      </section>

    </main>
  );
}