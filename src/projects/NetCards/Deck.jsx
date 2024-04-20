import React from 'react'

export default function Deck () {
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row items-center gap-12 m-48 sm:mt-0 sm:gap-24'>
                      <img src={require("./images/netcards4.png")} width={1000} height={650} alt="screen todo list" loading="lazy" className="translate-x-1.5 flex ml-24 justify-center items-center -z-[-10] shadow-lg invisible sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />

                <div >
              <h2 className='about-title text-white text-5xl block mr-24 xl:mr-48 text-center block mt-24 mb-12 '>Deck system</h2>
              <h2 className='about-title text-white italic text-xl  xl:mr-12 leading-snug mb-24'>The deck system empowers users to effortlessly create, organize, and study their personalized flashcards, fostering a dynamic learning environment tailored to individual needs and preferences.</h2>
              </div>
              
              <div>

              </div>
    </div>
  )
}
