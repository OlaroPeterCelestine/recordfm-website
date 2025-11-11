export const nowPlaying = {
  title: 'Morning Drive',
  host: 'Sarah Johnson',
  time: 'Weekdays • 6:00 AM – 10:00 AM',
  location: 'Live from Studio A',
  poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=320&h=320&auto=format&fit=crop',
};

export const showsLineup = [
  {
    title: 'Morning Drive',
    timeframe: 'Weekdays • 6:00 AM – 10:00 AM',
    host: 'Sarah Johnson',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'News, weather, and commuter updates to kick-start your day.'
  },
  {
    title: 'Business Beat',
    timeframe: 'Mondays • 9:00 AM',
    host: 'Derrick Miles',
    poster: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Market trends, entrepreneur interviews, and finance tips.'
  },
  {
    title: 'Afternoon Talk',
    timeframe: 'Weekdays • 2:00 PM – 6:00 PM',
    host: 'Mike Rodriguez',
    poster: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Conversations about local politics, lifestyle, and culture.'
  },
  {
    title: 'Sports Hour',
    timeframe: 'Tuesdays • 5:00 PM',
    host: 'The Locker Room Crew',
    poster: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Highlights, analysis, and fan call-ins from the sports world.'
  },
  {
    title: 'Wellness Wake-Up',
    timeframe: 'Wednesdays • 7:00 AM',
    host: 'Dr. Kim Alvarez',
    poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Fitness, nutrition, and mental health advice mid-week.'
  },
  {
    title: 'Late Night Jazz',
    timeframe: 'Thursdays • 8:00 PM',
    host: 'Marcus Reed',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Smooth jazz selections and stories behind the classics.'
  },
  {
    title: 'Weekend Preview',
    timeframe: 'Fridays • 3:00 PM',
    host: 'Tanya Brooks',
    poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Upcoming concerts, events, and entertainment recommendations.'
  },
  {
    title: 'Club Night Live',
    timeframe: 'Fridays • 9:00 PM',
    host: 'DJ Eclipse',
    poster: 'https://images.unsplash.com/photo-1503424886308-418b744a73a1?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Live mix of dance, house, and electronic beats to start the weekend.'
  },
  {
    title: 'Farmer’s Market Live',
    timeframe: 'Saturdays • 8:00 AM',
    host: 'Kelly Rivers',
    poster: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d0b?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Recipes, vendor interviews, and sustainable living tips.'
  },
  {
    title: 'Traveler’s Guide',
    timeframe: 'Saturdays • 12:00 PM',
    host: 'Marco Silva',
    poster: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Destination spotlights, travel hacks, and listener itineraries.'
  },
  {
    title: 'Sunday Reflections',
    timeframe: 'Sundays • 9:00 AM',
    host: 'Reverend Cole',
    poster: 'https://images.unsplash.com/photo-1530023367847-a683933f4177?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Inspirational messages, community service highlights, and music.'
  },
  {
    title: 'Storytellers',
    timeframe: 'Sundays • 7:00 PM',
    host: 'Naomi Fielding',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=320&h=320&auto=format&fit=crop',
    description: 'Documentary-style storytelling to close the week.'
  }
];

export const scheduleByDay = {
  Monday: [
    { time: '6:00 AM', title: 'Morning Drive', host: 'Sarah Johnson', desc: 'News, weather, and commuter updates to kick-start your week.' },
    { time: '9:00 AM', title: 'Business Beat', host: 'Derrick Miles', desc: 'Market trends, entrepreneurs, and finance tips.' },
    { time: '2:00 PM', title: 'Afternoon Talk', host: 'Mike Rodriguez', desc: 'City politics, lifestyle, and culture.' }
  ],
  Tuesday: [
    { time: '6:00 AM', title: 'Sunrise Stories', host: 'Lisa Carter', desc: 'Human-interest pieces and community spotlights.' },
    { time: '11:00 AM', title: 'Tech Trends', host: 'Priya Desai', desc: 'Innovation, gadgets, and industry interviews.' },
    { time: '5:00 PM', title: 'Sports Hour', host: 'Locker Room Crew', desc: 'Highlights, analysis, and fan call-ins.' }
  ],
  Wednesday: [
    { time: '7:00 AM', title: 'Wellness Wake-Up', host: 'Dr. Kim Alvarez', desc: 'Fitness, nutrition, and mental health advice.' },
    { time: '12:00 PM', title: 'Midday Mix', host: 'Aaron Blake', desc: 'A curated blend of new releases and listener favorites.' },
    { time: '7:00 PM', title: 'Community Voices', host: 'Local Voices', desc: 'Local leaders, artists, and grassroots stories.' }
  ],
  Thursday: [
    { time: '6:30 AM', title: 'Traffic & Tunes', host: 'Jamie Fox', desc: 'Real-time traffic with upbeat tracks.' },
    { time: '1:00 PM', title: 'Global News Desk', host: 'Emma Davis', desc: 'International headlines and expert commentary.' },
    { time: '8:00 PM', title: 'Late Night Jazz', host: 'Marcus Reed', desc: 'Smooth jazz selections and stories behind the classics.' }
  ],
  Friday: [
    { time: '6:00 AM', title: 'Feel-Good Friday', host: 'Sarah Johnson', desc: 'Positive stories, weekend weather, and high-energy tunes.' },
    { time: '3:00 PM', title: 'Weekend Preview', host: 'Tanya Brooks', desc: 'Upcoming concerts, events, and entertainment recommendations.' },
    { time: '9:00 PM', title: 'Club Night Live', host: 'DJ Eclipse', desc: 'Dance, house, and electronic beats to start the weekend.' }
  ],
  Saturday: [
    { time: '8:00 AM', title: 'Farmer’s Market Live', host: 'Kelly Rivers', desc: 'Recipes, vendor interviews, and sustainable living tips.' },
    { time: '12:00 PM', title: 'Traveler’s Guide', host: 'Marco Silva', desc: 'Destination spotlights and travel hacks.' },
    { time: '6:00 PM', title: 'Evening News', host: 'Emma Davis', desc: 'Breaking stories and in-depth reporting.' }
  ],
  Sunday: [
    { time: '9:00 AM', title: 'Sunday Reflections', host: 'Reverend Cole', desc: 'Inspirational messages and community service highlights.' },
    { time: '1:00 PM', title: 'Culinary Corner', host: 'Chef Lina', desc: 'Chef interviews, recipes, and foodie adventures.' },
    { time: '7:00 PM', title: 'Storytellers', host: 'Naomi Fielding', desc: 'Documentary-style storytelling and listener narratives.' }
  ]
};

