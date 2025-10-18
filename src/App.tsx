import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthGate from "./components/AuthGate.tsx";
import Home from "./components/Home.tsx";
import Upload from "./components/Upload.tsx";
import VideoList from "./components/VideoList.tsx";

const App: React.FC = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("vedeo-auth") === "ok") setAuthed(true);
  }, []);

  if (!authed) {
    return <AuthGate onSuccess={() => setAuthed(true)} />;
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;