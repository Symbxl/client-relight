import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { HomeFaqs } from 'src/sections/home/home-faqs';
import { HomeFeatures } from 'src/sections/home/home-features';
import { HomeHero } from 'src/sections/home/home-hero';
import { HomeReviews } from 'src/sections/home/home-reviews';
import type { Page as PageType } from 'src/types/page';
import HomeInfo from '../sections/home/home-info';
import { HomeApp } from '../sections/home/home-app';
import { HomeCta } from '../sections/home/home-cta';
const Page: PageType = () => {
  usePageView();

  return (
    <>
      <Seo title='Relight Exterior Lighting' />
      <main>
        <HomeHero />
        <HomeCta />
        <HomeFeatures />
        <HomeInfo />
        <HomeApp />
        <HomeReviews />
        <HomeFaqs />
      </main>
    </>
  );
};

export default Page;
