import './App.css';
import Header from './components/Header';
import Picture from './components/Picture';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="left"></div>
      <Header />
      <Picture />
      <Main />
    </div>
  );
}

export default App;
