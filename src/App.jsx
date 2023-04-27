import "./App.css";
import Board from "./Game/Board";

function App() {
  return <div className="app">
    <div className="left">
      <h1 className="title glow">Tic Tac Toe Game</h1>
    </div>
    <div className="right"><Board/></div>
    
  </div>;
}

export default App;
