import React from 'react'

const Header = ({ onMenuClick }) => {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8 flex justify-between items-center bg-black/80 backdrop-blur-lg">
        <div className="text-5xl font-bold text-pink-400">🐰</div>
        <button 
          onClick={onMenuClick}
          className="bg-transparent text-5xl border-2 border-white text-white font-bold px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
        >
          MENU
        </button>
      </header>
    </div>
  )
}

export default Header
