import React from 'react';

export default function History() {
  return (
    <div>            
      <div className="gradient-02 z-[-1] right-1/4 top-[1240px] w-1/2 h-full opacity-30"></div>
    
      <div className="bg-hsla-45-17-95-80 backdrop-blur-xl backdrop-saturate-17 backdrop-filter-contrast-170 backdrop-filter px-10 py-8 border border-gray-800 animate-border-width bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] min-h-[800px]" id="parcours">
    
        <div className="flex flex-col items-center">
          <span>
            <img src={new URL("../src/images/icons8-paper-plane-50.png", import.meta.url).href} alt="plane" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
          </span>
          <h3>Road Trip</h3>
        </div>
    
        <div className="timeline">
          <span className=" text-l rounded-xl font-medium me-2 px-2.5 py-1.5 bg-violet-900 m-2 text-violet-100">
            Academic Experience
          </span>
          <h4 className="mt-4">
            BUT 3 I.T (Apprenticeship) - I.U.T Villetaneuse
            <span>
              <img src={new URL("../src/images/icons8-add-bookmark-64.png", import.meta.url).href} 
                   style={{ width: '5%', marginLeft: '10px' }} 
                   alt="currently studying" />
            </span>
          </h4>
          <h6>Sept. 2024 to Sept. 2025</h6>
          <p className="mt-2 font-semibold">Key Courses:</p>
  
          <div className="grid grid-cols-2 gap-4 text-white text-xl ml-10 italic">
            <ul className="list-disc space-y-2">
              <li>Software Architecture</li>
              <li>Automation</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Probabilities</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li>Databases</li>
              <li>Machine Learning, Deep Learning</li>
              <li>Project Management</li>
              <li>Networking and Containerization</li>
              <li>Algorithms and Data Structures</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline">
          <span className="bg-yellow-100 text-yellow-800 text-l rounded-xl font-medium me-2 px-2.5 py-1.5 dark:bg-yellow-900 m-2 dark:text-yellow-300">Professional Experience</span>
          <h4 className="mt-4">Full Stack developper Apprenticeship at Préfecture de Police de Paris <span><img src={new URL("../src/images/prefecture.png", import.meta.url).href} style={{ width: '25%', marginLeft: '10px', marginTop:'10px', marginBottom:'10px' }} alt="new"/></span></h4>
          <h6>From Sept. 2024 to Sept. 2025</h6> 
          <ul className="list-disc list-inside">
            <li>Software Engineering :<span className='text-gradient-primary3'> Requirements Analysis</span> , <span className='text-gradient-primary3'>Conception </span>and <span className='text-gradient-primary3'>Tests </span><br/></li> 
            <li>Migration from PHP 5.4 to <span className='text-gradient-primary3'> Symfony 6.4  </span> and <span className='text-gradient-primary3'> Nuxt + TypeScript </span> <br/></li>
            <li>Development of a <span className='text-gradient-primary3'>statistical production </span>web page <br/></li>
            <li>REST API development with <span className='text-gradient-primary3'>API Platform </span>, communicating with <span className='text-gradient-primary3'> Nuxt.</span> <br/></li>
          </ul>
        </div>
        
        <div className="gradient-02 z-[-1] right-1/2  w-1/2 h-full opacity-30"></div>
        <div className="gradient-02 z-[-1] left-1/2  w-1/2 h-full opacity-30"></div>
    
        <div className="timeline">
          <span className="bg-yellow-100 text-yellow-800 text-l rounded-xl font-medium me-2 px-2.5 py-1.5 dark:bg-yellow-900 m-2 dark:text-yellow-300">Professional Experience</span>
          <h4 className="mt-4">Internship at Level Up Tech Consulting <span><img src={new URL("../src/images/Capsule-244-×-244-px-244-×-100-px-3.png", import.meta.url).href} style={{ width: '25%', marginLeft: '10px' }} alt="actually"/></span></h4>
          <h6>From January to March 2024</h6>
          <p>During my internship, I acquired <span className='text-gradient-primary3'>skills</span> in <br /><span className='text-gradient-primary3'>Project Management</span> & <span className='text-gradient-primary3'>Team Management</span>, using tools like Notion, Slack and Wordpress as a <span className='text-gradient-primary3'>Web Developper</span><br/></p>
        </div>
    
        <div className="timeline">
        <span className=" text-l rounded-xl font-medium me-2 px-2.5 py-1.5 bg-violet-900 m-2 text-violet-100">
            Academic Experience
          </span>          <h4 className="mt-4">Destination : University <span><img src={new URL("../src/images/icons8-chapeau-de-diplôme-30.png", import.meta.url).href} style={{width: '5%', marginLeft: '10px'}} alt="univ"/></span></h4>
          <h6>2021-2022 & 2022-2023</h6>
          <p>First year of Bachelor's degree in <span className='text-gradient-primary3'>Computer Science</span> at Sorbonne University in Villetaneuse</p>
        </div>
     
        <div className="timeline">
        <span className=" text-l rounded-xl font-medium me-2 px-2.5 py-1.5 bg-violet-900 m-2 text-violet-100">
            Academic Experience
          </span>          <h4 className="mt-4">Destination : High school <span><img src={new URL("../src/images/icons8-école-50.png", import.meta.url).href} style={{width: '5%' , marginLeft: '10px'}} alt="student"/></span></h4>
          <h6>2018-2021</h6>
          <p>During high school, I studied <span className='text-gradient-primary3'>Computer Science</span> extensively, engaging in various activities such as <br /><span className='text-gradient-primary3'>building my own PC</span>, creating <span className='text-gradient-primary3'>video/photo edits</span>, & troubleshooting. However, there was still one area I hadn't ventured into: <span className='text-gradient-primary4'>coding</span>.<br/></p>
        </div>
        
      </div>
    </div>
  );
}
