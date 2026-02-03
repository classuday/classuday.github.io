function loadProducts() {
  const gt = document.getElementById("gt-series");
  products.gt.forEach(p => {
    gt.innerHTML += `<div class="card" onclick="alert('${p.specs}')">${p.name}</div>`;
  });

  const num = document.getElementById("number-series");
  products.number.forEach(p => {
    num.innerHTML += `<div class="card" onclick="alert('${p.specs}')">${p.name}</div>`;
  });

  const c = document.getElementById("c-series");
  products.c.forEach(p => {
    c.innerHTML += `<div class="card" onclick="alert('${p.specs}')">${p.name}</div>`;
  });
}

loadProducts();
