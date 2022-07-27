import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navbar';
import Main from './pages/Main';
import {
  Container
} from 'reactstrap'

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Main />
    </div>
  );
}

export default App;
