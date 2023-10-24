import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import SingleArticle from './components/SingleArticle';

function App() {

  return (
    <main>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Home />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>
    </main>
  )
}

export default App
