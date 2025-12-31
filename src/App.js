import { Header } from "./components/Header/Header.jsx"
import { Home } from "./components/Home/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Home/Detail.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
