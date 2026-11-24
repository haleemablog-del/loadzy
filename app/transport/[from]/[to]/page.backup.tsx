export default function TransportRoutePage({
  params,
}: {
  params: {
    from: string;
    to: string;
  };
}) {
  const from = params.from.replace(/-/g, " ");
  const to = params.to.replace(/-/g, " ");

  return (
    <main>
      <h1>
        {from} to {to} Transport Service
      </h1>

      <p>
        Book reliable truck transport from {from} to {to}.
      </p>
    </main>
  );
}