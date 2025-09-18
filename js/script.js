document.addEventListener('DOMContentLoaded', function () {
            const toggleBtn = document.getElementById('navbar-toggle-btn');
            const closeBtn = document.getElementById('navbar-close-btn');
            const mobileMenu = document.getElementById('navbar-menu');
            const backdrop = document.getElementById('navbar-backdrop');

            function openMenu() {
                mobileMenu.classList.remove('translate-x-full'); 
                mobileMenu.classList.add('translate-x-0'); 
                backdrop.classList.remove('hidden');
                setTimeout(() => {
                    backdrop.classList.add('opacity-100');
                }, 10);
                document.body.classList.add('overflow-hidden');
            }

            function closeMenu() {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                backdrop.classList.remove('opacity-100');
                setTimeout(() => {
                    backdrop.classList.add('hidden');
                }, 300);
                document.body.classList.remove('overflow-hidden');
            }

            if (toggleBtn) {
                toggleBtn.addEventListener('click', openMenu);
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', closeMenu);
            }

            if (backdrop) {
                backdrop.addEventListener('click', closeMenu);
            }

            window.addEventListener('resize', function () {
                if (window.innerWidth >= 768) {
                    closeMenu();
                }
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        if (!mobileMenu.classList.contains('translate-x-full')) {
                            closeMenu();
                        }

                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            document.getElementById('current-year').textContent = new Date().getFullYear();
        });