import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-200 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-pink-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Page Not Found</h2>
        <p className="text-pink-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/" 
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

