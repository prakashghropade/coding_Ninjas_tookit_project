import { useState } from 'react';

const Tooltip = ({position, onclick}) => {

const [ishovering, setIshovering] = useState(false);
 

  return (

    <>
      <div className='main'>

        <div className='box'>
          <div className='innerbox'>

          <div className='tooltiptext ' onMouseLeave={() => setIshovering(false)} onMouseEnter={() => setIshovering(true)}>
            <p> Hover over me!</p>
          </div>

          {
            ishovering && <>
              <div className=  {position} >
                <p> Thanks for hovering! I'am tooltip</p>
              </div>
            </>
          }
        </div>

        <button className='button' onClick={onclick}>Change Position</button>
        <div>
        <h2>This is the Tooltip Project By the Prakash Ghorpade</h2></div>
        </div>
      </div>
    </>

  )
}

export default Tooltip

