import { StatCard } from '@/components/dummies';

const dummy = [
  { label: 'Karoshi cases (JP 2024)', value: '231' },
  { label: 'Average weekly hrs (JP)', value: '43.7' },
  { label: 'Countries w/ right-to-disconnect laws', value: '19' },
  { label: '4-day-week trial success rate', value: '89%' },
];

export default function StatsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Stats Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dummy.map(s => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
