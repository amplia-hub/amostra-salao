/* =====================================================================
   CONFIGURAÇÃO: edite SÓ este bloco para personalizar o site inteiro.
   Textos, preços, WhatsApp, Instagram, cores e imagens ficam aqui.
   ===================================================================== */
const CONFIG = {
  nome: "Studio Lash",
  whatsapp: "5500000000000", // país + DDD + número, só dígitos. Ex.: 5511999999999
  instagram: "seuinstagram", // sem o @
  endereco: "Av. Paulista, 1000, Bela Vista, São Paulo - SP",
  mapaEmbed:
    "https://www.google.com/maps?q=Av.+Paulista,+1000,+São+Paulo&output=embed", // cole aqui o link do iframe do Google Maps (src). Vazio = mostra um espaço reservado
  cores: {
    principal: "#a8695f",
    escuro: "#3a2824",
    dourado: "#b8925a",
    fundo: "#faf5f0",
  },

  titulo: "Olhar marcante, sem esforço.",
  subtitulo:
    "Extensão de cílios feita sob medida para o seu olho: leve, natural e com durabilidade.",
  avisoPrecos: "Valores de exemplo. Manutenção a cada 15 a 20 dias.",
  mensagemPadrao: "Olá! Vim pelo site e quero agendar um horário.",

  /* Imagens (opcional): coloque as fotos em assets/images/ e escreva o caminho. Vazio = espaço decorativo. */
  imagens: { hero: "assets/images/hero.jpg", sobre: "assets/images/sobre.jpg" },

  servicos: [
    {
      nome: "Fio a fio",
      desc: "Um fio sintético em cada cílio natural. Efeito leve e discreto.",
      preco: "R$ 150",
      img: "assets/images/fio-a-fio.jpg",
    },
    {
      nome: "Volume russo",
      desc: "Leques de fios ultrafinos para um olhar mais cheio e sofisticado.",
      preco: "R$ 190",
      img: "assets/images/volume-russo.jpg",
      destaque: "Mais pedido",
    },
    {
      nome: "Mega volume",
      desc: "Máxima densidade e impacto para quem ama cílios marcantes.",
      preco: "R$ 230",
      img: "assets/images/megavolume.jpeg",
    },
    {
      nome: "Manutenção",
      desc: "Preenchimento dos fios que caíram naturalmente, até 20 dias após a aplicação.",
      preco: "R$ 90",
      img: "assets/images/manutencao.png",
    },
  ],

  galeria: [
    // antes e depois: coloque o caminho das duas fotos
    {
      antes: "assets/images/antes1.png",
      depois: "assets/images/depois1.png",
      legenda: "Fio a fio",
    },
    {
      antes: "assets/images/antes2.png",
      depois: "assets/images/depois2.png",
      legenda: "Volume russo",
    },
    {
      antes: "assets/images/antes3.png",
      depois: "assets/images/depois3.png",
      legenda: "Mega volume",
    },
  ],

  sobreTitulo: "Cuidado em cada fio.",
  sobreTexto1:
    "Sou lash designer e acredito que o melhor resultado é o que combina com o formato do seu olho e com o seu estilo.",
  sobreTexto2:
    "Antes de aplicar, faço um mapeamento personalizado. Assim o efeito fica natural, confortável e bonito por mais tempo.",
  diferenciais: [
    "Avaliação e mapeamento do olhar",
    "Produtos de qualidade e hipoalergênicos",
    "Ambiente limpo e atendimento com hora marcada",
    "Orientação de cuidados em casa",
  ],

  depoimentos: [
    {
      nome: "Mariana S.",
      texto:
        "Amei o resultado! Ficou natural e dura muito. Já agendei a manutenção.",
    },
    {
      nome: "Camila R.",
      texto: "Atendimento impecável e super cuidadoso. Meu olhar mudou.",
    },
    {
      nome: "Juliana P.",
      texto: "Nunca tinha feito extensão e me senti muito segura. Recomendo!",
    },
  ],

  faq: [
    {
      p: "Quanto tempo dura a extensão?",
      r: "Em média de 15 a 20 dias, e a manutenção prolonga o resultado. A duração varia com o ciclo natural dos cílios e com os cuidados em casa.",
    },
    {
      p: "Dói ou machuca os cílios?",
      r: "Não. Os olhos ficam fechados e relaxados, e a aplicação é indolor quando feita corretamente.",
    },
    {
      p: "Posso molhar os cílios?",
      r: "Após 24 horas da aplicação, sim. Evite esfregar e produtos oleosos na região dos olhos.",
    },
    {
      p: "Quanto tempo demora o atendimento?",
      r: "Entre 1h30 e 2h30, dependendo da técnica escolhida.",
    },
    {
      p: "Como faço para agendar?",
      r: "Pelo botão do WhatsApp aqui no site. Eu confirmo o dia e o horário com você.",
    },
  ],

  horarios: [
    ["Segunda a sexta", "09h às 19h"],
    ["Sábado", "09h às 15h"],
    ["Domingo", "Fechado"],
  ],
};
/* ===================== FIM DA CONFIGURAÇÃO ===================== */

(() => {
  const $ = (s) => document.querySelector(s);
  const esc = (t) =>
    String(t).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const C = CONFIG;
  const waLink = (msg) =>
    "https://wa.me/" +
    C.whatsapp +
    "?text=" +
    encodeURIComponent(msg || C.mensagemPadrao);
  const img = (src, alt, label) =>
    src
      ? `<div class="slot"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></div>`
      : `<div class="slot"><span class="ph">${esc(label || alt)}</span></div>`;

  const r = document.documentElement.style;
  r.setProperty("--main", C.cores.principal);
  r.setProperty("--deep", C.cores.escuro);
  r.setProperty("--gold", C.cores.dourado);
  r.setProperty("--bg", C.cores.fundo);
  document.title = C.nome + " | Lash Designer";

  document.querySelectorAll("[data-cfg]").forEach((el) => {
    if (C[el.dataset.cfg] !== undefined) el.textContent = C[el.dataset.cfg];
  });
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink();
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
  document.querySelectorAll("[data-slot]").forEach((el) => {
    const src = C.imagens[el.dataset.slot];
    el.innerHTML = src
      ? `<img src="${esc(src)}" alt="${esc(C.nome)}">`
      : `<span class="ph">${esc(C.nome)}</span>`;
  });
  $("#ano").textContent = new Date().getFullYear();

  $("#lista-servicos").innerHTML = C.servicos
    .map(
      (s) => `
    <article class="card reveal${s.destaque ? " featured" : ""}">${img(s.img, s.nome)}
      <div class="card-body">${s.destaque ? `<span class="badge">${esc(s.destaque)}</span>` : ""}
        <h3>${esc(s.nome)}</h3><p>${esc(s.desc)}</p><span class="price">${esc(s.preco)}</span>
        <a class="btn btn-sm" target="_blank" rel="noopener noreferrer" href="${waLink("Olá! Quero agendar: " + s.nome)}">Agendar</a>
      </div></article>`,
    )
    .join("");

  $("#lista-galeria").innerHTML = C.galeria
    .map(
      (g, i) => `
    <figure class="ba reveal" style="margin:0" aria-label="${esc(g.legenda)}">
      <div class="pane before">${img(g.antes, "Antes: " + g.legenda, "Antes")}<span class="tag">Antes</span></div>
      <div class="pane after">${img(g.depois, "Depois: " + g.legenda, g.legenda)}<span class="tag">Depois</span></div>
      <span class="line"></span>
      <input type="range" min="5" max="95" value="50" aria-label="Comparar antes e depois de ${esc(g.legenda)}">
    </figure>`,
    )
    .join("");
  document
    .querySelectorAll(".ba input")
    .forEach((inp) =>
      inp.addEventListener("input", () =>
        inp.parentElement.style.setProperty("--pos", inp.value + "%"),
      ),
    );

  $("#lista-diferenciais").innerHTML = C.diferenciais
    .map((d) => `<li>${esc(d)}</li>`)
    .join("");
  $("#lista-depoimentos").innerHTML = C.depoimentos
    .map(
      (d) =>
        `<blockquote class="quote reveal" style="margin:0"><span class="stars" aria-label="5 estrelas">★★★★★</span><p>“${esc(d.texto)}”</p><small>${esc(d.nome)}</small></blockquote>`,
    )
    .join("");
  $("#lista-faq").innerHTML = C.faq
    .map(
      (f) =>
        `<details><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`,
    )
    .join("");
  $("#lista-horarios").innerHTML = C.horarios
    .map((h) => `<dt>${esc(h[0])}</dt><dd>${esc(h[1])}</dd>`)
    .join("");
  $("#select-servico").innerHTML =
    C.servicos.map((s) => `<option>${esc(s.nome)}</option>`).join("") +
    "<option>Ainda não sei, preciso de orientação</option>";

  const insta = $("#link-insta");
  insta.href = "https://instagram.com/" + C.instagram;
  insta.textContent = "Siga @" + C.instagram + " no Instagram";
  $("#mapa").innerHTML = C.mapaEmbed
    ? `<iframe src="${esc(C.mapaEmbed)}" loading="lazy" title="Mapa do estúdio" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    : `<div class="slot"><span class="ph">Mapa do Google aparece aqui</span></div>`;

  const burger = $(".burger"),
    nav = $("#nav");
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  burger.addEventListener("click", () =>
    setMenu(!nav.classList.contains("open")),
  );
  nav
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setMenu(false)));

  $("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const msg = [
      "Olá! Me chamo " + d.get("nome") + ".",
      "Quero agendar: " + d.get("servico") + ".",
      d.get("quando") ? "Melhor horário: " + d.get("quando") + "." : "",
      d.get("msg") || "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    $("#hint").textContent = "Abrindo o WhatsApp com a sua mensagem.";
  });

  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (es) =>
            es.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add("in");
                io.unobserve(en.target);
              }
            }),
          { threshold: 0.15 },
        )
      : null;
  document
    .querySelectorAll(".reveal")
    .forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
})();
