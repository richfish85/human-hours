import { NewsCard } from '@/components/dummies';

const news = [
  {
    title: 'Japan expands karoshi criteria to include tech overtime',
    source: 'Nikkei Asia',
    date: '2025-06-20',
  },
  {
    title: 'Australia passes national right-to-disconnect bill',
    source: 'ABC News',
    date: '2025-05-15',
  },
  {
    title: 'Four-day week pilot boosts revenue for SMEs',
    source: 'Guardian',
    date: '2025-04-02',
  },
];

export default function NewsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Latest News</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        {news.map(n => (
          <NewsCard key={n.title} {...n} />
        ))}
      </div>
    </section>
  );
}
