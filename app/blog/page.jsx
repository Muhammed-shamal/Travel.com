export default async function Blog() {
    const res = await fetch('https://api.example.com/posts', {
      cache: 'force-cache', // Ensures the content is statically generated at build time
    });
    const posts = await res.json();
  e
    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  