import React, { useReducer } from 'react';

//initialState: Định nghĩa state ban đầu với thuộc tính count: 0.
//reducer: Hàm này nhận vào state hiện tại và action. Nó kiểm tra loại action (action.type) để xác định cách thức cập nhật state.
//increment: Tăng count lên 1.
//decrement: Giảm count xuống 1.
//useReducer: Khai báo useReducer với hai tham số: hàm reducer và initialState. Nó trả về một mảng gồm state hiện tại và dispatch – hàm để gửi action.
//dispatch: Dùng để gửi action vào reducer, thay đổi state dựa trên action.type.

// Khởi tạo state ban đầu
const initialState = { count: 0 };

// Khởi tạo reducer function để xử lý state và action
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  // Sử dụng hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default App;
