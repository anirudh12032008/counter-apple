let count = 0;
document.querySelector('img').onclick = () => {
    count++;
    document.getElementById('counter').textContent = count;
};