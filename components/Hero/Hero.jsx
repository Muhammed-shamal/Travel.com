export default function Hero() {
    return (
      <div className="bg-cover bg-center h-screen text-white flex items-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Explore the World with TravelNow</h1>
          <p className="mt-4 text-lg">Discover amazing destinations and plan your next adventure.</p>
          <a href="/destinations" className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Explore Destinations</a>
        </div>
      </div>
    );
  }
  