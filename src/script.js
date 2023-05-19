// JavaScript
const contactIcon = document.querySelector('.contactIcon');
const overlay = document.querySelector('.overlay');
const dismissButton = document.querySelector('.dismissButton');
const mainSection = document.querySelector('.mainSectionDiv');

contactIcon.addEventListener('click', function() {
  overlay.style.display = 'flex'; // Show the overlay and the pop-up
  mainSection.style.opacity = 0.5; // Apply blur effect to the main section
  mainSection.style.filter = 'blur(5px)';
});

dismissButton.addEventListener('click', function() {
  overlay.style.display = 'none'; // Hide the overlay and the pop-up
  mainSection.style.filter = 'none'; // Remove the blur effect from the main section
  mainSection.style.opacity = 1;
});