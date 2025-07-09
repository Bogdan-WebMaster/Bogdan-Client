
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home"
import ArticlePage from './pages/articles/ArticlesPage';
import Layout from './layout/Layout';
import './index.css';
function App() {
  

  return (
    <>
    <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
    </Layout>
    </>
  )
}

export default App
