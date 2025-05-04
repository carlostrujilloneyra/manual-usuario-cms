document.addEventListener("DOMContentLoaded", function () {
  const allLinks = document.querySelectorAll("a[href^='http']");

  allLinks.forEach(function (link) {
    // Evita modificar enlaces que apuntan al mismo sitio (opcional)
    if (!link.href.includes(location.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  // También aplica a la fuente de GitHub si quieres
  const githubLink = document.querySelector(".md-source");
  if (githubLink) {
    githubLink.setAttribute("target", "_blank");
    githubLink.setAttribute("rel", "noopener noreferrer");
  }

  document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
    el.style.pointerEvents = 'none';
    el.style.color = '#111';
    el.style.textDecoration = 'none'; // opcional
  });

});
