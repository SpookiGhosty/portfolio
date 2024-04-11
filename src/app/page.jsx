"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import SkillsWidget from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SkillsWidget Component/SkillsWidget.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SkillsWidget Component/SkillsWidget.css";
import WorkWidget from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/WorkWidget Component/WorkWidget.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/WorkWidget Component/WorkWidget.css";
import Navbar from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Navbar component/Navbar.jsx";
import Footer from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Footer component/Footer.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Footer component/Footer.css";
import SignupWidget from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SignupWidget Component/SignupWidget.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SignupWidget Component/SingupWidget.css";
import ThemeSwitcher from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.css";
import ArticleCard from "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Article Card component/ArticleCard.jsx";
import "/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Article Card component/ArticleCard.css";
import "./home.css";

export const HomePage = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  const skillsData = [
    {
      icon: "/html5.png",
      name: "HTML",
      proficiency: 90,
    },
    {
      icon: "/css3.png",
      name: "CSS",
      proficiency: 85,
    },
    {
      icon: "/javascript.png",
      name: "JavaScript",
      proficiency: 80,
    },
  ];

  const workExperiences = {
    title: "Work",
    content: "My work experience.",
    experiences: [
      {
        logo: "/slack.png",
        organization: "Slack",
        jobTitle: "Software Engineer",
        startYear: 2016,
        endYear: null,
      },
      {
        logo: "/spotify.png",
        organization: "Spotify",
        jobTitle: "Software Engineer",
        startYear: 2014,
        endYear: 2015,
      },
      {
        logo: "/audible.png",
        organization: "Audible",
        jobTitle: "Software Engineer",
        startYear: 2012,
        endYear: 2013,
      },
      {
        logo: "/microsoft.png",
        organization: "Microsoft",
        jobTitle: "Software Engineer",
        startYear: 2010,
        endYear: 2011,
      },
    ],
  };

  const [articles, setArticles] = useState([
    {
      id: 1,
      date: "December 25, 2023",
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi...",
      link: "/sample-article",
    },
    // Add more articles here...
  ]);

  const options = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  const [links, setLinks] = useState([
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Users", url: "/users" },
  ]);

  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-6">
        <Navbar options={options} />
        <ThemeSwitcher darkClassName="dark" />
      </header>
      <main className="mt-10">
        <div className="headerish">
          <img src="./giga.jpg" alt="giga" className="chad"></img>
          <div>
            <h1 className="title">Software Engineer, Father, and Believer</h1>
          </div>

          <section className="mb-8">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
              massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi...
            </p>
          </section>
          <img className="x" src="./x.png"></img>
          <img src="./gt.png"></img>
          <img src="./blu.png"></img>
        </div>
        <div className="contentholder">
          <div></div>
          <div>
            <section className="grid grid-cols-1 gap-6 mb-8">
              {/* Map over your articles data to render ArticleCard components */}
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </section>
          </div>
          <div></div>
          <div>
            <section className="mb-8">
              <WorkWidget
                title={workExperiences.title}
                content={workExperiences.content}
                experiences={workExperiences.experiences}
              />
            </section>
            <section className="mb-8">
              <SkillsWidget title="Skills" content="Skilled in Java, JavaScript, HTML, and CSS" skills={skillsData} />
            </section>
            <section className="mb-8">
              <SignupWidget
                title="Subscribe to our Newsletter"
                content="Sign up to receive updates straight to your inbox."
              />
            </section>
          </div>
          <div></div>
        </div>
      </main>
      <aside className="mb-8">
        <section>{/* Other content goes here */}</section>
      </aside>
      <footer className="footer py-6">
        <ul className="nav-links flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
        <div className="copyright mt-4">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
