import React from "react";

function Header() {
  return (
    <div className="sticky top-0 z-50 shadow-md grid grid-flow-col grid-cols-3 justify-items-center h-[100px] items-center">
      <div className="border border-purple-300">
        <h1>left</h1>
      </div>
      <div className="border border-purple-200">
        <h1>center</h1>
      </div>
      <div className="border border-purple-100">
        <div className="flex space-x-4 justif">
          <h1>right</h1>
          <h1>right</h1>
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
