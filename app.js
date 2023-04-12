const startMenuButton = document.getElementById('start-menu-button');
const startMenu = document.getElementById('start-menu');
const taskbar = document.getElementById('taskbar');
const startButton = document.getElementById('start-button');

// Function to toggle the visibility of the start menu
function toggleStartMenu() {
  startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
}

// Add a click event listener to the start menu button
startMenuButton.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleStartMenu();
});

// Add click event listeners to the background, taskbar, and start button to close the start menu
document.addEventListener('click', function(event) {
  if (startMenu.style.display === 'block') {
    toggleStartMenu();
  }
});

taskbar.addEventListener('click', function(event) {
  if (startMenu.style.display === 'block') {
    toggleStartMenu();
  }
});

startButton.addEventListener('click', function(event) {
  if (startMenu.style.display === 'block') {
    toggleStartMenu();
  }
});

// Add click event listeners to the submenus to close the start menu when a submenu item is clicked
const submenuLinks = document.querySelectorAll('#start-menu ul ul li a');

for (let i = 0; i < submenuLinks.length; i++) {
  const submenuLink = submenuLinks[i];
  
  submenuLink.addEventListener('click', function(event) {
    event.stopPropagation();
    
    toggleStartMenu();
    
    alert(`You clicked on ${submenuLink.innerText}`);
  });
}











