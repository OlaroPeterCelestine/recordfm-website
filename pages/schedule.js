import { useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { scheduleByDay, nowPlaying } from '@/data/shows';

const dailyHighlights = [
  {
    title: 'Morning Drive',
    host: 'Sarah Johnson',
    timeRange: '6:00 AM – 10:00 AM',
    status: 'LIVE NOW',
    actionLabel: 'Listen',
    actionColor: 'bg-red-600 hover:bg-red-700',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Start your day with news, weather, and community updates.',
  },
  {
    title: 'Sports Hour',
    host: 'Locker Room Crew',
    timeRange: '5:00 PM – 6:00 PM',
    status: 'Upcoming',
    actionLabel: 'Set Reminder',
    actionColor: 'bg-zinc-700 hover:bg-zinc-600',
    poster: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Highlights, analysis, and fan call-ins covering the sports world.',
  },
  {
    title: 'Afternoon Talk',
    host: 'Mike Rodriguez',
    timeRange: '2:00 PM – 6:00 PM',
    status: 'Upcoming',
    actionLabel: 'Set Reminder',
    actionColor: 'bg-zinc-700 hover:bg-zinc-600',
    poster: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Engaging conversations about politics, lifestyle, and culture.',
  },
  {
    title: 'Evening News',
    host: 'Emma Davis',
    timeRange: '6:00 PM – 10:00 PM',
    status: 'Upcoming',
    actionLabel: 'Set Reminder',
    actionColor: 'bg-zinc-700 hover:bg-zinc-600',
    poster: 'https://images.unsplash.com/photo-1503424886308-418b744a73a1?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Comprehensive coverage of national and international stories.',
  },
  {
    title: 'Night Music',
    host: 'David Chen',
    timeRange: '10:00 PM – 2:00 AM',
    status: 'Upcoming',
    actionLabel: 'Set Reminder',
    actionColor: 'bg-zinc-700 hover:bg-zinc-600',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'The best music to end your day with new releases and classics.',
  },
];

const daysOfWeek = Object.keys(scheduleByDay);

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState('Monday');

  return (
    <>
      <Head>
        <title>Schedule • RecordFM 97.7</title>
        <meta name="description" content="View the RecordFM programming schedule by day of the week." />
      </Head>

      <section className="hero-aurora rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-white/5 overflow-hidden mb-12 lg:mb-16">
        <span className="floating-shape hidden md:block w-32 h-32 -top-10 -left-4" />
        <span className="floating-shape hidden md:block w-24 h-24 top-14 -right-3" />
        <div className="relative z-10 px-6 sm:px-12 py-12 lg:py-16 text-center">
          <div className="section-pill mx-auto mb-6">
            <span className="text-red-400 text-lg">•</span>
            Daily Lineup
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6">Program Schedule</h1>
          <p className="text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto">
            Plan your listening with a show-by-show view of the RecordFM broadcast week.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 mb-16">
        {dailyHighlights.map((show) => (
          <article key={show.title} className="bg-zinc-900 rounded-2xl p-6 professional-shadow hover-lift">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-6">
                <img src={show.poster} alt={`${show.title} poster`} className="w-16 h-16 rounded-xl object-cover shadow-lg" />
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] mb-1 text-red-400">{show.status}</p>
                  <h2 className="text-2xl font-bold text-white">{show.title}</h2>
                  <p className="text-red-500 font-semibold">{show.host}</p>
                  <p className="text-sm text-zinc-400 mt-1">{show.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{show.timeRange}</p>
                <button
                  type="button"
                  className={clsx(show.actionColor, 'text-white px-4 py-2 rounded-lg transition-colors mt-3 inline-flex items-center gap-2 text-sm font-semibold')}
                >
                  {show.status === 'LIVE NOW' ? '▶︎' : '⏰'}
                  {show.actionLabel}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8">Weekly Overview</h2>
        <div className="bg-zinc-900 rounded-2xl p-6 lg:p-8 professional-shadow">
          <div className="flex flex-wrap gap-3">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setActiveDay(day)}
                className={clsx('schedule-tab', activeDay === day && 'active')}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            {scheduleByDay[activeDay].map((slot) => (
              <div
                key={`${activeDay}-${slot.time}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-zinc-800/80 rounded-xl px-4 py-3 border border-white/5"
              >
                <div>
                  <p className="text-sm font-semibold text-red-500 mb-1">{slot.time}</p>
                  <p className="text-white text-base font-semibold">{slot.title}</p>
                  <p className="text-xs text-zinc-400">Hosted by {slot.host}</p>
                  {slot.desc && <p className="text-xs text-zinc-500 mt-1">{slot.desc}</p>}
                </div>
                <div className="text-sm text-zinc-400">{activeDay}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-24 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-400 mb-2">Now On Air</p>
            <h2 className="text-2xl font-bold text-white">{nowPlaying.title}</h2>
            <p className="text-sm text-zinc-300">with {nowPlaying.host}</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={nowPlaying.poster} alt={`${nowPlaying.title} poster`} className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover" />
            <div>
              <p className="text-sm font-semibold text-white">{nowPlaying.time}</p>
              <p className="text-xs text-zinc-400">{nowPlaying.location}</p>
              <Link href="/shows" className="text-xs font-semibold text-red-400 hover:text-red-300 inline-flex items-center gap-1 mt-2">
                Meet the hosts
                <span className="text-xs">›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
