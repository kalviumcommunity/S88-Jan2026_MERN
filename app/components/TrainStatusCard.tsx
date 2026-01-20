'use client';

type CrowdLevel = 'LOW' | 'MEDIUM' | 'HIGH';

interface TrainStatusCardProps {
  trainNumber: string;
  trainName: string;
  source: string;
  destination: string;
  delayMinutes: number;
  eta: string;
  crowdLevel: CrowdLevel;
}

export default function TrainStatusCard({
  trainNumber,
  trainName,
  source,
  destination,
  delayMinutes,
  eta,
  crowdLevel,
}: TrainStatusCardProps) {
  const isDelayed = delayMinutes > 5;

  const crowdColor = {
    LOW: 'text-green-600',
    MEDIUM: 'text-yellow-600',
    HIGH: 'text-red-600',
  };

  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {trainName} ({trainNumber})
        </h2>
        <span
          className={`text-sm font-medium ${
            isDelayed ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {isDelayed ? `Delayed by ${delayMinutes} min` : 'On Time'}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        {source} → {destination}
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">ETA</span>
          <span className="font-medium">{eta}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Crowd Level</span>
          <span className={`font-medium ${crowdColor[crowdLevel]}`}>
            {crowdLevel}
          </span>
        </div>
      </div>

      <button className="mt-5 w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
        View Alternatives
      </button>
    </div>
  );
}
