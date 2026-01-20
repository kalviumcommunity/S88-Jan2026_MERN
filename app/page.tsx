import TrainStatusCard from './components/TrainStatusCard';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <TrainStatusCard
        trainNumber="12345"
        trainName="Western Local"
        source="Andheri"
        destination="Churchgate"
        delayMinutes={12}
        eta="10:42 AM"
        crowdLevel="HIGH"
      />
    </main>
  );
}
