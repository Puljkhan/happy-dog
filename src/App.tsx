import IconDownload from "./assets/icons/download";
import Button from "./components/button";
import Container from "./components/container";
import Input from "./components/input";
import "./styles/styles.scss";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div>
      <Container size="md">
        <h1>Hello World!</h1>
        <Button color="blue" text="Click Me!" />
      </Container>
      <Container size="sm">
        <h1>neki naslov</h1>
        <div>neki text</div>
        <Input
          value={inputValue}
          size="md"
          icon={<IconDownload />}
          placeholder=""
        />
      </Container>
    </div>
  );
}

export default App;
