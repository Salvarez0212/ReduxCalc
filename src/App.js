import "./App.css";
import { Button } from "./components/Button.components";
import { Input } from "./components/Input.components";
import {
  INCREMENT,
  DECREMENT,
  DIVIDE,
  MULTIPLY,
} from "./redux/reducers/mathReducer";

function App() {
  const actions = [INCREMENT, DECREMENT, DIVIDE, MULTIPLY];
  return (
    <div className="App">
      <Input />
      {actions.map((e) => {
        return (
          <Button action={e} key={e}>
            {e}
          </Button>
        );
      })}
    </div>
  );
}

export default App;
