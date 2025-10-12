import { useParams, Link } from 'react-router-dom';

export default function Track() {
  const { id } = useParams();

  return (
    <section className='bg-white rounded-xl p-6 shadow-sm border border-stone-200'>
      <h1 className='text-2xl md:text-3xl font-bold text-emerald-900'>
        Track Details
      </h1>
      <p className='mt-3 leading-relaxed'>
        Page for a single track (ID: <span className='font-mono'>{id}</span>).
        Here we’ll show the map, elevation profile, difficulty, distance,
        waypoints, and offline tips.
      </p>

      <Link
        to='/tracks'
        className='inline-block mt-6 text-emerald-800 hover:underline'
      >
        ← Back to tracks
      </Link>
    </section>
  );
}