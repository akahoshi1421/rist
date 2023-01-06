import React from "react";
import { useEffect } from "react";
import "./No2content.scss";

const No2content = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px 0px",
      threshold: 0,
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const imgs = document.querySelectorAll(".fadeImg");

    imgs.forEach((head) => {
      io.observe(head);
    });

    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const No2_TITLE = setInterval(() => {
            let result = "";
            for (let i = 0; i < 11; i++) {
              result += Math.random().toString(32).substring(2)[0];
            }
            entry.target.textContent = result;
          }, 50);
          setTimeout(() => {
            clearInterval(No2_TITLE);
            entry.target.textContent = "君は無事に使いこなせるか";
          }, 300);
        }
      }, options);
    });
    const No2H2 = document.querySelector(".no2-title");
    io2.observe(No2H2);
  }, []);

  return (
    <div className="no2-content">
      <img
        src={`${process.env.PUBLIC_URL}/scene2-1.png`}
        id="scene-2-1"
        className="fadeImg"
      />
      <img
        src={`${process.env.PUBLIC_URL}/scene2-2.png`}
        id="scene-2-2"
        className="fadeImg"
      />
      <div className="no2-title">君は無事に使いこなせるか</div>
    </div>
  );
};

export default No2content;
