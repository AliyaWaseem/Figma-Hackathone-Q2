"use client"
import React, {useRef} from 'react';
import Slider from "react-slick";
import { nikeProducts } from './Cards/data'; 
import Card from './Cards/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ShopWomensSlider = () => {
    const sliderRef = useRef<Slider | null>(null);

    const womensProducts = nikeProducts.filter((product) =>
      product.description.toLowerCase().includes("women")
    );
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <>
      <div className="flex mb-4 items-center justify-end">
            <div className="flex items-center gap-2">
              <p>Shop Women&apos;s</p>
              <div className="bg-[#F5F5F5] px-5 py-4 rounded-full cursor-pointer" onClick={() => sliderRef.current?.slickPrev()}>
                <ArrowLeft />
              </div>
              <div className="bg-[#E5E5E5] px-5 py-4 rounded-full cursor-pointer" onClick={() => sliderRef.current?.slickNext()}>
                <ArrowRight />
              </div>
            </div>
          </div>
      <div className="pb-10">
        <Slider {...settings} ref={sliderRef}>
          {womensProducts.map((product) => (
            <Card
              key={product.id}
              tags={product.tags}
              title={product.title}
              description={product.description}
              color={product.color}
              price={product.price}
              imagesUrls={product.imagesUrls}
            />
          ))}
        </Slider>
      </div>
      </>
    );
}

export default ShopWomensSlider