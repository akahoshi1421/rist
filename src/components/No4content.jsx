import React from "react";
import { useEffect } from "react";
import "./Impetus.scss";

const No4content = () => {
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
            entry.target.textContent = "Result";
          }, 300);
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const storyH2 = document.querySelector("#linkes-result");
    io.observe(storyH2);
  });
  return (
    <div className="impetus-content">
      <h2 className="Impetus-h2" id="linkes-result">
        Result
      </h2>
      <div className="impetus-flex">
        <div className="impetus-flex-inner">
          当講義では4,5人で1グループを取る形態になっており、1クラス5グループ程度が18クラスあったので、総グループ数は90程度ありました。
          最後にプロジェクトの成果についてクラス内で発表するプレゼンテーションがあり、そこで発表したところ優秀な作品であると担当教員に評価され、学部生全体に向け発表を行う最終発表に選ばれました。
          最終発表では選抜された21グループが参加し、学生の投票によりどこが優秀なグループであるかを決める仕組みで行われました。結果として90グループ中4位に選ばれるといった成績を収めることができました。
        </div>
      </div>
    </div>
  );
};

export default No4content;
