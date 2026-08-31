const { trails } = require("./_data");
const { methodNotAllowed, sendJson } = require("./_helpers");

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    methodNotAllowed(res);
    return;
  }

  const { type } = req.query;
  if (type) {
    const trail = trails[type];
    if (!trail) {
      sendJson(res, 404, { ok: false, message: "Trail not found" });
      return;
    }
    sendJson(res, 200, { ok: true, type, trail });
    return;
  }

  sendJson(res, 200, { ok: true, trails });
};
