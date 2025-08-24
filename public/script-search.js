const buyBtn = document.getElementById("buy-btn");
const rentBtn = document.getElementById("rent-btn");

buyBtn.addEventListener("click", () => {
    buyBtn.classList.add("active");
    rentBtn.classList.remove("active");
});

rentBtn.addEventListener("click", () => {
    rentBtn.classList.add("active");
    buyBtn.classList.remove("active");
});

// Search back-end code
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
    // Correct variable names matching the input names in the form
    const location = document.getElementById('city').value;
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;

    // Ensure you define 'availability' correctly
    const availability = document.querySelector('.toggle-btn.active').id === 'buy-btn' ? 'Buy' : 'Rent';
    const type = document.getElementById('property-type').value;
    const searchData = {
        location: location,
        minPrice: minPrice,
        maxPrice: maxPrice,
        availability: availability,
        type: type
    };

    // Validate inputs
    if (!location || !minPrice || !maxPrice || !type) {
        alert('Please fill in all the fields.');
        return;
    }

    try {
        // Use await here to ensure fetch completes before continuing
        const response = await fetch('http://localhost:3000/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchData) // Send all the necessary data
        });

        // Ensure response status is OK
        if (response.ok) {
            const data = await response.json(); // Get the response data from the backend

            // If the response contains data, store it in sessionStorage
            if (data.length > 0) {
                sessionStorage.setItem('searchResults', JSON.stringify(data));
                window.location.href = 'results.html'; // Redirect to the results page
            } else {
                alert('No properties found matching your criteria.');
            }
        } else {
            alert('No properties found matching your criteria');
        }

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while searching. Please try again.');
    }
});
