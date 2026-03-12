import { useState } from 'react'

function Home() {
    const doubleText = [
        "Home", "About", "Portfolio", "Service", "Contact", "Unigue stays", "Categories", "Things to do"
    ]

    const dynamicText = [
        "1", "2", "3", "4", "5", "6", "7", "Villa rentals", "Holiday rentals", "Holiday rentals", "Flat rentals", "Villa rentals", "Cottage rentals", "Holiday rentals", "Flat rentals", "Cottage rentals", "Villa rentals"
    ]

    const [display, setDisplay] = useState("Popular")
    // const [histories, setHistories] = useState("Historic")
    // const [coastaly, setCoastaly] = useState("Coastal")
    return (
        
        <div className='ml-8' >

         
            <div className='space-x-10 hidden md:flex'>
                {doubleText.map((text) => (
                    <button className={`${display === text && "border-b-2"} cursor-pointer `} onClick={() => {setDisplay(text)}}>{text}</button>
                ))}
            </div >
             { display === "Home" &&
                <div className='hidden md:grid grid-cols-6'> 
                {dynamicText.map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Aberfeldy</p>
                            <p>{text}</p>
                            </a>
                             ))}
           </div>        
             }
             {/* error */}
               
             <div className='sm:flex flex-cols-3 space-x-8 text-2xl md:hidden bg-amber-500'>
                {doubleText.splice(0, 5).map((text) => (
                    <button className={`${display === text && "border-b-2 "} cursor-pointer `} onClick={() => {setDisplay(text)}}>{text}</button>
                ))}
            </div >      
            
            {/* home nav */}
                         { display === "Home" &&
                <div className='grid grid-cols-1 justify-between md:hidden bg-blue-700 text-white w-64'> 
                {dynamicText.splice(0, 7).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Home link  {text}</p>
                            {/* <p>{text}</p> */}
                            </a>
                             ))}
           </div>        
             }
            
            {/* about nav */}

            { display === "About" &&
                <div className='grid grid-cols-1 justify-between md:hidden bg-red-600 text-white w-64'> 
                {dynamicText.splice(0, 7).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>About link  {text}</p>
                            {/* <p>{text}</p> */}
                            </a>
                             ))}
           </div>        
             }

{/* portfolio nav */}
 { display === "Portfolio" &&
                <div className='grid grid-cols-1 justify-between md:hidden bg-black text-white w-64'> 
                {dynamicText.splice(0, 7).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Portfolio link  {text}</p>
                            {/* <p>{text}</p> */}
                            </a>
                             ))}
           </div>        
             }


{/* Service nav */}
 { display === "Service" &&
                <div className='grid grid-cols-1 justify-between md:hidden bg-green-700 text-yellow-200 w-64'> 
                {dynamicText.splice(0, 7).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>our Services {text}</p>
                            {/* <p>{text}</p> */}
                            </a>
                             ))}
           </div>        
             }

{/* Contact Nav */}
 { display === "Contact" &&
                <div className='grid grid-cols-1 justify-between md:hidden bg-pink-700 text-yellow-200 w-64'> 
                {dynamicText.splice(0, 7).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>our Services {text}</p>
                            {/* <p>{text}</p> */}
                            </a>
                             ))}
           </div>        
             }

        </div>
    )
}

export default Home