// adding sounds to the navbar options 

  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sound = document.getElementById('hover-sound');
      sound.currentTime = 0; // Rewind to start
      sound.play();
    });
  });

  document.querySelectorAll('.uh-box').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sound = document.getElementById('hover-sound-nav');
      sound.currentTime = 0; // Rewind to start
      sound.play();
    });
  });

  document.querySelectorAll('.sh-box').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sound = document.getElementById('hover-sound-nav');
      sound.currentTime = 0; // Rewind to start
      sound.play();
    });
  });

    document.querySelectorAll('.logo').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const sound = document.getElementById('hover-sound-nav');
      sound.currentTime = 0; // Rewind to start
      sound.play();
    });
  });

