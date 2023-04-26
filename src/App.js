// import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
