// ===== SLIDER SCRIPT =====
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === n);
    });
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 4000);
}
autoSlide();


// ===== NAVIGATION MENU SCRIPT =====
(function(){
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks  = document.querySelector('.nav-links');
    const servicesToggle = document.querySelector('.services-toggle');
    const dropdown = document.querySelector('.dropdown-content');
    const hasDropdownLi = document.querySelector('.has-dropdown');

    // Toggle main nav (mobile)
    menuToggle && menuToggle.addEventListener('click', function(){
        const isOpen = navLinks.classList.toggle('open');
        this.setAttribute('aria-expanded', String(isOpen));

        if(!isOpen && dropdown) { 
            dropdown.classList.remove('open'); 
            servicesToggle && servicesToggle.setAttribute('aria-expanded', 'false'); 
            hasDropdownLi && hasDropdownLi.classList.remove('open'); 
            hasDropdownLi && hasDropdownLi.classList.remove('closed');
        }
    });

    // Toggle services submenu
    servicesToggle && servicesToggle.addEventListener('click', function(e){
        e.preventDefault();
        const open = dropdown.classList.toggle('open');
        this.setAttribute('aria-expanded', String(open));
        hasDropdownLi && hasDropdownLi.classList.toggle('open', open);
        open ? hasDropdownLi.classList.remove('closed') : hasDropdownLi.classList.add('closed');
    });

    // Reset closed state on hover out
    hasDropdownLi && hasDropdownLi.addEventListener('mouseleave', function(){
        this.classList.remove('closed');
    });

    // Close menus when clicking outside
    document.addEventListener('click', function(e){
        const insideNav = e.target.closest('.navbar');
        if(!insideNav){
            if(navLinks.classList.contains('open')) { 
                navLinks.classList.remove('open'); 
                menuToggle && menuToggle.setAttribute('aria-expanded','false'); 
            }
            if(dropdown.classList.contains('open')){ 
                dropdown.classList.remove('open'); 
                servicesToggle && servicesToggle.setAttribute('aria-expanded','false'); 
                hasDropdownLi && hasDropdownLi.classList.remove('open'); 
                hasDropdownLi && hasDropdownLi.classList.add('closed');
            }
        }
    });

    // Close menus on ESC key
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            if(navLinks.classList.contains('open')) { 
                navLinks.classList.remove('open'); 
                menuToggle && menuToggle.setAttribute('aria-expanded','false'); 
            }
            if(dropdown.classList.contains('open')){ 
                dropdown.classList.remove('open'); 
                servicesToggle && servicesToggle.setAttribute('aria-expanded','false'); 
                hasDropdownLi && hasDropdownLi.classList.remove('open'); 
                hasDropdownLi && hasDropdownLi.classList.add('closed');
            }
        }
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(a=>{
        a.addEventListener('click', ()=>{
            if(navLinks.classList.contains('open')) {
                navLinks.classList.remove('open'); 
                menuToggle && menuToggle.setAttribute('aria-expanded','false');
            }
        });
    });
})();