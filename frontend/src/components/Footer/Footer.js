import React from 'react'
import './footer.css'
function Fotter() {
  return (
    <div className='footer-panel'>
       <div className="footer-container">
  <div className="left-panel">
    <ul >
      
        <div style={{gap:'10px'}} >
        <h4 >BE THE FIRST TO KNOW</h4>
      <p >Sign up for updates from mettamuse</p>
        </div>
        <div class='input-box'>
          <input type="text" placeholder="Enter your e-mail"/>
          <button class='bttn'>Subscribe</button>
        </div>
      
    </ul>
  </div>
  <div className="right-panel">
    <ul>
      <div className='right-list'>
      <h3>CONTACT US</h3>
        <a>-44 221 133 5360</a>
        <a>customercare@mettamuse.com</a>
      </div >
       
        <h3 style={{marginTop:'10px'}}>CURRENCY</h3>
        <div className='flag-icons'>
          <img className="flag" src="Group.png"/>
          
          <h3>          <span style={{paddingRight:'10px'}}>.</span>USD</h3>
        </div>
        <a className='transaction'>Transactions will be completed in Euros and a currency reference is available on hover.</a>
        
      
    </ul>
  </div>
</div>
<div class="foot-panel3">
            
        </div>
        <div className='foot-panel4'>
        <ul>
                <h3 style={{textAlign:'left'}}>metta muse</h3>
                <a className='about'>About Us</a>
                <a className='about'>Stories</a>
                <a className='about'>Artisans</a>
                <a className='about'>Boutiques</a>
                <a className='about'>Contact Us</a>
                <a className='about'>EU Compliances Docs</a>
            </ul>

            <ul>
                <h3 className='quick-links'>QUICK LINKS</h3>
                <div className='quick'>
               <a className='about'>Orders & Shipping</a>
                <a className='about'>Join/Login as a seller</a>
                <a className='about'>Payment & pricing</a>
                <a className='about'>Return & Refunds</a>
                <a className='about'>FAQs</a>
                <a className='about'>Terms & Conditions</a>
                </div>
            </ul>
            <ul>
              
                <div className='social-icons'>
                  <div>
                <h3 >FOLLOW US</h3>
                </div>
                <div className='image'>
                <img className="insta" src="Insta.png"/>
                <div className='linkdin'>
                <img src="Linkdin.png"/> 
                    </div> 
                    </div>
                    </div>


                         
                <div className='image-phone'>
                <div className='accept'> <h3>metta muse <span>ACCEPTS</span></h3></div>
                {/* </div> */}
               <div className='allImage'>
              
               <img src="googlePay.png"/>
               <img src="mastercard.png"/>
               <img src="phonepay.png"/>
               <img src="amex.png"/>
               <img src="applepay.png"/>
               <img src="pay.png"/> 
                </div> 
                </div>
                </ul> 
                
               
                
            
             {/* <div className="copyright">
                Copyright © 2023 mettamuse. All rights reserved.
            </div> */}
        </div>
        <div className="copyright">
                Copyright © 2023 mettamuse. All rights reserved.
            </div>
    </div>
  )
}

export default Fotter