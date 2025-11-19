const Templates = {
    header: `
        <div class="site-header">
            <div class="logo">Complete Digital Solutions</div>
            <div id="hamburger" class="hamburger">&#9776;</div>
            <nav id="main-nav" class="nav-closed">
                <a href="index.html">Home</a>
                <a href="whats-changing.html">What's Changing</a>
                <a href="4k-info.html">4K Info</a>
                <a href="4k-options.html">4K Options</a>
                <a href="hd-freeview.html">HD & Freeview</a>
            </nav>
        </div>
    `,

    footer: `
        <div class="site-footer">
            Complete Digital Solutions Ltd is an independent company.
                    To view Complete Digital Solutions Ltd’s full terms and conditions please click <a href="terms.html">here</a>
        </div>
    `
};

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) header.innerHTML = Templates.header;

    const footer = document.querySelector("footer");
    if (footer) footer.innerHTML = Templates.footer;

    // Hamburger menu
    const ham = document.getElementById("hamburger");
    const nav = document.getElementById("main-nav");

    if (ham && nav) {
        ham.addEventListener("click", () => {
            nav.classList.toggle("nav-open");
        });
    }
});
