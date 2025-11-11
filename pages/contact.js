import Head from 'next/head';

const contactInfo = [
  {
    label: 'Phone',
    value: '(555) 123-4567',
    description: 'Weekdays 8:00 AM – 6:00 PM',
  },
  {
    label: 'Email',
    value: 'info@recordfm977.com',
    description: 'We aim to reply within one business day.',
  },
  {
    label: 'Studio',
    value: '123 Radio Street, Broadcast City, BC 12345',
    description: 'Street parking available. Tours by appointment.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact • RecordFM 97.7</title>
      </Head>

      <section className="space-y-6">
        <h1>Contact the RecordFM team</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          For song requests, newsroom tips, advertising or technical help, reach out using the details below.
          You can also complete the message form and we’ll respond as soon as possible.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {contactInfo.map((item) => (
          <div key={item.label} className="rounded-md border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-500">{item.label}</h2>
            <p className="text-base font-semibold text-slate-900">{item.value}</p>
            <p className="text-sm text-slate-600 mt-2">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
        <form className="mt-4 space-y-4 max-w-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-600">First name</label>
              <input type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600">Last name</label>
              <input type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600">Message</label>
            <textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" rows={4} />
          </div>
          <button type="submit" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
