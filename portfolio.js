// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Button interactions
const projectCta = document.getElementById('projectCta');
const contactCta = document.getElementById('contactCta');
const resumeBtn = document.getElementById('resumeBtn');

if (projectCta) {
  projectCta.addEventListener('click', () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  });
}

if (contactCta) {
  contactCta.addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// Resume button opens Google Drive link
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    const resumeUrl = 'https://docs.google.com/document/d/1T1yh66OvrEfkvSwyMvteQrTf-Z5kQ701EvDrhrgV4bc/edit?usp=drivesdk';
    window.open(resumeUrl, '_blank');
  });
}

// Contact form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = form.querySelector('input[placeholder="Your name"]');
    const emailInput = form.querySelector('input[placeholder="Email address"]');
    const msgText = form.querySelector('textarea');
    
    if (!nameInput?.value.trim() || !emailInput?.value.trim() || !msgText?.value.trim()) {
      alert("⚠️ Please fill all required fields before sending.");
    } else if (!emailInput.value.includes('@')) {
      alert("⚠️ Please enter a valid email address.");
    } else {
      alert("✨ Thanks for reaching out! Samarth will get back to you within 24 hours.");
      form.reset();
    }
  });
}

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .learning-card, .highlight-card').forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});