class SiteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Read basePath to adjust paths depending on if we are in root or pages/
        const basePath = this.getAttribute('base-path') || '.';

        this.innerHTML = `
        <nav class="navbar-modern glass">
            <div class="container nav-content-modern flex-row align-center justify-between">
                <a href="${basePath}/index.html" class="logo-modern text-white">
                    <img src="${basePath}/assets/images/easy-drive-logo.png" alt="Easy-Drive.UK Logo" style="height: 50px; width: auto; object-fit: contain;">
                </a>

                <div class="contact-login flex-row align-center gap-medium">
                    <div class="opening-hours text-white text-sm border-right pr-medium hidden-mobile">
                        <span class="text-primary font-bold"><i class="fa-regular fa-clock mr-xs"></i>Mon-Fri:</span> 8am - 8pm
                    </div>
                    <div class="whatsapp text-white text-sm border-right pr-medium hidden-mobile">
                        <a href="https://wa.me/447777777777" class="text-white hover-text-primary transition-fast">
                            <span class="text-primary font-bold"><i class="fa-brands fa-whatsapp mr-xs"></i></span>
                            07777777777
                        </a>
                    </div>
                    <div class="google-rating-nav flex-row align-center gap-xs text-white text-sm border-right pr-medium hidden-mobile">
                        <i class="fa-brands fa-google text-lg"></i>
                        <span class="font-bold">4.9/5</span>
                        <div class="stars text-warning flex-row text-xs gap-xs">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div class="social-nav flex-row gap-sm text-lg">
                        <a href="#" class="text-white hover-text-primary transition-fast"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="text-white hover-text-primary transition-fast"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="text-white hover-text-primary transition-fast"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
            </div>

            <div class="nav-links-modern border-top-subtle">
                <div class="container flex-row justify-around py-sm font-bold text-white text-sm">
                    <a href="${basePath}/index.html" class="hover-text-primary text-white">HOME</a>
                    <a href="${basePath}/pages/about.html" class="hover-text-primary text-white">ABOUT US</a>
                    <a href="${basePath}/pages/courses.html" class="hover-text-primary text-white">COURSES</a>
                    <a href="${basePath}/pages/reviews.html" class="hover-text-primary text-white">REVIEWS</a>
                    <a href="${basePath}/pages/show-me-tell-me.html" class="hover-text-primary text-white">SHOW ME TELL ME</a>
                    <a href="${basePath}/pages/contact.html" class="hover-text-primary text-white">CONTACT US</a>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('site-header', SiteHeader);
