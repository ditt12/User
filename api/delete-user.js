import connectDB from "../lib/db.js";

export default async function handler(req, res) {
  if (req.headers.cookie !== "admin=1") {
    return res.status(403).end();
  }

  const { user } = req.body;

  const db = await connectDB();
  await db.collection("users").deleteOne({ user });

  res.json({ ok: true });
}
