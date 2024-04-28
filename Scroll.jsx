import React from 'react'
import Plane1 from "./scroll_images/planes1.webp"
import Plane2 from "./scroll_images/planes2.webp"
import Plane3 from "./scroll_images/planes3.webp"
import Image from "./scroll_images/image4.webp"
import Image2 from "./scroll_images/image5.webp"

const Scroll = () => {
  return (
    <>
       <marquee behavior="" direction="">
       <img src={Plane1} alt="" className='scroll'/>
       <img src={Plane2} alt="" className='scroll' />
       <img src={Plane3} alt="" className='scroll'/>
       <img src={Image} alt="" className='scroll' />
       <img src={Image2} alt="" className='scroll'/>
       </marquee>
       
    </>
  )
}

export default Scroll