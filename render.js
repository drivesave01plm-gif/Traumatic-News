fetch("data.json")
  .then(r => r.json())
  .then(data => {

    // Header
    document.getElementById("masthead").textContent = data.masthead;
    document.getElementById("issue").textContent = data.issue;
    document.getElementById("weather").textContent = data.weather;
    document.getElementById("footer").textContent = data.footer;

    const d = new Date();
    document.getElementById("date").textContent =
      d.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
      });

    // Columns
    renderColumn("col-left", data.columns.left);
    renderColumn("col-middle", data.columns.middle);
    renderColumn("col-right", data.columns.right);
  })
  .catch(err => console.error("Render error:", err));


function renderColumn(id, blocks) {
  const col = document.getElementById(id);
  blocks.forEach(b => {
    if (b.type === "article") col.appendChild(renderArticle(b));
    if (b.type === "decree") col.appendChild(renderDecree(b));
    if (b.type === "snippets") col.appendChild(renderSnippets(b));
  });
}

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
