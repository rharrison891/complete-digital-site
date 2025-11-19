fetch("/partials/header.html")
    .then(r => r.text())
    .then(html => document.getElementById("header").outerHTML = html);

  fetch("/partials/footer.html")
    .then(r => r.text())
    .then(html => document.getElementById("footer").outerHTML = html);