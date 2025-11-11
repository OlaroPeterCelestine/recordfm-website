import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';

const featuredStory = {
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&h=700&auto=format&fit=crop',
  tag: 'Featured Story',
  badge: 'Politics',
  source: 'News Direct',
  date: 'Nov 15, 2021',
  title: 'Putin is "not going to engage" with Biden\'s State of the Union comments, expert says',
  description:
    'November 15, 2021 / 3BL Media / -- Ceres CEO & President Mindy Lubber issued the following statement at the conclusion of the in Glasgow, Scotland.',
};

const sidebarHighlights = [
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=240&h=150&auto=format&fit=crop',
    title: 'Global Tech Summit Highlights AI Breakthroughs',
    meta: 'Nov 15, 2021 · 5 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=240&h=150&auto=format&fit=crop',
    title: 'New Policies Aim to Boost Renewable Energy Sources',
    meta: 'Nov 15, 2021 · 8 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=240&h=150&auto=format&fit=crop',
    title: 'Exploring the Hidden Gems of Southeast Asia',
    meta: 'Nov 14, 2021 · 12 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=240&h=150&auto=format&fit=crop',
    title: 'Market Analysis: Stocks Rally on Positive Outlook',
    meta: 'Nov 14, 2021 · 7 min read',
  },
];

const categories = [
  {
    icon: 'fa-newspaper',
    label: 'Local News',
    description: 'Community updates and local developments',
  },
  {
    icon: 'fa-chart-line',
    label: 'Business',
    description: 'Economic news and business updates',
  },
  {
    icon: 'fa-futbol',
    label: 'Sports',
    description: 'Local and national sports coverage',
  },
  {
    icon: 'fa-cloud-sun',
    label: 'Weather',
    description: 'Weather updates and forecasts',
  },
];

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News • RecordFM 97.7</title>
        <meta name="description" content="The latest news, stories, and updates from RecordFM 97.7." />
      </Head>

      <section className="hero-aurora rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-white/5 overflow-hidden mb-12 lg:mb-16">
        <span className="floating-shape hidden md:block w-32 h-32 -top-10 -left-6" />
        <span className="floating-shape hidden md:block w-24 h-24 top-16 -right-4" />
        <div className="relative z-10 px-6 sm:px-12 py-12 lg:py-16 text-center">
          <div className="section-pill mx-auto mb-6">
            <span className="text-red-400 text-lg">•</span>
            Daily Briefing
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6">Latest Headlines</h1>
          <p className="text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto">
            Stay informed with breaking news, local updates, and deep dives curated by the RecordFM newsroom.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <article className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[520px] professional-shadow hover-lift">
          <img src={featuredStory.image} alt={featuredStory.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-sm">
            {featuredStory.tag}
          </div>
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
            <div className="flex items-center gap-3 text-xs mb-3">
              <span className="bg-zinc-800 px-2 py-0.5 rounded-sm font-semibold">{featuredStory.badge}</span>
              <span className="font-medium text-zinc-300">{featuredStory.source}</span>
              <span className="font-medium text-zinc-300">{featuredStory.date}</span>
            </div>
            <h2 className="text-3xl font-bold mb-3 leading-tight">{featuredStory.title}</h2>
            <p className="text-sm text-zinc-300 hidden md:block w-3/4">{featuredStory.description}</p>
          </div>
        </article>

        <aside className="lg:col-span-1 flex flex-col mt-8 lg:mt-0 h-[520px]">
          <div className="flex-grow flex flex-col justify-between">
            {sidebarHighlights.map((story, idx) => (
              <article
                key={story.title}
                className={clsx('flex items-center gap-4', idx !== 0 && 'pt-4 border-t border-zinc-800')}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-28 h-20 object-cover rounded-sm flex-shrink-0"
                />
                <div>
                  <p className="text-xs text-zinc-400 mb-1">{story.meta}</p>
                  <h3 className="font-bold leading-tight text-sm">{story.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">News Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="group hover-lift">
              <div className="bg-zinc-900 rounded-2xl p-6 text-center professional-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
                  <span className="text-2xl">•</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.label}</h3>
                <p className="text-zinc-400 text-sm">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">In Case You Missed It</h2>
            <p className="text-zinc-400">Featured reports and long reads from the RecordFM team.</p>
          </div>
          <Link
            href="/shows"
            className="text-sm font-semibold text-red-400 hover:text-red-300 inline-flex items-center gap-2"
          >
            Explore audio reports
            <span className="text-xs">›</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <article key={item} className="bg-zinc-900/70 border border-white/5 rounded-2xl p-6 hover-lift">
              <p className="text-xs text-red-400 font-semibold uppercase tracking-[0.35em] mb-3">Long Read</p>
              <h3 className="text-xl font-bold mb-3 text-white">Inside the newsroom: How our reporters broke the biggest stories of the year</h3>
              <p className="text-sm text-zinc-400 mb-4">
                An in-depth look at the reporting, sources, and on-the-ground coverage that defined 2024.
              </p>
              <Link href="#" className="text-sm font-semibold text-red-400 hover:text-red-300 inline-flex items-center gap-2">
                Continue reading
                <span className="text-xs">›</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
