/**
 * DeepSea Guardian - Unified Navigation & Sidebar Loader
 * Ensures consistent, responsive, and beautiful navigation across the platform.
 */

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Helper: Is this page a dashboard subpage?
    const isDashboardPage = ['dashboard.html', 'marine.html', 'drone.html', 'analytics.html'].includes(filename);

    if (isDashboardPage) {
        setupDashboardNavigation(filename);
    } else {
        setupLandingNavigation();
    }
});

/**
 * Setup landing page navbar (index.html)
 */
function setupLandingNavigation() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (!navbarPlaceholder) return;

    navbarPlaceholder.outerHTML = `
    <!-- Unified MainHeader -->
    <header class="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <nav class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2 group cursor-pointer interactive">
                <div class="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] transform group-hover:rotate-6 transition-transform">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.641.319a4 4 0 01-1.833.466H8.5a2 2 0 01-2-2V8a2 2 0 012-2h3.833a4 4 0 011.832.467l.642.319a6 6 0 003.859.517l2.388-.477a2 2 0 001.021-.547M8.222 9.041a3.5 3.5 0 016.709 0m-6.71 5.918a3.5 3.5 0 016.71 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                </div>
                <span class="text-xl font-bold tracking-tight">DeepSea <span class="text-cyan-400">Guardian</span></span>
            </a>
            
            <!-- Mobile Menu Toggle -->
            <button id="mobile-nav-toggle" class="lg:hidden text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors p-2" aria-label="Toggle navigation menu">
                <svg id="mobile-nav-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg id="mobile-nav-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Nav Links (Desktop) -->
            <ul class="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
                <li><a class="nav-link text-cyan-400 border-b-2 border-cyan-400 pb-1 interactive" href="index.html">Home</a></li>
                <li><a class="nav-link nav-underline hover:text-cyan-400 transition-colors interactive" href="index.html#about-section">About</a></li>
                <li><a class="nav-link nav-underline hover:text-cyan-400 transition-colors interactive" href="dashboard.html">Dashboard</a></li>
                <li><a class="nav-link nav-underline hover:text-cyan-400 transition-colors interactive" href="marine.html">Marine Life</a></li>
                <li><a class="nav-link nav-underline hover:text-cyan-400 transition-colors interactive" href="drone.html">Drones</a></li>
                <li><a class="nav-link nav-underline hover:text-cyan-400 transition-colors interactive" href="analytics.html">Analytics</a></li>
                <li><a class="nav-link nav-underline hover:text-cyan-400 transition-colors interactive" href="index.html#contact-section">Contact</a></li>
            </ul>

            <!-- CTA -->
            <a href="dashboard.html" class="hidden lg:inline-block bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] interactive">
                Get Started
            </a>
        </nav>

        <!-- Mobile Drawer -->
        <div id="mobile-nav-drawer" class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out" style="max-height: 0; opacity: 0;">
            <div class="pt-4 mt-4 border-t border-white/5 space-y-1">
                <a class="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 py-3 px-4 rounded-lg transition-all" href="index.html">Home</a>
                <a class="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 py-3 px-4 rounded-lg transition-all" href="index.html#about-section">About</a>
                <a class="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 py-3 px-4 rounded-lg transition-all" href="dashboard.html">Dashboard</a>
                <a class="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 py-3 px-4 rounded-lg transition-all" href="marine.html">Marine Life</a>
                <a class="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 py-3 px-4 rounded-lg transition-all" href="drone.html">Drones</a>
                <a class="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 py-3 px-4 rounded-lg transition-all" href="analytics.html">Analytics</a>
                <a class="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 py-3 px-4 rounded-lg transition-all" href="index.html#contact-section">Contact</a>
                <a href="dashboard.html" class="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-white py-2.5 rounded-lg font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] mt-3">
                    Get Started
                </a>
            </div>
        </div>
    </header>
    `;

    // Hook up mobile nav drawer toggle with smooth animation
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    const drawer = document.getElementById("mobile-nav-drawer");
    const iconOpen = document.getElementById("mobile-nav-icon-open");
    const iconClose = document.getElementById("mobile-nav-icon-close");
    let isOpen = false;

    if (toggleBtn && drawer) {
        toggleBtn.addEventListener("click", () => {
            isOpen = !isOpen;
            if (isOpen) {
                drawer.style.maxHeight = drawer.scrollHeight + "px";
                drawer.style.opacity = "1";
                if (iconOpen) iconOpen.classList.add("hidden");
                if (iconClose) iconClose.classList.remove("hidden");
            } else {
                drawer.style.maxHeight = "0";
                drawer.style.opacity = "0";
                if (iconOpen) iconOpen.classList.remove("hidden");
                if (iconClose) iconClose.classList.add("hidden");
            }
        });

        // Close drawer on resize to desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024 && isOpen) {
                isOpen = false;
                drawer.style.maxHeight = "0";
                drawer.style.opacity = "0";
                if (iconOpen) iconOpen.classList.remove("hidden");
                if (iconClose) iconClose.classList.add("hidden");
            }
        });

        // Close drawer when a link is clicked
        drawer.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                isOpen = false;
                drawer.style.maxHeight = "0";
                drawer.style.opacity = "0";
                if (iconOpen) iconOpen.classList.remove("hidden");
                if (iconClose) iconClose.classList.add("hidden");
            });
        });
    }
}

/**
 * Setup dashboard sidebar & overlay (dashboard.html, marine.html, drone.html, analytics.html)
 */
function setupDashboardNavigation(activeFilename) {
    const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
    if (!sidebarPlaceholder) return;

    // Inject Sidebar Overlay if not already present
    if (!document.getElementById("sidebar-overlay")) {
        const overlay = document.createElement("div");
        overlay.id = "sidebar-overlay";
        overlay.className = "sidebar-overlay";
        overlay.addEventListener("click", closeSidebar);
        document.body.prepend(overlay);
    }

    // Inject critical sidebar CSS into <head> to ensure consistent behavior across all pages
    if (!document.getElementById("unified-sidebar-css")) {
        const style = document.createElement("style");
        style.id = "unified-sidebar-css";
        style.textContent = `
            /* ============================================
               UNIFIED SIDEBAR STYLES (injected by navigation.js)
               ============================================ */

            /* Sidebar: desktop sticky, mobile off-canvas drawer */
            #sidebar {
                position: fixed;
                top: 0;
                left: 0;
                width: min(80vw, 260px);
                height: 100vh;
                height: 100dvh;
                background: rgba(13, 19, 33, 0.98);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-right: 1px solid rgba(132, 147, 150, 0.15);
                display: flex;
                flex-direction: column;
                padding: 1.5rem 0;
                z-index: 60;
                transform: translateX(-100%);
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 4px 0 40px rgba(0, 0, 0, 0.5);
                overflow-y: auto;
                overflow-x: hidden;
                -webkit-overflow-scrolling: touch;
            }

            #sidebar.sidebar-open {
                transform: translateX(0) !important;
            }

            /* Overlay behind the drawer on mobile */
            .sidebar-overlay {
                display: none;
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(2px);
                -webkit-backdrop-filter: blur(2px);
                z-index: 55;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .sidebar-overlay.overlay-visible {
                display: block;
                opacity: 1;
            }

            /* Menu toggle: hidden on desktop, visible on mobile/tablet */
            #menu-toggle {
                display: inline-flex !important;
            }

            /* Desktop: sidebar becomes sticky and always visible */
            @media (min-width: 1024px) {
                #sidebar {
                    position: sticky;
                    top: 0;
                    width: 260px;
                    transform: translateX(0) !important;
                    box-shadow: none;
                    flex-shrink: 0;
                    background: rgba(13, 19, 33, 0.5);
                }

                #sidebar.sidebar-open {
                    transform: translateX(0) !important;
                }

                .sidebar-overlay {
                    display: none !important;
                }

                #menu-toggle {
                    display: none !important;
                }
            }

            /* Touch-friendly tap targets */
            @media (max-width: 1023px) {
                #sidebar a {
                    min-height: 44px;
                    display: flex;
                    align-items: center;
                }
            }

            /* Prevent body scroll when sidebar is open on mobile */
            body.sidebar-is-open {
                overflow: hidden;
            }
            @media (min-width: 1024px) {
                body.sidebar-is-open {
                    overflow: auto;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Sidebar Items configuration
    const menuItems = [
        { name: "Home", file: "index.html", icon: "home" },
        { name: "Dashboard", file: "dashboard.html", icon: "dashboard" },
        { name: "Marine Life", file: "marine.html", icon: "eco" },
        { name: "Drones", file: "drone.html", icon: "precision_manufacturing" },
        { name: "Analytics", file: "analytics.html", icon: "insights" },
    ];

    const isCurrent = (itemFile) => {
        return activeFilename === itemFile;
    };

    const sidebarContent = `
    <nav id="sidebar" role="navigation" aria-label="Main navigation">
        <div class="px-6 mb-8 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30 shrink-0 shadow-[0_0_15px_rgba(0,218,243,0.2)]">
                    <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">water_drop</span>
                </div>
                <div class="min-w-0">
                    <h1 class="font-display-lg text-display-lg text-primary uppercase tracking-tighter text-lg font-bold truncate">DEEP SEA TECH</h1>
                </div>
            </div>
            <button onclick="closeSidebar()" class="lg:hidden text-on-surface-variant hover:text-primary transition-colors shrink-0 p-2 -mr-2 rounded-lg hover:bg-surface-variant/30" aria-label="Close navigation menu">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        
        <ul class="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
            ${menuItems.map(item => `
                <li>
                    <a href="${item.file}" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out group ${
                        isCurrent(item.file)
                            ? "text-primary bg-primary-container/20 border-l-4 border-primary font-bold shadow-[inset_0_0_12px_rgba(0,218,243,0.1)]"
                            : "text-on-surface-variant hover:text-primary hover:bg-surface-variant/30"
                    }">
                        <span class="material-symbols-outlined transition-transform duration-300 group-hover:scale-110" style="font-variation-settings: 'FILL' ${isCurrent(item.file) ? '1' : '0'};">${item.icon}</span>
                        <span>${item.name}</span>
                        ${isCurrent(item.file) ? `<div class="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,218,243,1)]"></div>` : ""}
                    </a>
                </li>
            `).join('')}
        </ul>

        <div class="px-4 mt-auto space-y-4">
            <!-- Dynamic Monitoring Status widget -->
            <div class="glass-panel p-4 rounded-2xl flex flex-col items-center text-center relative overflow-hidden border border-outline-variant/30 bg-surface-container-low/20">
                <img class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity pointer-events-none" src="https://images.unsplash.com/photo-1682687982501-1e5898cb8f4b?w=300&h=300&fit=crop">
                <div class="relative z-10 w-full">
                    <div class="text-sm font-bold text-white mb-1">AI Monitoring</div>
                    <div class="text-xs text-cyan-400 flex items-center justify-center gap-1.5 mb-3">
                        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,218,243,1)]"></span>
                        24/7 Active
                    </div>
                    <button class="w-full py-2 px-3 border border-cyan-500/30 rounded-xl text-xs text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-1.5">
                        <span class="material-symbols-outlined text-[14px]">shield</span> System Online
                    </button>
                </div>
            </div>

            <!-- Profile Widget -->
            <div class="flex items-center gap-3 p-3 glass-panel rounded-2xl border border-outline-variant/30 bg-surface-container-low/25">
                <div class="w-9 h-9 rounded-full bg-surface-bright flex-shrink-0 overflow-hidden border border-primary/20">
                    <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNv9SfgcUDnufyUv6nFsmGT_5mnF8788bysTYQwSHiJpyXcI_TJK4zC9OjuIi48ZCHjcvim8FESJbuqK7DlufY0HGaayT8WLwttF5eASN9xyg_F3m_xT7nPBVAqbwPBhYVzVveu26oxkcD1qr4sy2bQTOrZG04cEAHsR8UcsvoWk0yLxRGLhgpC8_SiFX0mn4CjoBhoWRJsE9JK-GgpSJ_FpkMtsMXxCB0RGDCPWMAQ-rV_ZKeM0AgKK8Cy1s5T0PQrUNrXwOtI21g">
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-sm font-bold text-white truncate">Ocean Admin</div>
                    <div class="text-[10px] text-cyan-400/80 tracking-wider truncate font-semibold uppercase">Chief Officer</div>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:text-primary transition-colors">expand_more</span>
            </div>
        </div>
    </nav>
    `;

    sidebarPlaceholder.outerHTML = sidebarContent;

    // Ensure body has flex layout for sidebar + main content
    if (!document.body.classList.contains("sidebar-layout")) {
        document.body.classList.add("sidebar-layout");
        // Add layout CSS if not present
        if (!document.getElementById("sidebar-layout-css")) {
            const layoutStyle = document.createElement("style");
            layoutStyle.id = "sidebar-layout-css";
            layoutStyle.textContent = `
                body.sidebar-layout {
                    display: flex;
                    min-height: 100vh;
                    min-height: 100dvh;
                }
                @media (max-width: 1023px) {
                    body.sidebar-layout {
                        display: flex;
                        flex-direction: column;
                    }
                    body.sidebar-layout > main {
                        flex: 1;
                        width: 100%;
                    }
                }
                @media (min-width: 1024px) {
                    body.sidebar-layout {
                        flex-direction: row;
                    }
                }
            `;
            document.head.appendChild(layoutStyle);
        }
    }

    // Close sidebar on link click (mobile only)
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
                if (window.innerWidth < 1024) {
                    closeSidebar();
                }
            });
        });
    }

    // Close sidebar on resize to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            closeSidebar();
        }
    });
}

// Global functions for mobile sidebar triggers
window.openSidebar = function() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    if (sidebar) {
        sidebar.classList.add("sidebar-open");
        document.body.classList.add("sidebar-is-open");
    }
    if (overlay) {
        overlay.classList.add("overlay-visible");
    }
};

window.closeSidebar = function() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    if (sidebar) {
        sidebar.classList.remove("sidebar-open");
        document.body.classList.remove("sidebar-is-open");
    }
    if (overlay) {
        overlay.classList.remove("overlay-visible");
    }
};