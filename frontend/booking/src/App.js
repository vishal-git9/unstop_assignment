import './App.css';
import Nav from './components/navbar';
import { Allroutes } from './routes/Allroutes';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Allroutes/>
    </div>
  );
}

export default App;
