import "./App.css";
import { Home, Page2 } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-2" element={<Page2 />} />
    </Routes>
  );
}

export default App;
