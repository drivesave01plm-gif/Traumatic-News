fetch("data.json")
  .then(r => r.json())
  .then(data => {

    /* ===== HEADER ===== */
    document.getElementById("masthead").textContent = data.masthead;
    document.getElementById("issue").textContent = data.issue;
    document.getElementById("weather").textContent = data.weather;

    const d = new Date();
    document.getElementById("date").textContent =
      d.toLocaleDateString("en-US", { month:"2-digit", day:"2-digit", year:"numeric" });

    document.getElementById("footer").textContent = data.footer;

    /* ===== RENDER COLUMNS ===== */
    renderColumn("col-left", data.columns.left);
    renderColumn("col-middle", data.columns.middle);
    renderColumn("col-right", data.columns.right);
  });


function renderColumn(id, blocks) {
  const col = document.getElementById(id);

  blocks.forEach(b => {
    if (b.type === "article") {
      col.appendChild(renderArticle(b));
    }
    if (b.type === "decree") {
      col.appendChild(renderDecree(b));
    }
    if (b.type === "snippets") {
      col.appendChild(renderSnippets(b));
    }
  });
}

/* ===== BLOCK TYPES ===== */

function renderArticle(a) {
  const el = document.createElement("article");
  el.innerHTML = `
    <h2 class="headline ${a.major ? "major" : ""}">${a.title}</h2>
    ${a.subhead ? `<div class="subhead">${a.subhead}</div>` : ""}
    ${a.paragraphs.map(p => `<p>${p}</p>`).join("")}
  `;
  return el;
}

function renderDecree(d) {
  const el = document.createElement("div");
  el.className = "decree";
  el.innerHTML = `
    <h2>${d.title}</h2>
    ${d.paragraphs.map(p => `<p>${p}</p>`).join("")}
  `;
  return el;
}

function renderSnippets(s) {
  const el = document.createElement("div");
  el.className = "snippets";
  el.innerHTML = `
    <h3 style="text-align:center;margin-top:0;">TELEGRAPH SNIPPETS</h3>
    <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
  return el;
}
