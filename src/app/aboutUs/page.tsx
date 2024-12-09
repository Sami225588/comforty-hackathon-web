import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      {/* About Section */}
      <section className=" text-white py-12 px-6 flex flex-col md:flex-row items-center ">
        {/* Left Section: Text */}
        <div className="bg-[#007580] p-16 md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
          <p className="mb-6">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className=" bg-[#F9F9F926] text-white px-6 py-2 rounded font-medium">
            View collection
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image width={350} height={350} src="/asset/1.png" alt="Chair" className="max-w-full h-auto" />
          
        </div>
      </section>

      {/* What Makes Our Brand Different */}
      <section className="py-12 px-6 text-center">
        <h3 className="text-xl font-bold mb-6">What Makes Our Brand Different</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded">
            <h4 className="font-bold mb-2">Next day as standard</h4>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h4 className="font-bold mb-2">Made by true artisans</h4>
            <p>Handmade crafted goods made with real passion and craftsmanship.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h4 className="font-bold mb-2">Unbeatable prices</h4>
            <p>For our materials and quality, you won’t find better prices anywhere.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h4 className="font-bold mb-2">Recycled packaging</h4>
            <p>We use 100% recycled to ensure our footprint is more manageable.</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Our Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Poplar Suede Sofa */}
        <div className="text-center">
          <Image
            src="/asset/1.png"
            alt="The Poplar suede sofa"
            width={300}
            height={200}
            className="mx-auto"
          />
          <h3 className="mt-4 font-medium">The Poplar suede sofa</h3>
          <p className="text-gray-600">$99.00</p>
        </div>
        {/* Dandy Chair (First) */}
        <div className="text-center">
          <Image
            src="/asset/3.png"
            alt="The Dandy chair"
            width={300}
            height={200}
            className="mx-auto"
          />
          <h3 className="mt-4 font-medium">The Dandy chair</h3>
          <p className="text-gray-600">$99.00</p>
        </div>
        {/* Dandy Chair (Second) */}
        <div className="text-center">
          <Image
            src="/asset/5.png"
            alt="The Dandy chair"
            width={300}
            height={200}
            className="mx-auto"
          />
          <h3 className="mt-4 font-medium">The Dandy chair</h3>
          <p className="text-gray-600">$99.00</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutPage;
