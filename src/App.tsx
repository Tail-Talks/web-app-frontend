import React from "react";
import "./styles/App.css";
import SignUp from "./pages/SignUp/SignUp";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<SignUp />}></Route>
      </Routes> */}
      <SignUp />
    </div>
  );
}

export default App;
