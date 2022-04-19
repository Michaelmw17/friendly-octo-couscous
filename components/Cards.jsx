import React from 'react';
// import { Transition } from '@headlessui/react';
// import Link from 'next/link';
export default function Cards() {
  return (
    <div id="Accommodation">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"> */}
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Rosella - 3 Bed
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Main house
                  </h1>
                  <p className="leading-relaxed mb-3">
                    3 bedrooms with loft. Access to sparkling swimming hole and
                    rustic tennis court. NBN, solar, drinking water filtered
                    from tank. Maximum 6 people with minimum 2 night stay.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"> */}
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Bluebird - 1 Bed
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Side House
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Self contained has 1 bedrooms with access to sparkling
                    swimming hole. NBN, drinking water filtered from tank.
                    Maximum 2 people with minimum 2 night stay.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-indigo-50 to-blue-50  overflow-hidden">
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"> */}
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Mary and Vince
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Owners
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing tousled waistcoat. Photo booth fam kinfolk
                    cold-pressed sriracha leggings jianbing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
