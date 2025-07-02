import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact,
  FaNodeJs, FaAngular, FaGitAlt, FaGithub, FaAws
} from 'react-icons/fa';

import {
  SiMongodb, SiMysql, SiPostgresql, SiVercel, SiJupyter, SiC
} from 'react-icons/si';

import { DiJava, DiPython } from 'react-icons/di';
import './Skills.css';

const skillsData = [
  {
    title: 'Programming Languages',
    items: [
      { icon: <SiC color="#00599C" size={40} />, name: 'C', textColor: 'black' },
      { icon: <DiJava color="#f89820" />, name: 'Java', textColor: 'black' },
      { icon: <DiPython color="#3472A6" />, name: 'Python', textColor: 'black' },
      { icon: <FaHtml5 color="#e44d26" />, name: 'HTML5', textColor: 'black' }
    ]
  },
  {
    title: 'Web Development',
    items: [
      { icon: <FaCss3Alt color="#1572b6" />, name: 'CSS3' },
      { icon: <FaBootstrap color="#7952b3" />, name: 'Bootstrap' },
      { icon: <FaJsSquare color="#f0db4f" />, name: 'JavaScript' },
      { icon: <FaReact color="#61dbfb" />, name: 'ReactJS' },
      { icon: <FaNodeJs color="#3c873a" />, name: 'NodeJS' },
      { icon: <FaAngular color="#dd1b16" />, name: 'Angular' }
    ]
  },
  {
    title: 'Databases',
    items: [
      { icon: <SiMysql color="#00758f" />, name: 'MySQL' },
      { icon: <SiMongodb color="#4DB33D" />, name: 'MongoDB' },
      { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL' }
    ]
  },
  {
    title: 'Tools & Platforms',
    items: [
      { icon: <FaGitAlt color="#f1502f" />, name: 'Git' },
      { icon: <FaGithub color="#333" />, name: 'GitHub' },
      { icon: <SiVercel color="#000" />, name: 'Vercel' },
      { icon: <FaAws color="#FF9900" />, name: 'AWS' },
      { icon: <SiJupyter color="#f37726" />, name: 'Jupyter' }
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-page">
      {skillsData.map((section, index) => (
        <div key={index}>
          <h2 className="skills-heading">{section.title}</h2>
          <div className="skills-grid">
            {section.items.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p style={{ color: skill.textColor || '#000' }}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
