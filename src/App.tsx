
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'Components/Common/Header/Header'
import Home from 'Components/Pages/Home/Home'
import About from 'Components/Pages/About/About'
import PageNotFound from 'Components/Pages/Error/PageNotFound'
import React, { useEffect } from 'react'
function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      <BrowserRouter basename='/uixhello.github.io/looc-git-pages/'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
