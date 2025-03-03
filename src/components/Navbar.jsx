import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <nav className="flex space-x-5 bg-white shadow-md h-16 items-center p-4 w-full">
      
      <div className=" ">
        CollegeConnect
      </div>
      <div className = {'text-gray-500 hover:text-blue-700 hover:border-b-4 border-blue-700 font-normal font-sans'}>
          <Link to ="/">Programs</Link>
      </div>
      <div className = {'text-gray-500 hover:text-blue-700 hover:border-b-4 border-blue-700 font-normal font-sans'}>
          <Link to ="/">Date&Fees</Link>
      </div>
      <div className = {'text-gray-500 hover:text-blue-700 hover:border-b-4 border-blue-700 font-normal font-sans'}>
          <Link to ="/">Admissions</Link>
      </div>
      <div className = {'text-gray-500 hover:text-blue-700 hover:border-b-4 border-blue-700 font-normal font-sans'}>
          <Link to ="/">ContactUs</Link>
      </div>

</nav>
  );
  }
export default Navbar;
