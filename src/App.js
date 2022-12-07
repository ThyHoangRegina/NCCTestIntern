import './App.css';
import Right from './components/right.js';
import Sidebar from './components/left.js';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Right/>
    </div>
  );
}

export default App;
