import { Header } from "./components/Header.jsx"
import { Home } from "./components/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
