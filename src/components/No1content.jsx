import React from "react";
import { useEffect } from "react";
import "./No1content.scss";

const No1content = () => {
  const sceneArray = [1, 2, 3, 4, 5];
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px",
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

    const imgs = document.querySelectorAll(".no1-imgs");

    imgs.forEach((head) => {
      io.observe(head);
    });

    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const No1_TITLE = setInterval(() => {
            let result = "";
            for (let i = 0; i < 24; i++) {
              result += Math.random().toString(32).substring(2)[0];
            }
            entry.target.textContent = result;
          }, 50);
          setTimeout(() => {
            clearInterval(No1_TITLE);
            entry.target.textContent =
              "SNSのトラブルに巻き込まれていく主人公達...";
          }, 300);
        }
      }, options);
    });
    const No1H2 = document.querySelector(".no1-title");
    io2.observe(No1H2);
  }, []);

  return (
    <div className="no1-content">
      {sceneArray.map((name, i) => {
        return (
          <img
            src={`${process.env.PUBLIC_URL}/scene${i + 1}.png`}
            id={`scene${i + 1}`}
            key={`scene${i + 1}`}
            className="no1-imgs"
          />
        );
      })}
      <div className="no1-title">
        SNSのトラブルに巻き込まれていく主人公達...
      </div>
    </div>
  );
};

export default No1content;
