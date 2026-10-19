/**
 * DIDI CABELOS - JAVASCRIPT LOGIC
 * High-End Brazilian Salon & Hair Boutique
 * Imperatriz - MA | WhatsApp: (99) 98156-2202
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initServiceFilters();
  initGalleryLightbox();
  initBookingCalculator();
  initOperatingHours();
  initCareChecklist();
  initScrollAnimations();
});

/* ==========================================================================
   1. Header Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.main-header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header class toggle
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightCurrentSection();
  });

  // Open Drawer
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close Drawer
  const closeMenu = () => {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (drawerClose) drawerClose.addEventListener('click', closeMenu);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMenu);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Scrollspy navigation highlight
  function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  }
}

/* ==========================================================================
   2. Services & Boutique Category Filters
   ========================================================================== */
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   3. Photo Gallery & Lightbox Viewer
   ========================================================================== */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');

  let currentIndex = 0;
  const itemsArray = Array.from(galleryItems);

  function openLightbox(index) {
    currentIndex = index;
    const item = itemsArray[currentIndex];
    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || 'Didi Cabelos';
    const tag = item.getAttribute('data-tag') || '';

    lightboxImg.src = img.src;
    lightboxCaption.innerHTML = `<strong>${title}</strong> ${tag ? '— ' + tag : ''}`;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % itemsArray.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + itemsArray.length) % itemsArray.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  // Close with Escape and navigate with arrows
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Close when clicking modal backdrop
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // Gallery category filter buttons
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-gallery-filter');
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-gallery-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Interactive Agendamento & WhatsApp Quote Generator
   ========================================================================== */
function initBookingCalculator() {
  const serviceSelect = document.getElementById('bookingService');
  const lengthSelect = document.getElementById('bookingLength');
  const dateInput = document.getElementById('bookingDate');
  const timeSelect = document.getElementById('bookingTime');
  const nameInput = document.getElementById('bookingName');
  const notesInput = document.getElementById('bookingNotes');
  const previewBox = document.getElementById('bookingMessagePreview');
  const submitBtn = document.getElementById('bookingSubmitBtn');

  // Pre-fill tomorrow's date as min
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  function updatePreview() {
    const serviceName = serviceSelect.options[serviceSelect.selectedIndex]?.text || 'Serviço Personalizado';
    const lengthVal = lengthSelect.value ? lengthSelect.options[lengthSelect.selectedIndex].text : 'A combinar';
    const dateVal = dateInput.value ? formatDateBR(dateInput.value) : 'Data flexível';
    const timeVal = timeSelect.value || 'Qualquer horário disponível';
    const nameVal = nameInput.value.trim() || 'Cliente Especial';
    const notesVal = notesInput.value.trim() ? `\n📌 Observações: ${notesInput.value.trim()}` : '';

    const text = `Olá Didi Cabelos! 💛
Gostaria de agendar um horário com vocês:

✨ *Serviço:* ${serviceName}
📏 *Comprimento/Fibra:* ${lengthVal}
📅 *Data Desejada:* ${dateVal}
⏰ *Período/Horário:* ${timeVal}
👤 *Meu Nome:* ${nameVal}${notesVal}

Poderia me confirmar a disponibilidade e o valor certinho? Muito obrigada!`;

    if (previewBox) {
      previewBox.textContent = text;
    }

    return text;
  }

  function formatDateBR(dateString) {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString;
  }

  // Event listeners for inputs
  [serviceSelect, lengthSelect, dateInput, timeSelect, nameInput, notesInput].forEach(elem => {
    if (elem) {
      elem.addEventListener('input', updatePreview);
      elem.addEventListener('change', updatePreview);
    }
  });

  // Initial update
  updatePreview();

  // Handle Form Submission -> Open WhatsApp
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = updatePreview();
      const encodedMsg = encodeURIComponent(message);
      const phoneNumber = '5599981562202'; // Didi Cabelos WhatsApp
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Pre-select service when clicking "Quero Este Estilo" on cards
  window.selectServiceAndScroll = function(serviceVal) {
    if (serviceSelect) {
      serviceSelect.value = serviceVal;
      updatePreview();
    }
    const bookingSec = document.getElementById('agendamento');
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

/* ==========================================================================
   5. Real-time Operating Hours Indicator
   ========================================================================== */
function initOperatingHours() {
  const statusBadge = document.getElementById('hoursStatusBadge');
  if (!statusBadge) return;

  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const currentHour = now.getHours();

  // Didi Cabelos hours: Mon-Sat 08:00 to 18:00
  const isSunday = (dayOfWeek === 0);
  const isOpenHours = (currentHour >= 8 && currentHour < 18);

  if (!isSunday && isOpenHours) {
    statusBadge.className = 'hours-badge open';
    statusBadge.innerHTML = '<i class="fa-solid fa-circle"></i> Aberto Agora (Até às 18h)';
  } else {
    statusBadge.className = 'hours-badge closed';
    statusBadge.innerHTML = '<i class="fa-regular fa-clock"></i> Fechado no momento (Deixe sua mensagem no WhatsApp)';
  }
}

/* ==========================================================================
   6. Interactive Hair Care Checklist
   ========================================================================== */
function initCareChecklist() {
  const careItems = document.querySelectorAll('.care-item');
  careItems.forEach(item => {
    item.addEventListener('click', () => {
      const checkbox = item.querySelector('.care-checkbox i');
      if (checkbox) {
        if (checkbox.classList.contains('fa-check')) {
          checkbox.className = 'fa-solid fa-heart';
          item.style.borderColor = 'var(--primary-gold-bright)';
        } else {
          checkbox.className = 'fa-solid fa-check';
          item.style.borderColor = '';
        }
      }
    });
  });
}

/* ==========================================================================
   7. Scroll Animations & Reveal
   ========================================================================== */
function initScrollAnimations() {
  // Simple intersection observer for smooth entry effects
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .testimonial-card, .gallery-item, .trust-item').forEach(el => {
    observer.observe(el);
  });
}
