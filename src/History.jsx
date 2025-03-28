import React, { memo } from 'react';
import prefectureIcon from './images/prefecture.png';
import bookmarkIcon from './images/icons8-add-bookmark-64.png';
import paperPlaneIcon from './images/icons8-paper-plane-50.png';
import levelUpIcon from './images/Capsule-244-×-244-px-244-×-100-px-3.png';
import diplomaIcon from './images/icons8-chapeau-de-diplôme-30.png';
import schoolIcon from './images/icons8-école-50.png';

const TimelineSection = memo(function TimelineSection({ 
  isAcademic, 
  title, 
  period, 
  children, 
  icon, 
  iconStyle 
}) {
  const badgeClass = isAcademic 
    ? "text-l rounded-xl font-medium me-2 px-2.5 py-1.5 bg-violet-900 m-2 text-violet-100"
    : "bg-yellow-100 text-yellow-800 text-l rounded-xl font-medium me-2 px-2.5 py-1.5 dark:bg-yellow-900 m-2 dark:text-yellow-300";
  
  const badgeText = isAcademic ? 'Academic Experience' : 'Professional Experience';

  return (
    <div className="timeline mb-8">
      <span className={badgeClass}>{badgeText}</span>
      <h4 className="mt-4">
        {title}
        {icon && (
          <span>
            <img src={icon} style={iconStyle || { width: '5%', marginLeft: '10px' }} alt="icon" />
          </span>
        )}
      </h4>
      <h6>{period}</h6>
      {children}
    </div>
  );
});

const HighlightedText = memo(function HighlightedText({ children }) {
  return <span className='text-gradient-primary3'>{children}</span>;
});

export default function History() {
  return (
    <div className="relative">            
      <div className="gradient-02 z-[-1] right-1/4 top-[1240px] w-1/2 h-full opacity-30"></div>
    
      <div className="bg-hsla-45-17-95-80 backdrop-blur-xl backdrop-saturate-17 backdrop-filter-contrast-170 backdrop-filter px-10 py-8 border border-gray-800 animate-border-width bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] min-h-[800px]" id="parcours">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <span>
            <img src={paperPlaneIcon} alt="plane" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
          </span>
          <h3>Road Trip</h3>
        </div>
    
        {/* BUT 3 IT Section */}
        <TimelineSection 
          isAcademic={true}
          title="BUT 3 I.T (Apprenticeship) - I.U.T Villetaneuse"
          period="Sept. 2024 to Sept. 2025"
          icon={bookmarkIcon}
          iconStyle={{ width: '5%', marginLeft: '10px' }}
        >
          <p className="mt-2 font-semibold">Key Courses:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-xl ml-10 italic">
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
        </TimelineSection>
        
        {/* Prefecture Experience */}
        <TimelineSection 
          isAcademic={false}
          title="Full Stack Developer Apprenticeship at Préfecture de Police de Paris"
          period="From Sept. 2024 to Sept. 2025"
          icon={prefectureIcon}
          iconStyle={{ width: '25%', marginLeft: '10px', marginTop:'10px', marginBottom:'10px' }}
        >
          <ul className="list-disc list-inside">
            <li>Software Engineering: <HighlightedText>Requirements Analysis</HighlightedText>, <HighlightedText>Conception</HighlightedText> and <HighlightedText>Tests</HighlightedText></li>
            <li>Migration from PHP 5.4 to <HighlightedText>Symfony 6.4</HighlightedText> and <HighlightedText>Nuxt + TypeScript</HighlightedText></li>
            <li>Development of a <HighlightedText>statistical production</HighlightedText> web page</li>
            <li>REST API development with <HighlightedText>API Platform</HighlightedText>, communicating with <HighlightedText>Nuxt</HighlightedText></li>
          </ul>
        </TimelineSection>
        
        {/* Gradient dividers */}
        <div className="gradient-02 z-[-1] right-1/2 w-1/2 h-full opacity-30"></div>
        <div className="gradient-02 z-[-1] left-1/2 w-1/2 h-full opacity-30"></div>
    
        {/* Level Up Internship */}
        <TimelineSection 
          isAcademic={false}
          title="Internship at Level Up Tech Consulting"
          period="From January to March 2024"
          icon={levelUpIcon}
          iconStyle={{ width: '25%', marginLeft: '10px' }}
        >
          <p>
            During my internship, I acquired <HighlightedText>skills</HighlightedText> in <br />
            <HighlightedText>Project Management</HighlightedText> & <HighlightedText>Team Management</HighlightedText>, 
            using tools like Notion, Slack and Wordpress as a <HighlightedText>Web Developer</HighlightedText>
          </p>
        </TimelineSection>
    
        {/* University */}
        <TimelineSection 
          isAcademic={true}
          title="Destination: University"
          period="2021-2022 & 2022-2023"
          icon={diplomaIcon}
          iconStyle={{ width: '5%', marginLeft: '10px' }}
        >
          <p>
            First year of Bachelor's degree in <HighlightedText>Computer Science</HighlightedText> at Sorbonne University in Villetaneuse
          </p>
        </TimelineSection>
     
        {/* High School */}
        <TimelineSection 
          isAcademic={true}
          title="Destination: High school"
          period="2018-2021"
          icon={schoolIcon}
          iconStyle={{ width: '5%', marginLeft: '10px' }}
        >
          <p>
            During high school, I studied <HighlightedText>Computer Science</HighlightedText> extensively, engaging in 
            various activities such as <br /><HighlightedText>building my own PC</HighlightedText>, creating <HighlightedText>video/photo edits</HighlightedText>, 
            & troubleshooting. However, there was still one area I hadn't ventured into: 
            <span className='text-gradient-primary4'>coding</span>.
          </p>
        </TimelineSection>
      </div>
    </div>
  );
}
