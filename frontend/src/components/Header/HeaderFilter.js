import React, { useState } from 'react';

function HeaderFilter({ onToggleSidebar, showSidebar }) {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className='filter'>

      <div className='left-section'>
        <p className='items'>3425  Items</p>
        <div className='hide' onClick={onToggleSidebar}>
          <img  style={{marginLeft:'3px',marginTop:'5px'}}src="arrow-left.png" alt="arrow" />
          {showSidebar ? "HIDE FILTER" : "SHOW FILTER"}
        </div>
      </div>

      <div className='right-section'>
        <div className='recomend' onClick={toggleOptions}>
          <p>RECOMMENDED</p>
          <img src="arrow-down.jpg" alt="arrow" />
        </div>

        {showOptions && (
          <div className='options'>
            <ul>
              <li>Newest First</li>
              <li>Popular</li>
              <li>Price: High to Low</li>
              <li>Price: Low to High</li>
            </ul>
          </div>
        )}

      </div>

    </div>
  );
}

export default HeaderFilter;