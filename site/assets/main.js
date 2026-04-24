(function () {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (document.body.dataset.page === "papers") {
    initPapersPage();
  }

  function initPapersPage() {
    const container = document.getElementById("papers-container");
    const search = document.getElementById("paper-search");
    const typeSelect = document.getElementById("paper-type");
    const counter = document.getElementById("paper-count");
    if (!container || !search || !typeSelect || !counter) return;

    fetch("assets/data/papers.json")
      .then(function (res) { return res.json(); })
      .then(function (papers) {
        render(papers);

        search.addEventListener("input", function () {
          render(filterPapers(papers));
        });

        typeSelect.addEventListener("change", function () {
          render(filterPapers(papers));
        });
      })
      .catch(function () {
        container.innerHTML = "<p>Could not load papers list. Please verify assets/data/papers.json.</p>";
      });

    function filterPapers(papers) {
      const term = search.value.trim().toLowerCase();
      const chosenType = typeSelect.value;

      return papers.filter(function (paper) {
        const searchableText = [
          paper.title,
          paper.authors,
          paper.journal,
          paper.year,
          (paper.tags || []).join(" "),
        ]
          .join(" ")
          .toLowerCase();

        const matchesTerm = searchableText.includes(term);
        const matchesType = chosenType === "all" || paper.type === chosenType;
        return matchesTerm && matchesType;
      });
    }

    function render(items) {
      counter.textContent = String(items.length);
      if (!items.length) {
        container.innerHTML = "<p>No papers match your filters yet.</p>";
        return;
      }

      container.innerHTML = items
        .map(function (paper) {
          const tags = (paper.tags || []).map(function (tag) {
            return "<span>" + escapeHtml(tag) + "</span>";
          }).join("");

          const safeTitle = escapeHtml(paper.title);
          const safeAuthors = escapeHtml(paper.authors);
          const safeJournal = escapeHtml(paper.journal || "");
          const safeYear = escapeHtml(String(paper.year));
          const safeType = escapeHtml(prettyType(paper.type));
          const safeLink = escapeAttribute(paper.link || "#");

          return "" +
            "<article class='paper-card'>" +
              "<div class='paper-type'>" + safeType + "</div>" +
              "<h3>" + safeTitle + "</h3>" +
              "<p class='paper-authors'>" + safeAuthors + " (" + safeYear + ")</p>" +
              (safeJournal ? "<p class='paper-journal'>" + safeJournal + "</p>" : "") +
              "<div class='paper-tags'>" + tags + "</div>" +
              "<a class='text-link' href='" + safeLink + "' target='_blank' rel='noreferrer'>Open paper</a>" +
            "</article>";
        })
        .join("");
    }
  }

  function prettyType(type) {
    if (type === "working-paper") return "Working Paper";
    if (type === "policy-note") return "Policy Note";
    return "Journal Article";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return String(value).replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
  }
})();
