import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Herosection = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };




  return (
    <>
      <section className='hero-sec-mainsec' >
        <Carousel responsive={responsive} className='hero-sec-Carousel' >
          <div  ><img className='hero-sec-Carousel-img-div' src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/WRSJune24/GW/BTF/CMLmen/unrec_pc_wrs_event._CB556427452_.jpg" alt="" /></div>
          <div  ><img className='hero-sec-Carousel-img-div' src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/Makeup._CB556105301_.jpg" alt="" /></div>
          <div  ><img className='hero-sec-Carousel-img-div' src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/SVD/Jun/Min-3000-1200._CB556292338_.pngS" alt="" /></div>
          <div  ><img className='hero-sec-Carousel-img-div' src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS_1to4June/Gw-hero_PC-2-2x._CB556505438_.jpg" alt="" /></div>
        </Carousel>;
      </section>


    </>
  )
}

export default Herosection
