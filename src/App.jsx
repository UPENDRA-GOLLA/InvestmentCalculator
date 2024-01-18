import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    investmentValue: 10000,
    annaulInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration > 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={handleChange} />;
      {!inputIsValid && (
        <p className="center"> Please enter a duration greter than Zero</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
