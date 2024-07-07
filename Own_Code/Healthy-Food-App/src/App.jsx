import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  const foodItems = ["Salad", "Green Vegitables", "Anjir"];
  const onKeyDown=(event)=>{
    
    if(event.key==="Enter"){
      const newItem = event.target.value;
      event.target.value = "";
      console.log("The new Item entered is: " + newItem);
    }
      
  }
  return (
    <center>
      <Container>
        <h1 className="miHeading"> Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </center>
  );
}

export default App;
