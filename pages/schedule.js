import { useState } from 'react';
import Head from 'next/head';

const schedule = {
  Monday: [
    { time: '6:00 AM', title: 'Morning Drive' },
    { time: '9:00 AM', title: 'Business Beat' },
    { time: '2:00 PM', title: 'Afternoon Talk' },
    { time: '7:00 PM', title: 'Community Voices' },
  ],
  Tuesday: [
    { time: '6:00 AM', title: 'Sunrise Stories' },
    { time: '11:00 AM', title: 'Tech Trends' },
    { time: '5:00 PM', title: 'Sports Hour' },
  ],
  Wednesday: [
    { time: '7:00 AM', title: 'Wellness Wake-Up' },
    { time: '12:00 PM', title: 'Midday Mix' },
    { time: '3:00 PM', title: 'Local Business Spotlight' },
  ],
  Thursday: [
    { time: '6:30 AM', title: 'Traffic & Tunes' },
    { time: '1:00 PM', title: 'Global News Desk' },
    { time: '8:00 PM', title: 'Late Night Jazz' },
  ],
  Friday: [
    { time: '6:00 AM', title: 'Feel-Good Friday' },
    { time: '3:00 PM', title: 'Weekend Preview' },
    { time: '9:00 PM', title: 'Club Night Live' },
  ],
  Saturday: [
    { time: '8:00 AM', title: 'Farmer’s Market Live' },
    { time: '12:00 PM', title: 'Traveler’s Guide' },
    { time: '6:00 PM', title: 'Evening News' },
  ],
  Sunday: [
    { time: '9:00 AM', title: 'Sunday Reflections' },
    { time: '1:00 PM', title: 'Culinary Corner' },
    { time: '7:00 PM', title: 'Storytellers' },
  ],
};

const days = Object.keys(schedule);

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    <>
      <Head>
        <title>Schedule • RecordFM 97.7</title>
      </Head>

      <section className="space-y-6">
        <h1>Weekly schedule</h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Select a day to see the shows scheduled on RecordFM 97.7. Times listed are in Broadcast City local time.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => setActiveDay(day)}
            className={`rounded-md border px-3 py-1 text-sm ${
              activeDay === day ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 text-slate-700'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <section className="mt-6 space-y-3">
        {schedule[activeDay].map((slot) => (
          <div key={`${activeDay}-${slot.time}`} className="rounded-md border border-slate-200 px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">{slot.time}</p>
            <p className="text-sm text-slate-600">{slot.title}</p>
          </div>
        ))}
      </section>
    </>
  );
}
