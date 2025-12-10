export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      <h1 className="text-6xl font-bold mb-12">Hello Anthony</h1>
      <blockquote className="max-w-3xl">
        <p className="text-2xl md:text-3xl font-light italic text-gray-700 mb-4">
          &ldquo;The only way to do great work is to love what you do.&rdquo;
        </p>
        <footer className="text-lg text-gray-500">
          — Steve Jobs
        </footer>
      </blockquote>
    </main>
  );
}

