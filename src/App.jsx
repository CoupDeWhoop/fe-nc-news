import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {

  return (
    <main>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
