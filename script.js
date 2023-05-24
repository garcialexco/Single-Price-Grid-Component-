var darkmodeToggle = document.getElementById("dark-mode-toggle");

darkmodeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.comp--cell1').classList.toggle('dark-mode');
  document.querySelector('.comp--cell2').classList.toggle('dark-mode');
  document.querySelector('.comp--cell3').classList.toggle('dark-mode');
  document.querySelector('.switch--title').classList.toggle('dark-mode');
  document.querySelector('.cell3--title').classList.toggle('dark-mode');
});