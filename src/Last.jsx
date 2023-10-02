import React, { useState, useEffect } from "react";
import { UserContext } from "./Context";
import Footer from "./Footer";
import NavBar from "./NavBar";
import OnScreenCalculator from "./OnScreenCalculator";

function Last() {
  const [name, setName] = useState("");
  useEffect(() => {
    const savedName = localStorage.getItem("name") || "";
    setName(savedName);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ name, setName }}>
        <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">
        <OnScreenCalculator /></div>
        <Footer /></div>
      </UserContext.Provider>
    </div>
  );
}

export default Last;
