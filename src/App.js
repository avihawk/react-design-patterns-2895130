import { SplitScreen } from "./SplitScreen";

const Left = () => {
  return <h1>Left!</h1>
}

const Right = () => {
  return <h1>Right!</h1>
}

function App() {
  return (
      <SplitScreen
        left={Left}
        right={Right}
      />
  );
}

export default App;
