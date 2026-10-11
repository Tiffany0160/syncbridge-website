// SyncBridge Integrations website interactions
// IMPORTANT: Replace hello@yourdomain.co.za with your real business email in index.html before publishing.

const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');
const businessEmail = 'tiffanyelias22@gmail.com'; // Replace this with your actual email address.

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `API integration enquiry from ${data.get('name')}`;
    const body = [
      'New website enquiry',
      '',
      `Name: ${data.get('name')}`,
      `Business: ${data.get('business') || 'Not provided'}`,
      `Reply email: ${data.get('email')}`,
      `Service: ${data.get('service')}`,
      '',
      'Project details:',
      data.get('message')
    ].join('\n');

    if (businessEmail.includes('yourdomain.co.za')) {
      feedback.textContent = 'Before publishing, replace hello@yourdomain.co.za with your real business email in index.html and script.js.';
      return;
    }

    const mailto = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    feedback.textContent = 'Your email application should open with the enquiry prepared. Review it and press Send.';
  });
}
