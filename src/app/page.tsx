import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-config';
import { Hero } from './Components/hero';
import { WhyChooseUs } from './Components/WhyChooseUs';
import { OurProcess } from './Components/OurProcess';
import { IndustriesAndResults } from './Components/IndustriesAndResults';
import Clients from './Components/Clients';
import { Testimonials } from './Components/Testimonials';

export const metadata: Metadata = generatePageMetadata({
  title: 'BooWorks | Offshore Digital Marketing, SEO & Web Development Agency',
  description: 'BooWorks is a premier offshore digital agency delivering dedicated SEO, modern web engineering, PPC advertising, and e-commerce solutions. Scale with experienced remote teams in India.',
  path: '',
  keywords: [
    'offshore digital marketing services',
    'offshore seo services',
    'offshore web development company',
    'offshore software development',
    'offshore full stack developers',
    'offshore seo company in india',
    'offshore digital marketing company in india',
    'best seo company in hosur',
    'website development hosur',
  ],
});

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
