import React from 'react';
// import { Transition } from '@headlessui/react';
// import Link from 'next/link';
import MyGoogleComponent from './Location';
export default function About() {
  return (
    <>
      <div
        className="flex  justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2"
        id="about"
      >
        <div className="max-w-md py-12 px-4 bg-white shadow-lg rounded-lg my-10">
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold mt-0">About</h2>
            <p className="mt-4 text-gray-600 text-base">
              Possum Creek is a beautiful place close to Bangalow and the
              beaches of Byron Bay. There are two options for a holiday getaway.
              The main “Rosella” house outlook is North and overlooking rolling
              fields. The flat “Bluebird” is a one bedroom unit. Enjoy a low
              environmental impact getaway include rainforest pockets, access to
              Possum creek swimming hole, pristine koala, abundant birdlife,
              wallabies and platypus habitat. The home is solar powered with
              plentiful rain tank sourced water. Enjoy the comforts of a cosy
              home with a fireplace and NBN access in a pristine environment.
            </p>
          </div>
        </div>
      </div>
      <div
        className="wrapper bg-clear-400 antialiased text-gray-900"
        id="Location"
      >
        <div>
          {/* <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md">     */}
          <MyGoogleComponent />
          <div className="relative px-4 -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                Things to do in the area
              </h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="http://www.townbangalow.com.au"
                  >
                    Town Bangalow | Make the move to Bangalow
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.byron-bay.com/beaches/"
                  >
                    Byron Bay Beaches | Official byronbay.com Guide
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.capebyrondistillery.com"
                  >
                    Home of Brookie’s Gin | Cape Byron Distillery
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.facebook.com/Federal-Doma-Cafe-444756125571324/"
                  >
                    Federal Doma Cafe
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://harvestnewrybar.com.au"
                  >
                    Byron Bay Restaurant and Wedding Venue | Harvest Newrybar
                  </a>
                </li>
              </ul>
              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm"> /wk</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  4/5 ratings{' '}
                </span>
                <span className="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
