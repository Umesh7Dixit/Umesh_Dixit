"use client"

import  { FaXTwitter, FaGithub , FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="mb-8 mt-20" >
        <div className="flex justify-center gap-8 items-center">
            <a href="https://twitter.com/umesh7dixit" target="_blank" rel="noopener noreferrer">
                <FaXTwitter  fontSize={25} className="opacity-50" />
            </a>
             <a href="https://github.com/Umesh7Dixit" target="_blank" rel="noopener noreferrer">
                <FaGithub fontSize={25} className="opacity-50" />
            </a>
             <a href="https://www.linkedin.com/in/umesh-dixit" target="_blank" rel="noopener noreferrer">
                <FaLinkedin fontSize={25} className="opacity-50" />
            </a>
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-slate-700">Designed by Umesh Dixit</p>
    </div>
  )
}

export default Footer