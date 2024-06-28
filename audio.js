//  get started bale page me sound 
 document.querySelectorAll('.main-but').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sound = document.getElementById('hover-sound');
      sound.currentTime = 0; // Rewind to start
      sound.play();
    });
  });

// get started page sound end

// aabb signup page ka sound
 document.querySelectorAll('.input-box').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sound = document.getElementById('hover-sound');
      sound.currentTime = 0; // Rewind to start
      sound.play();
    });
  });
 