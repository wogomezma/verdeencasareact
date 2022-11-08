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
    </div>
  );
}

export default App;

