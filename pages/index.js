import Head from 'next/head';
import Link from 'next/link';

const stats = [
  { label: 'Daily Listeners', value: '50K+' },
  { label: 'Live Broadcast', value: '24/7' },
  { label: 'On Air Since', value: '2009' },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>RecordFM 97.7</title>
        <meta name="description" content="RecordFM 97.7 brings you news, talk and music for Broadcast City." />
      </Head>

      <section className="space-y-6">
        <h1>Broadcast City’s local voice.</h1>
        <p>
          RecordFM 97.7 mixes local news, community stories and a music lineup that keeps you company from
          breakfast through late night. Tune in on air or stream from anywhere.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/shows" className="rounded-md bg-slate-900 px-4 py-2 text-white">Explore shows</Link>
          <Link href="/schedule" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700">See schedule</Link>
        </div>
        <dl className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-md border border-slate-200 p-4">
              <dt className="text-sm text-slate-500">{stat.label}</dt>
              <dd className="text-xl font-semibold text-slate-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12 space-y-4">
        <h2>What’s on right now</h2>
        <p className="text-sm text-slate-600">Morning Drive with Sarah Johnson · Weekdays 6:00 AM – 10:00 AM</p>
        <p className="text-sm text-slate-600">Listen on air, on the web stream, or through the RecordFM app.</p>
      </section>

      <section className="mt-12 space-y-3">
        <h2>News & features</h2>
        <ul className="space-y-2 text-sm">
          <li>• Global Tech Summit highlights AI breakthroughs</li>
          <li>• New policies aim to boost renewable energy sources</li>
          <li>• Exploring the hidden gems of Southeast Asia</li>
          <li>• Market analysis: stocks rally on positive outlook</li>
        </ul>
        <Link href="/news" className="text-sm text-slate-600 underline">Browse all stories</Link>
      </section>
    </>
  );
}
