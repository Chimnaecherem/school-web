import { useState } from 'react'
import Logo from "../../assets/images/logo.png"
import reader from "../../assets/images/reader.png"
import passport from "../../assets/images/passport.jpg"
import jotter from "../../assets/images/ok/jotter design nurse.jpg"
import fundraising from "../../assets/images/ok/fund raising.jpg"
import phanies from "../../assets/images/ok/Phaniestouch.jpg"
import pastorialv from "../../assets/images/ok/pastoral visit iv.jpg"
import Mobile from '../Mobile'




function Nav() {
  const [demo, SetDemo] = useState(false)
  let preDemo = () => {
    SetDemo(!demo)
  }

  const [work, setWork] = useState(false)
  let see = () => {
    setWork(!work)
  }

  const [toggle, setToggle] = useState(false)
  let handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className='bg-green-100 '>

      <nav className=' m-8 mt-0 bg-white '>
        <div className='flex justify-between items-center h-32'>
          <div className='flex space-x-9 items-center' >
            <img src={Logo} alt="logo" className='ml-1 w-28 h-9 ' />
            {/* button */}

          </div>

          <div className='hidden sm:grid grid-cols-5 space-x-3'>
            <button>Morweb CMS</button>
            <button>Solution</button>
            <button>Modules</button>
            <button>Pricing</button>
            <button>About</button>
          </div>

          <Mobile handleClick={handleClick} toggle={toggle} />
          <div className='space-x-8 hidden md:flex relative'>
            <div>
              <button className='px-5 py-2 bg-amber-600 rounded-3xl text-white font-bold hover:bg-blue-900' onClick={preDemo}>
              {demo ? <p> ❌ </p> : <p className='whitespace-nowrap'>Request Our demo</p>} </button>
            {
              demo &&
              <div className='grid grid-rows space-y-2 pl-4 bg-green-300 w-[380px] p-3 rounded-2xl mt-4 absolute'>
                {/* the form */}
                <div className='grid grid-rows'>
                  {/* firstname */}
                  <label htmlFor="name" className='text-sm'>
                    First Name:  </label>
                  <input type="text" className='bg-gray-100 border-gray-200 border-2 rounded-sm' />
                </div>

                {/* last name */}
                <div className='grid grid-rows'>
                  <label htmlFor="name" className='text-sm'>
                    Last Name:  </label>
                  <input type="text" className=' bg-gray-100 border-gray-200 border-2 rounded-sm' />
                </div>

                {/* Email */}
                <div className='grid grid-rows'>
                  <label htmlFor="name" className='text-sm'>
                    Email:  </label>
                  <input type="text" className=' bg-gray-100 border-gray-200 border-2 rounded-sm' />
                </div>

                {/* Organization Name */}
                <div className='grid grid-rows'>
                  <label htmlFor="name" className='text-sm'>
                    Organization:  </label>
                  <input type="text" className=' bg-gray-100 border-gray-200 border-2 rounded-sm' />
                </div>

                {/* Website Url Name */}
                <div className='grid grid-rows'>
                  <label htmlFor="name" className='text-sm'>
                    Website Url:  </label>
                  <input type="text" className=' bg-gray-100 border-gray-200 border-2 rounded-sm' />
                </div>

                {/* comment soon */}
                <div className='grid grid-rows'>
                  <label htmlFor="name" className='text-sm'>
                    How soon are you looking to redesign your Website❓  </label>
                  <input type="text" className=' bg-gray-100 border-gray-200 border-2 rounded-sm' />
                </div>

              </div>
            }
            </div>


            <button className='px-5 py-2 bg-green-600 rounded-3xl text-white font-bold hover:bg-blue-900 ' onClick={see}>
              {
                work ? <p>❌</p> : <p className='whitespace-nowrap'>See Our Work</p>
              }
            </button>
            {
              work &&
              <div className='flex h-40 w-96 gap-4 absolute top-10 right-80'>
                <img src={pastorialv} alt="iv" />
                <img src={fundraising} alt="flyer" />
                <img src={jotter} alt="jotter" />
                <img src={phanies} alt="flyer" />
              </div>
            }

          </div>


        </div>

      </nav>

      {/* below nav */}

      <div className='m-8'>
        {/* for phone */}
        <div className='md:hidden '>
          <p className=' border-b-amber-600  font-bold'>TOP RESOURCES</p>
          <div className='border-b-2 w-9 mb-6 border-b-amber-600 '></div>

          <p className='text-2xl mb-8 font-bold hover:text-pink-600'>    Best School Websites of  <br />2025  - Learn from  These  <br />Top School Web Design  <br />Examples... </p>
          <p className='font-bold'>    Murad Bushnaq  </p>
          <p className='text-sm'> Oct 28, 2025 . 12 mins read</p>
        </div>
        {/* for desktop */}
        <div className='hidden sm:grid text-3xl font-bold grid-cols-2 p-6 '>
          <div>
            <p className=' font-bold'>TOP RESOURCES</p>
            <div className='border-b-3 w-18 pb-4 mb-8 border-b-amber-600 '>

            </div>
            <p className='text-5xl mb-8 font-bold '>    Best School Websites <br /> of 2025 - Learn   from <br />These Top  Schools  <br />Web Design <br /> Examples  </p>
            {/* small pics */}
            <div className='flex'>
              <img src={passport} alt="" className=' h-16' />

              <div>
                <p className='font-bold text-sm'>    Murad Bushnaq  </p>
                <p className='text-sm'> Oct 28, 2025 . 12 mins read</p>
              </div>
            </div>

          </div>

          {/* image */}
          <div>
            <img src={reader} alt="reader" className='w-[700px] rounded-2xl' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Nav