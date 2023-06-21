import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import ProgressBar from "../../components/progress-bar";

const ProgressBarPage = () => {
  const [progressValue, setProgressValue] = useState<number>(0);

  const handleProgressValue = (operation: "+" | "-") => {
    if (operation === "+") {
      const newValue = progressValue + 5;
      if (newValue <= 100) {
        setProgressValue(newValue);
      }
    } else if (operation === "-") {
      const newValue = progressValue - 5;
      if (newValue >= 0) {
        setProgressValue(newValue);
      }
    }
  };

  return (
    <Container>
      <h1>Progress bar</h1>
      <Devider />
      <ProgressBar progress={progressValue} />

      <div className="progresspage__btns">
        <Button onClick={() => handleProgressValue("-")} text="minus 5%" />
        <Button onClick={() => handleProgressValue("+")} text="plus 5%" />
      </div>
    </Container>
  );
};

export default ProgressBarPage;
