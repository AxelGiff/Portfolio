import React from 'react'

export default function Others () {
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row items-center gap-12 m-64 xl:m-48 sm:mt-0 sm:gap-24'>
                <div >
              <h2 className='about-title text-white text-5xl block ml-8 xl:ml-56 text-center block mt-24 mb-12 '>Authentication system</h2>
              <h2 className='about-title text-white italic text-xl ml-16 xl:ml-64 leading-2 mb-24'>An authentication system has been designed and deployed with the primary objective of enabling users to securely log in and access their personalized decks of flashcards. By incorporating this system, users can enjoy a seamless experience, tailored to their individual preferences and learning needs. Additionally, this authentication mechanism ensures the privacy and security of user data, fostering trust and reliability within the platform.</h2>
              </div>
              <img src={require("./images/sinscrire.png")} width={1100} height={650} alt="screen todo list" loading="lazy" className=" flex justify-center items-center -z-[-10] shadow-lg  sm:visible translate-x-1.5 [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
              
              <div>

              </div>
    </div>
  )
}
