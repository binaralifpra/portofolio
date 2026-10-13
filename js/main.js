const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const img = (id, file, alt) => `<img src="assets/work/${id}/${file}" alt="${esc(alt)}" loading="lazy" data-ph="${esc(`assets/work/${id}/${file}`)}">`;

// Gambar yang belum ada diganti kotak placeholder berisi keterangan / nama file yang dibutuhkan
function toPlaceholder(el) {
  const ph = document.createElement("div");
  ph.className = "ph";
  ph.textContent = el.dataset.ph;
  el.replaceWith(ph);
}
document.addEventListener("error", (e) => {
  if (e.target.tagName === "IMG" && e.target.dataset.ph) toPlaceholder(e.target);
}, true);
// gambar di HTML statis bisa gagal sebelum skrip ini dimuat
document.querySelectorAll("img[data-ph]").forEach((el) => { if (el.complete && !el.naturalWidth) toPlaceholder(el); });


function renderWork() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p) => `
    <a class="card reveal" href="project.html?id=${p.id}" data-type="${p.type}">
      <div class="frame">${img(p.id, "cover.jpg", p.title)}</div>
      <div class="card-meta"><h3>${esc(p.title)}</h3><span class="tag">${esc(p.kind)}</span></div>
      <p>${esc(p.tagline)}</p>
    </a>`).join("");

  document.querySelectorAll(".filter button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter button").forEach((b) => b.classList.toggle("active", b === btn));
      const f = btn.dataset.filter;
      grid.querySelectorAll(".card").forEach((c) => c.classList.toggle("hidden", f !== "all" && c.dataset.type !== f));
    });
  });
}

const LINKS = [
  ["live", "Buka Website", "btn-primary"],
  ["repo", "Lihat Kode", "btn-ghost"],
  ["figma", "Desain Figma", "btn-ghost"],
];

// Tombol akses proyek. Link yang belum diisi tampil redup (bukan disembunyikan) supaya mudah dilengkapi.
function accessButtons(p) {
  const L = p.links || {};
  return LINKS.filter(([key]) => key in L).map(([key, label, cls]) => L[key]
    ? `<a class="btn ${cls}" href="${esc(L[key])}" target="_blank" rel="noopener">${label} &nearr;</a>`
    : `<span class="btn ${cls} is-off" title="Link belum diisi di js/projects.js">${label}</span>`).join("");
}

function renderProject() {
  const root = document.getElementById("project");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const i = PROJECTS.findIndex((p) => p.id === id);
  if (i < 0) { location.replace("index.html#work"); return; }
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  document.title = `${p.title} | Binar Alif Prabasetya`;
  const access = accessButtons(p);

  root.innerHTML = `
    <div class="wrap">
      <section class="cs-hero">
        <a class="back" href="index.html#work">&larr; Semua karya</a>
        <span class="eyebrow">${esc(p.kind)} · ${esc(p.year)}</span>
        <h1>${esc(p.title)}</h1>
        <p class="lead">${esc(p.tagline)}</p>
        <div class="btns">${access}</div>
        <dl class="meta">
          <div><dt>Peran</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Platform</dt><dd>${esc(p.platform)}</dd></div>
          <div><dt>Tahun</dt><dd>${esc(p.year)}</dd></div>
          <div><dt>Teknologi</dt><dd>${p.stack.map(esc).join(", ")}</dd></div>
        </dl>
      </section>

      <div class="shot reveal">${img(p.id, "cover.jpg", p.title)}</div>

      <section class="numbers">
        ${p.highlights.map((h) => `<div class="reveal"><b>${esc(h.value)}</b><span>${esc(h.label)}</span></div>`).join("")}
      </section>

      <section class="block reveal">
        <h2>Konteks</h2>
        <div>${p.context.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
      </section>

      <section class="block reveal">
        <h2>Masalah</h2>
        <div class="cards3">${p.problems.map((m) => `<div class="mini"><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></div>`).join("")}</div>
      </section>

      <section class="features">
        ${p.features.map((f, n) => `
          <article class="feature reveal">
            <div class="shot">${img(p.id, f.img, f.title)}</div>
            <div><span class="n">0${n + 1}</span><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div>
          </article>`).join("")}
      </section>

      <section class="block reveal">
        <h2>Di balik layar</h2>
        <div class="cards3">${p.decisions.map((d, n) => `<div class="mini"><span class="n">0${n + 1}</span><h3>${esc(d.title)}</h3><p>${esc(d.text)}</p></div>`).join("")}</div>
      </section>

      <section class="try reveal">
        <div><h2>Coba ${esc(p.title)}</h2><p>Buka langsung websitenya atau lihat kode sumbernya.</p></div>
        <div class="btns">${access}</div>
      </section>

      <a class="next" href="project.html?id=${next.id}">
        <div><span class="eyebrow">Proyek berikutnya</span><h2>${esc(next.title)} &rarr;</h2><p>${esc(next.tagline)}</p></div>
        <div class="shot">${img(next.id, "cover.jpg", next.title)}</div>
      </a>
    </div>`;

  // Tombol kembali yang menempel saat digulir; muncul setelah tautan kembali di atas tidak terlihat
  const fab = document.createElement("a");
  fab.className = "float-back";
  fab.href = "index.html#work";
  fab.innerHTML = "&larr; Semua karya";
  document.body.appendChild(fab);
  const topBack = root.querySelector(".back");
  new IntersectionObserver(([en]) => fab.classList.toggle("show", !en.isIntersecting), { rootMargin: "-68px 0px 0px 0px" }).observe(topBack);
}

function reveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

if (typeof PROJECTS !== "undefined") { renderWork(); renderProject(); }
reveal();
