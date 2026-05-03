export default function handler(req, res) {
  const { user, pass } = req.body;

  if (user === "asrv" && pass === "asyraf") {
    res.setHeader("Set-Cookie", "admin=1; Path=/");
    return res.json({ ok: true });
  }

  res.json({ ok: false });
}
