import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header name='Anna' color='purple' />
      <Main greet='howdy'/>
      <Sidebar greet='Hi' />
    </div>
  );
}

export default App;
