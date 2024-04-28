import React from 'react'
import Phone from './phn.webp'
import Cloth from './Cartimages/saree.jpg'
import TV from './Cartimages/tvs.webp'
import Wacth from './Cartimages/wacth.avif'
import Fixderma from './Cartimages/Fixderma.webp'
const Cart = () => {
  return (
    <>
    <div className='bootomspace'>
        <div className='carts'><a href="https://www.samsung.com/in/smartphones/galaxy-s24-ultra/buy/?modelCode=SM-S928BZTQINS&cid=in_pd_ppc_google_im-mobile-smartphones-s24-dtc_sales_samsung-s24-all-2024_eshop-pmax-pla_18Jan2024-na_1ur-503209l-2024-eshop-bau-performancemax-cpc_pfm--21163425774------x--SM-S928BZTQINS&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZvCJDox917T3prOnIqO2lBiOnJ2air4DUrAtdjJ90BGkLdMp71xNZRoCrv0QAvD_BwE"><img src={Phone} alt="" style={{height:'150px',width:'150px'}}/></a>Galaxy S24 Ultra
        ₹139999.00</div>
        <div className='carts'><a href="https://shop.gadgetsnow.com/televisions/sony-kd-32w830-32-inch-led-hd-ready-1366-x-768-tv/10421/p_G232558?utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZuvPj7L-k_QMYrrYp0_nEwQWL0Yuq2A2-GAAqFE4Xn2cZn5Z8Nfo4xoCPfYQAvD_BwE"><img src={Cloth} alt="" style={{height:'130px',width:'130px'}}/></a>Hot Pink saree ₹3,899
        </div>
        <div className='carts'><a href="https://shop.gadgetsnow.com/televisions/sony-kd-32w830-32-inch-led-hd-ready-1366-x-768-tv/10421/p_G232558?utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZuvPj7L-k_QMYrrYp0_nEwQWL0Yuq2A2-GAAqFE4Xn2cZn5Z8Nfo4xoCPfYQAvD_BwE"><img src={TV} alt="" style={{height:'150px',width:'150px'}}/></a>Sony KD-32W830 32 Inch LEDHD ₹20,899 
        </div>
       <div className='carts'><a href="https://karissakart.com/products/fixderma-shadow-sunscreen-spf-30-gel-sunscreen-for-oily-skin-sun-screen-protector-spf-30-for-body-face-broad-spectrum-for-uva-uvb-protection-non-greasy-water-resistant-for-unisex-75g?variant=45440444662047&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZvJGzQsmLUWeonv9tEtEkqmod5RZYCHR0OtVoyuw2xjJgnfltVxQMxoCkGcQAvD_BwE"><img src={Fixderma} alt="" style={{height:'150px',width:'150px'}}/></a>Fixderma Sunscreen Gel ₹599.00 </div>
       <div className='carts' ><a href="https://www.samsung.com/in/watches/galaxy-watch/galaxy-watch6-classic-47mm-black-bluetooth-sm-r960nzkains/buy/?cid=in_pd_ppc_google_im-mobile-smartphone-all-dtc_sales_samsung-wearable(roi)-all-2024_eshop-pmax-pla_10jan2024-na_1ur-501357l-2024-eshop-bau-performancemax-cpc_pfm--20951590486------x--SM-R960NZKAINS&gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZv2GkxuobYBTegUebrhMvfmMUAFcQhb2VBxclkkIdrjVcu3C06k-XBoCMesQAvD_BwE"><img src={Wacth} alt="" style={{height:'150px',width:'150px'}}/></a>Galaxy Watch6 Classic ₹1999.00 </div>
        
    </div>
    </>
  )
}

export default Cart