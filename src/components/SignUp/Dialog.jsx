// import styled from "styled-components";
// import { useRef, useImperativeHandle, forwardRef } from "react";
// import { createPortal } from "react-dom";

// const Dialog = forwardRef(function Dialog({ isDuplicated }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => ({
//     open() {
//       dialog.current?.showModal();
//     },
//     close() {
//       dialog.current?.close();
//     },
//   }));

//   const handleClose=()=>{
//     dialog.current?.close();
//   }

//   return createPortal(
//     <Container ref={dialog} onCancel={(e)=>e.preventDefault}>
//       <h2>아이디 중복 {isDuplicated ? "실패" : "확인"}</h2>
//       <p>
//         {isDuplicated
//           ? "아이디를 다시 확인해주세요."
//           : "사용가능한 아이디입니다."}
//       </p>
//       <form method="dialog">
//         <button onClick={handleClose}>닫기</button>
//       </form>
//     </Container>,
//     document.getElementById("modal")
//   );
// });
// export default Dialog;

// const Container = styled.dialog`
//   border: none;
//   border-radius: 8px;
//   padding: 2rem;
//   background-color: #d7fcf8;

//   &[open] {
//     animation: slide-in-from-top 0.35s ease-out;
//   }

//   &::backdrop {
//     background: rgba(0, 0, 0, 0.9);
//   }

//   & h2 {
//     font-family: "Handjet", monospace;
//     margin: 0 0 0.25rem 0;
//     font-size: 3rem;
//     text-transform: uppercase;
//   }

//   & progress {
//     width: 100%;
//     height: 1.5rem;
//     margin: 0;
//     accent-color: #46cebe;
//   }

//   & p {
//     margin: 0.5rem 0;
//     font-size: 1.2rem;
//   }

//   & p strong {
//     color: #10655b;
//   }

//   & form {
//     text-align: right;
//   }

//   & button {
//     margin-top: 1rem;
//     padding: 0.5rem 1rem;
//     border: none;
//     border-radius: 4px;
//     background: #12352f;
//     color: #edfcfa;
//     font-size: 1.2rem;
//     cursor: pointer;
//   }

//   & button:hover {
//     background: #051715;
//   }
// `;
