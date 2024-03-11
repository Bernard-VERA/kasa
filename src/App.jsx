import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/GlobalStyle.scss'


function App() {
  return (
    <div className="App">
    <Header />
    <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
     </Routes>
    </main>
    <Footer />
    </div>
  );
}

export default App;
