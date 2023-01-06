import React from "react";
import "./Reset.scss";
import "./App.scss";
import { useEffect } from "react";
import Container from "./components/Container";

function App() {
  useEffect(() => {
    //背景の01のアニメーション
    let zerooneDiv = document.querySelector(".zeroone");
    let titleDiv = document.querySelector(".rist-title");
    let charAnime = setInterval(() => {
      let result = "";
      for (let i = 0; i < 3500; i++) {
        result += Math.floor(Math.random() * 2).toString();
      }
      zerooneDiv.textContent = result;
    }, 100);

    //上記アニメーションを止める
    setTimeout(() => {
      clearInterval(charAnime);
    }, 3000);

    //タイトルのアニメーション
    let titleAnime = setInterval(() => {
      let result = "";
      for (let i = 0; i < 4; i++) {
        result += Math.random().toString(32).substring(2)[0];
        result += i !== 3 ? "." : "";
      }

      titleDiv.textContent = result;
    }, 100);

    //上記アニメーションを止める
    setTimeout(() => {
      clearInterval(titleAnime);
      titleDiv.textContent = "R.I.S.T";
    }, 1500);
  }, []);

  return (
    <>
      <div className="load-anime">
        <div className="zeroone"></div>
        <div className="rist-title"></div>
        <div className="wrap-content"></div>
      </div>
      <Container />
    </>
  );
}

export default App;
