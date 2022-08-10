import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const [ characters, setCharacters ] = useState(null);
  
  const reqApi = async () => {
    const req = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=3");
    const frases = await req.json();
    setCharacters(frases);
  }

  return (
    <Container>
      <Header/>
      { !characters ? (
        <Welcome reqApi={reqApi}/>
      ) : (
        <CharacterContainer characters={characters} reqApi={reqApi}/>
      ) }
    </Container>
  )
}

export default App
