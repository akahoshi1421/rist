import React, { useEffect } from "react";
import { useState } from "react";
import "./No3content.scss";

const No3content = () => {
  const [nowChapter, changeChapter] = useState(1);

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
            for (let i = 0; i < 4; i++) {
              result += Math.random().toString(32).substring(2)[0];
            }
            entry.target.textContent = result;
          }, 50);
          setTimeout(() => {
            clearInterval(STORY_TITLE);
            entry.target.textContent = "CHAPTER";
          }, 300);
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const storyH2 = document.querySelector(".No3-content-h2");
    io.observe(storyH2);
  });

  const serifList = [
    {
      title: "第1章",
      discription:
        "第1章は情報の取捨選択に関するリテラシーを学びます。SNSを利用していた主人公はふと気になる投稿が見えました。その投稿は有名なブランドもの。主人公は興味をひかれますが...",
      imgs: ["scene1.png", "scene2.png"],
    },
    {
      title: "第2章",
      discription:
        "第2章はモラルについて学びます。修学旅行にやってきた主人公達。泊まった旅館にすこし良さげな壺がありました。壺の価値を大袈裟にしたツイートをしたらバズるのでないか...?と考えましたが...",
      imgs: ["scene3.png", "scene4.png"],
    },
    {
      title: "第3章",
      discription:
        "第3章では1,2章で行なったことのまとめを行います。ちゃんとリテラシーがついているでしょうか。",
      imgs: ["scene6.png", "scene7.png"],
    },
  ];

  const setDis = (chapter) => {
    const dsmain = document.querySelector(".discription-main");
    dsmain.classList.remove("fadeIn");

    setTimeout(() => {
      changeChapter(chapter);
      dsmain.classList.add("fadeIn");
    }, 400);

    const chapteres = document.querySelectorAll(".chapter");
    chapteres.forEach((element) => {
      element.classList.remove("active");
    });

    const clicked = document.querySelector(`.chapter:nth-child(${chapter})`);
    clicked.classList.add("active");
  };

  return (
    <div className="no3-content">
      <div className="no3-content-flex" id="linkes-chapter">
        <h2 className="No3-content-h2" id="linkes-no3-content">
          Chapter
        </h2>
        <div className="chapter-discription">
          このゲームは章ごとに分かれているストーリ形式になっており、その章ごとに別テーマのリテラシーが学べます。またこのゲームの特徴として被害者加害者双方の視点からリテラシーを学べる点があります。こうすることで加害者がどのように対象者を狙うのかといった思考も学べ、被害に巻き込まれないための対処法を逆算的に考えられるようになります。
        </div>
        <div className="content-discription">
          <div className="no3-titles">
            <div className="chapter active" onClick={() => setDis(1)}>
              1
            </div>
            <div className="chapter" onClick={() => setDis(2)}>
              2
            </div>
            <div className="chapter" onClick={() => setDis(3)}>
              3
            </div>
          </div>
          <div className="discription-main fadeIn">
            <div className="not-img">
              <h3 className="chapter-title">
                {serifList[nowChapter - 1].title}
              </h3>
              <p>{serifList[nowChapter - 1].discription}</p>
            </div>
            <div className="imgs">
              {serifList[nowChapter - 1].imgs.map((one, index) => {
                return (
                  <img
                    src={`${process.env.PUBLIC_URL}/${one}`}
                    key={`chapter-img${index}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default No3content;
