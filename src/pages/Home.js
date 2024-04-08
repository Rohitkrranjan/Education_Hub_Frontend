import React from "react";


function Home() {
 
  return (
    <>
      <main className="bg-[#282c34]">
        {/* first section */}
        <section>
          <div className="flex justify-evenly items-center">
            <div className="ml-24 relative mt-[80px]">
              <p className="text-white font-medium "></p>
              <h1 className="text-white text-4xl font-extrabold">Welcome to <span className="text-red-700">Dronacharya </span><br/>Way2ITs </h1>
              <p className="text-white font-bold mt-3 text-lg">We have a large library of courses taught by skilled and qualified <br/> faculties at a very affordable rate</p>
              <p className="text-white font-bold mt-3 text-lg">
                Are you ready to take your preparation to the next level ?
               <br/> Look no further! At <span className="text-yellow-500"> Dronacharya </span>Way2ITs , we
                specialize in <br/> providing innovative services and solutions
                tailored to meet your <br/> unique needs.
              </p>

              <div className="flex items-center mt-6">
                <a href="/contact">
                  <button className="mt-2 bg-blue-400 hover:bg-red-400 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-white rounded-xl w-40">
                    Connect Now
                  </button>
                </a>
                <a href="/service">
                 <button className="mt-2 cursor-pointer py-2 font-semibold text-white rounded-xl w-40 border border-yellow-500 hover:bg-yellow-400 hover:text-white ml-3">Learn More</button>
                </a>
              </div>
            </div>

            <div className="mt-[80px] ml-12">
              <img src="/images/home.png" alt="homeimage"/>
            </div>
          </div>
        </section>


        {/* second section */}

        <section>
          <div className="flex justify-evenly mt-10 text-black h-[100px] items-center bg-[#F6F1F1] border rounded-3xl w-[75%] ml-48">
            <div className="">
              <h2 className="text-black text-3xl text-center font-extrabold">50+</h2>
              <p className="capitalize">registered companies</p>
            </div>

            <div className="">
              <h2 className="text-black text-3xl text-center font-extrabold">100,00+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="">
              <h2 className="text-black text-3xl text-center font-extrabold">500+</h2>
              <p>Well known developers</p>
            </div>

            <div>
              <h2 className="text-black text-3xl text-center font-extrabold">24/7</h2>
              <p>Services</p>
            </div>

            </div>
        </section>

        {/* 3rd section */}

        <section>
          <div className="flex justify-evenly items-center">
          <div className="mt-12">
              <img src="/images/home2.png" alt="homeimage"/>
            </div>
            <div className="">
              <p className="text-white font-medium">We are here to help you</p>
              <h1 className="text-white text-6xl font-medium">Get Started <span className="text-red-700">Today </span><br/> </h1>
              <p className="text-white font-bold mt-3">
                Ready to take the first step towards a more efficient abd secure IT <br/> infrastructure ? Contact us today for a free consultation  and let's discuss <br/> how <span className="text-yellow-400"> Dronacharya </span> can help you business thrive in the digital age.
              </p>

              <div className="flex items-center mt-6">
                <a href="/contact">
                  <button className="mt-2 bg-blue-400 hover:bg-red-400 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-white rounded-xl w-40">
                    Connect Now
                  </button>
                </a>
                <a href="/service">
                 <button className="mt-2 cursor-pointer py-2 font-semibold text-white rounded-xl w-40 border border-yellow-500 hover:bg-yellow-400 hover:text-white ml-3">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
