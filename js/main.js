// Contato comercial da DUO: todo botão de WhatsApp do site cai aqui,
// cada um com a mensagem pronta do lugar onde a pessoa clicou.
const COMERCIAL_NUMBER = "5531990929406"; // (31) 99092-9406, comercial da DUO

function whatsUrl(msg) {
  return `https://wa.me/${COMERCIAL_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Mensagens fixas por contexto (links com data-whats="<chave>" recebem o href sozinhos)
const MENSAGENS = {
  geral: "Olá, DUO SST! Vim pelo site e queria tirar uma dúvida.",
  pericia: "Olá, DUO SST! Vim pelo site e quero falar sobre assistência técnica e médica pericial.",
  ambiental: "Olá, DUO SST! Vim pelo site e quero falar sobre gestão ambiental pra minha empresa.",
  nr01: "Olá, DUO SST! Vim pelo site e quero entender o que minha empresa precisa fazer sobre a NR 01 e os riscos psicossociais.",
  palestras: "Olá, DUO SST! Vim pelo site e quero saber sobre palestras pra minha empresa (SIPAT, campanhas ou NR).",
  palestraPresencial: "Olá, DUO SST! Quero uma palestra presencial na minha empresa. Pode me passar temas, datas e valores?",
};

function turmaUrl(codigo) {
  return whatsUrl(`Olá, DUO SST! Quero me inscrever na próxima turma presencial de ${codigo}. Pode me passar datas e valores?`);
}

function palestraUrl(titulo) {
  return whatsUrl(`Olá, DUO SST! Tenho interesse na palestra "${titulo}". Pode me passar mais informações?`);
}

function presencialUrl(c) {
  return whatsUrl(`Olá, DUO SST! Tenho interesse no treinamento ${c.codigo} (${c.titulo}) na modalidade presencial (in company ou na AST). Pode me passar datas e valores?`);
}

function duvidaCursoUrl(c) {
  return whatsUrl(`Olá, DUO SST! Estou vendo o treinamento ${c.codigo} (${c.titulo}) no site e tenho uma dúvida.`);
}

function ligarWhatsLinks(root) {
  (root || document).querySelectorAll("[data-whats]").forEach((a) => {
    const msg = MENSAGENS[a.dataset.whats];
    if (!msg) return;
    a.href = whatsUrl(msg);
    a.target = "_blank";
    a.rel = "noopener";
  });
  (root || document).querySelectorAll("[data-turma]").forEach((a) => {
    a.href = turmaUrl(a.dataset.turma);
    a.target = "_blank";
    a.rel = "noopener";
  });
  (root || document).querySelectorAll("[data-palestra]").forEach((a) => {
    a.href = palestraUrl(a.dataset.palestra);
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// Modo noturno: html[data-theme="dark"], escolha salva em localStorage "duo-tema"
// (o <head> de cada página já aplica o tema salvo antes de pintar)
function alternarTema() {
  const raiz = document.documentElement;
  const escuro = raiz.dataset.theme !== "dark";
  raiz.classList.add("tema-trocando");
  if (escuro) raiz.dataset.theme = "dark";
  else delete raiz.dataset.theme;
  setTimeout(() => raiz.classList.remove("tema-trocando"), 400);
  try { localStorage.setItem("duo-tema", escuro ? "escuro" : "claro"); } catch (e) {}
  pararChamadaTema();
  atualizarBotaoTema();
}

function atualizarBotaoTema() {
  const btn = document.querySelector(".tema-toggle");
  if (!btn) return;
  const escuro = document.documentElement.dataset.theme === "dark";
  btn.setAttribute("aria-pressed", escuro ? "true" : "false");
  btn.setAttribute("aria-label", escuro ? "Voltar pro modo claro" : "Ativar modo noturno");
}

// Pulso de alguns segundos no botão quando a pessoa entra no site (uma vez por visita)
const CHAMADA_TEMA_SEGUNDOS = 5;
function chamarAtencaoTema() {
  const btn = document.querySelector(".tema-toggle");
  if (!btn) return;
  // aviso curto, sem texto: aparece uma vez a cada visita ao site (não segue a regra dos 30 dias)
  try {
    if (sessionStorage.getItem("duo-tema-chamou")) return;
    sessionStorage.setItem("duo-tema-chamou", "1");
  } catch (e) {}
  setTimeout(() => {
    btn.classList.add("chamando");
    setTimeout(pararChamadaTema, CHAMADA_TEMA_SEGUNDOS * 1000);
  }, 1200);
}
function pararChamadaTema() {
  const btn = document.querySelector(".tema-toggle");
  if (btn) btn.classList.remove("chamando");
}

// Tutoriais (pop-ups e pulso do botão de tema) aparecem só pra quem ainda não viu.
// Fica salvo no navegador; depois de TUTORIAL_VALIDADE_DIAS sem voltar, mostra de novo.
const TUTORIAL_VALIDADE_DIAS = 30;
function tutorialJaVisto(chave) {
  try {
    const quando = Number(localStorage.getItem(`duo-tutorial-${chave}`));
    return quando && Date.now() - quando < TUTORIAL_VALIDADE_DIAS * 864e5;
  } catch (e) { return false; }
}
function marcarTutorialVisto(chave) {
  try { localStorage.setItem(`duo-tutorial-${chave}`, String(Date.now())); } catch (e) {}
}

function toggleNav() {
  document.querySelector("nav.main-nav").classList.toggle("open");
}

function sendLead(formId) {
  const form = document.getElementById(formId);
  const nome = form.querySelector("[name=nome]").value.trim();
  const whatsapp = form.querySelector("[name=whatsapp]").value.trim();
  const cursoField = form.querySelector("[name=curso]");
  const curso = cursoField ? cursoField.value : "";

  if (!nome || !whatsapp) {
    alert("Preenche nome e WhatsApp pra gente conseguir te responder.");
    return false;
  }

  let msg = `Olá! Me chamo ${nome} e quero saber mais sobre os treinamentos da DUO SST.`;
  if (curso && curso !== "Selecione um curso") {
    msg = `Olá! Me chamo ${nome} e tenho interesse no curso "${curso}" da DUO SST.`;
  }
  msg += ` Meu WhatsApp: ${whatsapp}.`;

  const url = whatsUrl(msg);
  window.open(url, "_blank");
  return false;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function toggleModule(id) {
  const list = document.getElementById(id);
  const btn = document.querySelector(`[data-toggle-target="${id}"]`);
  if (!list || !btn) return;
  const isOpen = list.hidden === false;
  list.hidden = isOpen;
  btn.textContent = isOpen ? "Ver conteúdo completo ↓" : "Minimizar ↑";
}

function presetCourse(courseName) {
  const field = document.querySelector("#lead-form [name=curso]");
  if (field) {
    field.value = courseName;
  }
  const target = document.getElementById("cadastro");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

function renderIcons(root) {
  (root || document).querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = iconSvg(el.getAttribute("data-icon"), el.getAttribute("data-icon-size") || 24);
  });
}

function courseCardHtml(slug) {
  const c = COURSES[slug];
  if (!c) return "";
  const presencialClass = c.destaque ? " is-presencial" : "";
  const photoContent = c.imagemHero
    ? `<img src="${c.imagemHero}" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">`
    : iconSvg(c.icone, 34);
  const modo = c.somentePresencial ? "presencial" : "ead";
  return `
    <article class="course-card${presencialClass}" data-modo="${modo}">
      <a class="card-stretch" href="curso.html?slug=${slug}" aria-label="Ver curso completo: ${c.codigo} ${c.titulo}"></a>
      <div class="course-photo">
        ${photoContent}
        <span class="course-code">${iconSvg(c.icone, 15)}${c.codigo}</span>
      </div>
      <div class="course-card-body">
        <div class="modo-row">
          <span class="modo-label">Modalidade · toque pra trocar</span>
          <div class="modo-switch" role="group" aria-label="Escolher modalidade">
            <button type="button" class="modo-opt" data-set-modo="ead" ${c.somentePresencial ? 'disabled title="NR 35 não pode mais ser feita a distância"' : ""}>EAD</button>
            <button type="button" class="modo-opt" data-set-modo="presencial">Presencial</button>
          </div>
        </div>
        <div class="tags">
          <span class="tag tag-hours only-ead">${c.cargaHoraria}</span>
          <span class="tag tag-hours only-presencial">${horasPresencial(c)}</span>
        </div>
        <h3>${c.titulo}</h3>
        <p>${c.resumo}</p>
        <div class="card-bottom only-ead">
          ${c.preco ? `<span class="card-price">${precoComDe(c.preco)}</span>` : "<span></span>"}
          <span class="card-link">Ver curso completo →</span>
        </div>
        <div class="card-bottom card-bottom-presencial only-presencial">
          <span class="card-presencial-info"><strong>Sob consulta</strong> in company ou na AST</span>
          <a class="btn-whats" href="${presencialUrl(c)}" target="_blank" rel="noopener">${WHATS_ICON} Fale conosco</a>
        </div>
      </div>
    </article>`;
}

// Preço "de" riscado nos cursos EAD (promoção)
const PRECO_DE = "R$ 500,00";
function precoComDe(preco) {
  return preco ? `<span class="preco-de">de ${PRECO_DE}</span>${preco}` : "";
}

const WHATS_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>`;

// Carga horária total da turma presencial: teoria + prática obrigatória
function horasPresencial(c) {
  if (c.somentePresencial) return c.cargaHoraria;
  const teoria = parseInt(c.cargaHoraria, 10);
  const pratica = c.praticaPresencial ? parseInt(c.praticaPresencial, 10) : 0;
  return pratica ? `${teoria + pratica}h teórico + prático` : `${teoria}h teórico`;
}

// Troca EAD/Presencial dentro do próprio cartão, sem abrir a página do curso
document.addEventListener("click", (e) => {
  const opt = e.target.closest("[data-set-modo]");
  if (!opt) return;
  e.preventDefault();
  const card = opt.closest(".course-card");
  if (card && !opt.disabled) card.dataset.modo = opt.dataset.setModo;
});

function renderFeaturedCourses() {
  const grid = document.getElementById("featured-courses");
  if (!grid) return;
  const slugs = Object.keys(COURSES).filter((s) => COURSES[s].destaque);
  grid.innerHTML = slugs.map(courseCardHtml).join("");
}

function renderCatalog() {
  const container = document.getElementById("catalog");
  if (!container) return;

  const bySlug = COURSES;
  const grouped = {};
  CATEGORIAS_ORDEM.forEach((cat) => (grouped[cat] = []));
  Object.keys(bySlug).forEach((slug) => {
    const cat = bySlug[slug].categoria;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(slug);
  });

  let html = "";
  CATEGORIAS_ORDEM.forEach((cat) => {
    const slugs = grouped[cat];
    if (!slugs || !slugs.length) return;
    html += `<div class="cat-block" data-cat="${cat}">
      <div class="cat-heading"><h3>${cat}</h3></div>
      <div class="course-grid">${slugs.map(courseCardHtml).join("")}</div>
    </div>`;
  });
  container.innerHTML = html;

  const tabs = document.getElementById("filter-tabs");
  if (tabs) {
    let tabsHtml = `<button class="filter-tab active" data-filter="all">Todos os treinamentos</button>`;
    CATEGORIAS_ORDEM.forEach((cat) => {
      if (grouped[cat] && grouped[cat].length) {
        tabsHtml += `<button class="filter-tab" data-filter="${cat}">${cat}</button>`;
      }
    });
    tabs.innerHTML = tabsHtml;
    tabs.querySelectorAll(".filter-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        tabs.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        container.querySelectorAll(".cat-block").forEach((block) => {
          block.style.display = filter === "all" || block.getAttribute("data-cat") === filter ? "" : "none";
        });
      });
    });
    // cursos.html?cat=<categoria> abre já filtrado (ex.: botão NR 01 da home)
    const catInicial = new URLSearchParams(location.search).get("cat");
    const tabInicial = catInicial && [...tabs.querySelectorAll(".filter-tab")].find((b) => b.dataset.filter === catInicial);
    if (tabInicial) tabInicial.click();
  }
}

function renderCourseDetail() {
  const root = document.getElementById("course-detail");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const c = COURSES[slug];

  if (!c) {
    root.innerHTML = `<section><div class="wrap">
      <p>Curso não encontrado. <a href="cursos.html">Voltar pro catálogo</a>.</p>
    </div></section>`;
    return;
  }

  document.title = `${c.titulo} | DUO SST`;

  const modulosHtml = c.modulos.map((m, i) => {
    const detailId = `mod-${slug}-${i}`;
    const detailHtml = m.aulasDetalhe && m.aulasDetalhe.length
      ? `
        <button class="module-toggle" data-toggle-target="${detailId}" onclick="toggleModule('${detailId}')">Ver conteúdo completo ↓</button>
        <ol class="aula-list" id="${detailId}" hidden>
          ${m.aulasDetalhe.map((a, idx) => {
            const isQuiz = a.endsWith("|quiz");
            const label = isQuiz ? a.slice(0, -5) : a;
            const num = String(idx + 1).padStart(2, "0");
            return `<li><span><span class="aula-num">${num}.</span> ${label}</span>${isQuiz ? '<span class="quiz-tag">Quiz</span>' : ""}</li>`;
          }).join("")}
        </ol>`
      : "";
    return `
    <li>
      <div style="flex-grow:1;">
        <strong>${m.titulo}</strong>
        ${m.aulas ? `<div class="module-meta">${m.aulas} ${m.aulas === 1 ? "aula" : "aulas"}${m.avaliacoes ? ` · ${m.avaliacoes} ${m.avaliacoes === 1 ? "avaliação" : "avaliações"}` : ""}</div>` : ""}
        ${detailHtml}
      </div>
    </li>`;
  }).join("");

  const heroPhotoHtml = c.imagemHero
    ? `<div class="hero-photo"><img src="${c.imagemHero}" alt=""><div class="hero-photo-scrim"></div></div>`
    : "";

  const contentPhotoHtml = c.imagemConteudo
    ? `<div class="photo-real">
         <img src="${c.imagemConteudo}" alt="Foto do treinamento ${c.codigo}, ${c.titulo}">
         <div class="caption">${c.codigo} · ${c.titulo}</div>
       </div>`
    : "";

  const heroCtaHtml = c.somentePresencial
    ? `<div class="actions" style="margin-top:24px;">
         <a class="btn btn-primary" href="${presencialUrl(c)}" target="_blank" rel="noopener">Agendar turma presencial</a>
       </div>`
    : c.linkCompra
    ? `<div class="actions" style="margin-top:24px;">
         <a class="btn btn-primary" onclick="scrollToId('comprar')">Garantir minha vaga</a>
         <a class="btn btn-outline" onclick="scrollToId('comprar')">Prefiro presencial</a>
       </div>`
    : "";

  const doresHtml = c.dores && c.dores.length
    ? `<section class="dores-section">
        <div class="wrap">
          <div class="section-head">
            <span class="badge">Por que isso importa</span>
            <h2>${c.doresTitulo || "O risco não é hipotético"}</h2>
            ${c.doresIntro ? `<p>${c.doresIntro}</p>` : ""}
          </div>
          <div class="dores-grid">
            ${c.dores.map((d) => `
              <div class="dor-card">
                <div class="icon">${iconSvg(d.icone, 28)}</div>
                <h3>${d.titulo}</h3>
                <p>${d.texto}</p>
              </div>`).join("")}
          </div>
        </div>
      </section>`
    : "";

  const beneficiosHtml = c.beneficios && c.beneficios.length
    ? `<div class="beneficios-section">
         <h2 style="font-size:26px;">O que você vai dominar</h2>
         <ul class="beneficios-list">
           ${c.beneficios.map((b) => `<li><span class="check">✓</span>${b}</li>`).join("")}
         </ul>
       </div>`
    : "";

  const socialProofHtml = c.dores
    ? `<div class="social-proof-box">
         ${iconSvg("camera", 30)}
         <div>
           <strong>Treinamentos em ação</strong>
           <p>Acompanhe as turmas e o dia a dia dos treinamentos da DUO SST no <a href="https://www.instagram.com/duo_sst" target="_blank" rel="noopener">Instagram @duo_sst</a>.</p>
         </div>
       </div>`
    : "";

  const faqHtml = c.faq && c.faq.length
    ? `<section class="alt">
        <div class="wrap" style="max-width:760px;">
          <div class="section-head" style="text-align:left; margin-bottom:24px;">
            <span class="badge">Dúvidas comuns</span>
            <h2 style="font-size:30px;">Perguntas frequentes</h2>
          </div>
          <div class="faq-list">
            ${c.faq.map((f) => `
              <div class="faq-item">
                <h4>${f.pergunta}</h4>
                <p>${f.resposta}</p>
              </div>`).join("")}
          </div>
        </div>
      </section>`
    : "";

  const presencialTexto = c.somentePresencial
    ? "Teoria e prática presenciais, como a NR 35 exige desde 2026. Turma na sua empresa (in company) ou na AST."
    : c.praticaPresencial
    ? `Curso completo presencial, já com as ${c.praticaPresencial} de prática obrigatória. Turma na sua empresa (in company) ou na AST.`
    : "Turma presencial pra sua equipe, na sua empresa (in company) ou na AST.";

  const eadPromoHtml = c.linkCompra
    ? `<div class="promo-card">
        <span class="promo-badge">⚡ EAD · acesso imediato</span>
        <div class="promo-price-row">
          <div class="promo-price">${precoComDe(c.preco)}</div>
          <div class="promo-price-note">${c.cargaHoraria} online · pagamento único</div>
        </div>
        <a href="${c.linkCompra}" target="_blank" rel="noopener" class="btn btn-primary btn-mega">Comprar versão EAD →</a>
        ${c.praticaPresencial ? `<p class="promo-obs">A norma exige mais ${c.praticaPresencial} de prática presencial pra fechar o certificado.</p>` : ""}
        <div class="trust-badges">
          <span>✓ Certificado nacional</span>
          <span>✓ Início imediato</span>
          <span>✓ Compra segura</span>
        </div>
      </div>`
    : "";

  const presencialPromoHtml = `<div class="promo-card">
      <span class="promo-badge promo-badge-grafite">👥 Presencial · in company ou na AST</span>
      <div class="promo-price-row">
        <div class="promo-price promo-price-text">Sob consulta</div>
        <div class="promo-price-note">${presencialTexto}</div>
      </div>
      <a href="${presencialUrl(c)}" target="_blank" rel="noopener" class="btn btn-grafite btn-mega">Fale conosco no WhatsApp →</a>
      <div class="trust-badges">
        <span>✓ Data combinada com você</span>
        <span>✓ Turmas pra equipes</span>
      </div>
    </div>`;

  const finalCtaHtml = `<section class="final-cta" id="comprar">
      <div class="wrap">
        <h2>${c.somentePresencial ? `Agende sua turma de ${c.codigo}` : `Garanta sua certificação em ${c.codigo}`}</h2>
        <p class="final-lead">${c.somentePresencial ? "Treinamento 100% presencial" : "Escolha a modalidade: EAD com acesso imediato ou presencial com a sua equipe"}</p>
        <div class="promo-options${eadPromoHtml ? "" : " single"}">
          ${eadPromoHtml}
          ${presencialPromoHtml}
        </div>
      </div>
    </section>`;

  root.innerHTML = `
    <section class="hero${c.imagemHero ? " has-photo" : ""}" style="padding: 48px 0 56px;">
      ${heroPhotoHtml}
      <div class="wrap">
        <nav class="breadcrumb">
          <a href="index.html">Início</a><span>／</span>
          <a href="cursos.html">Treinamentos</a><span>／</span>
          <span aria-current="page">${c.titulo}</span>
        </nav>
        <div class="course-hero">
          <div>
            <span class="course-hero-code">${iconSvg(c.icone, 18)}${c.codigo}</span>
            <h1>${c.titulo}</h1>
            <p class="lead">${c.resumo}</p>
          </div>
          <dl class="quick-facts">
            <dt>Modalidade</dt><dd>${c.somentePresencial ? "Presencial" : "EAD ou presencial"}</dd>
            <dt>Carga horária</dt><dd>${c.cargaHoraria}${c.praticaPresencial ? ` + ${c.praticaPresencial} prática` : ""}</dd>
            <dt>Categoria</dt><dd style="font-size:12.5px; text-transform:none;">${c.categoria}</dd>
          </dl>
        </div>
        ${heroCtaHtml}
      </div>
    </section>

    ${doresHtml}

    <section>
      <div class="wrap detail-layout">
        <div>
          ${contentPhotoHtml}

          <div class="audience-box">
            ${iconSvg(c.icone, 22)}
            <p><strong>Pra quem é:</strong> ${c.publico}</p>
          </div>

          ${beneficiosHtml}

          <h2 style="font-size:26px;">Conteúdo programático</h2>
          ${c.modulosResumido ? `<p style="font-size:13.5px; margin-top:-6px;">${c.nota || ""}</p>` : ""}
          ${c.modulosPendente
            ? `<p>Fale conosco pra receber o conteúdo programático completo deste treinamento.</p>`
            : `<ul class="module-list">${modulosHtml}</ul>`}

          ${c.nota && !c.modulosResumido ? `<p style="margin-top:24px; font-size:13.5px;">${c.nota}</p>` : ""}

          ${socialProofHtml}

        </div>

        <aside>
          ${c.somentePresencial ? "" : `<div class="side-card">
            ${c.linkCompra ? `
              <span class="promo-badge">⚡ EAD · acesso imediato</span>
              <div class="promo-price-row">
                <div class="promo-price" style="font-size:34px;">${precoComDe(c.preco)}</div>
                <div class="promo-price-note">${c.cargaHoraria} online · pagamento único</div>
              </div>
              <a href="${c.linkCompra}" target="_blank" rel="noopener" class="btn btn-primary btn-mega">Comprar versão EAD →</a>
              ${c.praticaPresencial ? `<p class="promo-obs">+ ${c.praticaPresencial} de prática presencial obrigatória pra fechar o certificado.</p>` : ""}
            ` : `
              <h4>Interessado nesse treinamento?</h4>
              <p>${c.linkCompraIndisponivel || "Deixa seu contato que a DUO SST te responde no WhatsApp com data de turma e forma de pagamento."}</p>
              <button class="btn btn-primary" onclick="presetCourse('${c.codigo} · ${c.titulo.replace(/'/g, "\\'")}')">Tenho interesse</button>
            `}
          </div>`}
          <div class="side-card side-card-presencial">
            <span class="promo-badge promo-badge-grafite">👥 Presencial</span>
            <h4>${c.somentePresencial ? "Só na modalidade presencial" : "Prefere presencial?"}</h4>
            <p>${presencialTexto}</p>
            <a href="${presencialUrl(c)}" target="_blank" rel="noopener" class="btn btn-grafite">Fale conosco →</a>
          </div>
          <div class="side-card">
            <h4>Não é esse o curso certo?</h4>
            <p>Volta pro catálogo completo e filtra por categoria.</p>
            <a href="cursos.html" class="btn btn-outline-grafite">Ver catálogo</a>
          </div>
        </aside>
      </div>
    </section>

    ${faqHtml}
    ${finalCtaHtml}
  `;

  renderIcons(root);
  const flutuante = document.querySelector(".whats-float");
  if (flutuante) flutuante.href = duvidaCursoUrl(c);
  if (!tutorialJaVisto("presencial")) {
    marcarTutorialVisto("presencial");
    showPresencialPopup(c);
  }
}

// Destaque momentâneo da turma presencial ao abrir a página do curso.
// Fecha no X, no fundo, no Esc ou sozinho depois de 10s (pausa com o mouse em cima).
const POPUP_SEGUNDOS = 10;

function presencialUrlModo(c, onde) {
  const local = onde === "ast" ? "na AST" : "in company, na minha empresa";
  return whatsUrl(`Olá, DUO SST! Quero o treinamento ${c.codigo} (${c.titulo}) presencial, ${local}. Pode me passar datas e valores?`);
}

function showPresencialPopup(c) {
  const foto = c.imagemConteudo || c.imagemHero;
  const terceiroPilar = c.somentePresencial
    ? { icone: "certificado", titulo: "Do jeito que a norma pede", texto: "Teoria e prática presenciais, como a NR 35 exige desde 2026. Certificado completo e válido." }
    : c.praticaPresencial
    ? { icone: "certificado", titulo: "Prática inclusa", texto: `As ${c.praticaPresencial} de prática obrigatória já vêm junto. Sai com o certificado completo.` }
    : { icone: "certificado", titulo: "Instrutor do seu lado", texto: "Dúvida tirada na hora, exemplos da sua rotina e certificado válido em todo o país." };
  const pilares = [
    { icone: "empresa", titulo: "In company", texto: "A DUO vai até a sua empresa e treina a equipe no ambiente real de trabalho, no seu horário." },
    { icone: "local", titulo: "Na AST", texto: "Turma presencial na AST, em Sete Lagoas. Bom pra quem precisa se certificar sozinho ou com poucas pessoas." },
    terceiroPilar,
  ];

  abrirPopup(`
      <div class="promo-pop-photo">
        ${foto ? `<img src="${foto}" alt="">` : ""}
        <span class="promo-pop-code">${iconSvg(c.icone, 16)}${c.codigo}</span>
      </div>
      <div class="promo-pop-body">
        <button type="button" class="promo-pop-close" aria-label="Fechar">×</button>
        <span class="promo-pop-kicker">Turmas presenciais</span>
        <h2 id="promo-pop-title">${c.somentePresencial ? `${c.codigo} agora é só presencial` : `Prefere o ${c.codigo} presencial?`}</h2>
        <p class="promo-pop-lead">${c.somentePresencial
          ? "Monte a turma com a DUO SST na sua empresa ou na AST."
          : "Além do EAD, a DUO SST leva esse treinamento pra sua equipe, na sua empresa ou na AST."}</p>
        <ul class="promo-pop-pilares">
          ${pilares.map((p) => `
            <li>
              <span class="promo-pop-ico">${iconSvg(p.icone, 22)}</span>
              <div><strong>${p.titulo}</strong><span>${p.texto}</span></div>
            </li>`).join("")}
        </ul>
        <div class="promo-pop-ctas">
          <a class="btn btn-primary" href="${presencialUrlModo(c, "company")}" target="_blank" rel="noopener">${WHATS_ICON} Quero in company</a>
          <a class="btn btn-grafite" href="${presencialUrlModo(c, "ast")}" target="_blank" rel="noopener">${WHATS_ICON} Quero fazer na AST</a>
        </div>
        <button type="button" class="promo-pop-skip">Continuar vendo o curso</button>
      </div>
`, { segundos: POPUP_SEGUNDOS, tituloId: "promo-pop-title" });
}

// Mecânica comum dos pop-ups: fecha no X, no fundo, no Esc, nos botões marcados
// com [data-fecha] ou sozinho no fim do tempo (a barra pausa com o mouse em cima).
function abrirPopup(conteudoHtml, opts) {
  const segundos = opts.segundos || POPUP_SEGUNDOS;
  const overlay = document.createElement("div");
  overlay.className = "promo-pop";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", opts.tituloId);
  overlay.innerHTML = `
    <div class="promo-pop-box ${opts.classe || ""}" tabindex="-1">
      ${conteudoHtml}
      <div class="promo-pop-timer"><span style="animation-duration:${segundos}s"></span></div>
    </div>`;
  document.body.appendChild(overlay);

  const box = overlay.querySelector(".promo-pop-box");
  const bar = overlay.querySelector(".promo-pop-timer span");
  let restante = segundos * 1000;
  let inicio = Date.now();
  let timer = setTimeout(fechar, restante);

  function fechar() {
    clearTimeout(timer);
    document.removeEventListener("keydown", onKey);
    if (opts.aoFechar) opts.aoFechar();
    overlay.classList.add("saindo");
    setTimeout(() => overlay.remove(), 250);
  }
  function onKey(e) { if (e.key === "Escape") fechar(); }

  box.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    restante -= Date.now() - inicio;
    bar.style.animationPlayState = "paused";
  });
  box.addEventListener("mouseleave", () => {
    inicio = Date.now();
    timer = setTimeout(fechar, restante);
    bar.style.animationPlayState = "running";
  });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) fechar(); });
  overlay.querySelectorAll(".promo-pop-close, .promo-pop-skip, .promo-pop-ctas a, [data-fecha]").forEach((el) => el.addEventListener("click", fechar));
  document.addEventListener("keydown", onKey);
  requestAnimationFrame(() => overlay.classList.add("aberto"));
  box.focus({ preventScroll: true });
  return overlay;
}

// Pop-up do catálogo: mostra que cada curso tem EAD ou Presencial, com um cartão
// de exemplo alternando sozinho entre as duas opções.
const POPUP_CATALOGO_SEGUNDOS = 15;
const CURSO_EXEMPLO = "nr-33-trabalhador-autorizado-vigia";

function showModalidadesPopup() {
  if (!COURSES[CURSO_EXEMPLO]) return;
  const msgGeral = "Olá, DUO SST! Vi os treinamentos no site da DUO SST e quero saber sobre turmas presenciais (in company ou na AST).";
  const overlay = abrirPopup(`
      <div class="pop-demo-stage" aria-hidden="true">
        <span class="pop-demo-label">Exemplo</span>
        <div class="pop-demo">${courseCardHtml(CURSO_EXEMPLO)}</div>
      </div>
      <div class="promo-pop-body">
        <button type="button" class="promo-pop-close" aria-label="Fechar">×</button>
        <span class="promo-pop-kicker">Como escolher seu treinamento</span>
        <h2 id="modalidades-title">Cada curso, duas formas de fazer</h2>
        <p class="promo-pop-lead">Em todos os cartões você escolhe a modalidade antes de seguir. É só tocar em <strong>EAD</strong> ou <strong>Presencial</strong>.</p>
        <ol class="pop-opcoes">
          <li data-opcao="ead">
            <span class="pop-opcao-tag">EAD</span>
            <div><strong>Online, compra direta no site</strong><span>R$ 199,00 com acesso imediato. Você estuda no seu horário e recebe o certificado ao concluir.</span></div>
          </li>
          <li data-opcao="presencial">
            <span class="pop-opcao-tag">Presencial</span>
            <div><strong>Com instrutor, pelo WhatsApp</strong><span>Toque em <em>Fale conosco</em> e a gente explica tudo: datas, valores e onde fazer, na sua empresa (in company) ou na AST.</span></div>
          </li>
        </ol>
        <div class="promo-pop-ctas">
          <button type="button" class="btn btn-primary" data-fecha>Entendi, ver treinamentos</button>
          <a class="btn btn-grafite" href="${whatsUrl(msgGeral)}" target="_blank" rel="noopener">${WHATS_ICON} Fale conosco</a>
        </div>
      </div>`, {
    segundos: POPUP_CATALOGO_SEGUNDOS,
    tituloId: "modalidades-title",
    classe: "promo-pop-box-demo",
    aoFechar: () => clearInterval(alterna),
  });

  // Alterna o cartão de exemplo e destaca a explicação correspondente
  const card = overlay.querySelector(".pop-demo .course-card");
  const box = overlay.querySelector(".promo-pop-box");
  const marcar = (modo) => {
    card.dataset.modo = modo;
    box.dataset.modo = modo;
    renderIcons(card);
  };
  marcar("ead");
  const alterna = setInterval(() => marcar(card.dataset.modo === "ead" ? "presencial" : "ead"), 2600);
}

document.addEventListener("DOMContentLoaded", () => {
  renderIcons(document);
  atualizarBotaoTema();
  chamarAtencaoTema();
  ligarWhatsLinks(document);
  renderFeaturedCourses();
  renderCatalog();
  renderCourseDetail();
  if (document.getElementById("catalog") && !tutorialJaVisto("modalidades")) {
    marcarTutorialVisto("modalidades");
    showModalidadesPopup();
  }
  renderIcons(document);
});

// Carrossel do topo da home: troca a cada HERO_SEGUNDOS, pausa com mouse/foco em cima.
// Com "reduzir movimento" ligado no sistema, não troca sozinho (só pelos pontos).
const HERO_SEGUNDOS = 5;
function iniciarCarrosselHero() {
  const hero = document.querySelector(".hero-carrossel");
  if (!hero) return;
  const slides = [...hero.querySelectorAll(".hero-slide")];
  const fundos = [...hero.querySelectorAll(".hero-fundo")];
  const pontos = [...hero.querySelectorAll(".hero-ponto")];
  hero.style.setProperty("--hero-tempo", `${HERO_SEGUNDOS}s`);
  let atual = 0, timer = null, restante = HERO_SEGUNDOS * 1000, inicio = 0;
  const automatico = !matchMedia("(prefers-reduced-motion: reduce)").matches;

  function mostrar(i) {
    atual = (i + slides.length) % slides.length;
    [slides, fundos].forEach((lista) => lista.forEach((el, k) => el.classList.toggle("ativo", k === atual)));
    slides.forEach((el, k) => el.setAttribute("aria-hidden", k === atual ? "false" : "true"));
    pontos.forEach((p, k) => {
      p.classList.toggle("ativo", k === atual);
      p.setAttribute("aria-selected", k === atual ? "true" : "false");
      // reinicia a barrinha de progresso
      const barra = p.querySelector("span");
      barra.style.display = "none"; void barra.offsetWidth; barra.style.display = "";
    });
    restante = HERO_SEGUNDOS * 1000;
    agendar();
  }
  function agendar() {
    clearTimeout(timer);
    if (!automatico || hero.classList.contains("pausado")) return;
    inicio = Date.now();
    timer = setTimeout(() => mostrar(atual + 1), restante);
  }
  function pausar() {
    if (hero.classList.contains("pausado")) return;
    hero.classList.add("pausado");
    clearTimeout(timer);
    restante -= Date.now() - inicio;
  }
  function retomar() {
    if (!hero.classList.contains("pausado")) return;
    hero.classList.remove("pausado");
    agendar();
  }
  pontos.forEach((p, k) => p.addEventListener("click", () => mostrar(k)));
  hero.addEventListener("mouseenter", pausar);
  hero.addEventListener("mouseleave", retomar);
  // pausa no foco só quando vem do teclado (clique no ponto não deve travar a troca)
  hero.addEventListener("focusin", (e) => { if (e.target.matches(":focus-visible")) pausar(); });
  hero.addEventListener("focusout", (e) => { if (!hero.contains(e.relatedTarget)) retomar(); });
  document.addEventListener("visibilitychange", () => (document.hidden ? pausar() : retomar()));
  mostrar(0);
}
document.addEventListener("DOMContentLoaded", iniciarCarrosselHero);

// index.html?ver-tutoriais reseta os tutoriais (pra conferir como aparecem pra quem entra pela 1ª vez)
try {
  if (new URLSearchParams(location.search).has("ver-tutoriais")) {
    Object.keys(localStorage).filter((k) => k.startsWith("duo-tutorial-")).forEach((k) => localStorage.removeItem(k));
  }
} catch (e) {}

// Home: o botão flutuante do WhatsApp só aparece depois que a pessoa passa do carrossel
// (antes ele ficava em cima da seta "Conheça a DUO").
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-carrossel");
  const whats = document.querySelector(".whats-float");
  if (!hero || !whats || !("IntersectionObserver" in window)) return;
  whats.classList.add("escondido");
  new IntersectionObserver(([e]) => whats.classList.toggle("escondido", e.intersectionRatio > 0.35), { threshold: [0, 0.35, 1] }).observe(hero);
});

// ===== Rolagem pra âncoras e setas entre seções (14/10) =====
// Toda âncora interna (menu, setas, botões) para no TÍTULO da seção, logo abaixo do menu fixo,
// pulando o respiro de cima da seção. Assim os cartões não ficam cortados.
function alturaHeader() {
  const h = document.querySelector(".site-header");
  return h ? h.getBoundingClientRect().height : 0;
}
function rolarAte(alvo, suave = true) {
  let topo = alvo.getBoundingClientRect().top + window.scrollY;
  if (alvo.tagName === "SECTION") topo += parseFloat(getComputedStyle(alvo).paddingTop) || 0;
  window.scrollTo({ top: Math.max(0, topo - alturaHeader() - 18), behavior: suave ? "smooth" : "auto" });
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href*='#']");
  if (!a || a.target === "_blank" || a.href.includes("wa.me")) return;
  const url = new URL(a.href, location.href);
  if (url.pathname !== location.pathname || !url.hash) return;
  const alvo = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!alvo) return;
  e.preventDefault();
  rolarAte(alvo);
  history.replaceState(null, "", url.hash);
  document.querySelector("nav.main-nav")?.classList.remove("open");
});
// Chegando de outra página com #âncora (ex.: index.html#servicos): corrige depois que tudo carregou
window.addEventListener("load", () => {
  if (!location.hash) return;
  const alvo = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (alvo) setTimeout(() => rolarAte(alvo, false), 60);
});

// Seta "próxima seção" no fim de cada seção, com o nome da seguinte (pra quem não está
// acostumado a rolar a página). Seções que já têm seta própria ficam como estão.
function criarSetasEntreSecoes() {
  const secoes = [...document.querySelectorAll("body > section, #course-detail > section")]
    .filter((s) => s.offsetParent !== null);
  secoes.forEach((sec, i) => {
    const prox = secoes[i + 1];
    if (!prox || sec.querySelector(".rolar-cue") || sec.classList.contains("cta-faixa")) return;
    const nome = prox.classList.contains("cta-faixa") || prox.classList.contains("lead-section")
      ? "Fale conosco"
      : prox.querySelector(".detail-layout")
      ? "Conteúdo do treinamento"
      : (prox.querySelector(".badge, h2")?.textContent || "").trim();
    if (!nome) return;
    if (!prox.id) prox.id = `secao-${i + 1}`;
    const escura = sec.matches(".hero, .nr01-section, .dores-section, .lead-section, .final-cta");
    const cue = document.createElement("div");
    cue.className = "wrap rolar-proximo";
    cue.innerHTML = `<a href="#${prox.id}" class="rolar-cue${escura ? "" : " rolar-cue-claro"}">${nome}
      <span class="rolar-seta"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg></span></a>`;
    sec.appendChild(cue);
  });
}
document.addEventListener("DOMContentLoaded", () => setTimeout(criarSetasEntreSecoes, 0));
