'use client';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar component/Navbar.jsx";
import Footer from "../../components/Footer component/Footer.jsx";
import "../../components/Footer component/Footer.css";
import UsesCard from "../../components/Uses Card Component/UsesCard.jsx";
import "../../components/Uses Card Component/UsesCard.css";
import UsesSection from "../../components/Uses Section Component/UsesSection.jsx";
import "../../components/Uses Section Component/UsesSection.css";
import ThemeSwitcher from '/workspaces/portfolio/src/components/Theme Switcher/ThemeSwitcher.jsx';
import '/workspaces/portfolio/src/components/Theme Switcher/ThemeSwitcher.css';
import './Uses.css';

export const UsesPage = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const UsesCardComponent = ({ title, content }) => {
    return (
      <div className={'uses-card'}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };

  UsesCardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  const usesItems = [
    {
      groupName: "Fun trinkets I use",
      items: [
        { title: "Pen Flipper", description: "I am practicing flipping pens around my fingers in a very quick-like manner. And a pen flipper has weights on either side that help it flip super easily." },
        { title: "Kindle", description: "I love my kindle. It enables me to take tons of books with me wherever I go, instead of lugging around tons of heavy books." },
      ],
    },
    {
      groupName: "Fun hobbies",
      items: [
        { title: "Reading", description: "Books have the power to transport us into different worlds. They have the power to share the wisdom of years to youth, to help improve ourselves, and so much more. Reading is important. So yeah." },
        { title: "Watching old movies", description: "Movies made back in the day were absolutly amazing. This was back when people actually cared about plots, instead of big explosions and special effects to keep peoples attention." },
      ],
    },
  ];

  const UsesSectionComponent = ({ items }) => {
    return (
      <section className="uses-section">
        <div className="uses-section__content">
          {items.map((group, index) => (
            <div className="uses-section__group" key={index}>
              <h2>{group.groupName}</h2>
              <div className="uses-section__group-content">
                {group.items.map((item, i) => (
                  <UsesCardComponent title={item.title} content={item.description} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  UsesSectionComponent.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        groupName: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
          })
        ),
      })
    ),
  };

  UsesSectionComponent.defaultProps = {
    items: [],
  };

  const options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/uses', label: 'Uses' },
  ];

  return (
    <div>
      <header>
        <Navbar options={options} />
        <ThemeSwitcher darkClassName="dark" />
      </header>
      <main>
      <h1 className="hone">Random fun things worth talking about</h1>
      <p>Life is full of random awesoome things. Here are a few things that have caught my attention whilest experiencing life.</p>
        <UsesSection items={usesItems} />
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
            <a href="/users">Users</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
