// santa

window.onload = function() {
  const image = document.getElementById('santa');
  image.style.transition = 'all 2s ease-in'; 
  image.style.top = 350 + 'px'; 
  image.style.left = 100 + 'px';
};


// panel
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('mouseover', () => {
      removeActiveClasses();
      panel.classList.add('active');
  })
})
  function removeActiveClasses(){
    panels.forEach(panel => {
      panel.classList.remove('active');
    })
  }

