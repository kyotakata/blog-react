import { useState } from "react";
import { posts } from "./data/posts.js"
import { Header } from "./components/Header/Header.jsx"
import { Home } from "./components/Home/Home.jsx"

function App() {
  const [postDatas] = useState(posts); 
  return (
    <div>
      <Header/>
      <Home postDatas={postDatas}/>
    </div>
  );
}

export default App;
