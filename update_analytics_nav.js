const fs = require('fs');

const dashboardHtml = fs.readFileSync('dashboard.html', 'utf8');
const analyticsHtml = fs.readFileSync('analytics.html', 'utf8');

const navMatch = dashboardHtml.match(/<!-- SideNavBar -->[\s\S]*?<\/nav>/);
if (!navMatch) {
    console.error('Nav not found in dashboard.html');
    process.exit(1);
}

let navHtml = navMatch[0];

// Remove active state from Dashboard
navHtml = navHtml.replace(
    /<a href="dashboard\.html"[^>]*class="[^"]*text-primary bg-primary-container\/20 border-l-4 border-primary font-bold[^"]*"[^>]*>([\s\S]*?)<\/a>/,
    (match, p1) => {
        // Remove the dot marker
        p1 = p1.replace(/<div class="ml-auto w-1\.5 h-1\.5 rounded-full bg-primary"><\/div>/, '');
        return `<a href="dashboard.html" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 transition-all duration-300 ease-in-out">${p1}</a>`;
    }
);

// Add active state to Analytics
navHtml = navHtml.replace(
    /<a href="analytics\.html"[^>]*class="[^"]*text-on-surface-variant hover:text-primary hover:bg-surface-variant\/30 transition-all duration-300 ease-in-out"[^>]*>([\s\S]*?)<\/a>/,
    (match, p1) => {
        return `<a href="analytics.html" class="flex items-center gap-3 px-4 py-3 rounded-lg text-primary bg-primary-container/20 border-l-4 border-primary font-bold transition-all duration-300 ease-in-out">${p1}\n                    <div class="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></div>\n                </a>`;
    }
);

const newAnalyticsHtml = analyticsHtml.replace(/<!-- SideNavBar Integration -->/, navHtml);

fs.writeFileSync('analytics.html', newAnalyticsHtml, 'utf8');
console.log('Successfully injected nav into analytics.html');
