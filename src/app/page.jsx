"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import SkillsWidget from "/workspaces/portfolio/src/components/SkillsWidget Component/SkillsWidget.jsx";
import "/workspaces/portfolio/src/components/SkillsWidget Component/SkillsWidget.css";
import WorkWidget from "/workspaces/portfolio/src/components/WorkWidget Component/WorkWidget.jsx";
import "/workspaces/portfolio/src/components/WorkWidget Component/WorkWidget.css";
import Navbar from "/workspaces/portfolio/src/components/Navbar component/Navbar.jsx";
import Footer from "/workspaces/portfolio/src/components/Footer component/Footer.jsx";
import "/workspaces/portfolio/src/components/Footer component/Footer.css";
import SignupWidget from "/workspaces/portfolio/src/components/SignupWidget Component/SignupWidget.jsx";
import "/workspaces/portfolio/src/components/SignupWidget Component/SingupWidget.css";
import ThemeSwitcher from "/workspaces/portfolio/src/components/Theme Switcher/ThemeSwitcher.jsx";
import "/workspaces/portfolio/src/components/Theme Switcher/ThemeSwitcher.css";
import ArticleCard from "/workspaces/portfolio/src/components/Article Card component/ArticleCard.jsx";
import "/workspaces/portfolio/src/components/Article Card component/ArticleCard.css";
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
      proficiency: 70,
    },
  ];

  const workExperiences = {
    title: "Work",
    content: "My work experience.",
    experiences: [
      {
        logo: '/',
      organization: 'Cheesecake Factory',
      jobTitle: 'Busser',
      startYear: 2023,
      endYear: null,
      },
      {
        logo: "/logo1.png",
        organization: "Children's Cottage",
        jobTitle: "Daycare teaqcher",
        startYear: 2021,
        endYear: 2023,
      },
      {
        logo: "/ace.svg",
        organization: "Ace Hardware",
        jobTitle: "Software Engineer",
        startYear: 2020,
        endYear: 2021,
      },
      // {
      //   logo: "/microsoft.png",
      //   organization: "Microsoft",
      //   jobTitle: "Software Engineer",
      //   startYear: 2010,
      //   endYear: 2011,
      // },
    ],
  };

  const [articles, setArticles] = useState([
    {
      id: 1,
      date: "April 10, 2024",
      title: "My favorite movies and Tv shows",
      content: "My favorite show of all time is Avatar the last Airbender. My favorite character has got to be Prince Zuko. His character development is one of the best I've ever seen in a show. And how they portray it is just amazing!!",
      link: "/sample-article",
    },
{
    id: 2,
    date: "April 11, 2024",
    title: "Learn about my meditation here!",
    content: "I've been on a meditation journey recently and I've learned so much about myself. I've learned how to be more patient and how to be more present in the moment. I've also learned how to be more mindful of my thoughts and how to let them pass by without judgement. We so often are trapped by how fast our mind moves, and when we stop and focus on the mind, or rather, focus on just being open, it's incredible how often you catch yourself just setting sucked into thought.",
    link: "/sample-article",
  },
  {
    id: 3,
    date: "April 12, 2024",
    title: "My favorite video games",
    content: "One of my favorite video games of all time has got to be Super Metroid. It is an old game that defined a genre. Released in 1994, it still has an incredibly active fanbase 30 years later. There is a modding community who have taken it upon themselves to create amazing rom hacks with entirely new worlds, stories, and physics. It's a game that has stood the test of time and is still being played today. And has so much life left to give. It is amazing.",
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
          <img src="./me.jpg" alt="giga" className="chad"></img>
          <div>
            <h1 className="title">Aspiring software developer and meditator</h1>
          </div>

          <section className="mb-8">
            <p className="text-base">
              My name is Thomas Peterson. I am an aspiring software developer by day, and quiet meditator by night. I love learning all about technology and how it continues to evolve and
              affect the world. I'm facinated by the power of software and how it's reach can be used in so many different ways and in different industries. I'm always willing to work hard and learn new things. Thanks for visiting!
            </p>
          </section>
          <a href=""><img className="x" src="./x.png"></img></a>
          <a href="https://github.com/SpookiGhosty?tab=projects"><img src="./gt.png"></img></a>
          <a href ="https://www.linkedin.com/in/thomas-peterson-199298296/"><img src="./blu.png"></img></a>
        </div>
        <div className="contentholder">
          <div></div>
          <div>
            <section className="grid grid-cols-1 gap-6 mb-8">
              {/* Map over your articles data to render ArticleCard components */}
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
                title="Subscribe to Thomas's blog!"
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
        <div className="copyright mt-4">© 2024 Thomas Peterson, All rights reserved.</div>
      </footer>
    </div>
  );
}
