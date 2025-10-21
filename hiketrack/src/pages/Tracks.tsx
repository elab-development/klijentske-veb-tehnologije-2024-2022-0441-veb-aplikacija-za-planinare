<<<<<<< HEAD
import { useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
=======
>>>>>>> upstream/main
import TrailCard from '../components/TrailCard';
import { TRAILS } from '../data/trails';
import { LOCATIONS } from '../data/locations';

<<<<<<< HEAD
const PER_PAGE = 12;

export default function Tracks() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, Number(params.get('page') || 1));
  const totalPages = Math.max(1, Math.ceil(TRAILS.length / PER_PAGE));

  const safePage = Math.min(page, totalPages);

  const pagedTrails = useMemo(() => {
    const start = (safePage - 1) * PER_PAGE;
    return TRAILS.slice(start, start + PER_PAGE);
  }, [safePage]);

  useEffect(() => {
    if (page !== safePage) {
      params.set('page', String(safePage));
      setParams(params, { replace: true });
    }
    const grid = document.getElementById('tracks-grid');
    (grid ?? window).scrollTo({ top: 0, behavior: 'smooth' });
  }, [safePage]);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    params.set('page', String(next));
    setParams(params);
  };

=======
export default function Tracks() {
>>>>>>> upstream/main
  return (
    <section>
      <header className='mb-6'>
        <h1 className='text-2xl md:text-3xl font-bold text-emerald-900'>
          Tracks
        </h1>
      </header>

<<<<<<< HEAD
      <div
        id='tracks-grid'
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
      >
        {pagedTrails.map((trail) => {
=======
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {TRAILS.map((trail) => {
>>>>>>> upstream/main
          const location = LOCATIONS.find((l) => l.id === trail.locationId);
          return <TrailCard key={trail.id} trail={trail} location={location} />;
        })}
      </div>
<<<<<<< HEAD

      <div className='mt-8 flex items-center justify-center gap-2'>
        <button
          onClick={() => goTo(safePage - 1)}
          disabled={safePage <= 1}
          className='px-3 py-1.5 rounded-md border border-stone-300 text-stone-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-100'
        >
          Previous
        </button>

        <div className='flex items-center gap-1'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goTo(p)}
              className={
                'min-w-9 px-3 py-1.5 rounded-md border text-sm ' +
                (p === safePage
                  ? 'bg-emerald-700 border-emerald-700 text-white'
                  : 'border-stone-300 text-stone-700 hover:bg-stone-100')
              }
              aria-current={p === safePage ? 'page' : undefined}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          onClick={() => goTo(safePage + 1)}
          disabled={safePage >= totalPages}
          className='px-3 py-1.5 rounded-md border border-stone-300 text-stone-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-100'
        >
          Next
        </button>
      </div>

      <p className='mt-3 text-center text-sm text-stone-600'>
        Page {safePage} of {totalPages} • Showing {pagedTrails.length} /{' '}
        {TRAILS.length}
      </p>
=======
>>>>>>> upstream/main
    </section>
  );
}