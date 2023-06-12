import Button from "./components/button";
import Container from "./components/container";
import Input from "./components/input";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <Container size="md">
        <h1>Hello World!</h1>
        <Button color="blue" text="Click Me!" />
      </Container>
      <Container size="sm">
        <h1>neki naslov</h1>
        <div>neki text</div>
        <Input placeholder="" />
      </Container>
    </div>
  );
}

export default App;
