import connectDB from "../lib/db.js";

export default async function handler(req, res) {
  const db = await connectDB();
  const users = await db.collection("users").find().toArray();
  res.json(users);
}
