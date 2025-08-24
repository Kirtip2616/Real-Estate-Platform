const slider = document.querySelector('.image-slider');
const totalCards = document.querySelectorAll('.image-card').length;
let currentIndex = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateSlider();
    }
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const offset = -currentIndex * document.querySelector('.image-card').offsetWidth; // Dynamic width
    slider.style.transform = `translateX(${offset}px)`;
}

updateSlider();

let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const serviceID = 'service_l0odwsv'; 
    const templateID = 'template_upmmcyl';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const tour_request = document.getElementById('tour_request').checked ? 'on' : 'off';

    const formData = { name, email, phone, message, tour_request };

    // EmailJS
    emailjs.send(serviceID, templateID, formData)
       


    fetch('http://localhost:3000/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to submit form.');
            return response.text();
        })
        .then(data => {
            console.log('Form submitted:', data);
            document.getElementById('contactForm').reset(); // 
            closePopup();
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('There was an error with your submission.');
        });
});
