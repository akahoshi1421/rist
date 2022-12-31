import "./No4content.scss";

const No4content = () => {
  const newWindow = () => {
    window.open("http://jissyu3.net");
  };

  return (
    <div className="no4-content">
      <button onClick={newWindow} id="linkes-play">
        <div className="btn-inner">
          <p>ゲームをプレイ</p>
        </div>
      </button>
    </div>
  );
};

export default No4content;
