let currentIndex = 0; // Track the current index of the first visible card
const cardsToShow = 3; // Number of cards to show at once
const propertyCards = document.querySelectorAll('.property-card'); // Select all property cards
const totalCards = propertyCards.length; // Get the total number of cards

// Function to update the slider
function updateSlider() {
    // Calculate the new translate value
    const translateValue = -((currentIndex / cardsToShow) * 100);
    document.querySelector('.property-slider').style.transform = `translateX(${translateValue}%)`;
    
    // Toggle button visibility
    document.querySelector('.prev-btn').style.display = currentIndex === 0 ? 'none' : 'block';
    document.querySelector('.next-btn').style.display = currentIndex >= totalCards - cardsToShow ? 'none' : 'block';
}

// Event listeners for slider buttons
document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < totalCards - cardsToShow) {
        currentIndex += 1; // Move to the next card
    }
    updateSlider(); // Update the slider
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1; // Move to the previous card
    }
    updateSlider(); // Update the slider
});

// Initial call to position the cards correctly on page load
updateSlider();

// login-signup functionality
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            window.location.href = 'main.html'; // Redirect to main page
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});

