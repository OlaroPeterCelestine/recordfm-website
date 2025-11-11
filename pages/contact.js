import Head from 'next/head';

const contactMethods = [
  {
    title: 'Call Us',
    subtitle: 'Main Studio Line',
    value: '(555) 123-4567',
    helper: 'Available 24/7',
    icon: '📞',
  },
  {
    title: 'Email Us',
    subtitle: 'General Inquiries',
    value: 'info@recordfm977.com',
    helper: 'We respond within 24 hours',
    icon: '✉️',
  },
  {
    title: 'Visit Us',
    subtitle: 'Studio Location',
    value: '123 Radio Street, Broadcast City, BC 12345',
    helper: 'Tours available by appointment',
    icon: '📍',
  },
  {
    title: 'Follow Us',
    subtitle: 'Stay connected on social media',
    value: '@recordfm977',
    helper: 'Updates, giveaways, and behind-the-scenes',
    icon: '📲',
  },
];

const infoCards = [
  {
    title: 'Business Hours',
    items: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
  },
  {
    title: 'Emergency Contact',
    items: ['For urgent news tips or emergencies', '(555) 911-NEWS'],
  },
  {
    title: 'Mailing Address',
    items: ['RecordFM 97.7', 'P.O. Box 1234', 'Broadcast City, BC 12345'],
  },
];

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact • RecordFM 97.7</title>
        <meta name="description" content="Get in touch with the RecordFM 97.7 team." />
      </Head>

      <section className="hero-aurora rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-white/5 overflow-hidden mb-12 lg:mb-16">
        <span className="floating-shape hidden md:block w-32 h-32 -top-8 -left-5" />
        <span className="floating-shape hidden md:block w-24 h-24 top-12 -right-3" />
        <div className="relative z-10 px-6 sm:px-12 py-12 lg:py-16 text-center">
          <div className="section-pill mx-auto mb-6">
            <span className="text-red-400 text-lg">•</span>
            Say Hello
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6">Contact Us</h1>
          <p className="text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto">
            Have a story idea, want to advertise, or just want to say hello? We\'d love to hear from you.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              RecordFM 97.7 is powered by our listeners. Share feedback, request interviews, or send a shout-out using the form.
            </p>
          </div>
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <div key={method.title} className="group hover-lift">
                <div className="bg-zinc-900 rounded-2xl p-6 professional-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-xl group-hover:bg-red-700 transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                      <p className="text-zinc-400 text-sm">{method.subtitle}</p>
                      <p className="text-lg font-semibold text-red-400 mt-1">{method.value}</p>
                      <p className="text-xs text-zinc-500 mt-1">{method.helper}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 professional-shadow">
          <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Your first name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="advertising">Advertising</option>
                <option value="news-tip">News Tip</option>
                <option value="show-feedback">Show Feedback</option>
                <option value="technical">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 professional-shadow hover-lift"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoCards.map((card) => (
          <div key={card.title} className="text-center bg-zinc-900 rounded-2xl p-8 professional-shadow hover-lift">
            <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
            <div className="space-y-2 text-sm text-zinc-300">
              {card.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
