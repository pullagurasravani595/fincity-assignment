import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import './App.css';

const App = () => (
    <BrowserRouter>
        <Header />
        <About />
    </BrowserRouter>
)

export default App;
