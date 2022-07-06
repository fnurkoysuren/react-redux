import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Counter from "./components/Counter";
import Login from "./pages/Login";

function App() {

  const {dark} = useSelector(state => state.site);

  return (
    <div className={dark ? 'dark' : 'light'}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
