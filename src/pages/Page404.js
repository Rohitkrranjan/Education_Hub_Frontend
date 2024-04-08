import React from 'react'

function Page404() {
  return (
    <div className="flex justify-center items-center h-screen text-white">
        <div>
            <img className="mt-[-50px]" src='https://static.uacdn.net/production/_next/static/images/error.svg?q=75&auto=format%2Ccompress&w=828' alt='' />
            <p className="text-yellow-400 font-bold text-4xl items-center flex justify-center mb-2"> Oops! Page not found... </p>
            <h3 className="font-bold text-xl items-center flex justify-center">Page or Resource you are trying <br/>
                to access doesn't exists.</h3>

                <p className="font-bold text-xl items-center flex justify-center">You may want to check :</p>
               <div className="flex justify-evenly">
               <a href='/'><button className="mt-3 bg-red-400 text-white hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold w-[150px] rounded-2xl">Return Home</button></a>
               <a href='/contact'><button className="mt-3 bg-red-400 text-white hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold w-[150px] rounded-2xl">Contact Us</button></a>
               </div>
        </div>
    </div>
  )
}

export default Page404