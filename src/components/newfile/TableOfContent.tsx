import { useState } from 'react'

function TableOfContent() {

const [fill, setFill] = useState(false)
let want=()=>{
  setFill(!fill)
}

  return (
    <div className=' md:grid grid-cols-2'>
 {/* table of content ▪ */}
 <div >
<div className=' text-sm  space-x-4 bg-gray-200 mx-2 rounded-2xl  font-bold p-6 md:text-2xl' >
   <p> <a href="" className=''>Table of Contents</a> </p>
  <p> ↔  <a href=""> Best school website of 2025</a> </p>
   <p>↔ <a href="">Type of school website, Public vs Private</a></p>
<p>↔ <a href="">Tips for designing your own school website</a></p>
<p> ↔ <a href="">key features every website needs</a></p>
<p> ↔ <a href="">frequently asked question</a></p>
<p>↔ <a href="">Final Thoughts</a></p>

</div>

{/* the form */}

<div>
  <div className=''>
    <button onClick={want} className=''>
      {fill ? <p>❌</p> :  <p className='font-bold text-3xl ml-8 text-center pt-8 text-green-900 font-serif'>Want an Engaging <br />Website❓ 👇</p>
     }</button>
     { fill &&
     
     <div  className='grid grid-rows space-y-2 pl-4 bg-green-300 w-[380px] p-3 rounded-2xl mt-4'>
      {/* the form */}
<div className='grid grid-rows'>
  {/* firstname */}
  <label htmlFor="name"  className='text-sm'>
  First Name:  </label>
  <input type="text" className='bg-gray-100 border-gray-200 border-2 rounded-sm'/>
</div>

{/* last name */}
<div className='grid grid-rows'>
  <label htmlFor="name"  className='text-sm'>
  Last Name:  </label>
  <input type="text" className=' bg-gray-100 border-gray-200 border-2 rounded-sm'/>
</div>

{/* Email */}
<div className='grid grid-rows'>
  <label htmlFor="name" className='text-sm'>
 Email:  </label>
  <input type="text" className=' bg-gray-100 border-gray-200 border-2 rounded-sm'/>
</div>

{/* Organization Name */}
<div className='grid grid-rows'>
  <label htmlFor="name"  className='text-sm'>
  Organization:  </label>
  <input type="text"  className=' bg-gray-100 border-gray-200 border-2 rounded-sm'/>
</div>

{/* Website Url Name */}
<div className='grid grid-rows'>
  <label htmlFor="name"  className='text-sm'>
  Website Url:  </label>
  <input type="text"  className=' bg-gray-100 border-gray-200 border-2 rounded-sm'/>
</div>

{/* comment soon */}
<div className='grid grid-rows'>
  <label htmlFor="name"  className='text-sm'>
  How soon are you looking to redesign your Website❓  </label>
  <input type="text"  className=' bg-gray-100 border-gray-200 border-2 rounded-sm'/>
</div>

  </div>

     }
  </div>
  


  
</div>


 </div>
{/* the left row */}
 <div className=''>
  <div className='p-'>
<p className='md:hidden p-6 mt-5 text-justify bg-yellow-100 hover:bg-green-200 '>

 People form the initial perception of your school on your website and not so much at the school entrance. In today's digital world, a school website needs to reflect its culture which consists of their values, mission, curriculum, teachers and the community they serve. A thoughtfully crafted website serves as the first conversation between parents and the school, providing a glimpse into the organization and how it will guide your child's education over the years.
 Therefore, your website needs to guide the expectations of potential and current families, students, and employees.
</p>
</div>

{/* for desktop */}

<div className='hidden md:block p-4 pt-0 '>
  <p className=' p-6 text-justify bg-yellow-100 hover:bg-green-300'>People form the initial perception of your school on your website and not so much at the school entrance. In today's digital world, a school website needs to reflect its culture which consists of their values, mission, curriculum, teachers and the community they serve. A thoughtfully crafted website serves as the first conversation between parents and the school, providing a glimpse into the organization and how it will guide your child's education over the years.
 Therefore, your website needs to guide the expectations of potential and current families, students, and employees.
</p>
</div>
 </div>





    </div>
  )
}

export default TableOfContent