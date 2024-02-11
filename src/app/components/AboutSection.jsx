"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "./assets/style.css";




const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div
      className="skills-area"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 2%",
      }}
    >
      <div className="skill" >
        <div className="skill-title" >HTML</div>
        <div className="skill-bar"></div>
        <div className="skill-fill" style={{width:"80%" }}> 
          <span className="skill-percent">80%</span>
        </div>
      </div>
      <div className="skill" >
        <div className="skill-title" >CSS</div>
        <div className="skill-bar" ></div>
        <div className="skill-fill"  style={{width:"40%" }}>
          <span className="skill-percent" >40%</span>
        </div>
      </div>
      <div className="skill" >
        <div className="skill-title" >Javascript</div>
        <div className="skill-bar" ></div>
        <div className="skill-fill" style={{width:"20%" }} >
          <span className="skill-percent" >20%</span>
        </div>
      </div><div className="skill" >
        <div className="skill-title" >React</div>
        <div className="skill-bar" ></div>
        <div className="skill-fill" style={{width:"30%" }} >
          <span className="skill-percent" >30%</span>
        </div>
      </div>
      <div className="skill" >
        <div className="skill-title" >Python</div>
        <div className="skill-bar" ></div>
        <div className="skill-fill"  style={{width:"40%" }} >
          <span className="skill-percent">40%</span>
        </div>
        </div><div className="skill" >
        <div className="skill-title">C</div>
        <div className="skill-bar"></div>
        <div className="skill-fill" style={{width:"60%" }}>
          <span className="skill-percent" style={{ fontSize: "15px" }}>60%</span>
        </div>
      </div>
      
      
      
      
    </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Persuing B.tech, KTU University</li>
        <li>Undergraduate</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python Django Developer</li>
        <li>CS50 Python Programming</li>
        <li>Workshop on React</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={800} height={800}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,Node.js,HTML,CSS,Python and Git.
             I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
