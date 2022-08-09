import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
  const { characters } = props;

  return (
    <ContainerCharacter>
      {characters.map((character, index) => (
        <Character dataCharacter={character} key={index} />
      ))}
    </ContainerCharacter>
  );
}

const ContainerCharacter = styled.div`
  display: flex;
`;
