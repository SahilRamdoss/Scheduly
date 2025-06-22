import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout.jsx';
import MySpace from './MySpace/MySpace.jsx';
import Error404 from './Error404.jsx';
import Login from './Login.jsx';

function App() {

  const [screenWidth, setScreenWidth] = useState();
  const [isAuthenticated, setAuthentication] = useState(true);

  useEffect(function () {
    const scrWidth = window.innerWidth;
    setScreenWidth(scrWidth);
  }, [window.innerWidth])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={isAuthenticated?<Layout screenWidth={screenWidth}/>:<Navigate to='/login'/> }>
            <Route path="/" element={<MySpace screenWidth={screenWidth} />} />
          </Route>

          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
