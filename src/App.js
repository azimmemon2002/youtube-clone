import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Searchpage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchQuery"
            element={
              <div className="app__mainpage">
                <Sidebar />
                <Searchpage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app__mainpage">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
