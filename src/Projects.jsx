import React from 'react'
import BadgeTextGradient from './BadgeGradient.tsx';
import ProjectCard from './Project-card.tsx';

export default function Projects() {
  return (
    <section id="project-container" className="relative  mt-48"> {/* POUR QUE LE GRADIENT SOIT EN DESSOUS, IL FAUT METTRE LE CONTAINER EN RELATIVE */}

    <BadgeTextGradient text="Projects" />
<h1 className='about-title text-white text-5xl block text-center  block mb-32'>My work</h1>
<div className="container-project max-w-5xl mx-auto  px-8">
        <ProjectCard link="#" img={require("./images/screen_dash_admin_pres.png")} title="Perform Vision" desc="Web App | Providing in-house"   iconsToShow={["HTML", "Tailwind", "PHP","PostgreSQL","JS"]}
 />
        
       
        <div class="empty">
            <div class="line-with-circle">
                <div class="circle"></div>
              </div>
        </div>


        <div class="empty"><div class="line-with-circle">
            <div class="circle one-fifth"></div>
          </div></div>

        <ProjectCard link="#" img={require("./images/Netcards.PNG")} title="Netcards" desc="Web App | Education" iconsToShow={["HTML", "Tailwind", "JS","PHP","MySQL"]}/>
        <ProjectCard link="#" img={require("./images/SafePage.PNG")} title="SafePage" desc="Blog | Welfare & Healthy" iconsToShow={["HTML", "CSS", "JS"]}/>
        <div class="empty"><div class="line-with-circle">
            <div class="circle two-fifth"></div>
          </div></div>
        <div class="empty"><div class="line-with-circle">
            <div class="circle three-fifth"></div>
          </div></div>

        <ProjectCard link="#" img={require("./images/todolist.PNG")} title="Todo List" desc="Web App | Productivity Management" iconsToShow={["React", "JavaScript", "CSS"]}/>
        <ProjectCard link="#" img={require("./images/refonte_LUTC_stage.png")} title="Level Up Tech Consulting" desc="Website | Digital Accessibility" iconsToShow={["WordPress", "Figma", "HTML","CSS", "Notion"]}/>
        <div class="empty"><div class="line-with-circle">
            <div class="circle four-fifth"></div>
          </div></div>
           <div class="gradient-02 absolute z-[-1] right-1/4 bottom-0 w-1/2 h-[80%] opacity-30"></div>
         

    </div>

</section>
  )
}
