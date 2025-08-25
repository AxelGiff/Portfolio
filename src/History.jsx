import React, { memo } from 'react';
import prefectureIcon from './images/prefecture.png';
import bookmarkIcon from './images/icons8-add-bookmark-64.png';
import paperPlaneIcon from './images/icons8-paper-plane-50.png';
import levelUpIcon from './images/Capsule-244-×-244-px-244-×-100-px-3.png';
import diplomaIcon from './images/icons8-chapeau-de-diplôme-30.png';
import schoolIcon from './images/icons8-école-50.png';
import { useTranslation } from 'react-i18next';

// Icônes pour chaque compétence
const skillIcons = {
  "Réaliser": "🛠️",
  "Realize": "🛠️",
  "Optimiser": "⚡",
  "Optimize": "⚡",
  "Administrer": "🗄️",
  "Administrate": "🗄️",
  "Gérer": "📋",
  "Manage": "📋",
  "Conduire": "🚀",
  "Lead": "🚀"
};

// Composant SkillBox amélioré
const SkillBox = ({ skill, summary, modules }) => (
  <div className="rounded-xl px-6 py-5 text-white flex flex-col gap-2 bg-transparent">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-2xl">{skillIcons[skill] || "💡"}</span>
      <span className="font-bold text-lg tracking-wide">{skill}</span>
    </div>
    <div className="text-sm mb-2 italic font-light">{summary}</div>
    <ul className="list-disc ml-6 text-sm">
      {modules.map((m, i) => <li key={i}>{m}</li>)}
    </ul>
  </div>
);

const HighlightedText = memo(function HighlightedText({ children }) {
  return <span className='text-gradient-primary3'>{children}</span>;
});

const TimelineSection = memo(function TimelineSection({ 
  isAcademic, 
  title, 
  period, 
  children, 
  icon, 
  iconStyle
}) {
  const { t } = useTranslation(); 

  const badgeClass = isAcademic 
    ? "bg-violet-100 text-violet-100 text-l rounded-xl font-medium me-2 px-2.5 py-1.5 dark:bg-violet-900 m-2 dark:text-violet-100"
    : "bg-yellow-100 text-yellow-800 text-l rounded-xl font-medium me-2 px-2.5 py-1.5 dark:bg-yellow-900 m-2 dark:text-yellow-300";
  
    const badgeText = isAcademic ? t('Academic Experience') : t('Professional Experience'); 

  return (
    <div className="timeline">
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

export default function History() {
    const { t } = useTranslation();
  
  return (
    <div>            
      <div className="gradient-02 z-[-1] right-1/4 top-[1240px] w-1/2 h-full opacity-30"></div>
    
      <div className="bg-hsla-45-17-95-80 backdrop-blur-xl backdrop-saturate-17 backdrop-filter-contrast-170 backdrop-filter px-10 py-8 border border-gray-800 animate-border-width bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] min-h-[800px]" id="parcours">
    
        <div className="flex flex-col items-center">
          <span>
            <img src={paperPlaneIcon} alt="plane" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
          </span>
          <h3>Road Trip</h3>
        </div>
        <TimelineSection 
          isAcademic={true}
          title={t("but3")}
          period={t("datebut3")}  
          icon={bookmarkIcon}
          iconStyle={{ width: '5%', marginLeft: '10px' }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <SkillBox
                skill={t("Réaliser")}
                summary={t("RealiserSummary")}
                modules={[t("Web Development"), t("Mobile Development"), t("Software Architecture")]}
              />
              <SkillBox
                skill={t("Optimiser")}
                summary={t("OptimiserSummary")}
                modules={[t("Algorithms / Data Structures"), t("Machine Learning / Deep Learning")]}
              />
              <SkillBox
                skill={t("Administrer")}
                summary={t("AdministrerSummary")}
                modules={[t("Databases"), t("Networking / Containerization")]}
              />
              <SkillBox
                skill={t("Gérer")}
                summary={t("GérerSummary")}
                modules={[t("Project Management / Communication")]}
              />
              <SkillBox
                skill={t("Conduire")}
                summary={t("ConduireSummary")}
                modules={[t("Automation"), t("Probabilities")]}
              />
               <SkillBox
                skill={t("SAE")}
                summary={t("SAESummary")}
                modules={[t("devweb"), t("ia"),t("virtua")]}
              />
            </div>
        </TimelineSection>
        
         <TimelineSection 
            isAcademic={false}
            title={t("prefecture_title")}
            period={t("prefecture_period")}
            icon={prefectureIcon}
            iconStyle={{ width: '25%', marginLeft: '10px', marginTop:'10px', marginBottom:'10px' }}
          >
            <ul className="list-disc list-inside">
              <li>{t("software_engineering")} :<HighlightedText> {t("requirements_analysis")}</HighlightedText>, <HighlightedText>{t("conception")} </HighlightedText>{t("and")} <HighlightedText>{t("tests")} </HighlightedText></li>
              <li>{t("migration_php")} <HighlightedText> {t("symfony")} </HighlightedText> {t("and")} <HighlightedText> {t("nuxt_typescript")} </HighlightedText></li>
              <li>{t("development_of")} <HighlightedText>{t("statistical_production")} </HighlightedText></li>
              <li>{t("rest_api")} <HighlightedText>{t("api_platform")} </HighlightedText>, {t("communicating_with")} <HighlightedText> {t("nuxt")}</HighlightedText></li>
            </ul>
          </TimelineSection>
        
        
        
        <div className="gradient-02 z-[-1] right-1/2 w-1/2 h-full opacity-30"></div>
        <div className="gradient-02 z-[-1] left-1/2 w-1/2 h-full opacity-30"></div>
    
        <TimelineSection 
  isAcademic={false}
  title={t("levelup_title")}
  period={t("levelup_period")}
  icon={levelUpIcon}
  iconStyle={{ width: '25%', marginLeft: '10px' }}
>
  <p>
    {t("during_internship")} <HighlightedText>{t("skills")}</HighlightedText> {t("in")} <br />
    <HighlightedText>{t("project_management")}</HighlightedText> & <HighlightedText>{t("team_management")}</HighlightedText>, 
    {t("using_tools")} <HighlightedText>{t("web_developer")}</HighlightedText>
  </p>
</TimelineSection>

<TimelineSection 
  isAcademic={true}
  title={t("university_title")}
  period={t("university_period")}
  icon={diplomaIcon}
  iconStyle={{ width: '5%', marginLeft: '10px' }}
>
  <p>
    {t("first_year")} <HighlightedText>{t("computer_science")}</HighlightedText> {t("at_sorbonne")}
  </p>
</TimelineSection>

<TimelineSection 
  isAcademic={true}
  title={t("highschool_title")}
  period={t("highschool_period")}
  icon={schoolIcon}
  iconStyle={{ width: '5%', marginLeft: '10px' }}
>
  <p>
    {t("during_highschool")} <HighlightedText>{t("computer_science")}</HighlightedText> {t("extensively_engaging")} 
    <br /><HighlightedText>{t("building_pc")}</HighlightedText>, {t("creating")} <HighlightedText>{t("media_edits")}</HighlightedText>, 
    {t("troubleshooting_however")}
    <span className='text-gradient-primary4'>{t("coding")}</span>.
  </p>
</TimelineSection>
      </div>
    </div>
  );
}
