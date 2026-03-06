class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '.';

        this.innerHTML = `
        <footer class="footer glass-dark" id="contact">
            <div class="container footer-grid">
                <div class="footer-col brand">
                    <div class="logo">
                        <img src="${basePath}/assets/images/easy-drive-logo.png" alt="Easy-Drive.UK Logo" style="height: 100px; object-fit: contain;">
                    </div>
                    <p>Empowering learners to pass fast through intensive, modern driving courses.</p>
                    <div class="social-links">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>

                <div class="footer-col links">
                    <h4>Courses</h4>
                    <ul>
                        <li><a href="${basePath}/pages/courses.html">Intensive Crash Courses</a></li>
                        <li><a href="${basePath}/pages/courses.html">Manual Driving Lessons</a></li>
                        <li><a href="${basePath}/pages/courses.html">Automatic Driving Lessons</a></li>
                        <li><a href="${basePath}/pages/courses.html">Refresher Lessons</a></li>
                        <li><a href="${basePath}/pages/about.html">PassProtect</a></li>
                    </ul>
                </div>

                <div class="footer-col links">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="${basePath}/index.html#courses">Course Recommender</a></li>
                        <li><a href="${basePath}/pages/show-me-tell-me.html">Theory Test Advice</a></li>
                        <li><a href="${basePath}/pages/show-me-tell-me.html">Practical Test Tips</a></li>
                        <li><a href="${basePath}/index.html#locations">Areas We Cover</a></li>
                        <li><a href="${basePath}/index.html#faq">FAQ</a></li>
                    </ul>
                </div>

                <div class="footer-col info">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><i class="fa-solid fa-phone text-accent"></i> 0777777777777</li>
                        <li><i class="fa-solid fa-envelope text-accent"></i> support@easy-drive.uk</li>
                        <li><i class="fa-solid fa-location-dot text-accent"></i> Manchester HQ, United Kingdom</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom" style="text-align: center; padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 40px;">
                <p>&copy; 2026 Easy-Drive.UK. All Rights Reserved.</p>
            </div>
        </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
