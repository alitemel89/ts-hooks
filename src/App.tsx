import './App.css'
import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UserReducerComponent from './components/useReducerComponent';
import UseStateComponent from './components/UseStateComponent';


function App() {
  return (
    <div>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
      <UserReducerComponent />
    </div>
  );
}

export default App;
