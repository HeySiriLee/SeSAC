import "../styles/origin.scss";

function SassOrigin() {
  return (
    <>
      <div className="origin-sass">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box navy"></div>
        <div className="box purple"></div>
      </div>
      <br />
      <div className="scss-parents">
        안냐세용?
        <ul>
          <li>Hello</li>
          <li>Hola</li>
        </ul>
      </div>
      <div className="mixin">
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <br />
      <button className="btn">Button</button>
      &nbsp;
      <button className="btn-important">Important-Button</button>
    </>
  );
}

export default SassOrigin;
