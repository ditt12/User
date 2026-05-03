import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

export default async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("auth");
  }
  return db;
}
