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
            <div class="footer-collapsible">
                <div class="footer-preview">
                    Complete Digital Solutions Ltd is an independent company.
                    <span class="footer-toggle">&#9650;</span>
                </div>
                <div class="footer-full">
                    To view Complete Digital Solutions Ltd's full terms and conditions please click <a href="terms.html">here</a>
                    <br>
                    Copyright &copy; 2010 Complete Digital Solutions Ltd. All Rights Reserved. Registered in England Reg. No. 07197430
                </div>
            </div>
        </div>
    `
};

document.addEventListener("DOMContentLoaded", () => {
    // Inject header/footer
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.innerHTML = Templates.header;
    if (footer) footer.innerHTML = Templates.footer;

    // Floating contact widget
    const contactWidget = document.createElement("div");
    contactWidget.className = "contact-widget";
    contactWidget.innerHTML = `
        <a href="mailto:info@completedigital.co.uk" title="Email us">&#9993;</a>
        <a href="tel:+441243583981" title="Call us">&#128222;</a>
    `;
    document.body.appendChild(contactWidget);

    // Cookie widget
    const cookieWidget = document.createElement("div");
    cookieWidget.className = "cookie-indicator";
    cookieWidget.textContent = "🍪";

    // Style to match contact widget
    Object.assign(cookieWidget.style, {
        position: "fixed",
        bottom: "10rem",
        left: "1rem",
        width: "3rem",
        height: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0055a5",
        color: "#fff",
        fontSize: "1.5rem",
        borderRadius: "50%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "transform 0.2s ease, background 0.2s ease",
        zIndex: "1100"
    });

    // Create tooltip
    const tooltip = document.createElement("div");
    tooltip.textContent = "No cookies on this site";
    Object.assign(tooltip.style, {
        position: "absolute",
        bottom: "110%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#00428a",
        color: "#fff",
        padding: "0.5rem 0.75rem",
        borderRadius: "5px",
        fontSize: "0.75rem",
        whiteSpace: "nowrap",
        opacity: "0",
        pointerEvents: "none",
        transition: "opacity 0.2s"
    });

    // Add click toggle
    cookieWidget.addEventListener("click", () => {
        tooltip.style.opacity = tooltip.style.opacity === "1" ? "0" : "1";
        cookieWidget.style.transform = tooltip.style.opacity === "1" ? "scale(1.2)" : "scale(1)";
    });

    // Append tooltip to widget
    cookieWidget.appendChild(tooltip);

    // Add to page
    document.body.appendChild(cookieWidget);

    // Active nav link
    const navLinks = document.querySelectorAll("#main-nav a");
    const currentPage = location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Hamburger toggle
    const ham = document.getElementById("hamburger");
    const nav = document.getElementById("main-nav");
    if (ham && nav) {
        ham.addEventListener("click", () => nav.classList.toggle("nav-open"));
    }

    // Footer collapsible toggle (mobile)
    const footerCollapsible = document.querySelector(".footer-collapsible");
    const footerToggle = document.querySelector(".footer-toggle");
    if (footerCollapsible && footerToggle) {
        footerToggle.addEventListener("click", () => {
            footerCollapsible.classList.toggle("open");
        });
    }

    // Scroll effect for header/footer shadows and darken bg
    const content = document.querySelector(".content");
    const headerEl = document.querySelector(".site-header");
    const footerEl = document.querySelector(".site-footer");
    if (content && headerEl && footerEl) {
        content.addEventListener("scroll", () => {
            const scrollTop = content.scrollTop;
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

    // Accordion toggle
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            document.querySelectorAll('.accordion-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');
            document.querySelectorAll('.accordion-content ul li').forEach(li => {
                li.style.opacity = 0;
                li.style.transform = 'translateX(-10px)';
            });

            // Open clicked
            if (!isOpen) {
                item.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";

                const lis = content.querySelectorAll('ul li');
                lis.forEach((li, idx) => {
                    li.style.transitionDelay = `${0.05 + idx * 0.05}s`;
                    li.style.opacity = 1;
                    li.style.transform = 'translateX(0)';
                });

                if (icon) icon.style.transform = 'rotate(90deg)';

                // ⭐ Auto-scroll into view when opening
                const scrollContainer = document.querySelector('.content');
                if (scrollContainer) {
                    setTimeout(() => {
                        item.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                    }, 200); // slight delay so expansion animates first
                }
            }
        });
    });
});