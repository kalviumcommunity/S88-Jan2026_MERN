import Link from 'next/link';

export default function TrainsPage() {
  const trains = ['123', '456', '789'];

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-4">Trains</h1>

      <ul className="space-y-2">
        {trains.map((id) => (
          <li key={id}>
            <Link
              href={`/trains/${id}`}
              className="text-blue-600 underline"
            >
              Train {id}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
