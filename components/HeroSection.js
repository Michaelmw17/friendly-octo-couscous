import React from 'react';
import Image from 'next/image';
import logo from '/public/EcoGetawayLogo.jpeg';
import Background from '../components/background';
import '../styles/Home.module.css';
function HeroSection() {
  return (
    <>
      <Background />

      <div className="flex justify-center items-center flex-col pt-40 text-center lg:text-8xl text-6xl space-y-2">
        {/* <h1 className="text-gray-900 pb-6">
          <span className="text-green-700"> Possum Creek</span>
        </h1> */}
        <div className="mb-10" id="Introduction">
          <Image alt="Logo Main" src={logo} width={200} height={200} />
        </div>

        <div className="max-w-md py-12 px-4 bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg rounded-lg my-10 m-5">
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold mt-0">
              Introduction
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-xl">
              The location of Possum Creek is renowned for its beauty and handy
              location to Bangalow and the beaches of Byron Bay. Here you will
              find a special holiday getaway in a home lovingly constructed
              using timber and Mt Warning basalt rock. The main "Rosella" house
              with an outlook to rolling fields. Both accommodation options have
              access to sparkling clear swimming hole and rainforest pocket.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
