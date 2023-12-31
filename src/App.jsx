import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import SingleArticle from './components/articles/SingleArticle';
import CommentList from './components/comments/CommentList'
import SortPanel from './components/SortPanel';

function App() {

  return (
    <main>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Home />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/articles/:article_id/comments' element={<CommentList />} />
      </Routes>
    </main>
  )
}

export default App
