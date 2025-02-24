// Smooth scroll and tab functionality

// Tab functionality for Train Details Page
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Animation on scroll for train cards
window.addEventListener('load', function() {
  const cards = document.querySelectorAll('.train-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = index * 0.2 + 's';
  });
});
