import { useState } from "react";

function ListMap() {
  const luxuryList = [
    { id: 1, name: "LOUIS VUITTON" },
    { id: 2, name: "CHANEL" },
    { id: 3, name: "CELINE" },
    { id: 4, name: "GUCCI" },
    { id: 5, name: "DIOR" },
  ];
  const [list, setList] = useState(luxuryList);
  const [newShop, setNewShop] = useState("");

  // map은 앞에 있는 배열에 대해서 반복을 하면서,
  // map의 인자로 넘어가는 콜백함수의 return 값을 이용해 새로운 배열을 생성

  const addShop = () => {
    const newObj = { id: list[list.length - 1].id + 1, name: newShop };
    const newList = list.concat(newObj);
    setList(newList);
    setNewShop("");
  };

  const removeShop = (id) => {
    // filter METHOD는 앞에 있는 배열에 대해서 반복
    // return 값은 조건이 되어야 함
    // 조건이 true 해당 원소는 새로운 배열에 포함
    // false일 경우 새로운 배열에 포함하지 않음
    const newList = list.filter((value) => value.id !== id);
    setList(newList);
  };

  return (
    <>
      <label>추가할 SHOP: </label>
      <br />
      <input
        type="text"
        value={newShop}
        onChange={(e) => {
          setNewShop(e.target.value);
        }}
      />
      &nbsp;
      <button onClick={addShop}>추가한드앗</button>
      <ul>
        {list.map((value) => {
          return (
            <li
              key={value.id}
              onDoubleClick={() => {
                removeShop(value.id);
              }}
            >
              {value.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListMap;
