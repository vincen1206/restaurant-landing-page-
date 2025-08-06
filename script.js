// Smooth scroll
document.querySelectorAll('a.nav-item[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });
  
  // Scroll to top button
  const scrollBtn = document.createElement('button');
  scrollBtn.innerText = '↑';
  scrollBtn.className = 'scroll-top';
  document.body.appendChild(scrollBtn);
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    const header = document.querySelector('.main-header');
    header.style.boxShadow = window.scrollY > 50 ? '0 2px 10px rgba(0,0,0,0.15)' : 'none';
  });
  
  // Booking Form Submission Popup
  const bookingForm = document.querySelector('.booktable');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const [name, email, phone, date, time, note] = bookingForm.querySelectorAll('input, textarea');
  
      if (!name.value || !email.value || !phone.value || !date.value || !time.value) {
        alert('Please fill in all required fields.');
        return;
      }
  
      const alertBox = document.createElement('div');
      alertBox.className = 'popup-alert';
      alertBox.innerHTML = `
        <h3>🎉 Booking Successful!</h3>
        <p><strong>Name:</strong> ${name.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Phone:</strong> ${phone.value}</p>
        <p><strong>Date:</strong> ${date.value}</p>
        <p><strong>Time:</strong> ${time.value}</p>
        <p><strong>Note:</strong> ${note.value || 'N/A'}</p>
      `;
      document.body.appendChild(alertBox);
  
      setTimeout(() => {
        alertBox.classList.add('fadeout');
        setTimeout(() => alertBox.remove(), 1000);
      }, 5000);
  
      bookingForm.reset();
    });
  }
