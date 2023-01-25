import React from "react";
import Rogo from "../img/titleRogo.png";
import "./Container.scss";
import No1content from "./No1content";
import No2content from "./No2content";
import No3content from "./No3content";
import No4content from "./No4content";
import Function1 from "./Function1";
import Impetus from "./Impetus";
import Story from "./Story";
import Progress from "./Progress";
import { useEffect } from "react";
import { Link as Scroll } from "react-scroll";

const Container = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px",
      threshold: 0,
    };
    const RISTHEADER = document.querySelector("header");

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          RISTHEADER.classList.remove("fadeIn");
        } else {
          RISTHEADER.classList.add("fadeIn");
        }
      });
    }, options);

    const storyH2 = document.querySelector("#titleRogoImg");
    io.observe(storyH2);
  }, []);
  return (
    <>
      <header>
        <div className="logo-img">R.I.S.T</div>
        <div className="linkes">
          <div className="story-link linkes-inner">
            <Scroll to="linkes-story" smooth={true} duration={600} offset={-80}>
              Story
            </Scroll>
          </div>
          <div className="impetus-link linkes-inner">
            <Scroll
              to="linkes-impetus"
              smooth={true}
              duration={600}
              offset={-80}
            >
              Impetus
            </Scroll>
          </div>
          <div className="chapter-link linkes-inner">
            <Scroll
              to="linkes-chapter"
              smooth={true}
              duration={600}
              offset={-120}
            >
              Chapter
            </Scroll>
          </div>
          <div className="story-func-link linkes-inner">
            <Scroll
              to="linkes-function"
              smooth={true}
              duration={600}
              offset={-80}
            >
              Function
            </Scroll>
          </div>
          <div className="progress-func-link linkes-inner">
            <Scroll
              to="linkes-progress"
              smooth={true}
              duration={600}
              offset={-80}
            >
              Progress&Plan
            </Scroll>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="no0-content">
          <img src={Rogo} id="titleRogoImg" />
          <div className="down-arrow">
            <div className="down-arrow-text">scroll</div>
          </div>
        </div>

        <No1content />
        <No2content />
        <Story />
        <Impetus />
        <No3content />
        <Function1 />
        <Progress />
        <No4content />
      </div>
    </>
  );
};

export default Container;
