let appleClickCounter  = 0;
const appleImage = document.querySelector('img');
const counterDisplay = document.getElementById('counter');

// image load error
appleImage.addEventListener('error', () => {
    appleImage.alt = '🍎 (Image failed to load )';
    appleImage.style.fontSize = '4rem';
    appleImage.style.display = 'inline-block';
});

// this fuction increments the apple click counter and updates the display
appleImage.addEventListener('click', () => {
    appleClickCounter++;
    counterDisplay.textContent = appleClickCounter;
});