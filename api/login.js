import connectDB from "../lib/db.js";

export default async function handler(req, res) {
  const { user, pass } = req.query;

  const db = await connectDB();
  const u = await db.collection("users").findOne({ user });

  if (!u) return res.json({ status: "fail" });
  if (u.password !== pass) return res.json({ status: "fail" });

  const now = Math.floor(Date.now() / 1000);

  if (u.expiry && now > u.expiry) {
    return res.json({ status: "expired" });
  }

  res.json({ status: "ok" });
}
