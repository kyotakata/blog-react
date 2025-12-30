import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header.jsx"
import { Home } from "./components/Home/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Home/Detail.jsx";

function App() {
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
    }
    fetcher()
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home posts={posts}/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
