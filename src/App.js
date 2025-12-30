import { useState } from "react";
import { posts } from "./data/posts.js"
import { Header } from "./components/Header/Header.jsx"
import { Home } from "./components/Home/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Home/Detail.jsx";

function App() {
  const [postDatas] = useState(posts); 
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home postDatas={postDatas}/>}/>
          <Route path="/detail/:id" element={<Detail postDatas={postDatas}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
