const { sendJson } = require("./_helpers");

module.exports = function handler(req, res) {
  sendJson(res, 200, {
    ok: true,
    service: "Roots of Bharat API"
  });
};
