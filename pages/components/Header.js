import React from "react";

function Header() {
  return (
    <div className="border border-purple-600 grid grid-flow-col grid-cols-3 justify-items-center h-[100px]">
      <div className="border border-purple-300">
        <h1>left</h1>
      </div>
      <div className="border border-purple-200">
        <h1>center</h1>
      </div>
      <div className="border border-purple-100">
        <h1>right</h1>
      </div>
    </div>
  );
}

export default Header;
