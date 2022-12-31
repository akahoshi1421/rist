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
            セリフをクリックするとストーリーが進んでいくぞ！ストーリーを読み進めていこう！
          </div>
        </div>
        <div className="img-flex-inner">
          <div className="img-flex-p">
            途中まで読み進めていくと質問が投げかけられるぞ！自分が正解だと思う選択肢を管理者に伝えよう！伝えた選択肢によってエンディングが変わるぞ！
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
            セリフ横のLogボタンをクリックすると今までのキャラクターが喋ったログが出てくるぞ!選択肢で迷った時はこれを参考にしてみるのもいいかも...?
          </div>
        </div>
        <div className="img-flex-inner">
          <div className="img-flex-p">
            このゲームは複数人での同時プレイが可能だぞ！チャットで仲間と相談しながら、あるいは管理者に質問しながら先ほどのログ機能と使い合して物語を良い結末に導こう！
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
