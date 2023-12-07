import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeAsyncLoad = async (): Promise<void> => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    void fakeAsyncLoad();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
