import { useEffect, useState } from "react";
import { Colors } from "./models/Colors";
import { Body, Circulo, LinkStyled, Semaforo } from "./styles/Styles";

function App() {
  const [color, setColor] = useState<Colors>(Colors.GREEN);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleClick = (color: Colors) => {
    setColor(color);
    if (phoneNumber === "") return;
    const msgRed = "En%20llamada%20con%20video";
    const msgYellow = "En%20llamada%20con%20audio%20sin%20video";
    const msgGreen = "Libre";

    // abrir enlace dependiendo el color
    if (color === "red") {
      window.open("https://wa.me/" + phoneNumber + "?text=" + msgRed, "_blank");
    } else if (color === "yellow") {
      window.open(
        "https://wa.me/" + phoneNumber + "?text=" + msgYellow,
        "_blank"
      );
    } else {
      window.open(
        "https://wa.me/" + phoneNumber + "?text=" + msgGreen,
        "_blank"
      );
    }
  };

  // promp para añadir numero
  const handleNumber = () => {
    const number = prompt("Ingrese un número de telefono");
    if (number === null) return;
    setPhoneNumber(number);
  };

  useEffect(() => {
    handleNumber();
  }, []);

  return (
    <Body color={color}>
      <Semaforo>
        <Circulo
          color={color === Colors.RED ? Colors.RED : Colors.OFFRED}
          onClick={() => handleClick(Colors.RED)}
        ></Circulo>
        <Circulo
          color={color === Colors.YELLOW ? Colors.YELLOW : Colors.OFFYELLOW}
          onClick={() => handleClick(Colors.YELLOW)}
        ></Circulo>
        <Circulo
          color={color === Colors.GREEN ? Colors.GREEN : Colors.OFFGREEN}
          onClick={() => handleClick(Colors.GREEN)}
        ></Circulo>
      </Semaforo>
      <LinkStyled
        href="https://www.instagram.com/axelivanmolina/"
        target="_blank"
      >
        By: Axel Ivan Molina
      </LinkStyled>
    </Body>
  );
}

export default App;
