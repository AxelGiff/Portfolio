import React from 'react'
import { useTranslation } from 'react-i18next';

import BadgeTextGradient from './BadgeGradient.tsx';
import IconCafeOutline from './lib/icons/cafe.jsx';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact-container" className="relative  mt-48"> {/* POUR QUE LE GRADIENT SOIT EN DESSOUS, IL FAUT METTRE LE CONTAINER EN RELATIVE */}

    <BadgeTextGradient text={t('Contact')} />
<h1 className='about-title text-white text-5xl block text-center block mb-32'> {t('Want to discuss ?')} </h1>  
<div class="gradient-02 absolute z-[-1] right-3/4 left-1/4 bottom-0 w-1/2 h-[80%] opacity-30"></div>

</section>
  )
}
