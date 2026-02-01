const noBtn = document.getElementById('no-btn');
const modalContainer = document.getElementById('modal-container');

// Listen for mouse movement over the entire modal container
modalContainer.addEventListener('mousemove', (e) => {
    // Get the position and size of the "No" button and the container
    const noBtnRect = noBtn.getBoundingClientRect();
    const containerRect = modalContainer.getBoundingClientRect();
    
    // Calculate the distance from the cursor to the center of the "No" button
    const distanceX = e.clientX - (noBtnRect.left + noBtnRect.width / 2);
    const distanceY = e.clientY - (noBtnRect.top + noBtnRect.height / 2);

    // If the cursor is close to the button (e.g., within 50px), move it
    if (Math.abs(distanceX) < 50 && Math.abs(distanceY) < 50) {
        // Calculate a new, random position within the container boundaries
        const newX = Math.random() * (containerRect.width - noBtnRect.width);
        const newY = Math.random() * (containerRect.height - noBtnRect.height);
        
        // Apply the new position
        noBtn.style.position = 'absolute';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    }
});

// Add a click handler for "No" just in case someone manages to click it
noBtn.addEventListener('click', () => {
    alert('Nice try! But you can only say Yes.');
});
