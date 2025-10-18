import React, { useEffect, useState } from "react";
import { s3, BUCKET } from "../aws-config";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const out = await s3.send(
          new ListObjectsV2Command({ Bucket: BUCKET })
        );
        const keys = (out.Contents || [])
          .filter(obj => obj.Key)
          .map(obj => obj.Key as string);
        setVideos(keys);
      } catch (e) {
        setVideos([]);
      }
      setLoading(false);
    })();
  }, []);

  const getVideoUrl = (key: string) => {
    // 假设 R2 bucket 为公开可读
    return `${process.env.REACT_APP_R2_ENDPOINT}/${key}`;
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", marginTop: 40 }}>
      <h2>已上传视频</h2>
      {loading && <div>加载中...</div>}
      {!loading && videos.length === 0 && <div>暂无视频</div>}
      <div>
        {videos.map(key => (
          <div key={key} style={{ marginBottom: 30 }}>
            <div>{key}</div>
            <video
              src={getVideoUrl(key)}
              controls
              style={{ width: "100%", maxWidth: 500 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;