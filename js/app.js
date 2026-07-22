// CAIBEM Website Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  const data = window.CAIBEM_DATA;
  if (!data) return;

  // Global State for Lightbox Modal
  let currentGallery = [];
  let currentIndex = 0;

  // Initialize Elements & Render
  initTheme();
  renderHeroAndStats();
  renderActivities();
  renderTimeline('all');
  renderBingo();
  setupEventListeners();

  // Theme Switcher
  function initTheme() {
    const savedTheme = localStorage.getItem('caibem_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('caibem_theme', next);
        updateThemeIcon(next);
      });
    }
  }

  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  // Stats Counter
  function renderHeroAndStats() {
    const statsContainer = document.getElementById('stats-container');
    if (!statsContainer) return;

    statsContainer.innerHTML = data.stats.map(s => `
      <div class="stat-item">
        <div class="stat-value" data-value="${s.value}">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // Activities Section
  function renderActivities() {
    const container = document.getElementById('activities-grid');
    if (!container) return;

    container.innerHTML = data.activities2025.map(act => {
      const coverImg = act.images[0] || 'public/media/image1.png';
      return `
        <div class="activity-card">
          <div class="card-img-holder" onclick="openLightbox('${act.title}', '${act.description}', ${JSON.stringify(act.images).replace(/"/g, '&quot;')}, 0)">
            <img src="${coverImg}" alt="${act.title}" loading="lazy" />
            <span class="card-badge">${act.badge}</span>
            <span class="card-photo-count"><i class="fa-solid fa-images"></i> ${act.images.length} fotos</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">${act.title}</h3>
            <p class="card-desc">${act.description}</p>
            <div class="card-actions">
              <button class="btn-link" onclick="openLightbox('${act.title}', '${act.description}', ${JSON.stringify(act.images).replace(/"/g, '&quot;')}, 0)">
                Ver Fotos <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Timeline & Reforms Section
  function renderTimeline(filter = 'all') {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    let phases = data.reforms2026.phases;
    if (filter !== 'all') {
      phases = phases.filter(p => p.type === filter);
    }

    container.innerHTML = phases.map(phase => {
      const firstImgs = phase.images.slice(0, 4);
      const remainingCount = phase.images.length - 4;

      return `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="status-pill ${phase.type}">${phase.statusTag}</span>
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);"><i class="fa-solid fa-camera"></i> ${phase.images.length} Fotos</span>
            </div>
            <h3 class="timeline-title">${phase.title}</h3>
            <p class="timeline-desc">${phase.description}</p>
            
            <ul style="list-style: none; margin-bottom: 1rem;">
              ${phase.details.map(d => `<li style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 4px;"><i class="fa-solid fa-check" style="color: var(--primary-600); margin-right: 6px;"></i>${d}</li>`).join('')}
            </ul>

            <div class="photo-mini-grid">
              ${firstImgs.map((img, idx) => `
                <div class="photo-thumb" onclick="openLightbox('${phase.title}', '${phase.description}', ${JSON.stringify(phase.images).replace(/"/g, '&quot;')}, ${idx})">
                  <img src="${img}" alt="${phase.title}" loading="lazy" />
                  ${idx === 3 && remainingCount > 0 ? `<div class="more-photos-overlay">+${remainingCount}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Bingo Section
  function renderBingo() {
    const container = document.getElementById('bingo-container');
    if (!container) return;

    container.innerHTML = `
      <div class="bingo-card">
        <div class="bingo-content">
          <span class="hero-badge"><i class="fa-solid fa-ticket"></i> Evento de Apoio</span>
          <h3>${data.bingo.title}</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">
            ${data.bingo.subtitle}
          </p>
          <p style="font-size: 0.95rem; margin-bottom: 2rem;">
            ${data.bingo.description}
          </p>
          <button class="btn-primary" onclick="openLightbox('${data.bingo.title}', '${data.bingo.subtitle}', ${JSON.stringify(data.bingo.images).replace(/"/g, '&quot;')}, 0)">
            <i class="fa-solid fa-images"></i> Galeria do Bingo
          </button>
        </div>
        <div class="bingo-gallery">
          ${data.bingo.images.map((img, idx) => `
            <img src="${img}" alt="Bingo CAIBEM" onclick="openLightbox('${data.bingo.title}', '${data.bingo.subtitle}', ${JSON.stringify(data.bingo.images).replace(/"/g, '&quot;')}, ${idx})" loading="lazy" />
          `).join('')}
        </div>
      </div>
    `;
  }


  // Setup Filtering & Event Listeners
  function setupEventListeners() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        const filter = e.target.getAttribute('data-filter');
        renderTimeline(filter);
      });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.className = navLinks.classList.contains('mobile-open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
          const icon = mobileMenuBtn.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        });
      });
    }

    // Lightbox Controls
    const closeBtn = document.getElementById('modal-close');
    const overlay = document.getElementById('modal-overlay');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!overlay || !overlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
    });
  }

  // Global Lightbox Modal Functions
  window.openLightbox = function(title, description, imagesArray, startIndex = 0) {
    if (!imagesArray || imagesArray.length === 0) return;
    currentGallery = imagesArray;
    currentIndex = startIndex;

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = description;

    updateLightboxImage();
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function updateLightboxImage() {
    const imgEl = document.getElementById('modal-img');
    const counterEl = document.getElementById('modal-counter');
    
    if (imgEl && currentGallery[currentIndex]) {
      imgEl.src = currentGallery[currentIndex];
    }
    if (counterEl) {
      counterEl.textContent = `Imagem ${currentIndex + 1} de ${currentGallery.length}`;
    }
  }

  function showPrevImage() {
    if (currentGallery.length <= 1) return;
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxImage();
  }

  function showNextImage() {
    if (currentGallery.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateLightboxImage();
  }
});
