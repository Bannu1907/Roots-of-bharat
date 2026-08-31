function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");

  let raw = "";
  for await (const chunk of req) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}

function methodNotAllowed(res, allowed = "GET") {
  res.setHeader("Allow", allowed);
  sendJson(res, 405, { ok: false, message: "Method not allowed" });
}

module.exports = {
  methodNotAllowed,
  readJsonBody,
  sendJson
};
