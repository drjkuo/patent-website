(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");

  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenuOpen(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenuOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !nav.classList.contains("is-open")) return;
      e.preventDefault();
      setMenuOpen(false);
      toggle.focus();
    });
  }
})();
