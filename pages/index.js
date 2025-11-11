import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import {
  FaPlay,
  FaVideo,
  FaBroadcastTower,
  FaArrowRight,
} from 'react-icons/fa';
import { nowPlaying } from '@/data/shows';

const heroStats = [
  { label: 'Daily Listeners', value: '50K+' },
  { label: 'Live Broadcasting', value: '24/7' },
  { label: 'Years Experience', value: '15+' },
];

const featuredNews = {
  tag: 'Featured Story',
  category: 'Politics',
  source: 'News Direct',
  date: 'Nov 15, 2021',
  title: 'Putin is "not going to engage" with Biden\'s State of the Union comments, expert says',
  description:
    'November 15, 2021 / 3BL Media / -- Ceres CEO & President Mindy Lubber issued the following statement at the conclusion of the in Glasgow, Scotland.',
  image:
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&h=700&auto=format&fit=crop',
};

const sidebarStories = [
  {
    title: 'Global Tech Summit Highlights AI Breakthroughs',
    date: 'Nov 15, 2021 · 5 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=240&h=150&auto=format&fit=crop',
  },
  {
    title: 'New Policies Aim to Boost Renewable Energy Sources',
    date: 'Nov 15, 2021 · 8 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=240&h=150&auto=format&fit=crop',
  },
  {
    title: 'Exploring the Hidden Gems of Southeast Asia',
    date: 'Nov 14, 2021 · 12 min read',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=240&h=150&auto=format&fit=crop',
  },
  {
    title: 'Market Analysis: Stocks Rally on Positive Outlook',
    date: 'Nov 14, 2021 · 7 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=240&h=150&auto=format&fit=crop',
  },
];

const newsShows = [
  {
    title: 'At Value-Focused Hotels the Free Breakfast Gets... ',
    duration: '13:29',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=320&h=200&auto=format&fit=crop',
    channel: 'DBC Evening News',
    views: '2K Views · 2 Days ago',
  },
  {
    title: 'The only thing that overcomes hard luck is ...',
    duration: '13:29',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=320&h=200&auto=format&fit=crop',
    channel: 'DBC Evening News',
    views: '2K Views · 2 Days ago',
  },
  {
    title: 'There May Consoles in the Future, EA Exec Says...',
    duration: '13:29',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=320&h=200&auto=format&fit=crop',
    channel: 'DBC Evening News',
    views: '2K Views · 2 Days ago',
  },
  {
    title: 'Success is not a good teach failure makes you...',
    duration: '13:29',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=320&h=200&auto=format&fit=crop',
    channel: 'DBC Evening News',
    views: '2K Views · 2 Days ago',
  },
  {
    title: 'Budget issues force the Tour to be cancelled',
    duration: '13:29',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=320&h=200&auto=format&fit=crop',
    channel: 'DBC Evening News',
    views: '2K Views · 2 Days ago',
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>RecordFM 97.7 - Your Voice, Your Station</title>
        <meta
          name="description"
          content="RecordFM 97.7 delivers quality news, music, and community programming across the week."
        />
      </Head>

      <section className="text-center min-h-[60vh] lg:min-h-[70vh] flex flex-col items-center justify-center relative py-8 lg:py-0">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white max-w-5xl mx-auto leading-tight mb-6 lg:mb-8">
            Your Premier Source for <span className="gradient-text">News, Music & Community</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto mb-8 lg:mb-12 leading-relaxed px-4">
            RecordFM 97.7 delivers quality content, breaking news, and the best music to keep you informed and entertained around the clock.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 px-4">
            <Link
              href="#listen"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 professional-shadow hover-lift w-full sm:w-auto"
            >
              <FaPlay className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              Listen Live
            </Link>
            <Link
              href="#watch"
              className="group flex items-center justify-center gap-3 border-2 border-red-500 text-red-500 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 hover-lift w-full sm:w-auto"
            >
              <FaVideo className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
              Watch Studio
            </Link>
          </div>

          <div className="mt-10 px-4">
            <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl px-6 py-6 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={nowPlaying.poster}
                    alt={`${nowPlaying.title} show poster`}
                    className="w-16 h-16 rounded-xl object-cover shadow-lg"
                  />
                  <div>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-400 mb-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                      Now On Air
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{nowPlaying.title}</h3>
                    <p className="text-sm text-zinc-300">with {nowPlaying.host}</p>
                  </div>
                </div>
                <div className="text-sm text-zinc-300 sm:text-right">
                  <p className="text-white font-semibold">{nowPlaying.time}</p>
                  <p>{nowPlaying.location}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
                  <FaBroadcastTower className="text-red-400" />
                  Live Broadcast
                </div>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300"
                >
                  View Full Schedule
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-gray-800">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-700 my-8" />

      <section className="bg-black text-white font-sans">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
              <p className="text-zinc-400 text-lg">Stay informed with breaking news and updates</p>
            </div>
            <Link
              href="/news"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 professional-shadow hover-lift inline-flex items-center gap-2 self-start"
            >
              <FaArrowRight />
              View All News
            </Link>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[500px] professional-shadow hover-lift">
              <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-sm">
                {featuredNews.tag}
              </div>
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="bg-zinc-800 px-2 py-0.5 rounded-sm font-semibold">{featuredNews.category}</span>
                  <span className="font-medium text-zinc-300">{featuredNews.source}</span>
                  <span className="font-medium text-zinc-300">{featuredNews.date}</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 leading-tight">{featuredNews.title}</h3>
                <p className="text-sm text-zinc-300 hidden md:block w-3/4">{featuredNews.description}</p>
              </div>
            </article>

            <aside className="lg:col-span-1 flex flex-col mt-8 lg:mt-0 h-[500px]">
              <div className="flex-grow flex flex-col justify-between">
                {sidebarStories.map((story, idx) => (
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
                      <p className="text-xs text-zinc-400 mb-1">{story.date}</p>
                      <h4 className="font-bold leading-tight text-sm">{story.title}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </section>

          <section className="mt-12 pt-8 border-t border-zinc-800">
            <h2 className="text-2xl font-bold mb-6">News Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
              {newsShows.map((show) => (
                <div key={show.title} className="group">
                  <div className="relative mb-2.5">
                    <img src={show.image} alt={show.title} className="w-full h-full object-cover rounded-xl" />
                    <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-1.5 py-0.5 rounded-sm font-semibold">
                      {show.duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <Link href="/shows" className="font-bold text-sm leading-tight group-hover:text-zinc-300 line-clamp-2 pr-2">
                      {show.title}
                    </Link>
                    <button className="text-zinc-400 hover:text-white transition-colors" aria-label="Show options">
                      •••
                    </button>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1.5">
                    <div className="flex items-center">
                      <span>{show.channel}</span>
                      <span className="text-[10px] ml-1.5">✔︎</span>
                    </div>
                    <p>{show.views}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
