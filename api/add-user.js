import connectDB from "../lib/db.js";

function getExpiry(plan) {
  if (plan === "lifetime") return null;
  const now = Math.floor(Date.now() / 1000);
  if (plan === "1d") return now + 86400;
  if (plan === "7d") return now + 86400 * 7;
  if (plan === "30d") return now + 86400 * 30;
}

export default async function handler(req, res) {
  if (req.headers.cookie !== "admin=1") {
    return res.status(403).end();
  }

  const { user, pass, plan } = req.body;

  const db = await connectDB();
  await db.collection("users").insertOne({
    user,
    password: pass,
    expiry: getExpiry(plan)
  });

  res.json({ ok: true });
         }
