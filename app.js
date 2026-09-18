// Gospel Pillars Church Ikeja - Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initMobileMenu();
  initCopyButtons();
  initModals();
  initForms();
});

// Toast Helper
function showToast(message, icon = 'check_circle') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="material-symbols-outlined text-celestial-gold">${icon}</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Next Service Countdown
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');
  const serviceNameEl = document.getElementById('cd-service-name');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function getNextServiceTarget() {
    const now = new Date();
    // Nigeria is UTC+1 (WAT)
    // Target Sunday 8:00 AM WAT or Wednesday 7:00 PM WAT
    const day = now.getDay(); // 0 = Sunday, 3 = Wednesday
    let target = new Date(now);

    // If currently Sunday before 8:00 AM
    if (day === 0 && now.getHours() < 8) {
      target.setHours(8, 0, 0, 0);
      if (serviceNameEl) serviceNameEl.innerText = "Sunday Glory Celebration (1st Service: 8:00 AM)";
      return target;
    }
    // If currently Wednesday before 7:00 PM (19:00)
    if (day === 3 && now.getHours() < 19) {
      target.setHours(19, 0, 0, 0);
      if (serviceNameEl) serviceNameEl.innerText = "Wednesday Word & Miracle Encounter (7:00 PM)";
      return target;
    }

    // Determine whether next upcoming service is Wednesday or Sunday
    // Days until next Wednesday (3) or next Sunday (0)
    let daysToWed = (3 - day + 7) % 7;
    let daysToSun = (7 - day) % 7;

    if (daysToWed === 0 && now.getHours() >= 19) daysToWed = 7;
    if (daysToSun === 0 && now.getHours() >= 12) daysToSun = 7;

    if (daysToWed < daysToSun) {
      target.setDate(now.getDate() + daysToWed);
      target.setHours(19, 0, 0, 0);
      if (serviceNameEl) serviceNameEl.innerText = "Wednesday Word & Miracle Encounter (7:00 PM)";
    } else {
      target.setDate(now.getDate() + daysToSun);
      target.setHours(8, 0, 0, 0);
      if (serviceNameEl) serviceNameEl.innerText = "Sunday Glory Celebration (8:00 AM & 9:15 AM)";
    }

    return target;
  }

  let nextTarget = getNextServiceTarget();

  function update() {
    const now = new Date();
    let diff = nextTarget - now;

    if (diff <= 0) {
      nextTarget = getNextServiceTarget();
      diff = nextTarget - now;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysEl.innerText = d.toString().padStart(2, '0');
    hoursEl.innerText = h.toString().padStart(2, '0');
    minutesEl.innerText = m.toString().padStart(2, '0');
    secondsEl.innerText = s.toString().padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Copy Bank Accounts
function initCopyButtons() {
  document.querySelectorAll('.copy-account-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const account = btn.getAttribute('data-account');
      const bankName = btn.getAttribute('data-bank') || 'Zenith Bank PLC';
      const label = btn.getAttribute('data-label') || 'Account';
      
      if (account) {
        navigator.clipboard.writeText(account).then(() => {
          showToast(`${label} copied: ${account} (${bankName})`);
        }).catch(() => {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = account;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast(`${label} copied: ${account} (${bankName})`);
        });
      }
    });
  });
}

// Mobile Navigation
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawer = document.getElementById('close-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  function openMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('translate-x-full');
    if (drawerBackdrop) drawerBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('translate-x-full');
    if (drawerBackdrop) drawerBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (closeDrawer) closeDrawer.addEventListener('click', closeMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMenu);

  // Close when clicking nav link inside mobile drawer
  document.querySelectorAll('#mobile-drawer a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Video & Info Modals
function initModals() {
  const videoModal = document.getElementById('video-modal');
  const videoIframe = document.getElementById('modal-video-iframe');
  const openVideoBtns = document.querySelectorAll('.open-video-btn');
  const closeVideoBtn = document.getElementById('close-video-modal');

  function openVideo(url) {
    if (videoIframe) {
      videoIframe.src = url.includes('embed') ? url : 'https://www.youtube.com/embed/live_stream?channel=UCisaiahmacwealth';
    }
    if (videoModal) {
      videoModal.classList.add('active');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeVideo() {
    if (videoIframe) videoIframe.src = '';
    if (videoModal) {
      videoModal.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    }
  }

  openVideoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoUrl = btn.getAttribute('data-video-url') || 'https://www.youtube.com/embed/OPERFrYRwPQ';
      openVideo(videoUrl);
    });
  });

  if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideo();
    });
  }
}

// Form Handlers
function initForms() {
  const visitForm = document.getElementById('visit-prayer-form');
  if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('guest-name')?.value || 'Friend';
      showToast(`Thank you, ${name}! Your request has been sent to our pastoral team.`);
      visitForm.reset();
    });
  }
}
