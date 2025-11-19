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
            <p>
                Complete Digital Solutions Ltd is an independent company.
                To view Complete Digital Solutions Ltd's full terms and conditions please click <a href="terms.html">here</a>
                <br>
                Copyright &copy; 2010 Complete digital solutions Ltd. All Rights Reserved. Registered in England Reg. No. 07197430
            </p>
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

    // Scroll effect for header/footer
    const content = document.querySelector(".content");
    const headerEl = document.querySelector(".site-header");
    const footerEl = document.querySelector(".site-footer");

    if (content && headerEl && footerEl) {
        content.addEventListener("scroll", () => {
            const scrollTop = content.scrollTop;

            // Subtle shadow and darken background on scroll
            if (scrollTop > 5) {
                headerEl.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
                footerEl.style.boxShadow = "0 -4px 12px rgba(0,0,0,0.3)";
                headerEl.style.backgroundColor = "#00428a";
                footerEl.style.backgroundColor = "#00428a";
            } else {
                headerEl.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
                footerEl.style.boxShadow = "0 -2px 6px rgba(0,0,0,0.2)";
                headerEl.style.backgroundColor = "#0055a5";
                footerEl.style.backgroundColor = "#0055a5";
            }
        });
    }
});
