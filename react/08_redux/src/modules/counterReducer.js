const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 action을 return 하는 함수
// ?왜 만들엇나?
// action type의 이름이 바뀐다라고 가정하면,
// action을 발생시키는 모든 곳(dispatch)에서 action.type을 다 바꿔줘야함
// 이를 해결하기 위해 만듬
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { num: 100 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": // INCREMENT 상수 선언 전 ver 3.
    case INCREMENT: // INCREMENT 상수 선언 후 ver 3-1.
      return { num: state.num + 1 };
    case "DECREMENT":
      return { num: state.num - 1 };
    default:
      return state;
  }
};

export default counterReducer;
