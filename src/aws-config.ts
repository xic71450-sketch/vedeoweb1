import { S3Client } from "@aws-sdk/client-s3";

const REGION = process.env.REACT_APP_R2_REGION || "auto";
const ENDPOINT = process.env.REACT_APP_R2_ENDPOINT!;
const ACCESS_KEY_ID = process.env.REACT_APP_R2_ACCESS_KEY_ID!;
const SECRET_ACCESS_KEY = process.env.REACT_APP_R2_SECRET_ACCESS_KEY!;

export const s3 = new S3Client({
  region: REGION,
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  forcePathStyle: true // Cloudflare R2 需要
});
export const BUCKET = process.env.REACT_APP_R2_BUCKET!;