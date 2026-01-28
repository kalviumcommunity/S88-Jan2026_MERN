import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">RailPulse</h1>

      <Link
        href="/trains"
        className="rounded bg-black px-4 py-2 text-white"
      >
        Go to Trains
      </Link>
    </main>
  );
}
