import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ArticlePage from './components/ArticlePage';
import Login from './components/Login';

function App() {
  return (<div id="main-body">
  <Header />
  <NavBar />
  <Routes>
    <Route path='/'
    element={
      <Home />
    } />
    <Route path='/article/:article_id'
    element={<ArticlePage />}
    />
        <Route path='/login'
    element={<Login />}
    />
  </Routes>
  </div>
  )
}

export default App;
