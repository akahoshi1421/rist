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
    return(
        <div className="impetus-content">
            <h2 className="Impetus-h2" id="linkes-impetus">
                Impetus
            </h2>
            <div className="impetus-flex">
                <div className="impetus-flex-inner">
                    私たちは実習3のデジタルデバイドというお題を受け、世代間のリテラシーについて調査をしました。
                    その結果、SNSの利用率が高い中高生世代において情報の取捨選択やモラルが他の世代と比べて低いことが明らかとなりました。
                    したがって私たちは中高生向けにゲーム形式で学べる制作物を考案しました。
                </div>
            </div>
        </div>
    )
}

export default Impetus;