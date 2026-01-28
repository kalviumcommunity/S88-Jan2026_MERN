'use client';

import { useParams } from 'next/navigation';

export default function TrainPage() {
  const params = useParams();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">
        Train ID: {params.id}
      </h1>
    </main>
  );
}
