import styled from "styled-components";
import { useRef } from "react";

export default function TripRouteDialog({ showModal }) {
  const dialogRef = useRef < HTMLDialogElement > null;

  //modal open method
  const showModal = () => {
    dialogRef.current?.showModal();
  };

  //modal close method
  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <Container ref={dialogRef}>
        <h2></h2>
        <CloseBtn onClick={closeModal}></CloseBtn>
        
      </Container>
    </>
  );
}

const Container = styled.dialog`
    width: 80%;
    height: 300px;
    display: flex;

`;

const CloseBtn = styled.button`
    content: "\007d";
    font-size: 15px;
    border-radius: 15px;

`;
const Content=styled.section`
    
`
