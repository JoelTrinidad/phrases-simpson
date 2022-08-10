import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
  const { characters, reqApi } = props;

  return (
    <>
      <ContainerCharacter>
        {characters.map((character, index) => (
          <Character dataCharacter={character} key={index} />
        ))}
      </ContainerCharacter>
      <ContainerButton>
        <Button onClick={reqApi}>Recargar Frases</Button>
      </ContainerButton>
    </>
  );
}

const ContainerCharacter = styled.div`
  display: flex;
`;

const ContainerButton = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  width: 250px;
  background-color: #e76f51;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  font-size: 18px;
  margin: 40px;
  transition: all 0.2 ease-out;

  &:hover {
    cursor: pointer;
    background-color: #e77d63;
  }
`;