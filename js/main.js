/* Interações do site demonstrativo */
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");

  if (form && note) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      const body = [
        "Olá! Meu nome é " + name + ".",
        "Telefone: " + phone,
        email ? "E-mail: " + email : "",
        "Mensagem: " + message
      ].filter(Boolean).join("\n");

      const whatsappNumber = ""; // Insira o número do salão com código do país, somente números.
      if (whatsappNumber) {
        const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(body);
        window.open(url, "_blank", "noopener,noreferrer");
        note.textContent = "Sua mensagem foi preparada para abrir no WhatsApp.";
      } else {
        const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "mensagem-para-o-salao.txt";
        link.click();
        URL.revokeObjectURL(url);
        note.textContent = "O contato ainda não foi configurado. Baixamos sua mensagem como arquivo de texto para demonstração.";
      }
    });
  }
})();
