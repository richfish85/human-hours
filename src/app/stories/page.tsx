import { StoryCard } from '@/components/dummies';

const stories = [
  {
    title: 'I collapsed at my desk—but my team learned too',
    by: 'Aya · Tokyo',
    excerpt:
      'I thought 80-hour weeks were a badge of honour. After the hospital stay, my manager changed stand-up times, and productivity actually climbed…',
  },
  {
    title: 'Switching to a 4-day rota saved our marriage',
    by: 'Liam · Melbourne',
    excerpt:
      'When Fridays became off-limits for email, we rediscovered weekends. Revenue dipped for one quarter, then bounced higher as churn fell…',
  },
];

export default function StoriesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Human Stories</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Real accounts of burnout—and recovery. Submit yours to help someone else.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {stories.map(s => (
          <StoryCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
