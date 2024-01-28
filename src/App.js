import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetail from "./pages/bookDetail";
import Home from "./pages/home";
import Header from "./components/Header";
import StoreData from "./components/storeData";
import BookCategories from "./pages/categories";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<BookCategories />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
      <StoreData />
    </BrowserRouter>
  );
}

export default App;
