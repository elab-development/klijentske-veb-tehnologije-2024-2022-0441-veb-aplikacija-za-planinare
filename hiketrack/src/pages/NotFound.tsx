import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='bg-white rounded-xl p-6 shadow-sm border border-stone-200 text-center'>
      <h1 className='text-3xl md:text-4xl font-bold text-emerald-900'>
        404 – Not Found
      </h1>
      <p className='mt-3 leading-relaxed'>
        The page you’re looking for doesn’t exist. Try going back home.
      </p>
      <Link
        to='/'
        className='inline-block mt-6 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-md transition'
      >
        Go Home
      </Link>
    </section>
  );
}