import Head from 'next/head';
import Link from 'next/link';
import { showsLineup, nowPlaying } from '@/data/shows';

const hostProfiles = [
  {
    name: 'Sarah Johnson',
    role: 'Morning Drive Host',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=320&h=320&auto=format&fit=crop',
    time: 'Weekdays 6:00 AM – 10:00 AM',
  },
  {
    name: 'Mike Rodriguez',
    role: 'Afternoon Talk Host',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=320&h=320&auto=format&fit=crop',
    time: 'Weekdays 2:00 PM – 6:00 PM',
  },
  {
    name: 'Emma Davis',
    role: 'Evening News Anchor',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=320&h=320&auto=format&fit=crop',
    time: 'Weekdays 6:00 PM – 10:00 PM',
  },
  {
    name: 'DJ Eclipse',
    role: 'Club Night Live DJ',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=320&h=320&auto=format&fit=crop',
    time: 'Fridays 9:00 PM – 12:00 AM',
  },
];

export default function ShowsPage() {
  return (
    <>
      <Head>
        <title>Shows • RecordFM 97.7</title>
        <meta name="description" content="Discover the shows, hosts, and signature programming on RecordFM 97.7." />
      </Head>

      <section className="hero-aurora rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-white/5 overflow-hidden mb-12 lg:mb-16">
        <span className="floating-shape hidden md:block w-32 h-32 -top-8 -left-4" />
        <span className="floating-shape hidden md:block w-24 h-24 top-10 -right-2" />
        <div className="relative z-10 px-6 sm:px-12 py-12 lg:py-16 text-center">
          <div className="section-pill mx-auto mb-6">
            <span className="text-red-400 text-lg">•</span>
            Signature Programming
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6">Our Shows</h1>
          <p className="text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto">
            From sunrise stories to late-night mixes, explore the voices and shows that power RecordFM 97.7.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {showsLineup.map((show) => (
          <article key={show.title} className="bg-zinc-900 rounded-2xl overflow-hidden professional-shadow hover-lift">
            <div className="relative">
              <img src={show.poster} alt={show.title} className="w-full h-52 object-cover" />
              <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {show.timeframe}
              </span>
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-white">{show.title}</h2>
              <p className="text-red-400 font-semibold">Hosted by {show.host}</p>
              <p className="text-zinc-300 text-sm">{show.description}</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">RecordFM Studios</p>
                <Link href="/schedule" className="text-sm font-semibold text-red-400 hover:text-red-300">
                  View schedule →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Meet the Hosts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostProfiles.map((host) => (
            <div key={host.name} className="text-center bg-zinc-900/70 border border-white/5 rounded-2xl p-6 hover-lift">
              <div className="relative mb-4">
                <img src={host.image} alt={host.name} className="w-32 h-32 rounded-full mx-auto object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{host.name}</h3>
              <p className="text-red-400 font-medium text-sm">{host.role}</p>
              <p className="text-xs text-zinc-400 mt-1">{host.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-400 mb-2">Now On Air</p>
            <h2 className="text-2xl font-bold text-white">{nowPlaying.title}</h2>
            <p className="text-sm text-zinc-300">with {nowPlaying.host}</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={nowPlaying.poster}
              alt={`${nowPlaying.title} poster`}
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-white">{nowPlaying.time}</p>
              <p className="text-xs text-zinc-400">{nowPlaying.location}</p>
              <Link href="/schedule" className="text-xs font-semibold text-red-400 hover:text-red-300 inline-flex items-center gap-1 mt-2">
                Listen now
                <span className="text-xs">›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
