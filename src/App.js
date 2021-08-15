import myLogo from './assets/img/my_logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myLogo} className="App-logo" alt="Burhan Logo" />
        <p>
          Welcome to React and Netlify Class
        </p>
        <a
          className="App-link"
          href="https://burhan3759.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Sir Burhan 
        </a>
      </header>
    </div>
  );
}

export default App;
