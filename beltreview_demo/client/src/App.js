import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <Switch>
        <Route exact path="/" />
          <Main></Main>

      </Switch>
    </div>
  );
}

export default App;
