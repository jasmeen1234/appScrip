import React,{useState} from 'react'
import './Header.css'

import HeaderBottom from './HeaderBottom'
import Header2 from './Header2';
import HeaderFilter from './HeaderFilter';
import SideBar from '../home/SideBar';
 import '../home/sidebar.css';
 import '../home/product.css';
import Product from '../home/Product';
function Header() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
    <div className="main">
      
      <img  className="logo-image" src="Logo.jpg"/>
      <h1 className='logo'>LOGO</h1>
      <div className="main-right">
        <img src="search-normal.png" alt="" />
       <img src="heart.jpg" alt=""/>
      <img src="shopping-bag.png" alt=""/>
     
      <img src="profile.png" alt=""/>
      
      <h6 style={{marginTop:"5px"}}>ENG</h6>
      <img src="arrow-down.jpg" alt=""/>
      
      
  </div>
    </div>
    <div style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',marginTop:'2px'}}>
        <HeaderBottom/>
    </div>
    <div style={{gap:'5px'}}><Header2/></div>
    <HeaderFilter onToggleSidebar={toggleSidebar}  showSidebar={showSidebar}/>
    <div className='products-home'>
    {showSidebar ? <SideBar /> : null}
    
      
      <Product/>
      </div>
      
   </div>
  )
}

export default Header