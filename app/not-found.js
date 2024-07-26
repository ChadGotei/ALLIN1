import Link from "next/link";

function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold text-gray-200 mb-4 mt-20 text-center'>
        404 | Page Not Found
      </h1>
      <p className='text-lg text-primary-200 mb-8 hidden sm:block'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href='/'
        className='inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300'
      >
        Go Back Home
      </Link>
    </main>
  );
}

export default NotFound;
