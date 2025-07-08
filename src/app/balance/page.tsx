import { ActionCard } from '@/components/dummies';

const actions = [
  {
    action: '👀 30-second eye break',
    why: 'Relaxes ciliary muscles, cuts screen fatigue.',
  },
  {
    action: '💬 Reply kindly to one nasty comment',
    why: 'Trains agency + flips negativity bias.',
  },
  {
    action: '🏃 100-step hallway walk',
    why: 'Micro-bursts help glucose regulation more than a single gym hour.',
  },
];

export default function BalancePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Micro-Actions</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Bite-size moves you can do today to tilt away from burnout.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map(a => (
          <ActionCard key={a.action} {...a} />
        ))}
      </div>
    </section>
  );
}
