const { regions } = require("./_data");
const { methodNotAllowed, sendJson } = require("./_helpers");

function regionText(region) {
  return [
    region.name,
    region.type,
    region.intro,
    ...region.tags,
    ...["history", "food", "arts", "temples", "places", "festivals", "traditions"].flatMap((key) => region[key].flat())
  ].join(" ").toLowerCase();
}

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    methodNotAllowed(res);
    return;
  }

  const { id, search = "", theme = "all" } = req.query;

  if (id) {
    const region = regions.find((item) => item.id === id);
    if (!region) {
      sendJson(res, 404, { ok: false, message: "Region not found" });
      return;
    }
    sendJson(res, 200, { ok: true, region });
    return;
  }

  const query = String(search).trim().toLowerCase();
  const selectedTheme = String(theme).toLowerCase();
  const filtered = regions.filter((region) => {
    const text = regionText(region);
    const matchesSearch = !query || text.includes(query);
    const matchesTheme = selectedTheme === "all" || text.includes(selectedTheme);
    return matchesSearch && matchesTheme;
  });

  sendJson(res, 200, {
    ok: true,
    count: filtered.length,
    regions: filtered
  });
};
