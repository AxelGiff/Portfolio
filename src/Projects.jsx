import React from 'react'
import BadgeTextGradient from './BadgeGradient.tsx';
import ProjectCard from './Project-card.tsx';
import {Carousel} from './Carousel.tsx';


export default function Projects() {

  const slideData = [
    {
      id : "1", 
      title: "Qualoto",
      button: "Explore Component",
      src: require("./images/Qualoto.png"),
    },
    {
      id: "2",
      title: "Perform Vision",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      title: "NetCards",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      title: "Classification de genre et d'âge (CNN)",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "5",
      title: "Todo List",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  
  
  ]
    ;
  return (
    <section id="project-container" className="relative  mt-48"> {/* POUR QUE LE GRADIENT SOIT EN DESSOUS, IL FAUT METTRE LE CONTAINER EN RELATIVE */}

    <BadgeTextGradient text="Projects" />
<h1 className='about-title text-white text-5xl block text-center  block mb-32'>My work</h1>
<div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
<div className="container-project max-w-5xl mx-auto px-8 flex flex-wrap justify-center">


        <ProjectCard id="1" img={require("./images/screen_dash_admin_pres.png")} title="Perform Vision" desc="Web App | Providing in-house"   iconsToShow={["HTML", "Tailwind", "PHP","PostgreSQL","JS"]}
 />
        
       
        <div class="empty">
            <div class="line-with-circle">
                <div class="circle"></div>
              </div>
        </div>


        <div class="empty"><div class="line-with-circle">
            <div class="circle one-fifth"></div>
          </div></div>

        <ProjectCard id="2" img={require("./images/Netcards.PNG")} title="Netcards" desc="Web App | Education" iconsToShow={["HTML", "Tailwind", "JS","PHP","MySQL"]}/>
        <ProjectCard id="3" img={require("./images/SafePage.jpg")} title="SafePage" desc="Blog | Welfare & Healthy" iconsToShow={["HTML", "CSS", "JS"]}/>
        <div class="empty"><div class="line-with-circle">
            <div class="circle two-fifth"></div>
          </div></div>
        <div class="empty"><div class="line-with-circle">
            <div class="circle three-fifth"></div>
          </div></div>

        <ProjectCard id="4" img={require("./images/todolist.PNG")} title="Todo List" desc="Web App | Productivity Management" iconsToShow={["React", "JavaScript", "CSS"]}/>
        <ProjectCard id="5" img={require("./images/refonte_LUTC_stage.jpg")} title="Level Up Tech Consulting" desc="Website | Digital Accessibility" iconsToShow={["WordPress", "Figma", "HTML","CSS", "Notion"]}/>
        <div class="empty"><div class="line-with-circle">
            <div class="circle four-fifth"></div>
          </div></div>
           <div class="gradient-02 absolute z-[-1] right-1/4 bottom-0 w-1/2 h-[80%] opacity-30"></div>
         

    </div>

</section>
  )
}
