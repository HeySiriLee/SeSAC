import "../styles/larvaVerReact.scss";

function LarvaVerReact() {
  return (
    <div className="larva">
      <div className="body head">
        <div className="eye1"></div>
        <div className="eye2"></div>
      </div>
      <div className="body body1"></div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body tail"></div>

      <img
        className="grass"
        src={process.env.PUBLIC_URL + "/grass.png"}
        alt="잔디"
      />
    </div>
  );
}

export default LarvaVerReact;
