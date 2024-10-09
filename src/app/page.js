"use client"; 

import { useState } from 'react';
import OptionPane from "./components/OptionPane";
import DisplayPane from "./components/DisplayPane";
import AllPost from "./components/AllPosts"; 
import AllUser from "./components/Graph"; 
import Projects from "./components/Projects"; 

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handlePostsClick = () => {
    setCurrentComponent(<AllPost/>); 
  };

  const handleUsersClick = () => {
    setCurrentComponent(<AllUser />); 
  };

  const handleProjectsClick = () => {
    setCurrentComponent(<Projects />); 
  };

  return (
    <div className="flex h-screen">
      <div className="option-pane">
        <OptionPane 
          onPostsClick={handlePostsClick} 
          onUsersClick={handleUsersClick} 
          onProjectsClick={handleProjectsClick} 
        />
      </div>
      <div className="display-pane">
        {currentComponent ? currentComponent : <DisplayPane />}
      </div>
    </div>
  );
}
