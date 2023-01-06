import { useState } from "react";
import "./No3content.scss";

const No3content = () => {
  const [nowChapter, changeChapter] = useState(1);

  const serifList = [
    {
      title: "第1章",
      discription:
        "SNSを利用していた主人公。その時ふと気になる投稿が見えた。その投稿は有名なブランドもの。主人公は興味をひかれるが...",
      imgs: ["scene1.png", "scene2.png"],
    },
    {
      title: "第2章",
      discription:
        "修学旅行にやってきた主人公達。泊まった旅館にすこし良さげな壺があった。壺の価値を大袈裟にしたツイートをしたらバズるのでないか...?と考えたが...",
      imgs: ["scene3.png", "scene4.png"],
    },
    {
      title: "第3章",
      discription:
        "第3章では1,2章で行なったことのまとめを行います。ちゃんと理解できましたか...?",
      imgs: ["scene6.png", "scene7.png"],
    },
  ];

  const setDis = (chapter) => {
    const dsmain = document.querySelector(".discription-main");
    dsmain.classList.remove("fadeIn");

    setTimeout(() => {
      dsmain.classList.add("fadeIn");
    }, 400);

    const chapteres = document.querySelectorAll(".chapter");
    chapteres.forEach((element) => {
      element.classList.remove("active");
    });

    const clicked = document.querySelector(`.chapter:nth-child(${chapter})`);
    clicked.classList.add("active");

    changeChapter(chapter);
  };

  return (
    <div className="no3-content">
      <div className="content-discription" id="linkes-chapter">
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
            <h3 className="chapter-title">{serifList[nowChapter - 1].title}</h3>
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
  );
};

export default No3content;
