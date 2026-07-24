const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract head and header
const headerMatch = indexHtml.match(/([\s\S]*?)<!-- END: MainHeader -->/);
let headerHtml = headerMatch[0];

// Extract footer
const footerMatch = indexHtml.match(/(<footer[\s\S]*)/);
const footerHtml = footerMatch[1];

// Update Navigation Links in headerHtml
// 1. Remove active state from Home
headerHtml = headerHtml.replace(
    /<a class="nav-link text-cyan-400 border-b-2 border-cyan-400 pb-1 interactive" href="#">Home<\/a>/,
    `<a class="nav-link interactive" href="index.html">Home</a>`
);
// 2. Add active state to Contact, change href="#" to "contact.html" in other links
headerHtml = headerHtml.replace(
    /<a class="nav-link interactive" href="#">Contact<\/a>/,
    `<a class="nav-link text-cyan-400 border-b-2 border-cyan-400 pb-1 interactive" href="contact.html">Contact</a>`
);

const contactContent = `
<!-- BEGIN: Contact Content -->
<main class="pt-24 pb-20">
    <!-- Hero Section -->
    <section class="relative py-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div class="absolute inset-0 bg-[url('deep_sea_hero.png')] bg-cover bg-center opacity-30"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-deepSea/80 to-deepSea z-0"></div>
        <div class="relative z-10 max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
                Get in <span class="text-cyan-400 glow-text">Touch</span>
            </h1>
            <p class="text-xl text-slate-300 animate-fade-in-up" style="animation-delay: 0.2s;">
                We're here to answer any questions about our AI-powered ocean monitoring platform.
            </p>
        </div>
    </section>

    <div class="max-w-7xl mx-auto px-6 space-y-24">
        
        <!-- Contact Form & Contact Info -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="glass-card p-8 rounded-2xl reveal">
                <h2 class="text-2xl font-bold mb-6 text-white">Send a Message</h2>
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                        <input type="email" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                        <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-400 mb-2">Message</label>
                        <textarea rows="4" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all"></textarea>
                    </div>
                    <button type="button" class="w-full bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] interactive">
                        Send Message
                    </button>
                </form>
            </div>

            <!-- Contact Information -->
            <div class="reveal" style="transition-delay: 0.2s;">
                <h2 class="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <p class="text-slate-400 mb-8 leading-relaxed">
                    Have questions about our data, partnerships, or technology? Reach out directly. Our global team is available 24/7 to support marine conservation efforts.
                </p>
                <div class="space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-cyan-500/10 rounded-lg border border-cyan-500/20 flex items-center justify-center shrink-0">
                            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-white">Email Us</h4>
                            <p class="text-cyan-400">contact@deepseaguardian.org</p>
                            <p class="text-slate-500 text-sm">For general inquiries and support</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-cyan-500/10 rounded-lg border border-cyan-500/20 flex items-center justify-center shrink-0">
                            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-white">Call Us</h4>
                            <p class="text-cyan-400">+1 (555) OCEAN-AI</p>
                            <p class="text-slate-500 text-sm">Mon-Fri from 9am to 6pm (EST)</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-cyan-500/10 rounded-lg border border-cyan-500/20 flex items-center justify-center shrink-0">
                            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-white">Global Headquarters</h4>
                            <p class="text-cyan-400">Marine Science Park</p>
                            <p class="text-slate-500 text-sm">100 Ocean Drive, Suite 300<br>San Francisco, CA 94105</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Office Locations -->
        <section class="reveal">
            <h2 class="text-3xl font-bold mb-8 text-center text-white">Our Global Offices</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Office Card 1 -->
                <div class="glass-card p-6 rounded-2xl hover:border-cyan-500/50 transition-all cursor-pointer">
                    <h3 class="text-xl font-bold text-white mb-2">North America</h3>
                    <p class="text-cyan-400 text-sm mb-4">San Francisco, CA</p>
                    <p class="text-slate-400 text-sm">Primary research facility and AI development hub.</p>
                </div>
                <!-- Office Card 2 -->
                <div class="glass-card p-6 rounded-2xl hover:border-cyan-500/50 transition-all cursor-pointer">
                    <h3 class="text-xl font-bold text-white mb-2">Europe</h3>
                    <p class="text-cyan-400 text-sm mb-4">Lisbon, Portugal</p>
                    <p class="text-slate-400 text-sm">European operations and policy partnerships.</p>
                </div>
                <!-- Office Card 3 -->
                <div class="glass-card p-6 rounded-2xl hover:border-cyan-500/50 transition-all cursor-pointer">
                    <h3 class="text-xl font-bold text-white mb-2">Asia Pacific</h3>
                    <p class="text-cyan-400 text-sm mb-4">Sydney, Australia</p>
                    <p class="text-slate-400 text-sm">Reef monitoring and regional data center.</p>
                </div>
            </div>
        </section>

        <!-- Interactive World Map -->
        <section class="reveal">
            <div class="glass-card rounded-2xl p-2 relative h-[400px] overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Eckert_IV_projection_SW.jpg')] bg-cover bg-center opacity-30 mix-blend-screen"></div>
                <div class="absolute inset-0 bg-deepSea/60"></div>
                
                <!-- Map Pings -->
                <div class="absolute top-[30%] left-[15%]">
                    <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <div class="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                <div class="absolute top-[40%] left-[45%]">
                    <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <div class="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                <div class="absolute top-[60%] left-[80%]">
                    <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <div class="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>

                <div class="relative z-10 text-center">
                    <h3 class="text-2xl font-bold text-white mb-2">Global Presence</h3>
                    <p class="text-slate-300">Monitoring oceans across 3 continents</p>
                </div>
            </div>
        </section>

        <!-- Support Cards -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div class="glass-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform">
                <div class="w-16 h-16 bg-cyan-500/10 rounded-full mx-auto flex items-center justify-center mb-6">
                    <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Technical Support</h3>
                <p class="text-slate-400 text-sm mb-6">Need help with our API or platform integrations?</p>
                <a href="#" class="text-cyan-400 hover:text-cyan-300 font-medium">Get Tech Support →</a>
            </div>
            <div class="glass-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform">
                <div class="w-16 h-16 bg-cyan-500/10 rounded-full mx-auto flex items-center justify-center mb-6">
                    <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Partnerships</h3>
                <p class="text-slate-400 text-sm mb-6">Join our network of conservation organizations.</p>
                <a href="#" class="text-cyan-400 hover:text-cyan-300 font-medium">Partner with Us →</a>
            </div>
            <div class="glass-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform">
                <div class="w-16 h-16 bg-cyan-500/10 rounded-full mx-auto flex items-center justify-center mb-6">
                    <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Press Inquiries</h3>
                <p class="text-slate-400 text-sm mb-6">Download our media kit and contact PR.</p>
                <a href="#" class="text-cyan-400 hover:text-cyan-300 font-medium">Media Center →</a>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="max-w-3xl mx-auto reveal">
            <h2 class="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
            <div class="space-y-4">
                <!-- FAQ 1 -->
                <div class="glass-card rounded-lg p-6">
                    <h4 class="text-lg font-bold text-white mb-2">How can researchers access the data?</h4>
                    <p class="text-slate-400 text-sm">Verified marine biologists and research institutions can apply for API access through our Partnerships portal.</p>
                </div>
                <!-- FAQ 2 -->
                <div class="glass-card rounded-lg p-6">
                    <h4 class="text-lg font-bold text-white mb-2">Is the platform open source?</h4>
                    <p class="text-slate-400 text-sm">Select machine learning models and dataset schemas are open-sourced on our GitHub to encourage community contributions.</p>
                </div>
                <!-- FAQ 3 -->
                <div class="glass-card rounded-lg p-6">
                    <h4 class="text-lg font-bold text-white mb-2">How do I report an environmental anomaly?</h4>
                    <p class="text-slate-400 text-sm">Users can submit reports via the 'Contact Form' on this page, and our AI will triage the data against satellite imagery.</p>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="reveal">
            <div class="glass-card rounded-2xl p-12 text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-cyan-500/5"></div>
                <div class="relative z-10 max-w-2xl mx-auto">
                    <h2 class="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                    <p class="text-slate-300 mb-8">Subscribe to our newsletter for the latest ocean conservation reports and platform updates.</p>
                    <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email" class="flex-1 bg-deepSea border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50">
                        <button type="button" class="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] interactive">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>

    </div>
</main>
<!-- END: Contact Content -->
`;

fs.writeFileSync('contact.html', headerHtml + '\\n' + contactContent + '\\n' + footerHtml, 'utf8');
console.log('Successfully generated contact.html');
