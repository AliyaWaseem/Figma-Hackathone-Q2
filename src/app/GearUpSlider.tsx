import React from 'react';
import ShopMensSlider from './MenSlider';
import ShopWomensSlider from './WomenSlider';

const GearUpSlider = () => {
  return (
    <section className="px-10">
        <h2 className="mb-4 font-bold text-xl m-4">Gear Up</h2>
        <div className="grid grid-cols-12 m-4">
          <div className="col-span-12 md:col-span-6">
            <ShopMensSlider />
          </div>
          <div className="col-span-12 md:col-span-6">
            <ShopWomensSlider />
          </div>
        </div>
      </section>
  )
}

export default GearUpSlider