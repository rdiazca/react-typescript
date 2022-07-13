import { Counter } from "./components/Counter";
import { User } from "./components/User";

import { TimerFather } from "./components/TimerFather";
import { CounterReducer } from "./components/CounterReducer";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useState</h2>
      <hr />
      <Counter />
      <User />
      <h2>useEffect -useRef</h2>
      <hr />
      <TimerFather />

      <h2>useReducer</h2>
      <hr />
      <CounterReducer />

      <h2>customHooks</h2>
      <hr />
      <Form />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
