import React, { useState } from 'react';
import './sidebar.css';

function SideBar() {
  const [showIdealForOptions, setShowIdealForOptions] = useState(false);

  const toggleIdealForOptions = () => {
    setShowIdealForOptions(!showIdealForOptions);
  };

  return (
    <div className='sidebar'>
      <div style={{ display: 'flex', justifyContent: 'space-between', height: '52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)' }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          <img style={{ height: '20px', width: '20px' }} src="Checkbox.png" />
          <h5>CUSTOMIZABLE</h5>
        </div>
      </div>
      <div className='sidebar-list'>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)' }}>
          <div onClick={toggleIdealForOptions}>
            <h5>IDEAL FOR</h5>
            <div>All</div>
            {showIdealForOptions && (
              <div className='ideal-for-options'>
                <label><input type="checkbox" />Women</label>
                <label><input type="checkbox" />Men</label>
                <label><input type="checkbox" />Baby & Kids</label>
              </div>
            )}
          </div>
          <div>
            <img src="arrow-down.jpg" alt="arrow" />
          </div>
        </div>

        
        <div style={{display:'flex',justifyContent:'space-between',height:'52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)'}}>
           <div><h5>OCCASION</h5>
             <div>All</div>
           </div>
             <div><img src="arrow-down.jpg"/>
             </div>
           
        </div>

        <div style={{display:'flex',justifyContent:'space-between',height:'52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)'}}>
           <div><h5>WORK</h5>
              <div>All</div>
           </div>
           <div> <img src="arrow-down.jpg"/>
           </div>
           
        </div>
        <div style={{display:'flex',justifyContent:'space-between',height:'52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)'}}>
            <div> <h5>FABRIC</h5>
               <div>All</div>
            </div>
          <div>
            <img src="arrow-down.jpg"/> 
          </div>
       </div>
          <div style={{display:'flex',justifyContent:'space-between' ,height:'52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)'}}>
              <div><h5>SEGMENT</h5>
                  <div>All</div>
              </div>
                  <div>
                  <img src="arrow-down.jpg"/>
                  </div>
          </div>
    <div style={{display:'flex',justifyContent:'space-between' ,height:'52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)'}}>
        <div><h5>SEGMENT</h5>
             <div>All</div>
         </div>
            <div>
            <img src="arrow-down.jpg"/>
            </div>
    </div>
    <div style={{display:'flex',justifyContent:'space-between' ,height:'52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)'}}>
        <div><h5>SEGMENT</h5>
             <div>All</div>
         </div>
            <div>
            <img src="arrow-down.jpg"/>
            </div>
    </div>
                <div style={{display:'flex',justifyContent:'space-between' ,height:'52px', boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15)'}}>
                    <div><h5>SEGMENT</h5>
                        <div>All</div>
                    </div>
                        <div>
                        <img src="arrow-down.jpg"/>
                        </div>
                </div>
        </div>
      
    </div>
  );
}

export default SideBar;