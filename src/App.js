import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* 1 Header -> <Header/> */}
      <Header />
      <div className="app__page">
        {/* 2 Sidebar */}

        <Sidebar />
        {/* 3 Recommended Videos */}
        <RecommendedVideos />
      </div>
    </div>
    
  );
}

export default App;
