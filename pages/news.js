import Head from 'next/head';

const stories = [
  {
    title: 'Global Tech Summit highlights AI breakthroughs',
    summary: 'Keynote speakers outline the biggest opportunities and risks facing the industry.',
  },
  {
    title: 'City council approves riverfront renovation plan',
    summary: 'A multi-year project will add green space, bike paths, and new public transit stops.',
  },
  {
    title: 'Local students win national robotics competition',
    summary: 'Team Broadcast City High returns with the top prize after a weekend of challenges.',
  },
  {
    title: 'Small businesses reopen with community support',
    summary: 'Neighborhood groups rallied donations and volunteer hours to keep doors open.',
  },
];

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News • RecordFM 97.7</title>
      </Head>

      <section className="space-y-6">
        <h1>Latest headlines</h1>
        <p>
          RecordFM reporters cover Broadcast City and the wider region with daily news bulletins and in-depth
          conversations. Catch up on the stories we are following today.
        </p>
      </section>

      <section className="mt-10 space-y-6">
        {stories.map((story) => (
          <article key={story.title} className="rounded-md border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">{story.title}</h2>
            <p className="text-sm text-slate-600 mt-2">{story.summary}</p>
          </article>
        ))}
      </section>
    </>
  );
}
