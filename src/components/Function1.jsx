import React from "react";
import { useEffect } from "react";
import "./Function1.scss";

const Function1 = () => {
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

          const FUNCTION_TITLE = setInterval(() => {
            let result = "";
            for (let i = 0; i < 4; i++) {
              result += Math.random().toString(32).substring(2)[0];
            }
            entry.target.textContent = result;
          }, 50);
          setTimeout(() => {
            clearInterval(FUNCTION_TITLE);
            entry.target.textContent = "FUNCTION";
          }, 300);
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const storyH2 = document.querySelector(".Function-h2");
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

    const imgs = document.querySelectorAll(".scene-flex-img");
    imgs.forEach((head) => {
      io2.observe(head);
    });
  }, []);
  return (
    <div className="function1-content">
      <h2 className="Function-h2" id="linkes-function">
        Function
      </h2>
      <div className="img-flexes">
        <div className="img-flex-inner">
          <div className="img-flex-img">
            <img
              src={`${process.env.PUBLIC_URL}/scene1.png`}
              className="scene-flex-img odd"
            />
          </div>

          <div className="img-flex-p">
            セリフをクリックするとストーリーが進んでいきます。
          </div>
        </div>
        <div className="img-flex-inner">
          <div className="img-flex-p">
            途中まで読み進めていくと質問がなげかけられます。自分が正解だと思う選択肢を管理者に伝えます。伝えた選択肢によってエンディングが変わっていきます。
          </div>
          <div className="img-flex-img">
            <img
              src={`${process.env.PUBLIC_URL}/scene4.png`}
              className="scene-flex-img even"
            />
          </div>
        </div>

        <div className="img-flex-inner">
          <div className="img-flex-img">
            <img
              src={`${process.env.PUBLIC_URL}/log.png`}
              className="scene-flex-img odd"
            />
          </div>

          <div className="img-flex-p">
            セリフ横のLogボタンをクリックすると今までのキャラクターが喋ったログが出てきます。選択肢で迷った時はこれを参考にしてみるのもいいかも...?
          </div>
        </div>
        <div className="img-flex-inner">
          <div className="img-flex-p">
            このゲームは複数人での同時プレイが可能です。チャットで仲間と相談しながら、あるいは管理者に質問しながら先ほどのログ機能と使い合して物語を良い結末に導いていきます。
          </div>
          <div className="img-flex-img">
            <img
              src={`${process.env.PUBLIC_URL}/chat.png`}
              className="scene-flex-img even"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Function1;
