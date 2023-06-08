import styled from "styled-components";

interface IColors {
  color: string;
}

// modificar el body para que ocupe toda la pantalla
export const Body = styled.body<IColors>`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.color ? props.color : "green")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Semaforo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #4c4a49;
  width: 350px;
  height: 700px;
  border-radius: 150px;
`;

export const Circulo = styled.div<IColors>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.color};
  margin: 10px;
  border: 3px solid black;
  cursor: pointer;
`;

export const LinkStyled = styled.a`
    text-decoration: none;
    position: absolute;
    bottom: 0;
    right: 0;
    color: black;
    font-size: 15px;
    margin: 20px 40px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        color: purple;
    }
`;