"use client";
import React, { useState,useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const EmailSection = () =>
 {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();

      const serviceId = "service_o6k85xj";
      const templateId = "template_kqlwkk3";
      const publicKey = "Uls4lRKRITBVREoAz";

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'KEVIN',
        message: message, 
      };
      

     emailjs.send(serviceId,templateId,templateParams,publicKey)
     .then((response) => {
      console.log('Email sent successfully! ',response);
      setEmailSubmitted(true);
      setName('');
      setSubject('');
      setEmail('');
      setMessage('');
     }) 
     .catch((error) => {
      
      console.error('Error in sending Email!',error);
      toast.error('Error sending email. Check Internet!.');
      setEmailSubmitted(false);
     });
      
    }
    useEffect(() => {
      if (emailSubmitted) {
        const timer = setTimeout(() => {
          setEmailSubmitted(false);
        }, 7000); 
  
        return () => clearTimeout(timer);
      }
    }, [emailSubmitted]);
   
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md overflow-auto">
          {" "}
          
I'm actively seeking new opportunities and always eager to connect. Whether you have inquiries or simply want to say hello, feel free to reach out! I'll do my best to respond promptly.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/kevcodeus">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kevin-pawathu-thankachen-09a122294/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        
        
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block text-sm mb-2 font-medium"
              >
                Your Name
              </label>
              <input
              
                value={name}
                type="text"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
             
                value={email}
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="test@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
              
                value={subject}
                type="text"
                id="subject"
                required
                onChange={(e) => setSubject(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>

              <textarea
              
                value={message}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {emailSubmitted &&(
                <p className="text-green-500 text-2xl mt- font-semibold ">Email sent successfully!</p>
              )
            }
          </form>      
      </div>
    </section>
  );
};

export default EmailSection;
