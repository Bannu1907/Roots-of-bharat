const { demoUsers } = require("../_data");
const { methodNotAllowed, readJsonBody, sendJson } = require("../_helpers");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    methodNotAllowed(res, "POST");
    return;
  }

  try {
    const { email = "", password = "" } = await readJsonBody(req);
    const user = demoUsers.find((item) => item.email.toLowerCase() === String(email).toLowerCase());

    if (!user || user.password !== password) {
      sendJson(res, 401, { ok: false, message: "Invalid demo email or password" });
      return;
    }

    sendJson(res, 200, {
      ok: true,
      message: "Signed in successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        interest: user.interest
      }
    });
  } catch {
    sendJson(res, 400, { ok: false, message: "Could not read sign-in details" });
  }
};
