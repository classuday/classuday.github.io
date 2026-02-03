function showPopup(title, specs) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-specs").innerText = specs;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

const map = {
  gt: "gt-series",
  number: "number-series",
  c: "c-series",
  narzo: "narzo-series",
  p: "p-series",
  pad: "pad-series",
  watch: "watch-series",
  buds: "buds-series"
};

function loadProducts() {
  for (let key in products) {
    const box = document.getElementById(map[key]);
    if (!box) continue;

    products[key].forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerText = p.name;
      div.dataset.name = p.name.toLowerCase();
      div.onclick = () => showPopup(p.name, p.specs);
      box.appendChild(div);
    });
  }
}

document.getElementById("search").addEventListener("keyup", function () {
  const val = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.dataset.name.includes(val) ? "block" : "none";
  });
});

loadProducts();
