export default function Home() {
  return (
    <section className='bg-white rounded-xl p-6 shadow-sm border border-stone-200'>
      <h1 className='text-2xl md:text-3xl font-bold text-emerald-900'>
        Welcome to HikeTrack
      </h1>
      <p className='mt-3 leading-relaxed'>
        This is the home page of HikeTrack. Here we’ll highlight featured
        trails, latest conditions, and useful tips for safe hiking. The design
        uses a green + “brown” palette (stone/amber) with simple Tailwind
        utility classes.
      </p>
    </section>
  );
}