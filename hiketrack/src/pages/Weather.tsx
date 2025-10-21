export default function Weather() {
  return (
    <section className='bg-white rounded-xl p-6 shadow-sm border border-stone-200'>
      <h1 className='text-2xl md:text-3xl font-bold text-emerald-900'>
        Weather
      </h1>
      <p className='mt-3 leading-relaxed'>
        Weather dashboard for hikers. We’ll display current conditions and
        multi-day forecasts for trailheads (temperature, wind, precipitation,
        cloud cover). Later we can add a location search and unit toggle.
      </p>
    </section>
  );
}