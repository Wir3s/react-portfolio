// import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
