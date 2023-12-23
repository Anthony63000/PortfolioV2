
export default function SkillsItem({ stackName, stackLogo, stackLogoAlt }) {

  return (
    <div className='skills-middle-left-row-container'>
        <div className='skills-middle-left-row-container-content'>
            <img 
                className='skills-middle-left-row-container-content-icon'
                src={stackLogo} 
                alt={stackLogoAlt} 
            />
            <p className='skills-middle-left-row-container-content-text'>
                {stackName}
            </p>
        </div>
    </div>
  )
}
