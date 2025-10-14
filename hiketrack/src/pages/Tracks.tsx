import TrailCard from '../components/TrailCard';
import { TRAILS } from '../data/trails';
import { LOCATIONS } from '../data/locations';

export default function Tracks() {
  return (
    <section>
      <header className='mb-6'>
        <h1 className='text-2xl md:text-3xl font-bold text-emerald-900'>
          Tracks
        </h1>
      </header>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {TRAILS.map((trail) => {
          const location = LOCATIONS.find((l) => l.id === trail.locationId);
          return <TrailCard key={trail.id} trail={trail} location={location} />;
        })}
      </div>
    </section>
  );
}