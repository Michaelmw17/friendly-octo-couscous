import React from 'react';
// import { Transition } from '@headlessui/react';
// import Link from 'next/link';
export default function About() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-slate-800">
          <div className="bg-white shadow-md  rounded rounded-xl m-6 border border-indigo-500/50 shadow-xl shadow-indigo-500/50">
            <div className="flex flex-col p-20  px-26 space-y-6 items-center text-center">
              <h1 className="font-light md:text-6xl text-5xl text-black tracking-wide ">
                About
              </h1>
              <p className="text-gray-400 md:text-2xl text-xl px-18">
                Possum Creek is a beautiful place close to Bangalow and the
                beaches of Byron Bay. There are two options for a holiday
                getaway. The main “Rosella” house outlook is North and
                overlooking rolling fields. The flat “Bluebird” is a one bedroom
                unit. Enjoy a low environmental impact getaway include
                rainforest pockets, access to Possum creek swimming hole,
                pristine koala, abundant birdlife, wallabies and platypus
                habitat. The home is solar powered with plentiful rain tank
                sourced water. Enjoy the comforts of a cosy home with a
                fireplace and NBN access in a pristine environment.
              </p>
              <ul className="list-unstyled">
                {' '}
                <li>
                  Hinterland getaways in spectacular location 495 Friday Hut
                  Road, Possum Creek
                </li>
                <li>Two accommodation options available</li>
                <li>Main "Rosella" house 3 bedrooms</li>
                <li>Flat "Bluebird" house 1 bedroom self-contained unit</li>
                <li>Rustic clay tennis court</li>
                <li> Set on rainforest pocket </li>
                <li>Plentiful water supply</li>
                <li>Vegetable garden</li>
                <li>Wildlife - Koalas, Platypus, Wallabies</li>
                <li>Close to Bangalow and Byron Bay</li>{' '}
              </ul>
              {/* <button className="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-black text-lg py-4 px-6">
                Find Expert
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
