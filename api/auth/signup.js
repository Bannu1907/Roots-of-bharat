const { methodNotAllowed, readJsonBody, sendJson } = require("../_helpers");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    methodNotAllowed(res, "POST");
    return;
  }

  try {
    const { name = "", email = "", password = "", interest = "" } = await readJsonBody(req);

    if (!name.trim() || !email.trim() || !password.trim()) {
      sendJson(res, 400, { ok: false, message: "Name, email, and password are required" });
      return;
    }

    sendJson(res, 201, {
      ok: true,
      message: "Demo account created",
      user: {
        id: `demo-${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        interest: interest || "Heritage explorer"
      }
    });
  } catch {
    sendJson(res, 400, { ok: false, message: "Could not read sign-up details" });
  }
};
