import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("Loading");
  const { id } = useParams();
  console.log(id);

  const [query, setQuery] = useSearchParams();
  console.log(query);
  console.log(query.get("name"));

  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      // 오류가 날 수도 있는 코드를 try 안에 넣는다.
      const res = await fetch(`https:jsonplaceholder.typicode.com/posts/${id}`);
      if (res.ok) {
        const prod = await res.json();
        setProduct(prod);
      } else {
        throw Error("존재하지 않는 상품입니다.");
      }
    } catch (error) {
      // try 안에서 오류가 나면 catch로 이동
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>여기는 상품디테일페이지</div>
      <button onClick={() => navigator(-1)}>목록으로 이동</button>
      <button onClick={() => navigator("/")}>홈으로 이동</button>
      <button onClick={() => setQuery({ name: "codee" })}>
        sertQuery Test
      </button>
      {product ? (
        <ul>
          <li>번호: {product.id}</li>
          <li>상품명: {product.title}</li>
        </ul>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
