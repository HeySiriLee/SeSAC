// src/component/Hello.js 파일에 아래의 코드를 작성해주세요.
import { useMemo, useState } from "react";

export default function UseMemoPrac() {
  const [text, setText] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const wordCount = useMemo(() => {
    if (text.trim() && searchWord.trim()) {
      const words = text.split("");
      return words.filter((w) => w.includes(searchWord)).length;
    }
    return 0;
  }, [text, searchWord]);

  return (
    <>
      <h4>Search word</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="무슨 문장을 입력할꼬니?"
      />
      <br />
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="무슨 단어를 찾을램?"
      />
      <p>
        Frequency of the word "{searchWord}": {wordCount} times
      </p>
    </>
  );
}
