import Card from "react-bootstrap/Card";
import "./App.css";
import { Counter } from "./Components/Counter";

function App() {
  return (
    <>
      <Card
        style={{ width: "18rem", backgroundColor: "#00FFFF", color: "#000000" }}
      >
        <Card.Body>
          <Card.Title>
            <h2>Counter App</h2>
          </Card.Title>
          <Counter />
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
