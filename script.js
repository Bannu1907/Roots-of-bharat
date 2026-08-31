const regions = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    type: "State spotlight",
    intro: "A desert kingdom of forts, stepwells, painted havelis, devotional music, royal kitchens, and craft traditions shaped by trade routes and warrior clans.",
    tags: ["Forts", "Desert fairs", "Miniature painting", "Folk music"],
    history: [
      ["Rajput kingdoms", "Cities such as Jaipur, Jodhpur, Udaipur, and Jaisalmer preserve stories of Rajput courts, alliances, battles, and patronage of art."],
      ["Living heritage", "Old markets, palace museums, baoris, and village festivals keep the region's memory visible in everyday life."]
    ],
    food: [
      ["Dal baati churma", "A hearty meal linked with desert conditions, long travel, and preserved ingredients."],
      ["Ghevar and kachori", "Festival sweets and market snacks that make Jaipur, Jodhpur, and nearby towns memorable for food explorers."]
    ],
    arts: [
      ["Ghoomar and Kalbeliya", "Graceful circular movement and energetic folk performance show different community traditions."],
      ["Blue pottery and block printing", "Jaipur pottery, Bagru prints, and Sanganeri textiles are key craft trails."]
    ],
    temples: [
      ["Dilwara Temples", "Marble Jain temples near Mount Abu known for precise carving and quiet devotional architecture."],
      ["Brahma Temple, Pushkar", "A rare temple dedicated to Brahma, placed within a major pilgrimage town and fair circuit."]
    ],
    places: [
      ["Amber Fort", "A hill fort-palace with courtyards, mirror work, gateways, and views over Maota Lake."],
      ["Jaisalmer Fort", "A living fort with homes, shrines, shops, and sandstone lanes."]
    ],
    festivals: [
      ["Pushkar Fair", "A major gathering around pilgrimage, cattle trading, markets, music, and desert celebration."],
      ["Gangaur and Teej", "Seasonal festivals where processions, songs, and decorated idols animate old city streets."]
    ],
    traditions: [
      ["Desert hospitality", "Food, music, water wisdom, and craft practices shaped by life across arid landscapes."],
      ["Textile communities", "Block printing, tie-dye, embroidery, and mirror work keep village craft economies visible."]
    ]
  },
  {
    id: "gujarat",
    name: "Gujarat",
    type: "Coastal heritage",
    intro: "A meeting point of ports, stepwells, textiles, temple towns, salt landscapes, craft villages, and festival dance.",
    tags: ["Garba", "Stepwells", "Textiles", "Coastal trade"],
    history: [
      ["Trade and cities", "Historic ports and mercantile communities connected Gujarat to the Arabian Sea and inland trade networks."],
      ["Solanki legacy", "Temple architecture and stepwells show advanced design, sculpture, and water wisdom."]
    ],
    food: [
      ["Gujarati thali", "A balanced spread of dal, kadhi, vegetables, farsan, breads, chutneys, and sweets."],
      ["Dhokla and undhiyu", "Popular dishes that reflect fermentation, seasonal produce, and community kitchens."]
    ],
    arts: [
      ["Garba and dandiya", "Festival dances performed especially during Navratri with circular formations and rhythmic clapping."],
      ["Bandhani and patola", "Tie-dye and double ikat traditions make Gujarat a major textile destination."]
    ],
    temples: [
      ["Somnath Temple", "A major Jyotirlinga shrine on the coast, associated with repeated rebuilding and resilience."],
      ["Dwarkadhish Temple", "A sacred Krishna temple in Dwarka, part of important pilgrimage traditions."]
    ],
    places: [
      ["Rani ki Vav", "A UNESCO-listed stepwell at Patan known for carved levels and water architecture."],
      ["Rann of Kutch", "A salt desert with craft villages, seasonal festivals, and wide open landscapes."]
    ],
    festivals: [
      ["Navratri", "Nine nights of garba and dandiya that turn streets and community grounds into dance spaces."],
      ["Rann Utsav", "A seasonal cultural festival of crafts, food, music, and salt-desert travel."]
    ],
    traditions: [
      ["Stepwell culture", "Historic water architecture shows engineering, sculpture, and community gathering around scarce water."],
      ["Craft villages", "Bandhani, ajrakh, embroidery, lacquer work, and bell making connect travelers to artisan homes."]
    ]
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    type: "Heartland heritage",
    intro: "Central India brings together ancient caves, Buddhist sites, forest traditions, temple sculpture, tribal arts, and layered dynastic history.",
    tags: ["Sanchi", "Khajuraho", "Tribal art", "Caves"],
    history: [
      ["Ancient crossroads", "The region holds Buddhist, Hindu, Jain, tribal, and medieval histories across sites such as Sanchi, Bhimbetka, and Mandu."],
      ["Temple building", "Khajuraho and other sites show the sophistication of central Indian architecture and sculpture."]
    ],
    food: [
      ["Poha and jalebi", "A beloved breakfast pairing in cities such as Indore and Bhopal."],
      ["Bhutte ka kees", "A corn-based dish tied to Malwa's seasonal produce and street food culture."]
    ],
    arts: [
      ["Gond art", "A vivid storytelling art tradition using patterns, nature forms, and community memory."],
      ["Matki and Rai dance", "Folk forms connected to celebration, rhythm, and local identity."]
    ],
    temples: [
      ["Mahakaleshwar, Ujjain", "A major Jyotirlinga shrine central to Ujjain's sacred geography."],
      ["Khajuraho temples", "Temple groups known for sculptural detail, architecture, and symbolic programs."]
    ],
    places: [
      ["Sanchi Stupa", "A major Buddhist monument with gateways, carvings, and long sacred history."],
      ["Bhimbetka rock shelters", "Ancient rock art sites that open a window into early human expression."]
    ],
    festivals: [
      ["Khajuraho Dance Festival", "Classical dance performances staged near the temple complex connect sculpture and movement."],
      ["Malwa Utsav", "A celebration of regional music, food, craft, and folk traditions."]
    ],
    traditions: [
      ["Gond storytelling", "Pattern-rich paintings preserve memory, ecology, community myths, and everyday observations."],
      ["Tribal markets", "Weekly haats carry local produce, crafts, oral exchange, and community identity."]
    ]
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    type: "River and arts",
    intro: "A region of river culture, literature, terracotta temples, Durga Puja artistry, classical music, theatre, and beloved sweets.",
    tags: ["Durga Puja", "Terracotta", "Literature", "Sweets"],
    history: [
      ["Bengal Renaissance", "Kolkata and Bengal shaped modern Indian literature, reform, theatre, education, and nationalist thought."],
      ["Temple towns", "Bishnupur preserves terracotta architecture, music traditions, and craft lineages."]
    ],
    food: [
      ["Shorshe ilish", "Hilsa cooked with mustard, closely tied to river cuisine and seasonal memory."],
      ["Rasgulla and sandesh", "Milk-based sweets that are central to celebration and hospitality."]
    ],
    arts: [
      ["Durga Puja artistry", "Temporary pandals combine sculpture, lighting, craft, theatre, and community participation."],
      ["Baul music", "Mystic folk music traditions centered on poetry, devotion, and wandering performance."]
    ],
    temples: [
      ["Dakshineswar Kali Temple", "A major riverside temple near Kolkata connected with devotional movements."],
      ["Bishnupur temples", "Terracotta temples that combine architecture, storytelling panels, and local craft."]
    ],
    places: [
      ["Kolkata heritage streets", "Colonial-era institutions, book markets, theatres, and old neighborhoods."],
      ["Sundarbans", "A delta landscape where ecology, river life, and local culture meet."]
    ],
    festivals: [
      ["Durga Puja", "A citywide public art, devotion, food, and community festival recognized by UNESCO."],
      ["Poila Boishakh", "Bengali New Year celebrations with food, music, markets, and family gatherings."]
    ],
    traditions: [
      ["Adda", "Long, lively conversation around tea, literature, politics, art, and neighborhood life."],
      ["Terracotta craft", "Bishnupur's temple panels and craft lineages turn local clay into narrative architecture."]
    ]
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    type: "Temple and classical arts",
    intro: "A southern cultural powerhouse of Dravidian temples, Tamil literature, Bharatanatyam, Carnatic music, bronze casting, and deeply rooted food traditions.",
    tags: ["Dravidian temples", "Bharatanatyam", "Carnatic music", "Sangam heritage"],
    history: [
      ["Tamil literary depth", "Sangam poetry, later devotional works, and classical scholarship give the region one of India's richest literary traditions."],
      ["Chola and Pandya legacy", "Temple building, bronze sculpture, maritime links, and inscriptions preserve powerful historical records."]
    ],
    food: [
      ["Idli, dosa, and sambar", "Daily staples shaped by fermentation, rice, lentils, and regional spice balances."],
      ["Pongal", "A dish and a harvest festival symbol connected to gratitude, cattle, sun, and fields."]
    ],
    arts: [
      ["Bharatanatyam", "A classical dance form known for expressive storytelling, rhythm, geometry, and devotional themes."],
      ["Tanjore painting and bronze", "Temple-linked art traditions with gold work, icons, and ritual craftsmanship."]
    ],
    temples: [
      ["Meenakshi Amman Temple", "Madurai's temple city landmark with gopurams, halls, sculpture, and ritual life."],
      ["Brihadeeswarar Temple", "A Chola masterpiece at Thanjavur known for scale, stone work, and inscriptions."]
    ],
    places: [
      ["Mahabalipuram", "Rock-cut monuments and shore temple architecture connected to Pallava heritage."],
      ["Chettinad mansions", "Homes, craft, cuisine, and architecture shaped by merchant communities."]
    ],
    festivals: [
      ["Pongal", "A harvest festival honoring the sun, cattle, fields, and family gratitude."],
      ["Margazhi music season", "A major Chennai-centered season of Carnatic concerts, dance, and devotional arts."]
    ],
    traditions: [
      ["Kolam", "Rice-flour threshold art made at dawn as a daily gesture of beauty and welcome."],
      ["Bronze casting", "Chola-linked icon-making traditions continue through precise ritual and craft knowledge."]
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    type: "Coast and ritual arts",
    intro: "Kerala blends backwaters, temple festivals, spice routes, Ayurveda, mural painting, Kathakali, Theyyam, and layered coastal history.",
    tags: ["Kathakali", "Spice routes", "Backwaters", "Theyyam"],
    history: [
      ["Maritime exchange", "Ports connected Kerala with Arab, Roman, Chinese, and later European trade, especially through spices."],
      ["Temple and community arts", "Ritual performance, mural painting, and festivals are tied to local shrines and social memory."]
    ],
    food: [
      ["Sadya", "A festive banana-leaf meal with rice, curries, pickles, payasam, and carefully ordered flavors."],
      ["Appam and stew", "Soft rice pancakes with coconut-based stew, reflecting Kerala's coastal ingredients."]
    ],
    arts: [
      ["Kathakali", "A classical dance-drama with elaborate costume, makeup, gesture, and music."],
      ["Theyyam", "A ritual performance tradition of north Kerala involving costume, devotion, and community storytelling."]
    ],
    temples: [
      ["Padmanabhaswamy Temple", "A major temple in Thiruvananthapuram known for architecture, ritual tradition, and history."],
      ["Guruvayur Temple", "A major Krishna shrine and pilgrimage center."]
    ],
    places: [
      ["Fort Kochi", "A coastal heritage area shaped by trade, architecture, churches, synagogues, and markets."],
      ["Alappuzha backwaters", "Waterways, houseboats, village life, and coconut landscapes."]
    ],
    festivals: [
      ["Onam", "A harvest festival with pookalam flower carpets, boat races, games, and sadya meals."],
      ["Thrissur Pooram", "A grand temple festival known for percussion ensembles, decorated elephants, and fireworks."]
    ],
    traditions: [
      ["Ayurveda", "Wellness practices rooted in local medicine, herbs, oil therapies, and seasonal routines."],
      ["Boat and backwater life", "Waterways shape travel, food, farming, fishing, and village rhythms."]
    ]
  }
];

const trails = {
  sacred: [
    "Begin in Madurai at Meenakshi Amman Temple for temple-city culture.",
    "Move to Ujjain for Mahakaleshwar and the sacred geography of the Shipra.",
    "Continue to Somnath and Dwarka for Gujarat's coastal pilgrimage route.",
    "End near Kolkata at Dakshineswar and the terracotta temples of Bishnupur."
  ],
  food: [
    "Taste a Gujarati thali and learn how farsan, dal, kadhi, and sweets balance one plate.",
    "Explore Rajasthan through dal baati churma, kachori, and desert-friendly cooking.",
    "Travel south for Tamil breakfast traditions and Kerala's banana-leaf sadya.",
    "Finish in Bengal with mustard fish, sweets, and old market food culture."
  ],
  arts: [
    "Start with Bharatanatyam and bronze traditions in Tamil Nadu.",
    "Follow Kathakali, Theyyam, and mural painting in Kerala.",
    "Study Gond art and central Indian rock art in Madhya Pradesh.",
    "Close with Bengal's Durga Puja artistry and Rajasthan's folk performance."
  ]
};

const categoryMeta = {
  history: {
    icon: "H",
    label: "History",
    summary: "Dynasties, stories, timelines, old cities, monuments, and living memory."
  },
  food: {
    icon: "F",
    label: "Food",
    summary: "Signature dishes, sweets, street food, festival meals, and local ingredients."
  },
  arts: {
    icon: "D",
    label: "Dance and Arts",
    summary: "Classical forms, folk performance, music, textiles, paintings, and crafts."
  },
  temples: {
    icon: "T",
    label: "Temples",
    summary: "Sacred sites, pilgrimage routes, architecture, rituals, and local beliefs."
  },
  places: {
    icon: "P",
    label: "Famous Places",
    summary: "Forts, museums, heritage streets, natural landmarks, and travel highlights."
  },
  festivals: {
    icon: "E",
    label: "Festivals",
    summary: "Seasonal celebrations, processions, fairs, public art, music, and community rituals."
  },
  traditions: {
    icon: "R",
    label: "Traditions",
    summary: "Everyday practices, crafts, local knowledge, social customs, and living heritage."
  }
};

const featurePages = {
  history: "history.html",
  food: "food.html",
  arts: "arts.html",
  temples: "temples.html",
  places: "places.html",
  festivals: "festivals.html",
  traditions: "traditions.html"
};

let selectedRegion = regions[0];
let saved = new Set(JSON.parse(localStorage.getItem("rootsOfBharatSaved") || "[]"));

const searchInput = document.querySelector("#searchInput");
const themeFilter = document.querySelector("#themeFilter");
const regionName = document.querySelector("#regionName");
const selectedType = document.querySelector("#selectedType");
const regionIntro = document.querySelector("#regionIntro");
const tags = document.querySelector("#tags");
const tabContent = document.querySelector("#tabContent");
const favoriteButton = document.querySelector("#favoriteButton");
const regionCards = document.querySelector("#regionCards");
const trailList = document.querySelector("#trailList");
const dashboard = document.querySelector("#dashboard");
const dashboardType = document.querySelector("#dashboardType");
const dashboardTitle = document.querySelector("#dashboardTitle");
const dashboardIntro = document.querySelector("#dashboardIntro");
const dashboardIcon = document.querySelector("#dashboardIcon");
const dashboardItems = document.querySelector("#dashboardItems");
const dashboardStats = document.querySelector("#dashboardStats");
const backToExplore = document.querySelector("#backToExplore");

function getSearchText(region) {
  return [
    region.name,
    region.type,
    region.intro,
    ...region.tags,
    ...["history", "food", "arts", "temples", "places", "festivals", "traditions"].flatMap((key) => region[key].flat())
  ].join(" ").toLowerCase();
}

function matchesTheme(region, theme) {
  if (theme === "all") return true;
  if (theme === "dance") return getSearchText(region).includes("dance") || getSearchText(region).includes("music") || getSearchText(region).includes("art");
  if (theme === "crafts") return getSearchText(region).includes("craft") || getSearchText(region).includes("textile") || getSearchText(region).includes("painting");
  return getSearchText(region).includes(theme);
}

function filteredRegions() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const theme = themeFilter ? themeFilter.value : "all";
  return regions.filter((region) => {
    const haystack = getSearchText(region);
    return (!query || haystack.includes(query)) && matchesTheme(region, theme);
  });
}

function renderDetail() {
  if (!regionName || !selectedType || !regionIntro || !tags || !favoriteButton || !tabContent) return;

  regionName.textContent = selectedRegion.name;
  selectedType.textContent = selectedRegion.type;
  regionIntro.textContent = selectedRegion.intro;
  tags.innerHTML = selectedRegion.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

  const isSaved = saved.has(selectedRegion.id);
  favoriteButton.setAttribute("aria-pressed", String(isSaved));
  favoriteButton.querySelector(".star").textContent = isSaved ? "*" : "+";
  favoriteButton.querySelector("span:last-child").textContent = isSaved ? "Saved" : "Save";

  document.querySelectorAll(".map-pin").forEach((pin) => {
    pin.classList.toggle("active", pin.dataset.region === selectedRegion.id);
  });

  const previewItems = Object.entries(categoryMeta).map(([key, meta]) => [
    meta.label,
    `${meta.summary} Open the ${meta.label.toLowerCase()} page for ${selectedRegion.name}.`,
    key
  ]);

  tabContent.innerHTML = `<ul class="info-list">${previewItems.map(([title, body, key]) => `
    <li class="info-card">
      <h3>${title}</h3>
      <p>${body}</p>
      <button class="mini-open" type="button" data-dashboard-tab="${key}">Open page</button>
    </li>
  `).join("")}</ul>`;
}

function renderCards() {
  if (!regionCards) return;

  const items = filteredRegions();
  if (!items.length) {
    regionCards.innerHTML = `<div class="empty-state">No matching region yet. Try another search or theme.</div>`;
    return;
  }

  regionCards.innerHTML = items.map((region) => `
    <article class="region-card">
      <div>
        <p class="eyebrow">${region.type}</p>
        <h3>${region.name}</h3>
        <p>${region.intro}</p>
      </div>
      <button type="button" data-card-region="${region.id}" data-card-dashboard="history">Open history page</button>
    </article>
  `).join("");
}

function renderTrail(kind = "sacred") {
  if (!trailList) return;

  trailList.innerHTML = trails[kind].map((item) => `<li>${item}</li>`).join("");
}

function selectRegion(id) {
  const next = regions.find((region) => region.id === id);
  if (!next) return;
  selectedRegion = next;
  renderDetail();
  const exploreSection = document.querySelector("#explore");
  if (exploreSection) exploreSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openDashboard(tabKey, regionId = selectedRegion.id) {
  if (featurePages[tabKey]) {
    window.location.href = `${featurePages[tabKey]}?region=${encodeURIComponent(regionId)}`;
    return;
  }

  if (!dashboard || !dashboardType || !dashboardTitle || !dashboardIntro || !dashboardIcon || !dashboardItems || !dashboardStats) return;

  const next = regions.find((region) => region.id === regionId);
  const meta = categoryMeta[tabKey];
  if (!next || !meta) return;

  selectedRegion = next;
  renderDetail();

  const items = selectedRegion[tabKey];
  dashboardType.textContent = `${selectedRegion.type} dashboard`;
  dashboardTitle.textContent = `${selectedRegion.name} ${meta.label}`;
  dashboardIntro.textContent = `${meta.summary} This dashboard focuses on ${selectedRegion.name} and gives a cleaner place for richer details, photos, routes, and future guide features.`;
  dashboardIcon.textContent = meta.icon;
  dashboardItems.innerHTML = items.map(([title, body]) => `
    <article class="dashboard-item">
      <h4>${title}</h4>
      <p>${body}</p>
    </article>
  `).join("");
  dashboardStats.innerHTML = `
    <div>
      <dt>Region</dt>
      <dd>${selectedRegion.name}</dd>
    </div>
    <div>
      <dt>Category</dt>
      <dd>${meta.label}</dd>
    </div>
    <div>
      <dt>Highlights</dt>
      <dd>${items.length}</dd>
    </div>
    <div>
      <dt>Saved</dt>
      <dd>${saved.has(selectedRegion.id) ? "Yes" : "No"}</dd>
    </div>
  `;

  dashboard.hidden = false;
  dashboard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getRegionFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const regionId = params.get("region");
  return regions.find((region) => region.id === regionId) || selectedRegion;
}

function renderFeaturePage() {
  const featureRoot = document.querySelector("[data-feature-page]");
  if (!featureRoot) return;

  const featureKey = featureRoot.dataset.featurePage;
  const meta = categoryMeta[featureKey];
  const region = getRegionFromUrl();
  const items = region[featureKey] || [];

  const regionSelect = document.querySelector("#featureRegion");
  const eyebrow = document.querySelector("#featureEyebrow");
  const title = document.querySelector("#featureTitle");
  const intro = document.querySelector("#featureIntro");
  const list = document.querySelector("#featureItems");
  const statRegion = document.querySelector("#featureStatRegion");
  const statFeature = document.querySelector("#featureStatFeature");
  const statCount = document.querySelector("#featureStatCount");

  selectedRegion = region;

  if (regionSelect) {
    regionSelect.innerHTML = regions.map((item) => `<option value="${item.id}" ${item.id === region.id ? "selected" : ""}>${item.name}</option>`).join("");
  }
  if (eyebrow) eyebrow.textContent = meta ? meta.label : "Feature";
  if (title) title.textContent = `${region.name} ${meta ? meta.label : "Heritage"}`;
  if (intro) intro.textContent = `${meta ? meta.summary : "Explore this feature"} ${region.name}'s highlights are arranged for a traveler choosing where to go next.`;
  if (list) {
    list.innerHTML = items.map(([itemTitle, body]) => `
      <article class="feature-item">
        <h3>${itemTitle}</h3>
        <p>${body}</p>
      </article>
    `).join("");
  }
  if (statRegion) statRegion.textContent = region.name;
  if (statFeature) statFeature.textContent = meta ? meta.label : "Feature";
  if (statCount) statCount.textContent = String(items.length);
}

function changeFeatureRegion(regionId) {
  const featureRoot = document.querySelector("[data-feature-page]");
  if (!featureRoot) return;
  const featureKey = featureRoot.dataset.featurePage;
  window.location.href = `${featurePages[featureKey]}?region=${encodeURIComponent(regionId)}`;
}

function setAuthMessage(message, type = "") {
  const authMessage = document.querySelector("#authMessage");
  if (!authMessage) return;
  authMessage.textContent = message;
  authMessage.className = `auth-message ${type}`.trim();
}

async function postAuth(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok || !data.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

function initAuthForms() {
  const signinForm = document.querySelector("#signinForm");
  const signupForm = document.querySelector("#signupForm");

  if (signinForm) {
    signinForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(signinForm);
      setAuthMessage("Signing in...");

      try {
        const data = await postAuth("/api/auth/signin", {
          email: formData.get("email"),
          password: formData.get("password")
        });
        localStorage.setItem("rootsOfBharatUser", JSON.stringify(data.user));
        setAuthMessage("Signed in. Opening Explore...", "success");
        window.location.href = "explore.html";
      } catch (error) {
        setAuthMessage(error.message, "error");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(signupForm);
      setAuthMessage("Creating account...");

      try {
        const data = await postAuth("/api/auth/signup", {
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
          interest: formData.get("interest")
        });
        localStorage.setItem("rootsOfBharatUser", JSON.stringify(data.user));
        setAuthMessage("Account created. Opening Explore...", "success");
        window.location.href = "explore.html";
      } catch (error) {
        setAuthMessage(error.message, "error");
      }
    });
  }
}

document.querySelectorAll(".map-pin").forEach((pin) => {
  pin.addEventListener("click", () => selectRegion(pin.dataset.region));
});

const detailPanel = document.querySelector(".detail-panel");
if (detailPanel) {
  detailPanel.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dashboard-tab]");
    if (button) openDashboard(button.dataset.dashboardTab);
  });
}

if (favoriteButton) {
  favoriteButton.addEventListener("click", () => {
    if (saved.has(selectedRegion.id)) {
      saved.delete(selectedRegion.id);
    } else {
      saved.add(selectedRegion.id);
    }
    localStorage.setItem("rootsOfBharatSaved", JSON.stringify([...saved]));
    renderDetail();
  });
}

if (regionCards) {
  regionCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-card-region]");
    if (button) openDashboard(button.dataset.cardDashboard, button.dataset.cardRegion);
  });
}

if (backToExplore && dashboard) {
  backToExplore.addEventListener("click", () => {
    dashboard.hidden = true;
    const target = document.querySelector("#explore") || document.querySelector("#regions");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

[searchInput, themeFilter].filter(Boolean).forEach((control) => {
  control.addEventListener("input", renderCards);
});

document.querySelectorAll(".trail-choice").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".trail-choice").forEach((choice) => choice.classList.remove("active"));
    button.classList.add("active");
    renderTrail(button.dataset.trail);
  });
});

const featureRegion = document.querySelector("#featureRegion");
if (featureRegion) {
  featureRegion.addEventListener("change", () => changeFeatureRegion(featureRegion.value));
}

renderDetail();
renderCards();
renderTrail();
renderFeaturePage();
initAuthForms();
