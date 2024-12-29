export default function Destinations() {
    const destinations = [
      { name: "Paris", description: "The City of Lights.", image: "/images/paris.jpg" },
      { name: "Maldives", description: "Tropical paradise.", image: "/images/maldives.jpg" },
      { name: "New York", description: "The city that never sleeps.", image: "/images/newyork.jpg" },
    ];
  
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Top Destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white shadow-md rounded overflow-hidden">
              <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{dest.name}</h2>
                <p className="text-gray-600">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  