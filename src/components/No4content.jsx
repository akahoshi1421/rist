import React, { useEffect } from "react";
import "./No4content.scss";

const No4content = () => {
  const newWindow = () => {
    window.open("http://jissyu3.net");
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px",
      threshold: 0,
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const Play_TITLE = setInterval(() => {
            let result = "";
            for (let i = 0; i < 6; i++) {
              result += Math.random().toString(32).substring(2)[0];
            }
            entry.target.textContent = result;
          }, 50);
          setTimeout(() => {
            clearInterval(Play_TITLE);
            entry.target.textContent = "ゲームをプレイ";
          }, 300);
        }
      }, options);
    });
    const playButton = document.querySelector(".btn-inner p");
    io.observe(playButton);
  }, []);

  return (
    <div className="no4-content">
      <button onClick={newWindow} id="linkes-play">
        <div className="btn-inner">
          <p>ゲームをプレイ</p>
        </div>
      </button>
    </div>
  );
};

export default No4content;
