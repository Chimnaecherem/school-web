
import website from "../../assets/images/web design.jpg"
import cta from "../../assets/images/strong calls.jpg"
import  yellowBoy from "../../assets/images/yellow boy.jpg"
import  best from "../../assets/images/computer.jpg"
import  webDes from "../../assets/images/webdesign.jpg"
import  pne from "../../assets/images/PNETWORK.jpg"
import  workEnd from "../../assets/images/working end.jpg"
import  tax from "../../assets/images/tax.jpg"
import  operator from "../../assets/images/operators.jpg"
import  robot from "../../assets/images/LABROBOT.jpg"

function Body() {

  const picture = [
    {photo: website, text: "People form the initial perception of your school on your website and not so much at the school entrance. In today's digital world, a school website needs to reflect its culture which consists of their values, mission, curriculum, teachers and the community they serve. A thoughtfully crafted website serves as the first conversation between parents and the school, providing a glimpse into the organization and how it will guide your child's education over the years. Therefore, your website needs to guide the expectations of potential and current families, students, and employees."},
    {photo: cta, text: "To inspire your school's website strategy, we've curated a selection of top-performing school websites from K-12, charter schools, stem schools and higher education institutions. These examples demonstrate how exceptional school web design can help drive online engagement, build trust, and increase student enrollment."},
    {photo: best, text: "What Makes an Exceptional School Website Design?An effective school website isn't just about looking good-it should be functional, accessible, and aligned with 00:09 the school's goals. Based on recent UX studies and education industry benchmarks, here are the core elements that make a website truly exceptional of prospective students interact with school websites primarily on mobile device"},
    {photo: webDes, text: "75% Mobile Responsivenes • 67% of parents and nearly 75% of prospective students interact with school websites primarily on mobile devices. A responsive design ensures your site performs flawlessly on all screen sizes-phones, tablets, and desktops. From tap-friendly navigation to fast-loading mobile layouts, this is no longer optional- it's essential. Why it matters: Google prioritizes mobile-first indexing, so if your site isn't mobile-friendly, your rankings (and reach) will suffer. Plus, frustration from poor mobile UX can deter applicants and disengage donors." },
    {photo: yellowBoy, text: "People form the initial perception of your school on your website and not so much at the school entrance. In today's digital world, a school website needs to reflect its culture which consists of their values, mission, curriculum, teachers and the community they serve. A thoughtfully crafted website serves as the first conversation between parents and the school, providing a glimpse into the organization and how it will guide your child's education over the years. Therefore, your website needs to guide the expectations of potential and current families, students, and employees." },
    {photo: pne, text: "To inspire your school's website strategy, we've curated a selection of top-performing school websites from K-12, charter schools, stem schools and higher education institutions. These examples demonstrate how exceptional school web design can help drive online engagement, build trust, and increase student enrollment."},
    {photo: workEnd, text: "75% Mobile Responsivenes • 67% of parents and nearly 75% of prospective students interact with school websites primarily on mobile devices. A responsive design ensures your site performs flawlessly on all screen sizes-phones, tablets, and desktops. From tap-friendly navigation to fast-loading mobile layouts, this is no longer optional- it's essential. Why it matters: Google prioritizes mobile-first indexing, so if your site isn't mobile-friendly, your rankings (and reach) will suffer. Plus, frustration from poor mobile UX can deter applicants and disengage donors."  },
    {photo: tax, text: "To inspire your school's website strategy, we've curated a selection of top-performing school websites from K-12, charter schools, stem schools and higher education institutions. These examples demonstrate how exceptional school web design can help drive online engagement, build trust, and increase student enrollment."},
    {photo: operator, text: "People form the initial perception of your school on your website and not so much at the school entrance. In today's digital world, a school website needs to reflect its culture which consists of their values, mission, curriculum, teachers and the community they serve. A thoughtfully crafted website serves as the first conversation between parents and the school, providing a glimpse into the organization and how it will guide your child's education over the years. Therefore, your website needs to guide the expectations of potential and current families, students, and employees." },
    {photo: robot, text: "To inspire your school's website strategy, we've curated a selection of top-performing school websites from K-12, charter schools, stem schools and higher education institutions. These examples demonstrate how exceptional school web design can help drive online engagement, build trust, and increase student enrollment." }
  ]


  return (
    <div >

{/* for mobile view */}
<div className='space-y-6 pt-6  justify-items-center md:hidden'>
{
picture.map((pictures) =>(
 <figure className='justify-items-center'>
 <img src={pictures.photo} alt="" className='h-60 w-94 border-2  rounded-2xl border-amber-500'/>

 <figcaption>
  <p className='text-justify p-5 hover:bg-amber-300 rounded-2xl mt-2'>{pictures.text}</p>
 </figcaption>
 </figure>
 
))
}


</div>

{/* for desktop view */}
        <div className='space-y-6 pt-6 justify-items-center hidden sm:grid grid-cols-2 space-x-6'>
{
picture.map((pictures) =>(
 <figure className='justify-items-center'>
 <img src={pictures.photo} alt="" className='h-60 w-94 border-2  border-amber-500 rounded-3xl'/>

 <figcaption>
  <p className='text-justify p-5 hover:bg-amber-300 rounded-2xl mt-2'>{pictures.text}</p>
 </figcaption>
 </figure>
 
))
}


</div>


    </div>
  )
}

export default Body