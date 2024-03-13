import React from 'react'
import '../style/Skills.css'
import { Progress } from 'antd';


const Skills = () => {
    const twoColors = { '0%': 'red', '40%': 'yellow', '100%': 'green' };

  return (
    <div className='skills'>
    <div className='about-heading'>Skills</div>
    <div className='skills-container'>
      <div className='skills-cards'>
        <h3>Frontend</h3>

        <div className='skills-show'>
            <div className='skils-show-title'><div>HTML</div><div>95%</div></div>
            <Progress percent={95} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>CSS</div><div>50%</div></div>
            <Progress percent={50} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>JAVASCRIPT</div><div>70%</div></div>
            <Progress percent={70} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>REACT</div><div>85%</div></div>
            <Progress percent={85} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>TAILWIND CSS</div><div>90%</div></div>
            <Progress percent={90} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>MATERIAL UI</div><div>90%</div></div>
            <Progress percent={90} strokeColor={twoColors} showInfo={false} />
        </div>

      </div>
      <div className='skills-cards'>
        <h3>Backend</h3>
        <div className='skills-show'>
            <div className='skils-show-title'><div>JS (NODE JS)</div><div>80%</div></div>
            <Progress percent={95} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>EXPRESS</div><div>80%</div></div>
            <Progress percent={80} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>MONGOOSE</div><div>98%</div></div>
            <Progress percent={98} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>JSON Web Tokens</div><div>85%</div></div>
            <Progress percent={85} strokeColor={twoColors} showInfo={false} />
        </div>
        <div className='skills-show'>
            <div className='skils-show-title'><div>BCRYPT</div><div>90%</div></div>
            <Progress percent={90} strokeColor={twoColors} showInfo={false} />
        </div>
      </div>
      <div className='skills-cards'>
        <h3>Database</h3>
        <div className='skills-show-circle'>
            <div className='skils-show-title'><div>MONGODB</div><div>90%</div></div>
            <Progress className='skill-proccess-circle' type="circle" percent={90} strokeColor={twoColors} />
        </div>

      </div>
      <div className='skills-cards'>
        <h3>Language</h3>
        <div className='skills-show-circle'>
            <div className='skils-show-title'><div>JAVA</div><div>93%</div></div>
            <Progress className='skill-proccess-circle' type="dashboard" percent={93} strokeColor={twoColors} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills