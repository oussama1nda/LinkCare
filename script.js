document.addEventListener('DOMContentLoaded', () => {

    // 1. FAQ Accordions (Soft Minimal)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all
            faqItems.forEach(i => i.classList.remove('active'));
            // Open clicked if it wasn't active
            if (!isActive) item.classList.add('active');
        });
    });

    // 2. Pre-Order Form Success Pulse
    const preorderForm = document.getElementById('zen-preorder');
    if (preorderForm) {
        preorderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            
            // Soft glow and "Success" pulse
            btn.innerHTML = 'Confirming...';
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.8';

            setTimeout(() => {
                btn.classList.add('success-pulse');
                btn.innerHTML = 'Transaction Secured';
                btn.style.opacity = '1';
                btn.style.backgroundColor = 'var(--sage-green)'; // Keep it green
            }, 1000);
        });
    }

    // 3. GSAP Liquid Scroll & Breath Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Floating Animation
        if (document.querySelector('.hero-float')) {
            gsap.to('.hero-float', {
                y: -30,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }

        // Soft Parallax BG
        if (document.querySelector('.hero-parallax')) {
            gsap.to('.hero-parallax', {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        // Feature "Breath" Fade-in
        const features = document.querySelectorAll('.breath-animate');
        features.forEach((feature) => {
            gsap.from(feature, {
                opacity: 0,
                y: 40,
                duration: 2,
                ease: 'power2.inOut', // Breath-like ease
                scrollTrigger: {
                    trigger: feature,
                    start: 'top 80%',
                }
            });
        });

        // Depth of field overlap blur clear
        if (document.querySelector('.overlap-img')) {
            gsap.fromTo('.overlap-img', 
                { filter: 'blur(20px)', opacity: 0.5 },
                { filter: 'blur(0px)', opacity: 1, duration: 2.5, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.overlap-img',
                        start: 'top 70%'
                    }
                }
            );
        }
    }
});
