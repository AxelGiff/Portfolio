import React from 'react'
import BadgeTextGradient from './BadgeGradient.tsx';
import IconCafeOutline from './lib/icons/cafe.jsx';
import {SignupFormDemo} from './FormContact.tsx';

export default function Contact() {
  return (
    <section id="contact-container" className="relative  mt-48"> {/* POUR QUE LE GRADIENT SOIT EN DESSOUS, IL FAUT METTRE LE CONTAINER EN RELATIVE */}

    <BadgeTextGradient text="Contact" />
<h1 className='about-title text-white text-5xl block text-center block mb-32'> Want a coffee  ? </h1>  
<SignupFormDemo />
</section>
  )
}
