// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');
//     const statusMessage = document.getElementById('statusMessage');
  
//     contactForm.addEventListener('submit', function (event) {
//       event.preventDefault();
  
//       const formData = new FormData(contactForm);
  
//       fetch(contactForm.action, {
//         method: 'POST',
//         body: formData
//       })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           statusMessage.innerHTML = '<p class="text-success">Your message has been sent successfully!</p>';
//           contactForm.reset();
//         } else {
//           statusMessage.innerHTML = '<p class="text-danger">Something went wrong. Please try again later.</p>';
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         statusMessage.innerHTML = '<p class="text-danger">Something went wrong. Please try again later.</p>';
//       });
//     });
//   });
