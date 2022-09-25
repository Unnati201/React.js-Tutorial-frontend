import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { AuthProvider } from "./context/AuthContext";

import ListTutorials from "./components/ListTutorials";
import GetSingleTutotial from "./components/GetSingleTutotial";
import AddTutorial from "./components/AddTutorial";
import EditTutorial from "./components/EditTutorial";
import Register from "./components/Register";
import Login from "./components/Login";
import HeaderComponent from "./components/HeaderComponent";

import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "100px auto auto auto",
        width: "40vw",
      }}
    >
      <Router>
        <AuthProvider>
          <HeaderComponent />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ListTutorials />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/edit/:id" element={<EditTutorial />} />
            <Route path="/details/:id" element={<GetSingleTutotial />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
