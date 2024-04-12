"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import FooterComponent from "../../components/Footer component/Footer.jsx"; // Renamed to avoid conflicts
import "../../components/Footer component/Footer.css";
import ProjectCard from "/workspaces/portfolio/src/components/Project Card component/ProjectCard.jsx";
import "/workspaces/portfolio/src/components/Project Card component/ProjectCard.css";
import ThemeSwitcher from "/workspaces/portfolio/src/components/Theme Switcher/ThemeSwitcher.jsx";
import "/workspaces/portfolio/src/components/Theme Switcher/ThemeSwitcher.css";
import "./projects.css";
export const ProjectsPage = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  const ProjectCard = ({ logo, name, content, link }) => {
    return (
      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logo} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="/link.svg" alt="" /> View Project
          </a>
        </div>
      </div>
    );
  };
  const options = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  return (
    <div>
      <header>
        <Navbar options={options} />
        <ThemeSwitcher darkClassName="dark" />
      </header>
      <main>
        <div className="headerkinda">
          <h1>Future projects and aspirations I have</h1>
          <p>
            As I am just starting out on my journey to become a developer, I have a few projects and aspirations in mind
            that I would like to work on and achieve at some point. Here are a few of them. Since I am just starting
            out, the main 'project' that I have completed, with a lot of help, is this website. I am very proud of it,
            and I hope to continue to improve it as I learn more.
          </p>
        </div>

        <div className="Mainarea">
          <div></div>
          <div>
            <section>
              <ProjectCard
                logo="/giga.jpg"
                name="Be proficient using assembly"
                content="Rom hacking being one of my favorite things to do, I hope to at some point get to a place where I can be proficient enough to create my own hacks without so much help. But being one of the first programming languages, I have a lot of learning to do."
                link="/project-url"
              />
              {/* Add more ProjectCard components as needed */}
            </section>
          </div>
          <div></div>
          <div>
            <section>
              <ProjectCard
                logo="/giga.jpg"
                name="Work for a cutting edge technology company"
                content="Just starting out in the field, I do not know exactly where I could end up branching off to. But I hope that it is a cool technology that I can help create, and hopefully, better the world."
                link="/project-url"
              />
              {/* Add more ProjectCard components as needed */}
            </section>
          </div>
          <div></div>
          <div>
            <section>
              <ProjectCard
                logo="/giga.jpg"
                name="Create a software company at some point."
                content="This is an extremely lofty goal, I do not even know what I would create the company to do, but I hope that it is something that can help people in some way. I have always wanted to create something that can help people, and I hope that I can do that at some point."
                link="/project-url"
              />
              {/* Add more ProjectCard components as needed */}
            </section>
          </div>
          <div></div>
        </div>
      </main>
      <aside>
        <section>{/* Other content goes here */}</section>
      </aside>
      <footer className="footer">
        <ul className="nav-links" style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/about">About</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/projects">Projects</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/uses">Uses</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
