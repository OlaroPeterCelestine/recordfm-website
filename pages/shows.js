import Head from 'next/head';

const shows = [
  {
    title: 'Morning Drive',
    host: 'Sarah Johnson',
    time: 'Weekdays · 6:00 AM – 10:00 AM',
    description: 'Local news, traffic and music to help you start the day.',
  },
  {
    title: 'Business Beat',
    host: 'Derrick Miles',
    time: 'Mondays · 9:00 AM',
    description: 'Interviews with entrepreneurs and a look at the markets.',
  },
  {
    title: 'Afternoon Talk',
    host: 'Mike Rodriguez',
    time: 'Weekdays · 2:00 PM – 6:00 PM',
    description: 'Community voices discussing politics, arts and culture.',
  },
  {
    title: 'Sports Hour',
    host: 'Locker Room Crew',
    time: 'Tuesdays · 5:00 PM',
    description: 'Recaps, analysis and fan calls from the sports world.',
  },
  {
    title: 'Weekend Preview',
    host: 'Tanya Brooks',
    time: 'Fridays · 3:00 PM',
    description: 'What’s on tap for the weekend across Broadcast City.',
  },
  {
    title: 'Club Night Live',
    host: 'DJ Eclipse',
    time: 'Fridays · 9:00 PM',
    description: 'Dance and electronic music mixed live from our studio.',
  },
];

export default function ShowsPage() {
  return (
    <>
      <Head>
        <title>Shows • RecordFM 97.7</title>
      </Head>

      <section className="space-y-6">
        <h1>Shows you can tune into</h1>
        <p>
          From talk to music and weekend specials, RecordFM has programming to keep pace with Broadcast City.
          Browse the highlights below and check the schedule for full listings.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {shows.map((show) => (
          <article key={show.title} className="rounded-md border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">{show.title}</h2>
            <p className="text-sm text-slate-500">{show.host}</p>
            <p className="text-sm text-slate-500">{show.time}</p>
            <p className="text-sm text-slate-600 mt-3">{show.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
