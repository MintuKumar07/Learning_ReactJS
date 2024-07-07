import ClockHeading from "./components/ClockHeading";
import ClockSlogans from "./components/ClockSlogans";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogans />
      <CurrentTime />
    </center>
  );
}

export default App;
