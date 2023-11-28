function Component() {
  const name = "휴지";
  const animal = "개냥이";

  const sum = 3 + 5;

  const a = 15;
  const b = 10;

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <img
        src="./개냥.png"
        alt="개냥2"
        style={{ width: "25%", height: "25%" }}
      />
      <h3>제 반려 동물의 이름은 {name}입니당</h3>
      <h3>
        {name}은 {animal}입니당 겹죵?
      </h3>
      <hr />
      {sum === 8 ? "That's right!:)" : "Oh, Can u try again?"}
      <hr />
      {a > b && "a는 b보다 큽니당"}
      <hr />
      <div className="title" style={{ justifyContent: "center" }}>
        로그인을 해듀세욥
      </div>
      <div>
        Id: <input />
      </div>
      <br />
      <div>
        Password:
        <input />
      </div>
      <br />
      <button
        onClick={() => {
          console.log("click!");
        }}
      >
        로그인을해보까효?
      </button>
    </div>
  );
}
export default Component;
