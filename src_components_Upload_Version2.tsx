import React, { useState } from "react";
import { s3, BUCKET } from "../aws-config";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setMsg("");
    try {
      await s3.send(
        new PutObjectCommand({
          Bucket: BUCKET,
          Key: file.name,
          Body: file,
          ContentType: file.type,
        })
      );
      setMsg("上传成功！");
    } catch (e) {
      setMsg("上传失败，请重试！");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}>
      <h2>上传视频</h2>
      <input
        type="file"
        accept="video/*"
        onChange={e => setFile(e.target.files?.[0] || null)}
      />
      <button
        disabled={!file || loading}
        onClick={handleUpload}
        style={{ marginTop: 10, width: "100%" }}
      >
        {loading ? "上传中..." : "上传"}
      </button>
      <div style={{ marginTop: 10 }}>{msg}</div>
    </div>
  );
};

export default Upload;