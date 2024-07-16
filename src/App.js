import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <button onClick={() => dispatch(increment())}>增加</button>
          <div>{ count }</div>
      </header>
      
    </div>
  );
}

export default App;
