import styles from "./App.module.css";
import Display from "./components/Display";
import BtnsContainer from "./components/BtnsContainer";

function App() {
  return (
    <center className={styles.calc}>
      <Display></Display>
      <BtnsContainer></BtnsContainer>
      
    </center>
  );
}

export default App
