import React from 'react'
import Logo from "./images/flipcartlogo.jpeg"
import { LuShoppingCart } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import Topoffers from "./images/topoffers.jpg"
import Mobiles from "./images/mobiles.webp"
import Fashion from './images/fashion.jpeg'
import Home from "./images/home.jpeg"
import Lap from "./images/laptops.jpeg"
import Tvs from "./images/electronics.jpeg"
import Grocery from "./images/grocery1.jpeg"
import Toys from "./images/toys.jpeg"
import Planes from "./images/planes.jpeg"
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <div className='first' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px',marginRight:'250px'}}><img src={Logo} alt="" style={{height:'40px',width:'70px',marginLeft:'200px'}}/>
        <IoIosSearch />  <input type="search" placeholder='search products and brands and more' style={{width:'400px',border:'2px solid blue',height:'27px',borderRadius:'3px',color:'white'}} />
        </div>
        <div className='second' style={{marginRight:'100px',height:'40px',gap:'25px',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
        <i style={{fontSize:'20px'}}><IoMdMoon/></i>
        <aside style={{gap:'4px',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
        <i style={{color:'white',fontSize:'20px'}}><LuShoppingCart/></i>
        <p style={{color:'white'}}>cart</p>
        </aside>
        </div>
        
    </nav>
    <div className='nav2' >
       <aside><img src={Topoffers} alt="" className='pics' />Top offers</aside>
       <aside ><a href="https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_3d55f584-812a-4507-8b69-07ad80514e03_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J"><img src={Mobiles} alt="" className='pics'/></a>Mobiles</aside>
       <aside><img src={Fashion} alt="" className='pics'/>
          <select style={{border:'1px',fontSize:'10px',width:'90px'}}>
            <option value="">Fashion</option>
            <option value="">Mens Tshirt</option>
            <option value="">Mens casual shirts</option>
            <option value="">Mens Formal Shirts</option>
            <option value="">Mens Kurthas</option>
            <option value="">Mens ethnic wears</option>
          </select>
       </aside>
       <aside><img src={Home} alt="" className='pics'/>Home</aside>
       <aside><img src={Lap} alt="" className='pics'/>Electronics
       </aside>
       <aside><img src={Tvs} alt="" className='pics'/>Appliances</aside>
       <aside><img src={Grocery} alt="" className='pics'/>Grocery</aside>
       <aside><img src={Planes} alt="" className='pics'/>Travel</aside>
       <aside><img src={Toys} alt="" className='pics'/>
       <select className='select' style={{border:'1px',fontSize:'10px',width:'100px'}}>
        <option value="">Beauty and toys</option>
        <option value="">beverages</option>
        <option value="">Chocolates</option>
        <option value="">snack corners</option>
        <option value="">Sweet Store</option>
        <option value="">Baking esstensial</option>
        <option value="">Ready to cook and & eat</option>
        </select>
       </aside>
    </div>
    
    </>
  )
}

export default Navbar