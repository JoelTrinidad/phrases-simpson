import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const reqApi = async () => {
    const req = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=3");
    const frases = await req.json();
  }
  return (
    <Container>
      <Header/>
      <Welcome/>
    </Container>
  )
}

export default App
