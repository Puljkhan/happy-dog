import Container from "../../components/container";
import Devider from "../../components/devider";
import Input from "../../components/input";

const Contact = () => {
  const [inputsValue, setInputsValue] = useState;
  return (
    <Container>
      <h1>Contact page</h1>
      <Devider />
      <div>
        <Field id="firstName" />
        <div className="field">
          <label htmlFor=""></label>
          <Input
            value={inputsValue.firstName}
            onChange={(value) => handleInputsValue(value, "firstName")}
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
