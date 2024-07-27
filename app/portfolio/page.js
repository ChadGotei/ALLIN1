import { Suspense } from 'react';
import Filter from '../_components/Filter';
import VideosToDisplay from '../_components/VideosToDisplay';
import Loading from '../loading';

export const metadata = {
  title: 'Portfolio',
}

export default function Page() {
  return (
    <section className="">
      <div className='text-main text-5xl text-center font-bold mb-8 sm:mb-10'>
        Our Portfolio
      </div>

      <Filter />

      <Suspense fallback={<Loading />}>
        <VideosToDisplay />
      </Suspense>
    </section>
  );
}
