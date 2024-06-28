const fish = document.getElementById('fish');

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - fish.clientWidth);
    const y = Math.random() * (window.innerHeight - fish.clientHeight);
    return { x, y };
}

function moveFish() {
    const currentPosition = { x: fish.offsetLeft, y: fish.offsetTop };
    const newPosition = getRandomPosition();

    const deltaX = newPosition.x - currentPosition.x;
    const deltaY = newPosition.y - currentPosition.y;

    const rotation = deltaX < 0 ? ' rotateY(180deg)' : ''; // Rotate only when moving in -X direction

    fish.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)${rotation}`;
}

setInterval(moveFish, 10000); // Change the interval as needed
moveFish(); // Initial placement

// ADDING SOUNDS IN THE BACKGROUND
document.addEventListener('DOMContentLoaded', function () {
    var backgroundSound = document.getElementById('backgroundSound');
   
    // Check if the browser supports the audio element
    if (backgroundSound) {
        // Play the sound
        backgroundSound.play();
    }
});



//sound by dj




