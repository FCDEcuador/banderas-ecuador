import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'

export async function getData (key) {
  const client = new S3Client({
    region: process.env.REGION_ID,
    credentials: {
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      accessKeyId: process.env.ACCESS_KEY_ID
    }
  })

  const command = new GetObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: key
  })

  const { Body } = await client.send(command)

  const contents = await Body.transformToString()
  const data = JSON.parse(contents)

  return data
}
