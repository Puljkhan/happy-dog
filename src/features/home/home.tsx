import { useState } from "react";

type ValuesType = {
    [key: string]: string;
  };
  
  const obj: ValuesType = {
    firstName: "",
    lastName: "",
  };

  const [inputsValue, setInputsValue] = useState<ValuesType>(obj);
  const [newState, setNewState] = useState<string>("");
  

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <>
      <RouterProvider router={router} />
      <Container>
        <h1>Hello world</h1>
        <Button text="Click me!" />
        <Button color="red" text="Neki novi button" />
      </Container>
      <Container size="sm">
        <Devider />
        <h1>neki naslov</h1>
        <div>neki text</div>
        <Input
          value={inputsValue.firstName}
          icon={<IconMoney />}
          placeholder="First name"
          onChange={(value: string) => handleInputsValue(value, "firstName")}
        />
        <Input
          value={inputsValue.lastName}
          icon={<IconNotification />}
          placeholder="Last name"
          onChange={(value: string) => handleInputsValue(value, "lastName")}
        />
        <Input
          value={newState}
          onChange={(value: string) => setNewState(value)}
          disabled={true}
        />
        <button onClick={() => console.log(inputsValue)}>Get values</button>
      </Container>
    </>
  );
}


export default App;
