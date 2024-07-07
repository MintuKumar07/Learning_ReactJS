import styles from "./App.module.css";
import Display from "./components/Display";
import BtnsContainer from "./components/BtnsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText==='C'){
      setCalVal('');
    }
    else if(buttonText==='='){
      setCalVal(eval(calVal));
    }
    else{
      setCalVal(calVal+buttonText);
    }
  }

  return (
    <center className={styles.calc}>
      <Display displayVal={calVal}></Display>
      <BtnsContainer onButtonClick={onButtonClick}></BtnsContainer>
    </center>
  );
}

export default App;
