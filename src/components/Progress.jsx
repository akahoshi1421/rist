import React from "react";
import { useEffect } from "react";
import "./Progress.scss";

const Progress = () => {
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

          const STORY_TITLE = setInterval(() => {
            let result = "";
            for (let i = 0; i < 12; i++) {
              result += Math.random().toString(32).substring(2)[0];
            }
            entry.target.textContent = result;
          }, 50);
          setTimeout(() => {
            clearInterval(STORY_TITLE);
            entry.target.textContent = "Progress&Plan";
          }, 300);
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const storyH2 = document.querySelector(".Progress-h2");
    io.observe(storyH2);

    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide");
        } else {
          entry.target.classList.remove("slide");
        }
      });
    }, options);

    const imgs = document.querySelectorAll(".progress-flex .one");
    imgs.forEach((head) => {
      io2.observe(head);
    });
  });
  return (
    <div className="progress-content">
      <h2 className="Progress-h2" id="linkes-progress">
        Progress&Plan
      </h2>
      <div className="progress-bar-vartical"></div>
      <div className="progress-flex">
        <div className="one">シナリオ作成(~7/6)</div>
        <div className="one">サイトモックアップ(~7/20)</div>
        <div className="one">INIAD-FES申請(~7/31)</div>
        <div className="one">実装(~8/31)</div>
        <div className="one">ユーザテスト(~10/15)</div>
        <div className="one">INIIAD-FES(10/30~10/31)</div>
        <div className="one">ユーザデータ解析(~11/30)</div>
        <div className="one">最終報告書作成(~1/18)</div>
      </div>
    </div>
  );
};

export default Progress;
