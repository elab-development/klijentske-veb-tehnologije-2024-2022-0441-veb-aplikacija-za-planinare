import { Link } from 'react-router-dom';

export default function Tracks() {
  return (
    <section className='bg-white rounded-xl p-6 shadow-sm border border-stone-200'>
      <h1 className='text-2xl md:text-3xl font-bold text-emerald-900'>
        Tracks
      </h1>
      <p className='mt-3 leading-relaxed'>
        Here we’ll list available hiking tracks (filters by difficulty, length,
        elevation gain). You’ll be able to open a specific track for details.
      </p>

      <div className='mt-6'>
        <Link
          to='/tracks/123'
          className='inline-block bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md transition'
        >
          Open example track
        </Link>
      </div>
    </section>
  );
}