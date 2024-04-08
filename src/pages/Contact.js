import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth";

function Contact() {

  const [contact,setContact] = useState({
    name:"",
    email:"",
    message:""
  })

  const [userData , setUserData] = useState(true);

  const {user} = useAuth();

  if(userData && user)
  {
    setContact({
      name:user.name,
      email:user.email,
      message:""
    })
    setUserData(false);
  }
  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]:value
    })

  }

  // submit form

  const submitForm = async (e)=>{
      //  e.preventDefault();
      //  console.log(contact);
      try {
        const response = await fetch(`http://localhost:5000/api/form/contact`,{
          method:'post',
          body:JSON.stringify(contact),
          headers:{
            'Content-Type':'application/json'
          }
        });

        if(response.ok){
          setContact({ name: "", email: " ", message: " " });
          // const data = await response.json();
          // alert("Message send successfully!");
          toast.success("Message send successfully!")
        }
        
      } catch (error) {
        alert("message not send")
        console.log(error)
      }
  }


  return (
    <main>
      <section>
        <div className="flex justify-evenly items-center h-screen bg-[#282c34] ">
          <div className="">
            <h2 className="text-white text-4xl font-extrabold mb-3">
              Contact Us
            </h2>
            <p className="text-white text-xl">
              For any queries, Please reach out to us. Our Support <br /> team
              will get back to you within 24 hours.
            </p>

            <p className="text-white mt-3 flex ">
              {" "}
              <MdEmail />{" "}
              <span className="ml-5 mt-[-5px]">
                dronacharyatext2024@gmail.ocm
              </span>{" "}
            </p>
            <p className="text-white mt-2 flex">
              <FaPhone />{" "}
              <span className="ml-5 mt-[-5px]">+91 12345-67890</span>
            </p>
            <img src="https://pwskills.com/images/contactUs/employeesHelpingCustomers.svg" alt="contact" />
          </div>

          {/* conatact form */}

          <div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold text-white">
                Name
              </label>
              <input
                className="bg-transparent px-2 py-1 border  text-white w-[140%]"
                required
                type="name"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={contact.name}
                onChange={handleInput}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-white">
                Email
              </label>
              <input
                className="bg-transparent px-2 py-1 border text-white w-[140%]"
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={contact.email}
                onChange={handleInput}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-white">
                Message
              </label>
              <textarea
              name="message"
               id="message"
                rows="6"
                col="30"
                className="bg-transparent border w-[140%] text-white "
                value={contact.message}
                onChange={handleInput}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-3 bg-red-400 text-white hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold w-[150px] rounded-2xl" onClick={submitForm}> Submit</button>
          </div>
        </div>

    {/* map section */}
    <section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57957.636195894476!2d84.94088081684794!3d24.783388540450215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a440a1b3c1f%3A0xcef6b223bdbf34a6!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708540940149!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

      </section>
    </main>
  );
}

export default Contact;
