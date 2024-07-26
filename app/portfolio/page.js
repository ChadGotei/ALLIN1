import { Suspense } from 'react';
import Filter from '../_components/Filter';
import VideosToDisplay from '../_components/VideosToDisplay';
import Loading from '../loading';

export const metadata = {
  title: 'Portfolio',
}

export default function Page() {
  return (
    <section className="py-12">
      <div className='text-main text-5xl text-center font-bold mb-12'>
        Our Portfolio
      </div>

      <Filter />

      <Suspense fallback={<Loading />}>
        <VideosToDisplay />
      </Suspense>
    </section>
  );
}
