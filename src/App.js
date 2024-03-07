import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <main>
    <Routes>
        <Route path="/" element={<Home />}/>
     </Routes>
    </main>
    <Footer />
    </div>
  );
}

export default App;
