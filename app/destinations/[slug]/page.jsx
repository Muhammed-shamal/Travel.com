export default function DestinationDetail({ params }) {
    const { slug } = params;
  
    // Fetch destination details based on `slug`
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">{slug.replace("-", " ")}</h1>
        <p>Details about {slug.replace("-", " ")}.</p>
      </div>
    );
  }
  