import React from "react";
import { useEffect } from "react";
import "./Story.scss";

const Story = () => {
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
            entry.target.textContent = "STORY";
          }, 300);
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const storyH2 = document.querySelector(".Story-h2");
    io.observe(storyH2);
  });
  return (
    <div className="story-content">
      <h2 className="Story-h2" id="linkes-story">
        Story
      </h2>
      <div className="story-flex">
        <div className="story-flex-inner">
          SNSを利用している主人公たち。そんな中さまざまなアクシデントに巻き込まれていく...主人公は君たちだ。ゲームには選択肢があり、適切な選択肢を選んでいき、SNSをうまく使いこなせるようなエンディングに持っていこう。間違った選択肢を選ぶと...
        </div>
      </div>
    </div>
  );
};

export default Story;
