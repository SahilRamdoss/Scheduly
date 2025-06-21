import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './Layout.jsx';
import MySpace from './MySpace/MySpace.jsx';
import Error404 from './Error404.jsx';

function App() {

  const [screenWidth, setScreenWidth] = useState();

  useEffect(function () {
    const scrWidth = window.innerWidth;
    setScreenWidth(scrWidth);

    if (scrWidth < 768) {
      const screenHeight = Number(screen.height);
      const navHeight = document.getElementById("Navbar").offsetHeight;
      const footHeight = document.getElementById("Footer").offsetHeight;
      const contentContainer = document.getElementById("content_container");

      const containerHeight = screenHeight - navHeight - footHeight;

      contentContainer.style.height = `${containerHeight}px`;
    }
  }, [window.innerWidth])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout screenWidth={screenWidth} />}>
            <Route path="/" element={<MySpace screenWidth={screenWidth} />} />
          </Route>
          <Route path="/" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
