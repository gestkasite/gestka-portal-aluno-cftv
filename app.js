(() => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const showChecklist = document.getElementById("showChecklist");
  const checklist = document.getElementById("practiceChecklist");

  if (year) year.textContent = new Date().getFullYear();

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  if (showChecklist && checklist) {
    showChecklist.addEventListener("click", () => {
      const willShow = checklist.hidden;
      checklist.hidden = !willShow;
      showChecklist.setAttribute("aria-expanded", String(willShow));
      showChecklist.textContent = willShow ? "Ocultar checklist" : "Ver checklist";
    });
  }
})();