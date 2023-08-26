import './App.css';
// import './styles/first.scss';
import './styles/second.scss';
import Calculator from './FirstSimpleComponent';
import Second from './SecondActivity/SecondActivity';

function App() {
  return (
    <div className="App">
      {/* <Calculator/> */}
      <Second></Second>
    </div>
  );
}

export default App;
