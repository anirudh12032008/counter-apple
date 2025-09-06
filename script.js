let appleClickCounter  = 0;
const appleImageElement = document.querySelector('img');
const counterDisplayElement = document.getElementById('counter');
const errorMessage = document.getElementById('err');

// successful script load
errorMessage.style.display = 'none';

// image load error
appleImageElement.addEventListener('error', () => {
    appleImageElement.alt = '🍎 (Image failed to load )';
    appleImageElement.style.fontSize = '4rem';
    appleImageElement.style.display = 'inline-block';
});

// Increment apple click counter and update UI display
appleImageElement.addEventListener('click', () => {
    appleClickCounter++;
    if (counterDisplayElement) {
        counterDisplayElement.textContent = appleClickCounter;
    } else {
        console.error("Counter display element not found.");
    }
});