document.getElementById("year").innerHTML = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', () => {
    function showContent(contentId) {
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        document.body.appendChild(backdrop);
        
        const section = document.getElementById(contentId);
        section.classList.add('active');
        backdrop.classList.add('active');

        backdrop.addEventListener('click', closeAllContent);
        
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') closeAllContent();
        });
    }

    function closeAllContent() {
        document.querySelectorAll('.content-section, .modal-backdrop').forEach(el => {
            el.classList.remove('active');
        });
        setTimeout(() => {
            const backdrop = document.querySelector('.modal-backdrop');
            if(backdrop) backdrop.remove();
        }, 300);
    }

    document.querySelectorAll('.datapack-box').forEach(box => {
        box.addEventListener('click', () => {
            const contentId = box.dataset.content;
            showContent(contentId);
        });
    });

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeAllContent);
    });

    function handleCarousel(e) {
        const carousel = e.target.closest('.image-carousel');
        if(!carousel) return;

        const images = carousel.querySelectorAll('img');
        const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
        
        images.forEach(img => img.classList.remove('active'));
        
        let newIndex = activeIndex;
        if(e.target.classList.contains('next-btn')) {
            newIndex = (activeIndex + 1) % images.length;
        } else if(e.target.classList.contains('prev-btn')) {
            newIndex = (activeIndex - 1 + images.length) % images.length;
        }
        
        images[newIndex].classList.add('active');
    }

    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', handleCarousel);
    });

    function updateTimeBackground() {
        const hour = new Date().getHours();
        document.body.style.setProperty('--primary', hour >= 18 || hour < 6 ? '#9b59b6' : '#2ecc71');
    }
    setInterval(updateTimeBackground, 60000);
    updateTimeBackground();
});

