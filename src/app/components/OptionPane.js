import React from 'react';

const OptionPane = ({ onPostsClick, onUsersClick, onProjectsClick }) => {
  return (
    <div className="option-pane p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">LinkGenie Dashboard</h2>
      <div className="border-b border-gray-300 mb-4"></div> {/* Horizontal line */}
      
      <button 
        onClick={onPostsClick} 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 whitespace-nowrap overflow-hidden text-ellipsis"
      >
        All Posts
      </button>

      <button 
        onClick={onUsersClick} 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 whitespace-nowrap overflow-hidden text-ellipsis"
      >
        All Users
      </button>

      <button 
        onClick={onProjectsClick} 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 whitespace-nowrap overflow-hidden text-ellipsis"
      >
        Projects
      </button>
    </div>
  );
};

export default OptionPane;
