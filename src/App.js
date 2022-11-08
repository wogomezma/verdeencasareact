import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Itemlistcontainer from './components/itemlistcontainer';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Navbar />
        <Itemlistcontainer greeting={"pendiente"}/>
        <Footer />
      </main>
{/* {       <header className="App-header">
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
      </header> } */}
    </div>
  );
}

export default App;

