import logo from './logo.svg';
import './App.css';
import Museum from './Museum';
import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/* <Museum /> */}
        <SearchBar/>
    </div>
  );
}

export default App;
