let appleClickCounter = 0;

// Group element 
const elements = {
    appleImage: document.querySelector('img'),
    counterDisplay: document.getElementById('counter'),
    errorMessage: document.getElementById('err')
};

// successful script load
elements.errorMessage.style.display = 'none';

// image load error
elements.appleImage.addEventListener('error', () => {
    elements.appleImage.alt = '🍎 (Image failed to load )';
    elements.appleImage.style.fontSize = '4rem';
    elements.appleImage.style.display = 'inline-block';
});

// Handle apple click: Increment counter and update display
elements.appleImage.addEventListener('click', () => {
    appleClickCounter++;
    if (elements.counterDisplay) {
        elements.counterDisplay.textContent = appleClickCounter;
    } else {
        console.error("Counter display element not found.");
    }
});