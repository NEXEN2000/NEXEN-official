document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка к секциям при клике на ссылки меню
    const links = document.querySelectorAll('.scroll-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Мерцание заголовка hero
    const heroTitle = document.querySelector('.hero h2');
    setInterval(() => {
      heroTitle.style.opacity = heroTitle.style.opacity === '1' ? '0.6' : '1';
    }, 1000);
  });