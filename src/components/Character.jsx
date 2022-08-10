import styled from "styled-components";

export default function Character(props) {
  const { dataCharacter } = props;
  const { character, image, quote } = dataCharacter;

  return (
    <ContentCharacter>
      <Title>{character}</Title>
      <ContainerImage>
        <Image src={image} alt={character} />
      </ContainerImage>
      <PhraseText>{quote}</PhraseText>
    </ContentCharacter>
  );
}

const ContentCharacter = styled.div`
  padding: 20px;
  border: 1px solid #2a9d8f;
  border-radius: 20px;
  width: 300px;
  text-align: center;
  margin: 10px;

  &:hover {
    filter: brightness(108%);
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: #264653;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

const Image = styled.img`
  width: 130px;
  height: auto;
`;

const PhraseText = styled.h4`
  color: #2a9d8f;
  height: 100px;
`;