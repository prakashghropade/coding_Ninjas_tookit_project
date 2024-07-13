import React from 'react'
import { useState } from 'react';

const Tooltip = (props) => {


  const [ishovering, setIshovering] = useState(false);

  return (

    <>
      <div className='main'>

        <div className='box'>
          <div className='tooltiptext' onMouseLeave={() => setIshovering(false)} onMouseEnter={() => setIshovering(true)}>
            <p> Hover over me!</p>
          </div>

          {
            ishovering && <>
              <div className={props.value} >
                <p> Thanks for hovering! I'am tooltip</p>
              </div>
            </>

          }
        </div>


        <div>
          <h2>This is the Toolkit Project By the Prakash Ghorpade</h2>
        </div>

      </div>
    </>

  )
}

export default Tooltip

