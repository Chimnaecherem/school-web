import facebook from "../../assets/images/facebook.png"
import mail from "../../assets/images/mail.png"
import apple from "../../assets/images/apple.png"
import logo from "../../assets/images/logo.png"
import google from "../../assets/images/google.png"
import schoollogo from "../../assets/images/schoollogo.png"
import nonp from "../../assets/images/nonprofitp.png"
import hospital from "../../assets/images/hospital.png"
import people from "../../assets/images/people.jpg"


function Footer() {
  return (

  
<div>
      {/* mobile view */}
<div >
    <div className=' md:hidden bg-blue-950 text-white p-8'>
{/* logo line  */}
<div className=' justify-between pb-2'>
    <img src={logo} alt="" className='h-8 '/>
    
    
   
</div>
<hr  className='pb-6'/>
{/* solution & co. div */}
<div className='text-center'>
{/* solution */}
    <div>
<p className='text-white pb-3 pl-10'>Solutions</p>
{/* items */}
<div className='pb-12 space-y-3 justify-center items-center text-center'>
    <div className='flex space-x-3 '>
<img src={schoollogo} alt="" className='h-7' />
<p>Schools & Higher Education</p>
    </div>

    <div className='flex space-x-3'>
<img src={nonp} alt="" className='h-7' />
<p>Nonprofit Organization</p>
    </div>

    <div className='flex space-x-3'>
<img src={people} alt="" className='h-7' />
<p>Association & Membership</p>
    </div >

    <div className='flex space-x-3'>
<img src={hospital} alt=""  className='h-7'/>
<p>Hospitals and healthcare</p>
    </div>

</div>
    </div >

    {/* about and co. */}
    <div className='text-center '>
        {/* about */}
<div>
    <p className=' font-bold text-xl'>About</p>
<p><a href="">Morweb CMS</a></p>
<p><a href="">Modules</a></p>
<p><a href="">Showcase</a></p>
<p><a href="">Testimonies</a></p>
</div>

{/* resources */}
<div>
    <p className=' pt-6 font-bold text-xl'>Resources</p>
<p><a href="">Blog</a></p>
<p><a href="">Support</a></p>
<p><a href="">FAQs</a></p>
<p><a href="">Contact Us</a></p>
</div>

{/* Connect */}
<div>
    <p className='pt-6 font-bold text-xl'>Connect</p>
<p>403-263-1666</p>
<p className='pb-5'><a href="">info@morwe.org</a></p>
<p>Monday-Friday</p>
<p>9:00am-%:00pm MST</p>
</div>
    </div>
</div>

{/* Top Resources */}
<div>
    <p className='font-bold text-2xl pt-8 text-center pb-3'>Top Resources</p>
    <div className='grid grid-cols-1 text-center  space-y-3 pb-10'>
        <p className='hover:text-red-600'><a href="">Best School Website Design</a></p>
        <p className='hover:text-red-600'><a href="">Best Nonprofit Website</a></p>
        <p className='hover:text-red-600'><a href="">Website Builders for Nonprofits</a></p>
        <p className='hover:text-red-600'><a href="">Website Builders for School</a></p>
        <p className='hover:text-red-600'><a href="">Best Medical Website Builders</a></p>
        <p className='hover:text-red-600'><a href="">Mentorship Website Builders</a></p>
        <p className='hover:text-red-600'><a href="">Best Collaege Websites</a></p>
        <p className='hover:text-red-600'><a href="">Best Association Websites</a></p>
        
    </div>
</div>

{/* socialmedia icons */}
    <div className='flex space-x-3 pb-2 justify-items-center'>
<a href="http://localhost:5173/"> <img src={mail} alt="" className='h-8 space-x-3' /></a>
<a href="http://localhost:5174/"><img src={facebook} alt="" className='h-8 space-x-3' /></a>
<a href=""><img src={apple} alt=""  className='h-8 space-x-3'/></a>
<a href=""> <img src={google} alt=""  className='h-8 space-x-3'/></a>
    </div>

<hr className='pb-5' />
<p>© Copyright 2025 Morweb.org.All right reserved</p>
    </div>
    </div>


{/* desktop view */}
    <div>
    <div className='hidden md:block bg-blue-950 text-white p-16'>
{/* logo line  */}
<div className='flex justify-between pb-6'>
    <img src={logo} alt="" className='h-9 '/>
    
    {/* socialmedia icons */}
    <div className='flex space-x-3'>
<a href="http://localhost:5173/"> <img src={mail} alt="" className='h-8 space-x-3' /></a>
<a href="http://localhost:5174/"><img src={facebook} alt="" className='h-8 space-x-3' /></a>
<a href=""><img src={apple} alt=""  className='h-8 space-x-3'/></a>
<a href=""> <img src={google} alt=""  className='h-8 space-x-3'/></a>
    </div>
   
</div>
<hr  className='pb-6'/>
{/* solution & co. div */}
<div className='grid grid-cols-2 space-x-5 justify-between'>
{/* solution */}
    <div>
<p className='text-white pb-3 pl-10'>Solutions</p>
{/* items */}
<div className='grid grid-cols-2 space-y-3'>
    <div className='flex space-x-3'>
<img src={schoollogo} alt="" className='h-7' />
<p>Schools & Higher Education</p>
    </div>

    <div className='flex space-x-3'>
<img src={nonp} alt="" className='h-7' />
<p>Nonprofit Organization</p>
    </div>

    <div className='flex space-x-3'>
<img src={people} alt="" className='h-7' />
<p>Association & Membership</p>
    </div >

    <div className='flex space-x-3'>
<img src={hospital} alt=""  className='h-7'/>
<p>Hospitals and healthcare</p>
    </div>

</div>
    </div >

    {/* about and co. */}
    <div className='grid grid-cols-3 '>
        {/* about */}
<div>
    <p className='pb-2 font-bold text-xl'>About</p>
<p><a href="">Morweb CMS</a></p>
<p><a href="">Modules</a></p>
<p><a href="">Showcase</a></p>
<p><a href="">Testimonies</a></p>
</div>

{/* resources */}
<div>
    <p className='pb-2 font-bold text-xl'>Resources</p>
<p><a href="">Blog</a></p>
<p><a href="">Support</a></p>
<p><a href="">FAQs</a></p>
<p><a href="">Contact Us</a></p>
</div>

{/* Connect */}
<div>
    <p className='pb-2 font-bold text-xl'>About</p>
<p><a href="">403-263-1666</a></p>
<p className='pb-5'><a href="">info@morwe.org</a></p>
<p><a href="">Monday-Friday</a></p>
<p><a href="">9:00am-%:00pm MST</a></p>
</div>
    </div>
</div>

{/* Top Resources */}
<div>
    <p className='font-bold text-2xl pb-3'>Top Resources</p>
    <div className='grid grid-cols-4 space-y-3 pb-5'>
        <p className='hover:text-red-600'><a href="">Best School Website Design</a></p>
        <p className='hover:text-red-600'><a href="">Best Nonprofit Website</a></p>
        <p className='hover:text-red-600'><a href="">Website Builders for Nonprofits</a></p>
        <p className='hover:text-red-600'><a href="">Website Builders for School</a></p>
        <p className='hover:text-red-600'><a href="">Best Medical Website Builders</a></p>
        <p className='hover:text-red-600'><a href="">Mentorship Website Builders</a></p>
        <p className='hover:text-red-600'><a href="">Best Collaege Websites</a></p>
        <p className='hover:text-red-600'><a href="">Best Association Websites</a></p>
        
    </div>
</div>
<hr className='pb-5' />
<p>© Copyright 2025 Morweb.org.All right reserved</p>
    </div>
    </div>

    </div>
  )
}

export default Footer