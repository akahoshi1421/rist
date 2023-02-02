import React from "react";
import { useEffect } from "react";
import "./Impetus.scss";

const Impetus = () => {
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
            entry.target.textContent = "Impetus";
          }, 300);
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const storyH2 = document.querySelector(".Impetus-h2");
    io.observe(storyH2);
  });
  return (
    <div className="impetus-content">
      <h2 className="Impetus-h2" id="linkes-impetus">
        Impetus
      </h2>
      <div className="impetus-flex">
        <div className="impetus-flex-inner">
          私たちは実習3という大学の講義においてインターネットやコンピュータを使える人と使えない人に生じる格差である「デジタルデバイド」を解決するための案を考え実行しろというお題を受け、4人でチームを組みプロジェクトを進めました。
          その後私たちは「インターネットリテラシーがあるかどうかにより生じる格差」に焦点を当て調査した結果、SNSの利用率が高い中高生世代において情報の取捨選択やモラルが他の世代と比べて低いことが明らかとなりました。
          それを受け私たちは中高生向けにゲーム形式で学ぶことができる当制作物を考案し、リリースしました。(現在は閉鎖)
        </div>
      </div>
    </div>
  );
};

export default Impetus;
