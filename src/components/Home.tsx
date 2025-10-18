import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}>
      <h2>vedeoweb 主页</h2>
      <button onClick={() => nav("/upload")} style={{ width: "100%", marginBottom: 20 }}>
        上传视频
      </button>
      <button onClick={() => nav("/videos")} style={{ width: "100%" }}>
        查看已上传视频
      </button>
    </div>
  );
};

export default Home;