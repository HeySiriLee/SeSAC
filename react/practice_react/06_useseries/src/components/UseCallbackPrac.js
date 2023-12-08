import { useCallback, useState } from "react";
import "../App.css";

export default function UseCallbackPrac() {
  const [items, setItems] = useState(["요 아이?", "저 아이?"]);
  const [editing, setEditing] = useState("");
  const [editText, setEditText] = useState("");

  // item 문자열을 인자로 받아 editing, setEditText 상태의 값을 item 문자열로 업데이트
  const handleEdit = useCallback((item) => {
    setEditing(item);
    setEditText(item);
  }, []);

  // itemToSave 문자열을 인자로 받아 items 상태의 배열 요소 중
  // editing과 동일한 요소만 itemToSave로 변경하고
  // 나머지 요소는 그대로 유지한 배열을 items 상태값으로 업데이트
  const handleSave = useCallback(
    (itemToSave) => {
      setItems(items.map((item) => (item === editing ? itemToSave : item)));
      setEditing("");
    },
    [items, editing]
  );

  // itemToDelete 문자열을 인자로 받아 items 상태의 배열 요소 중
  // itemToDelete와 동일하지 않은 요소로만 이루어진 배열을 items 상태값으로 업데이트
  const handleDelete = useCallback(
    (itemToDelete) => {
      setItems(items.filter((item) => item !== itemToDelete));
    },
    [items]
  );

  return (
    <>
      <h4>Edit text</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {editing === item ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              item
            )}
            <br />
            {editing === item ? (
              <button onClick={() => handleSave(editText)}>꾸-욱저장!</button>
            ) : (
              <>
                <button onClick={() => handleEdit(item)}>수정해보꼐욤</button>
                &nbsp;
                <button onClick={() => handleDelete(item)}>삭제해보께욤</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
