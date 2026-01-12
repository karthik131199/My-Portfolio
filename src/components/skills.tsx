import { Progress, Tabs, type ProgressProps } from "antd"
import { useEffect, useState } from "react";
interface ContentDetail {
  contentName: string;
  percentage: number;
}

interface SkillDetail {
  title: string;
  percentage: number;
  content: ContentDetail[];
}

const skillsData: SkillDetail[] = [
  {
    title: "Technical Skills",
    percentage: 90,
    content: [
      { contentName: "C#, .NET 8", percentage: 95 },
      { contentName: "ASP.NET Web API", percentage: 90 },
      { contentName: "Entity Framework Core", percentage: 88 },
      { contentName: "SQL Server", percentage: 92 }
    ]
  },
  {
    title: "Frontend Skills",
    percentage: 85,
    content: [
      { contentName: "React", percentage: 90 },
      { contentName: "TypeScript", percentage: 88 },
      { contentName: "Ant Design", percentage: 85 },
      { contentName: "CSS / Flexbox", percentage: 80 }
    ]
  },
  {
    title: "Analytical Skills",
    percentage: 88,
    content: [
      { contentName: "Problem solving", percentage: 90 },
      { contentName: "Debugging", percentage: 85 },
      { contentName: "System design", percentage: 88 }
    ]
  }
];


const classNames: ProgressProps['classNames'] = {
  root: 'demo-progress-root',
  rail: 'demo-progress-rail',
  track: 'demo-progress-track',
};

const stylesFn: ProgressProps['styles'] = (info) => {
  const percent = info?.props?.percent ?? 0;
  const hue = 800 - (200 * percent) / 100;
  return {
    track: {
      backgroundImage: `
        linear-gradient(
          to right,
          hsla(${hue + 30}, 50%, 55%, 0.95),
          hsla(${hue}, 50%, 55%, 1)          
        )`,
      borderRadius: 8,
      transition: 'all 0.3s ease',
    },
    rail: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 8,
    },
  } satisfies ProgressProps['styles'];
};

const skills = () => {
  const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <>
            <div className="skills-section">
                <h2 className="heading">My Professional <br />
                    <span className="blue-text">Skills</span></h2>
                <div className="skills-container">
                    <Tabs
                        className="skills-tabs"
                        defaultActiveKey="0"
                        tabPlacement={isMobile ? "top":"start"}
                        items={
                            skillsData.map((skill, index) => ({
                                key: String(index),
                                label: skill.title,
                                children: (
                                    <ul className="skills-content">
                                        {
                                            skill.content.map((item, i) => (
                                                <li key={i} className="skills-content-detail">
                                                    {item.contentName}
                                                    <Progress classNames={classNames} styles={stylesFn} percent={item.percentage} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )}))
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default skills
