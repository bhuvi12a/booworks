import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/seo-config';
import { Hero } from './Components/hero';
import { WhyChooseUs } from './Components/WhyChooseUs';
import { OurProcess } from './Components/OurProcess';
import { IndustriesAndResults } from './Components/IndustriesAndResults';
import Clients from './Components/Clients';
import { Testimonials } from './Components/Testimonials';

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurProcess />
      <IndustriesAndResults />
      <Clients />
      <Testimonials />
    </>
  );
}
