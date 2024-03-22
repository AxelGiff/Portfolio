import React from 'react'

export default function History() {
  return (
    <div className="bg-hsla-45-17-95-80 backdrop-blur-xl backdrop-saturate-17 backdrop-filter-contrast-170 backdrop-filter px-10 border border-gray-800 animate-border-width bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)]" id="parcours">
    <div  className="flex flex-col items-center">
    <span>  <img src={require("../src/images/icons8-paper-plane-50.png")} alt="plane" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
</span>
    <h3>Road Trip </h3></div>q
    
    <div class="timeline">
    
     
          <h4>Actually <span><img src={require("../src/images/icons8-add-bookmark-64.png")} style={{ width: '5%', marginLeft: '10px' }} alt="actually"/></span></h4>
          <h6>2023...</h6>
          <p>BUT2 I.T- I.U.T Villetaneuse Sorbonne Paris Nord<br/>
           </p>
      </div>
      <div class="timeline">
    
     
    <h4>Internship at Level Up Tech Consulting <span><img src={require("../src/images/Capsule-244-×-244-px-244-×-100-px-3.png")} style={{ width: '25%', marginLeft: '10px' }} alt="actually"/></span></h4>
    <h6>From January to March 2024</h6>
    <p>During my internship, I acquired <span className='text-gradient-primary3'>skills</span> in <br /><span className='text-gradient-primary3'>Project Management</span> & <span className='text-gradient-primary3'>Team Management</span>, using tools like Notion, Slack and Wordpress as a <span className='text-gradient-primary3'>Web Developper</span><br/>
     </p>
</div>
    

    <div class="timeline">
     
          <h4>Destination : University <span><img src={require("../src/images/icons8-chapeau-de-diplôme-30.png")} style={{width: '5%', marginLeft: '10px'}} alt="univ"/></span></h4>
          <h6>2021-2022 & 2022-2023</h6>
          <p>First year of Bachelor's degree in <span className='text-gradient-primary3'>Computer Science</span> at Sorbonne University in Villetaneuse</p>
      </div>
 
      <div class="timeline">
              <h4>Destination : High school <span><img src={require("../src/images/icons8-école-50.png")} style={{width: '5%' , marginLeft: '10px'}} alt="student"/></span></h4>
              <h6>2018-2021</h6>
              <p>
                During high school, I studied <span className='text-gradient-primary3'>Computer Science</span> extensively, engaging in various activities such as <br /><span className='text-gradient-primary3'>building my own PC</span>, creating <span className='text-gradient-primary3'>video/photo edits</span>, & troubleshooting. However, there was still one area I hadn't ventured into: <span className='text-gradient-primary4'>coding</span>.<br/>
             </p>
          </div>
      </div>  )
}
