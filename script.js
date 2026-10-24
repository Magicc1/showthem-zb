// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburgerBtn && mobileMenu) {
    // Toggle menu on hamburger button click
    hamburgerBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });

    // Close menu when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Modal functionality for data-open-modal links
  const modalLinks = document.querySelectorAll('[data-open-modal]');
  modalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Trigger wallet modal if wallet-modal.js is loaded
      if (window.openWalletModal) {
        window.openWalletModal();
      }
    });
  });

  // Fix Issue button handler (if exists)
  const fixIssueBtn = document.getElementById('fixIssueBtn');
  if (fixIssueBtn) {
    fixIssueBtn.addEventListener('click', function() {
      console.log('Fix Issue button clicked');
      // Add your fix issue logic here
    });
  }

  // Join button handler (if exists)
  const joinBtn = document.getElementById('joinBtn');
  if (joinBtn) {
    joinBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Trigger wallet modal if wallet-modal.js is loaded
      if (window.openWalletModal) {
        window.openWalletModal();
      }
    });
  }
});
