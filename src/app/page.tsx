"use client";
export default function Home() {
  return (
    <div className="bg-pink-200 min-h-screen flex flex-col items-center p-6">
      {/* Container for itinerary */}
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-center border-4 border-pink-400">
        {/* Title */}
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          🎀 New Bern Itinerary for Tomorrow 🎀
        </h1>

        {/* Itinerary List */}
        <ul className="text-lg text-gray-700 space-y-3">
          <li>🕘 <b>9:00 AM</b> - Meet and Greet 🤗</li>
          <li>🛍 <b>9:30 AM - 10:30 AM</b> - Farmers Market 🍎</li>
          <li>🏙 <b>10:30 AM - 12:00 PM</b> - Exploring Downtown New Bern 🚶‍♀️</li>
          <li>🏡 <b>12:00 PM - 2:00 PM</b> - Chill at Apartment & Lunch 🍽</li>
          <li>🚗 <b>2:00 PM - 3:00 PM</b> - Drive to Morehead 🌊</li>
          <li>🌴 <b>3:00 PM - 5:00 PM</b> - Explore Morehead Area & Atlantic Beach 🏖</li>
          <li>🌅 <b>5:30 PM</b> - Watch the Sunset 🌇</li>
          <li>🏡 <b>6:00 PM</b> - Back at Apartment & Chill 😌</li>
          <li>🍽 <b>7:00 PM</b> - Dinner at Annabelle’s 🍷</li>
        </ul>
      </div>

      {/* Hello Kitty Background */}
      <style jsx>{`
        body {
          background-image: url('https://i.imgur.com/zWgU30X.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
