import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profiles/:username" element={<Profile />}></Route>
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path="/articles/:id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login" element={<Mypage />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
