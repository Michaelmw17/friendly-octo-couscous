import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import PhotoGalleryComponent from '../components/PhotoSection';
import About from '../components/About';
import Image from 'next/image';
import { bgWrap } from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Navigation using nextjs and tailwindcss</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      {/* <div className={bgWrap}> */}
      {/* </div> */}
      <Navbar />
      <Image
        alt="nature"
        src="/public/nature.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <HeroSection />
      <Cards />
      <PhotoGalleryComponent />
      <About />
    </div>
  );
}
