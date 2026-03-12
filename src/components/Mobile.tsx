// import { useState } from "react"
import Hamburger from '../assets/images/hamburger.png'

type MobileProps = {
  handleClick: () => void;
  toggle: boolean;
};



// function Mobile()

const Mobile = ({handleClick, toggle}:
  MobileProps) =>{

  return (
    <div>

     <div className='relative md:hidden'>
             <button onClick={handleClick} className='w-full'>
               {toggle ? <p className='pt-5'> ❌ </p> : <p className='pt-5 md:hidden'>🍔</p>}
             </button>
             <img src={Hamburger} alt="Hamburger" className=' md:hidden' />
           {
              toggle &&
              <div className='grid grid-rows-5 space-y-3 bg-gray-200 shadow-2xl shadow-green-400 w-36 absolute top-10 right-6'>
                <button className=' hover:bg-amber-400'>Morweb CM</button>
                <button className=' hover:bg-amber-400'>Solution</button>
                <button className=' hover:bg-amber-400'>Modules</button>
                <button className=' hover:bg-amber-400'>Pricing</button>
                <button className=' hover:bg-amber-400'>About</button>
              </div>
            }
          </div>


    </div>
  )
}

export default Mobile