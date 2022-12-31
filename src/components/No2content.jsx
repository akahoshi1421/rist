import { useEffect } from "react";
import "./No2content.scss";

const No2content = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px 0px",
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

    const imgs = document.querySelectorAll(".fadeImg");

    imgs.forEach((head) => {
      io.observe(head);
    });
  }, []);

  return (
    <div className="no2-content">
      <img
        src={`${process.env.PUBLIC_URL}/scene2-1.png`}
        id="scene-2-1"
        className="fadeImg"
      />
      <img
        src={`${process.env.PUBLIC_URL}/scene2-2.png`}
        id="scene-2-2"
        className="fadeImg"
      />
      <div className="no2-title">君は無事に使いこなせるか</div>
    </div>
  );
};

export default No2content;
